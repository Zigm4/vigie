// Contenu DR / II 901, extension : structure et articles de l'II 901, catalogue
// des mesures de securite (annexe F du guide PG-075) par domaine, et
// approfondissement de l'homologation. Inclut des domaines hors perimetre du
// guide d'architecture (securite physique, developpement, continuite).
//
// Sources : texte de l'II 901 (articles 1 a 21), annexe F du guide ANSSI-PG-075
// (liste exhaustive des mesures avec leurs identifiants), IGI 1300, FAQ cloud
// ANSSI. Principe non dogmatique conserve : le caractere obligatoire ou
// recommande d'une mesure se lit a l'article 2 de l'II 901.

import type { ReviewCard, QcmQuestion } from "../types.ts";

export const drCardsExtra: ReviewCard[] = [
  // --------------------------------------------------------------------------
  // Theme : structure (articles de l'II 901)
  // --------------------------------------------------------------------------
  {
    id: "dr-struct-21-articles",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : cartographie des articles de l'II 901. Le texte des articles n'est pas librement reproductible ; se reporter à l'II 901, citée ci-dessous.",
    refId: "dr-ii901",
    themeId: "structure",
    title: "L'II 901 en 21 articles : la structure d'ensemble",
    short:
      "De l'objet et du champ (art. 1-2) aux principes (art. 3), à la sensibilité (art. 5), la gouvernance (art. 6), la maîtrise des risques (art. 7), l'homologation (art. 8, 11, 13), la protection des SI (art. 9), les incidents (art. 10), le traitement du DR (art. 14), la protection physique (art. 15), l'externalisation (art. 16) et le milieu non maîtrisé (art. 17).",
    elementDeLangage:
      "« L'II 901 ne se limite pas à la technique : elle structure la protection des SI sensibles en 21 articles, de la gouvernance à l'homologation, en passant par le physique et l'externalisation. »",
    detail:
      "Articles clés de l'II 901 :\n\n- **Art. 1-2** : définitions, champ d'application.\n- **Art. 3** : principes stratégiques (amélioration continue, défense en profondeur, produits qualifiés).\n- **Art. 5** : détermination de la sensibilité des informations.\n- **Art. 6** : gouvernance de la protection des SI.\n- **Art. 7** : maîtrise des risques.\n- **Art. 8, 11, 13** : homologation (générale, évaluation, DR).\n- **Art. 9** : protection des SI.\n- **Art. 10** : gestion des incidents.\n- **Art. 14** : traitement des informations DR.\n- **Art. 15** : protection physique des locaux.\n- **Art. 16** : externalisation.\n- **Art. 17** : utilisation en milieu non maîtrisé.\n- **Art. 18-21** : supports audiovisuels, dérogations, dispositions transitoires, abrogation.",
    sources: ["ii901", "pg075"],
    tags: ["structure", "définition"],
  },
  {
    id: "dr-struct-art3-principes",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : cartographie des articles de l'II 901. Le texte des articles n'est pas librement reproductible ; se reporter à l'II 901, citée ci-dessous.",
    refId: "dr-ii901",
    themeId: "structure",
    title: "Article 3 : les principes stratégiques",
    short:
      "L'II 901 pose des principes stratégiques : amélioration continue, défense en profondeur, et recours à des produits et prestations de sécurité qualifiés.",
    detail:
      "L'article 3 de l'II 901 énonce les principes stratégiques que déclinent ensuite les recommandations du guide : amélioration continue et réévaluation des risques (R4), défense en profondeur (R6), recours à des produits qualifiés et des prestataires de confiance (R29, R30), administration sécurisée (R62).",
    exigence: { level: "obligatoire", note: "II 901, art. 3 (principes stratégiques)" },
    sources: ["ii901", "pg075"],
    tags: ["structure", "principes"],
  },
  {
    id: "dr-struct-art14-traitement-dr",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : cartographie des articles de l'II 901. Le texte des articles n'est pas librement reproductible ; se reporter à l'II 901, citée ci-dessous.",
    refId: "dr-ii901",
    themeId: "structure",
    title: "Article 14 : traitement des informations DR",
    short:
      "C'est l'article qui fonde le choix de la classe de SI (annexe 2) et le chiffrement des informations DR par des moyens agréés. Il fait le pivot entre la mention DR (l'information) et l'architecture du SI.",
    detail:
      "L'article 14 de l'II 901 encadre le traitement des informations DR : choix de la classe de SI (notion définie à l'annexe 2) et chiffrement des informations DR par des produits agréés (recommandations R9, R19, R55).",
    exigence: { level: "obligatoire", note: "II 901, art. 14" },
    sources: ["ii901", "ii901-annexe2", "pg075"],
    tags: ["structure", "DR"],
  },
  {
    id: "dr-struct-art15-physique",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : cartographie des articles de l'II 901. Le texte des articles n'est pas librement reproductible ; se reporter à l'II 901, citée ci-dessous.",
    refId: "dr-ii901",
    themeId: "structure",
    title: "Article 15 : protection physique des locaux (hors guide PG-075)",
    short:
      "La sécurité physique relève bien de l'II 901 (art. 15) mais n'est PAS traitée par le guide d'architecture PG-075. Il faut se reporter au guide ANSSI dédié et aux mesures PHY.",
    elementDeLangage:
      "« Attention : le guide PG-075 est volontairement limité à l'architecture technique. La sécurité physique (art. 15) relève de l'II 901 mais d'un autre corpus ANSSI. »",
    detail:
      "L'article 15 impose la protection physique des locaux. Les mesures correspondantes (domaine PHY de l'annexe F : découpage en zones, contrôle d'accès physique, locaux techniques, câblage, incendie) ne sont pas couvertes par le guide PG-075, qui se limite à l'architecture technique. Un SI conforme à l'II 901 doit donc compléter le guide par ces mesures.",
    exigence: { level: "obligatoire", note: "II 901, art. 15 ; hors périmètre PG-075" },
    sources: ["ii901"],
    tags: ["structure", "physique", "hors périmètre"],
  },
  {
    id: "dr-struct-art16-externalisation",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : cartographie des articles de l'II 901. Le texte des articles n'est pas librement reproductible ; se reporter à l'II 901, citée ci-dessous.",
    refId: "dr-ii901",
    themeId: "structure",
    title: "Article 16 : externalisation",
    short:
      "L'externalisation impose des clauses de sécurité contractuelles et le recours à des prestataires de confiance. Pour le DR, SecNumCloud ne suffit pas (homologation requise).",
    detail:
      "L'article 16 encadre l'externalisation : clauses de sécurité dans les contrats (mesures ORG-TIERS, INT-PRES-CS), suivi des prestations, et préférence pour des prestataires qualifiés. Pour des données DR, la qualification SecNumCloud ne se substitue pas aux exigences réglementaires : une homologation au titre de l'II 901 reste nécessaire.",
    exigence: { level: "obligatoire", note: "II 901, art. 16" },
    sources: ["ii901", "faq-cloud"],
    tags: ["structure", "externalisation", "cloud"],
  },
  {
    id: "dr-struct-art17-milieu-non-maitrise",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : cartographie des articles de l'II 901. Le texte des articles n'est pas librement reproductible ; se reporter à l'II 901, citée ci-dessous.",
    refId: "dr-ii901",
    themeId: "structure",
    title: "Article 17 : utilisation en milieu non maîtrisé",
    short:
      "Encadre le nomadisme et l'usage hors des locaux : chiffrement des informations DR (R19) et précautions particulières (R53 à R61).",
    detail:
      "L'article 17 traite de l'utilisation des SI en milieu non maîtrisé (nomadisme). Il impose notamment le chiffrement des informations DR (R19) et des précautions particulières en situation de nomadisme, déclinées par le guide (R53 à R61 : recommandations ANSSI nomadisme, protection physique des équipements, canaux agréés DR, réseaux sans fil cloisonnés).",
    exigence: { level: "obligatoire", note: "II 901, art. 17" },
    sources: ["ii901", "pg075"],
    tags: ["structure", "nomadisme"],
  },
  {
    id: "dr-struct-art18-19",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : cartographie des articles de l'II 901. Le texte des articles n'est pas librement reproductible ; se reporter à l'II 901, citée ci-dessous.",
    refId: "dr-ii901",
    themeId: "structure",
    title: "Articles 18 et 19 : supports audiovisuels et dérogations",
    short:
      "L'II 901 traite aussi des supports audiovisuels (art. 18) et prévoit un régime d'autorisations de dérogations (art. 19).",
    detail:
      "L'article 18 vise les supports audiovisuels, et l'article 19 prévoit que des dérogations aux règles peuvent être autorisées dans un cadre défini. Ces aspects, peu connus, font partie du texte mais ne sont pas développés dans le guide d'architecture.",
    exigence: { level: "obligatoire", note: "II 901, art. 18 et 19" },
    sources: ["ii901"],
    tags: ["structure"],
  },

  // --------------------------------------------------------------------------
  // Theme : mesures (catalogue annexe F, par domaine)
  // --------------------------------------------------------------------------
  {
    id: "dr-mes-intro",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Le catalogue des mesures de sécurité de l'II 901",
    short:
      "Les mesures sont repérées par des identifiants (ex. EXP-ID-AUTH, PDT-CHIFF-SENS) et regroupées par domaines. Leur caractère obligatoire ou recommandé se lit à l'article 2, selon le régime de protection.",
    elementDeLangage:
      "« L'II 901 ne se résume pas aux classes de réseau : c'est un catalogue de mesures organisé par domaines (ORG, RH, GDB, INT, PHY, RES, EXP, PDT, DEV, TI, PCA), chacune identifiée par un code. »",
    detail:
      "L'annexe F du guide PG-075 liste de façon exhaustive les mesures de sécurité de l'II 901 et renvoie, pour chacune, aux sections du guide. Les mesures sont repérées par des identifiants à préfixe de domaine. Le caractère **obligatoire ou recommandé** de chaque mesure se déduit de l'**article 2** de l'II 901, en fonction du régime de protection (sensible ou DR).",
    sources: ["pg075", "ii901-art2"],
    tags: ["mesures", "définition"],
  },
  {
    id: "dr-mes-org",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine ORG : organisation de la SSI",
    short:
      "Organisation et pilotage de la sécurité : identification des acteurs, désignation du RSSI, formalisation des responsabilités, PSSI, gestion contractuelle des tiers.",
    detail:
      "Mesures ORG (annexe F) : ORG-SSI (organisation de la SSI), ORG-ACT-SSI (acteurs), ORG-RSSI (désignation du responsable), ORG-RESP (responsabilités), ORG-PIL-PSSI (définition et pilotage de la PSSI), ORG-TIERS (gestion contractuelle des tiers), ORG-APP-INSTR / ORG-APP-DOCS (application de l'instruction).",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "gouvernance", "hors périmètre"],
  },
  {
    id: "dr-mes-rh",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine RH : ressources humaines",
    short:
      "Charte SSI, personnels de confiance, sensibilisation des utilisateurs, gestion des arrivées/mutations/départs, et du personnel non permanent.",
    detail:
      "Mesures RH (annexe F) : RH-SSI (charte d'application), RH-MOTIV (postes clés), RH-CONF (personnels de confiance), RH-UTIL (sensibilisation des utilisateurs), RH-MOUV (arrivées, mutations, départs), RH-NPERM (stagiaires, intérimaires, prestataires). Le facteur humain est une brique à part entière de l'II 901.",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "organisationnel", "hors périmètre"],
  },
  {
    id: "dr-mes-gdb",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine GDB : gestion des biens",
    short:
      "Inventaire des ressources, cartographie, qualification des informations (sensible/DR) et protection des informations.",
    detail:
      "Mesures GDB (annexe F) : GDB-INVENT (inventaire), GDB-CARTO (cartographie), GDB-QUALIF-SENSI (qualification des informations, lien avec le marquage), GDB-PROT-IS (protection des informations).",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "biens"],
  },
  {
    id: "dr-mes-int",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine INT : intégration de la SSI et acquisition",
    short:
      "Homologation, intégration de la sécurité dans les projets et au quotidien, acquisition de produits de confiance, hébergement et clauses de sécurité.",
    detail:
      "Mesures INT (annexe F) : INT-HOMOLOG-SSI (homologation), INT-SSI (sécurité dans les projets), INT-QUOT-SSI (au quotidien), INT-AQ-PSL (acquisition de produits de sécurité et services de confiance), INT-PRES-CS (clauses de sécurité), INT-REX-AR (analyse des risques), INT-REX-HS (hébergement et clauses).",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "homologation"],
  },
  {
    id: "dr-mes-phy",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine PHY : sécurité physique (hors guide PG-075)",
    short:
      "Découpage des sites en zones, protection des locaux techniques, contrôle d'accès physique, câblage, énergie, incendie. Non traité par le guide d'architecture.",
    detail:
      "Mesures PHY (annexe F) : PHY-ZONES (zones de sécurité), PHY-PUBL / PHY-SENS (zones d'accueil du public), PHY-CI-CTRLACC (contrôle d'accès physique), PHY-CI-TRACE (traçabilité des accès), PHY-TELECOM (câblage), PHY-CI-ENERGIE / PHY-CI-CLIM / PHY-CI-INC (énergie, climatisation, incendie). Le guide PG-075 renvoie à un guide ANSSI dédié pour ces sujets.",
    exigence: { level: "obligatoire", note: "II 901, art. 15 ; hors périmètre PG-075" },
    sources: ["pg075", "ii901"],
    tags: ["mesures", "physique", "hors périmètre"],
  },
  {
    id: "dr-mes-res",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine RES : réseau",
    short:
      "Systèmes autorisés sur le réseau, interconnexions et filtrage, cloisonnement en sous-réseaux homogènes, réseaux sans fil, durcissement, changement des secrets par défaut.",
    detail:
      "Mesures RES (annexe F) : RES-MAITRISE (systèmes autorisés), RES-INTERCO / RES-ENTSOR (interconnexions et filtrage), RES-CLOIS (cloisonnement en sous-réseaux homogènes), RES-SSFIL (sans-fil), RES-SECRET (changer les éléments d'authentification par défaut), RES-DURCI (durcissement des équipements), RES-CARTO (documents d'architecture). Recoupe largement les recommandations R11 à R35.",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "réseau"],
  },
  {
    id: "dr-mes-exp",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine EXP : exploitation (le plus vaste)",
    short:
      "Protection des informations, identification/authentification, droits d'accès, mots de passe, administration, comptes de domaine, antivirus, correctifs, journalisation, matériels et vol.",
    detail:
      "Le domaine EXP est le plus fourni de l'II 901. Exemples : EXP-PROT-INF (confidentialité/intégrité), EXP-ID-AUTH (identification/authentification), EXP-DROITS / EXP-REVUE-AUTH (droits et revues), EXP-POL-PASS / EXP-QUAL-PASS (mots de passe), EXP-GEST-ADMIN / EXP-SEC-FLUXADMIN (administration), EXP-DOM-* (comptes de domaine), EXP-PROT-MALV / EXP-MAJ-ANTIVIR (codes malveillants), EXP-POL-COR (correctifs), EXP-ISOL (systèmes obsolètes), EXP-POL-JOUR / EXP-CONS-JOUR (journalisation), EXP-PROT-VOL / EXP-DECLAR-VOL (vol).",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "exploitation"],
  },
  {
    id: "dr-mes-exp-ci",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Composants d'infrastructure (EXP-CI-*)",
    short:
      "Systèmes d'exploitation, passerelles d'échange de fichiers, filtrage applicatif, effacement et destruction de supports, traçabilité, supervision, accès aux périphériques amovibles et aux réseaux, audit.",
    detail:
      "Sous-famille EXP-CI (composants d'infrastructure) : EXP-CI-OS (systèmes d'exploitation), EXP-CI-PROTFIC (passerelle d'échange de fichiers), EXP-CI-FILT (filtrage des flux applicatifs), EXP-CI-EFFAC / EXP-CI-DESTR (effacement et destruction de supports), EXP-CI-TRAC / EXP-CI-SUPERVIS (traçabilité, supervision), EXP-CI-AMOV (périphériques amovibles), EXP-CI-ACCRES (accès aux réseaux), EXP-CI-AUDIT (audit et contrôle, lié à l'homologation).",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "exploitation"],
  },
  {
    id: "dr-mes-pdt",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine PDT : postes de travail",
    short:
      "Configuration et verrouillage des postes, privilèges, stockage et chiffrement des données, supports amovibles, nomadisme, multifonctions et téléphonie.",
    detail:
      "Mesures PDT (annexe F) : PDT-CONFIG / PDT-VEROUIL-FIXE / PDT-VEROUIL-PORT (configuration, verrouillage), PDT-PRIVIL / PDT-ADM-LOCAL (privilèges, admin local), PDT-CHIFF-SENS (chiffrement des données sensibles), PDT-AMOV (supports amovibles), PDT-NOMAD-* (accès distant, pare-feu local, filtre de confidentialité, sans-fil), PDT-MUL-* (imprimantes/copieurs multifonctions), PDT-TEL-* (téléphonie, DECT).",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "postes"],
  },
  {
    id: "dr-mes-dev",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaine DEV : développement (hors guide PG-075)",
    short:
      "Sécurité dans le cycle de vie du logiciel, clauses SSI dans la sous-traitance de développement, développement Web, limitation des fuites d'information.",
    detail:
      "Mesures DEV (annexe F) : DEV-INTEGR-SECLOC (sécurité dans les développements locaux), DEV-SOUS-TRAIT (clauses SSI en sous-traitance), DEV-LOG-CYCLE (sécurité dans le cycle de vie), DEV-LOG-WEB (développements Web), DEV-FUITES (limiter les fuites). Domaine non traité par le guide d'architecture PG-075.",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "développement", "hors périmètre"],
  },
  {
    id: "dr-mes-ti-pca",
    detailParaphrase: true,
    detailNote:
      "Fiche repère : sommaire du catalogue de mesures de l'annexe F. Pour le libellé exact et complet de chaque mesure, se reporter au guide ANSSI-PG-075 (annexe F) et à l'II 901, cités ci-dessous.",
    refId: "dr-ii901",
    themeId: "mesures",
    title: "Domaines TI et PCA : incidents et continuité",
    short:
      "Traitement des incidents (chaînes opérationnelles, remontée, déclaration) et plan de continuité d'activité (PCA local, sauvegardes, exercices).",
    detail:
      "Domaine TI (traitement des incidents) : TI-OPS-SSI (chaînes opérationnelles), TI-MOB (mobilisation), TI-QUAL-TRAIT (qualification/traitement), TI-INC-REM (remontée des incidents, lien R70 déclaration à l'ANSSI).\n\nDomaine PCA (continuité d'activité) : PCA-LOCAL (plan local), PCA-SAUVE / PCA-PROT (sauvegardes), PCA-EXERC (exercices réguliers), PCA-MISAJOUR (mise à jour du plan).",
    sources: ["pg075", "ii901"],
    tags: ["mesures", "incident", "continuité", "hors périmètre"],
  },

  // --------------------------------------------------------------------------
  // Theme : homologation (approfondissement)
  // --------------------------------------------------------------------------
  {
    id: "dr-homol-principe",
    refId: "dr-ii901",
    themeId: "homologation",
    title: "L'homologation : une acceptation formelle des risques",
    short:
      "L'homologation est l'acte par lequel l'autorité atteste que les risques sont connus, maîtrisés et acceptés, pour une durée déterminée. Tout SI sensible doit être homologué avant production.",
    elementDeLangage:
      "« Homologuer, ce n'est pas cocher une case : c'est décider, en connaissance de cause, d'accepter les risques résiduels d'un SI pour une durée déterminée. »",
    detail:
      "L'homologation (II 901 art. 8 ; mesure INT-HOMOLOG-SSI) conclut la démarche de sécurité : l'autorité d'homologation atteste que les risques sont connus, maîtrisés et **acceptés**, et déclare le SI homologué pour une durée déterminée. Un SI est dit « homologué au niveau sensible » ou « homologué au niveau DR » selon son régime.",
    exigence: { level: "obligatoire", note: "II 901, art. 8 (R4)" },
    sources: ["ii901", "pg075"],
    tags: ["homologation"],
  },
  {
    id: "dr-homol-demarche",
    detailParaphrase: true,
    refId: "dr-ii901",
    themeId: "homologation",
    title: "Démarche d'homologation : analyse de risque et périmètre",
    short:
      "La démarche s'appuie sur une analyse de risque (méthode EBIOS Risk Manager recommandée) et délimite un périmètre d'homologation incluant tous les matériels traitant ou stockant des informations sensibles (supports amovibles compris).",
    detail:
      "La démarche d'homologation (II 901, mesure INT-REX-AR) repose sur une analyse de risque ; le guide recommande la méthode **EBIOS Risk Manager**. Le **périmètre d'homologation II 901** englobe l'ensemble des systèmes devant être conformes aux mesures de l'II 901, y compris les matériels mobiles et supports amovibles.",
    exigence: { level: "recommande", note: "EBIOS RM recommandé (PG-075) ; périmètre II 901" },
    sources: ["pg075", "ii901"],
    tags: ["homologation", "analyse de risque"],
  },
  {
    id: "dr-homol-dr-art13",
    refId: "dr-ii901",
    themeId: "homologation",
    title: "Homologation spécifique au niveau DR (article 13)",
    short:
      "Les SI traitant du DR font l'objet d'une homologation au niveau DR. L'IGI 1300 rappelle que tout SI traitant, stockant ou transmettant du DR est homologué.",
    detail:
      "IGI 1300, Annexe 1, §5 (Sécurité des systèmes d'information) : « Les systèmes d'information destinés au traitement, au stockage ou à la transmission des informations Diffusion Restreinte font l'objet d'une homologation de sécurité. L'instruction interministérielle n° 901/SGDSN/ANSSI précitée définit les règles applicables à ces systèmes d'information. » L'article 13 de l'II 901 précise les règles d'homologation propres aux SI Diffusion Restreinte (texte II 901 non librement reproductible).",
    exigence: { level: "obligatoire", note: "II 901, art. 13 ; IGI 1300 Annexe 1 §5" },
    sources: ["ii901", "igi1300-an1"],
    tags: ["homologation", "DR"],
  },
  {
    id: "dr-homol-reeval-audit",
    detailParaphrase: true,
    refId: "dr-ii901",
    themeId: "homologation",
    title: "Réévaluation périodique et audit",
    short:
      "L'homologation n'est pas définitive : les risques sont réévalués périodiquement (art. 11), dans une logique d'amélioration continue (art. 3), avec audit et contrôle (mesure EXP-CI-AUDIT).",
    detail:
      "La sécurité d'un SI sensible se maintient dans le temps : l'article 11 (évaluation du niveau de sécurité) et l'article 3 (amélioration continue) imposent une réévaluation périodique des risques. La mesure EXP-CI-AUDIT (audit et contrôle) alimente cette démarche, qui peut conduire à renouveler ou retirer l'homologation.",
    exigence: { level: "obligatoire", note: "II 901, art. 11 et 3" },
    sources: ["ii901", "pg075"],
    tags: ["homologation", "MCS"],
  },
  {
    id: "dr-homol-interco-separee",
    refId: "dr-ii901",
    themeId: "homologation",
    title: "Chaque interconnexion s'homologue séparément",
    short:
      "L'homologation d'une interconnexion de SI sensibles est distincte de celle des SI interconnectés ; chaque partie vérifie la compatibilité avec son propre dossier d'homologation.",
    detail:
      "Recommandation R8 du guide ANSSI-PG-075 : « Définir une stratégie d'homologation pour chaque interconnexion de SI sensible ». Chaque interconnexion fait ainsi l'objet d'une homologation propre, distincte de celles des SI interconnectés ; chaque partie vérifie la compatibilité avec son propre dossier d'homologation.",
    exigence: { level: "obligatoire", note: "II 901 annexe 2 ; PG-075 R8" },
    sources: ["ii901-annexe2", "pg075"],
    tags: ["homologation", "interconnexion"],
  },
];

