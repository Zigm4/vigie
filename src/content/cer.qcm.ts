// QCM REC/CER (directive (UE) 2022/2557 et transposition francaise).
//
// Chaque question est sourcee et porte son niveau d'exigence. Les pieges visent
// les confusions classiques : CER vs NIS2 (physique vs cyber, autorite competente
// vs CSIRT, 24 h / 1 mois vs 24 h / 72 h / 1 mois, sanctions sans plafond vs
// plafonds chiffres), entite critique vs OIV, directive vs reglement. Les
// questions du volet francais sont calees sur le STATUT VERIFIE au 2026-06-12
// (loi non promulguee) ; aucune obligation francaise n'est presentee comme acquise.

import type { QcmQuestion } from "../types.ts";

export const cerQcm: QcmQuestion[] = [
  // ---- socle ----
  {
    id: "q-cer-nature",
    refId: "cer",
    themeId: "socle",
    question: "CER est-elle d'application directe, comme un règlement européen ?",
    options: [
      { text: "Non : c'est une directive, qui produit ses effets via une transposition nationale", correct: true },
      { text: "Oui : elle s'applique directement dans tous les États membres sans transposition", correct: false },
      { text: "Oui, mais seulement pour les entités critiques d'importance européenne particulière", correct: false },
    ],
    explanation:
      "CER (REC) est la directive (UE) 2022/2557. Une directive fixe des objectifs que chaque État transpose dans son droit national ; elle n'impose rien directement aux entités tant qu'elle n'est pas transposée. L'échéance de transposition était fixée au 17 octobre 2024 (art. 26).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-objet",
    refId: "cer",
    themeId: "socle",
    question: "Quel est l'objet de la directive CER, par rapport à NIS2 ?",
    options: [
      { text: "La résilience tous risques (notamment physique) des entités critiques fournissant des services essentiels", correct: true },
      { text: "La cybersécurité des réseaux et systèmes d'information, comme NIS2", correct: false },
      { text: "La résilience opérationnelle numérique du secteur financier", correct: false },
    ],
    explanation:
      "CER vise la résilience des entités critiques (prévention, protection physique, continuité, rétablissement) face à tous les risques. La cybersécurité relève de NIS2 (2022/2555) : CER « ne s'applique pas aux questions couvertes par la directive (UE) 2022/2555 » (art. 1 §2). La résilience numérique du secteur financier, c'est DORA.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 1" },
    sources: ["cer-dir", "nis2"],
  },
  {
    id: "q-cer-abroge",
    refId: "cer",
    themeId: "socle",
    question: "Quel texte la directive CER abroge-t-elle ?",
    options: [
      { text: "La directive 2008/114/CE sur les infrastructures critiques européennes", correct: true },
      { text: "La directive NIS1 (2016/1148)", correct: false },
      { text: "Le dispositif français SAIV (OIV/PIV)", correct: false },
    ],
    explanation:
      "CER abroge la directive 2008/114/CE (recensement et désignation des infrastructures critiques européennes) avec effet au 18 octobre 2024 (art. 27). NIS1 est abrogée par NIS2, pas par CER. Le SAIV est un dispositif national, qu'une directive n'abroge pas.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 27" },
    sources: ["cer-dir", "dir-2008-114"],
  },
  {
    id: "q-cer-transposition",
    refId: "cer",
    themeId: "socle",
    question: "Quelle était l'échéance de transposition de CER par les États membres ?",
    options: [
      { text: "Le 17 octobre 2024 (application des dispositions à partir du 18 octobre 2024)", correct: true },
      { text: "Le 17 juillet 2026", correct: false },
      { text: "Le 17 janvier 2026", correct: false },
    ],
    explanation:
      "Art. 26 : adoption et publication des dispositions nationales « au plus tard le 17 octobre 2024 », application à partir du 18 octobre 2024. Le 17 janvier 2026 est l'échéance de la stratégie et de l'évaluation des risques d'État membre (art. 4 et 5), le 17 juillet 2026 celle du recensement des entités critiques (art. 6).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 26" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-coordination",
    refId: "cer",
    themeId: "socle",
    question: "Comment CER s'articule-t-elle avec NIS2 ?",
    options: [
      { text: "Champs séparés (CER ne s'applique pas aux questions couvertes par NIS2), mais mise en œuvre coordonnée obligatoire", correct: true },
      { text: "CER absorbe NIS2 : une entité critique n'a plus d'obligations cyber distinctes", correct: false },
      { text: "Les deux directives sont indépendantes, sans aucune obligation de coordination", correct: false },
    ],
    explanation:
      "Art. 1 §2 : CER « ne s'applique pas aux questions couvertes par la directive (UE) 2022/2555 », mais « la sécurité physique et la cybersécurité des entités critiques étant liées, les États membres veillent à ce que la présente directive et la directive (UE) 2022/2555 soient mises en œuvre de manière coordonnée ».",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 1 §2" },
    sources: ["cer-dir", "nis2"],
  },
  {
    id: "q-cer-secteurs-exemptes",
    refId: "cer",
    themeId: "socle",
    question: "Quel est le sort des entités critiques des secteurs bancaire, des marchés financiers et des infrastructures numériques (points 3, 4 et 8 de l'annexe) ?",
    options: [
      { text: "Elles peuvent être recensées comme entités critiques, mais sont exemptées des principales obligations CER (art. 11 et chapitres III, IV et VI)", correct: true },
      { text: "Elles sont totalement exclues de la directive CER", correct: false },
      { text: "Elles cumulent toutes les obligations CER, DORA et NIS2", correct: false },
    ],
    explanation:
      "Art. 8 : « l'article 11 et les chapitres III, IV et VI ne s'appliquent pas aux entités critiques [...] des secteurs figurant aux points 3, 4 et 8 du tableau de l'annexe ». Ces secteurs restent dans l'annexe (recensement), mais leurs obligations de fond relèvent de DORA et de NIS2.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 8" },
    sources: ["cer-dir"],
  },

  // ---- entites ----
  {
    id: "q-cer-designation",
    refId: "cer",
    themeId: "entites",
    question: "Comment une entité devient-elle « entité critique » au sens de CER ?",
    options: [
      { text: "Par recensement et désignation par l'État membre, qui lui notifie sa désignation", correct: true },
      { text: "Par auto-identification et auto-enregistrement auprès de l'autorité nationale, comme sous NIS2", correct: false },
      { text: "Par certification délivrée par la Commission européenne", correct: false },
    ],
    explanation:
      "C'est l'inverse de NIS2 : sous CER, l'État recense les entités critiques (art. 6) et leur notifie leur désignation dans un délai d'un mois. Une entité critique est, par définition (art. 2, point 1), « une entité [...] qui a été désignée par un État membre conformément à l'article 6 ». NIS2 repose au contraire sur l'auto-enregistrement.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 2 et 6" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-recensement-date",
    refId: "cer",
    themeId: "entites",
    question: "Pour quand chaque État membre doit-il avoir recensé ses entités critiques ?",
    options: [
      { text: "Au plus tard le 17 juillet 2026", correct: true },
      { text: "Au plus tard le 17 octobre 2024", correct: false },
      { text: "Au plus tard le 17 janvier 2026", correct: false },
    ],
    explanation:
      "Art. 6 §1 : « Au plus tard le 17 juillet 2026, chaque État membre recense les entités critiques pour les secteurs et sous-secteurs figurant à l'annexe. » Le 17 octobre 2024 est l'échéance de transposition, le 17 janvier 2026 celle de la stratégie et de l'évaluation des risques d'État membre.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 6 §1" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-def-resilience",
    refId: "cer",
    themeId: "entites",
    question: "Comment CER définit-elle la « résilience » d'une entité critique ?",
    options: [
      { text: "La capacité à prévenir tout incident, à s'en protéger, à y réagir, à y résister, à l'atténuer, à l'absorber, à s'y adapter et à s'en rétablir", correct: true },
      { text: "La capacité à restaurer ses systèmes d'information après une cyberattaque", correct: false },
      { text: "La capacité financière à absorber les pertes causées par un incident", correct: false },
    ],
    explanation:
      "Art. 2, point 2 : la résilience couvre tout le cycle de vie de l'incident, de la prévention au rétablissement, et l'incident n'est pas limité au cyber : c'est « un événement qui perturbe ou est susceptible de perturber de manière importante la fourniture d'un service essentiel » (point 3).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 2" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-secteurs-nb",
    refId: "cer",
    themeId: "entites",
    question: "Combien de secteurs figurent à l'annexe de la directive CER ?",
    options: [
      { text: "11 secteurs, dans une annexe unique", correct: true },
      { text: "18 secteurs, répartis en deux annexes (hautement critiques et autres critiques)", correct: false },
      { text: "12 secteurs d'activités d'importance vitale", correct: false },
    ],
    explanation:
      "L'annexe de CER liste 11 secteurs (énergie, transports, secteur bancaire, infrastructures des marchés financiers, santé, eau potable, eaux résiduaires, infrastructures numériques, administration publique, espace, denrées alimentaires). Les deux annexes (I et II), c'est NIS2 ; les secteurs d'activités d'importance vitale, c'est le dispositif français SAIV.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, annexe" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-strategie",
    refId: "cer",
    themeId: "entites",
    question: "Quelles obligations de cadrage national CER impose-t-elle aux États membres, et pour quand ?",
    options: [
      { text: "Une stratégie de résilience des entités critiques et une évaluation des risques d'État membre, au plus tard le 17 janvier 2026", correct: true },
      { text: "Uniquement la désignation d'un CSIRT national avant le 17 octobre 2024", correct: false },
      { text: "Aucune : le cadrage national est laissé à la libre appréciation des États", correct: false },
    ],
    explanation:
      "Art. 4 §1 : chaque État adopte « au plus tard le 17 janvier 2026 » une stratégie de résilience des entités critiques (mise à jour au moins tous les quatre ans). Art. 5 §1 : une évaluation des risques d'État membre est réalisée au plus tard le 17 janvier 2026, puis au moins tous les quatre ans. Les CSIRT relèvent de NIS2, pas de CER.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 4 et 5" },
    sources: ["cer-dir"],
  },

  // ---- obligations ----
  {
    id: "q-cer-eval-delai",
    refId: "cer",
    themeId: "obligations",
    question: "Dans quel délai une entité critique doit-elle réaliser sa propre évaluation des risques après notification de sa désignation ?",
    options: [
      { text: "Neuf mois, puis selon les besoins et au moins tous les quatre ans", correct: true },
      { text: "24 heures", correct: false },
      { text: "Aucun délai : l'évaluation des risques incombe uniquement à l'État membre", correct: false },
    ],
    explanation:
      "Art. 12 §1 : évaluation des risques « dans un délai de neuf mois suivant la réception de la notification visée à l'article 6, paragraphe 3, selon les besoins par la suite et au moins tous les quatre ans ». L'évaluation des risques d'État membre (art. 5) existe aussi, mais ne dispense pas l'entité de la sienne.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 12" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-mesures-nature",
    refId: "cer",
    themeId: "obligations",
    question: "Parmi les mesures de résilience exigées par l'article 13 de CER figurent... (plusieurs réponses)",
    options: [
      { text: "La protection physique des locaux et infrastructures critiques (clôtures, barrières, surveillance, contrôle d'accès)", correct: true },
      { text: "Un plan de résilience (ou documents équivalents) décrivant les mesures prises", correct: true },
      { text: "La désignation d'un agent de liaison, point de contact avec les autorités compétentes", correct: true },
      { text: "L'utilisation obligatoire de solutions d'authentification à plusieurs facteurs", correct: false },
    ],
    explanation:
      "Art. 13 : mesures techniques, de sécurité et organisationnelles couvrant prévention, protection physique, réaction, rétablissement, sécurité liée au personnel et sensibilisation (§1), formalisées dans un plan de résilience (§2), avec un agent de liaison (§3). L'authentification à plusieurs facteurs est une mesure de l'article 21 de NIS2, pas de CER.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 13" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-antecedents",
    refId: "cer",
    themeId: "obligations",
    question: "Que prévoit CER en matière de vérification des antécédents ?",
    options: [
      { text: "Dans des cas dûment motivés, l'entité critique peut demander la vérification des antécédents des personnes occupant des fonctions sensibles ou ayant accès à ses locaux et systèmes", correct: true },
      { text: "Un criblage systématique et obligatoire de l'ensemble du personnel de toutes les entités critiques", correct: false },
      { text: "Rien : la vérification des antécédents est interdite par la directive", correct: false },
    ],
    explanation:
      "Art. 14 §1 : les États précisent les conditions dans lesquelles une entité critique « est autorisée, dans des cas dûment motivés [...], à présenter des demandes de vérification des antécédents ». La vérification est proportionnée et strictement limitée au nécessaire (§2) ; elle couvre au minimum l'identité et les casiers judiciaires pertinents (§3).",
    exigence: { level: "obligatoire", note: "art. 14 : cadre défini par les États ; faculté encadrée de l'entité" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-notif-delai",
    refId: "cer",
    themeId: "obligations",
    question: "Quel est le calendrier de notification d'un incident sous CER ?",
    options: [
      { text: "Première notification au plus tard 24 h après en avoir pris connaissance, puis rapport détaillé au plus tard un mois après", correct: true },
      { text: "Alerte précoce sous 24 h, notification sous 72 h, rapport final sous un mois", correct: false },
      { text: "Notification unique sous 72 h", correct: false },
    ],
    explanation:
      "Art. 15 §1 : « une première notification au plus tard 24 heures après avoir pris connaissance d'un incident, suivie, s'il y a lieu, d'un rapport détaillé au plus tard un mois après ». La cascade 24 h / 72 h / 1 mois est celle de NIS2 (art. 23), pas celle de CER.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 15" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-notif-qui",
    refId: "cer",
    themeId: "obligations",
    question: "À qui l'entité critique notifie-t-elle ses incidents sous CER ?",
    options: [
      { text: "À l'autorité compétente désignée au titre de CER", correct: true },
      { text: "Au CSIRT national, comme sous NIS2", correct: false },
      { text: "Directement à la Commission européenne, dans tous les cas", correct: false },
    ],
    explanation:
      "Art. 15 §1 : les entités critiques notifient « à l'autorité compétente » les incidents perturbant de manière importante un service essentiel. Le CSIRT est le destinataire prévu par NIS2. La Commission n'est notifiée par les autorités compétentes que si l'incident a (ou pourrait avoir) un impact important dans six États membres ou plus.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 15 §1" },
    sources: ["cer-dir"],
  },

  // ---- controle-ue ----
  {
    id: "q-cer-ecip",
    refId: "cer",
    themeId: "controle-ue",
    question: "Qu'est-ce qu'une entité critique « d'importance européenne particulière » ?",
    options: [
      { text: "Une entité critique qui fournit les mêmes services essentiels (ou similaires) à ou dans six États membres ou plus, notifiée comme telle", correct: true },
      { text: "Une entité critique dont le chiffre d'affaires dépasse 10 M€", correct: false },
      { text: "Une entité désignée directement par la Commission, sans passer par un État membre", correct: false },
    ],
    explanation:
      "Art. 17 §1 : trois conditions cumulatives : désignation comme entité critique (art. 6), fourniture des mêmes services essentiels ou de services similaires « à ou dans six États membres ou plus », et notification par la Commission. Elle peut alors faire l'objet de missions de conseil (art. 18). La désignation initiale reste nationale.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 17" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-supervision",
    refId: "cer",
    themeId: "controle-ue",
    question: "De quels pouvoirs les autorités compétentes disposent-elles pour superviser les entités critiques (art. 21) ? (plusieurs réponses)",
    options: [
      { text: "Inspections sur place des infrastructures critiques et des locaux, et supervision à distance des mesures", correct: true },
      { text: "Effectuer ou ordonner des audits, et exiger la preuve de la mise en œuvre effective des mesures", correct: true },
      { text: "Enjoindre de remédier aux violations constatées dans un délai raisonnable", correct: true },
      { text: "Interdire temporairement à un dirigeant d'exercer ses fonctions", correct: false },
    ],
    explanation:
      "Art. 21 §1 à §3 : inspections sur place et supervision à distance, audits (y compris audit indépendant aux frais de l'entité), demandes d'informations et injonctions de mise en conformité. La suspension temporaire d'un dirigeant est une mesure d'exécution de NIS2 (art. 32 §5), pas de CER.",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 21" },
    sources: ["cer-dir"],
  },
  {
    id: "q-cer-sanctions",
    refId: "cer",
    themeId: "controle-ue",
    question: "CER fixe-t-elle des plafonds d'amendes chiffrés, comme NIS2 ?",
    options: [
      { text: "Non : elle renvoie le régime des sanctions aux États membres, en exigeant des sanctions effectives, proportionnées et dissuasives", correct: true },
      { text: "Oui : 10 M€ ou 2 % du chiffre d'affaires annuel mondial", correct: false },
      { text: "Oui : 7 M€ ou 1,4 % du chiffre d'affaires annuel mondial", correct: false },
    ],
    explanation:
      "Art. 22 : « Les États membres déterminent le régime des sanctions [...]. Ces sanctions doivent être effectives, proportionnées et dissuasives. » Aucun montant n'est fixé. Les plafonds 10 M€ / 2 % (EE) et 7 M€ / 1,4 % (EI) sont ceux de NIS2 (art. 34).",
    exigence: { level: "obligatoire", note: "directive (UE) 2022/2557, art. 22" },
    sources: ["cer-dir", "nis2"],
  },

  // ---- france ----
  {
    id: "q-cer-fr-statut",
    refId: "cer",
    themeId: "france",
    question: "Au 12 juin 2026, les obligations issues de CER sont-elles exigibles en France ?",
    options: [
      { text: "Non : la loi de transposition (projet de loi « résilience », Titre I) n'est pas promulguée et aucun décret n'est paru", correct: true },
      { text: "Oui, depuis l'échéance de transposition du 17 octobre 2024", correct: false },
      { text: "Oui, depuis l'entrée en vigueur de la directive au niveau européen", correct: false },
    ],
    explanation:
      "Une directive n'impose rien directement aux entités tant qu'elle n'est pas transposée. Au 12 juin 2026, le projet de loi « résilience des infrastructures critiques et renforcement de la cybersécurité » (dont le Titre I transpose CER) n'est ni adopté définitivement ni promulgué : l'échéance du 17 octobre 2024 est dépassée sans que les obligations soient exigibles. À vérifier.",
    exigence: { level: "conseille", note: "statut au 12 juin 2026, à vérifier" },
    sources: ["loi-resilience", "senat-rap"],
  },
  {
    id: "q-cer-fr-oiv",
    refId: "cer",
    themeId: "france",
    question: "Un OIV (opérateur d'importance vitale du dispositif SAIV) est-il automatiquement une « entité critique » au sens de CER ?",
    options: [
      { text: "Non : aucune équivalence n'est établie tant que la loi de transposition et ses textes d'application ne sont pas publiés", correct: true },
      { text: "Oui : la directive CER désigne d'office les OIV comme entités critiques", correct: false },
      { text: "Non : le dispositif SAIV a été abrogé par la directive CER", correct: false },
    ],
    explanation:
      "L'entité critique est désignée par l'État selon les critères de l'art. 6 de CER ; l'OIV relève du code de la défense (dispositif SAIV), que le Titre I de la loi « résilience » doit faire évoluer. Tant que ces textes ne sont pas promulgués, la correspondance entre les deux notions n'est pas établie : ne rien présumer, à vérifier.",
    exigence: { level: "conseille", note: "articulation SAIV / CER à vérifier (transposition en cours)" },
    sources: ["sgdsn-saiv", "loi-resilience"],
  },
];
