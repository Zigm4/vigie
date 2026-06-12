// Cartes de revision RGS v2.0 (Referentiel general de securite).
//
// Etat verifie le 2026-06-12 sur le document officiel ANSSI/SGMAP (corps du
// texte du RGS v2.0, publie par arrete du Premier ministre du 13 juin 2014,
// et annexe A1 version 3.0 du 27 fevrier 2014).
//
// Sourcage : toutes les fiches sont en VERBATIM (citations « » recopiees au mot
// pres depuis les textes officiels, ressources/txt/rgs-v2-corps-du-texte.txt et
// ressources/txt/rgs-v2-annexe-a1.txt), avec leur reference de chapitre/section.
// Les coquilles du document original sont conservees et signalees par [sic]
// (ex. "Lorqu'elle", "elle attestent"). Seule exception : la fiche de definition
// du teleservice (rgs-teleservice), dont la definition vient de l'ordonnance
// n° 2005-1516 (art. 1er, verifie sur Legifrance) et non des deux documents
// sources : elle porte detailParaphrase + detailNote.
//
// Point pedagogique central du referentiel : le RGS s'impose aux AUTORITES
// ADMINISTRATIVES (notion bien plus large que le seul Etat) et l'HOMOLOGATION
// de securite des SI entrant dans le champ de l'ordonnance est OBLIGATOIRE
// avant la mise en service operationnelle.

import type { ReviewCard } from "../types.ts";

