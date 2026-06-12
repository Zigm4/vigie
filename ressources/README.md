# Ressources : référentiels officiels

Copies locales des textes officiels utilisés pour rédiger et **vérifier** le corpus
(cartes, QCM, lectures). Elles servent de base de travail pour créer de nouvelles
fiches et pour l'audit verbatim (`python3 scripts/audit-verbatim.py`), qui contrôle
que chaque citation « ... » des fiches figure mot pour mot dans le texte cité.

> Ces copies sont des **outils de travail**. Les fiches de l'application pointent
> toujours vers la **source publique officielle** (Légifrance, EUR-Lex, SGDSN,
> cyber.gouv.fr), jamais vers ces fichiers. En cas de doute, le document publié
> par l'éditeur officiel fait seul foi.

## Organisation : un sous-dossier par référentiel

Chaque sous-dossier contient les **PDF officiels** et leurs **extractions texte**
(`.txt`, côte à côte) utilisées par l'audit verbatim. La liste des **liens
directs** vers chaque référentiel est tenue dans [`LIENS.md`](LIENS.md).

| Dossier | Documents (téléchargés les 11-12/06/2026) |
|---|---|
| `dr-ii901/` | IGI 1300 du 09/08/2021 (SGDSN) ; II 901 du 28/01/2015 (Légifrance circulaire 39217, copie armement.defense.gouv.fr) ; guide ANSSI-PG-075 v1.2 (Licence Ouverte v2.0) ; recommandations ANSSI cloud SI sensibles (08/07/2024) |
| `lpm-saiv/` | Plaquette SAIV (SGDSN). Les textes Légifrance (code de la défense L./R.1332, LPM 2013 art. 22, arrêté du 28/11/2016) ne sont pas téléchargeables proprement : voir « Textes consultés en ligne » |
| `nis2/` | Directive (UE) 2022/2555, PDF FR (JO L 333) + version HTML EUR-Lex extraite |
| `dora/` | Règlement (UE) 2022/2554, PDF FR + version HTML EUR-Lex extraite |
| `cer/` | Directive (UE) 2022/2557, PDF FR + version HTML EUR-Lex extraite |
| `rgs/` | RGS v2.0 : corps du texte + annexe A1 (ANSSI) |

## Extraction des textes

Extraction locale avec `pdfminer.six` (préféré à pypdf : pas d'espaces parasites) :

```bash
python3 -c "from pdfminer.high_level import extract_text; print(extract_text('fichier.pdf'))"
```

Pour les textes EUR-Lex, les fichiers `*-eurlex-html.txt` proviennent de la
version **HTML** (balises retirées) : plus fiable que les PDF bi-colonnes pour la
vérification verbatim.

Limites connues des extractions : l'IGI 1300 et le PG-075 (PDF en colonnes avec
pieds de page) entrelacent parfois des fragments au milieu d'une phrase ; quelques
citations exactes sont donc vérifiées à la main et listées dans `WEB_VERIFIED`
du script d'audit.

## Textes consultés en ligne (non téléchargeables proprement)

Vérifiés mot à mot le 11/06/2026 sur les pages officielles :

- Code de la défense, partie législative L.1332-1 à L.1332-7 :
  https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071307/LEGISCTA000006166900/
- Code de la défense, partie réglementaire R.1332-1 à R.1332-42 :
  https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071307/LEGISCTA000006167383/
- Loi n°2013-1168 (LPM), article 22 : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000028338825
- Arrêté du 28/11/2016 (20 règles SIIV, annexe) : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033518925
- FAQ cloud ANSSI : https://cyber.gouv.fr/enjeux-technologiques/cloud/faq-recommandations-hebergement-cloud/
- Page SGDSN « activités d'importance vitale » (chiffres OIV/PIV) :
  https://www.sgdsn.gouv.fr/nos-missions/proteger/proteger-les-activites-indispensables-lexercice-de-lautorite-de-letat-et-au

## Droits

L'IGI 1300, le RGS, les textes Légifrance et EUR-Lex sont des documents officiels
publics. Le PG-075 est sous Licence Ouverte v2.0 (Etalab). Le corps de l'**II 901**
n'est pas librement reproductible : les fiches qui s'y rapportent sont des
paraphrases signalées (`detailParaphrase`), la copie locale ne sert qu'à la
vérification.
