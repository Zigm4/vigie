// Cartes de révision DR / II 901.
//
// Couverture : notions (IGI 1300), démarche et homologation, classes de réseau,
// architectures, interconnexions et passerelles, navigation/transferts, produits
// de confiance, cloisonnement/durcissement, marquage (IGI 1300 Annexe 1),
// accès/codes malveillants, supports amovibles, postes et nomadisme,
// administration et journalisation, cloud, cadre élargi.
//
// Règle d'exigence (non dogmatique) : la formulation du texte fixe le niveau.
//   "doit / interdit / impossible"        -> obligatoire
//   "il est (fortement) recommandé"        -> recommande
//   "il est (fortement) conseillé"         -> conseille
// Le guide PG-075 est non normatif : ses recommandations valent recommandation,
// sauf quand elles restituent une obligation de l'II 901 ou de l'IGI 1300 (les
// "doit"), auquel cas l'obligation est signalée avec sa source.

import type { ReviewCard } from "../types.ts";

export const drCards: ReviewCard[] = [
  // ----------------------------------------------------------------------------
  // Thème : notions
  // ----------------------------------------------------------------------------
  {
    id: "dr-mention-pas-classification",
    refId: "dr-ii901",
    themeId: "notions",
    title: "« Diffusion Restreinte » est une mention de protection, pas une classification",
    short:
      "La DR n'est pas un niveau du secret de la défense nationale, c'est une mention de protection avec ses propres règles. Elle ne confère pas la protection pénale des informations classifiées.",
    elementDeLangage:
      "« La Diffusion Restreinte n'est pas une classification mais une mention de protection. On ne “déclassifie” pas un document DR, et sa divulgation ne relève pas du régime pénal du secret de la défense nationale. »",
    detail:
      "L'IGI 1300 (§1.3.2) est explicite : « La mention Diffusion Restreinte n'est pas un timbre de classification mais une mention de protection. »\n\nDepuis la version 2021 de l'IGI 1300, le secret de la défense nationale ne comporte plus que **deux** timbres : **Secret** et **Très Secret**. La mention « Confidentiel Défense » n'existe plus : c'est une erreur fréquente.",
    exigence: { level: "obligatoire", note: "qualification juridique, IGI 1300 §1.3.2" },
    sources: ["igi1300"],
    tags: ["définition", "idée reçue"],
  },
  {
    id: "dr-ce-quelle-protege",
    refId: "dr-ii901",
    themeId: "notions",
    title: "Ce que protège la mention DR",
    short:
      "Des informations qu'il n'y a pas lieu de classifier mais sensibles, dont la divulgation porterait atteinte à un secret autre que le secret de la défense nationale (art. L.311-5, 2° du CRPA).",
    elementDeLangage:
      "« La DR protège du sensible non classifié. Son objectif premier est de responsabiliser le détenteur sur la discrétion requise et le besoin d'en connaître. »",
    detail:
      "Selon l'IGI 1300 (§1.3.2), la DR vise des informations « qu'il n'y a pas lieu de classifier mais qui présentent une sensibilité particulière », notamment parce qu'elles pourraient porter atteinte à l'un des secrets, **autres que le secret de la défense nationale**, mentionnés au 2° de l'article L. 311-5 du Code des relations entre le public et l'administration.\n\nObjectif principal : sensibiliser l'utilisateur à la discrétion. L'information DR n'est communiquée qu'aux personnes **ayant besoin d'en connaître**, selon les mesures de l'Annexe 1 de l'IGI 1300.",
    exigence: { level: "obligatoire", note: "IGI 1300 §1.3.2 et Annexe 1" },
    sources: ["igi1300", "igi1300-an1"],
    tags: ["définition"],
  },
  {
    id: "dr-pas-motif-refus-cada",
    refId: "dr-ii901",
    themeId: "notions",
    title: "La mention DR ne justifie pas, à elle seule, un refus de communication",
    short:
      "Le seul fait qu'une information porte la mention DR ne constitue pas, en soi, un motif de refus d'accès au titre du CRPA ou du code du patrimoine. La DR est une mesure de protection interne, pas un fondement juridique d'inopposabilité au droit d'accès aux documents administratifs.",
    elementDeLangage:
      "« La mention DR ne rend pas un document incommunicable : elle protège en interne, mais ne fonde pas, à elle seule, un refus d'accès. »",
    detail:
      "L'IGI 1300 (§1.3.2) précise que la mention DR « ne saurait toutefois, par elle-même, constituer pour l'administration [...] un motif de refus d'accès » sur le fondement des articles L. 311-1 et suivants du CRPA ou L. 213-1 du code du patrimoine.",
    exigence: { level: "obligatoire", note: "IGI 1300 §1.3.2" },
    sources: ["igi1300"],
    tags: ["définition", "idée reçue"],
  },
  {
    id: "dr-special-france",
    refId: "dr-ii901",
    themeId: "notions",
    title: "Mention complémentaire « Spécial France »",
    short:
      "La mention « Spécial France », apposée en plus de la DR, reste soumise aux dispositions de l'IGI 1300.",
    detail:
      "L'IGI 1300 (Annexe 1, §1) indique que « l'utilisation de la mention complémentaire de protection Spécial France, en sus de la mention Diffusion Restreinte, reste soumise aux dispositions de la présente instruction ». C'est une mention de restriction de diffusion supplémentaire, pas un niveau distinct.",
    exigence: { level: "obligatoire", note: "IGI 1300 Annexe 1, §1" },
    sources: ["igi1300-an1"],
    tags: ["définition"],
  },
  {
    id: "dr-engagement-non-divulgation",
    refId: "dr-ii901",
    themeId: "notions",
    title: "Engagement de non-divulgation",
    short:
      "Il est recommandé de faire signer un engagement de non-divulgation aux personnes susceptibles d'accéder à des informations DR.",
    detail:
      "L'IGI 1300 (Annexe 1, §1) recommande de « faire signer aux personnes susceptibles d'avoir accès à des informations Diffusion Restreinte un engagement de non-divulgation ». La formulation est une recommandation, pas une obligation.",
    exigence: { level: "recommande", note: "IGI 1300 Annexe 1, §1" },
    sources: ["igi1300-an1"],
    tags: ["organisationnel"],
  },

  // ----------------------------------------------------------------------------
  // Thème : textes-perimetre
  // ----------------------------------------------------------------------------
  {
    id: "dr-deux-textes",
    refId: "dr-ii901",
    themeId: "textes",
    title: "Deux textes à ne pas confondre : IGI 1300 et II 901",
    short:
      "L'IGI 1300 définit la mention DR et la protection de l'information. L'II 901 régit la protection des systèmes d'information qui traitent du DR.",
    elementDeLangage:
      "« L'IGI 1300, c'est l'information ; l'II 901, c'est le système d'information. L'une qualifie et marque, l'autre sécurise le SI qui la traite. »",
    detail:
      "**IGI 1300** (09/08/2021) : définit la mention DR et, en Annexe 1, les règles de protection des informations et supports DR.\n\n**II 901** (28/01/2015) : définit les objectifs et règles, organisationnelles et techniques, de protection des **systèmes d'information** sensibles, notamment ceux traitant du DR.\n\nL'appellation « IGI 901 » que l'on croise parfois désigne le **même texte** que l'II 901.",
    exigence: { level: "obligatoire", note: "textes de référence" },
    sources: ["ii901", "igi1300"],
    tags: ["définition", "idée reçue"],
  },
  {
    id: "dr-perimetre-ii901",
    detailParaphrase: true,
    refId: "dr-ii901",
    themeId: "textes",
    title: "À qui s'applique l'II 901",
    short:
      "Administrations de l'État (SI sensibles), toute personne morale exploitant un SI DR, entités relevant de la PPST. Pas les SI traitant du secret de la défense nationale.",
    detail:
      "Champ d'application : administrations de l'État mettant en œuvre des SI sensibles ; toute personne morale exploitant un système DR ; entités soumises à la Protection du Potentiel Scientifique et Technique de la Nation (PPST). Il s'étend aux SI traitant Restreint UE / Restreint OTAN.\n\nL'II 901 **ne concerne pas** les SI traitant d'informations couvertes par le secret de la défense nationale (régime de l'IGI 1300).",
    exigence: { level: "obligatoire", note: "périmètre de l'II 901" },
    sources: ["ii901"],
    tags: ["périmètre"],
  },
  {
    id: "dr-qui-appose-accede",
    refId: "dr-ii901",
    themeId: "textes",
    title: "Qui peut apposer la mention DR et y accéder",
    short:
      "Sous l'autorité de chaque ministre : services de l'État, établissements publics sous tutelle, OIV dont il est ministre coordonnateur, collectivités et personnes morales liées par convention/contrat, et les personnels ayant besoin d'en connaître.",
    detail:
      "IGI 1300, Annexe 1, §1 : « sous l'autorité de chaque ministre, sont autorisés à apposer sur des informations et supports la mention Diffusion Restreinte et à y accéder : les services centraux, services déconcentrés et services à compétence nationale relevant de son autorité ; les établissements publics placés sous sa tutelle ; les opérateurs d'importance vitale dont il est le ministre coordonnateur ; les collectivités territoriales et les personnes morales de droit privé avec lesquelles il a conclu une convention ; les personnes morales, publiques ou privées, avec lesquelles il a conclu un contrat de commande publique ou un contrat de subvention, ainsi que les sous-traitants ou sous-contractants de ces personnes morales ayant également besoin d'accéder [...] ; les personnels qui, au sein de ces différents organismes, ont besoin [...] d'accéder à des informations ou supports protégés par la mention Diffusion Restreinte. »\n\nLe signataire d'un document apprécie lui-même la sensibilité et décide de l'opportunité d'apposer la mention.",
    exigence: { level: "obligatoire", note: "IGI 1300 Annexe 1, §1" },
    sources: ["igi1300-an1"],
    tags: ["périmètre", "organisationnel"],
  },
  {
    id: "dr-restreint-ue-otan",
    refId: "dr-ii901",
    themeId: "textes",
    title: "Équivalents étrangers : Restreint UE / Restreint OTAN",
    short:
      "Une mention de restriction équivalente attribuée par un État étranger ou une organisation internationale est protégée en France selon les règles de l'IGI 1300 et de l'II 901. Les SI traitant Restreint UE / Restreint OTAN entrent donc dans le périmètre.",
    detail:
      "Le guide PG-075 (section 2.1) indique : « Une mention de restriction de diffusion équivalente à Diffusion Restreinte attribuée à une information par un État étranger ou une organisation internationale soumet, en France, cette information aux règles de protection énoncées à l'annexe 3 de l'instruction générale interministérielle n° 1300/SGDSN/PSE/PSD (IGI 1300) du 9 août 2021 [...] et à l'II 901 [...]. »\n\nNB : dans l'IGI 1300 du 9 août 2021 publiée par le SGDSN, les règles de protection de la mention Diffusion Restreinte figurent à l'**annexe 1** ; le renvoi du guide à « l'annexe 3 » est cité tel quel.",
    exigence: { level: "obligatoire", note: "IGI 1300 (annexe 1, mention DR) et II 901" },
    sources: ["pg075", "igi1300"],
    tags: ["périmètre"],
  },

  // ----------------------------------------------------------------------------
  // Thème : demarche (R1 à R4, art. 2, R8, R21)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r1-tri-patrimoine",
    refId: "dr-ii901",
    themeId: "demarche",
    title: "R1 : trier le patrimoine informationnel par niveau de sensibilité",
    short:
      "Toute entité doit trier son patrimoine informationnel via une analyse de risque exprimant les besoins de confidentialité, sur une échelle croissante (usuel, sensible, DR). On ne dimensionne la sécurité qu'après avoir trié l'information.",
    detail:
      "Recommandation R1 du guide ANSSI-PG-075 : « Une entité publique ou privée doit trier son patrimoine informationnel », via une analyse de risque exprimant les besoins de protection en confidentialité.",
    exigence: { level: "recommande", note: "PG-075 R1 (guide non normatif)" },
    sources: ["pg075"],
    tags: ["démarche", "analyse de risque"],
  },
  {
    id: "dr-r2-types-si",
    refId: "dr-ii901",
    themeId: "demarche",
    title: "R2 : identifier les types de SI nécessaires",
    short:
      "Après le tri, l'entité identifie les types de SI (usuel, sensible, voire DR) requis. Par défaut, des informations d'un niveau donné sont traitées sur un SI de ce niveau.",
    detail:
      "Recommandation R2 du guide ANSSI-PG-075 : « Identifier les types de SI nécessaires ». Énoncé : « Après avoir trié son patrimoine informationnel non classifié, une entité doit identifier les types de SI (usuels, sensibles voire DR) qu'elle va devoir mettre en œuvre pour répondre à ses besoins de sécurité. »",
    exigence: { level: "recommande", note: "PG-075 R2 ; hébergement DR sur SI DR = obligation II 901" },
    sources: ["pg075", "ii901"],
    tags: ["démarche"],
  },
  {
    id: "dr-r3-regime-protection",
    refId: "dr-ii901",
    themeId: "demarche",
    title: "R3 : déterminer le régime de protection des informations",
    short:
      "L'entité doit déterminer le régime de protection des informations. Selon les cas il est imposé par la réglementation (ou un tiers), ou laissé à sa discrétion.",
    detail:
      "Recommandation R3 du guide ANSSI-PG-075 : « Déterminer le régime de protection des informations sensibles ». Énoncé : « Une entité qui met en œuvre un SI sensible doit déterminer le régime de protection à appliquer aux informations qu'elle va manipuler. En fonction des cas, ce régime de protection est soit imposé par la réglementation (ou par une entité tierce), soit laissé à la discrétion de l'entité. »",
    exigence: { level: "recommande", note: "PG-075 R3 ; renvoie à l'art. 2 de l'II 901" },
    sources: ["pg075", "ii901-art2"],
    tags: ["démarche", "méthode"],
  },
  {
    id: "dr-obligatoire-vs-recommande",
    refId: "dr-ii901",
    themeId: "demarche",
    title: "Obligatoire ou recommandé : où est la frontière",
    short:
      "C'est l'article 2 de l'II 901 (selon le régime de protection retenu) qui détermine les mesures obligatoires et celles recommandées. Le guide PG-075 est non normatif.",
    elementDeLangage:
      "« Pour trancher obligatoire ou recommandé, on lit l'article 2 de l'II 901 selon le régime de protection. Le guide PG-075 ne crée pas d'obligation : il recommande. »",
    detail:
      "Le PG-075 (R3) renvoie à l'**article 2 de l'II 901** pour distinguer mesures obligatoires et recommandées ; son annexe B met en regard les niveaux de sensibilité. Le guide précise lui-même : « Sauf disposition réglementaire contraire, ces recommandations n'ont pas de caractère normatif ; elles sont livrées en l'état et adaptées aux menaces au jour de leur publication. »",
    exigence: { level: "obligatoire", note: "méthode fixée par l'II 901, art. 2" },
    sources: ["ii901-art2", "pg075"],
    tags: ["méthode", "idée reçue"],
  },
  {
    id: "dr-r4-homologation",
    refId: "dr-ii901",
    themeId: "demarche",
    title: "R4 : homologuer tout SI sensible avant sa mise en production",
    short:
      "Tout SI sensible DOIT être homologué avant mise en production, et toutes ses interconnexions également. Les risques sont réévalués périodiquement.",
    elementDeLangage:
      "« L'homologation n'est pas une formalité : c'est l'acte par lequel l'autorité accepte les risques. Tout SI sensible est homologué avant production, chaque interconnexion aussi. »",
    detail:
      "Recommandation R4, qui restitue une obligation : « Tout SI sensible **doit** être homologué. Toutes les interconnexions de ce SI **doivent** également être homologuées. » Les risques doivent être réévalués périodiquement (II 901 art. 3 ; IGI 1300 art. 86).\n\nLe périmètre d'homologation II 901 englobe tous les matériels concourant au traitement ou au stockage des informations sensibles, supports amovibles compris.",
    exigence: { level: "obligatoire", note: "II 901, art. 3 (restitué par PG-075 R4)" },
    sources: ["ii901", "pg075"],
    tags: ["homologation", "organisationnel"],
  },
  {
    id: "dr-r8-strategie-homologation-interco",
    refId: "dr-ii901",
    themeId: "demarche",
    title: "R8 : une stratégie d'homologation pour chaque interconnexion",
    short:
      "L'interconnexion de deux SI sensibles doit faire l'objet d'une homologation spécifique, où chaque partie vérifie la compatibilité avec ses besoins de sécurité.",
    detail:
      "Recommandation R8 : « L'interconnexion de deux SI sensibles doit fait [sic] l'objet d'une homologation spécifique où chacune des parties s'assure que l'impact sur la sécurité de l'interconnexion est compatible avec les besoins de sécurité exprimés dans le dossier d'homologation du SI dont elle a la responsabilité. » L'II 901 (annexe 2) précise que ces homologations sont distinctes de celle des SI interconnectés.",
    exigence: { level: "obligatoire", note: "II 901 annexe 2 (restitué par PG-075 R8)" },
    sources: ["ii901-annexe2", "pg075"],
    tags: ["homologation", "interconnexion"],
  },
  {
    id: "dr-r21-acces-appli-non-homologue",
    refId: "dr-ii901",
    themeId: "demarche",
    title: "R21 : interdire l'accès aux applications sensibles depuis un SI non homologué",
    short:
      "L'accès à une application sensible (ou DR) depuis un SI non homologué au niveau correspondant est interdit.",
    detail:
      "Recommandation R21 : « L'accès à toute application sensible (ou DR) depuis un SI non homologué au niveau sensible (respectivement depuis un SI non homologué au niveau DR) est interdit. » Si l'entité tierce dispose d'un SI homologué au bon niveau, l'accès peut être envisagé dans ce cadre.",
    exigence: { level: "obligatoire", note: "PG-075 R21 (interdiction)" },
    sources: ["pg075"],
    tags: ["interconnexion", "accès"],
  },

  // ----------------------------------------------------------------------------
  // Thème : classes (0/1/2)
  // ----------------------------------------------------------------------------
  {
    id: "dr-trois-classes",
    detailParaphrase: true,
    detailNote:
      "Synthèse des définitions de l'annexe 2 de l'II 901 (texte non librement reproductible) et de leur reprise par le guide PG-075. Se reporter aux documents cités pour les définitions exactes.",
    refId: "dr-ii901",
    themeId: "classes",
    title: "Les trois classes de réseau (classe 0 / 1 / 2)",
    short:
      "Classe 0 : SI public ou non conforme. Classe 1 : SI sensible/DR connecté à Internet via une passerelle sécurisée. Classe 2 : SI sensible/DR physiquement isolé d'Internet.",
    elementDeLangage:
      "« La classe vient de l'annexe 2 de l'II 901. Classe 1 = connecté via passerelle sécurisée ; classe 2 = isolé physiquement. La classe est un type d'architecture réseau, pas un niveau de sensibilité. »",
    detail:
      "L'**II 901, annexe 2**, définit le concept de **classe de réseau**, repris par le guide PG-075 :\n\n- **Classe 0** : SI public ou connecté à un SI public, non conforme aux exigences de classe 1.\n- **Classe 1** : SI sensible/DR **connecté à Internet via une passerelle sécurisée** conforme à l'II 901.\n- **Classe 2** : SI sensible/DR **physiquement isolé** d'Internet.\n\nLe choix de la classe relève de l'**article 14**. Au sens strict, l'annexe 2 ne vise que les SI homologués DR ; le guide étend le concept aux SI sensibles.",
    exigence: { level: "obligatoire", note: "concept défini par l'II 901, annexe 2" },
    sources: ["ii901-annexe2", "ii901-art14", "pg075"],
    tags: ["classes", "architecture"],
  },
  {
    id: "dr-classe1-pas-isolee",
    detailParaphrase: true,
    refId: "dr-ii901",
    themeId: "classes",
    title: "Idée reçue : « un réseau de classe 1 doit être isolé physiquement »",
    short:
      "Faux. Un SI de classe 1 est par définition connecté à Internet via une passerelle sécurisée. L'isolement physique caractérise la classe 2, pas la classe 1.",
    elementDeLangage:
      "« L'isolement physique n'est pas une obligation de la classe 1 : par construction, un SI de classe 1 est interconnecté à un SI de classe 0 via une passerelle. Exiger l'isolement physique en classe 1, c'est confondre classe 1 et classe 2. »",
    detail:
      "Confusion fréquente. Le texte est sans ambiguïté :\n\n- **Classe 1** : SI **interconnecté** à des SI de classe 0 via des dispositifs de filtrage et de rupture de flux (passerelle de classe 1). Donc **connecté**, pas isolé.\n- **Classe 2** : SI **isolé**, non connecté même indirectement à Internet.\n\nL'isolement physique n'est pas une exigence de la classe 1 : il est la caractéristique **définitionnelle de la classe 2**.",
    exigence: { level: "usage", note: "l'isolement physique n'est PAS imposé en classe 1" },
    sources: ["ii901-annexe2", "pg075"],
    tags: ["classes", "idée reçue"],
  },
  {
    id: "dr-classe2-isolement",
    refId: "dr-ii901",
    themeId: "classes",
    title: "Classe 2 : isolement physique, obligatoire seulement si les risques sont élevés",
    short:
      "Un SI de classe 2 est physiquement isolé par définition. Le guide précise que le recours à cette architecture est obligatoire lorsque les risques sont élevés, pas dans tous les cas.",
    elementDeLangage:
      "« L'isolement physique (classe 2) devient obligatoire quand les risques sont élevés. En dessous, c'est un choix d'architecture arbitré par l'analyse de risque et l'homologation, pas une obligation systématique. »",
    detail:
      "Un SI de **classe 2** est, par définition, physiquement isolé : aucun composant partagé avec un SI de classe 0 ou 1, et pas de connexion à Internet. Des échanges restent possibles via des dispositifs **agréés ANSSI** (diode pour une passerelle montante).\n\nLe PG-075 indique : « Le recours à ces architectures est **obligatoire lorsque les risques pesant sur le SI sensible sont élevés**. » Le guide rappelle aussi qu'un SI isolé n'est pas « sécurisé » d'office (administration, MCS et supervision plus complexes ; risque des supports amovibles).",
    exigence: { level: "obligatoire", note: "uniquement si risques élevés (PG-075) ; sinon choix d'architecture" },
    sources: ["ii901-annexe2", "pg075"],
    tags: ["classes", "isolement"],
  },
  {
    id: "dr-classe2-passerelles-diodes",
    refId: "dr-ii901",
    themeId: "classes",
    title: "Classe 2 : passerelles montantes (diodes) et descendantes",
    short:
      "Un SI de classe 2 n'a pas d'interconnexion descendante en clair vers les classes 0/1, sauf dispositif agréé. Une passerelle montante via diode agréée ANSSI permet de recevoir des flux.",
    detail:
      "Le PG-075 (§3.1.2) définit le SI de classe 2 : isolé ; aucune interconnexion descendante (envoi vers classe 0/1) sauf via des dispositifs agréés (« passerelle descendante ») ; éventuellement des interconnexions montantes (réception depuis classe 0/1) via une **diode agréée ANSSI** (« passerelle montante »).",
    exigence: { level: "obligatoire", note: "II 901 annexe 2 ; dispositifs agréés requis" },
    sources: ["ii901-annexe2", "pg075"],
    tags: ["classes", "interconnexion"],
  },

  // ----------------------------------------------------------------------------
  // Thème : classes / architectures (R5+, R5, R5-, R6, R7)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r5plus-isoler",
    refId: "dr-ii901",
    themeId: "classes",
    title: "R5+ : isoler physiquement le SI sensible et le SI usuel",
    short:
      "Pour des besoins de confidentialité importants, il est recommandé de mettre en place au minimum deux SI physiquement isolés (un usuel, un sensible de classe 2).",
    detail:
      "Recommandation R5+ : « Il est recommandé que les entités ayant des besoins de confidentialité importants mettent en place au minimum deux SI (un SI usuel et un SI sensible) physiquement isolés. » Le SI sensible est alors un SI de classe 2. C'est l'option la plus protectrice de la série R5+/R5/R5-.",
    exigence: { level: "recommande", note: "PG-075 R5+ (option la plus haute)" },
    sources: ["pg075"],
    tags: ["architecture", "isolement"],
  },
  {
    id: "dr-r5-cloisonner-physique",
    refId: "dr-ii901",
    themeId: "classes",
    title: "R5 : cloisonner physiquement le SI sensible et le SI usuel",
    short:
      "À défaut d'isolement, on peut construire deux SI physiquement cloisonnés, interconnectés par une passerelle bidirectionnelle conforme à l'II 901. Le SI sensible est alors de classe 1.",
    detail:
      "Recommandation R5 (niveau intermédiaire) : « À défaut de mettre en œuvre un SI physiquement isolé, il est possible de construire deux SI (un SI sensible et un SI usuel) physiquement cloisonnés et interconnectés par une passerelle bidirectionnelle conforme à l'II 901. » Le SI sensible est alors de **classe 1**.",
    exigence: { level: "recommande", note: "PG-075 R5 (option intermédiaire)" },
    sources: ["pg075"],
    tags: ["architecture", "cloisonnement"],
  },
  {
    id: "dr-r5moins-cloisonner-logique",
    refId: "dr-ii901",
    themeId: "classes",
    title: "R5- : cloisonner logiquement les données sensibles (option dégradée)",
    short:
      "À défaut d'isolement ou de cloisonnement physique, les entités à maturité SSI élevée peuvent cloisonner logiquement, sans créer de SI usuel distinct. C'est une mesure dégradée.",
    detail:
      "Gradation du guide ANSSI-PG-075 : R5+ « Isoler physiquement le SI sensible et le SI usuel », R5 « Cloisonner physiquement le SI sensible et le SI usuel », R5- « Cloisonner logiquement les données sensibles au sein d'un SI sensible » (option dégradée, accompagnée de R7 « Cloisonner les annuaires sensible et usuel »).",
    exigence: { level: "recommande", note: "PG-075 R5- (option dégradée)" },
    sources: ["pg075"],
    tags: ["architecture", "cloisonnement"],
  },
  {
    id: "dr-r6-defense-profondeur",
    refId: "dr-ii901",
    themeId: "classes",
    title: "R6 : défense en profondeur en cas de mutualisation",
    short:
      "La défense en profondeur est un principe stratégique de l'II 901. En cas de mutualisation de ressources, l'entité doit systématiquement la mettre en œuvre.",
    detail:
      "Recommandation R6 : « Le concept de défense en profondeur est un principe stratégique de l'II 901. En particulier, quand la mutualisation de ressources [...] est envisagée, l'entité doit systématiquement mettre en œuvre le concept de défense [en profondeur]. »",
    exigence: { level: "obligatoire", note: "principe stratégique de l'II 901 (PG-075 R6)" },
    sources: ["ii901", "pg075"],
    tags: ["architecture", "défense en profondeur"],
  },
  {
    id: "dr-r7-annuaires",
    refId: "dr-ii901",
    themeId: "classes",
    title: "R7 : cloisonner les annuaires sensible et usuel",
    short:
      "Dans le contexte dégradé R5-, il est fortement recommandé de déployer des annuaires distincts : un pour les utilisateurs/ressources sensibles, un pour les usuels.",
    detail:
      "Recommandation R7 : dans le contexte de la recommandation dégradée R5-, « il est fortement recommandé que l'entité mette en œuvre des annuaires distincts ». Cela limite la compromission croisée entre périmètre sensible et usuel.",
    exigence: { level: "recommande", note: "PG-075 R7 (fortement recommandé)" },
    sources: ["pg075"],
    tags: ["architecture", "cloisonnement"],
  },

  // ----------------------------------------------------------------------------
  // Thème : interconnexions et passerelles (R9 à R17)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r9-interco-dr",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R9 : sécuriser les interconnexions de SI DR (VPN agréé DR)",
    short:
      "Les interconnexions de SI DR doivent être sécurisées par des tunnels VPN (confidentialité, intégrité, anti-rejeu, authentification mutuelle), établis par des équipements agréés DR.",
    detail:
      "Recommandation R9 : « Les interconnexions de SI DR **doivent** être sécurisées au moyen de tunnels VPN garantissant la protection de tous les flux [...]. Les équipements permettant d'établir ces tunnels VPN **doivent** être agréés par l'ANSSI. » Pour un SI DR, l'agrément attendu est au niveau DR : c'est une obligation, pas une option.",
    exigence: { level: "obligatoire", note: "PG-075 R9 (SI DR) : VPN par équipement agréé DR" },
    sources: ["pg075", "ii901"],
    tags: ["interconnexion", "chiffrement", "DR"],
  },
  {
    id: "dr-r10-interco-sensible",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R10 : sécuriser les interconnexions de SI sensibles (recommandé)",
    short:
      "Pour les SI sensibles (non DR), il est fortement recommandé de sécuriser les interconnexions par VPN et d'utiliser des équipements disposant d'un visa de sécurité.",
    detail:
      "Recommandation R10 : « Il est fortement recommandé que les interconnexions de SI sensibles soient sécurisées au moyen de tunnels VPN [...]. » Contraste avec R9 : ce qui est **obligatoire** pour le DR est **fortement recommandé** pour le sensible non DR.",
    exigence: { level: "recommande", note: "PG-075 R10 (SI sensible non DR)" },
    sources: ["pg075"],
    tags: ["interconnexion", "chiffrement"],
  },
  {
    id: "dr-r11-filtrer-flux",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R11 : filtrer les flux des interconnexions de SI sensibles",
    short:
      "Les flux des interconnexions de SI sensibles doivent être filtrés.",
    detail:
      "Recommandation R11 du guide ANSSI-PG-075 : « Filtrer les flux des interconnexions de SI sensibles ». Énoncé : « Il est recommandé que deux entités juridiques souhaitant interconnecter leurs SI sensibles mettent chacune en œuvre, sous leur contrôle respectif, des dispositifs de filtrage, en amont et en aval des chiffreurs. Il est recommandé que ces dispositifs soient qualifiés. »",
    exigence: { level: "recommande", note: "PG-075 R11" },
    sources: ["pg075"],
    tags: ["interconnexion", "filtrage"],
  },
  {
    id: "dr-r12-interco-internet",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R12 : appliquer les recommandations ANSSI sur l'interconnexion à Internet",
    short:
      "L'interconnexion d'un SI sensible de classe 1 avec Internet doit respecter au minimum les bonnes pratiques ANSSI (guide sur les architectures d'interconnexion à Internet).",
    detail:
      "Recommandation R12 : « Il est fortement recommandé que l'interconnexion d'un SI sensible de classe 1 avec Internet respecte au minimum les bonnes pratiques de l'ANSSI », notamment le guide dédié à l'interconnexion d'un SI à Internet.",
    exigence: { level: "recommande", note: "PG-075 R12 (renvoie au guide ANSSI dédié)" },
    sources: ["pg075"],
    tags: ["interconnexion", "internet"],
  },
  {
    id: "dr-r13-passerelle-parefeu",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R13 : passerelle de classe 1, au moins un pare-feu qualifié",
    short:
      "L'entité responsable d'un SI DR doit mettre en œuvre un dispositif de filtrage qualifié (niveau standard) en coupure de tous les flux vers/depuis le SI de classe 0. Fortement conseillé pour le sensible.",
    detail:
      "Recommandation R13 : « L'entité responsable d'un SI DR **doit** mettre en œuvre un dispositif de filtrage qualifié au niveau standard en coupure de tous les flux depuis et vers le SI de classe 0. Il est fortement conseillé d'appliquer cette recommandation aux SI sensibles. » Gradation DR (obligatoire) / sensible (conseillé).",
    exigence: { level: "obligatoire", note: "PG-075 R13 : SI DR ; conseillé pour SI sensible" },
    sources: ["pg075"],
    tags: ["passerelle", "filtrage", "DR"],
  },
  {
    id: "dr-r14-passerelle-rupture",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R14 : passerelle de classe 1, dispositif de rupture de flux",
    short:
      "L'entité responsable d'un SI DR doit mettre en œuvre un ou plusieurs dispositifs de rupture de flux (proxy), positionnés entre deux dispositifs de filtrage.",
    detail:
      "Recommandation R14 : « L'entité responsable d'un SI DR **doit** mettre en œuvre un ou plusieurs dispositifs de rupture des flux [...], si possible qualifiés. Ces dispositifs doivent être positionnés entre deux dispositifs de filtrage. » La passerelle de classe 1 combine donc filtrage + rupture + détection.",
    exigence: { level: "obligatoire", note: "PG-075 R14 (SI DR)" },
    sources: ["pg075"],
    tags: ["passerelle", "DR"],
  },
  {
    id: "dr-r15-passerelle-sonde",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R15 : passerelle de classe 1, système de détection (sonde qualifiée)",
    short:
      "L'entité responsable d'un SI DR doit mettre en œuvre un système de détection, incluant une sonde qualifiée, dans chaque passerelle de classe 1.",
    detail:
      "Recommandation R15 : « L'entité responsable d'un SI DR **doit** mettre en œuvre un système de détection, incluant une sonde qualifiée, au sein de chacune des passerelles de classe 1 », pour contrôler les flux entrants et sortants.",
    exigence: { level: "obligatoire", note: "PG-075 R15 (SI DR)" },
    sources: ["pg075"],
    tags: ["passerelle", "détection", "DR"],
  },
  {
    id: "dr-r16-passerelle-taps",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R16 : passerelle de classe 1, taps passifs qualifiés",
    short:
      "Il est recommandé d'utiliser des taps passifs (qualifiés ANSSI) pour alimenter les sondes de détection en flux réseau.",
    detail:
      "Recommandation R16 : « Il est recommandé que l'entité responsable d'un SI DR mette en œuvre des taps passifs pour alimenter en flux réseau la ou les sondes de détection », ces équipements étant de préférence qualifiés. Formulation en recommandation, contrairement à R13/R14/R15.",
    exigence: { level: "recommande", note: "PG-075 R16" },
    sources: ["pg075"],
    tags: ["passerelle", "détection"],
  },
  {
    id: "dr-r17-passerelle-dispositifs-distincts",
    refId: "dr-ii901",
    themeId: "interco",
    title: "R17 : fonctions de sécurité portées par des dispositifs distincts",
    short:
      "Il est recommandé que pare-feux, dispositifs de rupture de flux et sondes de la passerelle de classe 1 soient portés par des matériels physiquement distincts. Cela évite qu'une compromission d'un équipement n'emporte plusieurs fonctions.",
    detail:
      "Recommandation R17 : « Il est recommandé que les fonctions de sécurité des pare-feux, des dispositifs de rupture de flux et des sondes [...] soient portées par des matériels physiquement distincts. »",
    exigence: { level: "recommande", note: "PG-075 R17" },
    sources: ["pg075"],
    tags: ["passerelle", "architecture"],
  },

  // ----------------------------------------------------------------------------
  // Thème : navigation, transferts, échanges (R18 à R28)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r18-navigation-web",
    refId: "dr-ii901",
    themeId: "navigation",
    title: "R18 : navigation Web depuis les SI sensibles",
    short:
      "La navigation Web est impossible depuis un SI de classe 2. Pour un SI de classe 1, il est recommandé de l'interdire ; si elle est nécessaire, elle passe par un SI dédié.",
    detail:
      "Recommandation R18 : « La navigation Web est impossible depuis les SI sensibles de classe 2. Pour les SI sensibles de classe 1, il est recommandé d'interdire l'accès au service de navigation Web. Si le service est nécessaire, il doit être mis à disposition depuis un SI dédié » (voir R18-).",
    exigence: { level: "recommande", note: "PG-075 R18 ; impossible par construction en classe 2" },
    sources: ["pg075"],
    tags: ["navigation", "classes"],
  },
  {
    id: "dr-r18moins-postes-rebond",
    refId: "dr-ii901",
    themeId: "navigation",
    title: "R18- : navigation Web depuis des postes de rebond",
    short:
      "Pour un SI de classe 1, il est fortement recommandé de déployer une infrastructure de postes de rebond dédiés à la navigation Web, cloisonnée du SI sensible.",
    detail:
      "Recommandation R18- : « Pour les SI sensibles de classe 1, il est fortement recommandé de déployer une infrastructure de postes de rebond dédiés à la navigation Web. Cette infrastructure est cloisonnée du SI sensible. » Les utilisateurs s'y connectent par accès distant depuis leurs postes.",
    exigence: { level: "recommande", note: "PG-075 R18- (fortement recommandé)" },
    sources: ["pg075"],
    tags: ["navigation", "architecture"],
  },
  {
    id: "dr-r19-chiffrer-dr-transfert",
    refId: "dr-ii901",
    themeId: "navigation",
    title: "R19 : chiffrer les informations DR transférées via un SI de classe 0",
    short:
      "Les informations DR échangées entre deux SI DR à travers un SI de classe 0 (Internet) doivent être chiffrées par des produits agréés DR.",
    detail:
      "Recommandation R19 : « Les informations DR échangées entre deux SI DR au travers d'un SI de classe 0 **doivent** être chiffrées au moyen de produits de sécurité agréés DR. » Le critère est l'**agrément** au niveau DR, pas l'algorithme.",
    exigence: { level: "obligatoire", note: "PG-075 R19 (SI DR)" },
    sources: ["pg075", "ii901"],
    tags: ["chiffrement", "transfert", "DR"],
  },
  {
    id: "dr-r20-chiffrer-sensible-transfert",
    refId: "dr-ii901",
    themeId: "navigation",
    title: "R20 : chiffrer les informations sensibles transférées via un SI de classe 0",
    short:
      "Les informations sensibles (non DR) échangées entre deux SI sensibles via un SI de classe 0 doivent être chiffrées ; il est recommandé d'utiliser un produit disposant d'un visa de sécurité.",
    detail:
      "Recommandation R20 : « Les informations sensibles échangées entre deux SI sensibles au travers d'un SI de classe 0 **doivent** être chiffrées. Il est recommandé [...] d'utiliser un produit disposant d'un visa de sécurité. » Le chiffrement est requis ; le niveau de garantie (agréé DR vs visa) dépend du régime.",
    exigence: { level: "obligatoire", note: "PG-075 R20 (chiffrement requis) ; visa recommandé" },
    sources: ["pg075"],
    tags: ["chiffrement", "transfert"],
  },
  {
    id: "dr-r22-dmz-mise-a-disposition",
    refId: "dr-ii901",
    themeId: "navigation",
    title: "R22 : cloisonner l'infrastructure de mise à disposition sur Internet",
    short:
      "Une infrastructure mettant des informations sensibles à disposition depuis Internet doit être cloisonnée dans une DMZ, au sein d'une passerelle de classe 1.",
    detail:
      "Recommandation R22 : « L'infrastructure de mise à disposition d'informations sensibles, accessibles depuis Internet, **doit** être cloisonnée dans une DMZ, au sein d'une passerelle de classe 1. »",
    exigence: { level: "obligatoire", note: "PG-075 R22" },
    sources: ["pg075"],
    tags: ["interconnexion", "internet", "cloisonnement"],
  },
  {
    id: "dr-r23-interco-descendantes-classe2",
    refId: "dr-ii901",
    themeId: "navigation",
    title: "R23 : maîtriser les interconnexions descendantes des SI de classe 2",
    short:
      "Dans un SI de classe 2, il est recommandé de préférer une interconnexion descendante par supports amovibles plutôt que par le réseau, avec des conditions d'emploi strictement définies.",
    detail:
      "Recommandation R23 : « Dans un SI de classe 2, il est recommandé de préférer une interconnexion descendante mettant en œuvre des supports amovibles plutôt qu'une interconnexion via le réseau. Les conditions d'emploi de ces supports doivent être strictement définies. »",
    exigence: { level: "recommande", note: "PG-075 R23" },
    sources: ["pg075"],
    tags: ["classes", "supports", "interconnexion"],
  },
  {
    id: "dr-echanges-securises",
    refId: "dr-ii901",
    themeId: "navigation",
    title: "Système d'échanges sécurisés (R24 à R28)",
    short:
      "Flux à l'initiative des clients externes uniquement, accès restreint aux utilisateurs autorisés, authentification par compte NON sensible, analyse de contenu antivirus, et journalisation/imputation de tous les échanges.",
    detail:
      "Recommandations du guide ANSSI-PG-075 sur le système d'échanges sécurisés :\n\n- **R24** : « N'autoriser que des protocoles de transfert vers le système d'échanges sécurisés ».\n- **R25** : « Système d'échanges sécurisés : restreindre les accès aux seuls utilisateurs autorisés ».\n- **R26** : « Système d'échanges sécurisés : authentifier les utilisateurs avec un compte non sensible ».\n- **R27** : « Système d'échanges sécurisés : analyser le contenu des données échangées ».\n- **R28** : « Système d'échanges sécurisés : journaliser et imputer les données échangées ».",
    exigence: { level: "obligatoire", note: "PG-075 R24, R26, R27, R28 (« doivent ») ; R25 recommandé" },
    sources: ["pg075"],
    tags: ["échanges", "authentification", "journalisation"],
  },

  // ----------------------------------------------------------------------------
  // Thème : produits et prestataires de confiance (R29 à R31)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r29-prestataires-visa",
    refId: "dr-ii901",
    themeId: "produits",
    title: "R29 : recourir à des prestataires disposant d'un visa de sécurité ANSSI",
    short:
      "Il est fortement recommandé de recourir à des prestataires de sécurité qualifiés (visa ANSSI). Pour un SI DR, le contrat doit garantir des conditions adaptées.",
    detail:
      "Recommandation R29 : « Il est fortement recommandé de recourir à des prestataires de sécurité disposant d'un visa de sécurité ANSSI. » Lorsque la prestation concerne un SI DR, le contrat liant le commanditaire au prestataire doit apporter des garanties spécifiques.",
    exigence: { level: "recommande", note: "PG-075 R29 (fortement recommandé)" },
    sources: ["pg075"],
    tags: ["produits", "prestataires"],
  },
  {
    id: "dr-r30-produits-visa",
    refId: "dr-ii901",
    themeId: "produits",
    title: "R30 : acquérir des produits disposant d'un visa de sécurité ANSSI",
    short:
      "Dès qu'ils existent, les produits de sécurité qualifiés doivent être utilisés. Un produit qualifié ANSSI doit être préféré à un produit seulement certifié.",
    detail:
      "Recommandation R30 : « Dès qu'ils existent, les produits de sécurité qualifiés **doivent** être utilisés. Un produit qualifié par l'ANSSI **doit** être préféré à un produit certifié. » S'applique aux produits sécurisant le SI comme aux moyens mis en œuvre.",
    exigence: { level: "obligatoire", note: "PG-075 R30 (« doivent »)" },
    sources: ["pg075"],
    tags: ["produits", "qualification"],
  },
  {
    id: "dr-r31-conditions-emploi-agrees",
    refId: "dr-ii901",
    themeId: "produits",
    title: "R31 : respecter les conditions d'emploi des équipements agréés",
    short:
      "Quand un produit agréé DR est mis en œuvre sur un SI DR, ses conditions d'emploi doivent être appliquées et les preuves de conformité versées au dossier d'homologation. Un produit agréé mal employé perd sa valeur.",
    detail:
      "Recommandation R31 : « Lorsqu'un produit de sécurité agréé DR est mis en œuvre sur un SI DR, les conditions d'emploi [...] **doivent** être mises en œuvre par le responsable de ce SI. Les preuves de conformité doivent être versées au dossier d'homologation. »",
    exigence: { level: "obligatoire", note: "PG-075 R31 (SI DR)" },
    sources: ["pg075"],
    tags: ["produits", "homologation", "DR"],
  },
  {
    id: "dr-visas-agrements",
    refId: "dr-ii901",
    themeId: "produits",
    title: "Visa de sécurité, qualification et agrément : trois notions distinctes",
    short:
      "Le visa de sécurité ANSSI atteste un niveau de confiance (certification ou qualification). L'agrément, lui, autorise spécifiquement le traitement d'informations DR.",
    detail:
      "Recommandations du guide ANSSI-PG-075 sur les produits et prestataires de confiance : R29 « Recourir à des prestataires de services SSI disposant d'un visa de sécurité ANSSI » ; R30 « Acquérir des produits de sécurité disposant d'un visa de sécurité ANSSI » ; R31 « Respecter les conditions d'emploi des équipements de sécurité agréés ». Pour le DR, l'emploi de produits agréés est requis (cf. R19 « Chiffrer les informations DR transférées via des SI de classe 0 », R55, R57).",
    exigence: { level: "conseille", note: "synthèse PG-075 annexe C" },
    sources: ["pg075"],
    tags: ["produits", "définition"],
  },

  // ----------------------------------------------------------------------------
  // Thème : cloisonnement et durcissement (R32 à R35)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r32-zones-homogenes",
    refId: "dr-ii901",
    themeId: "cloisonnement",
    title: "R32 : cloisonner le SI en zones de niveaux de sécurité homogènes",
    short:
      "Un SI sensible doit être cloisonné en zones de confiance homogènes (besoins et exposition), via une segmentation réseau réfléchie et un filtrage fin des flux.",
    detail:
      "Recommandation R32 : « Un SI sensible **doit** être cloisonné en différentes zones de confiance, homogènes du point de vue de leurs besoins de sécurité et de leur exposition. Ce cloisonnement doit faire l'objet d'une segmentation réfléchie du réseau, complétée par un filtrage fin des flux. »",
    exigence: { level: "obligatoire", note: "PG-075 R32" },
    sources: ["pg075"],
    tags: ["cloisonnement", "architecture"],
  },
  {
    id: "dr-r33-zones-publiques",
    refId: "dr-ii901",
    themeId: "cloisonnement",
    title: "R33 : éviter les moyens sensibles dans les zones ouvertes au public",
    short:
      "Si un besoin métier justifie d'étendre le réseau sensible dans une zone ouverte au public, cette extension doit être cloisonnée du reste du SI sensible.",
    detail:
      "Recommandation R33 : « S'il existe un besoin métier justifiant l'extension du réseau sensible dans une zone ouverte au public, cette extension **doit** être cloisonnée du reste du SI sensible. » Le traitement de données sensibles en zone d'accueil est à éviter.",
    exigence: { level: "obligatoire", note: "PG-075 R33 (si extension en zone publique)" },
    sources: ["pg075"],
    tags: ["cloisonnement", "physique"],
  },
  {
    id: "dr-r34-communications-laterales",
    refId: "dr-ii901",
    themeId: "cloisonnement",
    title: "R34 : bloquer les communications latérales",
    short:
      "Le responsable d'un SI sensible doit définir et mettre en œuvre une stratégie de blocage des communications latérales (postes et serveurs).",
    detail:
      "Recommandation R34 : « Afin de limiter les risques de propagation latérale d'une attaque, le responsable d'un SI sensible **doit** définir et mettre en œuvre une stratégie de blocage des communications latérales. »",
    exigence: { level: "obligatoire", note: "PG-075 R34" },
    sources: ["pg075"],
    tags: ["cloisonnement", "défense en profondeur"],
  },
  {
    id: "dr-r35-durcissement",
    refId: "dr-ii901",
    themeId: "cloisonnement",
    title: "R35 : durcir la configuration des matériels et logiciels",
    short:
      "Avant mise en exploitation, l'intégrité des matériels et logiciels doit être vérifiée et leur configuration durcie, pour chaque composant du SI sensible.",
    detail:
      "Recommandation R35 : « Avant leur mise en exploitation, l'intégrité des matériels et des logiciels d'un SI sensible **doit** être vérifiée et leur configuration **doit** être durcie. » S'applique à chaque composant : serveurs, postes, équipements réseau.",
    exigence: { level: "obligatoire", note: "PG-075 R35" },
    sources: ["pg075"],
    tags: ["durcissement"],
  },

  // ----------------------------------------------------------------------------
  // Thème : marquage et manipulation (R36 à R38 + IGI 1300 Annexe 1)
  // ----------------------------------------------------------------------------
  {
    id: "dr-igi-marquage",
    refId: "dr-ii901",
    themeId: "marquage",
    title: "Marquage réglementaire des documents DR (IGI 1300 Annexe 1)",
    short:
      "Timbre « Diffusion Restreinte » au milieu du haut de chaque page ; rappel en début de page pour les documents électroniques ; page de garde et couverture pour les documents reliés ; mention adaptée et toujours visible sur support non papier. Enregistrement au départ et à l'arrivée.",
    elementDeLangage:
      "« Le marquage DR n'est pas qu'un tampon décoratif : timbre en haut de chaque page, identification de l'émetteur, date et numéro d'enregistrement, et enregistrement au départ comme à l'arrivée. »",
    detail:
      "IGI 1300, Annexe 1, §2 : les documents DR sont identifiés en première page (référence de l'émetteur, date, numéro d'enregistrement) et portent le timbre « Diffusion Restreinte » :\n\n- sur chaque page, au milieu du haut de la page ;\n- pour les messages et documents électroniques, rappel en début de chaque page ;\n- pour les documents reliés, sur la page de garde et la couverture ;\n- sur support non papier, mention adaptée au support, définitive et toujours visible.\n\nLes documents DR sont **enregistrés au départ et à l'arrivée**, et élaborés dans des lieux empêchant l'accès de personnes non autorisées.",
    exigence: { level: "obligatoire", note: "IGI 1300 Annexe 1, §2" },
    sources: ["igi1300-an1"],
    tags: ["marquage", "manipulation"],
  },
  {
    id: "dr-igi-conservation-destruction",
    refId: "dr-ii901",
    themeId: "marquage",
    title: "Conservation, reproduction et destruction des documents DR",
    short:
      "Conservation dans des meubles fermant à clef. Reproduction limitée aux seuls besoins du service. Destruction irréversible sous la responsabilité du détenteur.",
    detail:
      "IGI 1300, Annexe 1, §3 : « Les documents Diffusion Restreinte doivent être conservés dans des meubles fermant à clef. Leur reproduction doit rester limitée aux seuls besoins du service. Leur destruction irréversible a lieu sous la responsabilité des détenteurs, sans mention particulière sur les documents d'enregistrement du courrier. »",
    exigence: { level: "obligatoire", note: "IGI 1300 Annexe 1, §3" },
    sources: ["igi1300-an1"],
    tags: ["manipulation", "conservation"],
  },
  {
    id: "dr-igi-diffusion-transmission",
    refId: "dr-ii901",
    themeId: "marquage",
    title: "Diffusion et transmission : interdiction sur Internet hors SI homologué DR",
    short:
      "Diffusion externe sous double enveloppe (mention DR sur l'enveloppe intérieure). La transmission DR est INTERDITE sur Internet ou tout SI non homologué DR, sauf mesures particulières conformes à l'II 901.",
    elementDeLangage:
      "« On n'envoie pas du DR sur Internet ou sur un SI non homologué DR. La règle vient de l'IGI 1300, et c'est exactement ce que l'II 901 vient encadrer techniquement. »",
    detail:
      "IGI 1300, Annexe 1, §4 : la diffusion externe se fait sous **double enveloppe** (enveloppe intérieure portant la mention DR et les références ; enveloppe extérieure neutre).\n\nSurtout : « La transmission d'informations Diffusion Restreinte est **interdite sur le réseau Internet ou sur tout autre système d'information non homologué Diffusion Restreinte**, sauf à faire l'objet de mesures de protection particulières conformément à l'instruction interministérielle n° 901/SGDSN/ANSSI relative à la protection des systèmes d'information sensibles. »",
    exigence: { level: "obligatoire", note: "IGI 1300 Annexe 1, §4 (interdiction)" },
    sources: ["igi1300-an1", "ii901"],
    tags: ["manipulation", "transmission", "idée reçue"],
  },
  {
    id: "dr-igi-ssi-exception-urgence",
    refId: "dr-ii901",
    themeId: "marquage",
    title: "SI traitant du DR : homologation, et exception d'urgence",
    short:
      "Les SI traitant/stockant/transmettant du DR font l'objet d'une homologation (II 901). À titre exceptionnel, en cas d'urgence prévalant sur la confidentialité, un SI non homologué peut être utilisé, avec notification au FSSI.",
    detail:
      "IGI 1300, Annexe 1, §5 : les SI destinés au traitement, stockage ou transmission d'informations DR « font l'objet d'une homologation de sécurité » ; l'II 901 en définit les règles.\n\nException : « Lorsque l'urgence de leur traitement ou de leur transmission est plus importante que la protection de leur confidentialité, des informations Diffusion Restreinte peuvent, à titre exceptionnel, être traitées ou transmises sur des systèmes n'ayant pas fait l'objet d'une homologation de sécurité spécifique au Diffusion Restreinte. Ces cas exceptionnels sont notifiés au fonctionnaire de sécurité des systèmes d'information [...]. » Le FSSI est le fonctionnaire de sécurité des systèmes d'information.",
    exigence: { level: "obligatoire", note: "IGI 1300 Annexe 1, §5 ; exception encadrée" },
    sources: ["igi1300-an1", "ii901"],
    tags: ["homologation", "manipulation"],
  },
  {
    id: "dr-r36-marquer-infos",
    refId: "dr-ii901",
    themeId: "marquage",
    title: "R36 : marquer les informations sensibles (au sein du SI)",
    short:
      "Il est fortement recommandé de se doter de moyens de marquage des fichiers et applications sensibles (tampons, conventions de nommage, bannières) et de sensibiliser les utilisateurs.",
    detail:
      "Recommandation R36 : « Il est fortement recommandé que l'entité mettant en œuvre un SI sensible se dote des moyens permettant le marquage des fichiers sensibles (tampons, conventions de nommage…) et des applications sensibles (bannières, adaptation de l'interface homme-machine…). Elle doit en outre sensibiliser les utilisateurs du SI sensible à l'importance de marquer les informations dès leur création. » Complément technique au marquage réglementaire de l'IGI 1300.",
    exigence: { level: "recommande", note: "PG-075 R36 (fortement recommandé)" },
    sources: ["pg075"],
    tags: ["marquage"],
  },
  {
    id: "dr-r37-r38-marquage-supports-cables",
    refId: "dr-ii901",
    themeId: "marquage",
    title: "R37 / R38 : marquer les supports et le câblage (code couleur)",
    short:
      "Il est fortement recommandé de marquer les supports physiques de stockage, et recommandé d'adopter un code couleur pour distinguer visuellement les câbles de niveaux de sensibilité différents.",
    detail:
      "Recommandation R37 : marquer les supports physiques de stockage des informations sensibles (réduction des erreurs et détection visuelle des branchements illégitimes).\n\nRecommandation R38 : « Il est recommandé de distinguer visuellement les câbles réseaux ayant des niveaux de sensibilité différents, par exemple par l'utilisation de câbles de différentes couleurs. »",
    exigence: { level: "recommande", note: "PG-075 R37 (fortement recommandé), R38 (recommandé)" },
    sources: ["pg075"],
    tags: ["marquage", "câblage"],
  },

  // ----------------------------------------------------------------------------
  // Thème : accès, authentification, codes malveillants (R39 à R44)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r39-authentification-forte",
    refId: "dr-ii901",
    themeId: "acces",
    title: "R39 : activer une authentification initiale forte",
    short:
      "L'authentification initiale d'un utilisateur sur un SI sensible doit être une authentification multifacteur à l'état de l'art.",
    detail:
      "Recommandation R39 : « L'authentification initiale d'un utilisateur sur un SI sensible **doit** être une authentification multifacteur à l'état de l'art. » Pour les authentifications secondaires, il est au contraire recommandé d'en réduire la friction (SSO).",
    exigence: { level: "obligatoire", note: "PG-075 R39 (MFA initiale)" },
    sources: ["pg075"],
    tags: ["authentification", "accès"],
  },
  {
    id: "dr-r40-proteger-secrets",
    refId: "dr-ii901",
    themeId: "acces",
    title: "R40 : protéger les secrets d'authentification",
    short:
      "Il est recommandé de protéger les secrets d'authentification secondaires via un système d'authentification unique (SSO), et de protéger ceux qui ne peuvent l'être.",
    detail:
      "Recommandation R40 : « Il est recommandé que les secrets d'authentification secondaires soient protégés à l'aide d'un système d'authentification unique (SSO) », et que ceux non pris en charge soient protégés par d'autres moyens.",
    exigence: { level: "recommande", note: "PG-075 R40" },
    sources: ["pg075"],
    tags: ["authentification"],
  },
  {
    id: "dr-r41-droits-acces",
    refId: "dr-ii901",
    themeId: "acces",
    title: "R41 : gérer rigoureusement les droits d'accès",
    short:
      "La gestion des droits doit suivre une procédure permettant d'imputer affectations, modifications et suppressions, avec une revue périodique des droits.",
    detail:
      "Recommandation R41 : « La gestion des droits sur un SI sensible **doit** faire l'objet d'une procédure permettant d'imputer les affectations, les modifications et les suppressions de droits, tout au long du cycle de vie des comptes. » Une revue périodique des droits est prévue.",
    exigence: { level: "obligatoire", note: "PG-075 R41" },
    sources: ["pg075"],
    tags: ["accès", "comptes"],
  },
  {
    id: "dr-r42-antivirus",
    refId: "dr-ii901",
    themeId: "acces",
    title: "R42 : protéger le SI sensible des codes malveillants",
    short:
      "Des antivirus doivent être installés sur l'ensemble des serveurs applicatifs, postes de travail et moyens d'interconnexion. Il est recommandé de diversifier les technologies.",
    detail:
      "Recommandation R42 : « Des logiciels antivirus **doivent** être installés sur l'ensemble des serveurs applicatifs, sur les postes de travail et sur les moyens permettant l'interconnexion [...]. Dans la mesure du possible, il est recommandé de diversifier les technologies de protection. »",
    exigence: { level: "obligatoire", note: "PG-075 R42 (installation) ; diversification recommandée" },
    sources: ["pg075"],
    tags: ["codes malveillants"],
  },
  {
    id: "dr-r43-r44-protection-detection",
    refId: "dr-ii901",
    themeId: "acces",
    title: "R43 / R44 : politique de protection adaptée et détection des comportements",
    short:
      "Le déploiement des protections doit être réfléchi pour ne pas affaiblir la sécurité (R43). Il est recommandé d'installer des outils de détection des comportements suspects alimentant la supervision (R44).",
    detail:
      "Recommandation R43 : les solutions de protection contre les codes malveillants sont indispensables, mais leur déploiement doit être réfléchi (ne pas augmenter la surface d'attaque ni créer une voie d'exfiltration).\n\nRecommandation R44 : « Il est recommandé d'installer des outils de détection des comportements suspects et que les journaux qu'ils génèrent alimentent le système de supervision », en premier lieu sur les postes de travail.",
    exigence: { level: "recommande", note: "PG-075 R43, R44" },
    sources: ["pg075"],
    tags: ["codes malveillants", "détection"],
  },

  // ----------------------------------------------------------------------------
  // Thème : supports amovibles (R45 à R48, R57, R58)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r45-supports-limiter",
    refId: "dr-ii901",
    themeId: "supports",
    title: "R45 : limiter l'usage des supports amovibles au strict besoin",
    short:
      "Il est fortement recommandé de réduire le nombre de supports amovibles au strict besoin opérationnel et de préférer les échanges via le réseau.",
    detail:
      "Recommandation R45 : « Il est fortement recommandé que l'entité [...] réduise le nombre de supports amovibles au strict besoin opérationnel et préfère des solutions d'échange via le réseau. » Les supports amovibles sont un vecteur d'attaque majeur, y compris pour les SI isolés.",
    exigence: { level: "recommande", note: "PG-075 R45 (fortement recommandé)" },
    sources: ["pg075"],
    tags: ["supports"],
  },
  {
    id: "dr-r46-supports-politique",
    refId: "dr-ii901",
    themeId: "supports",
    title: "R46 : maîtriser la gestion et les conditions d'usage des supports",
    short:
      "Une entité qui autorise les supports amovibles sur un SI sensible doit se doter d'une politique conforme à l'II 901, précisant règles de gestion et conditions d'usage.",
    detail:
      "Recommandation R46 : « Une entité qui autorise l'utilisation de supports de stockage amovibles sur un SI sensible **doit** se doter d'une politique, conforme aux mesures de sécurité de l'II 901, précisant leurs règles de gestion et leurs conditions d'usage. »",
    exigence: { level: "obligatoire", note: "PG-075 R46 (renvoie aux mesures II 901)" },
    sources: ["pg075", "ii901"],
    tags: ["supports", "organisationnel"],
  },
  {
    id: "dr-r47-r48-supports-lecture-depollution",
    refId: "dr-ii901",
    themeId: "supports",
    title: "R47 / R48 : lecture seule et dépollution des supports",
    short:
      "Il est recommandé de privilégier les supports en lecture seule (importation uniquement), et fortement recommandé d'utiliser une solution de dépollution (sas, station blanche) pour les supports non maîtrisés.",
    detail:
      "Recommandation R47 : privilégier l'usage de supports amovibles ou de dispositifs garantissant que seule l'importation de données est possible.\n\nRecommandation R48 : « Il est fortement recommandé d'utiliser une solution dédiée à la dépollution (p. ex. sas, station blanche) pour les échanges [...] réalisés au moyen de supports amovibles qui ne sont ni fournis ni administrés » par l'entité.",
    exigence: { level: "recommande", note: "PG-075 R47, R48 (fortement recommandé)" },
    sources: ["pg075"],
    tags: ["supports"],
  },
  {
    id: "dr-r57-r58-chiffrer-supports",
    refId: "dr-ii901",
    themeId: "supports",
    title: "R57 / R58 : chiffrer les données stockées sur supports amovibles",
    short:
      "Données DR sur support amovible : chiffrement par produit agréé DR (obligatoire). Données sensibles non DR : chiffrement par produit disposant d'un visa de sécurité.",
    detail:
      "Recommandation R57 : « Les données DR stockées sur un support amovible **doivent** être chiffrées au moyen de produits de sécurité agréés DR. »\n\nRecommandation R58 : « Les données sensibles stockées sur un support amovible **doivent** être chiffrées au moyen de produits [...] disposant d'un visa de sécurité. »",
    exigence: { level: "obligatoire", note: "PG-075 R57 (DR, agréé), R58 (sensible, visa)" },
    sources: ["pg075"],
    tags: ["supports", "chiffrement", "DR"],
  },

  // ----------------------------------------------------------------------------
  // Thème : postes de travail et nomadisme (R49 à R61)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r49-maitriser-postes",
    refId: "dr-ii901",
    themeId: "postes",
    title: "R49 : maîtriser les moyens informatiques des utilisateurs",
    short:
      "L'entité doit maîtriser les moyens informatiques mis à disposition des utilisateurs, par des mesures techniques et organisationnelles, pour réduire les atteintes à l'intégrité des postes.",
    detail:
      "Recommandation R49 du guide ANSSI-PG-075 : « Maîtriser les moyens informatiques affectés aux utilisateurs d'un SI sensible ». Énoncé : « Des mesures techniques et organisationnelles permettent à l'entité responsable d'un SI sensible de maîtriser les moyens informatiques mis à la disposition des utilisateurs, de façon à notamment réduire le risque d'atteinte à l'intégrité des postes de travail [...]. »",
    exigence: { level: "recommande", note: "PG-075 R49 (renvoie à des mesures II 901)" },
    sources: ["pg075", "ii901"],
    tags: ["postes"],
  },
  {
    id: "dr-r50-reseau-dedie",
    refId: "dr-ii901",
    themeId: "postes",
    title: "R50 / R50- : réseau dédié aux ressources sensibles",
    short:
      "Il est fortement recommandé de déployer les ressources sensibles sur un réseau physique dédié (R50). En mesure dégradée, un réseau logique dédié protégé par IPsec, avec VLAN et filtrage (R50-).",
    detail:
      "Recommandation R50 : « Il est fortement recommandé de déployer les ressources d'un SI sensible sur un réseau physique dédié. »\n\nRecommandation R50- (dégradée) : à défaut, déployer les ressources sur un réseau **logique** dédié protégé par IPsec, complété par segmentation (VLAN) et filtrage réseau.",
    exigence: { level: "recommande", note: "PG-075 R50 (physique), R50- (logique, dégradée)" },
    sources: ["pg075"],
    tags: ["postes", "réseau", "cloisonnement"],
  },
  {
    id: "dr-r51-authentifier-ressources",
    refId: "dr-ii901",
    themeId: "postes",
    title: "R51 : authentifier les ressources vis-à-vis du réseau",
    short:
      "Il est fortement recommandé que les ressources d'un SI sensible (postes en premier lieu) soient authentifiées avant d'obtenir une connectivité réseau.",
    detail:
      "Recommandation R51 : « Il est fortement recommandé que les ressources d'un SI sensible, et en premier lieu les moyens distribués, soient authentifiés, avant de pouvoir bénéficier d'une connectivité sur le réseau local sensible. » (renvoi à la mesure II 901 EXP-CI-ACCRES).",
    exigence: { level: "recommande", note: "PG-075 R51 (fortement recommandé)" },
    sources: ["pg075", "ii901"],
    tags: ["postes", "réseau", "authentification"],
  },
  {
    id: "dr-r52-poste-dedie",
    refId: "dr-ii901",
    themeId: "postes",
    title: "R52 / R52- / R52-- : architecture du poste de travail sensible",
    short:
      "Recommandé : un poste sensible physiquement dédié (R52). À défaut : poste multiniveau par virtualisation/conteneurisation (R52-), ou poste sensible avec accès distant au SI usuel (R52--).",
    detail:
      "Recommandation R52 : « Il est recommandé de mettre en œuvre des postes de travail sensibles physiquement distincts de tout autre SI. »\n\nR52- (à défaut) : poste multiniveau via virtualisation/conteneurisation, à condition d'un cloisonnement robuste au niveau système.\n\nR52-- : poste sensible avec accès distant au SI usuel. Gradation décroissante de protection.",
    exigence: { level: "recommande", note: "PG-075 R52 (dédié) > R52- > R52-- (gradation)" },
    sources: ["pg075"],
    tags: ["postes", "architecture"],
  },
  {
    id: "dr-r53-r54-nomadisme",
    refId: "dr-ii901",
    themeId: "postes",
    title: "R53 / R54 : nomadisme, recommandations ANSSI et protection physique",
    short:
      "Les recommandations ANSSI sur le nomadisme numérique doivent être appliquées dès qu'un service d'accès distant à un SI sensible est en production. Les équipements nomades doivent être protégés physiquement.",
    detail:
      "Recommandation R53 : les recommandations du guide ANSSI relatif au nomadisme numérique « **doivent** être appliquées dès qu'un service de nomadisme est mis en production pour l'accès à distance à un SI sensible ».\n\nRecommandation R54 : « Les équipements d'accès nomade sensibles **doivent** être dotés de dispositifs physiques de protection (câble antivol, filtre de confidentialité). Ils ne doivent pas être laissés sans surveillance en dehors de leur période d'utilisation. »",
    exigence: { level: "obligatoire", note: "PG-075 R53, R54 (« doivent »)" },
    sources: ["pg075"],
    tags: ["nomadisme"],
  },
  {
    id: "dr-r55-r56-canaux-nomades",
    refId: "dr-ii901",
    themeId: "postes",
    title: "R55 / R56 : sécuriser les canaux d'accès nomade (DR vs sensible)",
    short:
      "Canal nomade vers un SI DR : produit de sécurité agréé DR (obligatoire, R55). Canal vers un SI sensible non DR : produit disposant d'un visa de sécurité (recommandé, R56).",
    detail:
      "Recommandation R55 : « Le canal d'interconnexion entre un équipement d'accès nomade DR et une passerelle [...] **doit** être sécurisé au moyen de produits de sécurité agréés DR. »\n\nRecommandation R56 : pour un SI sensible non DR, « il est recommandé de sécuriser le canal [...] au moyen de produits disposant d'un visa de sécurité ». Encore la gradation DR (agréé, obligatoire) / sensible (visa, recommandé).",
    exigence: { level: "obligatoire", note: "PG-075 R55 (DR, obligatoire) ; R56 (sensible, recommandé)" },
    sources: ["pg075"],
    tags: ["nomadisme", "chiffrement", "DR"],
  },
  {
    id: "dr-r59-r60-r61-flux-sansfil",
    refId: "dr-ii901",
    themeId: "postes",
    title: "R59 / R60 / R61 : flux nomades, réseaux sans fil et portails captifs",
    short:
      "Flux nomades encapsulés en VPN (agréé DR ou visa) en toute circonstance (R59). Réseau sans fil cloisonné du SI sensible et tunnel agréé/visé (R60). Accès aux portails captifs bloqué sur les équipements nomades sensibles (R61).",
    detail:
      "R59 : « Il est fortement recommandé que tous les flux réseau nomades d'un SI sensible transitent par des concentrateurs VPN dédiés et soient encapsulés dans un tunnel VPN agréé DR (cas des SI DR) ou disposant d'un visa de sécurité ANSSI (cas des SI sensibles) [...]. »\n\nR60 : la mise en œuvre de réseaux sans fil doit être justifiée par des impératifs opérationnels ; les flux sans fil doivent être sécurisés par un tunnel disposant d'un visa (sensible) ou d'un agrément (DR), avec une architecture cloisonnée.\n\nR61 : « L'accès aux portails captifs publics **doit** être bloqué sur tout équipement d'accès nomade appartenant à un SI sensible. »",
    exigence: { level: "obligatoire", note: "PG-075 R59 (recommandé), R60 et R61 (« doit »)" },
    sources: ["pg075"],
    tags: ["nomadisme", "sans-fil", "chiffrement"],
  },

  // ----------------------------------------------------------------------------
  // Thème : administration et journalisation (R62 à R70)
  // ----------------------------------------------------------------------------
  {
    id: "dr-r62-admin-securisee",
    refId: "dr-ii901",
    themeId: "admin",
    title: "R62 : appliquer les recommandations ANSSI sur l'administration sécurisée",
    short:
      "Le responsable d'un SI sensible doit respecter les recommandations du guide ANSSI relatif à l'administration sécurisée des SI.",
    detail:
      "Recommandation R62 : « Le responsable d'un SI sensible **doit** respecter les recommandations du guide relatif à l'administration sécurisée des SI. » L'annexe E du PG-075 met ces recommandations en correspondance avec les mesures de sécurité II 901.",
    exigence: { level: "obligatoire", note: "PG-075 R62 (renvoie au guide ANSSI admin)" },
    sources: ["pg075"],
    tags: ["administration"],
  },
  {
    id: "dr-r63-gerer-admins",
    refId: "dr-ii901",
    themeId: "admin",
    title: "R63 : gérer les administrateurs d'un SI sensible",
    short:
      "La liste des administrateurs doit être limitée au juste besoin, connue et validée par l'autorité d'homologation. Pour un SI DR, il est recommandé qu'ils soient habilités au niveau adéquat.",
    detail:
      "Recommandation R63 : « La liste des administrateurs autorisés [...] **doit** être limitée au juste besoin, connue et validée par l'autorité d'homologation. » Il est en outre recommandé que les administrateurs d'un SI DR soient détenteurs d'une habilitation individuelle d'un niveau adéquat.",
    exigence: { level: "obligatoire", note: "PG-075 R63 ; habilitation DR recommandée" },
    sources: ["pg075"],
    tags: ["administration", "comptes"],
  },
  {
    id: "dr-r64-admin-distance",
    refId: "dr-ii901",
    themeId: "admin",
    title: "R64 / R64- : administration à distance et télémaintenance",
    short:
      "L'administration à distance autorisée se fait depuis des postes maîtrisés, flux sécurisés par tunnel VPN IPsec (R64). Les interconnexions de télémaintenance font l'objet d'une analyse de risque dédiée (R64-).",
    detail:
      "Recommandation R64 : « Si un service d'administration à distance est autorisé [...], les accès **doivent** être effectués depuis des postes d'administration maîtrisés et les flux **doivent** être sécurisés au moyen d'un tunnel VPN IPsec » (concentrateur dédié).\n\nRecommandation R64- : les interconnexions de télémaintenance font l'objet d'une analyse de risque spécifique, avec mises à jour régulières des composants.",
    exigence: { level: "obligatoire", note: "PG-075 R64 (« doivent ») ; R64- (analyse de risque)" },
    sources: ["pg075"],
    tags: ["administration", "chiffrement"],
  },
  {
    id: "dr-r65-r66-mcs-obsoletes",
    refId: "dr-ii901",
    themeId: "admin",
    title: "R65 / R66 : MCS et isolement des systèmes obsolètes",
    short:
      "Une politique de maintien en condition de sécurité (fréquences, tests de mise à jour) est établie (R65). Les systèmes obsolètes conservés pour un besoin métier justifié doivent être isolés du SI sensible (R66).",
    detail:
      "Recommandation R65 : le responsable établit une politique de MCS du SI et de son SI d'administration (fréquences de déploiement, procédures de test des mises à jour).\n\nRecommandation R66 : « Les systèmes obsolètes conservés en production pour répondre à des besoins métier justifiés **doivent** être isolés du SI sensible » ; la manière de réaliser cette isolation fait l'objet d'une étude spécifique.",
    exigence: { level: "obligatoire", note: "PG-075 R65 (politique), R66 (« doivent » isoler)" },
    sources: ["pg075"],
    tags: ["administration", "MCS"],
  },
  {
    id: "dr-r67-r68-journalisation",
    refId: "dr-ii901",
    themeId: "admin",
    title: "R67 / R68 : journalisation et conservation 12 mois",
    short:
      "Les bonnes pratiques ANSSI de journalisation doivent être appliquées. Les journaux d'un SI sensible doivent être conservés 12 mois glissants (hors contraintes légales particulières).",
    detail:
      "Recommandation R67 : appliquer les recommandations ANSSI relatives à la journalisation des évènements de sécurité.\n\nRecommandation R68 : « Les journaux des évènements de sécurité **doivent** être conservés pendant douze mois glissants, hors contraintes légales et réglementaires particulières. »",
    exigence: { level: "obligatoire", note: "PG-075 R67, R68 (12 mois)" },
    sources: ["pg075"],
    tags: ["journalisation", "supervision"],
  },
  {
    id: "dr-r69-r70-supervision-incidents",
    refId: "dr-ii901",
    themeId: "admin",
    title: "R69 / R70 : supervision (PDIS) et déclaration des incidents à l'ANSSI",
    short:
      "Il est fortement recommandé de recourir à un prestataire de détection d'incidents (PDIS) qualifié. Le responsable doit formaliser une procédure de déclaration des incidents à l'ANSSI.",
    detail:
      "Recommandation R69 : « Il est fortement recommandé que le responsable d'un SI sensible fasse appel à un prestataire de détection des incidents de sécurité (PDIS) qualifié par l'ANSSI. »\n\nRecommandation R70 : « Le responsable d'un SI sensible **doit** formaliser une procédure de déclaration des incidents de sécurité à l'ANSSI », en particulier pour les incidents dépassant le périmètre du SI.",
    exigence: { level: "obligatoire", note: "PG-075 R69 (recommandé), R70 (« doit »)" },
    sources: ["pg075"],
    tags: ["supervision", "incident"],
  },

  // ----------------------------------------------------------------------------
  // Thème : chiffrement et zone protégée (II 901)
  // ----------------------------------------------------------------------------
  {
    id: "dr-chiffrement-hors-zone",
    refId: "dr-ii901",
    themeId: "navigation",
    title: "Chiffrement par moyens agréés hors zone physiquement protégée",
    short:
      "Les informations DR doivent être chiffrées avec des moyens agréés ANSSI dès qu'elles transitent ou sont stockées hors d'une zone physiquement protégée.",
    elementDeLangage:
      "« Dès qu'une donnée DR sort d'une zone physiquement protégée, transit ou stockage, elle doit être chiffrée par un moyen agréé ANSSI au niveau DR. »",
    detail:
      "L'II 901 impose le chiffrement des informations DR « à l'aide de moyens agréés à ce niveau par l'ANSSI, dès lors qu'elles transitent ou sont stockées en dehors d'une zone physiquement protégée » (formulation reprise par la FAQ cloud de l'ANSSI). Le critère est l'**agrément**, pas l'algorithme.",
    exigence: { level: "obligatoire", note: "II 901, hors zone physiquement protégée" },
    sources: ["faq-cloud", "ii901"],
    tags: ["chiffrement", "technique"],
  },

  // ----------------------------------------------------------------------------
  // Thème : cloud
  // ----------------------------------------------------------------------------
  {
    id: "dr-cloud-2024",
    refId: "dr-ii901",
    themeId: "cloud",
    title: "Hébergement cloud d'un SI DR : recommandations de juillet 2024",
    short:
      "Le 8 juillet 2024, l'ANSSI a publié des recommandations pour l'hébergement des SI sensibles dans le cloud, visant explicitement les SI de niveau DR, les SI sensibles d'OIV/OSE et les SIIV.",
    elementDeLangage:
      "« Depuis juillet 2024, l'ANSSI a un cadre dédié à l'hébergement cloud des SI sensibles, qui couvre explicitement le niveau DR ainsi que les OIV/OSE et les SIIV. »",
    detail:
      "Le **8 juillet 2024**, l'ANSSI a publié le guide « Recommandations pour l'hébergement dans le cloud des systèmes d'information sensibles » (versions française et anglaise). Périmètre : SI de niveau DR, SI sensibles des OIV et OSE, et SIIV. Cible explicite : les entités envisageant un hébergement cloud pour leurs SI de niveau DR.",
    exigence: { level: "recommande", note: "recommandations ANSSI (guide), 08/07/2024" },
    sources: ["reco-cloud-2024"],
    tags: ["cloud"],
  },
  {
    id: "dr-secnumcloud-ne-suffit-pas",
    refId: "dr-ii901",
    themeId: "cloud",
    title: "SecNumCloud ne suffit pas pour des données DR",
    short:
      "La qualification SecNumCloud ne se substitue pas aux exigences DR. Héberger du DR sur un service SecNumCloud requiert des exigences additionnelles déterminées par l'homologation II 901.",
    elementDeLangage:
      "« SecNumCloud est nécessaire mais pas suffisant pour du DR : la conformité au référentiel ne se substitue pas aux exigences réglementaires. Il faut une homologation au titre de l'II 901. »",
    detail:
      "La FAQ cloud de l'ANSSI est claire : « La conformité au référentiel SecNumCloud **ne se substitue pas aux exigences légales ou réglementaires** », en mentionnant explicitement les données de niveau DR. Le recours à un service SecNumCloud pour du DR suppose des **exigences additionnelles**, déterminées via une **homologation de sécurité au titre de l'II 901**.",
    exigence: { level: "obligatoire", note: "homologation II 901 requise en complément" },
    sources: ["faq-cloud"],
    tags: ["cloud", "idée reçue"],
  },

  // ----------------------------------------------------------------------------
  // Thème : cadre élargi (contexte)
  // ----------------------------------------------------------------------------
  {
    id: "dr-cadre-lpm-oiv-siiv",
    detailParaphrase: true,
    refId: "dr-ii901",
    themeId: "cadre",
    title: "Situer la DR dans le cadre élargi : LPM, OIV, SIIV",
    short:
      "La DR/II 901 s'articule avec le dispositif OIV/SIIV (issu de la LPM) : les recommandations cloud de juillet 2024 visent dans une même publication les SI DR, les SI sensibles d'OIV et les SIIV. La DR concerne le niveau de protection de l'information ; OIV/SIIV concernent le statut de l'opérateur et de ses systèmes critiques, et les deux peuvent se superposer.",
    detail:
      "Le dispositif des Opérateurs d'Importance Vitale (OIV) et de leurs Systèmes d'Information d'Importance Vitale (SIIV) relève de la Loi de Programmation Militaire (LPM). La DR/II 901 et ce dispositif se recoupent en pratique : la publication ANSSI de juillet 2024 traite ensemble SI DR, SI sensibles d'OIV/OSE et SIIV.",
    exigence: { level: "conseille", note: "élément de contexte, à approfondir hors II 901" },
    sources: ["reco-cloud-2024"],
    tags: ["cadre", "contexte"],
  },
  {
    id: "dr-cadre-nis2-ose",
    detailParaphrase: true,
    refId: "dr-ii901",
    themeId: "cadre",
    title: "OSE et NIS2 : attention au vocabulaire en cours d'évolution",
    short:
      "Le terme OSE est issu de la directive NIS1. La directive NIS2 (UE 2022/2555) élargit le dispositif. Le statut précis d'obsolescence/remplacement doit être vérifié sur une source officielle dédiée.",
    detail:
      "Les Opérateurs de Services Essentiels (OSE) sont une notion issue de la directive NIS1. La directive **NIS2** (UE 2022/2555) a vocation à élargir et faire évoluer ce cadre, avec sa transposition française.\n\nCe point est **périphérique** à la DR/II 901 et son articulation précise n'a pas été établie par une source officielle unique dans nos recherches. Prudence : ne pas présenter le passage OSE vers NIS2 comme acquis sans vérifier le texte de transposition à jour.",
    exigence: { level: "conseille", note: "contexte ; statut à vérifier sur source officielle" },
    sources: ["reco-cloud-2024"],
    tags: ["cadre", "contexte", "à vérifier"],
  },
];
