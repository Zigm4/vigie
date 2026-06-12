// QCM NIS2 (directive (UE) 2022/2555 et transposition francaise).
//
// Chaque question est sourcee et porte son niveau d'exigence. Les questions du
// volet francais sont calees sur le STATUT VERIFIE au 2026-06-03 (loi non
// promulguee) ; aucune obligation francaise n'est presentee comme acquise.

import type { QcmQuestion } from "../types.ts";

export const nis2Qcm: QcmQuestion[] = [
  // ---- socle ----
  {
    id: "q-nis2-nature",
    refId: "nis2",
    themeId: "socle",
    question: "NIS2 est-elle d'application directe, comme un règlement européen ?",
    options: [
      { text: "Non : c'est une directive, qui produit ses effets via une transposition nationale", correct: true },
      { text: "Oui : elle s'applique directement dans tous les États membres sans transposition", correct: false },
      { text: "Oui, mais seulement pour les administrations", correct: false },
    ],
    explanation:
      "NIS2 est la directive (UE) 2022/2555. Une directive fixe des objectifs que chaque État transpose dans son droit national ; elle n'impose rien directement aux entités tant qu'elle n'est pas transposée.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-remplace",
    refId: "nis2",
    themeId: "socle",
    question: "Que remplace NIS2 ?",
    options: [
      { text: "La directive NIS1 (2016/1148) et son régime d'opérateurs de services essentiels (OSE)", correct: true },
      { text: "Le dispositif français des OIV/SIIV", correct: false },
      { text: "Le RGPD", correct: false },
    ],
    explanation:
      "NIS2 abroge NIS1 (directive 2016/1148) et remplace la notion d'OSE par les entités essentielles et importantes, sur un périmètre élargi. Elle ne remplace pas le dispositif SAIV (OIV/SIIV).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555 (abroge 2016/1148)" },
    sources: ["nis2-dir", "nis1"],
  },
  {
    id: "q-nis2-applicable-fr",
    refId: "nis2",
    themeId: "socle",
    question: "Au 3 juin 2026, les obligations NIS2 sont-elles exigibles en France ?",
    options: [
      { text: "Non : la loi de transposition n'est pas promulguée et aucun décret n'est paru", correct: true },
      { text: "Oui, depuis l'échéance de transposition du 17 octobre 2024", correct: false },
      { text: "Oui, depuis l'entrée en vigueur de la directive le 16 janvier 2023", correct: false },
    ],
    explanation:
      "Une directive n'est pas exigible tant qu'elle n'est pas transposée. Au 3 juin 2026, la loi française de transposition n'est ni adoptée en séance ni promulguée, et aucun décret n'existe : aucune obligation NIS2 n'est exigible en France.",
    exigence: { level: "conseille", note: "statut au 3 juin 2026, à vérifier" },
    sources: ["anssi-nis2", "loi-resilience"],
  },
  {
    id: "q-nis2-saiv",
    refId: "nis2",
    themeId: "socle",
    question: "NIS2 supprime-t-elle le régime français des OIV/SIIV (dispositif SAIV) ?",
    options: [
      { text: "Non : NIS2 se superpose au dispositif SAIV, une entité pouvant relever des deux", correct: true },
      { text: "Oui : les OIV deviennent automatiquement des entités essentielles et le SAIV disparaît", correct: false },
    ],
    explanation:
      "Le dispositif SAIV (code de la défense, LPM) demeure. NIS2 ajoute son propre régime ; le cumul exact des obligations relève de la loi de transposition, non encore publiée.",
    exigence: { level: "conseille", note: "articulation à vérifier" },
    sources: ["anssi-nis2", "senat-rap"],
  },
  {
    id: "q-nis2-dora",
    refId: "nis2",
    themeId: "socle",
    question: "DORA est-il, comme NIS2, une directive à transposer ?",
    options: [
      { text: "Non : DORA est le règlement (UE) 2022/2554, directement applicable et non transposé", correct: true },
      { text: "Oui : DORA est une directive transposée par la même loi que NIS2", correct: false },
    ],
    explanation:
      "DORA est un règlement (UE) 2022/2554, directement applicable. La directive (UE) 2022/2556 est le texte d'accompagnement transposé. Assimiler 2022/2556 à « DORA » est un raccourci imprécis.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554" },
    sources: ["dora"],
  },

  // ---- entites ----
  {
    id: "q-nis2-ee-ei-obligations",
    refId: "nis2",
    themeId: "entites",
    question: "Les obligations de sécurité diffèrent-elles entre entités essentielles (EE) et importantes (EI) ?",
    options: [
      { text: "Non : les obligations de gestion des risques et de notification sont les mêmes", correct: true },
      { text: "Oui : les EI n'ont aucune obligation de notification d'incident", correct: false },
    ],
    explanation:
      "EE et EI partagent les obligations des articles 21 (gestion des risques) et 23 (notification). La distinction porte sur la supervision (art. 32 vs 33) et le plafond des sanctions (art. 34).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-ee-ei-diff",
    refId: "nis2",
    themeId: "entites",
    question: "Qu'est-ce qui distingue concrètement les EE des EI ?",
    options: [
      { text: "L'intensité de la supervision et le plafond des sanctions", correct: true },
      { text: "Le niveau de chiffrement imposé", correct: false },
      { text: "La langue de la notification d'incident", correct: false },
    ],
    explanation:
      "Les EE subissent une supervision lourde (art. 32, ex ante et ex post) et des amendes plafonnées plus haut ; les EI relèvent d'un contrôle allégé (art. 33) et de plafonds plus bas (art. 34).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 32-34" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-annexes",
    refId: "nis2",
    themeId: "entites",
    question: "Que distinguent les annexes I et II de NIS2 ?",
    options: [
      { text: "Annexe I : secteurs hautement critiques ; annexe II : autres secteurs critiques", correct: true },
      { text: "Annexe I : entités publiques ; annexe II : entités privées", correct: false },
    ],
    explanation:
      "L'annexe I liste les secteurs hautement critiques (énergie, transports, santé, eau, infrastructures numériques, administration...) et l'annexe II d'autres secteurs critiques (poste, déchets, fabrication, alimentation...).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, annexes I et II" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-enregistrement",
    refId: "nis2",
    themeId: "entites",
    question: "Comment une entité entre-t-elle dans le périmètre NIS2 ?",
    options: [
      { text: "Par auto-identification puis enregistrement auprès de l'autorité nationale, sans agrément préalable", correct: true },
      { text: "Par l'obtention d'un agrément délivré au préalable par l'autorité", correct: false },
    ],
    explanation:
      "NIS2 repose sur l'auto-enregistrement : c'est à l'entité de déterminer si elle est concernée et de se déclarer. En France, un pré-enregistrement volontaire est ouvert depuis le 24 novembre 2025 ; l'enregistrement obligatoire n'a pas commencé.",
    exigence: { level: "conseille", note: "auto-enregistrement ; phase obligatoire à venir, à vérifier" },
    sources: ["anssi-nis2", "monespacenis2"],
  },

  // ---- obligations ----
  {
    id: "q-nis2-art20-qui",
    refId: "nis2",
    themeId: "obligations",
    question: "Qui doit approuver et superviser les mesures de gestion des risques (art. 20) ?",
    options: [
      { text: "Les organes de direction de l'entité, qui peuvent en être tenus responsables", correct: true },
      { text: "Uniquement le responsable informatique", correct: false },
      { text: "L'autorité nationale, à la place de l'entité", correct: false },
    ],
    explanation:
      "L'article 20 responsabilise les organes de direction : ils approuvent les mesures de l'article 21, en supervisent la mise en œuvre, peuvent être tenus responsables et doivent suivre une formation.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 20" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-art21-approche",
    refId: "nis2",
    themeId: "obligations",
    question: "Sur quelle approche reposent les mesures de gestion des risques (art. 21) ?",
    options: [
      { text: "Une approche « tous risques », proportionnée", correct: true },
      { text: "La seule protection contre les rançongiciels", correct: false },
    ],
    explanation:
      "L'article 21 impose une approche tous risques avec des mesures proportionnées, et énumère un socle minimal (gestion d'incidents, continuité, chaîne d'approvisionnement, chiffrement, contrôle d'accès, authentification multifacteur...).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-art21-socle",
    refId: "nis2",
    themeId: "obligations",
    question: "Parmi ces mesures, lesquelles figurent au socle minimal de l'article 21 ? (plusieurs réponses)",
    options: [
      { text: "La sécurité de la chaîne d'approvisionnement", correct: true },
      { text: "La cryptographie et le chiffrement", correct: true },
      { text: "L'authentification multifacteur", correct: true },
      { text: "Le dépôt obligatoire du code source auprès de l'État", correct: false },
    ],
    explanation:
      "L'article 21 §2 cite notamment la gestion des incidents, la continuité et les sauvegardes, la sécurité de la chaîne d'approvisionnement, la cryptographie et le chiffrement, le contrôle d'accès et l'authentification multifacteur. Aucun dépôt de code source n'est exigé.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21 §2" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-notif-24",
    refId: "nis2",
    themeId: "obligations",
    question: "Sous quel délai l'alerte précoce d'un incident important doit-elle être transmise (art. 23) ?",
    options: [
      { text: "24 heures après la prise de connaissance de l'incident", correct: true },
      { text: "72 heures", correct: false },
      { text: "Un mois", correct: false },
    ],
    explanation:
      "L'article 23 impose une alerte précoce sous 24 heures, puis une notification d'incident sous 72 heures, puis un rapport final au plus tard un mois après la notification.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 23" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-notif-final",
    refId: "nis2",
    themeId: "obligations",
    question: "Le rapport final d'incident doit être remis au plus tard :",
    options: [
      { text: "Un mois après la notification d'incident (celle des 72 heures)", correct: true },
      { text: "Un mois après la survenance de l'incident", correct: false },
      { text: "72 heures après l'alerte précoce", correct: false },
    ],
    explanation:
      "Le délai d'un mois court depuis la notification d'incident (72 heures), et non depuis l'incident. Si l'incident est encore en cours, un rapport d'avancement est fourni, puis le rapport final dans le mois suivant son traitement.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 23 §4" },
    sources: ["nis2-dir"],
  },

  // ---- controle ----
  {
    id: "q-nis2-supervision",
    refId: "nis2",
    themeId: "controle",
    question: "Comment se distingue la supervision des EE (art. 32) de celle des EI (art. 33) ?",
    options: [
      { text: "EE : contrôle lourd, en amont et en aval ; EI : contrôle allégé, surtout a posteriori", correct: true },
      { text: "EE et EI subissent exactement le même régime de contrôle", correct: false },
    ],
    explanation:
      "L'article 32 soumet les EE à un régime étendu (inspections, audits réguliers, scans, demandes de preuves). L'article 33 applique aux EI un régime allégé, principalement a posteriori, déclenché par un indice de manquement.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 32 et 33" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-sanction-ee",
    refId: "nis2",
    themeId: "controle",
    question: "Quel est le plafond d'amende pour une entité essentielle (art. 34) ?",
    options: [
      { text: "Au moins 10 M€ ou 2 % du chiffre d'affaires annuel mondial, le plus élevé étant retenu", correct: true },
      { text: "7 M€ ou 1,4 % du chiffre d'affaires mondial", correct: false },
      { text: "20 M€ ou 4 % du chiffre d'affaires mondial", correct: false },
    ],
    explanation:
      "L'article 34 impose, pour une entité essentielle, un maximum d'au moins 10 000 000 EUR ou d'au moins 2 % du chiffre d'affaires annuel mondial total, le montant le plus élevé étant retenu.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 34 §4" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-sanction-ei",
    refId: "nis2",
    themeId: "controle",
    question: "Quel est le plafond d'amende pour une entité importante (art. 34) ?",
    options: [
      { text: "Au moins 7 M€ ou 1,4 % du chiffre d'affaires annuel mondial, le plus élevé étant retenu", correct: true },
      { text: "10 M€ ou 2 % du chiffre d'affaires mondial", correct: false },
    ],
    explanation:
      "Pour une entité importante, l'article 34 §5 fixe un maximum d'au moins 7 000 000 EUR ou d'au moins 1,4 % du chiffre d'affaires annuel mondial total, le plus élevé étant retenu (plafonds plus bas que pour les EE).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 34 §5" },
    sources: ["nis2-dir"],
  },

  // ---- france ----
  {
    id: "q-nis2-fr-statut",
    refId: "nis2",
    themeId: "france",
    question: "Quel est le statut de la loi française de transposition au 3 juin 2026 ?",
    options: [
      { text: "Adoptée au Sénat (mars 2025), votée en commission à l'Assemblée (sept. 2025), mais non promulguée", correct: true },
      { text: "Promulguée et entièrement en vigueur, décrets parus", correct: false },
    ],
    explanation:
      "Au 3 juin 2026, le projet de loi « résilience » a été adopté par le Sénat le 12 mars 2025 et voté en commission spéciale à l'Assemblée le 10 septembre 2025, mais n'est pas adopté en séance ni promulgué (examen attendu vers juillet 2026).",
    exigence: { level: "conseille", note: "statut au 3 juin 2026, à vérifier" },
    sources: ["loi-resilience", "senat-rap", "anssi-nis2"],
  },
  {
    id: "q-nis2-fr-recyf",
    refId: "nis2",
    themeId: "france",
    question: "Le Référentiel Cyber France (ReCyF) publié par l'ANSSI est-il obligatoire ?",
    options: [
      { text: "Non : c'est une liste de mesures recommandées, par défaut non obligatoire", correct: true },
      { text: "Oui : son application est obligatoire depuis le 17 mars 2026", correct: false },
    ],
    explanation:
      "Le ReCyF (publié le 17 mars 2026) liste les mesures recommandées pour atteindre les objectifs de NIS2. Présenté comme document de travail, il n'est par défaut pas obligatoire.",
    exigence: { level: "recommande", note: "ReCyF, non obligatoire par défaut, à vérifier" },
    sources: ["recyf", "anssi-nis2"],
  },
  {
    id: "q-nis2-fr-vigueur",
    refId: "nis2",
    themeId: "france",
    question: "À partir de quand NIS2 deviendra-t-elle exigible en France ?",
    options: [
      { text: "Une fois l'ensemble des textes de transposition promulgués (loi, puis décrets et arrêtés)", correct: true },
      { text: "Dès la publication du ReCyF", correct: false },
      { text: "Dès l'ouverture du pré-enregistrement volontaire", correct: false },
    ],
    explanation:
      "Selon l'ANSSI, NIS2 entrera en vigueur en France une fois l'ensemble des textes (loi, décrets, arrêtés) promulgués. Ni le ReCyF ni le pré-enregistrement volontaire ne rendent les obligations exigibles.",
    exigence: { level: "conseille", note: "entrée en vigueur conditionnée aux textes, à vérifier" },
    sources: ["anssi-nis2"],
  },

  // ---- entites (champ, secteurs) ----
  {
    id: "q-nis2-champ",
    refId: "nis2",
    themeId: "entites",
    question: "Quelle est la règle de base pour qu'une entité relève de NIS2 (art. 2) ?",
    options: [
      { text: "Être d'un type listé aux annexes I ou II et être une entreprise moyenne ou grande", correct: true },
      { text: "Réaliser plus d'un million d'euros de chiffre d'affaires, tous secteurs confondus", correct: false },
      { text: "Être détenue majoritairement par des capitaux européens", correct: false },
    ],
    explanation:
      "L'article 2 applique NIS2 aux entités d'un type visé aux annexes I ou II qui sont des entreprises moyennes ou grandes (règle dite du plafond de taille), opérant dans l'Union.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 2 §1" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-champ-sanstaille",
    refId: "nis2",
    themeId: "entites",
    question: "Une petite structure peut-elle relever de NIS2 malgré sa taille ?",
    options: [
      { text: "Oui : certains types (communications électroniques, DNS, registres de domaines, certaines administrations...) sont couverts quelle que soit leur taille", correct: true },
      { text: "Non : en dessous de la taille moyenne, aucune entité n'est jamais concernée", correct: false },
    ],
    explanation:
      "L'article 2 §2 couvre certaines entités indépendamment de leur taille (fournisseurs de réseaux/services de communications électroniques, fournisseurs DNS, registres de noms de domaine de premier niveau, certaines administrations, etc.).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 2 §2" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-secteurs-detail",
    refId: "nis2",
    themeId: "entites",
    question: "Lequel de ces secteurs relève de l'annexe I (secteurs hautement critiques) ?",
    options: [
      { text: "L'énergie", correct: true },
      { text: "La gestion des déchets", correct: false },
      { text: "Les services postaux et d'expédition", correct: false },
    ],
    explanation:
      "L'énergie figure à l'annexe I (secteurs hautement critiques). La gestion des déchets et les services postaux relèvent de l'annexe II (autres secteurs critiques).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, annexes I et II" },
    sources: ["nis2-dir"],
  },

  // ---- obligations (incident important, chaine, certification) ----
  {
    id: "q-nis2-incident-seuil",
    refId: "nis2",
    themeId: "obligations",
    question: "Quels incidents déclenchent l'obligation de notification NIS2 ?",
    options: [
      { text: "Uniquement les incidents « importants » (perturbation grave, pertes, ou dommage considérable à des tiers)", correct: true },
      { text: "Tout incident, même mineur, sans condition", correct: false },
    ],
    explanation:
      "L'article 23 §3 réserve la notification aux incidents « importants » : perturbation opérationnelle grave ou pertes financières, ou dommage matériel, corporel ou moral considérable à d'autres personnes.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 23 §3" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-chaine",
    refId: "nis2",
    themeId: "obligations",
    question: "La sécurité de la chaîne d'approvisionnement est-elle une obligation NIS2 ?",
    options: [
      { text: "Oui : l'art. 21 §2 d) impose de gérer les risques liés aux fournisseurs et prestataires directs", correct: true },
      { text: "Non : elle relève uniquement de contrats commerciaux privés", correct: false },
    ],
    explanation:
      "L'article 21 §2 d) inclut la sécurité de la chaîne d'approvisionnement dans le socle minimal ; l'art. 22 permet des évaluations coordonnées des chaînes critiques au niveau de l'Union.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21 §2 d) et art. 22" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-certif",
    refId: "nis2",
    themeId: "obligations",
    question: "Que prévoit l'article 24 sur la certification ?",
    options: [
      { text: "Un État membre PEUT imposer l'usage de produits/services certifiés (schéma européen) pour prouver la conformité", correct: true },
      { text: "Toute entité DOIT obligatoirement être certifiée pour opérer", correct: false },
    ],
    explanation:
      "L'article 24 est une faculté : les États « peuvent prescrire » l'usage de produits, services ou processus TIC certifiés dans un schéma européen (règlement 2019/881) pour démontrer la conformité à l'article 21.",
    exigence: { level: "recommande", note: "directive art. 24 (faculté des États)" },
    sources: ["nis2-dir"],
  },

  // ---- cadre-ue (autorites, CSIRT, cooperation, registre) ----
  {
    id: "q-nis2-autorites",
    refId: "nis2",
    themeId: "cadre-ue",
    question: "Que doit désigner chaque État membre au titre de NIS2 (art. 8) ?",
    options: [
      { text: "Une ou plusieurs autorités compétentes et un point de contact unique", correct: true },
      { text: "Une agence privée chargée de certifier les entités", correct: false },
    ],
    explanation:
      "L'article 8 impose la désignation d'autorités compétentes (cybersécurité et supervision) et d'un point de contact unique assurant la liaison transfrontière.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 8" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-csirt",
    refId: "nis2",
    themeId: "cadre-ue",
    question: "À qui les incidents importants sont-ils notifiés (art. 10 et 23) ?",
    options: [
      { text: "Au CSIRT (ou, selon le cas, à l'autorité compétente)", correct: true },
      { text: "Directement à la Commission européenne", correct: false },
      { text: "À l'ENISA exclusivement", correct: false },
    ],
    explanation:
      "Chaque État met en place un ou plusieurs CSIRT (art. 10), chargés de la gestion des incidents ; les notifications de l'art. 23 leur sont adressées (ou à l'autorité compétente).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 10" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-cooperation",
    refId: "nis2",
    themeId: "cadre-ue",
    question: "Quel organe NIS2 est dédié à la gestion coordonnée des crises cyber majeures ?",
    options: [
      { text: "EU-CyCLONe", correct: true },
      { text: "Le groupe de coopération", correct: false },
      { text: "Le réseau des CSIRT", correct: false },
    ],
    explanation:
      "EU-CyCLONe (art. 16) coordonne la gestion opérationnelle des crises cyber majeures. Le groupe de coopération (art. 14) est stratégique ; le réseau des CSIRT (art. 15) est opérationnel au quotidien.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 14 à 16" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-registre",
    refId: "nis2",
    themeId: "cadre-ue",
    question: "Quel organe tient le registre de certains fournisseurs (DNS, cloud, centres de données, CDN...) au titre de l'art. 27 ?",
    options: [
      { text: "L'ENISA", correct: true },
      { text: "La CNIL", correct: false },
      { text: "Le préfet de département", correct: false },
    ],
    explanation:
      "L'article 27 confie à l'ENISA la tenue d'un registre des fournisseurs DNS, registres de domaines de premier niveau, services cloud, centres de données, CDN, fournisseurs numériques, etc.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 26 et 27" },
    sources: ["nis2-dir"],
  },

  // ---- controle (mesures d'execution) ----
  {
    id: "q-nis2-execution-dirigeant",
    refId: "nis2",
    themeId: "controle",
    question: "En dernier recours contre une entité essentielle défaillante, que peuvent faire les autorités (art. 32 §5) ?",
    options: [
      { text: "Suspendre une certification et faire interdire temporairement à un dirigeant d'exercer ses fonctions", correct: true },
      { text: "Saisir les actifs de l'entreprise", correct: false },
      { text: "Retirer la nationalité de l'entité", correct: false },
    ],
    explanation:
      "L'article 32 §5 prévoit, lorsque les autres mesures sont inefficaces, la suspension d'une certification/autorisation et l'interdiction temporaire faite à une personne de niveau directeur général ou représentant légal d'exercer des responsabilités dirigeantes.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 32 §5" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-execution-graduee",
    refId: "nis2",
    themeId: "controle",
    question: "Les mesures d'exécution de l'art. 32 se limitent-elles aux amendes ?",
    options: [
      { text: "Non : avertissements, instructions contraignantes, ordres de mise en conformité, publication des manquements, puis amendes", correct: true },
      { text: "Oui : la seule mesure prévue est l'amende administrative", correct: false },
    ],
    explanation:
      "L'article 32 §4 prévoit une gamme graduée (avertissements, instructions contraignantes, ordres de mise en conformité, désignation d'un responsable du contrôle, publication des manquements) ; l'amende n'est qu'une mesure parmi d'autres.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 32 §4" },
    sources: ["nis2-dir"],
  },
  // --------------------------------------------------------------------------
  // Extension du 2026-06-12 : questions sur les fiches ajoutees (art. 2, 6, 7,
  // 16, 21, 23, 25, 28, 30) et renforcement des themes existants.
  // --------------------------------------------------------------------------
  {
    id: "q-nis2-def-incident",
    refId: "nis2",
    themeId: "socle",
    question: "Au sens de NIS2, un « incident » compromet :",
    options: [
      { text: "La disponibilité, l'authenticité, l'intégrité ou la confidentialité des données ou des services", correct: true },
      { text: "Uniquement la confidentialité des données", correct: false },
      { text: "Uniquement la disponibilité des services en ligne", correct: false },
    ],
    explanation:
      "L'article 6 définit l'incident comme « un événement compromettant la disponibilité, l'authenticité, l'intégrité ou la confidentialité des données [...] ou des services ». Les quatre critères sont sur le même plan.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 6 (définitions)" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-def-incident-evite",
    refId: "nis2",
    themeId: "socle",
    question: "Qu'est-ce qu'un « incident évité » au sens de NIS2 ?",
    options: [
      { text: "Un événement qui aurait pu compromettre la disponibilité, l'authenticité, l'intégrité ou la confidentialité, mais ne l'a pas fait", correct: true },
      { text: "Un incident résolu en moins de 24 heures", correct: false },
      { text: "Un incident qui n'a touché aucune donnée personnelle", correct: false },
    ],
    explanation:
      "L'article 6 définit l'incident évité comme « un événement qui aurait pu compromettre la disponibilité, l'authenticité, l'intégrité ou la confidentialité des données [...] ou des services ». La durée de résolution ou la nature personnelle des données n'entrent pas dans la définition.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 6 (définitions)" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-def-vulnerabilite",
    refId: "nis2",
    themeId: "socle",
    question: "Comment NIS2 définit-elle une « vulnérabilité » ?",
    options: [
      { text: "Une faiblesse, susceptibilité ou faille de produits ou services TIC qui peut être exploitée par une cybermenace", correct: true },
      { text: "Tout défaut logiciel référencé dans une base CVE", correct: false },
      { text: "Une non-conformité à une norme ISO", correct: false },
    ],
    explanation:
      "Article 6 : « une faiblesse, susceptibilité ou faille de produits TIC ou de services TIC qui peut être exploitée par une cybermenace ». La définition est fonctionnelle, sans référence à une base ou une norme particulière.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 6 (définitions)" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-exclusions",
    refId: "nis2",
    themeId: "entites",
    question: "NIS2 s'applique-t-elle aux administrations publiques agissant dans les domaines de la sécurité nationale ou de la défense ?",
    options: [
      { text: "Non : ces entités sont expressément exclues du champ d'application", correct: true },
      { text: "Oui, comme toute administration publique", correct: false },
      { text: "Oui, mais seulement pour leurs systèmes non classifiés", correct: false },
    ],
    explanation:
      "L'article 2 §7 exclut les entités de l'administration publique exerçant dans les domaines de la sécurité nationale, de la sécurité publique, de la défense ou de l'application de la loi.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 2 §7" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-exemption-faculte",
    refId: "nis2",
    themeId: "entites",
    question: "Les États membres peuvent-ils exempter d'autres entités exerçant dans la sécurité nationale ou la défense ?",
    options: [
      { text: "Oui : c'est une faculté ouverte par l'article 2 §8", correct: true },
      { text: "Non : la liste des exclusions est limitative et fermée", correct: false },
    ],
    explanation:
      "L'article 2 §8 prévoit que « les États membres peuvent exempter des entités spécifiques qui exercent des activités dans les domaines de la sécurité nationale, de la sécurité publique, de la défense ou de l'application de la loi ». C'est une faculté, pas une obligation.",
    exigence: { level: "conseille", note: "faculté des États membres (art. 2 §8)" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-proportionnalite",
    refId: "nis2",
    themeId: "obligations",
    question: "Selon l'article 21 §1, la proportionnalité des mesures s'apprécie notamment selon :",
    options: [
      { text: "Le degré d'exposition aux risques, la taille de l'entité, la probabilité et la gravité des incidents", correct: true },
      { text: "Le seul coût de mise en œuvre pour l'entité", correct: false },
      { text: "Le chiffre d'affaires de l'entité uniquement", correct: false },
    ],
    explanation:
      "L'article 21 §1 demande de tenir « dûment compte du degré d'exposition de l'entité aux risques, de la taille de l'entité et de la probabilité de survenance d'incidents et de leur gravité, y compris leurs conséquences sociétales et économiques ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21 §1" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-niveau-adapte",
    refId: "nis2",
    themeId: "obligations",
    question: "NIS2 impose-t-elle le niveau de sécurité maximal possible sur tous les systèmes ?",
    options: [
      { text: "Non : un niveau « adapté au risque existant », tenant compte de l'état des connaissances, des normes et du coût", correct: true },
      { text: "Oui : le niveau le plus élevé de l'état de l'art est toujours exigé", correct: false },
    ],
    explanation:
      "L'article 21 §1 exige un niveau de sécurité « adapté au risque existant, en tenant compte de l'état des connaissances et, s'il y a lieu, des normes européennes et internationales applicables, ainsi que du coût de mise en œuvre ». C'est une logique de gestion de risque, pas de maximalisme.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21 §1" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-art21-mfa",
    refId: "nis2",
    themeId: "obligations",
    question: "L'authentification à plusieurs facteurs figure-t-elle dans les mesures minimales de l'article 21 §2 ?",
    options: [
      { text: "Oui : au point j), avec les solutions de communications sécurisées", correct: true },
      { text: "Non : NIS2 ne descend jamais à ce niveau de détail technique", correct: false },
      { text: "Non : elle ne figure que dans les actes d'exécution", correct: false },
    ],
    explanation:
      "Le point j) de l'article 21 §2 vise « l'utilisation de solutions d'authentification à plusieurs facteurs [...] et de communications [...] sécurisées ». Le chiffrement et la cryptographie figurent au point h).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 21 §2 j)" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-notif-responsabilite",
    refId: "nis2",
    themeId: "obligations",
    question: "Notifier un incident à l'autorité augmente-t-il la responsabilité juridique de l'entité ?",
    options: [
      { text: "Non : le texte précise que le simple fait de notifier n'accroît pas la responsabilité de l'entité", correct: true },
      { text: "Oui : la notification vaut reconnaissance de manquement", correct: false },
    ],
    explanation:
      "L'article 23 §1 le dit expressément : « Le simple fait de notifier un incident n'accroît pas la responsabilité de l'entité qui est à l'origine de la notification. »",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 23 §1" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-notif-destinataires",
    refId: "nis2",
    themeId: "obligations",
    question: "Outre l'autorité ou le CSIRT, qui doit être informé d'un incident important susceptible de nuire à la fourniture des services ?",
    options: [
      { text: "Les destinataires des services concernés", correct: true },
      { text: "La presse, par communiqué public obligatoire", correct: false },
      { text: "Personne d'autre : la notification est strictement confidentielle", correct: false },
    ],
    explanation:
      "Article 23 §1 : « les entités concernées notifient, sans retard injustifié, aux destinataires de leurs services les incidents importants susceptibles de nuire à la fourniture de ces services ». En cas de cybermenace importante, l'art. 23 §2 impose aussi de communiquer les mesures ou corrections applicables.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 23 §1 et §2" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-dns-collecte",
    refId: "nis2",
    themeId: "obligations",
    question: "Qu'impose l'article 28 aux registres de noms de domaine de premier niveau et aux bureaux d'enregistrement ?",
    options: [
      { text: "Collecter et maintenir des données d'enregistrement exactes et complètes, avec des procédures de vérification publiques", correct: true },
      { text: "Publier en accès libre l'intégralité des données personnelles des titulaires", correct: false },
      { text: "Bloquer les noms de domaine suspects sous 24 heures", correct: false },
    ],
    explanation:
      "L'article 28 §1 impose de « collecter les données d'enregistrement de noms de domaine et de les maintenir exactes et complètes », dans le respect du droit de la protection des données ; le §3 impose des procédures de vérification rendues publiques.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 28 §1 et §3" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-dns-delai",
    refId: "nis2",
    themeId: "obligations",
    question: "Sous quel délai les registres et bureaux d'enregistrement répondent-ils à une demande d'accès légitime aux données d'enregistrement ?",
    options: [
      { text: "Sans retard injustifié et en tout état de cause dans un délai de 72 heures", correct: true },
      { text: "24 heures", correct: false },
      { text: "Un mois", correct: false },
    ],
    explanation:
      "Article 28 §5 : réponse « sans retard injustifié et en tout état de cause dans un délai de 72 heures après réception de toute demande d'accès » légitime et dûment motivée.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 28 §5" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-volontaire-qui",
    refId: "nis2",
    themeId: "obligations",
    question: "Une entité HORS du champ d'application de NIS2 peut-elle notifier un incident important ?",
    options: [
      { text: "Oui : l'article 30 ouvre la notification volontaire aux entités hors champ", correct: true },
      { text: "Non : seules les entités essentielles et importantes peuvent notifier", correct: false },
    ],
    explanation:
      "L'article 30 §1 b) prévoit la notification volontaire par « les entités autres [...], indépendamment du fait qu'elles relèvent ou non du champ d'application de la présente directive, en ce qui concerne les incidents importants, les cybermenaces ou les incidents évités ».",
    exigence: { level: "conseille", note: "faculté ouverte par l'art. 30 §1" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-volontaire-priorite",
    refId: "nis2",
    themeId: "obligations",
    question: "Comment les États peuvent-ils arbitrer entre notifications obligatoires et volontaires ?",
    options: [
      { text: "Ils peuvent traiter en priorité les notifications obligatoires", correct: true },
      { text: "Ils doivent traiter toutes les notifications dans l'ordre d'arrivée", correct: false },
      { text: "Ils peuvent refuser les notifications volontaires", correct: false },
    ],
    explanation:
      "Article 30 §2 : « Les États membres peuvent traiter les notifications obligatoires en leur donnant la priorité par rapport aux notifications volontaires. » Le traitement suit par ailleurs la procédure de l'article 23.",
    exigence: { level: "conseille", note: "faculté des États (art. 30 §2)" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-normes-imposees",
    refId: "nis2",
    themeId: "obligations",
    question: "NIS2 impose-t-elle une norme (par exemple ISO 27001) ou une technologie particulière ?",
    options: [
      { text: "Non : les États encouragent les normes européennes et internationales, sans imposer de type particulier de technologies", correct: true },
      { text: "Oui : la certification ISO 27001 est exigée pour les entités essentielles", correct: false },
      { text: "Oui : les produits qualifiés ANSSI sont obligatoires", correct: false },
    ],
    explanation:
      "L'article 25 §1 demande d'encourager « sans imposer l'utilisation d'un type particulier de technologies ni créer de discrimination en faveur d'un tel type particulier de technologies, le recours à des normes et des spécifications techniques européennes et internationales ». Aucune norme précise n'est rendue obligatoire par la directive.",
    exigence: { level: "recommande", note: "directive (UE) 2022/2555, art. 25 §1" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-strategie",
    refId: "nis2",
    themeId: "cadre-ue",
    question: "Que doit adopter chaque État membre en vertu de l'article 7 ?",
    options: [
      { text: "Une stratégie nationale de cybersécurité (objectifs, ressources, mesures politiques et réglementaires)", correct: true },
      { text: "Un référentiel technique national obligatoire pour toutes les entreprises", correct: false },
      { text: "Un plan de financement de l'ENISA", correct: false },
    ],
    explanation:
      "Article 7 : « Chaque État membre adopte une stratégie nationale en matière de cybersécurité qui détermine les objectifs stratégiques, les ressources nécessaires [...] ainsi que les mesures politiques et réglementaires appropriées ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 7 (obligation des États)" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-cyclone-role",
    refId: "nis2",
    themeId: "cadre-ue",
    question: "Quel est le rôle d'EU-CyCLONe ?",
    options: [
      { text: "La gestion coordonnée, au niveau opérationnel, des incidents de cybersécurité majeurs et des crises", correct: true },
      { text: "La coopération stratégique et l'échange d'informations entre États (rôle du groupe de coopération)", correct: false },
      { text: "La certification des produits de cybersécurité", correct: false },
    ],
    explanation:
      "Article 16 §1 : EU-CyCLONe « est institué afin de contribuer à la gestion coordonnée, au niveau opérationnel, des incidents de cybersécurité majeurs et des crises ». Le niveau stratégique relève du groupe de coopération (art. 14), le niveau technique du réseau des CSIRT (art. 15).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 16 §1" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-cyclone-secretariat",
    refId: "nis2",
    themeId: "cadre-ue",
    question: "Qui assure le secrétariat d'EU-CyCLONe ?",
    options: [
      { text: "L'ENISA", correct: true },
      { text: "La Commission européenne", correct: false },
      { text: "L'État membre exerçant la présidence du Conseil", correct: false },
    ],
    explanation:
      "Article 16 §2 : « L'ENISA assure le secrétariat » d'EU-CyCLONe. La Commission y participe (membre lors des incidents majeurs ayant un impact important, observatrice sinon).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 16 §2" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-formation-direction",
    refId: "nis2",
    themeId: "obligations",
    question: "Les membres des organes de direction des entités sont-ils tenus de suivre une formation ?",
    options: [
      { text: "Oui : l'article 20 §2 les y oblige, et les entités sont encouragées à former régulièrement leur personnel", correct: true },
      { text: "Non : la formation est seulement recommandée pour les dirigeants", correct: false },
    ],
    explanation:
      "Article 20 §2 : les membres des organes de direction sont « tenus de suivre une formation » ; la formation du personnel est, elle, encouragée. La nuance obligatoire/encouragé est dans le texte même.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 20 §2" },
    sources: ["nis2-dir"],
  },
  {
    id: "q-nis2-sanctions-plancher",
    refId: "nis2",
    themeId: "controle",
    question: "Que signifie la formule « amendes d'un montant maximal s'élevant à au moins 10 000 000 EUR » de l'article 34 ?",
    options: [
      { text: "Un plancher imposé aux États pour le plafond national : le plafond fixé par chaque État doit être d'au moins ce montant", correct: true },
      { text: "Toute violation est punie d'au moins 10 millions d'euros", correct: false },
      { text: "Un plafond absolu que les États ne peuvent pas dépasser", correct: false },
    ],
    explanation:
      "La formule « maximal s'élevant à au moins » impose un minimum au plafond national : les États peuvent prévoir des plafonds plus élevés, et l'amende prononcée dans un cas d'espèce peut être bien inférieure. Ce n'est ni une amende minimale, ni un plafond absolu.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2555, art. 34 §4" },
    sources: ["nis2-dir"],
  },
];
