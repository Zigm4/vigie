# Vigie

> Compagnon de révision du cadre réglementaire **cyber français et européen**, sans le dogme.
> Cartes, QCM et lectures **tirés directement des textes officiels**, chaque mesure indiquant son **niveau d'exigence réel** (obligatoire / recommandé / conseillé / pratique d'usage / interdit) et sa **source exacte**.

Application web **100 % statique**, pensée **mobile-first** (installable, hors-ligne), **sans compte, sans cookie, sans backend, sans publicité**.

> ⚠️ **Contenu non officiel.** Vigie est un outil pédagogique. Le contenu est tiré de sources publiques officielles mais ne se substitue pas aux textes d'origine, qui font seuls foi. Vérifiez toujours la source citée.

---

## Pourquoi ce projet existe

À l'origine, Vigie est un outil personnel : un moyen de **m'imprégner de ces sujets et de les apprendre de manière agréable**, plutôt que de relire des dizaines de pages de PDF arides. Réviser par petites sessions (cartes, QCM), n'importe où, y compris hors-ligne, en gardant en permanence le réflexe de la source.

L'autre raison est de fond : les référentiels cyber (Diffusion Restreinte / II 901, LPM/SAIV, NIS2, DORA...) sont denses, et la culture orale du métier propage des « il faut » qui ne figurent pas toujours dans les textes. Vigie répond à deux besoins :

1. **Réviser efficacement**, thème par thème, avec des cartes à double couche et des QCM corrigés.
2. **Distinguer le réel du dogme** : chaque point est rattaché à sa source précise (texte, article, version) et porte le niveau d'exigence **tel que le texte le formule**.

Exemple concret que l'app corrige : « un réseau de **classe 1** doit être isolé physiquement ». **Faux** : la classe 1 est par définition connectée à Internet via une passerelle sécurisée ; l'isolement physique caractérise la **classe 2** (II 901, annexe 2), et n'est obligatoire que lorsque les risques sont élevés.

## Le contrat éditorial : le texte exact, rien que le texte

C'est la marque du projet, vérifiée par un audit outillé :

- La couche **détail** de chaque carte restitue le **texte exact** du référentiel (verbatim entre « », avec la référence précise : article, paragraphe, recommandation). L'interprétation et la vulgarisation restent dans le résumé et l'*élément de langage*.
- Quand le texte n'est pas librement reproductible (ex. corps de l'II 901) ou qu'une fiche est une synthèse transverse, le détail est une **paraphrase fidèle signalée par une note visible** renvoyant à la source.
- Chaque carte et chaque question cite sa **source officielle avec lien direct** (Légifrance, EUR-Lex, SGDSN, cyber.gouv.fr).
- Le dossier [`ressources/`](ressources/) contient les copies locales des référentiels et leurs textes extraits ; le script [`scripts/audit-verbatim.py`](scripts/audit-verbatim.py) vérifie que **chaque citation figure mot pour mot dans le texte cité**. Les liens directs vers tous les référentiels sont dans [`ressources/LIENS.md`](ressources/LIENS.md).

## Référentiels couverts

