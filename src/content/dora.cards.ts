// Cartes de revision DORA (reglement (UE) 2022/2554, resilience operationnelle
// numerique du secteur financier).
//
// Etat verifie le 2026-06-12 d'apres le texte officiel EUR-Lex FR
// (ressources/txt/dora-eurlex-html.txt, extrait de la version HTML EUR-Lex).
// Principe directeur du referentiel :
//   - DORA est un REGLEMENT : applicable directement dans tous les Etats membres
//     depuis le 17 janvier 2025, sans transposition (art. 64). C'est le point
//     pedagogique majeur face a NIS2 (directive, qui exige une transposition).
//   - Les delais precis de notification des incidents NE SONT PAS dans le
//     reglement : l'article 20 renvoie a des normes techniques de reglementation
//     (RTS). Aucun chiffre de delai n'est donc cite ici.
//
// Sourcage : toutes les fiches sont en VERBATIM (citations « » recopiees du texte
// EUR-Lex FR et verifiees par scripts/selfcheck-module.py), sauf la fiche repere
// dora-structure (cartographie des chapitres, detailParaphrase + detailNote).

import type { ReviewCard } from "../types.ts";

const REPERE_NOTE =
  "Fiche repère (cartographie du règlement), et non une citation : elle situe les chapitres pour s'orienter. Se reporter au texte du règlement (UE) 2022/2554 sur EUR-Lex (source citée ci-dessous) pour le contenu exact.";

