#!/usr/bin/env python3
# Audit verbatim du corpus Vigie contre les referentiels de ressources/<referentiel>/.
#
# Usage : python3 scripts/audit-verbatim.py   (necessite node 24+ et les textes
# extraits dans ressources/<referentiel>/, voir ressources/README.md).
#
# Verifie pour chaque carte non-paraphrase que chaque citation « ... » du detail
# figure mot pour mot dans le texte du referentiel cite (tolerance : appels de
# notes inline et cesures de l'extraction PDF). Les cartes de WEB_VERIFIED ont
# ete confrontees mot a mot aux pages officielles (Legifrance, ANSSI, SGDSN)
# le 2026-06-11 ; les re-verifier a chaque evolution de ces pages.
import json, re, pathlib, unicodedata

ROOT = pathlib.Path(__file__).resolve().parent.parent
TXT = ROOT / "ressources"
# Le corpus est dumpe par Node (source de verite : les modules TS).
import subprocess, tempfile, os
_tmp = tempfile.mktemp(suffix=".json")
subprocess.run(["node", "--input-type=module", "-e",
    "import { REFERENTIELS } from './src/content/index.ts';"
    "import { writeFileSync } from 'node:fs';"
    f"writeFileSync('{_tmp}', JSON.stringify(REFERENTIELS));"], check=True, cwd=ROOT)
corpus = json.load(open(_tmp)); os.unlink(_tmp)

SRC_TXT = {
    "igi1300": ["dr-ii901/igi-1300-20210809.txt"],
    "igi1300-an1": ["dr-ii901/igi-1300-20210809.txt"],
    "pg075": ["dr-ii901/anssi-pg-075-v1.2.txt"],
    "reco-cloud-2024": ["dr-ii901/anssi-reco-cloud-si-sensibles-2024.txt"],
    "ii901": ["dr-ii901/ii-901-2015.txt"], "ii901-art2": ["dr-ii901/ii-901-2015.txt"],
    "ii901-art14": ["dr-ii901/ii-901-2015.txt"], "ii901-annexe2": ["dr-ii901/ii-901-2015.txt"],
    "sgdsn-plaquette": ["lpm-saiv/sgdsn-plaquette-saiv.txt"],
    "nis2-dir": ["nis2/nis2-eurlex-html.txt", "nis2/CELEX_32022L2555_FR_TXT.txt"],
    "dora-reg": ["dora/dora-eurlex-html.txt", "dora/CELEX_32022R2554_FR_TXT.txt"],
    "cer-dir": ["cer/cer-eurlex-html.txt", "cer/CELEX_32022L2557_FR_TXT.txt"],
    "rgs-corps": ["rgs/rgs-v2-corps-du-texte.txt"],
    "rgs-a1": ["rgs/rgs-v2-annexe-a1.txt"],
}

# Cartes dont TOUTES les citations ont ete verifiees mot a mot sur la page
# officielle (ou contre le PDF, extraction en colonnes faussant le matching).
WEB_VERIFIED = {
    "lpm-code-defense", "lpm-oiv-definition", "lpm-12-secteurs",
    "lpm-designation-oiv", "lpm-pso-ppp", "lpm-oiv-piv-chiffres",
    "lpm-art22-volet-cyber", "lpm-l13326-1-regles", "lpm-detection-territoire",
    "lpm-l13326-2-incidents", "lpm-l13326-3-controles", "lpm-l13327-sanctions",
    "lpm-detection-pdis-correlation",
    "lpm-r01-pssi", "lpm-r02-homologation", "lpm-r03-cartographie",
    "lpm-r04-mcs", "lpm-r05-journalisation", "lpm-r06-correlation",
    "lpm-r07-detection", "lpm-r08-incidents", "lpm-r09-alertes",
    "lpm-r10-crise", "lpm-r11-identification", "lpm-r12-authentification",
    "lpm-r13-droits-acces", "lpm-r14-comptes-admin", "lpm-r15-si-admin",
    "lpm-r16-cloisonnement", "lpm-r17-filtrage", "lpm-r18-acces-distant",
    "lpm-r19-installation", "lpm-r20-indicateurs",
    "dr-secnumcloud-ne-suffit-pas",
    "dr-homol-dr-art13", "dr-igi-ssi-exception-urgence", "dr-restreint-ue-otan",
}

def words(s):
    s = unicodedata.normalize("NFKC", s).lower()
    s = re.sub(r"(\w)-\s+(\w)", r"\1\2", s)
    return re.findall(r"[a-z0-9àâäéèêëîïôöùûüçœ]+", s)

TEXTS = {}
def tokens_for(fn):
    if fn not in TEXTS:
        TEXTS[fn] = " " + " ".join(words((TXT / fn).read_text())) + " "
    return TEXTS[fn]

def find_seg(seg_words, tokens):
    pat = r"\s" + r"\s(?:\S+\s){0,2}?".join(re.escape(w) for w in seg_words) + r"\s"
    return re.search(pat, tokens) is not None

def segments(quote):
    q = quote.replace("**", "")
    parts = re.split(r"\[(?:\.\.\.|…)\]|\[sic\]|\(\.\.\.\)|…", q)
    return [words(p) for p in parts if len(words(p)) >= 4]

ko, web, fmt = [], [], []
n_quotes = n_ok = n_webv = 0
for ref in corpus:
    src_by_id = {s["id"]: s for s in ref["sources"]}
    for c in ref["cards"]:
        cid = c["id"]
        if not c.get("exigence"): fmt.append(f'{ref["id"]}/{cid}: exigence absente')
        if c.get("detailParaphrase"): continue
        quotes = re.findall(r"«(.*?)»", c.get("detail", ""), re.S)
        if not quotes: fmt.append(f'{ref["id"]}/{cid}: ni citation ni drapeau paraphrase')
        srcs = [src_by_id[s] for s in c.get("sources", []) if s in src_by_id]
        for q in quotes:
            segs = segments(q)
            if not segs: continue
            n_quotes += 1
            if cid in WEB_VERIFIED:
                n_webv += 1
                continue
            ok = web_only = False
            files = [f for s in srcs for f in SRC_TXT.get(s["id"], [])]
            if not files:
                web.append((f'{ref["id"]}/{cid}', q[:80])); continue
            for fn in files:
                t = tokens_for(fn)
                if all(find_seg(sw, t) for sw in segs):
                    ok = True; break
            if ok: n_ok += 1
            else: ko.append((f'{ref["id"]}/{cid}', [s["id"] for s in srcs], q[:120]))

print(json.dumps({"citations": n_quotes, "ok_doc": n_ok, "ok_web_verifie": n_webv,
                  "restant_ko": len(ko), "restant_web": len(web)}, indent=1))
print("\n=== KO ===")
for cid, ss, q in ko: print(f" - {cid} [{','.join(ss)}] «{q}…»")
print("\n=== WEB NON VERIFIE ===")
for cid, q in web: print(f" - {cid} «{q}…»")
print("\n=== FORMAT ===")
for x in fmt: print(" -", x)