| Référentiel | Contenu |
|---|---|
| **Diffusion Restreinte / II 901** | IGI 1300 (mention DR), II 901, guide ANSSI-PG-075 (R1 à R70), recommandations cloud 2024. 18 thèmes. |
| **LPM / OIV / SIIV (dispositif SAIV)** | Code de la défense (L. et R. 1332), volet cyber de la LPM 2013, les 20 règles SIIV de l'arrêté de 2016. |
| **NIS2 (directive UE 2022/2555)** | Socle de la directive (champ, EE/EI, art. 20-34, DNS, coopération UE) et volet français de transposition (daté et marqué « à vérifier » tant que la loi n'est pas promulguée). |
| **DORA (règlement UE 2022/2554)** | Résilience opérationnelle numérique du secteur financier : application directe, risque TIC, incidents, tests, prestataires tiers. |
| **REC / CER (directive UE 2022/2557)** | Résilience (physique) des entités critiques, jumelle de NIS2, et sa transposition française en cours. |
| **RGS v2.0** | Référentiel général de sécurité : téléservices des autorités administratives, homologation, fonctions de sécurité. |

Tous les référentiels sont en **enrichissement progressif** : chaque module est isolé sous [`src/content/`](src/content/) (sources, thèmes, cartes, QCM, table question→fiche) et en ajouter un revient à créer ses fichiers puis à l'enregistrer dans [`src/content/index.ts`](src/content/index.ts) ; l'interface s'adapte automatiquement.

## Fonctionnalités

- **Cartes de révision** à double couche : résumé + *élément de langage* prêt à l'emploi, puis **détail dépliable** citant le texte exact ; badge de **niveau d'exigence** sur chaque mesure.
- **Deck 3D** : une carte à la fois, glisser au doigt ou à la souris, flèches à l'écran ou au clavier.
- **QCM configurable** : par thème, format au choix (10 / 20 / 30 / nombre précis / tout), mode **« à revoir en priorité »**. Une réponse fausse fait passer la ou les fiches liées en « à revoir » (table de correspondance explicite, vérifiée par le test de cohérence).
- **Repères** : épingler et annoter une carte, surligner et annoter une section de lecture.
- **Suivi de progression** local : métriques globales, barres par référentiel, maîtrise par thème.
- **Lectures** : synthèses des textes, signalées comme paraphrasées avec renvoi aux sources.
- **Partage** d'une carte par lien profond (`#/carte/<id>`).
- Trois **palettes d'accent**, interface animée et fluide, `prefers-reduced-motion` respecté.

## Vie privée : rien ne quitte votre appareil

**Aucun backend.** Pas de compte, pas de cookie, pas de traceur, pas de mesure d'audience, pas de publicité ; les polices sont embarquées (aucun CDN). Votre progression (épingles, notes, réponses aux QCM, niveaux de maîtrise, palette) est enregistrée dans le **stockage local du navigateur**, sur cet appareil uniquement :

- pas de synchronisation entre appareils ;
- effacer les données de navigation supprime définitivement la progression ;
- **export / import** possible (fichier JSON) depuis la page « À propos ».

## Développement

```bash
npm install
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production -> dist/
npm run preview  # prévisualise le build
npm run check    # typecheck + test de cohérence du corpus
python3 scripts/audit-verbatim.py   # audit verbatim des citations
```

`npm run check` et l'audit exigent Node 24+ (exécution native du TypeScript).

### Règles éditoriales (pour contribuer)

- **Tirer du texte, pas de l'usage.** Chaque élément cite sa source (texte, article/annexe, version, date) avec un lien direct.
- **Détail = texte exact, interprétation à part** (voir le contrat éditorial ci-dessus). Toute paraphrase est marquée `detailParaphrase: true` et affiche une note visible.
- **Niveau d'exigence fidèle à la formulation** : « doit / interdit » → `obligatoire` ; « il est recommandé » → `recommande` ; guides non normatifs → `recommande`/`conseille` sauf s'ils restituent une obligation d'un texte contraignant.
- **Relier chaque question à une ou plusieurs fiches** (table `*.qcard-map.ts`), sans heuristique.
- En cas de doute non confirmé par une source officielle : le signaler (« à vérifier », `paraphrase: true`).
- Avant tout commit : `npm run check` et `python3 scripts/audit-verbatim.py`.

## Pile technique

- [Vite](https://vitejs.dev/) + TypeScript, **sans framework** (DOM natif).
- PWA hors-ligne via `vite-plugin-pwa` (Workbox).
- `marked` pour le rendu Markdown du contenu (de confiance, écrit par le projet).
- Routage par hash (`#/...`) → compatible hébergement statique pur.
- État local via `localStorage`.
- Polices **Geist** et **Geist Mono** self-hostées (SIL OFL 1.1).

## Déploiement (GitHub Pages)

Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construit et publie `dist/` à chaque push sur `main` (*Settings → Pages → Source : GitHub Actions*). Le `base` de Vite est relatif (`./`) : l'app fonctionne sur n'importe quel hébergement statique.

## Licences

- **Code** : licence **MIT** (voir [`LICENSE`](LICENSE)). En cas de réutilisation ou de fork, conservez la mention de paternité : nom **Vigie** et lien vers le dépôt d'origine (https://github.com/Zigm4/vigie).
- **Contenu** : synthèses originales s'appuyant sur des sources publiques (Légifrance, EUR-Lex, SGDSN, ANSSI). Le guide ANSSI-PG-075 est sous Licence Ouverte v2.0 (Etalab). Citez toujours les sources d'origine.
- **Polices** : Geist et Geist Mono, SIL Open Font License 1.1.
