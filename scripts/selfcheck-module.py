#!/usr/bin/env python3
# Auto-controle d'UN module de referentiel Vigie, avant son enregistrement dans
# l'application. Sert pendant la redaction (la verification globale restant
# scripts/audit-verbatim.py + scripts/check-content.ts une fois le module integre).
#
# Usage :
#   python3 scripts/selfcheck-module.py <module.ts> <exportName> <qcardmap.ts> <exportMap> <txt1> [txt2...]
# Exemple :
#   python3 scripts/selfcheck-module.py src/content/dora.ts dora \
#       src/content/dora.qcard-map.ts DORA_QCARD_MAP ressources/txt/dora-eurlex-html.txt
#
# Verifie :
#   - structure : ids uniques, refId/themeId/sources coherents, options de QCM ;
#   - couverture de la table question -> fiche (toutes les questions, cibles existantes) ;
#   - verbatim : chaque citation « ... » d'une carte non-paraphrase figure dans
#     l'un des textes fournis (matching par sous-sequence de mots, tolerant aux
#     appels de notes inline et aux cesures d'extraction PDF).

import json, re, subprocess, sys, tempfile, os, unicodedata, pathlib

if len(sys.argv) < 6:
    print(__doc__)
    sys.exit(2)

module, export, map_module, map_export, *txts = sys.argv[1:]
ROOT = pathlib.Path(__file__).resolve().parent.parent

tmp = tempfile.mktemp(suffix=".json")
subprocess.run(["node", "--input-type=module", "-e",
    f"import {{ {export} }} from './{module}';"
    f"import {{ {map_export} }} from './{map_module}';"
    "import { writeFileSync } from 'node:fs';"
    f"writeFileSync('{tmp}', JSON.stringify({{ ref: {export}, map: {map_export} }}));"],
    check=True, cwd=ROOT)
data = json.load(open(tmp)); os.unlink(tmp)
ref, qmap = data["ref"], data["map"]

errors = []

def words(s):
    s = unicodedata.normalize("NFKC", s).lower()
    s = re.sub(r"(\w)-\s+(\w)", r"\1\2", s)
    return re.findall(r"[a-z0-9àâäéèêëîïôöùûüçœ]+", s)

texts = [" " + " ".join(words((ROOT / t).read_text())) + " " for t in txts]

def find_seg(seg_words, tokens):
    pat = r"\s" + r"\s(?:\S+\s){0,2}?".join(re.escape(w) for w in seg_words) + r"\s"
    return re.search(pat, tokens) is not None

def segments(quote):
    q = quote.replace("**", "")
    parts = re.split(r"\[(?:\.\.\.|…)\]|\[sic\]|\(\.\.\.\)|…", q)
    return [words(p) for p in parts if len(words(p)) >= 4]

# ---- structure ----
theme_ids = {t["id"] for t in ref["themes"]}
source_ids = {s["id"] for s in ref["sources"]}
card_ids, qcm_ids = set(), set()
for c in ref["cards"]:
    if c["id"] in card_ids: errors.append(f'carte en double : {c["id"]}')
    card_ids.add(c["id"])
    if c["refId"] != ref["id"]: errors.append(f'{c["id"]}: refId incoherent')
    if c["themeId"] not in theme_ids: errors.append(f'{c["id"]}: themeId inconnu {c["themeId"]}')
    if not c.get("sources"): errors.append(f'{c["id"]}: aucune source')
    for s in c.get("sources", []):
        if s not in source_ids: errors.append(f'{c["id"]}: source inconnue {s}')
    if not c.get("short"): errors.append(f'{c["id"]}: short manquant')
    if "—" in json.dumps(c, ensure_ascii=False): errors.append(f'{c["id"]}: em-dash interdit')
for q in ref["qcm"]:
    if q["id"] in qcm_ids: errors.append(f'question en double : {q["id"]}')
    qcm_ids.add(q["id"])
    if q["refId"] != ref["id"]: errors.append(f'{q["id"]}: refId incoherent')
    if q["themeId"] not in theme_ids: errors.append(f'{q["id"]}: themeId inconnu')
    n_ok = sum(1 for o in q["options"] if o.get("correct"))
    if len(q["options"]) < 2 or n_ok == 0: errors.append(f'{q["id"]}: options invalides')
    if not q.get("explanation"): errors.append(f'{q["id"]}: explication manquante')
    for s in q.get("sources", []):
        if s not in source_ids: errors.append(f'{q["id"]}: source inconnue {s}')
    if "—" in json.dumps(q, ensure_ascii=False): errors.append(f'{q["id"]}: em-dash interdit')

# ---- table question -> fiche ----
for qid in qcm_ids:
    if not qmap.get(qid): errors.append(f'map : question sans fiche liee {qid}')
for qid, targets in qmap.items():
    if qid not in qcm_ids: errors.append(f'map : cle orpheline {qid}')
    for cid in targets:
        if cid not in card_ids: errors.append(f'map : cible inexistante {cid} (pour {qid})')

# ---- verbatim ----
n_quotes = n_ok = 0
for c in ref["cards"]:
    if c.get("detailParaphrase"):
        if not c.get("detailNote"): errors.append(f'{c["id"]}: paraphrase sans detailNote')
        continue
    quotes = re.findall(r"«(.*?)»", c.get("detail", ""), re.S)
    if not quotes: errors.append(f'{c["id"]}: ni citation « » ni drapeau paraphrase')
    for q in quotes:
        segs = segments(q)
        if not segs: continue
        n_quotes += 1
        if any(all(find_seg(sw, t) for sw in segs) for t in texts):
            n_ok += 1
        else:
            missing = [" ".join(sw)[:90] for t in texts for sw in segs if not find_seg(sw, t)]
            errors.append(f'{c["id"]}: citation non trouvee dans les sources : {missing[:2]}')

print(f'{ref["id"]} : {len(ref["cards"])} cartes, {len(ref["qcm"])} questions, '
      f'{len(qmap)} liens ; citations {n_ok}/{n_quotes} verifiees.')
if errors:
    print(f"\n{len(errors)} erreur(s) :")
    for e in errors[:60]: print(" -", e)
    sys.exit(1)
print("Module : OK.")
