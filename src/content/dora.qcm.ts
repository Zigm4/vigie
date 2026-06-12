// QCM DORA (reglement (UE) 2022/2554, resilience operationnelle numerique du
// secteur financier).
//
// Chaque question est sourcee et porte son niveau d'exigence. Le QCM piege
// volontairement les confusions classiques :
//   - DORA (reglement, application directe depuis le 17/01/2025) vs NIS2
//     (directive a transposer) ;
//   - delais de notification : fixes par les normes techniques (RTS, art. 20),
//     PAS par le reglement lui-meme (a la difference de NIS2) ;
//   - obligatoire vs volontaire (incidents majeurs vs cybermenaces, partage) ;
//   - TLPT : seulement pour les entites designees par les autorites.

import type { QcmQuestion } from "../types.ts";

export const doraQcm: QcmQuestion[] = [
  // ---- socle ----
  {
    id: "q-dora-nature",
    refId: "dora",
    themeId: "socle",
    question: "DORA doit-il, comme NIS2, être transposé par une loi nationale pour s'appliquer ?",
    options: [
      { text: "Non : c'est un règlement, obligatoire dans tous ses éléments et directement applicable dans tout État membre", correct: true },
      { text: "Oui : comme toute norme européenne, il ne s'applique qu'une fois transposé", correct: false },
      { text: "Oui, mais seulement pour les banques", correct: false },
    ],
    explanation:
      "DORA est le règlement (UE) 2022/2554. L'article 64 le dit expressément : il est « obligatoire dans tous ses éléments et directement applicable dans tout État membre ». C'est la grande différence avec NIS2, qui est une directive et ne produit ses effets qu'une fois transposée.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 64" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-date",
    refId: "dora",
    themeId: "socle",
    question: "Depuis quand les obligations DORA sont-elles exigibles ?",
    options: [
      { text: "Depuis le 17 janvier 2025, date d'application fixée par l'article 64", correct: true },
      { text: "Elles ne le seront qu'à la promulgation de la loi française de transposition", correct: false },
      { text: "Depuis la publication des arrêtés sectoriels français", correct: false },
    ],
    explanation:
      "L'article 64 fixe l'application du règlement « à partir du 17 janvier 2025 ». Aucune transposition n'est nécessaire : les obligations sont exigibles telles quelles depuis cette date.",
    exigence: { level: "obligatoire", note: "art. 64 : applicable depuis le 17 janvier 2025" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-piliers",
    refId: "dora",
    themeId: "socle",
    question: "Lesquels de ces blocs d'exigences font partie de DORA (art. 1) ?",
    options: [
      { text: "La gestion des risques liés aux TIC", correct: true },
      { text: "La notification des incidents majeurs liés aux TIC", correct: true },
      { text: "Les tests de résilience opérationnelle numérique", correct: true },
      { text: "La gestion du risque lié aux prestataires tiers de services TIC", correct: true },
      { text: "Les exigences de fonds propres prudentiels des banques", correct: false },
    ],
    explanation:
      "L'article 1 énumère les exigences uniformes de DORA : gestion du risque TIC, notification des incidents (et, volontairement, des cybermenaces), tests de résilience, gestion du risque lié aux prestataires tiers TIC, partage d'informations. Les fonds propres prudentiels relèvent d'autres textes (CRR/CRD).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 1" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-nis2-articulation",
    refId: "dora",
    themeId: "socle",
    question: "Une banque entre aussi dans le périmètre de NIS2. Quel texte s'applique à sa gestion du risque cyber ?",
    options: [
      { text: "DORA : il est considéré comme un acte juridique sectoriel (lex specialis) par rapport à NIS2", correct: true },
      { text: "NIS2 : la directive, plus récente, prime sur le règlement", correct: false },
      { text: "Les deux intégralement, avec double notification systématique de chaque incident", correct: false },
    ],
    explanation:
      "Pour les entités financières identifiées comme entités essentielles ou importantes sous NIS2, DORA « est considéré comme un acte juridique sectoriel de l'Union aux fins de l'article 4 de ladite directive » (art. 1 §2). Le considérant 16 le qualifie de lex specialis par rapport à NIS2, tout en maintenant un lien avec son écosystème (CSIRT, points de contact).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 1 §2 et considérant 16" },
    sources: ["dora-reg", "nis2-dir"],
  },
  {
    id: "q-dora-2556",
    refId: "dora",
    themeId: "socle",
    question: "Qu'est-ce que la directive (UE) 2022/2556 ?",
    options: [
      { text: "La directive d'accompagnement de DORA, qui modifie les directives sectorielles financières pour les mettre en cohérence", correct: true },
      { text: "Le vrai nom officiel de DORA", correct: false },
      { text: "La directive NIS2", correct: false },
    ],
    explanation:
      "DORA est le règlement (UE) 2022/2554. La directive (UE) 2022/2556, adoptée le même jour, l'accompagne en modifiant les directives sectorielles existantes (crédit, assurance, marchés...) ; c'est elle qui passe par une transposition. NIS2 est la directive (UE) 2022/2555.",
    sources: ["dora-reg", "dir-2556"],
  },
  // ---- perimetre ----
  {
    id: "q-dora-entites",
    refId: "dora",
    themeId: "perimetre",
    question: "Lesquelles de ces entités sont visées par DORA (art. 2 §1) ?",
    options: [
      { text: "Les établissements de crédit", correct: true },
      { text: "Les entreprises d'assurance et de réassurance", correct: true },
      { text: "Les prestataires de services sur crypto-actifs agréés", correct: true },
      { text: "Les établissements de paiement et de monnaie électronique", correct: true },
      { text: "Les hôpitaux et établissements de santé", correct: false },
    ],
    explanation:
      "L'article 2 §1 liste une vingtaine de catégories du secteur financier : crédit, paiement, monnaie électronique, investissement, crypto-actifs, assurance, gestion de fonds, infrastructures de marché... La santé relève d'autres cadres (NIS2 notamment), pas de DORA.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 2" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-prestataires-tic",
    refId: "dora",
    themeId: "perimetre",
    question: "Les prestataires tiers de services TIC (cloud compris) sont-ils dans le champ de DORA ?",
    options: [
      { text: "Oui : ils figurent à l'article 2 §1 (point u), sans être comptés parmi les « entités financières »", correct: true },
      { text: "Non : DORA ne s'applique qu'aux entités financières régulées", correct: false },
      { text: "Oui, mais uniquement s'ils sont établis dans l'Union", correct: false },
    ],
    explanation:
      "L'article 2 §1, point u), inclut « les prestataires tiers de services TIC » dans le champ du règlement. Le §2 précise que seules les entités des points a) à t) sont collectivement dénommées « entités financières » : les prestataires TIC sont couverts à un autre titre, notamment via le cadre de supervision des prestataires critiques.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 2 §1 u) et §2" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-proportionnalite",
    refId: "dora",
    themeId: "perimetre",
    question: "Que permet le principe de proportionnalité de l'article 4 ?",
    options: [
      { text: "Moduler la mise en œuvre des règles selon la taille, le profil de risque et la complexité des activités", correct: true },
      { text: "Dispenser totalement les petites entités financières de DORA", correct: false },
      { text: "Négocier avec l'autorité un calendrier d'application différé", correct: false },
    ],
    explanation:
      "L'article 4 impose de mettre en œuvre les règles « conformément au principe de proportionnalité, en tenant compte de leur taille et de leur profil de risque global ainsi que de la nature, de l'ampleur et de la complexité de leurs services, activités et opérations ». C'est une modulation de l'application, pas une dispense.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 4" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-micro",
    refId: "dora",
    themeId: "perimetre",
    question: "Comment DORA traite-t-il les microentreprises ?",
    options: [
      { text: "Certaines sont exclues (ex. intermédiaires d'assurance micro/PME) et celles qui restent dans le champ bénéficient d'allégements ciblés", correct: true },
      { text: "Toutes les microentreprises sont exclues du règlement", correct: false },
      { text: "Aucune différence : les microentreprises appliquent tout, à l'identique", correct: false },
    ],
    explanation:
      "L'article 2 §3 exclut notamment les intermédiaires d'assurance qui sont des microentreprises ou des PME, et les institutions de retraite professionnelle de quinze affiliés au plus. Pour les microentreprises restant assujetties, de nombreuses obligations sont allégées (formule « autres que les microentreprises » : fonction de contrôle, programme de tests, TLPT...).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 2 §3 et allégements ciblés" },
    sources: ["dora-reg"],
  },

  // ---- risques ----
  {
    id: "q-dora-organe-direction",
    refId: "dora",
    themeId: "risques",
    question: "Qui porte, selon l'article 5, la responsabilité ultime de la gestion du risque lié aux TIC ?",
    options: [
      { text: "L'organe de direction de l'entité financière", correct: true },
      { text: "Le responsable de la sécurité des systèmes d'information (RSSI)", correct: false },
      { text: "Le prestataire informatique de l'entité", correct: false },
    ],
    explanation:
      "L'article 5 §2 confie à l'organe de direction la définition, l'approbation et la supervision du cadre de gestion du risque TIC, dont il « est responsable » ; il « assume la responsabilité ultime de la gestion du risque lié aux TIC de l'entité financière ».",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 5" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-formation-direction",
    refId: "dora",
    themeId: "risques",
    question: "Les membres de l'organe de direction ont-ils une obligation personnelle de compétence sur le risque TIC ?",
    options: [
      { text: "Oui : ils maintiennent à jour des connaissances suffisantes, notamment par des formations régulières", correct: true },
      { text: "Non : ils peuvent déléguer entièrement le sujet à la DSI", correct: false },
    ],
    explanation:
      "L'article 5 §4 impose aux membres de l'organe de direction de maintenir « activement à jour des connaissances et des compétences suffisantes » pour comprendre et évaluer le risque TIC, « notamment en suivant régulièrement une formation spécifique » proportionnée au risque géré.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 5 §4" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-cadre-revue",
    refId: "dora",
    themeId: "risques",
    question: "À quelle fréquence le cadre de gestion du risque lié aux TIC doit-il être réexaminé ?",
    options: [
      { text: "Au moins une fois par an (périodiquement pour les microentreprises), et notamment en cas d'incident majeur", correct: true },
      { text: "Tous les cinq ans", correct: false },
      { text: "Uniquement à la demande de l'autorité compétente", correct: false },
    ],
    explanation:
      "L'article 6 §5 prévoit que le cadre est « documenté et réexaminé au moins une fois par an, ou périodiquement pour les microentreprises », ainsi qu'en cas de survenance d'incidents majeurs et selon les instructions ou conclusions des tests et audits.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 6 §5" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-fonction-controle",
    refId: "dora",
    themeId: "risques",
    question: "Que prévoit l'article 6 §4 pour la surveillance du risque TIC (hors microentreprises) ?",
    options: [
      { text: "Une fonction de contrôle indépendante, selon un modèle de type trois lignes de défense", correct: true },
      { text: "Un comité d'audit externe imposé à toutes les entités", correct: false },
      { text: "Rien : l'organisation interne est totalement libre", correct: false },
    ],
    explanation:
      "Les entités autres que les microentreprises « confient la responsabilité de la gestion et de la surveillance du risque lié aux TIC à une fonction de contrôle » dont l'indépendance doit être garantie pour éviter les conflits d'intérêts, avec une séparation selon le modèle des trois lignes de défense ou un modèle équivalent (art. 6 §4).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 6 §4" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-sauvegarde",
    refId: "dora",
    themeId: "risques",
    question: "Que doivent préciser les politiques de sauvegarde exigées par l'article 12 ?",
    options: [
      { text: "La portée des données sauvegardées et la fréquence minimale, selon la criticité et la confidentialité", correct: true },
      { text: "Uniquement le nom du logiciel de sauvegarde retenu", correct: false },
      { text: "Rien de précis : la sauvegarde est une simple recommandation", correct: false },
    ],
    explanation:
      "L'article 12 §1 impose de définir et documenter « des politiques et procédures de sauvegarde qui précisent la portée des données concernées par la sauvegarde et la fréquence minimale de celle-ci, en fonction de la criticité des informations ou du niveau de confidentialité des données », plus des procédures de restauration. La restauration sur ses propres systèmes utilise des systèmes séparés physiquement et logiquement du système source (§3).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 12" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-post-incident",
    refId: "dora",
    themeId: "risques",
    question: "Après un incident majeur lié aux TIC ayant perturbé les activités principales, que prévoit l'article 13 ?",
    options: [
      { text: "Un examen post-incident pour analyser les causes et déterminer les améliorations", correct: true },
      { text: "Une simple information du personnel, sans formalisme", correct: false },
      { text: "La résiliation automatique des contrats avec les prestataires impliqués", correct: false },
    ],
    explanation:
      "L'article 13 §2 impose des « examens post-incident » après qu'un incident majeur a perturbé les activités principales, afin d'analyser les causes de la perturbation et de déterminer les améliorations à apporter. Les changements qui en résultent sont communiqués aux autorités compétentes sur demande (hors microentreprises).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 13 §2" },
    sources: ["dora-reg"],
  },

  // ---- incidents ----
  {
    id: "q-dora-enregistrement",
    refId: "dora",
    themeId: "incidents",
    question: "Quels incidents l'entité financière doit-elle enregistrer en interne (art. 17) ?",
    options: [
      { text: "Tous les incidents liés aux TIC, ainsi que les cybermenaces importantes", correct: true },
      { text: "Uniquement les incidents majeurs notifiés à l'autorité", correct: false },
      { text: "Uniquement les incidents d'origine malveillante", correct: false },
    ],
    explanation:
      "L'article 17 §2 est explicite : « Les entités financières enregistrent tous les incidents liés aux TIC et les cybermenaces importantes. » L'enregistrement interne couvre donc bien plus large que la notification, réservée aux incidents majeurs.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 17 §2" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-classification",
    refId: "dora",
    themeId: "incidents",
    question: "Lesquels de ces critères servent à classer un incident TIC selon l'article 18 ?",
    options: [
      { text: "Le nombre et/ou l'importance des clients ou contreparties touchés", correct: true },
      { text: "La durée de l'incident, y compris les interruptions de service", correct: true },
      { text: "Les pertes de données (disponibilité, authenticité, intégrité, confidentialité)", correct: true },
      { text: "La marque des équipements informatiques concernés", correct: false },
    ],
    explanation:
      "L'article 18 §1 liste six critères : clients/contreparties touchés, durée, répartition géographique, pertes de données, criticité des services touchés, conséquences économiques. Les seuils d'importance qui font d'un incident un incident majeur sont précisés par des normes techniques de réglementation (art. 18 §3).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 18" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-delais",
    refId: "dora",
    themeId: "incidents",
    question: "Où sont fixés les délais de notification des incidents majeurs DORA (notification initiale, rapports) ?",
    options: [
      { text: "Dans des normes techniques de réglementation (RTS) : l'article 19 renvoie aux délais « à fixer conformément à l'article 20 »", correct: true },
      { text: "Dans le règlement lui-même : 24 h, 72 h et un mois, comme NIS2", correct: false },
      { text: "Librement, par chaque entité financière dans sa politique interne", correct: false },
    ],
    explanation:
      "Piège classique : la cascade 24 h / 72 h / 1 mois est celle de l'article 23 de NIS2. DORA, lui, ne fixe pas de chiffres dans le corps du règlement : l'article 19 §4 impose la soumission « dans les délais à fixer conformément à l'article 20 », lequel charge les AES d'élaborer des normes techniques de réglementation pour « fixer les délais pour la notification initiale et pour chaque rapport ».",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 19 §4 et 20 (délais fixés par RTS)" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-rapports",
    refId: "dora",
    themeId: "incidents",
    question: "Quels sont les trois jalons de la déclaration d'un incident majeur (art. 19 §4) ?",
    options: [
      { text: "Notification initiale, rapport intermédiaire, rapport final", correct: true },
      { text: "Pré-alerte, dépôt de plainte, retour d'expérience", correct: false },
      { text: "Alerte précoce, communiqué de presse, audit externe", correct: false },
    ],
    explanation:
      "L'article 19 §4 impose de soumettre à l'autorité compétente : a) une notification initiale ; b) un rapport intermédiaire (quand la situation évolue sensiblement, ou à la demande de l'autorité) ; c) un rapport final, lorsque l'analyse des causes originelles est terminée.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 19 §4" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-cybermenace",
    refId: "dora",
    themeId: "incidents",
    question: "La notification des cybermenaces importantes à l'autorité compétente est-elle obligatoire ?",
    options: [
      { text: "Non : c'est une notification volontaire (« peuvent notifier »), quand l'entité estime la menace pertinente", correct: true },
      { text: "Oui : toute cybermenace importante doit être notifiée sous peine de sanction", correct: false },
    ],
    explanation:
      "L'article 19 §2 est une faculté : les entités « peuvent notifier, à titre volontaire, les cybermenaces importantes » quand elles estiment la menace pertinente pour le système financier, les utilisateurs ou les clients. Seule la déclaration des incidents majeurs (art. 19 §1) est obligatoire.",
    exigence: { level: "conseille", note: "art. 19 §2 : notification volontaire" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-clients",
    refId: "dora",
    themeId: "incidents",
    question: "Un incident majeur affecte les intérêts financiers des clients. Que doit faire l'entité (art. 19 §3) ?",
    options: [
      { text: "Informer ses clients de l'incident et des mesures d'atténuation, sans retard injustifié", correct: true },
      { text: "Rien : seule l'autorité compétente doit être informée", correct: false },
      { text: "Attendre la clôture de l'enquête interne avant toute communication", correct: false },
    ],
    explanation:
      "L'article 19 §3 impose d'informer les clients « sans retard injustifié », dès que l'entité a connaissance d'un incident majeur ayant une incidence sur leurs intérêts financiers, en précisant les mesures prises pour en atténuer les effets.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 19 §3" },
    sources: ["dora-reg"],
  },

  // ---- tests ----
  {
    id: "q-dora-tests-qui",
    refId: "dora",
    themeId: "tests",
    question: "Qui doit établir un programme de tests de résilience opérationnelle numérique (art. 24) ?",
    options: [
      { text: "Toutes les entités financières, à l'exception des microentreprises", correct: true },
      { text: "Uniquement les banques d'importance systémique", correct: false },
      { text: "Uniquement les entités désignées par leur autorité de supervision", correct: false },
    ],
    explanation:
      "L'article 24 §1 vise « les entités financières, autres que les microentreprises » : elles établissent, maintiennent et réexaminent un programme solide et complet de tests, partie intégrante du cadre de gestion du risque TIC. La désignation par l'autorité ne concerne que les TLPT (art. 26).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 24 (hors microentreprises)" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-tests-freq",
    refId: "dora",
    themeId: "tests",
    question: "À quelle fréquence les systèmes soutenant des fonctions critiques ou importantes doivent-ils être testés (art. 24 §6) ?",
    options: [
      { text: "Au moins une fois par an", correct: true },
      { text: "Au moins tous les trois ans", correct: false },
      { text: "À chaque incident seulement", correct: false },
    ],
    explanation:
      "L'article 24 §6 impose de soumettre « au moins une fois par an » tous les systèmes et applications de TIC qui soutiennent des fonctions critiques ou importantes à des tests appropriés. La fréquence triennale, elle, concerne les TLPT (art. 26 §1).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 24 §6" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-tlpt-qui",
    refId: "dora",
    themeId: "tests",
    question: "Quelles entités sont tenues de réaliser des tests de pénétration fondés sur la menace (TLPT) ?",
    options: [
      { text: "Celles que les autorités compétentes désignent, selon des critères d'incidence, de stabilité financière et de profil de risque TIC", correct: true },
      { text: "Toutes les entités financières sans exception", correct: false },
      { text: "Uniquement les prestataires tiers de services TIC", correct: false },
    ],
    explanation:
      "Le TLPT ne vise pas tout le monde : l'article 26 §8 prévoit que « les autorités compétentes désignent les entités financières qui sont tenues de réaliser un test de pénétration fondé sur la menace », sur la base de facteurs d'incidence, d'enjeux de stabilité financière et du profil de risque TIC. Microentreprises et entités au cadre simplifié (art. 16) en sont exclues.",
    exigence: { level: "obligatoire", note: "pour les entités désignées (art. 26 §8)" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-tlpt-freq",
    refId: "dora",
    themeId: "tests",
    question: "À quelle fréquence une entité désignée doit-elle réaliser un TLPT (art. 26 §1) ?",
    options: [
      { text: "Au moins tous les trois ans, fréquence que l'autorité compétente peut réduire ou augmenter", correct: true },
      { text: "Tous les ans, sans exception", correct: false },
      { text: "Une seule fois, à l'entrée en application du règlement", correct: false },
    ],
    explanation:
      "L'article 26 §1 impose des tests avancés « au moins tous les trois ans » ; en fonction du profil de risque et des circonstances opérationnelles, l'autorité compétente peut demander de réduire ou d'augmenter cette fréquence.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 26 §1" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-tlpt-env",
    refId: "dora",
    themeId: "tests",
    question: "Sur quels systèmes le TLPT est-il mené, et avec quels testeurs ?",
    options: [
      { text: "Sur des systèmes en environnement de production en direct, avec des testeurs qualifiés ; en cas de testeurs internes, un testeur externe est engagé tous les trois tests", correct: true },
      { text: "Sur une maquette isolée, par n'importe quel prestataire", correct: false },
      { text: "Sur les seuls postes de travail, par l'auditeur interne", correct: false },
    ],
    explanation:
      "L'article 26 §2 impose un test couvrant des fonctions critiques ou importantes « sur des systèmes en environnement de production en direct ». Les testeurs répondent aux exigences de l'article 27, et le recours à des testeurs internes impose d'engager « un testeur externe tous les trois tests » (art. 26 §8). Les normes techniques suivent le cadre TIBER-EU.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 26 et 27" },
    sources: ["dora-reg"],
  },

  // ---- tiers ----
  {
    id: "q-dora-externalisation",
    refId: "dora",
    themeId: "tiers",
    question: "Une entité financière externalise un service TIC critique dans le cloud. Qui est responsable du respect de DORA ?",
    options: [
      { text: "L'entité financière, qui reste à tout moment pleinement responsable de toutes ses obligations", correct: true },
      { text: "Le prestataire cloud, par transfert contractuel de responsabilité", correct: false },
      { text: "Personne : l'externalisation fait sortir le service du champ de DORA", correct: false },
    ],
    explanation:
      "L'article 28 §1 a) est sans ambiguïté : les entités financières « restent à tout moment pleinement responsables du respect et de l'exécution de toutes les obligations découlant du présent règlement et du droit applicable aux services financiers », quels que soient les accords conclus.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 28 §1 a)" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-registre",
    refId: "dora",
    themeId: "tiers",
    question: "Qu'est-ce que le « registre d'informations » de l'article 28 §3 ?",
    options: [
      { text: "Le recensement tenu à jour de tous les accords contractuels de services TIC, mis à disposition de l'autorité sur demande", correct: true },
      { text: "Le registre public des prestataires cloud agréés par l'Union", correct: false },
      { text: "Le journal des incidents de sécurité de l'entité", correct: false },
    ],
    explanation:
      "Chaque entité tient et met à jour « un registre d'informations en rapport avec tous les accords contractuels portant sur l'utilisation de services TIC », en distinguant les services soutenant des fonctions critiques ou importantes ; elle déclare au moins une fois par an les nouveaux accords et met le registre à disposition de l'autorité compétente sur demande (art. 28 §3).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 28 §3" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-contrats",
    refId: "dora",
    themeId: "tiers",
    question: "Lesquels de ces éléments doivent figurer dans tout contrat de services TIC (art. 30 §2) ?",
    options: [
      { text: "Une description claire et exhaustive des services TIC et fonctions fournis", correct: true },
      { text: "Les lieux (régions ou pays) de fourniture des services et de traitement des données", correct: true },
      { text: "Les droits de résiliation et les délais de préavis minimaux", correct: true },
      { text: "Le montant de la prime d'assurance cyber du prestataire", correct: false },
    ],
    explanation:
      "L'article 30 §2 impose des clauses minimales dans tous les contrats de services TIC : description des services, lieux de fourniture et de traitement des données, protection des données, assistance en cas d'incident, coopération avec les autorités, droits de résiliation et préavis... Les contrats portant sur des fonctions critiques ou importantes ajoutent les exigences du §3 (audits, TLPT, stratégie de sortie).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 30" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-critiques",
    refId: "dora",
    themeId: "tiers",
    question: "Qui désigne les prestataires tiers de services TIC « critiques » et qui les supervise (art. 31) ?",
    options: [
      { text: "Les AES (ABE, AEMF, AEAPP) les désignent, et l'une d'elles devient le superviseur principal de chaque prestataire critique", correct: true },
      { text: "Chaque entité financière désigne elle-même ses prestataires critiques", correct: false },
      { text: "L'ANSSI, au titre de la transposition française", correct: false },
    ],
    explanation:
      "L'article 31 confie aux autorités européennes de surveillance (AES), via le comité mixte et sur recommandation du forum de supervision, la désignation des prestataires tiers critiques et celle d'un « superviseur principal » : l'AES dont relèvent les entités financières totalisant la plus grande part d'actifs parmi les clients du prestataire. DORA étant un règlement, aucune autorité nationale de transposition n'intervient dans cette désignation.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 31" },
    sources: ["dora-reg"],
  },

  // ---- partage ----
  {
    id: "q-dora-partage",
    refId: "dora",
    themeId: "partage",
    question: "L'échange de renseignements sur les cybermenaces entre entités financières (art. 45) est-il obligatoire ?",
    options: [
      { text: "Non : c'est une faculté (« peuvent échanger »), encadrée (communautés de confiance, confidentialité, RGPD, concurrence)", correct: true },
      { text: "Oui : chaque entité doit adhérer à au moins un dispositif de partage", correct: false },
    ],
    explanation:
      "L'article 45 §1 autorise les entités à échanger indicateurs de compromission, tactiques, techniques et procédures, alertes et outils de configuration, à condition que le partage vise la résilience, se déroule « au sein de communautés d'entités financières de confiance » et respecte confidentialité, protection des données et règles de concurrence. C'est une faculté, pas une obligation.",
    exigence: { level: "conseille", note: "art. 45 §1 : faculté encadrée" },
    sources: ["dora-reg"],
  },
  {
    id: "q-dora-partage-notif",
    refId: "dora",
    themeId: "partage",
    question: "Une entité rejoint un dispositif de partage d'informations sur les cybermenaces. Que doit-elle faire ?",
    options: [
      { text: "Notifier sa participation aux autorités compétentes (et plus tard, le cas échéant, la cessation de son adhésion)", correct: true },
      { text: "Rien : la participation est purement privée", correct: false },
      { text: "Obtenir une autorisation préalable de l'ENISA", correct: false },
    ],
    explanation:
      "L'article 45 §3 impose de notifier aux autorités compétentes la participation aux dispositifs de partage « lors de la validation de leur adhésion ou, le cas échéant, la cessation de leur adhésion, lorsque celle-ci prend effet ». La participation est libre, sa déclaration ne l'est pas.",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 45 §3 (déclaration de la participation)" },
    sources: ["dora-reg"],
  },
];
