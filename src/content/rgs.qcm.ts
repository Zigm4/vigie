// QCM RGS v2.0 (Referentiel general de securite).
//
// Chaque question est sourcee (corps du texte du RGS v2.0 et annexe A1) et
// porte son niveau d'exigence tel que formule par le texte. Les pieges visent
// les idees recues les plus frequentes : "le RGS ne concerne que l'Etat",
// "l'homologation est facultative", la confusion entre les niveaux (*, **, ***)
// des fonctions de securite et les niveaux de qualification des produits
// (elementaire, standard, renforce).

import type { QcmQuestion } from "../types.ts";

export const rgsQcm: QcmQuestion[] = [
  // ---- socle ----
  {
    id: "q-rgs-base-legale",
    refId: "rgs",
    themeId: "socle",
    question: "Sur quels textes repose le RGS v2.0 ?",
    options: [
      { text: "L'ordonnance n° 2005-1516 et le décret n° 2010-112, la v2.0 étant approuvée par arrêté du Premier ministre du 13 juin 2014", correct: true },
      { text: "Un simple guide ANSSI sans fondement réglementaire", correct: false },
      { text: "La loi de programmation militaire de 2013", correct: false },
    ],
    explanation:
      "Le RGS est pris en application du décret n° 2010-112 du 2 février 2010, lui-même pris pour l'application des articles 9, 10 et 12 de l'ordonnance n° 2005-1516 du 8 décembre 2005. La version 2.0 est publiée par l'arrêté du 13 juin 2014 portant approbation du référentiel général de sécurité.",
    exigence: { level: "obligatoire", note: "ordonnance n° 2005-1516, décret n° 2010-112, arrêté du 13 juin 2014" },
    sources: ["rgs-corps", "ordonnance-2005"],
  },
  {
    id: "q-rgs-etat-seulement",
    refId: "rgs",
    themeId: "socle",
    question: "Le RGS ne concerne-t-il que les services de l'Etat ?",
    options: [
      { text: "Non : il s'applique aux autorités administratives au sens large (Etat, collectivités territoriales, établissements publics administratifs, organismes de protection sociale)", correct: true },
      { text: "Oui : seuls les ministères et leurs services déconcentrés sont visés", correct: false },
      { text: "Non : il s'impose à toutes les entreprises privées françaises", correct: false },
    ],
    explanation:
      "Le RGS « s'applique aux systèmes d'information mis en œuvre par les autorités administratives dans leurs relations entre elles et avec les usagers » (chap. 1). La notion d'autorité administrative, définie par l'art. 1er de l'ordonnance n° 2005-1516, dépasse largement l'Etat. Pour les autres organismes, le RGS n'est qu'un « recueil de bonnes pratiques ».",
    exigence: { level: "obligatoire", note: "pour les autorités administratives ; recueil de bonnes pratiques pour les autres organismes" },
    sources: ["rgs-corps", "ordonnance-2005"],
  },
  {
    id: "q-rgs-teleservice",
    refId: "rgs",
    themeId: "socle",
    question: "Qu'est-ce qu'un téléservice au sens de l'ordonnance n° 2005-1516 ?",
    options: [
      { text: "Tout système d'information permettant aux usagers de procéder par voie électronique à des démarches ou formalités administratives", correct: true },
      { text: "Uniquement les sites web de l'Etat hébergés par l'ANSSI", correct: false },
      { text: "Tout service de téléphonie utilisé par une administration", correct: false },
    ],
    explanation:
      "Le téléservice est défini par l'art. 1er de l'ordonnance n° 2005-1516 : tout système d'information permettant aux usagers de procéder par voie électronique à des démarches ou formalités administratives. C'est la cible concrète de la démarche RGS, et la décision d'homologation d'un téléservice est rendue accessible aux usagers (RGS v2.0, §2.4).",
    exigence: { level: "obligatoire", note: "ordonnance n° 2005-1516, art. 1er" },
    sources: ["ordonnance-2005", "rgs-corps"],
  },

  // ---- demarche ----
  {
    id: "q-rgs-etapes",
    refId: "rgs",
    themeId: "demarche",
    question: "Quelles sont les cinq étapes de la démarche de mise en conformité avec le RGS ?",
    options: [
      { text: "Analyse des risques, objectifs de sécurité, choix et mise en œuvre des mesures, homologation de sécurité, suivi opérationnel", correct: true },
      { text: "Cartographie, chiffrement, certification, audit, sanction", correct: false },
      { text: "Déclaration à l'ANSSI, agrément, inspection, labellisation, renouvellement", correct: false },
    ],
    explanation:
      "Le chapitre 1 du RGS v2.0 impose une démarche en cinq étapes prévue par le décret RGS : 1. analyse des risques ; 2. définition des objectifs de sécurité ; 3. choix et mise en œuvre des mesures de protection et de défense ; 4. homologation de sécurité ; 5. suivi opérationnel de la sécurité du SI.",
    exigence: { level: "obligatoire", note: "démarche imposée par le décret RGS (RGS v2.0, chap. 1)" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-homologation-facultative",
    refId: "rgs",
    themeId: "demarche",
    question: "L'homologation de sécurité prévue par le RGS est-elle facultative ?",
    options: [
      { text: "Non : les SI entrant dans le champ de l'ordonnance de 2005 doivent être homologués avant leur mise en service opérationnelle", correct: true },
      { text: "Oui : c'est une simple bonne pratique recommandée par l'ANSSI", correct: false },
      { text: "Oui, sauf pour les ministères régaliens", correct: false },
    ],
    explanation:
      "RGS v2.0, §2.4 : « Les systèmes d'information qui entrent dans le champ de l'ordonnance du 8 décembre 2005 doivent faire l'objet, avant leur mise en service opérationnelle, d'une décision d'homologation de sécurité. » C'est le point central de la démarche ; seule la revue périodique des SI homologués est formulée comme recommandée.",
    exigence: { level: "obligatoire", note: "art. 5 du décret RGS ; avant la mise en service opérationnelle" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-homologation-teleservice",
    refId: "rgs",
    themeId: "demarche",
    question: "Que devient la décision d'homologation lorsqu'elle concerne un téléservice ?",
    options: [
      { text: "Elle est rendue accessible aux usagers", correct: true },
      { text: "Elle est classifiée Diffusion Restreinte", correct: false },
      { text: "Elle est transmise au Parlement", correct: false },
    ],
    explanation:
      "RGS v2.0, §2.4 : la décision d'homologation atteste que le SI est protégé conformément aux objectifs de sécurité fixés et que les risques résiduels sont acceptés ; lorsqu'elle concerne un téléservice, « cette décision est rendue accessible aux usagers ».",
    exigence: { level: "obligatoire", note: "RGS v2.0, §2.4" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-analyse-methode",
    refId: "rgs",
    themeId: "demarche",
    question: "Le RGS impose-t-il la norme ISO 27005 et la méthode EBIOS pour l'analyse des risques ?",
    options: [
      { text: "Non : l'analyse des risques est imposée, mais ISO 27005 et EBIOS sont seulement recommandées comme appui", correct: true },
      { text: "Oui : seule la méthode EBIOS est admise pour la conformité RGS", correct: false },
      { text: "Non : l'analyse des risques elle-même est facultative", correct: false },
    ],
    explanation:
      "L'analyse des risques est la première étape imposée par le décret RGS (art. 3 al. 1). En revanche, le texte dit seulement : « Il est recommandé de s'appuyer sur la norme ISO 27005 » (§2.1), dont la mise en œuvre peut être facilitée par la méthode EBIOS ; les autorités administratives « peuvent s'appuyer » sur le guide EBIOS 2010 pour les objectifs de sécurité (§2.2).",
    exigence: { level: "recommande", note: "analyse de risques obligatoire ; ISO 27005 / EBIOS recommandées" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-objectifs",
    refId: "rgs",
    themeId: "demarche",
    question: "Quels domaines les objectifs de sécurité du RGS couvrent-ils ?",
    options: [
      { text: "Disponibilité, intégrité et confidentialité, auxquels peuvent s'ajouter l'authentification et la traçabilité", correct: true },
      { text: "Uniquement la confidentialité des données personnelles", correct: false },
      { text: "Uniquement la disponibilité du téléservice", correct: false },
    ],
    explanation:
      "RGS v2.0, §2.2 : aux trois grands domaines traditionnels (disponibilité et intégrité des données et du système, confidentialité des données et des éléments critiques du système) peuvent s'ajouter deux domaines complémentaires, l'authentification et la traçabilité. Les objectifs doivent être exprimés en termes de protection ET de défense.",
    exigence: { level: "obligatoire", note: "l'autorité administrative doit énoncer ses objectifs de sécurité (décret RGS, art. 3 al. 2)" },
    sources: ["rgs-corps"],
  },

  // ---- fonctions ----
  {
    id: "q-rgs-techno",
    refId: "rgs",
    themeId: "fonctions",
    question: "Le RGS impose-t-il des technologies ou des produits particuliers ?",
    options: [
      { text: "Non : il n'impose aucune technologie particulière et laisse le choix des mesures, mais fixe des exigences par fonction de sécurité", correct: true },
      { text: "Oui : il impose une liste fermée de produits agréés", correct: false },
      { text: "Oui : il impose les solutions développées par l'ANSSI", correct: false },
    ],
    explanation:
      "RGS v2.0, chap. 3 : « Le RGS n'impose aucune technologie particulière et laisse aux autorités administratives le choix des mesures à mettre en œuvre. Il fixe cependant des exigences relatives à certaines fonctions de sécurité, notamment la certification, l'horodatage et l'audit. » Le Premier ministre recommande l'usage de produits qualifiés quand ils existent.",
    exigence: { level: "recommande", note: "choix des mesures libre ; produits qualifiés recommandés" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-fonctions-liste",
    refId: "rgs",
    themeId: "fonctions",
    question: "Quelles fonctions de sécurité sont encadrées par le RGS ? (plusieurs réponses)",
    options: [
      { text: "Authentification (de personne et de serveur)", correct: true },
      { text: "Signature électronique et cachet", correct: true },
      { text: "Confidentialité", correct: true },
      { text: "Horodatage électronique", correct: true },
      { text: "Vidéoprotection des locaux", correct: false },
    ],
    explanation:
      "Le chapitre 3 du RGS couvre l'authentification, la signature électronique, la confidentialité et l'horodatage ; l'annexe A1 liste les fonctions à base de certificats : signature électronique, authentification de personne, double usage, confidentialité, cachet, authentification de serveur. La vidéoprotection n'en fait pas partie.",
    exigence: { level: "obligatoire", note: "règles applicables dès que la fonction est mise en œuvre (chap. 3)" },
    sources: ["rgs-corps", "rgs-a1"],
  },
  {
    id: "q-rgs-niveaux-confusion",
    refId: "rgs",
    themeId: "fonctions",
    question: "Que désignent les niveaux (*), (**) et (***) du RGS ?",
    options: [
      { text: "Les niveaux de sécurité, aux exigences croissantes, des fonctions de sécurité (authentification, signature, cachet, confidentialité)", correct: true },
      { text: "Les niveaux de qualification des produits de sécurité (élémentaire, standard, renforcée)", correct: false },
      { text: "Une note de maturité SSI attribuée par l'ANSSI à chaque administration", correct: false },
    ],
    explanation:
      "Les étoiles sont les trois niveaux de sécurité « aux exigences croissantes : (\\*), (\\*\\*) et (\\*\\*\\*) » des fonctions de sécurité, choisis d'après l'analyse de risques (chap. 2 et 3). La qualification des produits suit une autre échelle : élémentaire, standard, renforcée (§5.1). Ne pas confondre les deux.",
    exigence: { level: "obligatoire", note: "niveau choisi d'après l'analyse de risques ; règles du niveau retenu obligatoires" },
    sources: ["rgs-corps", "rgs-a1"],
  },
  {
    id: "q-rgs-horodatage-niveau",
    refId: "rgs",
    themeId: "fonctions",
    question: "L'horodatage électronique se décline-t-il, comme la signature, en trois niveaux (*), (**) et (***) ?",
    options: [
      { text: "Non : la politique d'horodatage type (annexe A5) ne distingue qu'un niveau unique de sécurité", correct: true },
      { text: "Oui : trois niveaux d'étoiles comme pour toutes les fonctions", correct: false },
    ],
    explanation:
      "RGS v2.0, §3.2 b : l'annexe [RGS_A5] « ne distingue qu'un niveau unique de sécurité, auquel les autorités administratives doivent se conformer dès lors qu'elles souhaitent mettre en œuvre la fonction d'horodatage électronique au sein de leur système d'information ». Les trois étoiles valent pour les fonctions à base de certificats.",
    exigence: { level: "obligatoire", note: "niveau unique, obligatoire dès que la fonction d'horodatage est mise en œuvre" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-cachet",
    refId: "rgs",
    themeId: "fonctions",
    question: "Qu'est-ce que le « cachet » au sens du RGS ?",
    options: [
      { text: "L'équivalent, pour une machine (service applicatif), de la signature électronique d'une personne", correct: true },
      { text: "Le tampon physique apposé sur les courriers d'une administration", correct: false },
      { text: "Un certificat de chiffrement réservé aux échanges classifiés", correct: false },
    ],
    explanation:
      "RGS v2.0, §3.2 a.2 : « Cette fonction de cachet est, pour une machine, l'équivalent de la fonction signature pour une personne. » L'annexe A1 (§II.4) précise que le terme cachet est utilisé par un service applicatif, la signature électronique étant un terme consacré réservé à une personne physique.",
    exigence: { level: "obligatoire", note: "règles du chap. 3 applicables à la fonction cachet dès sa mise en œuvre" },
    sources: ["rgs-corps", "rgs-a1"],
  },
  {
    id: "q-rgs-presomption",
    refId: "rgs",
    themeId: "fonctions",
    question: "A quel niveau de sécurité un procédé de signature électronique bénéficie-t-il de la présomption de fiabilité (art. 1316-4 du code civil, rédaction de l'époque) ?",
    options: [
      { text: "Au niveau (***)", correct: true },
      { text: "Au niveau (*)", correct: false },
      { text: "A tous les niveaux, dès que le certificat est délivré par un PSCE", correct: false },
    ],
    explanation:
      "Annexe A1, §II.1 : « La mise en œuvre d'un procédé de signature électronique respectant les exigences définies pour le niveau \\*\\*\\* permet de bénéficier de la présomption de fiabilité du procédé de signature telle que prévue dans l'article 1316-4 du code civil. »",
    exigence: { level: "obligatoire", note: "exigences du niveau (***) requises pour la présomption de fiabilité" },
    sources: ["rgs-a1", "rgs-corps"],
  },

  // ---- produits-prestataires ----
  {
    id: "q-rgs-qualif-recours",
    refId: "rgs",
    themeId: "produits-prestataires",
    question: "Une autorité administrative peut-elle recourir à des produits ou prestataires non qualifiés pour les besoins visés par le RGS ?",
    options: [
      { text: "Oui, mais à défaut de qualification elle doit s'assurer de leur conformité au RGS, l'attester formellement et adresser l'attestation à l'ANSSI", correct: true },
      { text: "Non : seuls les produits et prestataires qualifiés sont admis, sans aucune alternative", correct: false },
      { text: "Oui, librement : la qualification est purement décorative", correct: false },
    ],
    explanation:
      "Art. 4 du décret RGS (cité au chap. 5 du RGS v2.0) : les autorités administratives recourent à des produits et prestataires qualifiés « ou, à défaut, s'assurent de la conformité au RGS » de ceux qu'elles choisissent ; dans ce cas elles en attestent formellement et adressent ces attestations à l'ANSSI. C'est une obligation alternative, pas une simple option.",
    exigence: { level: "obligatoire", note: "obligation alternative de l'art. 4 du décret RGS" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-qualif-niveaux",
    refId: "rgs",
    themeId: "produits-prestataires",
    question: "Quels sont les trois niveaux de qualification des produits de sécurité ?",
    options: [
      { text: "Elémentaire, standard, renforcée", correct: true },
      { text: "Une étoile (*), deux étoiles (**), trois étoiles (***)", correct: false },
      { text: "Bronze, argent, or", correct: false },
    ],
    explanation:
      "RGS v2.0, §5.1 : « La qualification de produits de sécurité prévoit trois niveaux de qualification : qualification élémentaire [...] qualification standard [...] qualification renforcée ». Le niveau élémentaire est accordé sur la base d'une CSPN, les niveaux standard et renforcé sur la base d'une certification Critères communs. Les étoiles, elles, qualifient les fonctions de sécurité, pas les produits.",
    exigence: { level: "obligatoire", note: "procédures [QE], [QS], [QR] ; attestations délivrées par l'ANSSI" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-psco-categories",
    refId: "rgs",
    themeId: "produits-prestataires",
    question: "Quelles catégories de prestataires de services de confiance (PSCO) le RGS v2.0 vise-t-il ? (plusieurs réponses)",
    options: [
      { text: "Les prestataires de services de certification électronique (PSCE)", correct: true },
      { text: "Les prestataires de services d'horodatage électronique (PSHE)", correct: true },
      { text: "Les prestataires d'audit de la sécurité des systèmes d'information", correct: true },
      { text: "Les hébergeurs de données de santé", correct: false },
    ],
    explanation:
      "RGS v2.0, §5.2 : les catégories de PSCO visées sont les PSCE (annexes A2 et A3), les PSHE (annexe A5) et les prestataires d'audit de la SSI (annexe C, qui couvre audit organisationnel, de code source, de configuration et d'architecture, ainsi que les tests d'intrusion). La qualification des prestataires d'audit est une nouveauté de la v2.0.",
    exigence: { level: "obligatoire", note: "référentiels d'exigences en annexes A et C du RGS" },
    sources: ["rgs-corps"],
  },
  {
    id: "q-rgs-psco-duree",
    refId: "rgs",
    themeId: "produits-prestataires",
    question: "Pour quelle durée la qualification d'un PSCO est-elle accordée, et par qui ?",
    options: [
      { text: "Trois ans, par un organisme de qualification accrédité par le COFRAC et habilité par l'ANSSI", correct: true },
      { text: "A vie, par le Premier ministre", correct: false },
      { text: "Un an, par le ministère de l'intérieur", correct: false },
    ],
    explanation:
      "RGS v2.0, §5.2 : « Dans tous les cas, la qualification est accordée pour une durée de trois ans. » L'attestation est délivrée par un organisme de qualification, accrédité par le COFRAC et habilité par l'ANSSI ; lorsque le PSCO est une administration de l'Etat, l'ANSSI peut procéder elle-même à l'évaluation et à la qualification.",
    exigence: { level: "obligatoire", note: "RGS v2.0, §5.2 ; une qualification par type de prestation" },
    sources: ["rgs-corps"],
  },
];
