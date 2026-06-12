// Cartes de revision NIS2 (directive (UE) 2022/2555) et sa transposition francaise.
//
// Etat verifie le 2026-06-03 (recherche multi-sources, EUR-Lex / Senat / ANSSI).
// Principe directeur du referentiel :
//   - Socle UE = la directive 2022/2555 est un texte STABLE et en vigueur au niveau
//     europeen. Les obligations sont citees par article (20, 21, 23, 32, 33, 34) et
//     les chiffres (delais, plafonds d'amende) sont des faits verifies.
//   - Volet FRANCE = la transposition n'est PAS aboutie au 2026-06-03 (loi non
//     promulguee, aucun decret). Ces fiches sont datees et marquees "a verifier".
//
// Sourcage : les 5 fiches d'articles de la directive (art. 20, 21, 23, 32/33, 34)
// sont en VERBATIM, d'apres le PDF officiel EUR-Lex FR (extrait avec pdfminer.six ;
// pypdf inserait des espaces parasites dans les mots). Les fiches de cadrage
// transverses (definitions, secteurs) restent des REFORMULATIONS FIDELES
// (detailParaphrase + EURLEX_NOTE). Le volet FRANCE porte FR_NOTE ("a verifier").

import type { ReviewCard } from "../types.ts";

const EURLEX_NOTE =
  "Reformulation fidèle ancrée à l'article cité, et non le verbatim officiel. Se reporter au texte de la directive (UE) 2022/2555 sur EUR-Lex (source citée ci-dessous) pour le libellé exact.";
const FR_NOTE =
  "Volet en cours de transposition : au 3 juin 2026, NIS2 n'est pas encore applicable en France (loi non promulguée, aucun décret). Élément susceptible d'évoluer, à vérifier sur Légifrance et cyber.gouv.fr avant tout usage.";