export const drQcmExtra: QcmQuestion[] = [
  {
    id: "q-structure-art14",
    refId: "dr-ii901",
    themeId: "structure",
    question: "Quel article de l'II 901 fonde le choix de la classe de SI et le chiffrement des informations DR ?",
    options: [
      { text: "L'article 14 (traitement des informations DR)", correct: true },
      { text: "L'article 2 (champ d'application)", correct: false },
      { text: "L'article 15 (protection physique)", correct: false },
    ],
    explanation:
      "L'article 14 de l'II 901 encadre le traitement des informations DR : choix de la classe (annexe 2) et chiffrement par moyens agréés (R9, R19, R55).",
    exigence: { level: "obligatoire", note: "II 901, art. 14" },
    sources: ["ii901", "ii901-annexe2"],
  },
  {
    id: "q-structure-physique-hors-guide",
    refId: "dr-ii901",
    themeId: "structure",
    question: "La sécurité physique des locaux est-elle traitée par le guide d'architecture PG-075 ?",
    options: [
      { text: "Non : elle relève de l'II 901 (art. 15) mais d'un autre corpus ANSSI", correct: true },
      { text: "Oui, c'est le chapitre principal du guide", correct: false },
    ],
    explanation:
      "Le guide PG-075 se limite à l'architecture technique. La sécurité physique relève de l'article 15 de l'II 901 et d'un guide ANSSI dédié (mesures PHY).",
    exigence: { level: "obligatoire", note: "II 901, art. 15 ; hors PG-075" },
    sources: ["ii901", "pg075"],
  },
  {
    id: "q-structure-art3-principes",
    refId: "dr-ii901",
    themeId: "structure",
    question: "Lequel de ces principes est un principe stratégique de l'II 901 (article 3) ?",
    options: [
      { text: "La défense en profondeur", correct: true },
      { text: "L'obligation de publier le code source", correct: false },
      { text: "L'anonymisation systématique des données", correct: false },
    ],
    explanation:
      "L'article 3 énonce notamment l'amélioration continue, la défense en profondeur et le recours à des produits qualifiés.",
    exigence: { level: "obligatoire", note: "II 901, art. 3" },
    sources: ["ii901", "pg075"],
  },
  {
    id: "q-structure-externalisation",
    refId: "dr-ii901",
    themeId: "structure",
    question: "Quel article encadre l'externalisation et impose des clauses de sécurité contractuelles ?",
    options: [
      { text: "L'article 16", correct: true },
      { text: "L'article 9", correct: false },
      { text: "L'article 21", correct: false },
    ],
    explanation:
      "L'article 16 (externalisation) impose des clauses de sécurité et le recours à des prestataires de confiance ; pour le DR, SecNumCloud ne se substitue pas à l'homologation.",
    exigence: { level: "obligatoire", note: "II 901, art. 16" },
    sources: ["ii901", "faq-cloud"],
  },
  {
    id: "q-mesures-identifiants",
    refId: "dr-ii901",
    themeId: "mesures",
    question: "Comment sont repérées les mesures de sécurité de l'II 901 ?",
    options: [
      { text: "Par des identifiants à préfixe de domaine (ex. EXP-ID-AUTH, PDT-CHIFF-SENS)", correct: true },
      { text: "Par un simple numéro de 1 à 100", correct: false },
      { text: "Elles ne sont pas identifiées", correct: false },
    ],
    explanation:
      "L'annexe F du guide liste les mesures de l'II 901, repérées par des identifiants groupés par domaine (ORG, RH, GDB, INT, PHY, RES, EXP, PDT, DEV, TI, PCA).",
    exigence: { level: "conseille", note: "annexe F du guide PG-075" },
    sources: ["pg075"],
  },
  {
    id: "q-mesures-obligatoire-art2",
    refId: "dr-ii901",
    themeId: "mesures",
    question: "Comment savoir si une mesure donnée de l'II 901 est obligatoire ou recommandée ?",
    options: [
      { text: "Par la lecture de l'article 2, selon le régime de protection", correct: true },
      { text: "Toutes les mesures sont obligatoires sans exception", correct: false },
      { text: "C'est laissé à l'appréciation du prestataire", correct: false },
    ],
    explanation:
      "L'article 2 de l'II 901 détermine, selon le régime de protection (sensible ou DR), quelles mesures sont obligatoires et lesquelles sont recommandées.",
    exigence: { level: "obligatoire", note: "II 901, art. 2" },
    sources: ["ii901-art2", "pg075"],
  },
  {
    id: "q-mesures-dev-domaine",
    refId: "dr-ii901",
    themeId: "mesures",
    question: "Le développement sécurisé fait-il partie des mesures de l'II 901 ?",
    options: [
      { text: "Oui, c'est le domaine DEV (non traité par le guide PG-075)", correct: true },
      { text: "Non, l'II 901 ne parle jamais de développement", correct: false },
    ],
    explanation:
      "Le domaine DEV (clauses de sous-traitance, cycle de vie, Web, fuites) fait partie de l'II 901, mais n'est pas couvert par le guide d'architecture PG-075.",
    exigence: { level: "conseille", note: "annexe F, domaine DEV ; hors PG-075" },
    sources: ["pg075", "ii901"],
  },
  {
    id: "q-mesures-domaine-exp",
    refId: "dr-ii901",
    themeId: "mesures",
    question: "À quel domaine appartiennent l'identification/authentification, la gestion des droits et des mots de passe ?",
    options: [
      { text: "Au domaine EXP (exploitation)", correct: true },
      { text: "Au domaine PHY (sécurité physique)", correct: false },
      { text: "Au domaine PCA (continuité)", correct: false },
    ],
    explanation:
      "Ces mesures (EXP-ID-AUTH, EXP-DROITS, EXP-POL-PASS...) relèvent du domaine EXP, le plus vaste de l'II 901.",
    exigence: { level: "conseille", note: "annexe F, domaine EXP" },
    sources: ["pg075"],
  },
  {
    id: "q-homol-acceptation-risques",
    refId: "dr-ii901",
    themeId: "homologation",
    question: "Que signifie l'homologation d'un SI sensible ?",
    options: [
      { text: "L'autorité atteste que les risques sont connus, maîtrisés et acceptés, pour une durée déterminée", correct: true },
      { text: "Une certification définitive et sans limite de durée", correct: false },
      { text: "Une simple déclaration auprès de la CNIL", correct: false },
    ],
    explanation:
      "L'homologation (art. 8) est la décision par laquelle l'autorité accepte les risques résiduels, pour une durée déterminée.",
    exigence: { level: "obligatoire", note: "II 901, art. 8" },
    sources: ["ii901", "pg075"],
  },
  {
    id: "q-homol-ebios",
    refId: "dr-ii901",
    themeId: "homologation",
    question: "Quelle méthode d'analyse de risque le guide recommande-t-il pour la démarche d'homologation ?",
    options: [
      { text: "EBIOS Risk Manager", correct: true },
      { text: "ISO 9001", correct: false },
      { text: "ITIL", correct: false },
    ],
    explanation:
      "Le guide recommande la méthode EBIOS Risk Manager pour apprécier et traiter les risques pesant sur le SI.",
    exigence: { level: "recommande", note: "PG-075 (EBIOS RM)" },
    sources: ["pg075"],
  },
  {
    id: "q-homol-interco",
    refId: "dr-ii901",
    themeId: "homologation",
    question: "L'homologation d'une interconnexion entre deux SI sensibles est :",
    options: [
      { text: "Distincte de celle des SI interconnectés", correct: true },
      { text: "Incluse automatiquement dans celle de chaque SI", correct: false },
    ],
    explanation:
      "L'II 901 (annexe 2) et le guide (R8) imposent une homologation spécifique de l'interconnexion, distincte de celle des SI.",
    exigence: { level: "obligatoire", note: "II 901 annexe 2 ; R8" },
    sources: ["ii901-annexe2", "pg075"],
  },
  {
    id: "q-homol-reeval",
    refId: "dr-ii901",
    themeId: "homologation",
    question: "Une fois homologué, un SI sensible est-il figé ?",
    options: [
      { text: "Non : les risques sont réévalués périodiquement (amélioration continue)", correct: true },
      { text: "Oui, l'homologation vaut pour toute la vie du SI", correct: false },
    ],
    explanation:
      "Les articles 3 (amélioration continue) et 11 (évaluation) imposent une réévaluation périodique ; la mesure EXP-CI-AUDIT alimente ce suivi.",
    exigence: { level: "obligatoire", note: "II 901, art. 3 et 11" },
    sources: ["ii901", "pg075"],
  },
];