export const doraCards: ReviewCard[] = [
  // --------------------------------------------------------------------------
  // Theme : socle (nature du texte, calendrier, articulation NIS2)
  // --------------------------------------------------------------------------
  {
    id: "dora-quoi",
    refId: "dora",
    themeId: "socle",
    title: "Qu'est-ce que DORA (art. 1)",
    short:
      "DORA est le règlement (UE) 2022/2554 du 14 décembre 2022 sur la résilience opérationnelle numérique du secteur financier. Il impose aux entités financières des exigences uniformes organisées en cinq blocs : gestion du risque TIC, notification des incidents, tests de résilience, maîtrise du risque lié aux prestataires tiers TIC, et partage d'informations sur les cybermenaces.",
    elementDeLangage:
      "« DORA, c'est le texte européen qui unifie la cybersécurité du secteur financier : un seul règlement pour le risque TIC, les incidents, les tests, les prestataires et le partage d'informations. »",
    detail:
      "Article 1er, paragraphe 1, du règlement (UE) 2022/2554 : « Pour atteindre un niveau commun élevé de résilience opérationnelle numérique, le présent règlement définit les exigences uniformes relatives à la sécurité des réseaux et des systèmes d'information sous-tendant les processus opérationnels des entités financières ». Les exigences applicables aux entités financières concernent notamment : « la gestion des risques liés aux technologies de l'information et de la communication (TIC) » ; « la notification, aux autorités compétentes, des incidents majeurs liés aux TIC et la notification, à titre volontaire, des cybermenaces importantes aux autorités compétentes » ; « les tests de résilience opérationnelle numérique » ; « le partage d'informations et de renseignements en rapport avec les cybermenaces et les cybervulnérabilités » ; « les mesures destinées à garantir la gestion saine du risque lié aux prestataires tiers de services TIC » (art. 1, §1, point a, i à vi).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 1" },
    sources: ["dora-reg"],
    tags: ["définition", "cadre"],
  },
  {
    id: "dora-reglement-direct",
    refId: "dora",
    themeId: "socle",
    title: "Idée reçue : DORA n'est pas une directive à transposer",
    short:
      "Point clé, et confusion fréquente avec NIS2 : DORA est un règlement, pas une directive. Il s'applique directement dans tous les États membres, sans transposition nationale, depuis le 17 janvier 2025. À cette date, ses obligations sont exigibles telles quelles, contrairement à NIS2 dont l'application dépend des lois nationales de transposition.",
    elementDeLangage:
      "« DORA n'attend aucune loi française : c'est un règlement européen, applicable tel quel depuis le 17 janvier 2025. NIS2 est une directive, DORA non. »",
    detail:
      "Article 64 du règlement (UE) 2022/2554 : « Le présent règlement entre en vigueur le vingtième jour suivant celui de sa publication au Journal officiel de l'Union européenne. » ; « **Il s'applique à partir du 17 janvier 2025.** » ; « Le présent règlement est **obligatoire dans tous ses éléments et directement applicable dans tout État membre**. »",
    exigence: { level: "obligatoire", note: "art. 64 : applicable depuis le 17 janvier 2025, sans transposition" },
    sources: ["dora-reg"],
    tags: ["idée reçue", "calendrier", "cadre"],
  },
  {
    id: "dora-lex-specialis",
    refId: "dora",
    themeId: "socle",
    title: "Articulation avec NIS2 : DORA est une lex specialis (art. 1 §2)",
    short:
      "Pour les entités financières qui seraient aussi des entités essentielles ou importantes au sens de NIS2, DORA prime : il est considéré comme un acte juridique sectoriel au sens de l'article 4 de la directive NIS2. Le considérant 16 le dit expressément : DORA constitue une lex specialis par rapport à NIS2, tout en maintenant un lien avec son écosystème (CSIRT, points de contact).",
    elementDeLangage:
      "« Une banque ne cumule pas DORA et NIS2 sur le même terrain : DORA est la lex specialis du secteur financier, c'est lui qui s'applique en matière de gestion du risque TIC et de notification. »",
    detail:
      "Article 1er, paragraphe 2, du règlement (UE) 2022/2554 : « S'agissant des entités financières identifiées en tant qu'entités essentielles ou importantes conformément aux dispositions nationales transposant l'article 3 de la directive (UE) 2022/2555, le présent règlement est considéré comme un **acte juridique sectoriel de l'Union** aux fins de l'article 4 de ladite directive. » Considérant 16 : « le présent règlement constitue une **lex specialis** en ce qui concerne la directive (UE) 2022/2555 » ; et « il est indispensable de maintenir un lien étroit entre le secteur financier et le cadre horizontal de l'Union en matière de cybersécurité ».",
    sources: ["dora-reg", "nis2-dir"],
    tags: ["articulation", "NIS2", "idée reçue"],
  },
  {
    id: "dora-dir-accompagnement",
    refId: "dora",
    themeId: "socle",
    title: "La directive d'accompagnement (UE) 2022/2556",
    short:
      "DORA ne voyage pas seul : la directive (UE) 2022/2556, adoptée le même jour, modifie les directives sectorielles financières existantes (établissements de crédit, assurance, marchés...) pour les mettre en cohérence avec le règlement. C'est elle, et non DORA, qui passe par une transposition nationale.",
    elementDeLangage:
      "« Le paquet DORA, c'est deux textes : le règlement 2022/2554, directement applicable, et la directive 2022/2556 qui toilette les directives sectorielles. Appeler la directive 2022/2556 « DORA » est un raccourci imprécis. »",
    detail:
      "Considérant 102 du règlement (UE) 2022/2554 : « Étant donné que le présent règlement, conjointement avec la directive (UE) 2022/2556 du Parlement européen et du Conseil [...], consiste en une consolidation des dispositions relatives à la gestion du risque lié aux TIC énoncées dans de multiples règlements et directives de l'acquis de l'Union dans le domaine des services financiers [...], il convient, afin de garantir une cohérence totale, de modifier lesdits règlements pour y préciser que les dispositions pertinentes applicables au risque lié aux TIC sont énoncées dans le présent règlement. »",
    sources: ["dora-reg", "dir-2556"],
    tags: ["cadre", "idée reçue"],
  },
  {
    id: "dora-structure",
    detailParaphrase: true,
    detailNote: REPERE_NOTE,
    refId: "dora",
    themeId: "socle",
    title: "Repère : la structure du règlement (chapitres I à IX)",
    short:
      "Pour s'orienter : le règlement est organisé en neuf chapitres. Le cœur opérationnel tient en cinq blocs : chapitre II (gestion du risque TIC), III (incidents), IV (tests), V (prestataires tiers TIC, avec la supervision des prestataires critiques), VI (partage d'informations).",
    detail:
      "Plan du règlement (UE) 2022/2554 : chapitre I, Dispositions générales (art. 1 à 4 : objet, champ d'application, définitions, proportionnalité) ; chapitre II, Gestion du risque lié aux TIC (art. 5 à 16) ; chapitre III, Gestion, classification et notification des incidents liés aux TIC (art. 17 à 23) ; chapitre IV, Tests de résilience opérationnelle numérique (art. 24 à 27) ; chapitre V, Gestion des risques liés aux prestataires tiers de services TIC (art. 28 à 44, dont le cadre de supervision des prestataires tiers critiques) ; chapitre VI, Dispositifs de partage d'informations (art. 45) ; chapitre VII, Autorités compétentes (art. 46 et suivants) ; chapitre VIII, Actes délégués ; chapitre IX, Dispositions transitoires et finales (dont l'art. 64, entrée en application).",
    sources: ["dora-reg"],
    tags: ["repère", "cadre"],
  },

  // --------------------------------------------------------------------------
  // Theme : perimetre (entites visees, proportionnalite, exclusions)
  // --------------------------------------------------------------------------
  {
    id: "dora-perimetre-entites",
    refId: "dora",
    themeId: "perimetre",
    title: "Qui est visé : les entités financières (art. 2)",
    short:
      "DORA couvre la quasi-totalité du secteur financier régulé : banques, établissements de paiement et de monnaie électronique, entreprises d'investissement, prestataires de services sur crypto-actifs, assurances et intermédiaires, gestionnaires de fonds, infrastructures de marché... soit vingt catégories d'entités financières (points a à t). Les prestataires tiers de services TIC (point u) entrent aussi dans le champ, sans être des « entités financières ».",
    elementDeLangage:
      "« DORA ne vise pas que les banques : paiement, assurance, gestion d'actifs, crypto-actifs, infrastructures de marché... vingt catégories d'entités financières, plus les prestataires TIC eux-mêmes. »",
    detail:
      "Article 2, paragraphe 1, du règlement (UE) 2022/2554 : « Sans préjudice des paragraphes 3 et 4, le présent règlement s'applique aux entités suivantes: a) les établissements de crédit; b) les établissements de paiement [...]; c) les prestataires de services d'information sur les comptes; d) les établissements de monnaie électronique [...]; e) les entreprises d'investissement; [...] n) les entreprises d'assurance et de réassurance; o) les intermédiaires d'assurance, les intermédiaires de réassurance et les intermédiaires d'assurance à titre accessoire; [...] u) les prestataires tiers de services TIC. » Paragraphe 2 : « Aux fins du présent règlement, les entités visées au paragraphe 1, points a) à t), sont collectivement dénommées «entités financières». »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 2" },
    sources: ["dora-reg"],
    tags: ["périmètre", "entités"],
  },
  {
    id: "dora-proportionnalite",
    refId: "dora",
    themeId: "perimetre",
    title: "Le principe de proportionnalité (art. 4)",
    short:
      "DORA s'applique de façon proportionnée : la mise en œuvre des règles tient compte de la taille, du profil de risque global et de la nature, l'ampleur et la complexité des services de l'entité. La proportionnalité module l'application, elle ne dispense pas du règlement.",
    elementDeLangage:
      "« La proportionnalité de DORA, c'est un curseur, pas une exemption : on adapte l'intensité des mesures à sa taille et à son profil de risque. »",
    detail:
      "Article 4 du règlement (UE) 2022/2554. §1 : « Les entités financières mettent en œuvre les règles énoncées au chapitre II conformément au **principe de proportionnalité**, en tenant compte de leur taille et de leur profil de risque global ainsi que de la nature, de l'ampleur et de la complexité de leurs services, activités et opérations. » §2 : « l'application par les entités financières des chapitres III et IV et du chapitre V, section I, est proportionnée à leur taille et à leur profil de risque global » [...].",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 4 (modulation, pas dispense)" },
    sources: ["dora-reg"],
    tags: ["périmètre", "proportionnalité"],
  },
  {
    id: "dora-exclusions-micro",
    refId: "dora",
    themeId: "perimetre",
    title: "Exclusions et allégements : microentreprises et petites structures (art. 2 §3 et §4)",
    short:
      "Quelques acteurs sortent du champ : notamment les intermédiaires d'assurance qui sont des microentreprises ou des PME, et les institutions de retraite professionnelle de quinze affiliés au plus. Les États membres peuvent en outre exclure certaines entités listées par la directive bancaire. Et pour les microentreprises restant dans le champ, de nombreux articles prévoient des allégements (formule « autres que les microentreprises »).",
    detail:
      "Article 2, paragraphe 3, du règlement (UE) 2022/2554 : « Le présent règlement ne s'applique pas aux: [...] c) institutions de retraite professionnelle qui gèrent des régimes de retraite qui, ensemble, ne comptent pas plus de quinze affiliés au total; [...] e) intermédiaires d'assurance, intermédiaires de réassurance et intermédiaires d'assurance à titre accessoire qui sont des **microentreprises ou des petites ou moyennes entreprises** ». Paragraphe 4 : « Les États membres **peuvent** exclure du champ d'application du présent règlement les entités visées à l'article 2, paragraphe 5, points 4) à 23), de la directive 2013/36/UE qui sont situées sur leur territoire respectif. »",
    exigence: { level: "obligatoire", note: "exclusions de l'art. 2 §3 ; l'exclusion nationale du §4 est une faculté des États" },
    sources: ["dora-reg"],
    tags: ["périmètre", "microentreprises"],
  },

  // --------------------------------------------------------------------------
  // Theme : risques (gouvernance art. 5, cadre art. 6, mesures art. 7-14)
  // --------------------------------------------------------------------------
  {
    id: "dora-gouvernance",
    refId: "dora",
    themeId: "risques",
    title: "Gouvernance : l'organe de direction est responsable (art. 5)",
    short:
      "Comme NIS2, DORA fait remonter le sujet au sommet : l'organe de direction définit, approuve et supervise le cadre de gestion du risque TIC et en est responsable, jusqu'à la responsabilité ultime. Ses membres doivent entretenir leurs connaissances, notamment par des formations régulières.",
    elementDeLangage:
      "« Avec DORA, le risque TIC n'est pas un sujet de DSI : c'est l'organe de direction qui approuve le cadre, le supervise et en porte la responsabilité ultime. »",
    detail:
      "Article 5 du règlement (UE) 2022/2554. §2 : « **L'organe de direction** de l'entité financière définit, approuve, supervise et **est responsable** de la mise en œuvre de toutes les dispositions relatives au cadre de gestion du risque lié aux TIC visé à l'article 6, paragraphe 1. » À ce titre, il « assume la responsabilité ultime de la gestion du risque lié aux TIC de l'entité financière » (§2, point a). §4 : « Les membres de l'organe de direction de l'entité financière maintiennent activement à jour des connaissances et des compétences suffisantes pour comprendre et évaluer le risque lié aux TIC et son incidence sur les opérations de l'entité financière, notamment en suivant régulièrement une **formation spécifique** proportionnée au risque lié aux TIC géré. »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 5" },
    sources: ["dora-reg"],
    tags: ["gouvernance", "direction"],
  },
  {
    id: "dora-cadre-gestion-risque",
    refId: "dora",
    themeId: "risques",
    title: "Le cadre de gestion du risque lié aux TIC (art. 6)",
    short:
      "Chaque entité doit disposer d'un cadre de gestion du risque TIC solide, complet et documenté, intégré à sa gestion globale des risques, réexaminé au moins une fois par an, et porté par une stratégie de résilience opérationnelle numérique. Hors microentreprises, une fonction de contrôle indépendante en surveille la gestion (modèle des trois lignes de défense).",
    detail:
      "Article 6 du règlement (UE) 2022/2554. §1 : « Les entités financières disposent d'un **cadre de gestion du risque lié aux TIC** solide, complet et bien documenté, faisant partie de leur système global de gestion des risques, qui leur permet de parer au risque lié aux TIC de manière rapide, efficiente et exhaustive et de garantir un niveau élevé de résilience opérationnelle numérique. » §4 : « Les entités financières, autres que les microentreprises, confient la responsabilité de la gestion et de la surveillance du risque lié aux TIC à une **fonction de contrôle** et garantissent un niveau approprié d'indépendance de cette fonction de contrôle afin d'éviter les conflits d'intérêts. » §5 : « Le cadre de gestion du risque lié aux TIC est documenté et **réexaminé au moins une fois par an**, ou périodiquement pour les microentreprises [...]. » §8 : « Le cadre de gestion du risque lié aux TIC comprend une **stratégie de résilience opérationnelle numérique** qui définit les modalités de mise en œuvre du cadre. »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 6" },
    sources: ["dora-reg"],
    tags: ["gestion des risques", "cadre"],
  },
  {
    id: "dora-identification-protection",
    refId: "dora",
    themeId: "risques",
    title: "Identifier, protéger, détecter (art. 8 à 10)",
    short:
      "Trois mesures clés du chapitre II : identifier et inventorier tous les actifs (en répertoriant les actifs critiques), protéger les systèmes pour garantir disponibilité, authenticité, intégrité et confidentialité des données (au repos, en cours d'utilisation et en transit), et détecter rapidement les activités anormales, y compris les points uniques de défaillance.",
    detail:
      "Règlement (UE) 2022/2554. Article 8, §4 (identification) : « Les entités financières identifient tous les actifs informationnels et actifs de TIC, y compris ceux situés sur des sites extérieurs, les ressources du réseau et les équipements matériels, et répertorient ceux considérés comme critiques. » Article 9, §2 (protection) : « Les entités financières conçoivent, acquièrent et mettent en œuvre des stratégies, des politiques, des procédures, des protocoles et des outils de sécurité de TIC qui visent à garantir la résilience, la continuité et la disponibilité des systèmes de TIC [...] et à maintenir des normes élevées en matière de disponibilité, d'authenticité, d'intégrité et de confidentialité des données, que ce soit **au repos, en cours d'utilisation ou en transit**. » Article 10, §1 (détection) : « Les entités financières mettent en place des mécanismes permettant de **détecter rapidement les activités anormales**, conformément à l'article 17, y compris les problèmes de performance des réseaux de TIC et les incidents liés aux TIC, ainsi que de repérer les **points uniques de défaillance** potentiellement significatifs. »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 8, 9 et 10" },
    sources: ["dora-reg"],
    tags: ["gestion des risques", "mesures"],
  },
  {
    id: "dora-continuite-sauvegarde",
    refId: "dora",
    themeId: "risques",
    title: "Continuité, sauvegarde et rétablissement (art. 11 et 12)",
    short:
      "Les entités se dotent d'une politique de continuité des activités de TIC, intégrée à la continuité d'activité globale, et de politiques de sauvegarde documentées (portée et fréquence minimale selon la criticité), avec des procédures de restauration. La restauration sur ses propres systèmes se fait depuis des systèmes séparés physiquement et logiquement du système source.",
    detail:
      "Règlement (UE) 2022/2554. Article 11, §1 : « les entités financières se dotent d'une **politique de continuité des activités de TIC** complète, qui peut être adoptée en tant que politique spécifique, et qui forme une partie intégrante de leur politique globale de continuité des activités ». Article 12, §1 : « les entités financières définissent et documentent: a) des **politiques et procédures de sauvegarde** qui précisent la portée des données concernées par la sauvegarde et la fréquence minimale de celle-ci, en fonction de la criticité des informations ou du niveau de confidentialité des données; b) des procédures et méthodes de restauration et de rétablissement. » Article 12, §3 : « Lorsqu'elles restaurent des données de sauvegarde à l'aide de leurs propres systèmes, les entités financières utilisent des systèmes de TIC qui sont **séparés physiquement et logiquement** du système de TIC source. »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 11 et 12" },
    sources: ["dora-reg"],
    tags: ["gestion des risques", "continuité", "sauvegarde"],
  },
  {
    id: "dora-apprentissage-communication",
    refId: "dora",
    themeId: "risques",
    title: "Apprendre des incidents, former, communiquer (art. 13 et 14)",
    short:
      "Après un incident majeur perturbant les activités principales : examen post-incident obligatoire pour en tirer les leçons. La sensibilisation à la sécurité TIC et la formation à la résilience deviennent des modules obligatoires pour tout le personnel et la direction. Et l'entité prépare des plans de communication de crise pour une divulgation responsable des incidents majeurs.",
    detail:
      "Règlement (UE) 2022/2554. Article 13, §2 : « Les entités financières réalisent des **examens post-incident** lié aux TIC après qu'un incident majeur lié aux TIC a perturbé leurs activités principales, afin d'analyser les causes de la perturbation et de déterminer les améliorations à apporter aux opérations de TIC ou dans le cadre de la politique de continuité des activités de TIC visée à l'article 11. » Article 13, §6 : « Les entités financières élaborent des programmes de sensibilisation à la sécurité des TIC et des formations à la résilience opérationnelle numérique qu'elles intègrent à leurs programmes de formation du personnel sous forme de **modules obligatoires**. Ces programmes et formations sont destinés à tous les employés et aux membres de la direction [...]. » Article 14, §1 : « les entités financières mettent en place des **plans de communication en situation de crise** qui favorisent une divulgation responsable, au minimum, des incidents majeurs liés aux TIC ou des vulnérabilités majeures aux clients et aux contreparties ainsi qu'au public, le cas échéant ».",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 13 et 14" },
    sources: ["dora-reg"],
    tags: ["gestion des risques", "formation", "communication"],
  },

  // --------------------------------------------------------------------------
  // Theme : incidents (processus art. 17, classification art. 18,
  // notification art. 19-20, cybermenaces volontaires)
  // --------------------------------------------------------------------------
  {
    id: "dora-incidents-processus",
    refId: "dora",
    themeId: "incidents",
    title: "Le processus de gestion des incidents TIC (art. 17)",
    short:
      "Chaque entité met en place un processus de gestion des incidents TIC : détecter, gérer, notifier. Tous les incidents TIC et les cybermenaces importantes sont enregistrés (pas seulement les incidents majeurs), avec identification des causes originelles, rôles définis et procédures de classement par priorité, gravité et criticité des services touchés.",
    elementDeLangage:
      "« Avec DORA, on enregistre tous les incidents TIC, pas seulement ceux qu'on notifie : le processus interne couvre détection, gestion, traçabilité et causes racines. »",
    detail:
      "Article 17 du règlement (UE) 2022/2554. §1 : « Les entités financières définissent, établissent et mettent en œuvre un **processus de gestion des incidents liés aux TIC** afin de détecter, de gérer et de notifier les incidents liés aux TIC. » §2 : « Les entités financières **enregistrent tous les incidents liés aux TIC et les cybermenaces importantes**. » §3, point b) : ce processus « instaure des procédures destinées à identifier, suivre, consigner, catégoriser et classer les incidents liés aux TIC en fonction de leur priorité et de leur gravité et en fonction de la criticité des services touchés ».",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 17" },
    sources: ["dora-reg"],
    tags: ["incident", "processus"],
  },
  {
    id: "dora-incidents-classification",
    refId: "dora",
    themeId: "incidents",
    title: "Classification des incidents : les critères (art. 18)",
    short:
      "Les incidents TIC sont classés selon des critères fixés par le règlement : clients et contreparties touchés, durée, étendue géographique, pertes de données, criticité des services, conséquences économiques. Les seuils chiffrés qui font d'un incident un incident « majeur » ne sont pas dans le règlement : ils relèvent de normes techniques de réglementation (RTS) élaborées par les AES.",
    detail:
      "Article 18, paragraphe 1, du règlement (UE) 2022/2554 : « Les entités financières classent les incidents liés aux TIC et déterminent leur incidence sur la base des critères suivants: a) le nombre et/ou l'importance des clients ou des contreparties financières touchés [...]; b) la durée de l'incident lié aux TIC, y compris les interruptions de service; c) la répartition géographique en ce qui concerne les zones touchées par l'incident lié aux TIC, en particulier si celui-ci touche plus de deux États membres; d) les pertes de données occasionnées par l'incident lié aux TIC en ce qui concerne la disponibilité, l'authenticité, l'intégrité ou la confidentialité des données; e) la criticité des services touchés [...]; f) les conséquences économiques [...]. » §3 : « Les AES élaborent, par l'intermédiaire du comité mixte et en concertation avec la BCE et l'ENISA, des projets communs de **normes techniques de réglementation** qui précisent les éléments suivants: a) les critères énoncés au paragraphe 1, y compris les **seuils d'importance significative** pour déterminer les incidents majeurs liés aux TIC [...]. »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 18 ; seuils précisés par RTS" },
    sources: ["dora-reg"],
    tags: ["incident", "classification"],
  },
  {
    id: "dora-incidents-notification",
    refId: "dora",
    themeId: "incidents",
    title: "Notifier les incidents majeurs : trois jalons, délais fixés par RTS (art. 19 et 20)",
    short:
      "Tout incident majeur lié aux TIC est déclaré à l'autorité compétente en trois temps : notification initiale, rapport intermédiaire, rapport final. Attention, piège classique : contrairement à NIS2 (24 h / 72 h / 1 mois dans la directive), DORA ne fixe pas lui-même les délais ; l'article 19 renvoie aux délais « à fixer conformément à l'article 20 », c'est-à-dire par des normes techniques de réglementation (RTS). L'entité doit aussi informer ses clients quand l'incident touche leurs intérêts financiers.",
    elementDeLangage:
      "« Dans DORA, le triptyque notification initiale / rapport intermédiaire / rapport final est dans le règlement, mais les délais chiffrés sont dans les normes techniques, pas dans le texte lui-même. »",
    detail:
      "Article 19 du règlement (UE) 2022/2554. §1 : « Les entités financières déclarent à l'autorité compétente pertinente visée à l'article 46 les **incidents majeurs liés aux TIC**, conformément au paragraphe 4 du présent article. » §4 : « Les entités financières soumettent, **dans les délais à fixer conformément à l'article 20**, premier alinéa, point a) ii), à l'autorité compétente concernée les éléments suivants: a) une **notification initiale**; b) un **rapport intermédiaire** [...]; c) un **rapport final**, lorsque l'analyse des causes originelles est terminée, que des mesures d'atténuation aient déjà été mises en œuvre ou non, et lorsque les chiffres relatifs aux incidences réelles sont disponibles en lieu et place des estimations. » Article 20, point a) ii) : les AES élaborent des projets de normes techniques de réglementation dans le but « de **fixer les délais** pour la notification initiale et pour chaque rapport visé à l'article 19, paragraphe 4 ». Article 19, §3 : « Lorsqu'un incident majeur lié aux TIC survient et a une incidence sur les intérêts financiers des clients, les entités financières **informent leurs clients** de cet incident majeur lié aux TIC et des mesures qui ont été prises pour atténuer les effets préjudiciables de cet incident sans retard injustifié, dès qu'elles en ont connaissance. »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 19 ; délais fixés par RTS (art. 20)" },
    sources: ["dora-reg"],
    tags: ["incident", "notification", "idée reçue"],
  },
  {
    id: "dora-cybermenaces-volontaire",
    refId: "dora",
    themeId: "incidents",
    title: "Cybermenaces importantes : une notification volontaire (art. 19 §2)",
    short:
      "À la différence des incidents majeurs (déclaration obligatoire), la notification des cybermenaces importantes à l'autorité compétente est une faculté : l'entité « peut » notifier, à titre volontaire, quand elle estime la menace pertinente pour le système financier, les utilisateurs ou les clients. En revanche, si une cybermenace importante survient, l'entité informe le cas échéant ses clients exposés des mesures de protection envisageables.",
    elementDeLangage:
      "« Incident majeur : déclaration obligatoire. Cybermenace importante : notification volontaire. C'est la distinction à retenir dans DORA. »",
    detail:
      "Article 19 du règlement (UE) 2022/2554. §2 : « Les entités financières **peuvent notifier, à titre volontaire, les cybermenaces importantes** à l'autorité compétente concernée lorsqu'elles estiment que la menace est pertinente pour le système financier, les utilisateurs de services ou les clients. » §3, second alinéa : « En cas de cybermenace importante, les entités financières informent, le cas échéant, leurs clients susceptibles d'être affectés de toute mesure de protection appropriée que ces derniers pourraient envisager de prendre. »",
    exigence: { level: "conseille", note: "notification volontaire (art. 19 §2 : « peuvent notifier ») ; l'information des clients exposés reste due (art. 19 §3)" },
    sources: ["dora-reg"],
    tags: ["incident", "cybermenace", "idée reçue"],
  },

  // --------------------------------------------------------------------------
  // Theme : tests (programme art. 24-25, TLPT art. 26-27)
  // --------------------------------------------------------------------------
  {
    id: "dora-tests-programme",
    refId: "dora",
    themeId: "tests",
    title: "Le programme de tests de résilience (art. 24 et 25)",
    short:
      "Toutes les entités financières (sauf microentreprises) maintiennent un programme complet de tests de résilience opérationnelle numérique, intégré au cadre de gestion du risque TIC : analyses de vulnérabilité, tests fondés sur des scénarios, tests de bout en bout, tests de pénétration... Les tests sont menés par des parties indépendantes (internes ou externes), et les systèmes soutenant des fonctions critiques ou importantes sont testés au moins une fois par an.",
    detail:
      "Règlement (UE) 2022/2554. Article 24, §1 : « les entités financières, autres que les microentreprises, établissent, maintiennent et réexaminent [...] un **programme solide et complet de tests de résilience opérationnelle numérique**, qui fait partie intégrante du cadre de gestion du risque lié aux TIC visé à l'article 6 ». §4 : « Les entités financières, autres que les microentreprises, veillent à ce que les tests soient effectués par des **parties indépendantes** internes ou externes. » §6 : « Les entités financières, autres que les microentreprises, veillent à soumettre, **au moins une fois par an**, tous les systèmes et applications de TIC qui soutiennent des fonctions critiques ou importantes à des tests appropriés. » Article 25, §1 : le programme prévoit « des évaluations et des analyses de vulnérabilité, des analyses de sources ouvertes, des évaluations de la sécurité des réseaux [...] des tests de bout en bout et des tests de pénétration ».",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 24 (entités autres que les microentreprises)" },
    sources: ["dora-reg"],
    tags: ["tests", "programme"],
  },
  {
    id: "dora-tlpt",
    refId: "dora",
    themeId: "tests",
    title: "TLPT : tests de pénétration fondés sur la menace (art. 26 et 27)",
    short:
      "Le TLPT (test de pénétration fondé sur la menace) ne concerne pas toutes les entités : seules celles désignées par les autorités compétentes y sont tenues, au moins tous les trois ans (fréquence ajustable par l'autorité). Le test se déroule sur des systèmes en production réelle couvrant des fonctions critiques ou importantes, avec des testeurs qualifiés (art. 27) ; en cas de testeurs internes, un testeur externe est engagé tous les trois tests. Les normes techniques s'alignent sur le cadre TIBER-EU.",
    elementDeLangage:
      "« Le TLPT n'est pas pour tout le monde : c'est l'autorité compétente qui désigne les entités tenues de le réaliser, au moins tous les trois ans, en conditions de production réelles. »",
    detail:
      "Article 26 du règlement (UE) 2022/2554. §1 : « Les entités financières, autres que les entités visées à l'article 16, paragraphe 1, premier alinéa, et autres que les microentreprises, qui sont identifiées conformément au paragraphe 8, troisième alinéa, du présent article effectuent **au moins tous les trois ans** des tests avancés au moyen d'un **test de pénétration fondé sur la menace**. En fonction du profil de risque de l'entité financière et compte tenu des circonstances opérationnelles, l'autorité compétente peut, le cas échéant, demander à l'entité financière de réduire ou d'augmenter cette fréquence. » §2 : « Chaque test de pénétration fondé sur la menace couvre plusieurs, voire la totalité, des fonctions critiques ou importantes d'une entité financière et est effectué sur des **systèmes en environnement de production en direct** qui soutiennent ces fonctions. » §8 : « Les autorités compétentes **désignent les entités financières qui sont tenues de réaliser un test de pénétration fondé sur la menace** » ; et « Lorsque des entités financières ont recours à des testeurs internes aux fins de la réalisation de ces tests, elles engagent un **testeur externe tous les trois tests**. » §11 : « Les AES élaborent, en accord avec la BCE, des projets conjoints de normes techniques de réglementation conformément au **cadre TIBER-EU** ».",
    exigence: { level: "obligatoire", note: "pour les entités désignées par les autorités compétentes (art. 26 §8)" },
    sources: ["dora-reg"],
    tags: ["tests", "TLPT", "idée reçue"],
  },

  // --------------------------------------------------------------------------
  // Theme : tiers (risque prestataires art. 28, registre, contrats art. 30,
  // prestataires critiques art. 31)
  // --------------------------------------------------------------------------
  {
    id: "dora-tiers-responsabilite",
    refId: "dora",
    themeId: "tiers",
    title: "Risque des prestataires tiers TIC : l'entité reste pleinement responsable (art. 28)",
    short:
      "Externaliser un service TIC ne transfère jamais la responsabilité : l'entité financière reste à tout moment pleinement responsable du respect de toutes ses obligations DORA, cloud compris. Le risque lié aux tiers fait partie intégrante du cadre de gestion du risque TIC, et des stratégies de sortie sont exigées pour les services soutenant des fonctions critiques ou importantes.",
    elementDeLangage:
      "« On peut externaliser le service, pas la responsabilité : avec DORA, l'entité financière répond de ses obligations même quand le service TIC est chez un prestataire. »",
    detail:
      "Article 28 du règlement (UE) 2022/2554. §1 : « Les entités financières gèrent les risques liés aux prestataires tiers de services TIC en tant que **partie intégrante du risque lié aux TIC** dans leur cadre de gestion du risque lié aux TIC visé à l'article 6, paragraphe 1 » ; et, point a) : « les entités financières qui ont conclu des accords contractuels pour l'utilisation de services TIC dans le cadre de leurs activités **restent à tout moment pleinement responsables** du respect et de l'exécution de toutes les obligations découlant du présent règlement et du droit applicable aux services financiers ». §8 : « Pour les services TIC qui soutiennent des fonctions critiques ou importantes, les entités financières mettent en place des **stratégies de sortie**. »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 28" },
    sources: ["dora-reg"],
    tags: ["tiers", "responsabilité", "idée reçue"],
  },
  {
    id: "dora-registre-informations",
    refId: "dora",
    themeId: "tiers",
    title: "Le registre d'informations des contrats TIC (art. 28 §3)",
    short:
      "Chaque entité tient et met à jour un registre d'informations couvrant tous ses accords contractuels de services TIC, en distinguant ceux qui soutiennent des fonctions critiques ou importantes. Elle déclare chaque année aux autorités les nouveaux accords, met le registre à leur disposition sur demande, et les informe en amont de tout projet de contrat portant sur une fonction critique ou importante.",
    detail:
      "Article 28, paragraphe 3, du règlement (UE) 2022/2554 : « les entités financières tiennent et mettent à jour, au niveau de l'entité et aux niveaux sous-consolidé et consolidé, un **registre d'informations** en rapport avec tous les accords contractuels portant sur l'utilisation de services TIC fournis par des prestataires tiers de services TIC » ; « Les entités financières communiquent **au moins une fois par an** aux autorités compétentes le nombre de nouveaux accords relatifs à l'utilisation de services TIC, les catégories de prestataires tiers de services TIC, le type d'accords contractuels et les services et fonctions de TIC qui sont fournis. » ; « Les entités financières **informent en temps utile l'autorité compétente** de tout projet d'accord contractuel portant sur l'utilisation de services TIC qui soutiennent des fonctions critiques ou importantes ainsi que lorsqu'une fonction est devenue critique ou importante. »",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 28 §3" },
    sources: ["dora-reg"],
    tags: ["tiers", "registre"],
  },
  {
    id: "dora-contrats",
    refId: "dora",
    themeId: "tiers",
    title: "Les clauses contractuelles imposées (art. 30)",
    short:
      "DORA descend jusque dans les contrats : tout accord de services TIC est écrit et comporte des clauses minimales (description des services, lieux de fourniture et de traitement des données, protection des données, assistance en cas d'incident, droits de résiliation...). Pour les fonctions critiques ou importantes s'ajoutent des exigences renforcées : audits et inspections, participation au TLPT, stratégies de sortie avec période de transition.",
    detail:
      "Article 30 du règlement (UE) 2022/2554. §1 : « Les droits et obligations de l'entité financière et du prestataire tiers de services TIC sont définis clairement et **consignés par écrit**. » §2 : « Les accords contractuels relatifs à l'utilisation de services TIC comportent **au moins** les éléments suivants: a) une description claire et exhaustive de tous les services TIC et fonctions qui seront fournis [...]; b) les **lieux**, notamment les régions ou les pays, où les services TIC et fonctions visés par le contrat ou la sous-traitance seront fournis et où les données seront traitées [...]; h) les droits de résiliation et les délais de préavis minimaux correspondants pour la résiliation des accords contractuels [...]. » Pour les fonctions critiques ou importantes, §3 : s'ajoutent notamment « l'obligation pour le prestataire tiers de services TIC de participer et de coopérer pleinement au test de pénétration fondé sur la menace effectué par l'entité financière » (point d) et « les stratégies de sortie, en particulier la fixation d'une **période de transition adéquate obligatoire** » (point f).",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 30" },
    sources: ["dora-reg"],
    tags: ["tiers", "contrat"],
  },
  {
    id: "dora-prestataires-critiques",
    refId: "dora",
    themeId: "tiers",
    title: "Prestataires tiers critiques : supervision par les AES (art. 31)",
    short:
      "Nouveauté majeure : les prestataires tiers de services TIC jugés critiques pour le secteur financier (grands fournisseurs cloud en tête) sont désignés au niveau européen par les AES (ABE, AEMF, AEAPP) et placés sous la supervision d'un « superviseur principal », l'AES dont relèvent les entités financières qui pèsent le plus parmi leurs clients. Les critères incluent l'effet systémique d'une défaillance du prestataire.",
    elementDeLangage:
      "« DORA ne se contente pas de réguler les banques : il fait superviser leurs fournisseurs critiques, cloud compris, directement par les autorités européennes. »",
    detail:
      "Article 31, paragraphe 1, du règlement (UE) 2022/2554 : « Les AES, agissant par l'intermédiaire du comité mixte et sur recommandation du forum de supervision établi conformément à l'article 32, paragraphe 1: a) **désignent les prestataires tiers de services TIC qui sont critiques** pour les entités financières, à l'issue d'une évaluation tenant compte des critères précisés au paragraphe 2; b) désignent comme **superviseur principal** pour chaque prestataire tiers critique de services TIC l'AES responsable [...] des entités financières totalisant ensemble la plus grande part d'actifs de la valeur du total des actifs de toutes les entités financières qui utilisent les services du prestataire tiers critique de services TIC concerné [...]. » Parmi les critères de désignation (§2, point a) : « l'effet systémique sur la stabilité, la continuité ou la qualité de la fourniture de services financiers dans les cas où le prestataire tiers de services TIC concerné serait confronté à une défaillance opérationnelle à grande échelle ».",
    exigence: { level: "obligatoire", note: "règlement (UE) 2022/2554, art. 31 (désignation par les AES)" },
    sources: ["dora-reg"],
    tags: ["tiers", "supervision", "cloud"],
  },

  // --------------------------------------------------------------------------
  // Theme : partage (echange d'informations art. 45)
  // --------------------------------------------------------------------------
  {
    id: "dora-partage-infos",
    refId: "dora",
    themeId: "partage",
    title: "Partage d'informations sur les cybermenaces : une faculté encadrée (art. 45)",
    short:
      "DORA autorise et encadre, sans l'imposer, l'échange entre entités financières d'informations et de renseignements sur les cybermenaces (indicateurs de compromission, tactiques, techniques, alertes...), au sein de communautés de confiance et dans le respect de la confidentialité, du RGPD et du droit de la concurrence. Seule vraie obligation : notifier aux autorités compétentes sa participation (ou son retrait) d'un tel dispositif.",
    elementDeLangage:
      "« Le partage de renseignement sur la menace est un « peuvent », pas un « doivent » : DORA le sécurise juridiquement, et demande seulement de déclarer sa participation. »",
    detail:
      "Article 45 du règlement (UE) 2022/2554. §1 : « Les entités financières **peuvent échanger entre elles** des informations et des renseignements sur les cybermenaces, notamment des indicateurs de compromis, des tactiques, des techniques et des procédures, des alertes de cybersécurité et des outils de configuration », dès lors que ce partage « se déroule au sein de **communautés d'entités financières de confiance** » (point b). §3 : « Les entités financières **notifient aux autorités compétentes leur participation** aux dispositifs de partage d'informations visés au paragraphe 1 lors de la validation de leur adhésion ou, le cas échéant, la cessation de leur adhésion, lorsque celle-ci prend effet. »",
    exigence: { level: "conseille", note: "faculté (art. 45 §1 : « peuvent échanger ») ; la participation se notifie à l'autorité (art. 45 §3)" },
    sources: ["dora-reg"],
    tags: ["partage", "cybermenace"],
  },
];