export const nis2Cards: ReviewCard[] = [
  // --------------------------------------------------------------------------
  // Theme : socle (notions, cadre, articulation)
  // --------------------------------------------------------------------------
  {
    id: "nis2-quoi",
    detailParaphrase: true,
    detailNote: EURLEX_NOTE,
    refId: "nis2",
    themeId: "socle",
    title: "Qu'est-ce que NIS2",
    short:
      "NIS2 est la directive (UE) 2022/2555 du 14 décembre 2022 : elle relève le niveau commun de cybersécurité dans l'Union en imposant des obligations aux entités de secteurs critiques. C'est une directive, donc elle produit ses effets via une transposition nationale.",
    elementDeLangage:
      "« NIS2, c'est une directive européenne : elle fixe un socle commun, mais ce sont les lois de transposition de chaque État qui la rendent applicable. »",
    detail:
      "Directive (UE) 2022/2555 du Parlement européen et du Conseil du 14 décembre 2022 « concernant des mesures destinées à assurer un niveau élevé commun de cybersécurité dans l'ensemble de l'Union » (NIS2). En vigueur au niveau de l'Union depuis le 16 janvier 2023, avec une échéance de transposition par les États membres fixée au 17 octobre 2024.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555 (effets via transposition nationale)" },
    sources: ["nis2-dir"],
    tags: ["définition", "cadre"],
  },
  {
    id: "nis2-remplace-nis1",
    detailParaphrase: true,
    detailNote: EURLEX_NOTE,
    refId: "nis2",
    themeId: "socle",
    title: "NIS2 remplace NIS1 et élargit le périmètre",
    short:
      "NIS2 abroge la directive NIS1 (2016/1148) et son régime d'opérateurs de services essentiels (OSE). Elle élargit nettement le nombre de secteurs et d'entités concernés et durcit les obligations.",
    elementDeLangage:
      "« NIS2 succède à NIS1 : le régime OSE disparaît au profit des entités essentielles et importantes, sur un périmètre bien plus large. »",
    detail:
      "NIS2 abroge la directive (UE) 2016/1148 (NIS1), qui avait institué la notion d'opérateur de services essentiels (OSE). Elle remplace ce régime par une logique d'entités essentielles et importantes couvrant davantage de secteurs, avec des exigences renforcées (gestion des risques, notification, supervision, sanctions).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555 (abroge la dir. 2016/1148)" },
    sources: ["nis2-dir", "nis1"],
    tags: ["cadre", "idée reçue"],
  },
  {
    id: "nis2-pas-applicable-fr",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "nis2",
    themeId: "socle",
    title: "Au 3 juin 2026, NIS2 n'est pas encore applicable en France",
    short:
      "Point clé, et idée reçue fréquente : à la date de revue (3 juin 2026), NIS2 n'impose encore rien directement en France. La loi de transposition n'est pas promulguée et aucun décret n'est paru. Une directive ne s'applique pas tant qu'elle n'est pas transposée.",
    elementDeLangage:
      "« NIS2 ne s'applique pas encore en France : la loi de transposition n'est pas votée définitivement. On anticipe, mais aucune obligation NIS2 n'est exigible à ce jour. »",
    detail:
      "Une directive de l'Union ne crée pas d'obligations directes pour les entités tant qu'elle n'est pas transposée en droit national. Au 3 juin 2026, la loi française de transposition (projet de loi « résilience des infrastructures critiques et renforcement de la cybersécurité ») n'est ni adoptée en séance ni promulguée, et aucun décret d'application n'existe. Les obligations NIS2 ne sont donc pas exigibles en France à cette date.",
    sources: ["anssi-nis2", "loi-resilience"],
    tags: ["idée reçue", "France", "à vérifier"],
  },
  {
    id: "nis2-superpose-saiv",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "nis2",
    themeId: "socle",
    title: "NIS2 se superpose au dispositif SAIV, sans le remplacer",
    short:
      "NIS2 ne supprime pas le régime des activités d'importance vitale (OIV/SIIV, LPM). Les deux cadres coexisteront : une entité peut être à la fois OIV (SAIV) et entité essentielle (NIS2), avec un cumul d'obligations.",
    elementDeLangage:
      "« NIS2 ne fait pas disparaître les OIV/SIIV : c'est une couche supplémentaire. Un même opérateur peut relever des deux régimes. »",
    detail:
      "Le dispositif SAIV (code de la défense, OIV et SIIV, volet cyber de la LPM) demeure. NIS2 s'y ajoute avec son propre périmètre d'entités essentielles et importantes. L'articulation fine entre les deux régimes (cumul des obligations, hiérarchie) relève de la loi de transposition et de ses décrets, non encore publiés.",
    sources: ["anssi-nis2", "senat-rap"],
    tags: ["articulation", "SAIV", "idée reçue", "à vérifier"],
  },
  {
    id: "nis2-trio-ue",
    detailParaphrase: true,
    detailNote: EURLEX_NOTE,
    refId: "nis2",
    themeId: "socle",
    title: "NIS2, CER et DORA : trois textes UE du 14 décembre 2022",
    short:
      "NIS2 fait partie d'un paquet européen du 14 décembre 2022 : la directive CER/REC (2022/2557) sur la résilience physique des entités critiques, NIS2 (2022/2555) pour la cybersécurité, et le volet financier DORA.",
    elementDeLangage:
      "« NIS2 ne vient pas seule : CER pour le physique, NIS2 pour le cyber, DORA pour la finance. La France les transpose dans une même loi. »",
    detail:
      "Trois textes de l'Union datés du 14 décembre 2022 forment ce paquet : la directive (UE) 2022/2557 (REC/CER, résilience des entités critiques), la directive (UE) 2022/2555 (NIS2, cybersécurité) et le volet financier. Attention : DORA est le règlement (UE) 2022/2554 (directement applicable, non transposé) ; la directive (UE) 2022/2556 est le texte d'accompagnement. Assimiler 2022/2556 à « DORA » est un raccourci imprécis.",
    sources: ["nis2-dir", "cer", "dora"],
    tags: ["cadre", "idée reçue"],
  },

  // --------------------------------------------------------------------------
  // Theme : entites (EE / EI, secteurs, taille, enregistrement)
  // --------------------------------------------------------------------------
  {
    id: "nis2-ee-ei",
    detailParaphrase: true,
    detailNote: EURLEX_NOTE,
    refId: "nis2",
    themeId: "entites",
    title: "Entités essentielles (EE) et entités importantes (EI)",
    short:
      "NIS2 classe les entités en deux catégories : essentielles (EE) et importantes (EI). Les obligations de sécurité sont les mêmes ; ce qui diffère, c'est l'intensité de la supervision et le plafond des sanctions.",
    elementDeLangage:
      "« EE ou EI, les obligations de cybersécurité sont identiques. La différence se joue sur le contrôle et les amendes, plus lourds pour les entités essentielles. »",
    detail:
      "NIS2 distingue les entités essentielles (EE) et les entités importantes (EI), selon le secteur et la taille. Les obligations de gestion des risques (art. 21) et de notification (art. 23) s'appliquent aux deux. La distinction porte sur le régime de supervision (lourd pour les EE, art. 32 ; allégé pour les EI, art. 33) et sur le plafond des amendes (art. 34).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555 (catégories EE / EI)" },
    sources: ["nis2-dir"],
    tags: ["entités", "définition"],
  },
  {
    id: "nis2-secteurs",
    detailParaphrase: true,
    detailNote: EURLEX_NOTE,
    refId: "nis2",
    themeId: "entites",
    title: "Secteurs : annexe I (hautement critiques) et annexe II (autres critiques)",
    short:
      "NIS2 liste ses secteurs dans deux annexes : l'annexe I (secteurs hautement critiques, ex. énergie, transports, santé, eau, infrastructures numériques, administration) et l'annexe II (autres secteurs critiques, ex. services postaux, gestion des déchets, fabrication, alimentation).",
    detail:
      "Annexe I (« secteurs hautement critiques ») : énergie ; transports ; secteur bancaire ; infrastructures des marchés financiers ; santé ; eau potable ; eaux usées ; infrastructure numérique ; gestion des services TIC (interentreprises) ; administration publique ; espace. Annexe II (« autres secteurs critiques ») : services postaux et d'expédition ; gestion des déchets ; fabrication, production et distribution de produits chimiques ; production, transformation et distribution de denrées alimentaires ; fabrication (dispositifs médicaux, produits informatiques, électroniques et optiques, équipements électriques, machines, véhicules et autres matériels de transport) ; fournisseurs numériques (places de marché en ligne, moteurs de recherche, réseaux sociaux) ; recherche. Le rattachement à un secteur d'annexe, combiné à la taille, détermine si l'entité est concernée et sa catégorie (EE ou EI). Le détail des sous-secteurs et des types d'entités figure aux annexes I et II.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, annexes I et II" },
    sources: ["nis2-dir"],
    tags: ["entités", "secteurs"],
  },
  {
    id: "nis2-taille",
    detailParaphrase: true,
    detailNote: EURLEX_NOTE,
    refId: "nis2",
    themeId: "entites",
    title: "Le critère de taille (règle du plafond de taille)",
    short:
      "En principe, NIS2 vise les entités moyennes et grandes des secteurs listés (règle dite du plafond de taille). Certaines entités sont toutefois concernées quelle que soit leur taille (ex. certains fournisseurs d'infrastructures numériques, administrations).",
    detail:
      "NIS2 applique une règle de plafond de taille : sont en principe concernées les entreprises moyennes et grandes des secteurs des annexes I et II. La directive prévoit des cas où la taille n'entre pas en compte. Les seuils précis et les exceptions applicables en France seront fixés par la loi de transposition et ses décrets (non publiés), à vérifier.",
    exigence: { level: "obligatoire", note: "règle d'application de la directive (art. 2 §1) ; seuils FR à confirmer" },
    sources: ["nis2-dir"],
    tags: ["entités", "à vérifier"],
  },
  {
    id: "nis2-enregistrement",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "nis2",
    themeId: "entites",
    title: "Auto-enregistrement : pas d'agrément préalable",
    short:
      "NIS2 repose sur un auto-enregistrement des entités auprès de l'autorité nationale, et non sur un agrément délivré au préalable. C'est à l'entité de déterminer si elle est concernée et de se déclarer.",
    elementDeLangage:
      "« Personne ne vous “labellise” NIS2 : c'est à vous d'évaluer si vous êtes concerné et de vous enregistrer auprès de l'autorité nationale. »",
    detail:
      "Le dispositif NIS2 fonctionne par auto-identification puis enregistrement des entités auprès de l'autorité nationale, sans agrément préalable. En France, l'ANSSI a ouvert le 24 novembre 2025 un pré-enregistrement volontaire (portail MonEspaceNIS2) ; l'enregistrement obligatoire n'a pas commencé et débutera avec la publication des textes de transposition.",
    exigence: { level: "conseille", note: "pré-enregistrement volontaire (2025) ; l'enregistrement deviendra obligatoire avec la transposition" },
    sources: ["anssi-nis2", "monespacenis2"],
    tags: ["entités", "idée reçue", "France", "à vérifier"],
  },

  // --------------------------------------------------------------------------
  // Theme : obligations (gouvernance, gestion des risques, notification)
  // --------------------------------------------------------------------------
  {
    id: "nis2-gouvernance",
    refId: "nis2",
    themeId: "obligations",
    title: "Gouvernance : responsabilité des organes de direction (art. 20)",
    short:
      "NIS2 responsabilise la direction : les organes de direction approuvent les mesures de gestion des risques, en supervisent la mise en œuvre et peuvent être tenus responsables. Ils doivent aussi suivre une formation.",
    elementDeLangage:
      "« Avec NIS2, la cybersécurité remonte au comité de direction : ce sont les dirigeants qui approuvent les mesures et en répondent. »",
    detail:
      "Article 20 de la directive (UE) 2022/2555. §1 : « Les États membres veillent à ce que les organes de direction des entités essentielles et importantes approuvent les mesures de gestion des risques en matière de cybersécurité prises par ces entités afin de se conformer à l'article 21, supervisent sa mise en œuvre et puissent être tenus responsables de la violation dudit article par ces entités. » §2 : « Les États membres veillent à ce que les membres des organes de direction [...] soient tenus de suivre une formation et ils encouragent les entités essentielles et importantes à offrir régulièrement une formation similaire aux membres de leur personnel [...]. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 20" },
    sources: ["nis2-dir"],
    tags: ["obligations", "gouvernance"],
  },
  {
    id: "nis2-gestion-risques",
    refId: "nis2",
    themeId: "obligations",
    title: "Mesures de gestion des risques (art. 21)",
    short:
      "NIS2 impose des mesures techniques, opérationnelles et organisationnelles proportionnées, selon une approche tous risques : analyse de risque, gestion des incidents, continuité et sauvegardes, sécurité de la chaîne d'approvisionnement, chiffrement, contrôle d'accès, etc.",
    detail:
      "Article 21 de la directive (UE) 2022/2555. §1 : « Les États membres veillent à ce que les entités essentielles et importantes prennent les mesures techniques, opérationnelles et organisationnelles appropriées et proportionnées pour gérer les risques qui menacent la sécurité des réseaux et des systèmes d'information [...]. » §2 : ces mesures « sont fondées sur une approche « tous risques » » et « comprennent au moins » : a) les politiques relatives à l'analyse des risques et à la sécurité des systèmes d'information ; b) la gestion des incidents ; c) la continuité des activités [...] et la gestion des crises ; d) la sécurité de la chaîne d'approvisionnement ; e) la sécurité de l'acquisition, du développement et de la maintenance des réseaux et des systèmes d'information, y compris le traitement et la divulgation des vulnérabilités ; f) des politiques et des procédures pour évaluer l'efficacité des mesures ; g) les pratiques de base en matière de cyberhygiène et la formation à la cybersécurité ; h) des politiques et des procédures relatives à l'utilisation de la cryptographie et, le cas échéant, du chiffrement ; i) la sécurité des ressources humaines, des politiques de contrôle d'accès et la gestion des actifs ; j) l'utilisation de solutions d'authentification à plusieurs facteurs [...] et de communications [...] sécurisées [...].",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21" },
    sources: ["nis2-dir"],
    tags: ["obligations", "gestion des risques"],
  },
  {
    id: "nis2-notification",
    refId: "nis2",
    themeId: "obligations",
    title: "Notification des incidents : 24 h / 72 h / 1 mois (art. 23)",
    short:
      "Pour tout incident important, NIS2 impose une notification en cascade à l'autorité (ou au CSIRT) : alerte précoce sous 24 h, notification d'incident sous 72 h, puis rapport final au plus tard un mois après la notification.",
    elementDeLangage:
      "« NIS2, c'est 24-72-30 : alerte précoce à 24 heures, notification à 72 heures, rapport final à un mois. »",
    detail:
      "Article 23, §4 de la directive (UE) 2022/2555 : les entités concernées soumettent au CSIRT (ou, selon le cas, à l'autorité compétente) : « a) sans retard injustifié et en tout état de cause dans les 24 heures après avoir eu connaissance de l'incident important, une alerte précoce [...] ; b) sans retard injustifié et en tout état de cause dans les 72 heures après avoir eu connaissance de l'incident important, une notification d'incident [...] ; c) à la demande [...] un rapport intermédiaire [...] ; d) un rapport final au plus tard un mois après la présentation de la notification d'incident visée au point b) [...]. » En cas d'incident encore en cours, un rapport d'avancement est fourni, puis « un rapport final dans un délai d'un mois à compter du traitement de l'incident ». Pour un prestataire de services de confiance, le délai de notification est de 24 heures.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 23" },
    sources: ["nis2-dir"],
    tags: ["obligations", "incident", "notification"],
  },

  // --------------------------------------------------------------------------
  // Theme : controle (supervision, sanctions)
  // --------------------------------------------------------------------------
  {
    id: "nis2-supervision",
    refId: "nis2",
    themeId: "controle",
    title: "Supervision graduée : EE (art. 32) vs EI (art. 33)",
    short:
      "Les entités essentielles relèvent d'un contrôle lourd, à la fois en amont et en aval (inspections, audits réguliers, scans, demandes de preuves). Les entités importantes relèvent d'un contrôle allégé, surtout a posteriori, déclenché par un indice de non-conformité.",
    detail:
      "Article 32, §2 de la directive (UE) 2022/2555 (entités essentielles) : les autorités compétentes ont le pouvoir de soumettre ces entités à, « au minimum : a) des inspections sur place et des contrôles à distance [...] ; b) des audits de sécurité réguliers et ciblés réalisés par un organisme indépendant ou une autorité compétente ; c) des audits ad hoc [...] ». Article 33 (entités importantes) : régime « a posteriori », déclenché « au vu d'éléments de preuve, d'indications ou d'informations selon lesquels une entité importante ne respecterait pas la présente directive, et notamment ses articles 21 et 23 » ; les mesures incluent « des inspections sur place et des contrôles à distance ex post ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 32 (EE) et 33 (EI)" },
    sources: ["nis2-dir"],
    tags: ["contrôle", "supervision"],
  },
  {
    id: "nis2-sanctions",
    refId: "nis2",
    themeId: "controle",
    title: "Sanctions : plafonds d'amendes (art. 34)",
    short:
      "Pour un manquement à la gestion des risques (art. 21) ou à la notification (art. 23), les amendes peuvent atteindre, pour une entité essentielle, 10 M€ ou 2 % du chiffre d'affaires annuel mondial (le montant le plus élevé) ; pour une entité importante, 7 M€ ou 1,4 %.",
    elementDeLangage:
      "« NIS2 a des dents : jusqu'à 10 M€ ou 2 % du CA mondial pour une entité essentielle, 7 M€ ou 1,4 % pour une importante. »",
    detail:
      "Article 34 de la directive (UE) 2022/2555. §4 (entités essentielles) : « Les États membres veillent à ce que, lorsqu'elles violent l'article 21 ou 23, les entités essentielles soient soumises [...] à des amendes administratives d'un montant maximal s'élevant à au moins 10 000 000 EUR ou à au moins 2 % du chiffre d'affaires annuel mondial total de l'exercice précédent [...], le montant le plus élevé étant retenu. » §5 (entités importantes) : « un montant maximal s'élevant à au moins 7 000 000 EUR ou à au moins 1,4 % du chiffre d'affaires annuel mondial total [...], le montant le plus élevé étant retenu. » La formule « maximal s'élevant à au moins » désigne un plancher imposé aux États membres, non un plafond absolu.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 34" },
    sources: ["nis2-dir"],
    tags: ["contrôle", "sanction"],
  },

  // --------------------------------------------------------------------------
  // Theme : france (transposition en cours, a verifier)
  // --------------------------------------------------------------------------
  {
    id: "nis2-fr-loi",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "nis2",
    themeId: "france",
    title: "La loi de transposition française (en cours)",
    short:
      "La France transpose NIS2 (avec CER et le volet financier) dans le projet de loi « relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité ». Au 3 juin 2026, il n'est pas encore adopté définitivement ni promulgué.",
    detail:
      "Chronologie au 3 juin 2026 : présentation en Conseil des ministres le 15 octobre 2024 ; adoption en première lecture par le Sénat le 12 mars 2025 ; vote en commission spéciale à l'Assemblée nationale le 10 septembre 2025 ; examen en séance publique attendu vers juillet 2026. La loi n'est pas promulguée, aucun numéro de loi ni décret n'existe. La Commission européenne a adressé à la France un avis motivé le 7 mai 2025 pour non-transposition dans les délais.",
    exigence: { level: "conseille", note: "statut au 3 juin 2026, à vérifier (loi non promulguée)" },
    sources: ["loi-resilience", "senat-rap", "anssi-nis2"],
    tags: ["France", "à vérifier"],
  },
  {
    id: "nis2-fr-anssi-preenr",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "nis2",
    themeId: "france",
    title: "ANSSI autorité nationale et pré-enregistrement",
    short:
      "L'ANSSI est désignée autorité nationale NIS2. Dans l'attente des textes, elle a ouvert le 24 novembre 2025 un pré-enregistrement volontaire des entités assujetties via le portail MonEspaceNIS2.",
    detail:
      "L'ANSSI sera l'autorité nationale compétente pour NIS2 en France. Le 24 novembre 2025, elle a ouvert un service de pré-enregistrement volontaire (portail MonEspaceNIS2) permettant aux entités de se signaler par anticipation, dans l'attente de l'entrée en vigueur de l'obligation d'enregistrement qui interviendra avec la publication des textes réglementaires. La phase d'enregistrement obligatoire n'a pas commencé.",
    exigence: { level: "conseille", note: "pré-enregistrement volontaire, à vérifier" },
    sources: ["anssi-nis2", "monespacenis2"],
    tags: ["France", "ANSSI", "à vérifier"],
  },
  {
    id: "nis2-fr-recyf",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "nis2",
    themeId: "france",
    title: "Le Référentiel Cyber France (ReCyF)",
    short:
      "Le 17 mars 2026, l'ANSSI a publié le Référentiel Cyber France (ReCyF) : la liste des mesures recommandées pour atteindre les objectifs de sécurité de NIS2. Par défaut, il n'est pas obligatoire.",
    detail:
      "Le ReCyF, publié par l'ANSSI le 17 mars 2026, liste les mesures recommandées par l'Agence pour atteindre les objectifs de sécurité fixés par NIS2. Présenté comme un document de travail, il correspond au référentiel de cybersécurité prévu par le projet de loi et n'est, par défaut, pas obligatoire. Il est structuré autour d'objectifs de sécurité (un socle commun aux EE et EI, complété d'objectifs propres aux EE).",
    exigence: { level: "recommande", note: "ReCyF, mesures recommandées (non obligatoires par défaut)" },
    sources: ["recyf", "anssi-nis2"],
    tags: ["France", "ANSSI", "à vérifier"],
  },
  {
    id: "nis2-fr-entree-vigueur",
    detailParaphrase: true,
    detailNote: FR_NOTE,
    refId: "nis2",
    themeId: "france",
    title: "Quand NIS2 deviendra-t-elle applicable en France",
    short:
      "NIS2 ne deviendra exigible en France qu'une fois l'ensemble des textes de transposition promulgués : la loi, puis ses décrets et arrêtés. Tant que cette chaîne n'est pas complète, aucune obligation NIS2 n'est exigible.",
    detail:
      "Selon l'ANSSI, NIS2 entrera en vigueur en France dès lors que l'ensemble des textes de transposition (loi, décrets, arrêtés) auront été promulgués. L'obligation d'enregistrement et les obligations de sécurité ne deviendront contraignantes qu'après l'adoption de la loi et la publication de son décret d'application. Au 3 juin 2026, cette chaîne n'est pas aboutie.",
    exigence: { level: "conseille", note: "entrée en vigueur conditionnée aux textes, à vérifier" },
    sources: ["anssi-nis2"],
    tags: ["France", "à vérifier"],
  },

  // --------------------------------------------------------------------------
  // Theme : entites (champ d'application)
  // --------------------------------------------------------------------------
  {
    id: "nis2-champ",
    refId: "nis2",
    themeId: "entites",
    title: "Champ d'application : règle de taille et exceptions (art. 2)",
    short:
      "NIS2 vise les entités d'un type listé aux annexes I ou II qui sont des moyennes ou grandes entreprises et opèrent dans l'Union. Mais une série d'entités est couverte quelle que soit leur taille (réseaux et services de communications électroniques, fournisseurs DNS, registres de domaines de premier niveau, certaines administrations...).",
    elementDeLangage:
      "« La règle de base : type d'entité listé en annexe + taille moyenne ou grande. Avec des exceptions couvertes sans condition de taille. »",
    detail:
      "Article 2 de la directive (UE) 2022/2555. §1 : « La présente directive s'applique aux entités publiques ou privées d'un type visé à l'annexe I ou II qui constituent des entreprises moyennes en vertu de l'article 2 de l'annexe de la recommandation 2003/361/CE, ou qui dépassent les plafonds prévus au paragraphe 1 dudit article, et qui fournissent leurs services ou exercent leurs activités au sein de l'Union. » §2 : « La présente directive s'applique également aux entités d'un type visé à l'annexe I ou II, quelle que soit leur taille, dans les cas suivants : a) les services sont fournis par : i) des fournisseurs de réseaux de communications électroniques publics ou de services de communications électroniques accessibles au public [...]. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 2" },
    sources: ["nis2-dir"],
    tags: ["entités", "champ d'application"],
  },

  // --------------------------------------------------------------------------
  // Theme : obligations (incident important, chaine d'appro, certification)
  // --------------------------------------------------------------------------
  {
    id: "nis2-incident-important",
    refId: "nis2",
    themeId: "obligations",
    title: "Quand notifier : la notion d'incident « important » (art. 23)",
    short:
      "L'obligation de notification ne porte que sur les incidents « importants ». Un incident est important s'il cause (ou peut causer) une perturbation opérationnelle grave ou des pertes financières, ou s'il porte un dommage considérable à d'autres personnes.",
    detail:
      "Article 23, §3 de la directive (UE) 2022/2555 : « Un incident est considéré comme important si: a) il a causé ou est susceptible de causer une perturbation opérationnelle grave des services ou des pertes financières pour l'entité concernée; b) il a affecté ou est susceptible d'affecter d'autres personnes physiques ou morales en causant des dommages matériels, corporels ou moraux considérables. » (ponctuation du texte publié au JO de l'UE).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 23 §3" },
    sources: ["nis2-dir"],
    tags: ["obligations", "incident", "notification"],
  },
  {
    id: "nis2-chaine-appro",
    refId: "nis2",
    themeId: "obligations",
    title: "Sécurité de la chaîne d'approvisionnement (art. 21 et 22)",
    short:
      "Chaque entité doit gérer les risques liés à ses fournisseurs et prestataires directs : la sécurité de la chaîne d'approvisionnement est une mesure à part entière. Au niveau européen, des évaluations coordonnées des chaînes d'approvisionnement critiques peuvent être menées.",
    detail:
      "Article 21, §2, point d) de la directive (UE) 2022/2555 : les mesures comprennent au moins « la sécurité de la chaîne d'approvisionnement, y compris les aspects liés à la sécurité concernant les relations entre chaque entité et ses fournisseurs ou prestataires de services directs ». Article 22, §1 : « Le groupe de coopération, en coopération avec la Commission et l'ENISA, peut procéder à des évaluations coordonnées des risques pour la sécurité des chaînes d'approvisionnement de services TIC, de systèmes TIC ou de produits TIC critiques spécifiques [...]. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21 §2 d) et art. 22" },
    sources: ["nis2-dir"],
    tags: ["obligations", "chaîne d'approvisionnement"],
  },
  {
    id: "nis2-certification",
    refId: "nis2",
    themeId: "obligations",
    title: "Recours aux schémas européens de certification (art. 24)",
    short:
      "Un État membre peut imposer aux entités d'utiliser des produits, services ou processus TIC certifiés dans le cadre d'un schéma européen de certification de cybersécurité, pour démontrer la conformité à certaines mesures de l'article 21. C'est une faculté de l'État, pas une obligation par défaut.",
    detail:
      "Article 24, §1 de la directive (UE) 2022/2555 : « Afin de démontrer la conformité à certaines exigences visées à l'article 21, les États membres peuvent prescrire aux entités essentielles et importantes d'utiliser des produits TIC, services TIC et processus TIC particuliers [...] certifiés dans le cadre de schémas européens de certification de cybersécurité adoptés conformément à l'article 49 du règlement (UE) 2019/881. En outre, les États membres encouragent les entités essentielles et importantes à utiliser des services de confiance qualifiés. »",
    exigence: { level: "recommande", note: "directive art. 24 : faculté des États membres (peuvent prescrire)" },
    sources: ["nis2-dir"],
    tags: ["obligations", "certification"],
  },

  // --------------------------------------------------------------------------
  // Theme : cadre-ue (autorites, CSIRT, cooperation, registre)
  // --------------------------------------------------------------------------
  {
    id: "nis2-autorites",
    refId: "nis2",
    themeId: "cadre-ue",
    title: "Autorités compétentes et point de contact unique (art. 8)",
    short:
      "Chaque État désigne une ou plusieurs autorités compétentes chargées de la cybersécurité et de la supervision, ainsi qu'un point de contact unique assurant la liaison transfrontière entre États.",
    detail:
      "Article 8 de la directive (UE) 2022/2555. §1 : « Chaque État membre désigne ou établit une ou plusieurs autorités compétentes chargées de la cybersécurité et des tâches de supervision visées au chapitre VII [...]. » §3 : « Chaque État membre désigne ou établit un point de contact unique. [...] » Le point de contact unique « exerce une fonction de liaison visant à assurer la coopération transfrontière des autorités de son État membre » avec celles des autres États.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 8 (obligation des États)" },
    sources: ["nis2-dir"],
    tags: ["cadre UE", "gouvernance"],
  },
  {
    id: "nis2-csirt",
    refId: "nis2",
    themeId: "cadre-ue",
    title: "Les CSIRT, destinataires des notifications (art. 10)",
    short:
      "Chaque État met en place un ou plusieurs CSIRT (centres de réponse aux incidents). C'est au CSIRT (ou à l'autorité compétente) que sont adressées les notifications d'incident, et il assure la gestion des incidents.",
    detail:
      "Article 10, §1 de la directive (UE) 2022/2555 : « Chaque État membre désigne ou met en place un ou plusieurs CSIRT. Les CSIRT peuvent être désignés ou établis au sein d'une autorité compétente. Les CSIRT se conforment aux exigences énumérées à l'article 11, paragraphe 1, couvrent au moins les secteurs, les sous-secteurs et les types d'entités visés aux annexes I et II, et sont chargés de la gestion des incidents selon un processus bien défini. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 10 (obligation des États)" },
    sources: ["nis2-dir"],
    tags: ["cadre UE", "incident"],
  },
  {
    id: "nis2-cooperation",
    refId: "nis2",
    themeId: "cadre-ue",
    title: "Coopération européenne : groupe de coopération, réseau CSIRT, EU-CyCLONe (art. 14 à 16)",
    short:
      "NIS2 organise la coopération européenne sur trois niveaux : un groupe de coopération (stratégique), un réseau des CSIRT (opérationnel), et EU-CyCLONe pour la gestion coordonnée des crises cyber majeures.",
    detail:
      "Directive (UE) 2022/2555. Article 14 : « Un groupe de coopération est institué afin de soutenir et de faciliter la coopération stratégique et l'échange d'informations entre les États membres et de renforcer la confiance. » Article 15 : « Un réseau des CSIRT nationaux est institué afin de contribuer au renforcement de la confiance et de promouvoir une coopération opérationnelle rapide et effective entre les États membres. » Article 16 : « EU-CyCLONe est institué afin de contribuer à la gestion coordonnée, au niveau opérationnel, des incidents de cybersécurité majeurs et des crises [...]. »",
    sources: ["nis2-dir"],
    tags: ["cadre UE", "coopération"],
  },
  {
    id: "nis2-registre",
    refId: "nis2",
    themeId: "cadre-ue",
    title: "Compétence territoriale et registre ENISA (art. 26 et 27)",
    short:
      "En principe, une entité relève de l'État où elle est établie. Mais certains types (fournisseurs DNS, registres de domaines de premier niveau, services cloud, centres de données, CDN, fournisseurs numériques...) suivent des règles particulières et figurent dans un registre tenu par l'ENISA.",
    detail:
      "Article 26, §1 de la directive (UE) 2022/2555 : « Les entités relevant du champ d'application de la présente directive sont considérées comme relevant de la compétence de l'État membre dans lequel elles sont établies », sauf cas particuliers (communications électroniques ; fournisseurs DNS, registres des noms de domaine de premier niveau, services d'informatique en nuage, centres de données, réseaux de diffusion de contenu...). Article 27, §1 : « L'ENISA crée et tient [...] un registre des fournisseurs de services DNS, des registres des noms de domaine de premier niveau, [...] des fournisseurs de services d'informatique en nuage, des fournisseurs de services de centres de données, des fournisseurs de réseaux de diffusion de contenu, [...] ainsi que des fournisseurs de places de marché en ligne, de moteurs de recherche en ligne et de plateformes de services de réseaux sociaux. »",
    sources: ["nis2-dir"],
    tags: ["cadre UE", "compétence", "enregistrement"],
  },

  // --------------------------------------------------------------------------
  // Theme : controle (mesures d'execution)
  // --------------------------------------------------------------------------
  {
    id: "nis2-execution",
    refId: "nis2",
    themeId: "controle",
    title: "Mesures d'exécution : jusqu'à la suspension d'un dirigeant (art. 32)",
    short:
      "Au-delà des amendes, les autorités disposent de mesures graduées : avertissements, instructions contraignantes, ordres de mise en conformité, publication des manquements. Pour les entités essentielles, en dernier recours, elles peuvent suspendre une certification et faire interdire temporairement à un dirigeant d'exercer ses fonctions.",
    elementDeLangage:
      "« NIS2 a des leviers très concrets : jusqu'à suspendre une certification et écarter temporairement un dirigeant d'une entité essentielle. »",
    detail:
      "Article 32, §4 de la directive (UE) 2022/2555 : à l'égard des entités essentielles, les autorités ont au minimum le pouvoir « a) d'émettre des avertissements [...] ; b) d'adopter des instructions contraignantes [...] ou une injonction exigeant des entités concernées qu'elles remédient aux insuffisances [...] ; c) d'ordonner aux entités concernées de mettre un terme à un comportement qui viole la présente directive [...] ; d) d'ordonner [...] de garantir la conformité [...] avec l'article 21 ou de respecter les obligations d'information énoncées à l'article 23 [...] ; [...] h) d'ordonner [...] de rendre publics les aspects de violations [...] ; i) d'imposer [...] une amende administrative en vertu de l'article 34 [...]. » §5 : lorsque ces mesures sont inefficaces, pour une entité essentielle, les autorités peuvent « a) [...] suspendre temporairement [...] une certification ou une autorisation concernant tout ou partie des services [...] » et « b) [...] interdire temporairement à toute personne physique exerçant des responsabilités dirigeantes à un niveau de directeur général ou de représentant légal [...] d'exercer des responsabilités dirigeantes [...] ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 32 §4 et §5" },
    sources: ["nis2-dir"],
    tags: ["contrôle", "exécution", "sanction"],
  },

  // --------------------------------------------------------------------------
  // Extension du 2026-06-12 : fiches verbatim supplementaires (art. 2, 6, 7,
  // 16, 21, 23, 25, 28, 30), citations verifiees contre la version HTML
  // EUR-Lex (ressources/txt/nis2-eurlex-html.txt).
  // --------------------------------------------------------------------------
  {
    id: "nis2-definitions",
    refId: "nis2",
    themeId: "socle",
    title: "Définitions clés : incident, incident évité, cybermenace, vulnérabilité (art. 6)",
    short:
      "NIS2 définit précisément ses notions : un incident compromet la disponibilité, l'authenticité, l'intégrité ou la confidentialité des données ou des services ; un incident évité aurait pu les compromettre ; une vulnérabilité est une faiblesse exploitable par une cybermenace.",
    elementDeLangage:
      "« Dans NIS2, un incident ne se limite pas à la confidentialité : disponibilité, authenticité, intégrité et confidentialité sont sur le même plan. »",
    detail:
      "Article 6 de la directive (UE) 2022/2555 :\n\n- « incident »: « un événement compromettant la disponibilité, l'authenticité, l'intégrité ou la confidentialité des données stockées, transmises ou faisant l'objet d'un traitement, ou des services que les réseaux et [...] »\n- « incident évité »: « un événement qui aurait pu compromettre la disponibilité, l'authenticité, l'intégrité ou la confidentialité des données stockées, transmises ou faisant l'objet d'un traitement, ou des services que les réseaux et systèmes d'information offrent ou rendent accessibles, mais dont la réalisation a pu être empêchée [...] »\n- « cybermenace importante »: « une cybermenace qui, compte tenu de ses caractéristiques techniques, peut être considérée comme susceptible d'avoir un impact grave sur les [...] »\n- « vulnérabilité »: « une faiblesse, susceptibilité ou faille de produits TIC ou de services TIC qui peut être exploitée par une cybermenace ».",
    exigence: { level: "obligatoire", note: "définitions de la directive (UE) 2022/2555, art. 6" },
    sources: ["nis2-dir"],
    tags: ["définition", "socle"],
  },
  {
    id: "nis2-exclusions",
    refId: "nis2",
    themeId: "entites",
    title: "Exclusions : sécurité nationale, défense, application de la loi (art. 2 §7)",
    short:
      "NIS2 ne s'applique pas aux entités de l'administration publique agissant dans les domaines de la sécurité nationale, de la sécurité publique, de la défense ou de l'application de la loi. Les États peuvent en outre exempter des entités spécifiques de ces domaines.",
    elementDeLangage:
      "« NIS2 a des angles morts assumés : sécurité nationale, défense, police et justice pénale sont hors champ pour l'administration. »",
    detail:
      "Article 2, §7 de la directive (UE) 2022/2555 : « La présente directive ne s'applique pas aux entités de l'administration publique qui exercent leurs activités dans les domaines de la sécurité nationale, de la sécurité publique, de la défense ou de l'application de la loi, y compris la prévention et la détection des infractions pénales, ainsi que les enquêtes et les poursuites en la matière. » §8 : « Les États membres peuvent exempter des entités spécifiques qui exercent des activités dans les domaines de la sécurité nationale, de la sécurité publique, de la défense ou de l'application de la loi [...]. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 2 §7 (exclusion) et §8 (faculté d'exemption)" },
    sources: ["nis2-dir"],
    tags: ["entités", "champ d'application"],
  },
  {
    id: "nis2-proportionnalite",
    refId: "nis2",
    themeId: "obligations",
    title: "Proportionnalité des mesures : risque, état de l'art, taille, coût (art. 21 §1)",
    short:
      "Les mesures de l'art. 21 ne sont pas absolues : elles garantissent un niveau de sécurité adapté au risque existant, en tenant compte de l'état des connaissances, des normes applicables et du coût. La proportionnalité s'apprécie selon l'exposition aux risques, la taille de l'entité et la probabilité et la gravité des incidents.",
    elementDeLangage:
      "« NIS2 n'exige pas le maximum partout : elle exige un niveau adapté au risque, apprécié selon l'exposition, la taille et la gravité potentielle. C'est écrit dans l'article 21 lui-même. »",
    detail:
      "Article 21, §1, deuxième et troisième alinéas, de la directive (UE) 2022/2555 : « Les mesures visées au premier alinéa garantissent, pour les réseaux et les systèmes d'information, un niveau de sécurité adapté au risque existant, en tenant compte de l'état des connaissances et, s'il y a lieu, des normes européennes et internationales applicables, ainsi que du coût de mise en œuvre. Lors de l'évaluation de la proportionnalité de ces mesures, il convient de tenir dûment compte du degré d'exposition de l'entité aux risques, de la taille de l'entité et de la probabilité de survenance d'incidents et de leur gravité, y compris leurs conséquences sociétales et économiques. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21 §1 (principe de proportionnalité)" },
    sources: ["nis2-dir"],
    tags: ["obligations", "proportionnalité", "idée reçue"],
  },
  {
    id: "nis2-notification-clients",
    refId: "nis2",
    themeId: "obligations",
    title: "Notifier aussi les destinataires des services, sans responsabilité accrue (art. 23 §1-2)",
    short:
      "La notification ne vise pas que l'autorité : les destinataires des services sont informés des incidents importants susceptibles de nuire à la fourniture des services, et des cybermenaces importantes avec les mesures qu'ils peuvent appliquer. Notifier n'accroît pas la responsabilité de l'entité.",
    elementDeLangage:
      "« Notifier n'est pas s'auto-incriminer : le texte dit explicitement que le simple fait de notifier n'accroît pas la responsabilité de l'entité. »",
    detail:
      "Article 23, §1 de la directive (UE) 2022/2555 : « Le cas échéant, les entités concernées notifient, sans retard injustifié, aux destinataires de leurs services les incidents importants susceptibles de nuire à la fourniture de ces services. » Et : « Le simple fait de notifier un incident n'accroît pas la responsabilité de l'entité qui est à l'origine de la notification. » §2 : « Le cas échéant, les États membres veillent à ce que les entités essentielles et importantes communiquent, sans retard injustifié, aux destinataires de leurs services qui sont potentiellement affectés par une cybermenace importante toutes les mesures ou corrections que ces destinataires peuvent appliquer en réponse à cette menace. Le cas échéant, les entités informent également ces destinataires de la cybermenace importante elle-même. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 23 §1 et §2" },
    sources: ["nis2-dir"],
    tags: ["obligations", "notification", "idée reçue"],
  },
  {
    id: "nis2-dns-whois",
    refId: "nis2",
    themeId: "obligations",
    title: "Données d'enregistrement des noms de domaine : exactes, vérifiées, accessibles (art. 28)",
    short:
      "Les registres de noms de domaine de premier niveau et les bureaux d'enregistrement doivent collecter et maintenir des données d'enregistrement exactes et complètes, avec des procédures de vérification publiques, et répondre aux demandes d'accès légitimes sous 72 heures.",
    elementDeLangage:
      "« NIS2 réhabilite un WHOIS fiable : données exactes et complètes, procédures de vérification publiques, et réponse aux demandes légitimes en 72 heures. »",
    detail:
      "Article 28 de la directive (UE) 2022/2555. §1 : « Afin de contribuer à la sécurité, à la stabilité et à la résilience du DNS, les États membres imposent aux registres des noms de domaine de premier niveau et aux entités fournissant des services d'enregistrement de noms de domaine de collecter les données d'enregistrement de noms de domaine et de les maintenir exactes et complètes au sein d'une base de données spécialisée [...]. » §3 : « les États membres exigent que les registres [...] aient mis en place des politiques et des procédures, notamment des procédures de vérification, visant à garantir que les bases de données visées au paragraphe 1 contiennent des informations exactes et complètes. Les États membres imposent que ces politiques et procédures soient mises à la disposition du public. » §5 : « Les États membres exigent que les registres [...] répondent sans retard injustifié et en tout état de cause dans un délai de 72 heures après réception de toute demande d'accès. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 28 (registres TLD et bureaux d'enregistrement)" },
    sources: ["nis2-dir"],
    tags: ["obligations", "DNS"],
  },
  {
    id: "nis2-notification-volontaire",
    refId: "nis2",
    themeId: "obligations",
    title: "Notification volontaire, y compris hors champ d'application (art. 30)",
    short:
      "Au-delà des notifications obligatoires, les entités peuvent notifier volontairement incidents, cybermenaces et incidents évités ; même des entités hors du champ de NIS2 peuvent signaler des incidents importants. Les États peuvent prioriser le traitement des notifications obligatoires.",
    elementDeLangage:
      "« Même hors champ NIS2, on peut notifier volontairement un incident important au CSIRT : le texte le prévoit expressément. »",
    detail:
      "Article 30 de la directive (UE) 2022/2555. §1 : « Les États membres veillent à ce que, outre l'obligation de notification prévue à l'article 23, des notifications puissent être transmises à titre volontaire aux CSIRT ou, s'il y a lieu, aux autorités compétentes par: a) les entités essentielles et importantes en ce qui concerne les incidents, les cybermenaces et les incidents évités; b) les entités autres que celles visées au point a), indépendamment du fait qu'elles relèvent ou non du champ d'application de la présente directive, en ce qui concerne les incidents importants, les cybermenaces ou les incidents évités. » §2 : « Les États membres peuvent traiter les notifications obligatoires en leur donnant la priorité par rapport aux notifications volontaires. »",
    exigence: { level: "conseille", note: "faculté ouverte par l'art. 30 (notification volontaire)" },
    sources: ["nis2-dir"],
    tags: ["obligations", "notification"],
  },
  {
    id: "nis2-normalisation",
    refId: "nis2",
    themeId: "obligations",
    title: "Normes encouragées, technologies non imposées (art. 25)",
    short:
      "Pour la mise en œuvre de l'art. 21, les États encouragent le recours aux normes et spécifications techniques européennes et internationales, mais la directive interdit d'imposer un type particulier de technologie. NIS2 n'impose donc aucune norme ni produit précis.",
    elementDeLangage:
      "« Non, NIS2 n'impose pas ISO 27001 : elle encourage les normes européennes et internationales, en interdisant expressément d'imposer une technologie particulière. »",
    detail:
      "Article 25, §1 de la directive (UE) 2022/2555 : « Afin de favoriser la mise en œuvre convergente de l'article 21, paragraphes 1 et 2, les États membres encouragent, sans imposer l'utilisation d'un type particulier de technologies ni créer de discrimination en faveur d'un tel type particulier de technologies, le recours à des normes et des spécifications techniques européennes et internationales pour la sécurité des réseaux et des systèmes d'information. »",
    exigence: { level: "recommande", note: "encouragement (art. 25 §1), sans imposer de technologie" },
    sources: ["nis2-dir"],
    tags: ["obligations", "normes", "idée reçue"],
  },
  {
    id: "nis2-strategie-nationale",
    refId: "nis2",
    themeId: "cadre-ue",
    title: "Chaque État adopte une stratégie nationale de cybersécurité (art. 7)",
    short:
      "NIS2 impose à chaque État membre d'adopter une stratégie nationale de cybersécurité : objectifs stratégiques, ressources, mesures politiques et réglementaires pour atteindre et maintenir un niveau élevé de cybersécurité.",
    detail:
      "Article 7 de la directive (UE) 2022/2555 : « Chaque État membre adopte une stratégie nationale en matière de cybersécurité qui détermine les objectifs stratégiques, les ressources nécessaires pour atteindre ces objectifs ainsi que les mesures politiques et réglementaires appropriées, en vue de parvenir à un niveau élevé de cybersécurité et de le maintenir. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 7 (obligation des États membres)" },
    sources: ["nis2-dir"],
    tags: ["cadre UE", "stratégie"],
  },
  {
    id: "nis2-eu-cyclone",
    refId: "nis2",
    themeId: "cadre-ue",
    title: "EU-CyCLONe : la gestion opérationnelle des crises cyber de l'UE (art. 16)",
    short:
      "EU-CyCLONe est le réseau européen pour la préparation et la gestion des crises cyber : il coordonne au niveau opérationnel la gestion des incidents majeurs et des crises, là où le groupe de coopération agit au niveau stratégique. L'ENISA en assure le secrétariat.",
    elementDeLangage:
      "« Trois étages européens : groupe de coopération pour le stratégique, réseau des CSIRT pour la technique, EU-CyCLONe pour la gestion opérationnelle des crises. »",
    detail:
      "Article 16 de la directive (UE) 2022/2555. §1 : « EU-CyCLONe est institué afin de contribuer à la gestion coordonnée, au niveau opérationnel, des incidents de cybersécurité majeurs et des crises, et de garantir l'échange régulier d'informations pertinentes entre les États membres et les institutions, organes et organismes de l'Union. » §2 : « EU-CyCLONe est composé des représentants des autorités des États membres chargées de la gestion des crises de cybersécurité [...]. L'ENISA assure le secrétariat [...]. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 16 (institution au niveau de l'Union)" },
    sources: ["nis2-dir"],
    tags: ["cadre UE", "crise"],
  },
];
