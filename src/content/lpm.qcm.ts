// QCM LPM / SAIV (genere a partir des fiches, un agent par theme, puis valide).
// Chaque question est fondee sur une ou plusieurs fiches du meme theme ; le lien
// question -> fiche(s) est dans lpm.qcard-map.ts. Sans remplissage.

import type { QcmQuestion } from "../types.ts";

export const lpmQcm: QcmQuestion[] = [
  {
    "id": "q-lpm-base-creation-2006",
    "refId": "lpm",
    "themeId": "base",
    "question": "Quand et par quel texte le dispositif de securite des activites d'importance vitale (SAIV) a-t-il ete cree ?",
    "options": [
      {
        "text": "En 2006, par le decret n2006-212 du 23 fevrier 2006",
        "correct": true
      },
      {
        "text": "En 2013, par la loi de programmation militaire (LPM)",
        "correct": false
      },
      {
        "text": "En 2015, par la loi du 28 juillet 2015",
        "correct": false
      },
      {
        "text": "En 2022, par la directive NIS2",
        "correct": false
      }
    ],
    "explanation": "Le dispositif SAIV a ete cree en 2006 par le decret n2006-212 du 23 fevrier 2006, sur les bases de l'ancien dispositif de protection des points et reseaux sensibles ; la LPM de 2013 n'a fait que le completer.",
    "exigence": {
      "level": "obligatoire",
      "note": "decret n2006-212 du 23/02/2006"
    },
    "sources": [
      "decret-2006",
      "sgdsn-saiv"
    ]
  },
  {
    "id": "q-lpm-base-pilote-sgdsn",
    "refId": "lpm",
    "themeId": "base",
    "question": "Qui pilote le dispositif SAIV ?",
    "options": [
      {
        "text": "Le SGDSN",
        "correct": true
      },
      {
        "text": "L'ANSSI",
        "correct": false
      },
      {
        "text": "Le ministere de l'Interieur seul",
        "correct": false
      },
      {
        "text": "La CNIL",
        "correct": false
      }
    ],
    "explanation": "Le dispositif SAIV est un dispositif interministeriel pilote par le SGDSN, qui associe des operateurs publics ou prives a la strategie de securite nationale (decret n2006-212).",
    "exigence": {
      "level": "obligatoire",
      "note": "decret n2006-212 ; pilotage SGDSN"
    },
    "sources": [
      "decret-2006",
      "sgdsn-saiv"
    ]
  },
  {
    "id": "q-lpm-base-menaces-couvertes",
    "refId": "lpm",
    "themeId": "base",
    "question": "Contre quels types de risques le dispositif SAIV vise-t-il a proteger les operateurs critiques ?",
    "options": [
      {
        "text": "La malveillance (terrorisme, sabotage, cyberattaque)",
        "correct": true
      },
      {
        "text": "Les risques naturels, technologiques et sanitaires",
        "correct": true
      },
      {
        "text": "Uniquement les attaques informatiques",
        "correct": false
      },
      {
        "text": "Uniquement les actes de terrorisme physique",
        "correct": false
      }
    ],
    "explanation": "Le dispositif SAIV associe les operateurs a la securite nationale face a la malveillance (terrorisme, sabotage, cyberattaque) comme aux risques naturels, technologiques et sanitaires (decret n2006-212).",
    "exigence": {
      "level": "obligatoire",
      "note": "decret n2006-212 du 23/02/2006"
    },
    "sources": [
      "decret-2006",
      "sgdsn-saiv"
    ]
  },
  {
    "id": "q-lpm-base-articles-code-defense",
    "refId": "lpm",
    "themeId": "base",
    "question": "Sur quels articles du code de la defense repose le dispositif SAIV ?",
    "options": [
      {
        "text": "Les articles L.1332-1 et suivants (partie legislative)",
        "correct": true
      },
      {
        "text": "Les articles R.1332-1 a R.1332-42 (partie reglementaire)",
        "correct": true
      },
      {
        "text": "Les articles L.2321-1 et suivants",
        "correct": false
      },
      {
        "text": "Les articles R.1334-1 a R.1334-10",
        "correct": false
      }
    ],
    "explanation": "Le dispositif repose sur les articles L.1332-1 et suivants (partie legislative) et R.1332-1 a R.1332-42 (partie reglementaire) du code de la defense.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-1 et s. ; R.1332-1 a R.1332-42"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-saiv"
    ]
  },
  {
    "id": "q-lpm-base-l1332-1-cooperation",
    "refId": "lpm",
    "themeId": "base",
    "question": "Selon l'article L.1332-1 du code de la defense, a quoi sont tenus les operateurs vises ?",
    "options": [
      {
        "text": "A cooperer, a leurs frais, a la protection de leurs installations contre toute menace, notamment terroriste",
        "correct": true
      },
      {
        "text": "A cooperer a la protection de leurs installations, l'Etat prenant en charge les frais",
        "correct": false
      },
      {
        "text": "A transferer la gestion de leurs sites a l'Etat",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-1 fonde le perimetre : les operateurs exploitant des installations dont l'indisponibilite menacerait le potentiel ou la survie de la Nation sont tenus de cooperer, a leurs frais, a leur protection contre toute menace, notamment terroriste.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-1"
    },
    "sources": [
      "code-defense",
      "sgdsn-saiv"
    ]
  },
  {
    "id": "q-lpm-base-art22-volet-cyber",
    "refId": "lpm",
    "themeId": "base",
    "question": "Qu'a apporte l'article 22 de la LPM (loi n2013-1168 du 18 decembre 2013) ?",
    "options": [
      {
        "text": "L'insertion dans le code de la defense des articles L.1332-6-1 a L.1332-6-6 (securite des SI) et le renforcement des sanctions (L.1332-7)",
        "correct": true
      },
      {
        "text": "La creation du dispositif SAIV",
        "correct": false
      },
      {
        "text": "La transposition de la directive NIS2",
        "correct": false
      },
      {
        "text": "La suppression des obligations de securite physique des OIV",
        "correct": false
      }
    ],
    "explanation": "L'article 22 de la LPM 2013 a cree la section sur la securite des systemes d'information (art. L.1332-6-1 a L.1332-6-6) et modifie l'article L.1332-7 sur les dispositions penales.",
    "exigence": {
      "level": "obligatoire",
      "note": "LPM 2013, art. 22"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },
  {
    "id": "q-lpm-base-l1332-6-1-modif-2015",
    "refId": "lpm",
    "themeId": "base",
    "question": "L'article L.1332-6-1 du code de la defense, cree par la LPM 2013, a ensuite ete modifie par quel texte ?",
    "options": [
      {
        "text": "La loi n2015-917 du 28 juillet 2015",
        "correct": true
      },
      {
        "text": "Le decret n2006-212 du 23 fevrier 2006",
        "correct": false
      },
      {
        "text": "La directive UE 2022/2555 (NIS2)",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-6-1, issu de l'article 22 de la LPM 2013, a ete modifie par la loi n2015-917 du 28 juillet 2015 ; ce socle reste en vigueur en 2026.",
    "exigence": {
      "level": "obligatoire",
      "note": "L.1332-6-1 modifie par la loi n2015-917 du 28/07/2015"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },
  {
    "id": "q-lpm-perimetre-12-secteurs",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "Combien de secteurs d'activités d'importance vitale compte le dispositif SAIV, et comment sont-ils regroupes ?",
    "options": [
      {
        "text": "12 secteurs repartis en 4 dominantes",
        "correct": true
      },
      {
        "text": "10 secteurs repartis en 3 dominantes",
        "correct": false
      },
      {
        "text": "12 secteurs repartis en 6 dominantes",
        "correct": false
      },
      {
        "text": "4 secteurs repartis en 12 dominantes",
        "correct": false
      }
    ],
    "explanation": "Le dispositif compte 12 secteurs d'activites d'importance vitale repartis en 4 dominantes (humaine, regalienne, economique, technologique), definis a l'article R.1332-2 et fixes par arrete du 2 juin 2006 modifie.",
    "exigence": {
      "level": "obligatoire",
      "note": "R.1332-2 ; arrete du 02/06/2006 modifie"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-perimetre-dominantes",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "Parmi ces propositions, lesquelles sont des dominantes regroupant les 12 secteurs d'importance vitale ?",
    "options": [
      {
        "text": "Humaine",
        "correct": true
      },
      {
        "text": "Regalienne",
        "correct": true
      },
      {
        "text": "Economique",
        "correct": true
      },
      {
        "text": "Diplomatique",
        "correct": false
      }
    ],
    "explanation": "Selon l'article R.1332-2, les 4 dominantes sont humaine, regalienne, economique et technologique ; il n'existe pas de dominante diplomatique.",
    "exigence": {
      "level": "obligatoire",
      "note": "R.1332-2 ; arrete du 02/06/2006 modifie"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-perimetre-secteur-sante",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "A quelle dominante appartiennent les secteurs alimentation, gestion de l'eau et sante ?",
    "options": [
      {
        "text": "La dominante humaine",
        "correct": true
      },
      {
        "text": "La dominante economique",
        "correct": false
      },
      {
        "text": "La dominante technologique",
        "correct": false
      },
      {
        "text": "La dominante regalienne",
        "correct": false
      }
    ],
    "explanation": "L'article R.1332-2 rattache l'alimentation, la gestion de l'eau et la sante a la dominante humaine.",
    "exigence": {
      "level": "obligatoire",
      "note": "R.1332-2 ; arrete du 02/06/2006 modifie"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-perimetre-oiv-def",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "Comment se definit un operateur d'importance vitale (OIV) ?",
    "options": [
      {
        "text": "Un operateur public ou prive exploitant des installations dont l'indisponibilite ou la destruction obererait gravement le potentiel de guerre ou economique, la securite ou la survie de la Nation, ou la sante et la vie de la population",
        "correct": true
      },
      {
        "text": "Exclusivement un operateur public charge d'une mission de service public",
        "correct": false
      },
      {
        "text": "Une entreprise privee designee par la Commission europeenne",
        "correct": false
      },
      {
        "text": "Tout operateur realisant plus de 300 millions d'euros de chiffre d'affaires",
        "correct": false
      }
    ],
    "explanation": "La notion d'OIV est formalisee a l'article R.1332-1 du code de la defense (sur le fondement de L.1332-1) : operateur public ou prive dont les installations critiques, si endommagees, auraient des consequences graves pour la Nation.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-1"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-saiv"
    ]
  },
  {
    "id": "q-lpm-perimetre-oiv-securite-frais",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "A qui incombe la charge financiere de la securite des sites et systemes les plus critiques d'un OIV ?",
    "options": [
      {
        "text": "A l'OIV lui-meme, qui doit garantir cette securite a ses frais",
        "correct": true
      },
      {
        "text": "A l'Etat, qui finance integralement les mesures",
        "correct": false
      },
      {
        "text": "A l'ANSSI via une subvention dediee",
        "correct": false
      }
    ],
    "explanation": "Selon l'article R.1332-1 du code de la defense, l'OIV est tenu de garantir, a ses frais, la securite de ses sites et systemes les plus critiques.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-1"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-saiv"
    ]
  },
  {
    "id": "q-lpm-perimetre-chiffres",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "Quels ordres de grandeur le SGDSN avance-t-il pour le dispositif SAIV ?",
    "options": [
      {
        "text": "Plus de 300 OIV et pres de 1500 points d'importance vitale (PIV)",
        "correct": true
      },
      {
        "text": "Environ 50 OIV et 200 PIV",
        "correct": false
      },
      {
        "text": "Plus de 1500 OIV et 300 PIV",
        "correct": false
      },
      {
        "text": "Exactement 12 OIV, un par secteur",
        "correct": false
      }
    ],
    "explanation": "Le SGDSN fait etat de plus de 300 operateurs d'importance vitale et de pres de 1500 points d'importance vitale (PIV), chiffres agreges car les identites sont classifiees.",
    "exigence": {
      "level": "conseille",
      "note": "ordres de grandeur SGDSN ; identites classifiees"
    },
    "sources": [
      "sgdsn-saiv",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-perimetre-piv-protection",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "Concernant les points d'importance vitale (PIV) et l'identite des OIV, quelles affirmations sont exactes ?",
    "options": [
      {
        "text": "L'identite des OIV et des PIV est protegee au titre du secret de la defense nationale",
        "correct": true
      },
      {
        "text": "Un PIV est un point nevralgique au sein de l'OIV faisant l'objet d'un plan particulier de protection",
        "correct": true
      },
      {
        "text": "La liste nominative des OIV est publiee au Journal officiel",
        "correct": false
      },
      {
        "text": "Les PIV sont depourvus de toute mesure de protection particuliere",
        "correct": false
      }
    ],
    "explanation": "Les identites des OIV et PIV sont classifiees (secret de la defense nationale) ; un PIV est un point nevralgique de l'OIV faisant l'objet d'un plan particulier de protection.",
    "exigence": {
      "level": "conseille",
      "note": "ordres de grandeur SGDSN ; identites classifiees"
    },
    "sources": [
      "sgdsn-saiv",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-oiv-designation-arrete",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "Par quel acte et quelle autorite un OIV est-il designe ?",
    "options": [
      {
        "text": "Par arrete du ministre coordonnateur du secteur",
        "correct": true
      },
      {
        "text": "Par decret en Conseil d'Etat",
        "correct": false
      },
      {
        "text": "Par decision de l'ANSSI",
        "correct": false
      },
      {
        "text": "Par deliberation du Parlement",
        "correct": false
      }
    ],
    "explanation": "L'art. R.1332-3 du code de la defense prevoit la designation par arrete du ministre coordonnateur, en concertation interministerielle et apres avis de la commission de l'art. R.1332-10.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-3"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-oiv-delai-observations",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "De quel delai dispose l'operateur pressenti pour presenter ses observations apres notification ?",
    "options": [
      {
        "text": "Deux mois",
        "correct": true
      },
      {
        "text": "Six mois",
        "correct": false
      },
      {
        "text": "Un mois",
        "correct": false
      },
      {
        "text": "Trente jours",
        "correct": false
      }
    ],
    "explanation": "Selon l'art. R.1332-3, l'operateur notifie dispose d'un delai de deux mois pour presenter ses observations.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-3"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-oiv-confidentialite-listes",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "Quel est le statut de protection des listes d'OIV ?",
    "options": [
      {
        "text": "Elles sont protegees au titre du secret de la defense nationale",
        "correct": true
      },
      {
        "text": "Elles sont publiees au Journal officiel",
        "correct": false
      },
      {
        "text": "Elles sont communicables sur demande CADA",
        "correct": false
      }
    ],
    "explanation": "La fiche precise que la designation est confidentielle et que les listes d'OIV sont protegees au titre du secret de la defense nationale (art. R.1332-3).",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-3"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-oiv-plans-obligatoires",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "Une fois designe, quelles obligations generales pesent sur l'OIV ?",
    "options": [
      {
        "text": "Nommer un delegue pour la defense et la securite",
        "correct": true
      },
      {
        "text": "Rediger un plan de securite d'operateur (PSO)",
        "correct": true
      },
      {
        "text": "Etablir un plan particulier de protection (PPP) pour chaque point d'importance vitale",
        "correct": true
      },
      {
        "text": "Publier annuellement un rapport public de securite",
        "correct": false
      }
    ],
    "explanation": "La fiche (art. R.1332-25) indique que l'OIV nomme un delegue, redige un PSO et etablit un PPP par PIV approuve par le prefet.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-25"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-oiv-ppp-approbation",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "Qui approuve le plan particulier de protection (PPP) d'un point d'importance vitale, et dans quel delai ?",
    "options": [
      {
        "text": "Le prefet de departement, qui statue dans un delai de six mois",
        "correct": true
      },
      {
        "text": "Le ministre coordonnateur, dans un delai de deux mois",
        "correct": false
      },
      {
        "text": "L'ANSSI, dans un delai de trois mois",
        "correct": false
      },
      {
        "text": "Le delegue de l'operateur, sans delai",
        "correct": false
      }
    ],
    "explanation": "L'art. R.1332-25 prevoit que chaque PPP est transmis au prefet de departement, qui statue dans un delai de six mois.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-25"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-oiv-pso-vs-ppp",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "Quelle difference entre le PSO et le PPP ?",
    "options": [
      {
        "text": "Le PSO decrit l'organisation et la politique de securite de l'operateur, le PPP detaille les mesures de protection d'un point",
        "correct": true
      },
      {
        "text": "Le PSO porte sur un seul point, le PPP couvre tout l'operateur",
        "correct": false
      },
      {
        "text": "Le PSO est le volet cyber, le PPP le volet physique",
        "correct": false
      }
    ],
    "explanation": "La fiche distingue le PSO (organisation et politique de securite de l'operateur) du PPP (un par PIV, mesures de protection du point), art. R.1332-25.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-25"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-siiv-l13326-1-autorite",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Selon l'article L.1332-6-1 du code de la defense, qui fixe les regles de securite necessaires a la protection des systemes d'information des OIV ?",
    "options": [
      {
        "text": "Le Premier ministre",
        "correct": true
      },
      {
        "text": "Le directeur general de l'ANSSI",
        "correct": false
      },
      {
        "text": "Le ministre de la Defense",
        "correct": false
      },
      {
        "text": "L'operateur lui-meme",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-6-1 du code de la defense (issu de la LPM 2013) dispose que le Premier ministre fixe les regles, la mise en oeuvre operationnelle etant deleguee a l'ANSSI.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-6-1"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },
  {
    "id": "q-lpm-siiv-l13326-1-frais",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Qui supporte le cout de l'application des regles de securite fixees au titre de l'article L.1332-6-1 ?",
    "options": [
      {
        "text": "L'operateur d'importance vitale, a ses frais",
        "correct": true
      },
      {
        "text": "L'Etat, via une subvention de l'ANSSI",
        "correct": false
      },
      {
        "text": "Le secteur d'activites d'importance vitale concerne",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-6-1 precise que les operateurs sont tenus d'appliquer ces regles a leurs frais.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-6-1"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },
  {
    "id": "q-lpm-siiv-detection-territoire",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Concernant la detection des evenements de securite imposee par les regles LPM, quelles affirmations sont exactes ?",
    "options": [
      {
        "text": "Les systemes de detection doivent etre qualifies et exploites sur le territoire national",
        "correct": true
      },
      {
        "text": "La detection peut etre operee par des prestataires qualifies (PDIS), par l'ANSSI ou par d'autres services de l'Etat designes par le Premier ministre",
        "correct": true
      },
      {
        "text": "La detection peut etre exploitee depuis n'importe quel pays de l'Union europeenne",
        "correct": false
      },
      {
        "text": "En pratique, ce sont surtout des prestataires qualifies (PDIS) qui operent la detection",
        "correct": true
      }
    ],
    "explanation": "L'article L.1332-6-1 prevoit des systemes qualifies de detection exploites sur le territoire national par des PDIS, par l'ANSSI ou par d'autres services de l'Etat designes par le Premier ministre.",
    "exigence": {
      "level": "obligatoire",
      "note": "L.1332-6-1 ; exploitation sur le territoire national"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },
  {
    "id": "q-lpm-siiv-l13326-2-incidents",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Au titre de l'article L.1332-6-2, dans quel delai et aupres de qui les OIV declarent-ils les incidents affectant leurs systemes d'information ?",
    "options": [
      {
        "text": "Sans delai, au Premier ministre (en pratique a l'ANSSI)",
        "correct": true
      },
      {
        "text": "Dans un delai de 72 heures, a la CNIL",
        "correct": false
      },
      {
        "text": "Sous 30 jours, au prefet de departement",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-6-2 impose aux operateurs d'informer sans delai le Premier ministre ; la declaration est operationnellement adressee a l'ANSSI.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-6-2"
    },
    "sources": [
      "lpm-2013",
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-siiv-l13326-3-controles",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Que prevoit l'article L.1332-6-3 du code de la defense en matiere de controles des systemes d'information des OIV ?",
    "options": [
      {
        "text": "Les controles sont realises a la demande du Premier ministre et leur cout est a la charge de l'operateur",
        "correct": true
      },
      {
        "text": "Les controles peuvent etre realises par l'ANSSI ou par des prestataires d'audit qualifies (PASSI)",
        "correct": true
      },
      {
        "text": "Les controles sont entierement finances par l'Etat",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-6-3 prevoit des controles a la demande du Premier ministre, supportes par l'operateur, et realises par l'ANSSI ou des prestataires qualifies (PASSI).",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-6-3"
    },
    "sources": [
      "lpm-2013",
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-siiv-l13327-sanction",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Quelle sanction penale l'article L.1332-7 prevoit-il en cas de non-respect des obligations cyber des articles L.1332-6-1 a L.1332-6-4 ?",
    "options": [
      {
        "text": "Une amende de 150 000 euros",
        "correct": true
      },
      {
        "text": "Une amende de 10 000 euros",
        "correct": false
      },
      {
        "text": "Une amende de 2 % du chiffre d'affaires mondial",
        "correct": false
      },
      {
        "text": "Une simple mise en demeure sans sanction financiere",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-7 (renforce par la LPM 2013) prevoit une amende de 150 000 euros pour les dirigeants, rendant le volet cyber juridiquement contraignant.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-7"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },
  {
    "id": "q-lpm-regles-qui-identifie-siiv",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Qui identifie les systemes d'information d'importance vitale (SIIV) d'un operateur ?",
    "options": [
      {
        "text": "C'est l'OIV qui, par analyse d'impact, identifie lui-meme ses SIIV",
        "correct": true
      },
      {
        "text": "C'est l'Etat (ANSSI) qui etablit et notifie la liste des SIIV",
        "correct": false
      },
      {
        "text": "C'est le prefet de zone de defense qui les designe",
        "correct": false
      },
      {
        "text": "C'est l'operateur de telecommunications qui les declare",
        "correct": false
      }
    ],
    "explanation": "Selon l'ANSSI (FAQ SIIV), l'OIV analyse les impacts potentiels pour determiner quels systemes constituent des SIIV : ce n'est pas l'Etat qui les liste.",
    "exigence": {
      "level": "obligatoire",
      "note": "ANSSI, FAQ SIIV"
    },
    "sources": [
      "cyber-siiv-faq",
      "cyber-saiv"
    ]
  },
  {
    "id": "q-lpm-regles-definition-siiv",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Comment se definit un SIIV ?",
    "options": [
      {
        "text": "Un SI dont une atteinte a la securite ou au fonctionnement pourrait impacter significativement les activites vitales de l'OIV",
        "correct": true
      },
      {
        "text": "N'importe quel systeme d'information detenu par un OIV",
        "correct": false
      },
      {
        "text": "Un SI heberge sur le territoire national uniquement",
        "correct": false
      }
    ],
    "explanation": "D'apres l'ANSSI (FAQ SIIV), un SIIV est un SI dont l'atteinte impacterait significativement les activites vitales de l'operateur ; les regles ne s'appliquent qu'a ce perimetre identifie.",
    "exigence": {
      "level": "obligatoire",
      "note": "ANSSI, FAQ SIIV"
    },
    "sources": [
      "cyber-siiv-faq",
      "cyber-saiv"
    ]
  },
  {
    "id": "q-lpm-regles-arretes-sectoriels",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Sous quelle forme sont fixees les regles de securite applicables aux SIIV ?",
    "options": [
      {
        "text": "Par des arretes sectoriels (un jeu de regles par secteur), publies progressivement de 2016 a 2017",
        "correct": true
      },
      {
        "text": "Par un texte unique applicable a tous les secteurs simultanement",
        "correct": false
      },
      {
        "text": "Par des circulaires internes non publiees",
        "correct": false
      },
      {
        "text": "Par un reglement europeen directement applicable",
        "correct": false
      }
    ],
    "explanation": "Le volet cyber de la LPM est decline par arretes sectoriels publies progressivement entre juillet 2016 (sante, eau, alimentation) et octobre 2017 (espace, armement), avec des exigences globalement homogenes.",
    "exigence": {
      "level": "obligatoire",
      "note": "arretes sectoriels (2016-2017)"
    },
    "sources": [
      "cyber-siiv-faq",
      "cyber-saiv"
    ]
  },
  {
    "id": "q-lpm-regles-familles",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Parmi les grandes familles de regles de securite des SIIV citees par l'ANSSI, lesquelles figurent ?",
    "options": [
      {
        "text": "Gouvernance (PSSI), homologation, cartographie et maintien en condition de securite",
        "correct": true
      },
      {
        "text": "Journalisation, detection (PDIS) et traitement des incidents",
        "correct": true
      },
      {
        "text": "Obligation de souscrire une assurance cyber privee",
        "correct": false
      },
      {
        "text": "Identification, authentification et gestion des acces",
        "correct": true
      }
    ],
    "explanation": "L'ANSSI (FAQ SIIV et page regles de securite) cite notamment la gouvernance/PSSI, l'homologation, la cartographie, le maintien en condition de securite, la journalisation, la detection via PDIS, le traitement des incidents et la gestion des acces.",
    "exigence": {
      "level": "obligatoire",
      "note": "ANSSI ; liste exhaustive a confirmer par les arretes"
    },
    "sources": [
      "cyber-siiv-faq",
      "cyber-saiv"
    ]
  },
  {
    "id": "q-lpm-regles-homologation-qui",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Qui prononce formellement l'homologation d'un SIIV et qui realise les controles de conformite ?",
    "options": [
      {
        "text": "L'OIV prononce l'homologation ; les controles sont realises par des prestataires d'audit qualifies PASSI, independants des auditeurs de l'homologation",
        "correct": true
      },
      {
        "text": "L'ANSSI prononce l'homologation et realise elle-meme tous les controles",
        "correct": false
      },
      {
        "text": "Le prestataire PASSI prononce l'homologation a la place de l'OIV",
        "correct": false
      }
    ],
    "explanation": "Selon l'ANSSI (FAQ SIIV), l'OIV prononce l'homologation (acceptation des risques) et les controles de conformite sont menes par des PASSI independants et distincts des auditeurs ayant contribue a l'homologation.",
    "exigence": {
      "level": "obligatoire",
      "note": "ANSSI, FAQ SIIV ; controles PASSI independants"
    },
    "sources": [
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-regles-detection-pdis",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Sur quel referentiel s'appuie la regle de detection imposant un systeme de correlation et d'analyse des journaux ?",
    "options": [
      {
        "text": "Le referentiel PDIS (prestataires de detection des incidents de securite)",
        "correct": true
      },
      {
        "text": "Le referentiel PASSI uniquement",
        "correct": false
      },
      {
        "text": "La norme ISO 27001 imposee par la LPM",
        "correct": false
      }
    ],
    "explanation": "La regle de detection (page ANSSI) prevoit un systeme de correlation et d'analyse des journaux exploite en s'appuyant sur le referentiel PDIS, qui decoule de l'article 10 du decret n2015-350 du 27 mars 2015.",
    "exigence": {
      "level": "obligatoire",
      "note": "ANSSI ; referentiel PDIS (decret 2015-350, art. 10)"
    },
    "sources": [
      "cyber-saiv",
      "pdis"
    ]
  },
  {
    "id": "q-lpm-regles20-pssi-def",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que prevoit la regle 1 des 20 regles SIIV (arrete du 28/11/2016) ?",
    "options": [
      {
        "text": "L'operateur definit, fait approuver et applique une PSSI couvrant ses SIIV",
        "correct": true
      },
      {
        "text": "L'operateur transfere la securite de ses SIIV a l'ANSSI",
        "correct": false
      },
      {
        "text": "L'operateur publie sa politique de securite au Journal officiel",
        "correct": false
      }
    ],
    "explanation": "La regle 1 (arrete du 28/11/2016, regle politique de securite) impose une PSSI formalisee, validee par la direction et appliquee sur le perimetre des SIIV.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle politique de securite"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-homologation-role",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que signifie l'homologation de securite d'un SIIV (regle 2) ?",
    "options": [
      {
        "text": "L'autorite d'homologation atteste que les risques sont connus, maitrises et acceptes",
        "correct": true
      },
      {
        "text": "L'ANSSI certifie le produit aupres d'un laboratoire agree",
        "correct": false
      },
      {
        "text": "Un assureur garantit la couverture financiere du risque cyber",
        "correct": false
      },
      {
        "text": "Elle est definitive et n'est jamais revisee",
        "correct": false
      }
    ],
    "explanation": "La regle 2 (arrete du 28/11/2016, regle homologation) repose sur une acceptation formelle des risques par l'autorite d'homologation, revisee periodiquement et conditionnant la mise et le maintien en exploitation.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle homologation"
    },
    "sources": [
      "arrete-2016",
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-regles20-carto-perimetre",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que couvre la cartographie exigee par la regle 3 ?",
    "options": [
      {
        "text": "Les architectures applicative, systeme et reseau du SIIV, ainsi que les interconnexions",
        "correct": true
      },
      {
        "text": "Uniquement la liste des employes habilites",
        "correct": false
      },
      {
        "text": "Seulement les locaux physiques de l'operateur",
        "correct": false
      }
    ],
    "explanation": "La regle 3 (arrete du 28/11/2016, regle cartographie) impose une cartographie tenue a jour des applications, systemes, reseau et interconnexions, socle de la maitrise du perimetre.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle cartographie"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-mcs-contenu",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que recouvre le maintien en condition de securite (MCS, regle 4) ?",
    "options": [
      {
        "text": "Le suivi des vulnerabilites, l'application des correctifs et la gestion de l'obsolescence",
        "correct": true
      },
      {
        "text": "La sauvegarde quotidienne des donnees uniquement",
        "correct": false
      },
      {
        "text": "Le renouvellement annuel du materiel sans condition",
        "correct": false
      }
    ],
    "explanation": "La regle 4 (arrete du 28/11/2016, regle MCS) impose le suivi et l'application des correctifs, la gestion des vulnerabilites et l'anticipation de l'obsolescence des composants.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle MCS"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-journal-correlation",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Comment s'articulent la journalisation (regle 5) et la correlation des journaux (regle 6) ?",
    "options": [
      {
        "text": "La regle 5 enregistre les evenements, la regle 6 impose de les correler et analyser en s'appuyant sur le referentiel PDIS",
        "correct": true
      },
      {
        "text": "La regle 5 et la regle 6 designent la meme obligation redigee deux fois",
        "correct": false
      },
      {
        "text": "La correlation des journaux dispense de toute journalisation prealable",
        "correct": false
      }
    ],
    "explanation": "La regle 5 (journalisation) collecte les evenements ; la regle 6 (correlation et analyse) impose de les correler et analyser via un systeme exploite selon le referentiel PDIS (arrete du 28/11/2016).",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regles journalisation et correlation ; PDIS"
    },
    "sources": [
      "arrete-2016",
      "pdis"
    ]
  },
  {
    "id": "q-lpm-regles20-detection-sondes",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Sur quoi repose la detection imposee par la regle 7 ?",
    "options": [
      {
        "text": "Des sondes d'analyse de fichiers et de protocoles, conformes aux exigences applicables",
        "correct": true
      },
      {
        "text": "Un audit annuel realise par un commissaire aux comptes",
        "correct": false
      },
      {
        "text": "La seule vigilance des utilisateurs finaux",
        "correct": false
      }
    ],
    "explanation": "La regle 7 (arrete du 28/11/2016, regle detection) s'appuie sur des sondes analysant fichiers et protocoles (systemes qualifies, exploites sur le territoire national) alimentant le traitement des incidents.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle detection"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-incidents-declaration",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Le traitement des incidents (regle 8) s'articule avec quelle obligation legale ?",
    "options": [
      {
        "text": "La declaration des incidents a l'ANSSI prevue a l'article L.1332-6-2",
        "correct": true
      },
      {
        "text": "La declaration aupres de la CNIL au titre du RGPD uniquement",
        "correct": false
      },
      {
        "text": "Le depot de plainte obligatoire aupres du procureur",
        "correct": false
      }
    ],
    "explanation": "La regle 8 (arrete du 28/11/2016, regle traitement des incidents) couvre qualification, confinement et remediation, et s'articule avec la declaration des incidents a l'ANSSI (L.1332-6-2).",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle traitement des incidents ; L.1332-6-2"
    },
    "sources": [
      "arrete-2016",
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-regles20-alertes-anssi",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que prevoit la regle 9 sur le traitement des alertes ?",
    "options": [
      {
        "text": "L'operateur recoit, qualifie et traite les alertes, notamment celles emises par l'ANSSI",
        "correct": true
      },
      {
        "text": "L'operateur ignore les alertes externes pour se concentrer sur ses propres sondes",
        "correct": false
      },
      {
        "text": "L'operateur relaie automatiquement toutes les alertes a ses clients",
        "correct": false
      }
    ],
    "explanation": "La regle 9 (arrete du 28/11/2016, regle traitement des alertes) impose de recevoir, qualifier et traiter les alertes (avis, bulletins, signalements), en particulier celles de l'ANSSI.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle traitement des alertes"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-crise",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que doit definir l'operateur au titre de la regle 10 (gestion de crise) ?",
    "options": [
      {
        "text": "Une organisation, des procedures et des moyens pour reagir a un incident majeur, en lien avec la continuite d'activite",
        "correct": true
      },
      {
        "text": "Un budget de communication presse en cas d'attaque",
        "correct": false
      },
      {
        "text": "Le transfert systematique de la crise a un prestataire externe",
        "correct": false
      }
    ],
    "explanation": "La regle 10 (arrete du 28/11/2016, regle gestion de crise) prevoit l'organisation, les procedures et les moyens de reaction a un incident majeur, articules avec la continuite d'activite.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle gestion de crise"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-identification-comptes",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que vise la regle 11 sur l'identification ?",
    "options": [
      {
        "text": "Des comptes individuels pour les utilisateurs et ressources, condition de l'imputabilite",
        "correct": true
      },
      {
        "text": "L'usage de comptes partages pour simplifier l'administration",
        "correct": false
      },
      {
        "text": "L'anonymisation systematique de tous les acces",
        "correct": false
      }
    ],
    "explanation": "La regle 11 (arrete du 28/11/2016, regle identification) impose des identites propres (comptes individuels, pas de comptes partages) pour assurer l'imputabilite des actions.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle identification"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-authentification",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Sur quoi repose l'authentification d'acces aux SIIV (regle 12) ?",
    "options": [
      {
        "text": "Des secrets suffisamment robustes (mots de passe robustes, idealement multifacteurs), avec gestion securisee des secrets",
        "correct": true
      },
      {
        "text": "Une simple adresse IP autorisee",
        "correct": false
      },
      {
        "text": "La reconnaissance vocale comme unique facteur obligatoire",
        "correct": false
      }
    ],
    "explanation": "La regle 12 (arrete du 28/11/2016, regle authentification) impose une authentification fondee sur des secrets robustes, idealement multifacteurs, avec une gestion securisee des secrets.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle authentification"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-droits-moindre-privilege",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Selon quel principe les droits d'acces sont-ils attribues (regle 13) ?",
    "options": [
      {
        "text": "Le moindre privilege, avec revue periodique des droits",
        "correct": true
      },
      {
        "text": "L'attribution maximale par defaut pour eviter les blocages",
        "correct": false
      },
      {
        "text": "L'attribution definitive sans revision",
        "correct": false
      }
    ],
    "explanation": "La regle 13 (arrete du 28/11/2016, regle droits d'acces) impose le moindre privilege et une revue periodique des droits sur tout le cycle de vie des comptes.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle droits d'acces"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-comptes-admin",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Comment les comptes d'administration sont-ils encadres (regle 14) ?",
    "options": [
      {
        "text": "Comptes dedies a l'administration, separes des comptes courants, traces et proteges par authentification renforcee",
        "correct": true
      },
      {
        "text": "Comptes partages entre administrateurs pour la disponibilite",
        "correct": false
      },
      {
        "text": "Comptes identiques aux comptes utilisateurs courants",
        "correct": false
      }
    ],
    "explanation": "La regle 14 (arrete du 28/11/2016, regle comptes d'administration) impose des comptes a privileges dedies, separes des comptes courants, traces et proteges (authentification renforcee).",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle comptes d'administration"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-si-admin-dedie",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "D'ou doit s'effectuer l'administration des SIIV (regle 15) ?",
    "options": [
      {
        "text": "Depuis un SI d'administration dedie, distinct et cloisonne des usages courants",
        "correct": true
      },
      {
        "text": "Depuis n'importe quel poste bureautique connecte a Internet",
        "correct": false
      },
      {
        "text": "Depuis les postes des utilisateurs metiers",
        "correct": false
      }
    ],
    "explanation": "La regle 15 (arrete du 28/11/2016, regle SI d'administration) impose un SI d'administration distinct et cloisonne, pour limiter la compromission de la chaine d'administration.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle SI d'administration"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-cloisonnement-filtrage",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Comment s'articulent le cloisonnement (regle 16) et le filtrage (regle 17) ?",
    "options": [
      {
        "text": "Le cloisonnement segmente le SIIV en zones de confiance, le filtrage n'autorise que les flux necessaires entre zones et avec l'exterieur",
        "correct": true
      },
      {
        "text": "Le filtrage remplace le cloisonnement et le rend inutile",
        "correct": false
      },
      {
        "text": "Les deux regles imposent uniquement une separation physique des batiments",
        "correct": false
      }
    ],
    "explanation": "La regle 16 (cloisonnement) segmente en zones de confiance par moyens physiques ou logiques ; la regle 17 (filtrage) n'autorise que les communications necessaires, en complement (arrete du 28/11/2016).",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regles cloisonnement et filtrage"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-acces-distant",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Comment les acces a distance aux SIIV sont-ils encadres (regle 18) ?",
    "options": [
      {
        "text": "Par des canaux chiffres, une authentification renforcee et des postes d'acces maitrises",
        "correct": true
      },
      {
        "text": "Par une simple connexion VPN sans authentification renforcee",
        "correct": false
      },
      {
        "text": "Ils sont totalement interdits en toutes circonstances",
        "correct": false
      }
    ],
    "explanation": "La regle 18 (arrete du 28/11/2016, regle acces a distance) impose canaux chiffres, authentification renforcee et postes d'acces maitrises.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle acces a distance"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-installation-durcissement",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que prevoit la regle 19 sur l'installation de services et d'equipements ?",
    "options": [
      {
        "text": "Des configurations maitrisees et durcies pour ne pas introduire de vulnerabilites ni elargir la surface d'attaque",
        "correct": true
      },
      {
        "text": "L'installation libre de tout logiciel par les utilisateurs",
        "correct": false
      },
      {
        "text": "L'usage de configurations par defaut des fournisseurs",
        "correct": false
      }
    ],
    "explanation": "La regle 19 (arrete du 28/11/2016, regle installation de services et equipements) impose des configurations maitrisees et durcies.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle installation de services et equipements"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-indicateurs",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "A quoi servent les indicateurs exiges par la regle 20 ?",
    "options": [
      {
        "text": "A mesurer le niveau de securite des SIIV et alimenter le dialogue avec l'autorite",
        "correct": true
      },
      {
        "text": "A calculer la rentabilite financiere de l'operateur",
        "correct": false
      },
      {
        "text": "A remplacer l'homologation de securite",
        "correct": false
      }
    ],
    "explanation": "La regle 20 (arrete du 28/11/2016, regle indicateurs) impose des indicateurs de securite (couverture des mesures, MCS, incidents) pour piloter la securite et dialoguer avec l'autorite.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle indicateurs"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-cadre-nis2-ee-ei",
    "refId": "lpm",
    "themeId": "cadre",
    "question": "Concernant l'articulation entre le dispositif SAIV/LPM et NIS2, quelles affirmations sont exactes selon la fiche ?",
    "options": [
      {
        "text": "La transposition francaise de NIS2 introduit les entites essentielles (EE) et importantes (EI), en remplacement des OSE.",
        "correct": true
      },
      {
        "text": "Le regime SAIV/LPM (OIV/SIIV) reste en vigueur en 2026 et n'est pas abroge par NIS2.",
        "correct": true
      },
      {
        "text": "NIS2 abroge immediatement le dispositif SAIV et supprime la notion d'OIV.",
        "correct": false
      },
      {
        "text": "NIS2 est la directive UE 2022/2555.",
        "correct": true
      }
    ],
    "explanation": "La fiche indique que NIS2 (directive UE 2022/2555) cree les entites essentielles et importantes en remplacement des OSE, tandis que le regime SAIV/LPM reste en vigueur en 2026 ; l'articulation precise reste a verifier.",
    "exigence": {
      "level": "conseille",
      "note": "point a verifier : seul le fait certain (EE/EI en remplacement des OSE, SAIV/LPM maintenu) est teste"
    },
    "sources": [
      "cyber-nis2"
    ]
  },
  {
    "id": "q-lpm-cadre-dr-perimetres",
    "refId": "lpm",
    "themeId": "cadre",
    "question": "Que montrent les recommandations cloud de l'ANSSI (juillet 2024) au sujet du croisement des perimetres SIIV et Diffusion Restreinte (DR / II 901) ?",
    "options": [
      {
        "text": "Elles visent ensemble les SI de niveau DR, les SI sensibles d'OIV/OSE et les SIIV, ce qui montre que les perimetres se croisent.",
        "correct": true
      },
      {
        "text": "Elles tranchent definitivement le cumul exact des obligations lorsqu'un SIIV traite du DR.",
        "correct": false
      },
      {
        "text": "Elles interdisent qu'un SIIV traite des informations DR.",
        "correct": false
      }
    ],
    "explanation": "La fiche precise que les recommandations cloud de l'ANSSI (juillet 2024) visent ensemble DR, SI sensibles d'OIV/OSE et SIIV ; le cumul exact des obligations reste, lui, a approfondir.",
    "exigence": {
      "level": "conseille",
      "note": "point a approfondir : seul le fait certain (croisement des perimetres) est teste"
    },
    "sources": [
      "cyber-saiv"
    ]
  },
  {
    "id": "q-lpm-cadre-loi-resilience",
    "refId": "lpm",
    "themeId": "cadre",
    "question": "Quel est l'objet de la loi de resilience des infrastructures critiques engagee en 2024-2025, selon la fiche ?",
    "options": [
      {
        "text": "La transposition des directives CER et NIS2.",
        "correct": true
      },
      {
        "text": "L'abrogation du code de la defense.",
        "correct": false
      },
      {
        "text": "La suppression du SGDSN.",
        "correct": false
      }
    ],
    "explanation": "La fiche indique que la loi de resilience des infrastructures critiques (2024-2025) transpose les directives CER et NIS2 et pourrait restructurer les secteurs et le perimetre OIV ; son etat d'avancement reste a verifier.",
    "exigence": {
      "level": "conseille",
      "note": "a surveiller : seul l'objet de la loi (transposition CER et NIS2) est teste, pas son impact incertain"
    },
    "sources": [
      "cyber-nis2",
      "cyber-saiv"
    ]
  },

  // ------------------------------------------------------------------------
  // Renforcement du QCM (2026-06-12) : 35 questions supplementaires, chacune
  // strictement fondee sur le contenu d'une ou plusieurs fiches de lpm.ts
  // (couche detail verbatim en priorite). Liens dans lpm.qcard-map.ts.
  // ------------------------------------------------------------------------

  // base (2)
  {
    "id": "q-lpm-base-origine-dispositif",
    "refId": "lpm",
    "themeId": "base",
    "question": "Sur quelles bases le dispositif SAIV a-t-il ete construit en 2006 ?",
    "options": [
      {
        "text": "Sur les bases de l'ancien dispositif de protection des points et reseaux sensibles",
        "correct": true
      },
      {
        "text": "Ex nihilo, sans aucun dispositif anterieur",
        "correct": false
      },
      {
        "text": "Sur la base d'une directive europeenne",
        "correct": false
      },
      {
        "text": "Sur le modele du referentiel PDIS",
        "correct": false
      }
    ],
    "explanation": "Le decret n2006-212 du 23 fevrier 2006 a cree le dispositif SAIV sur les bases de l'ancien dispositif de protection des points et reseaux sensibles, qu'il a remplace.",
    "exigence": {
      "level": "obligatoire",
      "note": "decret n2006-212 du 23/02/2006"
    },
    "sources": [
      "decret-2006",
      "sgdsn-saiv"
    ]
  },
  {
    "id": "q-lpm-base-operateurs-publics-prives",
    "refId": "lpm",
    "themeId": "base",
    "question": "Le dispositif SAIV associe-t-il uniquement des operateurs publics a la strategie de securite nationale ?",
    "options": [
      {
        "text": "Non : il associe des operateurs publics ou prives",
        "correct": true
      },
      {
        "text": "Oui : seuls les operateurs publics sont concernes",
        "correct": false
      },
      {
        "text": "Non : il ne concerne que des operateurs prives",
        "correct": false
      }
    ],
    "explanation": "Le dispositif SAIV, interministeriel et pilote par le SGDSN, associe des operateurs publics ou prives a la strategie de securite nationale ; l'article L.1332-1 du code de la defense vise d'ailleurs expressement les operateurs publics ou prives.",
    "exigence": {
      "level": "obligatoire",
      "note": "decret n2006-212 ; code de la defense, L.1332-1"
    },
    "sources": [
      "decret-2006",
      "sgdsn-saiv",
      "code-defense"
    ]
  },

  // perimetre (3)
  {
    "id": "q-lpm-perimetre-criteres-secteur",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "Selon l'article R.1332-2 du code de la defense, qu'est-ce qui caracterise un secteur d'activites d'importance vitale ?",
    "options": [
      {
        "text": "Des activites concourant a un meme objectif, indispensables aux besoins essentiels des populations, a l'exercice de l'autorite de l'Etat, au fonctionnement de l'economie, au maintien du potentiel de defense ou a la securite de la Nation, ou pouvant presenter un danger grave pour la population",
        "correct": true
      },
      {
        "text": "Uniquement des activites liees a la defense nationale",
        "correct": false
      },
      {
        "text": "Les activites des entreprises depassant un seuil de chiffre d'affaires",
        "correct": false
      },
      {
        "text": "Les activites designees librement par chaque prefet de departement",
        "correct": false
      }
    ],
    "explanation": "L'article R.1332-2 definit un secteur comme un ensemble d'activites concourant a un meme objectif : production et distribution de biens ou services indispensables (besoins essentiels des populations, autorite de l'Etat, economie, potentiel de defense, securite de la Nation des lors qu'elles sont difficilement substituables), ou activites pouvant presenter un danger grave pour la population.",
    "exigence": {
      "level": "obligatoire",
      "note": "R.1332-2 ; arrete du 02/06/2006 modifie"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-perimetre-texte-liste-secteurs",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "Quel texte fixe la liste des 12 secteurs d'activites d'importance vitale ?",
    "options": [
      {
        "text": "Un arrete du Premier ministre du 2 juin 2006 modifie",
        "correct": true
      },
      {
        "text": "Le decret n2006-212 du 23 fevrier 2006",
        "correct": false
      },
      {
        "text": "L'article 22 de la LPM 2013",
        "correct": false
      },
      {
        "text": "Un reglement de la Commission europeenne",
        "correct": false
      }
    ],
    "explanation": "L'article R.1332-2 definit la notion de secteur d'activites d'importance vitale ; la liste des 12 secteurs (regroupes en 4 dominantes) est fixee par l'arrete du Premier ministre du 2 juin 2006 modifie.",
    "exigence": {
      "level": "obligatoire",
      "note": "R.1332-2 ; arrete du 02/06/2006 modifie"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-perimetre-oiv-deux-conditions",
    "refId": "lpm",
    "themeId": "perimetre",
    "question": "Outre l'exercice d'une activite d'importance vitale (R.1332-2), quelle condition l'article R.1332-1 pose-t-il pour qu'un operateur soit qualifie d'OIV ?",
    "options": [
      {
        "text": "Gerer ou utiliser des etablissements, ouvrages ou installations dont le dommage, l'indisponibilite ou la destruction par malveillance, sabotage ou terrorisme risquerait d'oberer gravement le potentiel de guerre ou economique, la securite ou la capacite de survie de la Nation, ou de mettre gravement en cause la sante ou la vie de la population",
        "correct": true
      },
      {
        "text": "Employer plus de 1000 salaries sur le territoire national",
        "correct": false
      },
      {
        "text": "Etre detenu majoritairement par l'Etat",
        "correct": false
      }
    ],
    "explanation": "L'article R.1332-1 cumule deux conditions : exercer une activite d'un secteur d'importance vitale (R.1332-2), et gerer ou utiliser des installations dont l'atteinte par malveillance, sabotage ou terrorisme aurait des consequences graves pour la Nation ou la population. Aucun critere de taille ou d'actionnariat n'entre en jeu.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-1"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-saiv"
    ]
  },

  // oiv (3)
  {
    "id": "q-lpm-oiv-etapes-designation",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "Selon l'article R.1332-3 du code de la defense, quelles etapes encadrent la designation d'un OIV ?",
    "options": [
      {
        "text": "Une concertation avec le ou les ministres interesses",
        "correct": true
      },
      {
        "text": "Un avis de la commission mentionnee a l'article R.1332-10",
        "correct": true
      },
      {
        "text": "Une notification a l'operateur, qui dispose de deux mois pour presenter ses observations",
        "correct": true
      },
      {
        "text": "Une publication de l'arrete de designation au Journal officiel",
        "correct": false
      }
    ],
    "explanation": "L'arrete du ministre coordonnateur est pris en concertation avec les ministres interesses, apres avis de la commission de l'article R.1332-10, et apres notification a l'operateur (deux mois pour presenter ses observations). Les arretes de designation ne sont ni publies ni communicables (R.1332-3).",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-3"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-oiv-notification-autorite",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "Qui notifie a l'operateur pressenti l'intention de le designer comme OIV ?",
    "options": [
      {
        "text": "Le ministre coordonnateur ou le prefet de departement, selon le cas",
        "correct": true
      },
      {
        "text": "L'ANSSI",
        "correct": false
      },
      {
        "text": "Le SGDSN",
        "correct": false
      },
      {
        "text": "La commission de l'article R.1332-10",
        "correct": false
      }
    ],
    "explanation": "Selon l'article R.1332-3, c'est le ministre coordonnateur ou le prefet de departement, selon le cas, qui notifie a l'operateur son intention de le designer comme operateur d'importance vitale.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-3"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },
  {
    "id": "q-lpm-oiv-ppp-autorite-defense",
    "refId": "lpm",
    "themeId": "oiv",
    "question": "Outre le prefet de departement, quelle autorite peut statuer sur un projet de plan particulier de protection (PPP) ?",
    "options": [
      {
        "text": "L'autorite designee par le ministre de la defense",
        "correct": true
      },
      {
        "text": "Le directeur general de l'ANSSI",
        "correct": false
      },
      {
        "text": "Le maire de la commune du point d'importance vitale",
        "correct": false
      }
    ],
    "explanation": "L'article R.1332-25 prevoit que le prefet de departement ou l'autorite designee par le ministre de la defense statue sur le projet de PPP dans un delai de six mois a compter de la reception du plan.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, R.1332-25"
    },
    "sources": [
      "code-defense-r",
      "sgdsn-plaquette"
    ]
  },

  // siiv (5)
  {
    "id": "q-lpm-siiv-mise-en-demeure",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Selon l'article L.1332-7, la sanction penale du volet cyber est en principe precedee d'une mise en demeure. Quel manquement fait exception ?",
    "options": [
      {
        "text": "Le manquement a l'article L.1332-6-2 (declaration des incidents)",
        "correct": true
      },
      {
        "text": "Le manquement a l'article L.1332-6-1 (application des regles de securite)",
        "correct": false
      },
      {
        "text": "Le manquement a l'article L.1332-6-3 (soumission aux controles)",
        "correct": false
      },
      {
        "text": "Aucun : la mise en demeure est toujours obligatoire",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-7 precise : « Hormis le cas d'un manquement a l'article L. 1332-6-2, cette sanction est precedee d'une mise en demeure. » Ne pas declarer un incident expose donc directement a l'amende, sans mise en demeure prealable.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-7"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },
  {
    "id": "q-lpm-siiv-personnes-morales",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Quelle amende les personnes morales encourent-elles en cas de manquement aux obligations des articles L.1332-6-1 a L.1332-6-4 ?",
    "options": [
      {
        "text": "750 000 euros (le quintuple de l'amende, selon l'article 131-38 du code penal)",
        "correct": true
      },
      {
        "text": "150 000 euros, comme les dirigeants",
        "correct": false
      },
      {
        "text": "2 % du chiffre d'affaires annuel mondial",
        "correct": false
      },
      {
        "text": "Aucune : seules les personnes physiques sont punissables",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-7 punit les dirigeants d'une amende de 150 000 euros ; les personnes morales encourent, selon l'article 131-38 du code penal, le quintuple, soit 750 000 euros.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-7 ; code penal, art. 131-38"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },
  {
    "id": "q-lpm-siiv-controles-acteurs",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Selon l'article L.1332-6-3, qui peut effectuer les controles des systemes d'information des OIV ?",
    "options": [
      {
        "text": "L'autorite nationale de securite des systemes d'information (ANSSI)",
        "correct": true
      },
      {
        "text": "Des services de l'Etat designes par le Premier ministre",
        "correct": true
      },
      {
        "text": "Des prestataires de service qualifies par le Premier ministre",
        "correct": true
      },
      {
        "text": "La CNIL",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-6-3 enumere trois acteurs possibles : « Les controles sont effectues par l'autorite nationale de securite des systemes d'information ou par des services de l'Etat designes par le Premier ministre ou par des prestataires de service qualifies par ce dernier. » La CNIL n'y figure pas.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-6-3"
    },
    "sources": [
      "lpm-2013",
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-siiv-incidents-perimetre",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Quels incidents les OIV doivent-ils declarer au titre de l'article L.1332-6-2 ?",
    "options": [
      {
        "text": "Les incidents affectant le fonctionnement ou la securite de leurs systemes d'information",
        "correct": true
      },
      {
        "text": "Uniquement les incidents d'origine malveillante averee",
        "correct": false
      },
      {
        "text": "Uniquement les violations de donnees personnelles",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-6-2 vise les « incidents affectant le fonctionnement ou la securite des systemes d'information » : le perimetre couvre donc aussi bien la securite que le fonctionnement, sans condition d'origine malveillante.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-6-2"
    },
    "sources": [
      "lpm-2013",
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-siiv-mise-en-oeuvre-operationnelle",
    "refId": "lpm",
    "themeId": "siiv",
    "question": "Le Premier ministre fixe les regles de securite des SI des OIV (L.1332-6-1). A qui la mise en oeuvre operationnelle est-elle deleguee ?",
    "options": [
      {
        "text": "A l'ANSSI",
        "correct": true
      },
      {
        "text": "Au SGDSN",
        "correct": false
      },
      {
        "text": "Aux prefets de departement",
        "correct": false
      },
      {
        "text": "Aux ministres coordonnateurs",
        "correct": false
      }
    ],
    "explanation": "L'article L.1332-6-1 confie au Premier ministre le pouvoir de fixer les regles de securite ; la mise en oeuvre operationnelle du volet cyber est deleguee a l'ANSSI.",
    "exigence": {
      "level": "obligatoire",
      "note": "code de la defense, L.1332-6-1"
    },
    "sources": [
      "lpm-2013",
      "code-defense"
    ]
  },

  // regles (5)
  {
    "id": "q-lpm-regles-calendrier-arretes",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Quels secteurs ont fait l'objet des premiers arretes sectoriels SIIV, publies en juillet 2016 ?",
    "options": [
      {
        "text": "Sante, gestion de l'eau et alimentation",
        "correct": true
      },
      {
        "text": "Espace et armement",
        "correct": false
      },
      {
        "text": "Energie et transports",
        "correct": false
      }
    ],
    "explanation": "Les arretes sectoriels ont ete publies progressivement de juillet 2016 (sante, eau, alimentation) a octobre 2017 (espace, armement).",
    "exigence": {
      "level": "obligatoire",
      "note": "arretes sectoriels (2016-2017)"
    },
    "sources": [
      "cyber-siiv-faq",
      "cyber-saiv"
    ]
  },
  {
    "id": "q-lpm-regles-homogeneite",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Les exigences des arretes sectoriels SIIV varient-elles fortement d'un secteur a l'autre ?",
    "options": [
      {
        "text": "Non : elles sont globalement homogenes d'un secteur a l'autre, avec des adaptations",
        "correct": true
      },
      {
        "text": "Oui : chaque secteur a un jeu de regles radicalement different",
        "correct": false
      },
      {
        "text": "Oui : seuls certains secteurs ont des regles de securite",
        "correct": false
      }
    ],
    "explanation": "Le volet cyber de la LPM est decline par un arrete par secteur, mais les exigences sont globalement homogenes d'un secteur a l'autre, avec des adaptations.",
    "exigence": {
      "level": "obligatoire",
      "note": "arretes sectoriels (2016-2017)"
    },
    "sources": [
      "cyber-siiv-faq",
      "cyber-saiv"
    ]
  },
  {
    "id": "q-lpm-regles-annexe-20",
    "refId": "lpm",
    "themeId": "regles",
    "question": "Combien de regles de securite l'annexe des arretes sectoriels impose-t-elle aux SIIV ?",
    "options": [
      {
        "text": "20 regles, avec la meme annexe d'un arrete sectoriel a l'autre",
        "correct": true
      },
      {
        "text": "10 regles propres a chaque secteur",
        "correct": false
      },
      {
        "text": "70 recommandations non contraignantes",
        "correct": false
      }
    ],
    "explanation": "Chaque secteur a son propre arrete (ex. arrete du 28 novembre 2016 pour le secteur Finances), mais l'annexe de 20 regles de securite est commune ; toutes sont obligatoires pour un SIIV.",
    "exigence": {
      "level": "obligatoire",
      "note": "arretes sectoriels ; annexe commune de 20 regles"
    },
    "sources": [
      "arrete-2016",
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-regles-pdis-base-legale",
    "refId": "lpm",
    "themeId": "regles",
    "question": "De quel texte decoule le referentiel PDIS (prestataires de detection des incidents de securite) ?",
    "options": [
      {
        "text": "De l'article 10 du decret n2015-350 du 27 mars 2015",
        "correct": true
      },
      {
        "text": "De l'arrete du 28 novembre 2016",
        "correct": false
      },
      {
        "text": "De l'article 22 de la LPM 2013",
        "correct": false
      },
      {
        "text": "De la directive NIS2",
        "correct": false
      }
    ],
    "explanation": "Le referentiel PDIS, sur lequel s'appuie l'exploitation du systeme de correlation et d'analyse des journaux, decoule de l'article 10 du decret n2015-350 du 27 mars 2015.",
    "exigence": {
      "level": "obligatoire",
      "note": "ANSSI ; referentiel PDIS (decret 2015-350, art. 10)"
    },
    "sources": [
      "cyber-saiv",
      "pdis"
    ]
  },
  {
    "id": "q-lpm-regles-perimetre-application",
    "refId": "lpm",
    "themeId": "regles",
    "question": "A quels systemes d'information d'un OIV les regles de securite du volet cyber de la LPM s'appliquent-elles ?",
    "options": [
      {
        "text": "Aux seuls SIIV identifies par l'operateur",
        "correct": true
      },
      {
        "text": "A tous les systemes d'information de l'operateur sans exception",
        "correct": false
      },
      {
        "text": "Aux seuls systemes heberges en interne",
        "correct": false
      }
    ],
    "explanation": "Selon l'ANSSI (FAQ SIIV), l'OIV identifie ses SIIV par analyse d'impact, et les regles de securite ne s'appliquent qu'a ce perimetre identifie, pas a l'ensemble de son systeme d'information.",
    "exigence": {
      "level": "obligatoire",
      "note": "ANSSI, FAQ SIIV"
    },
    "sources": [
      "cyber-siiv-faq",
      "cyber-saiv"
    ]
  },

  // regles20 (15)
  {
    "id": "q-lpm-regles20-pssi-verbe",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Selon la regle 1 de l'arrete du 28/11/2016, que doit faire l'OIV concernant sa politique de securite des systemes d'information (PSSI) ?",
    "options": [
      {
        "text": "L'elaborer",
        "correct": true
      },
      {
        "text": "La tenir a jour",
        "correct": true
      },
      {
        "text": "La mettre en oeuvre",
        "correct": true
      },
      {
        "text": "La faire certifier par un laboratoire agree",
        "correct": false
      }
    ],
    "explanation": "Regle 1 (arrete du 28/11/2016) : « L'operateur d'importance vitale elabore, tient a jour et met en oeuvre une politique de securite des systemes d'information (PSSI). » Aucune certification par un laboratoire n'est exigee.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle politique de securite"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-homologation-procedure",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Selon quelle procedure l'OIV mene-t-il l'homologation de securite de chaque SIIV (regle 2) ?",
    "options": [
      {
        "text": "La procedure d'homologation prevue par sa propre PSSI",
        "correct": true
      },
      {
        "text": "Une procedure fixee au cas par cas par l'ANSSI",
        "correct": false
      },
      {
        "text": "La procedure d'approbation des PPP par le prefet",
        "correct": false
      }
    ],
    "explanation": "Regle 2 (arrete du 28/11/2016) : l'operateur procede a l'homologation de chaque SIIV « en mettant en oeuvre la procedure d'homologation prevue par sa politique de securite des systemes d'information (PSSI) » : la regle 2 s'appuie donc directement sur la regle 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle homologation"
    },
    "sources": [
      "arrete-2016",
      "cyber-siiv-faq"
    ]
  },
  {
    "id": "q-lpm-regles20-carto-destinataire",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "A qui l'OIV doit-il etre en mesure de fournir les elements de cartographie de chaque SIIV (regle 3) ?",
    "options": [
      {
        "text": "A l'Agence nationale de la securite des systemes d'information (ANSSI)",
        "correct": true
      },
      {
        "text": "Au prefet de departement",
        "correct": false
      },
      {
        "text": "A la commission de l'article R.1332-10",
        "correct": false
      },
      {
        "text": "Au public, via une publication en ligne",
        "correct": false
      }
    ],
    "explanation": "Regle 3 (arrete du 28/11/2016) : l'operateur « doit etre en mesure de fournir a l'Agence nationale de la securite des systemes d'information, pour chaque systeme d'information d'importance vitale (SIIV), les elements de cartographie » listes par l'annexe.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle cartographie"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-mcs-ressources",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que couvre la procedure de maintien en conditions de securite exigee par la regle 4 ?",
    "options": [
      {
        "text": "Les ressources materielles et logicielles des SIIV",
        "correct": true
      },
      {
        "text": "Uniquement les logiciels",
        "correct": false
      },
      {
        "text": "Uniquement les equipements reseau",
        "correct": false
      }
    ],
    "explanation": "Regle 4 (arrete du 28/11/2016) : la procedure de maintien en conditions de securite porte sur « les ressources materielles et logicielles » des SIIV, conformement a la PSSI : le materiel comme le logiciel sont couverts.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle MCS"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-journal-evenements",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Quels evenements le systeme de journalisation impose par la regle 5 doit-il enregistrer ?",
    "options": [
      {
        "text": "L'authentification des utilisateurs",
        "correct": true
      },
      {
        "text": "La gestion des comptes et des droits d'acces, et l'acces aux ressources",
        "correct": true
      },
      {
        "text": "Les modifications des regles de securite du SIIV et le fonctionnement du SIIV",
        "correct": true
      },
      {
        "text": "La navigation web personnelle des employes sur leur poste bureautique",
        "correct": false
      }
    ],
    "explanation": "Regle 5 (arrete du 28/11/2016) : le systeme de journalisation enregistre les evenements relatifs « a l'authentification des utilisateurs, a la gestion des comptes et des droits d'acces, a l'acces aux ressources, aux modifications des regles de securite du SIIV ainsi qu'au fonctionnement du SIIV ».",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle journalisation"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-correlation-finalite",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Quelle est la finalite du systeme de correlation et d'analyse de journaux impose par la regle 6 ?",
    "options": [
      {
        "text": "Detecter des evenements susceptibles d'affecter la securite des SIIV, en exploitant les evenements enregistres par la journalisation",
        "correct": true
      },
      {
        "text": "Mesurer la performance des applications metier",
        "correct": false
      },
      {
        "text": "Archiver les journaux a des fins comptables",
        "correct": false
      }
    ],
    "explanation": "Regle 6 (arrete du 28/11/2016) : le systeme de correlation et d'analyse « exploite les evenements enregistres par le systeme de journalisation [...] afin de detecter des evenements susceptibles d'affecter la securite des SIIV ».",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle correlation et analyse ; PDIS"
    },
    "sources": [
      "arrete-2016",
      "pdis"
    ]
  },
  {
    "id": "q-lpm-regles20-detection-base",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "En application de quel article du code de la defense la regle 7 impose-t-elle un systeme de detection qualifie ?",
    "options": [
      {
        "text": "L'article R.1332-41-3",
        "correct": true
      },
      {
        "text": "L'article R.1332-25",
        "correct": false
      },
      {
        "text": "L'article L.1332-7",
        "correct": false
      },
      {
        "text": "L'article R.1332-3",
        "correct": false
      }
    ],
    "explanation": "Regle 7 (arrete du 28/11/2016) : l'operateur met en oeuvre, « en application de l'article R. 1332-41-3 du code de la defense, un systeme de detection qualifie de type sonde d'analyse de fichiers et de protocoles ». R.1332-25 concerne les PPP et R.1332-3 la designation des OIV.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle detection ; R.1332-41-3"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-alertes-permanence",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Quel moyen concret la regle 9 impose-t-elle pour le traitement des alertes ?",
    "options": [
      {
        "text": "Un service de permanence permettant de prendre connaissance, a tout moment et sans delai, des informations transmises par l'ANSSI (incidents, vulnerabilites, menaces)",
        "correct": true
      },
      {
        "text": "Une boite de messagerie relevee une fois par semaine",
        "correct": false
      },
      {
        "text": "Un abonnement facultatif a des bulletins de securite",
        "correct": false
      }
    ],
    "explanation": "Regle 9 (arrete du 28/11/2016) : l'operateur « met en place un service de permanence lui permettant de prendre connaissance, a tout moment et sans delai, d'informations transmises par l'Agence nationale de la securite des systemes d'information relatives a des incidents, des vulnerabilites et des menaces ».",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle traitement des alertes"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-crise-perimetre",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Dans quelles situations la procedure de gestion de crises exigee par la regle 10 s'applique-t-elle ?",
    "options": [
      {
        "text": "En cas d'attaques informatiques majeures",
        "correct": true
      },
      {
        "text": "Pour tout incident, meme mineur",
        "correct": false
      },
      {
        "text": "Uniquement en cas de catastrophe naturelle",
        "correct": false
      }
    ],
    "explanation": "Regle 10 (arrete du 28/11/2016) : l'operateur « elabore, tient a jour et met en oeuvre une procedure de gestion de crises en cas d'attaques informatiques majeures », conformement a sa PSSI ; les incidents courants relevent de la regle 8.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle gestion de crise"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-processus-automatiques",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Les processus automatiques accedant aux ressources d'un SIIV sont-ils concernes par les regles d'identification et d'authentification (regles 11 et 12) ?",
    "options": [
      {
        "text": "Oui : comptes individuels (regle 11) et authentification par un element secret (regle 12), comme pour les utilisateurs",
        "correct": true
      },
      {
        "text": "Non : seuls les utilisateurs humains sont vises",
        "correct": false
      },
      {
        "text": "Oui pour l'identification, mais l'authentification ne vise que les utilisateurs humains",
        "correct": false
      }
    ],
    "explanation": "La regle 11 impose des comptes individuels « pour les utilisateurs et pour les processus automatiques accedant aux ressources » des SIIV, et la regle 12 protege les acces « que ce soit par un utilisateur ou par un processus automatique » au moyen d'un mecanisme d'authentification base sur un element secret (arrete du 28/11/2016).",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regles identification et authentification"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-admin-operations",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Quelles operations relevent de l'administration au sens de la regle 14 (comptes d'administration) ?",
    "options": [
      {
        "text": "L'installation et la configuration",
        "correct": true
      },
      {
        "text": "La gestion et la maintenance",
        "correct": true
      },
      {
        "text": "La supervision",
        "correct": true
      },
      {
        "text": "La simple consultation bureautique",
        "correct": false
      }
    ],
    "explanation": "Regle 14 (arrete du 28/11/2016) : les comptes d'administration sont destines aux seules personnes (administrateurs) chargees des operations d'administration, c'est-a-dire « installation, configuration, gestion, maintenance, supervision, etc. » des ressources des SIIV.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle comptes d'administration"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-cloisonnement-objectif",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Quel objectif la regle 16 assigne-t-elle au cloisonnement des SIIV ?",
    "options": [
      {
        "text": "Limiter la propagation des attaques informatiques au sein des systemes ou des sous-systemes",
        "correct": true
      },
      {
        "text": "Reduire les couts d'hebergement des systemes",
        "correct": false
      },
      {
        "text": "Faciliter le teletravail des administrateurs",
        "correct": false
      }
    ],
    "explanation": "Regle 16 (arrete du 28/11/2016) : l'operateur « procede au cloisonnement de ses systemes d'information d'importance vitale (SIIV) afin de limiter la propagation des attaques informatiques au sein de ses systemes ou ses sous-systemes ».",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle cloisonnement"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-filtrage-flux",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Quels flux les mecanismes de filtrage imposes par la regle 17 visent-ils a bloquer ?",
    "options": [
      {
        "text": "Les flux inutiles au fonctionnement des systemes et susceptibles de faciliter des attaques informatiques",
        "correct": true
      },
      {
        "text": "Tous les flux entrants, sans exception",
        "correct": false
      },
      {
        "text": "Uniquement les flux chiffres",
        "correct": false
      }
    ],
    "explanation": "Regle 17 (arrete du 28/11/2016) : le filtrage vise a « bloquer la circulation des flux inutiles au fonctionnement de ses systemes et susceptibles de faciliter des attaques informatiques » ; il ne s'agit pas de tout bloquer, mais de ne laisser passer que le necessaire.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle filtrage"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-reseaux-tiers",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "Que vise precisement la regle 18 sur les acces a distance ?",
    "options": [
      {
        "text": "La protection des acces aux SIIV effectues a travers des reseaux tiers",
        "correct": true
      },
      {
        "text": "L'interdiction totale de tout acces a distance aux SIIV",
        "correct": false
      },
      {
        "text": "Les seuls acces physiques aux salles hebergeant les SIIV",
        "correct": false
      }
    ],
    "explanation": "Regle 18 (arrete du 28/11/2016) : « L'operateur d'importance vitale protege les acces a ses systemes d'information d'importance vitale (SIIV) effectues a travers des reseaux tiers. » Les acces a distance ne sont pas interdits, ils doivent etre proteges.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle acces a distance"
    },
    "sources": [
      "arrete-2016"
    ]
  },
  {
    "id": "q-lpm-regles20-indicateurs-granularite",
    "refId": "lpm",
    "themeId": "regles20",
    "question": "A quelle granularite l'operateur evalue-t-il les indicateurs exiges par la regle 20 ?",
    "options": [
      {
        "text": "Pour chaque SIIV",
        "correct": true
      },
      {
        "text": "Globalement, pour l'ensemble de l'operateur, sans distinction",
        "correct": false
      },
      {
        "text": "Uniquement pour les SIIV juges les plus critiques",
        "correct": false
      }
    ],
    "explanation": "Regle 20 (arrete du 28/11/2016) : l'operateur « evalue, pour chaque systeme d'information d'importance vitale (SIIV), les indicateurs » listes par l'annexe : l'evaluation se fait SIIV par SIIV.",
    "exigence": {
      "level": "obligatoire",
      "note": "arrete du 28/11/2016, regle indicateurs"
    },
    "sources": [
      "arrete-2016"
    ]
  },

  // cadre (2)
  {
    "id": "q-lpm-cadre-articulation-statut",
    "refId": "lpm",
    "themeId": "cadre",
    "question": "Selon la fiche, comment OIV/SIIV s'articulent-ils precisement avec les entites essentielles et importantes (EE/EI) de NIS2 ?",
    "options": [
      {
        "text": "Ce point n'est pas etabli (superposition, cumul d'obligations, bascule) : il est a verifier sur une source officielle (cyber.gouv.fr, Legifrance)",
        "correct": true
      },
      {
        "text": "Tous les OIV deviennent automatiquement des entites essentielles et la notion de SIIV disparait",
        "correct": false
      },
      {
        "text": "Les EE/EI remplacent les OIV dans le code de la defense des 2026",
        "correct": false
      }
    ],
    "explanation": "La fiche signale explicitement que la maniere dont OIV/SIIV s'articulent avec EE/EI (superposition, cumul d'obligations, bascule) n'est pas etablie par une source verifiee : c'est un point a verifier avant tout usage en revision. Seule certitude : le regime SAIV/LPM reste en vigueur en 2026.",
    "exigence": {
      "level": "conseille",
      "note": "a verifier ; statut NIS2 non etabli ici"
    },
    "sources": [
      "cyber-nis2"
    ]
  },
  {
    "id": "q-lpm-cadre-socle-reference",
    "refId": "lpm",
    "themeId": "cadre",
    "question": "Tant que l'impact de la loi de resilience (transposition CER et NIS2) n'est pas confirme, quel cadre fait reference pour les OIV/SIIV selon la fiche ?",
    "options": [
      {
        "text": "Le socle SAIV/LPM decrit ici (etat 2013-2015, en vigueur en 2026)",
        "correct": true
      },
      {
        "text": "Plus aucun cadre : le dispositif est suspendu dans l'attente",
        "correct": false
      },
      {
        "text": "Directement la directive NIS2, d'application immediate",
        "correct": false
      }
    ],
    "explanation": "La fiche precise que tant que l'etat d'avancement de la loi de resilience et ses decrets d'application ne sont pas confirmes, le socle decrit (etat 2013-2015, en vigueur en 2026) fait reference.",
    "exigence": {
      "level": "conseille",
      "note": "a surveiller ; evolution reglementaire en cours"
    },
    "sources": [
      "cyber-nis2",
      "cyber-saiv"
    ]
  }
];