export const rgsCards: ReviewCard[] = [
  // --------------------------------------------------------------------------
  // Theme : socle (qu'est-ce que le RGS, base legale, champ d'application)
  // --------------------------------------------------------------------------
  {
    id: "rgs-quoi",
    refId: "rgs",
    themeId: "socle",
    title: "Qu'est-ce que le RGS et sur quoi il repose juridiquement",
    short:
      "Le RGS (Référentiel général de sécurité) encadre la sécurité des échanges électroniques entre les usagers et les autorités administratives, et entre autorités administratives. Sa version 2.0 est approuvée par arrêté du Premier ministre du 13 juin 2014. Il n'est pas un simple guide : il est pris en application du décret n° 2010-112 du 2 février 2010, lui-même pris pour l'application de l'ordonnance n° 2005-1516 du 8 décembre 2005.",
    elementDeLangage:
      "« Le RGS n'est pas un guide de bonnes pratiques parmi d'autres : c'est un référentiel réglementaire, fondé sur l'ordonnance de 2005 et son décret de 2010, approuvé par arrêté du Premier ministre. »",
    detail:
      "RGS v2.0, avant-propos (page 2) : « Le présent référentiel est pris en application du décret n° 2010-112 du 2 février 2010, lui-même pris pour l'application des articles 9, 10 et 12 de l'ordonnance n° 2005-1516 du 8 décembre 2005 relative aux échanges électroniques entre les usagers et les autorités administratives et entre les autorités administratives. Il est publié par l'arrêté du 13 juin 2014 portant approbation du référentiel général de sécurité et précisant les modalités de mise en œuvre de la procédure de validation des certificats électroniques. » Même page : « Ce référentiel remplace la première version du référentiel général de sécurité publiée par arrêté du Premier ministre le 6 mai 2010. »",
    exigence: {
      level: "obligatoire",
      note: "référentiel pris en application du décret n° 2010-112 (ordonnance n° 2005-1516) ; v2.0 approuvée par arrêté du 13 juin 2014",
    },
    sources: ["rgs-corps", "ordonnance-2005"],
    tags: ["définition", "cadre", "base légale"],
  },
  {
    id: "rgs-a-qui",
    refId: "rgs",
    themeId: "socle",
    title: "A qui s'impose le RGS : les autorités administratives, pas seulement l'Etat",
    short:
      "Idée reçue fréquente : le RGS ne concernerait que les services de l'Etat. Faux : il s'applique aux systèmes d'information des autorités administratives, notion qui, au sens de l'article 1er de l'ordonnance n° 2005-1516, couvre les administrations de l'Etat mais aussi les collectivités territoriales, les établissements publics à caractère administratif et les organismes gérant des régimes de protection sociale. Pour tous les autres organismes, il n'est qu'un recueil de bonnes pratiques.",
    elementDeLangage:
      "« Le RGS ne vise pas que l'Etat : une mairie ou un établissement public administratif est une autorité administrative au sens de l'ordonnance de 2005, donc dans le champ du RGS. Pour le secteur privé, c'est un recueil de bonnes pratiques, pas une obligation. »",
    detail:
      "RGS v2.0, chapitre 1 : « Le référentiel général de sécurité (RGS) vise à renforcer la confiance des usagers dans les services électroniques proposés par les autorités administratives, notamment lorsque ceux-ci traitent des données personnelles. Il s'applique aux systèmes d'information mis en œuvre par les autorités administratives dans leurs relations entre elles et avec les usagers. Il peut aussi être considéré comme un recueil de bonnes pratiques pour tous les autres organismes. »",
    exigence: {
      level: "obligatoire",
      note: "pour les autorités administratives (au sens de l'art. 1er de l'ordonnance n° 2005-1516) ; simple recueil de bonnes pratiques pour les autres organismes",
    },
    sources: ["rgs-corps", "ordonnance-2005"],
    tags: ["champ d'application", "idée reçue"],
  },
  {
    id: "rgs-teleservice",
    detailParaphrase: true,
    detailNote:
      "La définition du téléservice ne figure pas dans le corps du texte du RGS : elle vient de l'article 1er de l'ordonnance n° 2005-1516 du 8 décembre 2005 (vérifiée sur Légifrance, source citée ci-dessous). Se reporter à l'ordonnance pour le libellé officiel en vigueur.",
    refId: "rgs",
    themeId: "socle",
    title: "Le téléservice : la cible concrète du RGS",
    short:
      "Un téléservice est, au sens de l'ordonnance n° 2005-1516 (art. 1er), tout système d'information permettant aux usagers de procéder par voie électronique à des démarches ou formalités administratives : portail de demande en ligne, télédéclaration, prise de rendez-vous dématérialisée, etc. C'est l'objet typique auquel s'applique la démarche RGS, et son homologation doit être rendue accessible aux usagers.",
    elementDeLangage:
      "« Dès qu'une administration ouvre une démarche en ligne aux usagers, c'est un téléservice au sens de l'ordonnance de 2005 : il entre dans la démarche RGS et sa décision d'homologation doit être accessible aux usagers. »",
    detail:
      "L'ordonnance n° 2005-1516 du 8 décembre 2005 (art. 1er) définit le téléservice comme tout système d'information permettant aux usagers de procéder par voie électronique à des démarches ou formalités administratives. Le corps du texte du RGS v2.0 mobilise cette notion au chapitre 2 (§2.4) : lorsque la décision d'homologation concerne un téléservice, elle est rendue accessible aux usagers (voir la fiche sur l'homologation).",
    exigence: {
      level: "obligatoire",
      note: "les téléservices des autorités administratives entrent dans le champ de l'ordonnance n° 2005-1516, donc du RGS",
    },
    sources: ["ordonnance-2005", "rgs-corps"],
    tags: ["définition", "téléservice"],
  },

  // --------------------------------------------------------------------------
  // Theme : demarche (les cinq etapes, analyse de risques, homologation)
  // --------------------------------------------------------------------------
  {
    id: "rgs-demarche",
    refId: "rgs",
    themeId: "demarche",
    title: "La démarche de mise en conformité : cinq étapes imposées",
    short:
      "Le RGS impose aux autorités administratives une démarche en cinq étapes, prévue par le décret RGS : analyse des risques, définition des objectifs de sécurité, choix et mise en œuvre des mesures, homologation de sécurité, puis suivi opérationnel. La sécurité ne s'arrête donc pas à la mise en service : le suivi quotidien (journaux, audits, veille, plans de continuité) fait partie de la démarche.",
    elementDeLangage:
      "« La conformité RGS, c'est une démarche en cinq étapes : analyse de risques, objectifs de sécurité, mesures, homologation, et un suivi opérationnel qui ne s'arrête jamais. »",
    detail:
      "RGS v2.0, chapitre 1 : « Afin de mettre leur système d'information en conformité avec le RGS, les autorités administratives doivent adopter une démarche en cinq étapes, prévue par le décret n° 2010-112 du 2 février 2010 (décret RGS) : 1. réalisation d'une analyse des risques (art. 3 al. 1) ; 2. définition des objectifs de sécurité (art. 3 al. 2) ; 3. choix et mise en œuvre des mesures appropriées de protection et de défense du SI (art. 3 al. 3) ; 4. homologation de sécurité du système d'information (art. 5) ; 5. suivi opérationnel de la sécurité du SI. » Sur la cinquième étape, §2.5 : « Les mesures de protection d'un système d'information doivent être accompagnées d'un suivi opérationnel quotidien ainsi que de mesures de surveillance et de détection, afin de réagir au plus vite aux incidents de sécurité et de les traiter au mieux. »",
    exigence: { level: "obligatoire", note: "démarche imposée par le décret RGS (chap. 1 du RGS v2.0)" },
    sources: ["rgs-corps"],
    tags: ["démarche", "méthode"],
  },
  {
    id: "rgs-analyse-risques",
    refId: "rgs",
    themeId: "demarche",
    title: "Analyse des risques et objectifs de sécurité : le point de départ",
    short:
      "Tout part de l'analyse des risques : elle précise les besoins de sécurité selon la menace et les enjeux, et c'est elle qui décide des usages et des niveaux (*, ** ou ***) quand le SI intègre certificats ou horodatage. Vient ensuite l'énoncé des objectifs de sécurité : disponibilité, intégrité, confidentialité, auxquels peuvent s'ajouter authentification et traçabilité. ISO 27005 et EBIOS sont recommandés, pas imposés.",
    elementDeLangage:
      "« Le RGS ne donne pas une liste de mesures à cocher : il impose de partir d'une analyse de risques, puis d'en déduire des objectifs et des niveaux de sécurité. ISO 27005 et EBIOS sont recommandés comme outillage, pas obligatoires. »",
    detail:
      "RGS v2.0, §2.1 : « L'analyse de risques précise les besoins de sécurité du système d'information en fonction de la menace et des enjeux. » ; « Lorsque le système d'information intègre des certificats électroniques ou de l'horodatage électronique, l'analyse des risques doit permettre de décider des usages (signature, authentification, confidentialité, etc.) et des niveaux de sécurité (\\*, \\*\\* ou \\*\\*\\*) qui seront mis en œuvre. » ; « Il est recommandé de s'appuyer sur la norme ISO 27005, qui fixe un cadre théorique de la gestion des risques. » Puis §2.2 : « Une fois les risques appréciés, l'autorité administrative doit énoncer les objectifs de sécurité à satisfaire. Aux trois grands domaines traditionnels (disponibilité et intégrité des données et du système, confidentialité des données et des éléments critiques du système) peuvent s'ajouter deux domaines complémentaires : l'authentification, afin de garantir que la personne identifiée est effectivement celle qu'elle prétend être ; la traçabilité, afin de pouvoir associer les actions sur les données et les processus aux personnes effectivement connectées au système et ainsi permettre de déceler toute action ou tentative d'action illégitime. » ; « Les autorités administratives peuvent s'appuyer sur le guide méthodologique EBIOS 2010, afin de formuler précisément ces objectifs de sécurité. »",
    exigence: {
      level: "obligatoire",
      note: "étapes imposées (décret RGS, art. 3) ; le recours à ISO 27005 / EBIOS est seulement recommandé",
    },
    sources: ["rgs-corps"],
    tags: ["démarche", "analyse de risques", "objectifs de sécurité"],
  },
  {
    id: "rgs-homologation",
    refId: "rgs",
    themeId: "demarche",
    title: "L'homologation de sécurité est obligatoire avant la mise en service",
    short:
      "C'est le point central, et une idée reçue tenace : l'homologation RGS n'est pas facultative. Tout SI entrant dans le champ de l'ordonnance de 2005 doit faire l'objet d'une décision d'homologation AVANT sa mise en service opérationnelle. Elle atteste, au nom de l'autorité administrative, que le SI est protégé conformément aux objectifs fixés et que les risques résiduels sont acceptés. Pour un téléservice, la décision est rendue accessible aux usagers. Seule la revue périodique est, elle, recommandée.",
    elementDeLangage:
      "« Pas d'homologation, pas de mise en service : pour un SI dans le champ de l'ordonnance de 2005, la décision d'homologation est obligatoire et, pour un téléservice, elle doit être accessible aux usagers. »",
    detail:
      "RGS v2.0, §2.4 : « Les systèmes d'information qui entrent dans le champ de l'ordonnance du 8 décembre 2005 doivent faire l'objet, avant leur mise en service opérationnelle, d'une décision d'homologation de sécurité. » ; « Egalement dénommée \"attestation formelle\" (art. 5, al. 1 du décret RGS), elle est prononcée par une autorité d'homologation, désignée par la ou les autorités administratives [...] » ; « La décision d'homologation atteste, au nom de l'autorité administrative, que le système d'information est protégé conformément aux objectifs de sécurité fixés et que les risques résiduels sont acceptés. La décision d'homologation s'appuie sur un dossier d'homologation. Lorqu'elle [sic] concerne un téléservice, cette décision est rendue accessible aux usagers. » ; « Il est recommandé que les systèmes d'information homologués fassent l'objet d'une revue périodique. »",
    exigence: {
      level: "obligatoire",
      note: "décision d'homologation exigée avant mise en service (art. 5 du décret RGS) ; la revue périodique est recommandée",
    },
    sources: ["rgs-corps"],
    tags: ["homologation", "idée reçue", "téléservice"],
  },

  // --------------------------------------------------------------------------
  // Theme : fonctions (fonctions de securite, niveaux *, **, ***)
  // --------------------------------------------------------------------------
  {
    id: "rgs-pas-de-techno",
    refId: "rgs",
    themeId: "fonctions",
    title: "Le RGS n'impose aucune technologie particulière",
    short:
      "Le RGS ne dicte pas de solution : il laisse aux autorités administratives le choix des mesures, et ses règles techniques portent uniquement sur la sécurisation des échanges électroniques. En revanche, dès qu'une fonction de sécurité couverte (certification, horodatage, audit) est mise en œuvre, des exigences s'appliquent. Le Premier ministre recommande l'usage de produits qualifiés quand ils existent.",
    elementDeLangage:
      "« Le RGS ne dit pas quel produit acheter : il fixe des exigences par fonction de sécurité et par niveau, à charge pour l'administration de choisir ses moyens, de préférence qualifiés. »",
    detail:
      "RGS v2.0, chapitre 3 : « Les règles techniques imposées par le RGS portent uniquement sur la sécurisation des infrastructures utilisées pour procéder aux échanges électroniques entre les autorités administratives et les usagers ainsi qu'entre les autorités administratives elles-mêmes. » ; « Le RGS n'impose aucune technologie particulière et laisse aux autorités administratives le choix des mesures à mettre en œuvre. Il fixe cependant des exigences relatives à certaines fonctions de sécurité, notamment la certification, l'horodatage et l'audit. » ; « Dans tous les cas, le Premier ministre recommande l'usage de produits qualifiés quand ils existent. »",
    exigence: {
      level: "recommande",
      note: "le choix des mesures est libre ; l'usage de produits qualifiés est recommandé par le Premier ministre (chap. 3)",
    },
    sources: ["rgs-corps"],
    tags: ["principe", "idée reçue"],
  },
  {
    id: "rgs-fonctions",
    refId: "rgs",
    themeId: "fonctions",
    title: "Les fonctions de sécurité couvertes par le RGS",
    short:
      "Le RGS encadre des fonctions de sécurité précises : authentification (de personne et de serveur), signature électronique, cachet, confidentialité et horodatage. Les fonctions à base de certificats électroniques sont détaillées par l'annexe A1 ; l'horodatage repose sur des contremarques de temps. Les règles ne s'appliquent que si l'autorité administrative choisit de mettre en œuvre la fonction, mais alors elles s'imposent.",
    elementDeLangage:
      "« Le RGS raisonne par fonction de sécurité : authentification, signature, cachet, confidentialité, horodatage. On n'est pas obligé de les mettre en œuvre, mais si on le fait, on applique les règles du niveau choisi. »",
    detail:
      "RGS v2.0, chapitre 3 : « Lorsqu'elles choisissent de mettre en œuvre des fonctions de sécurité traitées dans le présent chapitre, les autorités administratives choisissent le niveau de sécurité adapté à leur besoin et appliquent les règles correspondantes décrites dans ce référentiel. » ; §3.2 : « Les règles de sécurité à respecter pour les fonctions de sécurité d'authentification, de signature électronique, de confidentialité et d'horodatage, reposent sur l'emploi de contremarques de temps dans le cas de l'horodatage électronique et de certificats électroniques pour toutes les autres fonctions. » Annexe A1 (v3.0, §I) : « Ces fonctions de sécurité sont les suivantes : signature électronique ; authentification de personne ; double usage signature électronique et authentification ; confidentialité ; cachet ; authentification de serveur. » Sur l'horodatage, RGS v2.0, §3.2 b : « Une fonction d'horodatage permet d'attester qu'une donnée sous forme électronique existe à un instant donné. »",
    exigence: {
      level: "obligatoire",
      note: "règles obligatoires dès lors que l'autorité administrative choisit de mettre en œuvre la fonction (chap. 3)",
    },
    sources: ["rgs-corps", "rgs-a1"],
    tags: ["fonctions de sécurité"],
  },
  {
    id: "rgs-niveaux",
    refId: "rgs",
    themeId: "fonctions",
    title: "Les niveaux de sécurité : une étoile (*) à trois étoiles (***)",
    short:
      "Les fonctions de sécurité du RGS se déclinent en trois niveaux aux exigences croissantes : (*), (**) et (***), choisis d'après l'analyse de risques. Attention aux pièges : le certificat à double usage (authentification + signature) n'existe qu'aux niveaux (*) et (**), et l'horodatage ne connaît qu'un niveau unique. Ne pas confondre ces étoiles avec les niveaux de qualification des produits (élémentaire, standard, renforcé).",
    elementDeLangage:
      "« Les étoiles du RGS, ce sont les niveaux d'exigence des fonctions de sécurité, du simple (*) au renforcé (***). L'horodatage, lui, n'a qu'un niveau unique. Et ce sont les fonctions qui ont des étoiles, pas la qualification des produits. »",
    detail:
      "RGS v2.0, §3.2 a.2 : « La mise en œuvre par une autorité administrative des fonctions de sécurité \"Signature électronique\" ou \"cachet\" peut se faire selon trois niveaux de sécurité aux exigences croissantes : (\\*), (\\*\\*) et (\\*\\*\\*). » §3.2 a : le RGS offre la possibilité de disposer « des certificats mono-usage à usage d'authentification de personne physique ou de serveur, de signature, de cachet et de confidentialité pour des niveaux une étoile (\\*), deux étoiles (\\*\\*) et trois étoiles (\\*\\*\\*) » et « d'un certificat électronique unique, dit \"à double usage\" [...] Ce certificat ne peut être prévu qu'aux niveaux (\\*) et (\\*\\*) ». Pour l'horodatage, §3.2 b (annexe [RGS_A5]) : « Cette annexe ne distingue qu'un niveau unique de sécurité, auquel les autorités administratives doivent se conformer dès lors qu'elles souhaitent mettre en œuvre la fonction d'horodatage électronique au sein de leur système d'information. »",
    exigence: {
      level: "obligatoire",
      note: "niveau choisi par l'autorité administrative d'après l'analyse de risques ; règles du niveau retenu obligatoires",
    },
    sources: ["rgs-corps", "rgs-a1"],
    tags: ["niveaux", "idée reçue"],
  },
  {
    id: "rgs-signature-cachet",
    refId: "rgs",
    themeId: "fonctions",
    title: "Signature électronique, cachet et présomption de fiabilité",
    short:
      "La signature électronique garantit l'identité du signataire, l'intégrité du document et le lien entre les deux ; elle est réservée aux personnes physiques. Le cachet en est l'équivalent pour une machine (service applicatif). Pour la signature de leurs actes administratifs, les autorités administratives doivent respecter le RGS (art. 8 de l'ordonnance). Au niveau (***), le procédé de signature bénéficie de la présomption de fiabilité de l'article 1316-4 du code civil (dans sa rédaction de l'époque).",
    elementDeLangage:
      "« Une personne signe, une machine cachette : c'est la même mécanique de confiance. Et une signature de niveau trois étoiles est présumée fiable au sens du code civil. »",
    detail:
      "RGS v2.0, §3.2 a.2 : « La signature électronique d'une personne permet de garantir l'identité du signataire, l'intégrité du document signé et le lien entre le document signé et la signature. » ; « Cette fonction de \"cachet\" est, pour une machine, l'équivalent de la fonction signature pour une personne. » ; « Conformément à l'article 8 de l'ordonnance du 8 décembre 2005, les autorités administratives doivent respecter les exigences du RGS lorsqu'elles mettent en œuvre, pour la signature de leurs actes administratifs, des systèmes d'information utilisant des fonctions de sécurité décrites dans le RGS (certificats électroniques, audit, etc.). » Annexe A1 (§II.4) : « Le terme \"cachet\" est utilisé par un service applicatif, se différenciant ainsi de la \"signature électronique\" qui est un terme consacré réservé à une personne physique. » Annexe A1 (§II.1) : « La mise en œuvre d'un procédé de signature électronique respectant les exigences définies pour le niveau \\*\\*\\* permet de bénéficier de la présomption de fiabilité du procédé de signature telle que prévue dans l'article 1316-4 du code civil. »",
    exigence: {
      level: "obligatoire",
      note: "exigences du RGS imposées pour la signature des actes administratifs (art. 8 de l'ordonnance n° 2005-1516)",
    },
    sources: ["rgs-corps", "rgs-a1", "ordonnance-2005"],
    tags: ["signature", "cachet", "fonctions de sécurité"],
  },

  // --------------------------------------------------------------------------
  // Theme : produits-prestataires (qualification, PSCO, annexes A/B/C)
  // --------------------------------------------------------------------------
  {
    id: "rgs-qualification-label",
    refId: "rgs",
    themeId: "produits-prestataires",
    title: "La qualification : un label, et une obligation alternative pour les administrations",
    short:
      "La qualification est un label créé par l'ordonnance de 2005 : elle atteste de la confiance que l'on peut accorder à des produits de sécurité et à des prestataires de services de confiance (PSCO), et de leur conformité au RGS. L'article 4 du décret RGS pose une obligation alternative : recourir à des produits et prestataires qualifiés OU, à défaut, s'assurer soi-même de leur conformité au RGS, l'attester formellement et adresser l'attestation à l'ANSSI.",
    elementDeLangage:
      "« Sur les produits et prestataires, l'administration a deux voies : du qualifié, ou alors elle atteste elle-même formellement de la conformité au RGS et l'envoie à l'ANSSI. Ce n'est pas optionnel. »",
    detail:
      "RGS v2.0, §7.9 : « La qualification est un label, créé par l'ordonnance du 8 décembre 2005, qui permet d'attester de la confiance que l'on peut accorder à des produits de sécurité et à des prestataires de services de confiance (PSCO), ainsi que de leur conformité aux règles du RGS qui leurs [sic] sont applicables. » Chapitre 5 : « Conformément à l'article 4 du décret RGS, les autorités administratives qui décident de recourir à des produits ou prestations de services visés par le RGS recourrent [sic] à des produits de sécurité et à des prestataires de service de confiance qualifiés ou, à défaut, s'assurent de la conformité au RGS des produits de sécurité et services de confiance qu'elles choisissent. » ; « Dans ce cas, elle [sic] attestent formellement de la conformité au RGS de ces produits de sécurité et services de confiance. Elles adressent ces attestations à l'ANSSI. »",
    exigence: {
      level: "obligatoire",
      note: "obligation alternative de l'art. 4 du décret RGS : qualifié, ou conformité attestée formellement auprès de l'ANSSI",
    },
    sources: ["rgs-corps", "ordonnance-2005"],
    tags: ["qualification", "produits", "prestataires"],
  },
  {
    id: "rgs-qualification-produits",
    refId: "rgs",
    themeId: "produits-prestataires",
    title: "Qualification des produits de sécurité : élémentaire, standard, renforcée",
    short:
      "La qualification des produits de sécurité compte trois niveaux : élémentaire, standard et renforcée (à ne pas confondre avec les étoiles des fonctions de sécurité). C'est l'ANSSI qui instruit les demandes et délivre les attestations, sur la base d'une certification préalable : une CSPN pour le niveau élémentaire, une certification Critères communs pour les niveaux standard et renforcé, avec des contrôles complémentaires de l'ANSSI (annexes B du RGS pour la cryptographie).",
    elementDeLangage:
      "« Trois niveaux de qualification pour les produits : élémentaire sur la base d'une CSPN, standard et renforcé sur la base des Critères communs, le tout délivré par l'ANSSI. »",
    detail:
      "RGS v2.0, §5.1 : « La qualification de produits de sécurité prévoit trois niveaux de qualification : qualification élémentaire (décrite dans le document [QE]) ; qualification standard (décrite dans le document [QS]) ; qualification renforcée (décrite dans le document [QR]). » ; « L'ANSSI instruit les demandes et délivre les attestations de qualification. La procédure de qualification repose sur une certification préalable, dans les formes prévues par le décret n° 2002-535 du 18 avril 2002 et par l'instruction n° 1414/ANSSI/SR du 30 mai 2011 relative à la certification de sécurité de premier niveau des produits des technologies de l'information (CSPN). » ; « Le niveau élémentaire est accordé sur la base d'une CSPN. Les niveaux standard et renforcé le sont sur la base d'une certification \"Critères communs\". »",
    exigence: {
      level: "recommande",
      note: "recours aux produits qualifiés recommandé (chap. 3 et §7.9) ; à défaut, conformité au RGS à attester (art. 4 du décret RGS)",
    },
    sources: ["rgs-corps"],
    tags: ["qualification", "produits", "CSPN", "Critères communs"],
  },
  {
    id: "rgs-psco",
    refId: "rgs",
    themeId: "produits-prestataires",
    title: "Les prestataires de services de confiance (PSCO) et les annexes A et C",
    short:
      "Trois catégories de PSCO sont visées par le RGS v2.0 : les prestataires de certification électronique (PSCE, annexes A2/A3), les prestataires d'horodatage (PSHE, annexe A5) et les prestataires d'audit de la SSI (annexe C, qui couvre audit organisationnel, de code source, de configuration, d'architecture et tests d'intrusion). La qualification est délivrée par un organisme de qualification accrédité par le COFRAC et habilité par l'ANSSI, pour trois ans, et par type de prestation.",
    elementDeLangage:
      "« PSCE pour les certificats, PSHE pour l'horodatage, prestataires d'audit pour la SSI : trois familles de PSCO, qualifiées pour trois ans par des organismes accrédités COFRAC et habilités par l'ANSSI. »",
    detail:
      "RGS v2.0, §5.2 : « Les prestataires de services peuvent éventuellement appartenir à plusieurs catégories distinctes de PSCO. Ils doivent alors obtenir une qualification pour chaque type de prestation. » ; « L'attestation de qualification est délivrée par un organisme de qualification, à l'issue d'une évaluation de la conformité du PSCO aux exigences du RGS qui lui sont applicables. Ces exigences sont présentées sous forme de référentiels annexés au RGS (annexes A et C). Les organismes de qualification sont, eux-mêmes, accrédités par le Comité français d'accréditation (COFRAC) et habilités par l'ANSSI [...] » ; « Dans tous les cas, la qualification est accordée pour une durée de trois ans. » ; « Les catégories de PSCO visées dans la présente version du RGS sont : » les PSCE (annexes A2 et A3), les PSHE et les prestataires d'audit. Sur ces derniers : « Le référentiel d'exigences applicables aux prestataires d'audit de la sécurité des systèmes d'information figure en annexe C du RGS. Il couvre les activités d'audit organisationnel, de code source, de configuration et d'architecture, ainsi que les tests d'intrusion. » Sur les PSHE : « Le référentiel d'exigences applicable aux prestataires de services d'horodatage électronique (PSHE), qui prévoit un niveau de sécurité unique, figure en annexe A5, appelée \"politique d'horodatage type\". »",
    exigence: {
      level: "obligatoire",
      note: "pour être qualifié, le PSCO doit satisfaire le référentiel d'exigences applicable ; une qualification par type de prestation",
    },
    sources: ["rgs-corps"],
    tags: ["PSCO", "prestataires", "audit", "annexes"],
  },
];
