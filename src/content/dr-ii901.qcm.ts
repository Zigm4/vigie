// QCM DR / II 901 (corpus etendu, genere puis valide).
//
// Chaque question est sourcee (IGI 1300, II 901, guide PG-075, reco cloud 2024)
// et porte son niveau d'exigence selon la formulation du texte (principe non
// dogmatique). Genere par fan-out multi-agents (un agent par theme a partir du
// texte exact des recommandations), puis dedoublonne et valide.
//
// Pour ajouter/corriger : editer ce fichier directement (un objet par question).

import type { QcmQuestion } from "../types.ts";

export const drQcm: QcmQuestion[] = [
  {
    "id": "q-notions-dr-mention-vs-timbre",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Le 'Diffusion Restreinte' (DR) constitue-t-il un timbre de classification ?",
    "options": [
      {
        "text": "Non, le DR est une mention de protection, pas un timbre de classification",
        "correct": true
      },
      {
        "text": "Oui, le DR est le timbre de classification de niveau le plus bas",
        "correct": false
      },
      {
        "text": "Oui, le DR est devenu un timbre depuis l'IGI 1300 de 2021",
        "correct": false
      }
    ],
    "explanation": "Le DR est une mention de protection et non un timbre de classification (IGI 1300 §1.3.2).",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 §1.3.2"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-nombre-timbres-2021",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Depuis l'IGI 1300 version 2021, combien de timbres de classification existent ?",
    "options": [
      {
        "text": "Deux : Secret et Tres Secret",
        "correct": true
      },
      {
        "text": "Trois : Confidentiel Defense, Secret Defense et Tres Secret Defense",
        "correct": false
      },
      {
        "text": "Un seul : Secret",
        "correct": false
      },
      {
        "text": "Quatre, dont le Diffusion Restreinte",
        "correct": false
      }
    ],
    "explanation": "Depuis l'IGI 1300 v2021, il n'existe plus que deux timbres : Secret et Tres Secret.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 (v2021)"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-confidentiel-defense-supprime",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Le timbre 'Confidentiel Defense' existe-t-il toujours ?",
    "options": [
      {
        "text": "Non, il n'existe plus depuis l'IGI 1300 version 2021",
        "correct": true
      },
      {
        "text": "Oui, il reste le timbre intermediaire entre DR et Secret",
        "correct": false
      },
      {
        "text": "Oui, il a ete renomme en Diffusion Restreinte",
        "correct": false
      }
    ],
    "explanation": "Le timbre 'Confidentiel Defense' n'existe plus depuis l'IGI 1300 v2021, qui ne conserve que Secret et Tres Secret.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 (v2021)"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-objet-protection-dr",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Que protege la mention Diffusion Restreinte ?",
    "options": [
      {
        "text": "Des informations qu'il n'y a pas lieu de classifier mais qui restent sensibles",
        "correct": true
      },
      {
        "text": "Le secret de la defense nationale au sens strict",
        "correct": false
      },
      {
        "text": "Uniquement des donnees a caractere personnel",
        "correct": false
      }
    ],
    "explanation": "Le DR protege des informations qu'il n'y a pas lieu de classifier mais qui sont sensibles.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-secret-autre-l311-5",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Le DR vise l'atteinte a quel type de secret au sens de l'article L.311-5 2° du CRPA ?",
    "options": [
      {
        "text": "Un secret AUTRE que le secret de la defense nationale",
        "correct": true
      },
      {
        "text": "Le secret de la defense nationale lui-meme",
        "correct": false
      },
      {
        "text": "Exclusivement le secret medical",
        "correct": false
      }
    ],
    "explanation": "Le DR concerne l'atteinte a un secret autre que le secret de la defense nationale (art. L.311-5 2° du CRPA).",
    "exigence": {
      "level": "obligatoire",
      "note": "CRPA art. L.311-5 2°"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-besoin-en-connaitre",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "A qui une information DR doit-elle etre communiquee ?",
    "options": [
      {
        "text": "Aux seules personnes ayant besoin d'en connaitre",
        "correct": true
      },
      {
        "text": "A toute personne habilitee, quel que soit son besoin",
        "correct": false
      },
      {
        "text": "A l'ensemble des agents du service par defaut",
        "correct": false
      }
    ],
    "explanation": "L'objectif du DR impose la communication aux seules personnes ayant besoin d'en connaitre.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-objectif-discretion",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Quel est l'objectif principal de la mention DR ?",
    "options": [
      {
        "text": "Sensibiliser a la discretion et restreindre la communication",
        "correct": true
      },
      {
        "text": "Conferer le meme regime que le timbre Secret",
        "correct": false
      },
      {
        "text": "Interdire toute communication de l'information",
        "correct": false
      }
    ],
    "explanation": "L'objectif du DR est de sensibiliser a la discretion et de restreindre la diffusion aux personnes ayant besoin d'en connaitre.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-refus-communication",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "La mention DR suffit-elle, a elle seule, a refuser la communication d'un document ?",
    "options": [
      {
        "text": "Non, elle ne constitue pas a elle seule un motif de refus de communication",
        "correct": true
      },
      {
        "text": "Oui, elle justifie automatiquement un refus de communication",
        "correct": false
      },
      {
        "text": "Oui, sauf decision contraire du demandeur",
        "correct": false
      }
    ],
    "explanation": "La mention DR ne constitue pas, a elle seule, un motif de refus de communication (CRPA / code du patrimoine).",
    "exigence": {
      "level": "obligatoire",
      "note": "CRPA / code du patrimoine"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-special-france",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Qu'est-ce que la mention 'Special France' ?",
    "options": [
      {
        "text": "Une mention complementaire, soumise a l'IGI 1300",
        "correct": true
      },
      {
        "text": "Un nouveau timbre de classification cree en 2021",
        "correct": false
      },
      {
        "text": "Un synonyme officiel de Diffusion Restreinte",
        "correct": false
      }
    ],
    "explanation": "'Special France' est une mention complementaire soumise a l'IGI 1300.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-engagement-non-divulgation",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Quel est le niveau d'exigence concernant la signature d'un engagement de non-divulgation pour le DR ?",
    "options": [
      {
        "text": "Il est recommande de faire signer un engagement de non-divulgation",
        "correct": true
      },
      {
        "text": "Il est obligatoire et conditionne tout acces",
        "correct": false
      },
      {
        "text": "Il est interdit pour les informations DR",
        "correct": false
      }
    ],
    "explanation": "Il est recommande de faire signer un engagement de non-divulgation (Annexe 1 §1).",
    "exigence": {
      "level": "recommande",
      "note": "IGI 1300 Annexe 1 §1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-notions-mesures-annexe1",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Ou sont definies les mesures de protection applicables aux informations DR ?",
    "options": [
      {
        "text": "Dans l'Annexe 1 de l'IGI 1300",
        "correct": true
      },
      {
        "text": "Dans l'article L.311-5 du CRPA",
        "correct": false
      },
      {
        "text": "Dans le code du patrimoine uniquement",
        "correct": false
      }
    ],
    "explanation": "Les mesures de protection des informations DR sont definies a l'Annexe 1 de l'IGI 1300.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-notions-vf-dr-est-classification",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Vrai ou faux : classer une information en DR revient a la classifier au sens du secret de la defense nationale.",
    "options": [
      {
        "text": "Faux : le DR est une mention de protection, distincte de la classification",
        "correct": true
      },
      {
        "text": "Vrai : le DR est le premier niveau de classification",
        "correct": false
      }
    ],
    "explanation": "Le DR est une mention de protection et non un timbre de classification (IGI 1300 §1.3.2) ; il vise un secret autre que le secret de la defense nationale.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 §1.3.2"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-cas-document-demande-cada",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Un administre demande communication d'un document portant la mention DR. Que peut-on en deduire ?",
    "options": [
      {
        "text": "La mention DR seule ne permet pas de refuser ; il faut un autre motif legal",
        "correct": true
      },
      {
        "text": "Le refus est automatique du fait de la mention DR",
        "correct": false
      },
      {
        "text": "Le document devient communicable a tout demandeur sans condition",
        "correct": false
      }
    ],
    "explanation": "La mention DR ne constitue pas a elle seule un motif de refus de communication (CRPA / code du patrimoine) ; un autre fondement est necessaire.",
    "exigence": {
      "level": "obligatoire",
      "note": "CRPA / code du patrimoine"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-timbres-restants",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Parmi les mentions suivantes, lesquelles sont des timbres de classification actuels ?",
    "options": [
      {
        "text": "Secret",
        "correct": true
      },
      {
        "text": "Tres Secret",
        "correct": true
      },
      {
        "text": "Diffusion Restreinte",
        "correct": false
      },
      {
        "text": "Confidentiel Defense",
        "correct": false
      }
    ],
    "explanation": "Depuis l'IGI 1300 v2021, seuls Secret et Tres Secret sont des timbres ; le DR est une mention et Confidentiel Defense n'existe plus.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 (v2021), §1.3.2"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-special-france-regime",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "La mention complementaire 'Special France' echappe-t-elle aux regles de l'IGI 1300 ?",
    "options": [
      {
        "text": "Non, elle est soumise a l'IGI 1300",
        "correct": true
      },
      {
        "text": "Oui, elle releve d'un texte autonome distinct de l'IGI 1300",
        "correct": false
      }
    ],
    "explanation": "'Special France' est une mention complementaire soumise a l'IGI 1300.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-vf-engagement-obligatoire",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Vrai ou faux : faire signer un engagement de non-divulgation pour le DR est une obligation imperative.",
    "options": [
      {
        "text": "Faux : c'est recommande, non impose comme obligation",
        "correct": true
      },
      {
        "text": "Vrai : aucun acces n'est possible sans cet engagement signe",
        "correct": false
      }
    ],
    "explanation": "L'Annexe 1 §1 recommande la signature d'un engagement de non-divulgation ; le niveau d'exigence est 'recommande' et non 'obligatoire'.",
    "exigence": {
      "level": "recommande",
      "note": "IGI 1300 Annexe 1 §1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-notions-nature-info-protegee",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Une information relevant du DR est par definition :",
    "options": [
      {
        "text": "Sensible mais n'ayant pas lieu d'etre classifiee",
        "correct": true
      },
      {
        "text": "Couverte par le secret de la defense nationale",
        "correct": false
      },
      {
        "text": "Sans aucun caractere sensible",
        "correct": false
      }
    ],
    "explanation": "Le DR vise des informations qu'il n'y a pas lieu de classifier mais qui restent sensibles.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 ; CRPA art. L.311-5 2°"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-secret-defense-nationale-distinction",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Le DR couvre-t-il le secret de la defense nationale ?",
    "options": [
      {
        "text": "Non, il vise un secret autre que le secret de la defense nationale",
        "correct": true
      },
      {
        "text": "Oui, il en est l'un des trois niveaux",
        "correct": false
      },
      {
        "text": "Oui, mais uniquement en periode de crise",
        "correct": false
      }
    ],
    "explanation": "Le DR concerne l'atteinte a un secret autre que le secret de la defense nationale (art. L.311-5 2° du CRPA) ; le secret de la defense nationale releve des timbres Secret et Tres Secret.",
    "exigence": {
      "level": "obligatoire",
      "note": "CRPA art. L.311-5 2° ; IGI 1300"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-fondement-juridique-l311-5",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Quel texte fonde la notion d'atteinte a un secret autre que le secret de la defense nationale pour le DR ?",
    "options": [
      {
        "text": "L'article L.311-5 2° du CRPA",
        "correct": true
      },
      {
        "text": "L'article L.311-5 du code du patrimoine",
        "correct": false
      },
      {
        "text": "L'IGI 1300 Annexe 2",
        "correct": false
      }
    ],
    "explanation": "Le fondement est l'article L.311-5 2° du CRPA, qui vise un secret autre que le secret de la defense nationale.",
    "exigence": {
      "level": "obligatoire",
      "note": "CRPA art. L.311-5 2°"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-notions-idee-recue-cd-renomme",
    "refId": "dr-ii901",
    "themeId": "notions",
    "question": "Idee recue : 'Le DR est l'ancien Confidentiel Defense renomme.' Est-ce exact ?",
    "options": [
      {
        "text": "Non : Confidentiel Defense a ete supprime et le DR n'est pas un timbre",
        "correct": true
      },
      {
        "text": "Oui : le DR est exactement l'ancien Confidentiel Defense sous un nouveau nom",
        "correct": false
      }
    ],
    "explanation": "Le Confidentiel Defense n'existe plus depuis l'IGI 1300 v2021, et le DR est une mention de protection (IGI 1300 §1.3.2), non un timbre de classification.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 §1.3.2 (v2021)"
    },
    "sources": [
      "igi1300"
    ]
  },
  {
    "id": "q-textes-igi1300-role",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Quel texte definit la mention Diffusion Restreinte (DR) et les regles de protection de l'information correspondante ?",
    "options": [
      {
        "text": "L'IGI 1300 (notamment son Annexe 1)",
        "correct": true
      },
      {
        "text": "L'II 901",
        "correct": false
      },
      {
        "text": "La PG-075",
        "correct": false
      },
      {
        "text": "Le recueil cloud 2024",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 definit la mention DR et la protection de l'information dans son Annexe 1, alors que l'II 901 regit la protection des SI traitant du DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1"
    },
    "sources": [
      "igi1300",
      "igi1300-an1"
    ]
  },
  {
    "id": "q-textes-ii901-objet",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Quel est l'objet principal de l'II 901 ?",
    "options": [
      {
        "text": "Regir la protection des systemes d'information traitant du DR",
        "correct": true
      },
      {
        "text": "Definir la mention DR et la protection de l'information papier",
        "correct": false
      },
      {
        "text": "Encadrer le secret de la defense nationale",
        "correct": false
      }
    ],
    "explanation": "L'II 901 regit la protection des SI traitant du DR ; la definition de la mention DR releve de l'IGI 1300 Annexe 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-textes-igi901-synonyme",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Que designe l'appellation 'IGI 901' ?",
    "options": [
      {
        "text": "Le meme texte que l'II 901",
        "correct": true
      },
      {
        "text": "Une annexe specifique de l'IGI 1300",
        "correct": false
      },
      {
        "text": "Un texte distinct dedie au secret de la defense nationale",
        "correct": false
      }
    ],
    "explanation": "'IGI 901' designe le meme texte que l'II 901.",
    "exigence": {
      "level": "usage",
      "note": "II 901"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-textes-perimetre-admin-sensibles",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Pour les administrations de l'Etat, quel type de SI relevent du perimetre de l'II 901 ?",
    "options": [
      {
        "text": "Les SI sensibles",
        "correct": true
      },
      {
        "text": "Uniquement les SI classifies secret defense",
        "correct": false
      },
      {
        "text": "Aucun SI",
        "correct": false
      }
    ],
    "explanation": "Le perimetre de l'II 901 couvre les administrations de l'Etat pour leurs SI sensibles.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 (perimetre)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-textes-perimetre-personne-morale",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Quelles entites entrent dans le perimetre de l'II 901 ? (plusieurs reponses possibles)",
    "options": [
      {
        "text": "Toute personne morale exploitant un SI DR",
        "correct": true
      },
      {
        "text": "Les entites PPST",
        "correct": true
      },
      {
        "text": "Les administrations de l'Etat pour leurs SI sensibles",
        "correct": true
      },
      {
        "text": "Uniquement les services traitant du secret de la defense nationale",
        "correct": false
      }
    ],
    "explanation": "Le perimetre de l'II 901 comprend les administrations de l'Etat (SI sensibles), toute personne morale exploitant un SI DR et les entites PPST.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 (perimetre)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-textes-perimetre-ue-otan",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Le perimetre de l'II 901 s'etend-il a des mentions internationales ?",
    "options": [
      {
        "text": "Oui, au Restreint UE et au Restreint OTAN",
        "correct": true
      },
      {
        "text": "Non, il est strictement national",
        "correct": false
      },
      {
        "text": "Oui, mais uniquement au Restreint OTAN",
        "correct": false
      }
    ],
    "explanation": "Le perimetre de l'II 901 s'etend a Restreint UE et a Restreint OTAN.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 (perimetre)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-textes-perimetre-exclusion-sdn",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Vrai ou faux : l'II 901 concerne le secret de la defense nationale.",
    "options": [
      {
        "text": "Faux, l'II 901 ne concerne PAS le secret de la defense nationale",
        "correct": true
      },
      {
        "text": "Vrai, l'II 901 couvre aussi le secret de la defense nationale",
        "correct": false
      }
    ],
    "explanation": "Le perimetre de l'II 901 ne concerne pas le secret de la defense nationale.",
    "exigence": {
      "level": "interdit",
      "note": "II 901 (perimetre)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-textes-apposition-services-etat",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Selon l'IGI 1300 Annexe 1, qui peut apposer la mention DR et y acceder ? (plusieurs reponses possibles)",
    "options": [
      {
        "text": "Les services de l'Etat",
        "correct": true
      },
      {
        "text": "Les etablissements publics sous tutelle",
        "correct": true
      },
      {
        "text": "Les OIV dont le ministre est coordonnateur",
        "correct": true
      },
      {
        "text": "Toute personne, sans condition de rattachement",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §1 vise les services de l'Etat, les etablissements publics sous tutelle et les OIV dont le ministre est coordonnateur.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-textes-apposition-collectivites-contrat",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Une personne morale privee liee par contrat peut-elle apposer la mention DR et y acceder ?",
    "options": [
      {
        "text": "Oui, les collectivites et personnes morales liees par convention ou contrat, ainsi que leurs sous-traitants",
        "correct": true
      },
      {
        "text": "Non, seules les administrations de l'Etat le peuvent",
        "correct": false
      },
      {
        "text": "Oui, mais leurs sous-traitants en sont exclus",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §1 inclut les collectivites et personnes morales liees par convention ou contrat ainsi que leurs sous-traitants.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-textes-besoin-en-connaitre",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Quelle condition est requise pour les personnels souhaitant acceder a une information DR ?",
    "options": [
      {
        "text": "Avoir le besoin d'en connaitre",
        "correct": true
      },
      {
        "text": "Detenir une habilitation au secret de la defense nationale",
        "correct": false
      },
      {
        "text": "Etre fonctionnaire de l'Etat",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §1 vise les personnels ayant besoin d'en connaitre.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-textes-signataire-apprecie",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Qui apprecie la sensibilite d'une information justifiant l'apposition de la mention DR ?",
    "options": [
      {
        "text": "Le signataire, qui l'apprecie lui-meme",
        "correct": true
      },
      {
        "text": "L'ANSSI, sur demande prealable",
        "correct": false
      },
      {
        "text": "Le ministre coordonnateur",
        "correct": false
      }
    ],
    "explanation": "Selon l'IGI 1300 Annexe 1 §1, le signataire apprecie lui-meme la sensibilite de l'information.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-textes-piege-dr-vs-classifie",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Idee recue : la mention DR est un niveau de classification du secret de la defense nationale. Qu'en est-il ?",
    "options": [
      {
        "text": "Faux : le DR releve de l'IGI 1300/II 901 et l'II 901 ne concerne pas le secret de la defense nationale",
        "correct": true
      },
      {
        "text": "Vrai : le DR est le premier niveau du secret de la defense nationale",
        "correct": false
      }
    ],
    "explanation": "Le DR est defini par l'IGI 1300 et la protection des SI DR par l'II 901, dont le perimetre exclut le secret de la defense nationale.",
    "exigence": {
      "level": "interdit",
      "note": "II 901 (perimetre)"
    },
    "sources": [
      "ii901",
      "igi1300"
    ]
  },
  {
    "id": "q-textes-ppst",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Les entites relevant de la PPST sont-elles concernees par l'II 901 ?",
    "options": [
      {
        "text": "Oui, les entites PPST font partie du perimetre",
        "correct": true
      },
      {
        "text": "Non, la PPST est hors perimetre de l'II 901",
        "correct": false
      }
    ],
    "explanation": "Le perimetre de l'II 901 inclut les entites PPST.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 (perimetre)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-textes-repartition-roles",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Comment se repartissent les roles entre IGI 1300 et II 901 concernant le DR ?",
    "options": [
      {
        "text": "L'IGI 1300 definit la mention DR et la protection de l'information ; l'II 901 regit la protection des SI traitant du DR",
        "correct": true
      },
      {
        "text": "L'IGI 1300 regit les SI et l'II 901 definit la mention DR",
        "correct": false
      },
      {
        "text": "Les deux textes ont strictement le meme objet",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 (Annexe 1) traite de la mention et de l'information, l'II 901 traite des SI traitant du DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 ; II 901"
    },
    "sources": [
      "igi1300",
      "igi1300-an1",
      "ii901"
    ]
  },
  {
    "id": "q-textes-oiv-coordonnateur",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Parmi les OIV, lesquels peuvent apposer la mention DR et y acceder selon l'IGI 1300 Annexe 1 ?",
    "options": [
      {
        "text": "Les OIV dont le ministre est coordonnateur",
        "correct": true
      },
      {
        "text": "Tous les OIV sans distinction",
        "correct": false
      },
      {
        "text": "Aucun OIV",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §1 vise les OIV dont le ministre est coordonnateur.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-textes-sous-traitants",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Les sous-traitants des personnes morales liees par convention ou contrat sont-ils inclus dans le perimetre d'acces au DR ?",
    "options": [
      {
        "text": "Oui, ils sont explicitement vises",
        "correct": true
      },
      {
        "text": "Non, ils en sont exclus",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §1 inclut les collectivites/personnes morales liees par convention ou contrat et leurs sous-traitants.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §1"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-textes-si-sensible-vs-dr",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Quelle distinction le perimetre de l'II 901 fait-il selon les acteurs ?",
    "options": [
      {
        "text": "Les administrations de l'Etat sont visees pour leurs SI sensibles, tandis que toute personne morale exploitant un SI DR est visee a ce titre",
        "correct": true
      },
      {
        "text": "Toutes les entites ne sont visees que pour leurs SI sensibles",
        "correct": false
      },
      {
        "text": "Toutes les entites ne sont visees que pour leurs SI DR",
        "correct": false
      }
    ],
    "explanation": "Le perimetre distingue les administrations de l'Etat (SI sensibles) et toute personne morale exploitant un SI DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 (perimetre)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-textes-restreint-ue-otan-cas",
    "refId": "dr-ii901",
    "themeId": "textes",
    "question": "Un SI traitant des informations marquees Restreint UE relevent-ils des regles de l'II 901 ?",
    "options": [
      {
        "text": "Oui, le perimetre de l'II 901 s'etend a Restreint UE et Restreint OTAN",
        "correct": true
      },
      {
        "text": "Non, le Restreint UE releve uniquement de textes europeens hors II 901",
        "correct": false
      }
    ],
    "explanation": "Le perimetre de l'II 901 s'etend a Restreint UE et Restreint OTAN.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 (perimetre)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-demarche-tri-patrimoine",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Selon la demarche, comment une entite doit-elle organiser son patrimoine informationnel en amont ?",
    "options": [
      {
        "text": "En realisant une analyse de risque qui trie les informations selon une echelle usuel / sensible / DR",
        "correct": true
      },
      {
        "text": "En classant uniquement les informations DR, les autres etant ignorees",
        "correct": false
      },
      {
        "text": "En se fondant sur la seule date de creation des documents",
        "correct": false
      }
    ],
    "explanation": "R1 prevoit que l'entite trie son patrimoine informationnel via une analyse de risque selon l'echelle usuel/sensible/DR.",
    "exigence": {
      "level": "recommande",
      "note": "Guide PG-075 R1 (analyse de risque)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-hebergement-dr",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Sur quel type de SI les informations Diffusion Restreinte peuvent-elles etre hebergees ?",
    "options": [
      {
        "text": "Obligatoirement sur des SI homologues DR",
        "correct": true
      },
      {
        "text": "Sur n'importe quel SI sensible, au choix de l'entite",
        "correct": false
      },
      {
        "text": "Sur un SI de niveau usuel si les flux sont chiffres",
        "correct": false
      }
    ],
    "explanation": "R2 impose que les informations DR soient obligatoirement hebergees sur des SI DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R2 (hebergement DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-principe-defaut-niveau",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Vrai ou faux : par defaut, les informations d'un niveau donne sont traitees sur un SI du meme niveau.",
    "options": [
      {
        "text": "Vrai",
        "correct": true
      },
      {
        "text": "Faux",
        "correct": false
      }
    ],
    "explanation": "R2 pose le principe selon lequel, par defaut, les informations d'un niveau sont traitees sur un SI de ce niveau.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R2 (correspondance des niveaux)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-article2-regime",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Quel element de l'II 901 permet de determiner les mesures obligatoires et celles seulement recommandees ?",
    "options": [
      {
        "text": "La lecture de l'article 2 de l'II 901",
        "correct": true
      },
      {
        "text": "L'annexe 2 de l'II 901 uniquement",
        "correct": false
      },
      {
        "text": "L'article 14 de l'II 901",
        "correct": false
      }
    ],
    "explanation": "R3 indique que la lecture de l'article 2 de l'II 901 determine le regime de protection (mesures obligatoires vs recommandees).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 article 2 (regime de protection)"
    },
    "sources": [
      "ii901-art2"
    ]
  },
  {
    "id": "q-demarche-annexe-b-guide",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Quel support aide a determiner le regime de protection lors de la demarche ?",
    "options": [
      {
        "text": "L'annexe B du guide",
        "correct": true
      },
      {
        "text": "L'annexe 2 de l'II 901 exclusivement",
        "correct": false
      },
      {
        "text": "La FAQ cloud",
        "correct": false
      }
    ],
    "explanation": "R3 precise que l'annexe B du guide aide a la determination du regime de protection en complement de l'article 2 de l'II 901.",
    "exigence": {
      "level": "conseille",
      "note": "Guide PG-075 R3 (annexe B)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-homologation-avant-prod",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "A quel moment un SI sensible doit-il etre homologue ?",
    "options": [
      {
        "text": "Avant sa mise en production",
        "correct": true
      },
      {
        "text": "Dans l'annee suivant sa mise en production",
        "correct": false
      },
      {
        "text": "Uniquement en cas d'incident de securite",
        "correct": false
      }
    ],
    "explanation": "R4 impose que tout SI sensible soit homologue avant sa mise en production (art. 3 II 901 ; art. 86 IGI 1300).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 art. 3 ; IGI 1300 art. 86"
    },
    "sources": [
      "ii901",
      "igi1300"
    ]
  },
  {
    "id": "q-demarche-interconnexions-homologuees",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Les interconnexions entre SI sont-elles concernees par l'obligation d'homologation ?",
    "options": [
      {
        "text": "Oui, les interconnexions doivent aussi etre homologuees",
        "correct": true
      },
      {
        "text": "Non, seuls les SI eux-memes sont homologues",
        "correct": false
      },
      {
        "text": "Uniquement si l'un des SI est de niveau usuel",
        "correct": false
      }
    ],
    "explanation": "R4 etend l'obligation d'homologation aux interconnexions (art. 3 II 901 ; art. 86 IGI 1300).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 art. 3 ; IGI 1300 art. 86"
    },
    "sources": [
      "ii901",
      "igi1300"
    ]
  },
  {
    "id": "q-demarche-reevaluation-risques",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Que prevoit la demarche concernant les risques apres homologation ?",
    "options": [
      {
        "text": "Les risques sont reevalues",
        "correct": true
      },
      {
        "text": "Les risques sont figes pour toute la duree de vie du SI",
        "correct": false
      },
      {
        "text": "Les risques ne sont reevalues qu'a la decommission du SI",
        "correct": false
      }
    ],
    "explanation": "R4 prevoit que les risques sont reevalues (art. 3 II 901 ; art. 86 IGI 1300).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 art. 3 ; IGI 1300 art. 86"
    },
    "sources": [
      "ii901",
      "igi1300"
    ]
  },
  {
    "id": "q-demarche-interco-sensibles-specifique",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Comment est traitee l'interconnexion de deux SI sensibles au regard de l'homologation ?",
    "options": [
      {
        "text": "Elle fait l'objet d'une homologation specifique distincte",
        "correct": true
      },
      {
        "text": "Elle est couverte automatiquement par l'homologation de chaque SI",
        "correct": false
      },
      {
        "text": "Elle ne necessite aucune homologation si les deux SI sont deja homologues",
        "correct": false
      }
    ],
    "explanation": "R8 precise que l'interconnexion de deux SI sensibles fait l'objet d'une homologation specifique distincte (II 901 annexe 2).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (interconnexion)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-demarche-acces-si-non-homologue",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Peut-on acceder a une application sensible ou DR depuis un SI non homologue au niveau correspondant ?",
    "options": [
      {
        "text": "Non, c'est interdit",
        "correct": true
      },
      {
        "text": "Oui, si la connexion est temporaire",
        "correct": false
      },
      {
        "text": "Oui, sous reserve d'un VPN chiffre",
        "correct": false
      }
    ],
    "explanation": "R21 interdit l'acces a une application sensible/DR depuis un SI non homologue au niveau correspondant.",
    "exigence": {
      "level": "interdit",
      "note": "PG-075 R21 (acces non homologue)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-echelle-niveaux",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Quels niveaux composent l'echelle utilisee pour trier le patrimoine informationnel ?",
    "options": [
      {
        "text": "Usuel, sensible et DR",
        "correct": true
      },
      {
        "text": "Public, interne et secret",
        "correct": false
      },
      {
        "text": "Confidentiel, secret et tres secret",
        "correct": false
      }
    ],
    "explanation": "R1 definit l'echelle de tri usuel/sensible/DR utilisee lors de l'analyse de risque.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R1 (echelle usuel/sensible/DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-piege-homologation-facultative",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Idee recue : l'homologation d'un SI sensible serait facultative si le SI est peu expose. Qu'en est-il ?",
    "options": [
      {
        "text": "Faux : tout SI sensible doit etre homologue avant production",
        "correct": true
      },
      {
        "text": "Vrai : un SI peu expose peut s'en dispenser",
        "correct": false
      }
    ],
    "explanation": "R4 rend l'homologation obligatoire pour tout SI sensible avant mise en production, sans exception liee a l'exposition.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 art. 3 ; IGI 1300 art. 86"
    },
    "sources": [
      "ii901",
      "igi1300"
    ]
  },
  {
    "id": "q-demarche-identifier-types-si",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Quelle etape consiste a recenser les SI en vue d'y traiter les informations selon leur niveau ?",
    "options": [
      {
        "text": "Identifier les types de SI",
        "correct": true
      },
      {
        "text": "Reevaluer les risques apres production",
        "correct": false
      },
      {
        "text": "Homologuer l'interconnexion de deux SI sensibles",
        "correct": false
      }
    ],
    "explanation": "R2 prevoit d'identifier les types de SI afin que les informations d'un niveau soient traitees sur un SI de ce niveau.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R2 (identification des SI)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-dr-vs-sensible-hebergement",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Quelle distinction la demarche opere-t-elle entre informations sensibles et DR pour l'hebergement ?",
    "options": [
      {
        "text": "Les informations DR sont obligatoirement sur SI DR, tandis que le principe de correspondance de niveau s'applique par defaut aux autres niveaux",
        "correct": true
      },
      {
        "text": "Les informations DR et sensibles peuvent partager indifferemment les memes SI usuels",
        "correct": false
      },
      {
        "text": "Seules les informations sensibles imposent un hebergement dedie, pas les DR",
        "correct": false
      }
    ],
    "explanation": "R2 pose le principe par defaut (info d'un niveau sur SI de ce niveau) et renforce l'obligation pour le DR (hebergement sur SI DR).",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R2 (DR sur SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-role-article2",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Que distingue concretement l'article 2 de l'II 901 lors de la determination du regime ?",
    "options": [
      {
        "text": "Les mesures obligatoires des mesures seulement recommandees",
        "correct": true
      },
      {
        "text": "Les SI sensibles des SI usuels uniquement",
        "correct": false
      },
      {
        "text": "Les delais d'homologation des interconnexions",
        "correct": false
      }
    ],
    "explanation": "R3 indique que l'article 2 de l'II 901 sert a distinguer les mesures obligatoires des mesures recommandees.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 article 2 (mesures obligatoires/recommandees)"
    },
    "sources": [
      "ii901-art2"
    ]
  },
  {
    "id": "q-demarche-interco-non-couverte",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Vrai ou faux : si deux SI sensibles sont chacun homologues, leur interconnexion est automatiquement couverte.",
    "options": [
      {
        "text": "Faux : l'interconnexion exige une homologation specifique distincte",
        "correct": true
      },
      {
        "text": "Vrai : l'homologation de chaque SI suffit",
        "correct": false
      }
    ],
    "explanation": "R8 impose une homologation specifique distincte pour l'interconnexion de deux SI sensibles (II 901 annexe 2).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (interconnexion)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-demarche-cas-poste-perso",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Cas concret : un agent veut consulter une application DR depuis un poste personnel non homologue DR. Que dit la regle ?",
    "options": [
      {
        "text": "L'acces est interdit car le SI n'est pas homologue au niveau correspondant",
        "correct": true
      },
      {
        "text": "L'acces est autorise si l'agent est habilite",
        "correct": false
      },
      {
        "text": "L'acces est autorise en lecture seule",
        "correct": false
      }
    ],
    "explanation": "R21 interdit tout acces a une application DR depuis un SI non homologue au niveau correspondant, independamment de l'habilitation.",
    "exigence": {
      "level": "interdit",
      "note": "PG-075 R21 (acces non homologue)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-fondement-homologation",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Sur quels textes repose l'obligation d'homologation des SI sensibles avant production ?",
    "options": [
      {
        "text": "L'article 3 de l'II 901 et l'article 86 de l'IGI 1300",
        "correct": true
      },
      {
        "text": "L'article 2 de l'II 901 et l'annexe 1 de l'IGI 1300",
        "correct": false
      },
      {
        "text": "La FAQ cloud et la recommandation cloud 2024",
        "correct": false
      }
    ],
    "explanation": "R4 fonde l'homologation avant production sur l'art. 3 de l'II 901 et l'art. 86 de l'IGI 1300.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 art. 3 ; IGI 1300 art. 86"
    },
    "sources": [
      "ii901",
      "igi1300"
    ]
  },
  {
    "id": "q-demarche-analyse-risque-finalite",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Quelle est la finalite de l'analyse de risque dans la demarche de protection ?",
    "options": [
      {
        "text": "Trier le patrimoine informationnel selon son niveau de sensibilite",
        "correct": true
      },
      {
        "text": "Remplacer l'homologation des SI sensibles",
        "correct": false
      },
      {
        "text": "Definir les delais legaux de conservation des donnees",
        "correct": false
      }
    ],
    "explanation": "R1 fait de l'analyse de risque l'outil de tri du patrimoine informationnel selon l'echelle usuel/sensible/DR.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R1 (analyse de risque)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-etapes-ordre",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Parmi ces etapes de la demarche, lesquelles figurent dans la source ? (plusieurs reponses)",
    "options": [
      {
        "text": "Trier le patrimoine informationnel par analyse de risque",
        "correct": true
      },
      {
        "text": "Identifier les types de SI",
        "correct": true
      },
      {
        "text": "Determiner le regime de protection via l'article 2 de l'II 901",
        "correct": true
      },
      {
        "text": "Publier le patrimoine informationnel sur un portail ouvert",
        "correct": false
      }
    ],
    "explanation": "R1, R2 et R3 decrivent respectivement le tri par analyse de risque, l'identification des types de SI et la determination du regime via l'article 2 de l'II 901.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R1, R2, R3"
    },
    "sources": [
      "pg075",
      "ii901-art2"
    ]
  },
  {
    "id": "q-demarche-portee-interdiction-r21",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "L'interdiction d'acces depuis un SI non homologue vise-t-elle uniquement les applications DR ?",
    "options": [
      {
        "text": "Non, elle vise aussi les applications sensibles",
        "correct": true
      },
      {
        "text": "Oui, seules les applications DR sont concernees",
        "correct": false
      },
      {
        "text": "Non, mais seulement les applications usuelles",
        "correct": false
      }
    ],
    "explanation": "R21 vise l'acces a une application sensible ou DR depuis un SI non homologue au niveau correspondant.",
    "exigence": {
      "level": "interdit",
      "note": "PG-075 R21 (sensible et DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-demarche-piege-interco-art86",
    "refId": "dr-ii901",
    "themeId": "demarche",
    "question": "Vrai ou faux : selon la source, les interconnexions echappent a la reevaluation des risques prevue lors de l'homologation.",
    "options": [
      {
        "text": "Faux : les interconnexions sont homologuees et les risques reevalues",
        "correct": true
      },
      {
        "text": "Vrai : seules les interconnexions sont exemptees",
        "correct": false
      }
    ],
    "explanation": "R4 inclut les interconnexions dans l'obligation d'homologation et associe la reevaluation des risques (art. 3 II 901 ; art. 86 IGI 1300).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 art. 3 ; IGI 1300 art. 86"
    },
    "sources": [
      "ii901",
      "igi1300"
    ]
  },
  {
    "id": "q-classes-def-classe0",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Selon l'annexe 2 de l'II 901, qu'est-ce qui caracterise un SI de classe 0 ?",
    "options": [
      {
        "text": "Un SI public ou connecte a un public, non conforme a la classe 1",
        "correct": true
      },
      {
        "text": "Un SI sensible isole physiquement d'Internet",
        "correct": false
      },
      {
        "text": "Un SI DR connecte a Internet via une passerelle securisee",
        "correct": false
      }
    ],
    "explanation": "L'annexe 2 de l'II 901 definit la classe 0 comme un SI public ou connecte a un public, non conforme a la classe 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (definition classe 0)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-def-classe1",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Comment l'annexe 2 de l'II 901 definit-elle un SI de classe 1 ?",
    "options": [
      {
        "text": "Un SI sensible ou DR connecte a Internet via une passerelle securisee conforme a l'II 901",
        "correct": true
      },
      {
        "text": "Un SI physiquement isole d'Internet",
        "correct": false
      },
      {
        "text": "Un SI public connecte a un public",
        "correct": false
      },
      {
        "text": "Un SI ne recevant des donnees que via une diode agreee ANSSI",
        "correct": false
      }
    ],
    "explanation": "La classe 1 designe un SI sensible/DR connecte a Internet par une passerelle securisee conforme a l'II 901.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (definition classe 1)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-def-classe2",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Quelle est la caracteristique principale d'un SI de classe 2 selon l'annexe 2 de l'II 901 ?",
    "options": [
      {
        "text": "Il est physiquement isole d'Internet",
        "correct": true
      },
      {
        "text": "Il est connecte a Internet via une passerelle securisee",
        "correct": false
      },
      {
        "text": "Il est public ou connecte a un public",
        "correct": false
      }
    ],
    "explanation": "La classe 2 designe un SI sensible/DR physiquement isole d'Internet.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (definition classe 2)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-idee-recue-isolement",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Vrai ou faux : l'isolement physique d'Internet est exige pour un SI de classe 1.",
    "options": [
      {
        "text": "Faux : la classe 1 est connectee a Internet via une passerelle ; l'isolement physique caracterise la classe 2",
        "correct": true
      },
      {
        "text": "Vrai : toute classe 1 doit etre physiquement isolee",
        "correct": false
      }
    ],
    "explanation": "Idee recue a corriger : l'isolement physique n'est pas exige en classe 1 (connectee via passerelle), il caracterise la classe 2.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (distinction classe 1 / classe 2)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-choix-article14",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "De quel article de l'II 901 releve le choix de la classe de reseau ?",
    "options": [
      {
        "text": "L'article 14",
        "correct": true
      },
      {
        "text": "L'article 2",
        "correct": false
      },
      {
        "text": "L'annexe 2 uniquement, sans renvoi a un article",
        "correct": false
      }
    ],
    "explanation": "Le choix de la classe releve de l'article 14 de l'II 901.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 article 14"
    },
    "sources": [
      "ii901-art14"
    ]
  },
  {
    "id": "q-classes-classe2-interconnexion",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Pour un SI de classe 2, comment peut s'effectuer une interconnexion descendante ?",
    "options": [
      {
        "text": "Seulement via des dispositifs agrees",
        "correct": true
      },
      {
        "text": "Via n'importe quelle passerelle commerciale",
        "correct": false
      },
      {
        "text": "Par connexion directe a Internet",
        "correct": false
      }
    ],
    "explanation": "En classe 2, l'interconnexion descendante n'est possible que via des dispositifs agrees.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (classe 2)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-classe2-diode",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Comment un SI de classe 2 peut-il recevoir des donnees (passerelle montante) ?",
    "options": [
      {
        "text": "Via une diode agreee ANSSI",
        "correct": true
      },
      {
        "text": "Via une connexion bidirectionnelle a Internet",
        "correct": false
      },
      {
        "text": "Via un VPN standard",
        "correct": false
      },
      {
        "text": "Il ne peut jamais recevoir aucune donnee",
        "correct": false
      }
    ],
    "explanation": "La reception en classe 2 se fait via une diode agreee ANSSI (passerelle montante).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (classe 2, diode agreee ANSSI)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-classe2-connexion-indirecte",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Un SI de classe 2 peut-il etre connecte indirectement a Internet ?",
    "options": [
      {
        "text": "Non : il n'est connecte ni directement ni indirectement",
        "correct": true
      },
      {
        "text": "Oui, une connexion indirecte est tolere si elle passe par un proxy",
        "correct": false
      }
    ],
    "explanation": "La classe 2 designe un SI isole, non connecte meme indirectement a Internet.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (classe 2)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-classe2-pg075-obligatoire",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Selon le PG-075, dans quel cas le recours a la classe 2 est-il obligatoire ?",
    "options": [
      {
        "text": "Lorsque les risques sont eleves",
        "correct": true
      },
      {
        "text": "Systematiquement pour tout SI sensible",
        "correct": false
      },
      {
        "text": "Uniquement pour les SI publics",
        "correct": false
      }
    ],
    "explanation": "Le recours a la classe 2 est obligatoire lorsque les risques sont eleves (PG-075), il n'est pas systematique.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 (classe 2 si risques eleves)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-classe2-pas-systematique",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Vrai ou faux : le recours a la classe 2 est systematique pour tous les SI sensibles ou DR.",
    "options": [
      {
        "text": "Faux : il est obligatoire seulement lorsque les risques sont eleves",
        "correct": true
      },
      {
        "text": "Vrai : la classe 2 est imposee dans tous les cas",
        "correct": false
      }
    ],
    "explanation": "Le PG-075 impose la classe 2 quand les risques sont eleves, pas de maniere systematique.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 (classe 2 si risques eleves)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-r5plus-isolement",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Que recommande la mesure R5+ concernant le SI sensible et le SI usuel ?",
    "options": [
      {
        "text": "Les isoler physiquement (le SI sensible est alors en classe 2)",
        "correct": true
      },
      {
        "text": "Les cloisonner uniquement de maniere logique",
        "correct": false
      },
      {
        "text": "Les fusionner en un seul SI",
        "correct": false
      }
    ],
    "explanation": "R5+ recommande d'isoler physiquement le SI sensible et le SI usuel, le SI sensible relevant alors de la classe 2.",
    "exigence": {
      "level": "recommande",
      "note": "R5+ (SI sensible = classe 2)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-r5-cloisonnement-physique",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Que prevoit la mesure R5 a defaut d'isolement physique ?",
    "options": [
      {
        "text": "Cloisonner physiquement, le SI sensible etant alors en classe 1",
        "correct": true
      },
      {
        "text": "Cloisonner logiquement sans SI usuel distinct",
        "correct": false
      },
      {
        "text": "Renoncer a tout cloisonnement",
        "correct": false
      }
    ],
    "explanation": "R5 prevoit, a defaut d'isolement, un cloisonnement physique avec le SI sensible en classe 1.",
    "exigence": {
      "level": "recommande",
      "note": "R5 (SI sensible = classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-r5moins-degrade",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "En quoi consiste la mesure degradee R5- ?",
    "options": [
      {
        "text": "Cloisonner logiquement sans SI usuel distinct, pour une maturite SSI elevee",
        "correct": true
      },
      {
        "text": "Isoler physiquement le SI sensible en classe 2",
        "correct": false
      },
      {
        "text": "Connecter directement le SI sensible a Internet",
        "correct": false
      }
    ],
    "explanation": "R5- est une mesure degradee : cloisonnement logique sans SI usuel distinct, reservee a une maturite SSI elevee.",
    "exigence": {
      "level": "recommande",
      "note": "R5- (mesure degradee, maturite SSI elevee)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-r5moins-maturite",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "La mesure R5- (cloisonnement logique) suppose quelle condition ?",
    "options": [
      {
        "text": "Une maturite SSI elevee",
        "correct": true
      },
      {
        "text": "Une absence totale de personnel SSI",
        "correct": false
      },
      {
        "text": "Une connexion Internet directe obligatoire",
        "correct": false
      }
    ],
    "explanation": "R5- est une mesure degradee reservee a un contexte de maturite SSI elevee.",
    "exigence": {
      "level": "recommande",
      "note": "R5- (maturite SSI elevee)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-r6-defense-profondeur",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Comment l'II 901 qualifie-t-elle la defense en profondeur (R6) ?",
    "options": [
      {
        "text": "Un principe strategique de l'II 901",
        "correct": true
      },
      {
        "text": "Une simple recommandation facultative",
        "correct": false
      },
      {
        "text": "Une mesure propre aux SI publics",
        "correct": false
      }
    ],
    "explanation": "R6 : la defense en profondeur est un principe strategique de l'II 901.",
    "exigence": {
      "level": "obligatoire",
      "note": "R6 (principe strategique II 901)"
    },
    "sources": [
      "pg075",
      "ii901"
    ]
  },
  {
    "id": "q-classes-r6-mutualisation",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "En cas de mutualisation, quelle est l'obligation de l'entite selon R6 ?",
    "options": [
      {
        "text": "Appliquer systematiquement la defense en profondeur",
        "correct": true
      },
      {
        "text": "Appliquer la defense en profondeur seulement si elle le souhaite",
        "correct": false
      },
      {
        "text": "Renoncer a toute defense en profondeur",
        "correct": false
      }
    ],
    "explanation": "R6 : en cas de mutualisation, l'entite doit systematiquement appliquer la defense en profondeur.",
    "exigence": {
      "level": "obligatoire",
      "note": "R6 (mutualisation, application systematique)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-r7-annuaires",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Dans le contexte degrade R5-, que prevoit la mesure R7 ?",
    "options": [
      {
        "text": "Il est fortement recommande d'avoir des annuaires sensible et usuel distincts",
        "correct": true
      },
      {
        "text": "Il est interdit d'avoir des annuaires distincts",
        "correct": false
      },
      {
        "text": "Un annuaire unique est obligatoire",
        "correct": false
      }
    ],
    "explanation": "R7 : dans le contexte degrade R5-, il est fortement recommande d'avoir des annuaires sensible et usuel distincts.",
    "exigence": {
      "level": "recommande",
      "note": "R7 (annuaires distincts, fortement recommande)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-classe-dr-via-passerelle",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Un SI DR connecte a Internet via une passerelle securisee conforme a l'II 901 releve de quelle classe ?",
    "options": [
      {
        "text": "Classe 1",
        "correct": true
      },
      {
        "text": "Classe 0",
        "correct": false
      },
      {
        "text": "Classe 2",
        "correct": false
      }
    ],
    "explanation": "Un SI sensible/DR connecte a Internet via une passerelle securisee conforme II 901 est de classe 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (classe 1)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-classe0-non-conforme",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Quelle condition figure dans la definition de la classe 0 au-dela du caractere public ?",
    "options": [
      {
        "text": "La non-conformite a la classe 1",
        "correct": true
      },
      {
        "text": "La conformite obligatoire a la classe 2",
        "correct": false
      },
      {
        "text": "La presence d'une diode agreee ANSSI",
        "correct": false
      }
    ],
    "explanation": "La classe 0 est definie comme un SI public ou connecte a un public, non conforme a la classe 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (classe 0)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-piege-passerelle-classe2",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Un SI de classe 2 utilise-t-il une passerelle securisee de connexion a Internet comme la classe 1 ?",
    "options": [
      {
        "text": "Non : la classe 2 est isolee ; elle ne recoit que via une diode agreee ANSSI",
        "correct": true
      },
      {
        "text": "Oui : classe 1 et classe 2 partagent la meme passerelle Internet",
        "correct": false
      }
    ],
    "explanation": "La classe 2 est physiquement isolee et ne recoit des donnees que via une diode agreee ANSSI, contrairement a la classe 1 connectee via passerelle.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (classe 1 vs classe 2)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-notion-classe-reseau",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Quel document definit la notion de classe de reseau ?",
    "options": [
      {
        "text": "L'annexe 2 de l'II 901",
        "correct": true
      },
      {
        "text": "L'article 2 de l'II 901",
        "correct": false
      },
      {
        "text": "L'IGI 1300 annexe 1",
        "correct": false
      }
    ],
    "explanation": "L'annexe 2 de l'II 901 definit la classe de reseau.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-r5plus-classe-resultante",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Lorsque la mesure R5+ est appliquee, dans quelle classe se trouve le SI sensible ?",
    "options": [
      {
        "text": "Classe 2",
        "correct": true
      },
      {
        "text": "Classe 1",
        "correct": false
      },
      {
        "text": "Classe 0",
        "correct": false
      }
    ],
    "explanation": "R5+ recommande l'isolement physique, le SI sensible relevant alors de la classe 2.",
    "exigence": {
      "level": "recommande",
      "note": "R5+ (SI sensible = classe 2)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-r5-classe-resultante",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Lorsque la mesure R5 (cloisonnement physique) est appliquee, le SI sensible releve de quelle classe ?",
    "options": [
      {
        "text": "Classe 1",
        "correct": true
      },
      {
        "text": "Classe 2",
        "correct": false
      },
      {
        "text": "Classe 0",
        "correct": false
      }
    ],
    "explanation": "R5 prevoit un cloisonnement physique avec le SI sensible en classe 1.",
    "exigence": {
      "level": "recommande",
      "note": "R5 (SI sensible = classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-hierarchie-r5",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Quel est l'ordre de preference des mesures de separation entre SI sensible et SI usuel selon le PG-075 ?",
    "options": [
      {
        "text": "R5+ (isolement physique), puis R5 (cloisonnement physique), puis R5- (cloisonnement logique degrade)",
        "correct": true
      },
      {
        "text": "R5- en priorite, puis R5, puis R5+",
        "correct": false
      },
      {
        "text": "R5 et R5- sont equivalentes, R5+ etant interdite",
        "correct": false
      }
    ],
    "explanation": "Le PG-075 hierarchise : R5+ (isolement physique, classe 2), a defaut R5 (cloisonnement physique, classe 1), a defaut R5- (cloisonnement logique, mesure degradee).",
    "exigence": {
      "level": "recommande",
      "note": "R5+/R5/R5- (hierarchie des mesures)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-classe1-sensible-et-dr",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "La classe 1 s'applique-t-elle uniquement aux SI DR ?",
    "options": [
      {
        "text": "Non : elle vise les SI sensibles comme les SI DR connectes via passerelle",
        "correct": true
      },
      {
        "text": "Oui : seuls les SI DR peuvent etre en classe 1",
        "correct": false
      }
    ],
    "explanation": "La classe 1 designe un SI sensible/DR connecte a Internet via une passerelle securisee conforme II 901.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (classe 1)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-diode-sens",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Dans un SI de classe 2, la diode agreee ANSSI correspond a quel sens de flux ?",
    "options": [
      {
        "text": "La passerelle montante (reception de donnees)",
        "correct": true
      },
      {
        "text": "L'interconnexion descendante",
        "correct": false
      },
      {
        "text": "Un flux bidirectionnel libre",
        "correct": false
      }
    ],
    "explanation": "En classe 2, la reception via diode agreee ANSSI constitue la passerelle montante.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 (classe 2, diode montante)"
    },
    "sources": [
      "ii901-annexe2"
    ]
  },
  {
    "id": "q-classes-r5moins-si-usuel",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Que prevoit R5- concernant le SI usuel distinct ?",
    "options": [
      {
        "text": "Le cloisonnement logique se fait sans SI usuel distinct",
        "correct": true
      },
      {
        "text": "Il impose un SI usuel physiquement separe",
        "correct": false
      }
    ],
    "explanation": "R5- consiste a cloisonner logiquement sans SI usuel distinct, comme mesure degradee.",
    "exigence": {
      "level": "recommande",
      "note": "R5- (sans SI usuel distinct)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-classes-classe2-non-systematique-piege",
    "refId": "dr-ii901",
    "themeId": "classes",
    "question": "Affirmation : tout SI DR doit obligatoirement etre en classe 2. Cette affirmation est-elle exacte ?",
    "options": [
      {
        "text": "Non : la classe 2 n'est obligatoire que lorsque les risques sont eleves ; un SI DR peut etre en classe 1 via passerelle",
        "correct": true
      },
      {
        "text": "Oui : un SI DR est toujours en classe 2",
        "correct": false
      }
    ],
    "explanation": "Un SI DR peut etre de classe 1 (connecte via passerelle) ; la classe 2 n'est obligatoire que pour des risques eleves (PG-075).",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 annexe 2 et PG-075 (classe 2 si risques eleves)"
    },
    "sources": [
      "ii901-annexe2",
      "pg075"
    ]
  },
  {
    "id": "q-interco-r9-vpn-dr",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Comment les interconnexions de SI Diffusion Restreinte (DR) doivent-elles etre securisees ?",
    "options": [
      {
        "text": "Par des tunnels VPN assurant confidentialite, integrite, anti-rejeu et authentification mutuelle, avec des equipements agrees DR",
        "correct": true
      },
      {
        "text": "Par un simple chiffrement applicatif sans authentification",
        "correct": false
      },
      {
        "text": "Par des equipements disposant uniquement d'un visa de securite",
        "correct": false
      }
    ],
    "explanation": "R9 impose pour le DR des tunnels VPN (confidentialite, integrite, anti-rejeu, authentification mutuelle) avec equipements agrees DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R9 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r9-services-vpn",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Quels services de securite le tunnel VPN doit-il garantir pour une interconnexion de SI DR (R9) ?",
    "options": [
      {
        "text": "La confidentialite",
        "correct": true
      },
      {
        "text": "L'integrite",
        "correct": true
      },
      {
        "text": "L'anti-rejeu",
        "correct": true
      },
      {
        "text": "L'authentification mutuelle",
        "correct": true
      }
    ],
    "explanation": "R9 enumere quatre services pour le tunnel VPN des interconnexions DR : confidentialite, integrite, anti-rejeu et authentification mutuelle.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R9 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r9-equip-agrees",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Quel type d'equipement est requis pour le VPN d'une interconnexion de SI DR ?",
    "options": [
      {
        "text": "Des equipements agrees DR",
        "correct": true
      },
      {
        "text": "Des equipements simplement certifies par l'editeur",
        "correct": false
      },
      {
        "text": "Des equipements disposant d'un visa de securite, qui suffit pour le DR",
        "correct": false
      }
    ],
    "explanation": "R9 exige des equipements agrees DR pour securiser les interconnexions de SI DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R9 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r10-sensible-vpn",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Pour les SI sensibles non DR, quel est le niveau d'exigence concernant l'usage d'un VPN pour les interconnexions (R10) ?",
    "options": [
      {
        "text": "Il est fortement recommande d'utiliser un VPN avec des equipements disposant d'un visa de securite",
        "correct": true
      },
      {
        "text": "C'est obligatoire, comme pour le DR",
        "correct": false
      },
      {
        "text": "C'est simplement conseille, sans precision sur les equipements",
        "correct": false
      }
    ],
    "explanation": "R10 indique qu'il est fortement recommande, pour les SI sensibles non DR, d'utiliser un VPN avec des equipements disposant d'un visa de securite.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R10 (SI sensible non DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-dr-vs-sensible-vpn",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Vrai ou faux : l'usage du VPN pour les interconnexions a le meme niveau d'exigence pour le DR et pour le sensible non DR.",
    "options": [
      {
        "text": "Faux : obligatoire pour le DR (R9), seulement fortement recommande pour le sensible non DR (R10)",
        "correct": true
      },
      {
        "text": "Vrai : c'est obligatoire dans les deux cas",
        "correct": false
      },
      {
        "text": "Vrai : c'est fortement recommande dans les deux cas",
        "correct": false
      }
    ],
    "explanation": "R9 rend le VPN obligatoire pour le DR alors que R10 le rend seulement fortement recommande pour le sensible non DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R9 vs R10"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r11-filtrage-sensible",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Que prevoit R11 concernant les flux des interconnexions de SI sensibles ?",
    "options": [
      {
        "text": "Il faut filtrer les flux des interconnexions de SI sensibles",
        "correct": true
      },
      {
        "text": "Il faut chiffrer les flux mais sans filtrage",
        "correct": false
      },
      {
        "text": "Aucune mesure n'est prevue pour les SI sensibles",
        "correct": false
      }
    ],
    "explanation": "R11 prevoit le filtrage des flux des interconnexions de SI sensibles.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R11 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r12-internet-classe1",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Quel est le niveau d'exigence pour l'application des bonnes pratiques ANSSI sur l'interconnexion d'un SI a Internet (R12) ?",
    "options": [
      {
        "text": "Il est fortement recommande d'appliquer les bonnes pratiques ANSSI (passerelle de classe 1)",
        "correct": true
      },
      {
        "text": "C'est strictement obligatoire et sanctionne",
        "correct": false
      },
      {
        "text": "C'est uniquement un usage facultatif sans reference ANSSI",
        "correct": false
      }
    ],
    "explanation": "R12 indique qu'il est fortement recommande d'appliquer les bonnes pratiques ANSSI sur l'interconnexion d'un SI a Internet (classe 1).",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R12 (interconnexion Internet, classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r12-classe",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "A quelle classe de passerelle se rapporte l'interconnexion d'un SI a Internet visee par R12 ?",
    "options": [
      {
        "text": "La classe 1",
        "correct": true
      },
      {
        "text": "La classe 2",
        "correct": false
      },
      {
        "text": "La classe 0",
        "correct": false
      }
    ],
    "explanation": "R12 vise l'interconnexion d'un SI a Internet relevant de la classe 1.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R12"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r13-filtrage-qualifie-dr",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Pour une passerelle de classe 1 d'un SI DR, quelle obligation impose R13 ?",
    "options": [
      {
        "text": "Mettre un dispositif de filtrage qualifie de niveau standard en coupure",
        "correct": true
      },
      {
        "text": "Mettre un dispositif de filtrage non qualifie en simple ecoute",
        "correct": false
      },
      {
        "text": "Mettre un dispositif de filtrage qualifie de niveau renforce",
        "correct": false
      }
    ],
    "explanation": "R13 impose pour le SI DR un dispositif de filtrage qualifie (niveau standard) place en coupure dans la passerelle de classe 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R13 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r13-niveau-qualif",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Quel niveau de qualification est attendu pour le dispositif de filtrage de la passerelle de classe 1 (R13) ?",
    "options": [
      {
        "text": "Niveau standard",
        "correct": true
      },
      {
        "text": "Niveau renforce",
        "correct": false
      },
      {
        "text": "Niveau elementaire",
        "correct": false
      }
    ],
    "explanation": "R13 precise un dispositif de filtrage qualifie de niveau standard.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R13"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r13-position-coupure",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Comment le dispositif de filtrage de R13 doit-il etre positionne dans la passerelle de classe 1 d'un SI DR ?",
    "options": [
      {
        "text": "En coupure",
        "correct": true
      },
      {
        "text": "En derivation (port mirroring)",
        "correct": false
      },
      {
        "text": "Hors du flux, en supervision passive",
        "correct": false
      }
    ],
    "explanation": "R13 impose un dispositif de filtrage place en coupure pour le SI DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R13 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r13-sensible",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Quel est le niveau d'exigence du dispositif de filtrage qualifie en coupure pour un SI sensible (R13) ?",
    "options": [
      {
        "text": "Fortement conseille",
        "correct": true
      },
      {
        "text": "Obligatoire, au meme titre que le DR",
        "correct": false
      },
      {
        "text": "Interdit pour le sensible",
        "correct": false
      }
    ],
    "explanation": "R13 rend le dispositif de filtrage obligatoire pour le DR mais seulement fortement conseille pour le sensible.",
    "exigence": {
      "level": "conseille",
      "note": "PG-075 R13 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r13-dr-vs-sensible",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Vrai ou faux : pour la passerelle de classe 1, le dispositif de filtrage qualifie en coupure est obligatoire pour le DR et seulement fortement conseille pour le sensible.",
    "options": [
      {
        "text": "Vrai",
        "correct": true
      },
      {
        "text": "Faux : il est obligatoire dans les deux cas",
        "correct": false
      },
      {
        "text": "Faux : il est seulement conseille dans les deux cas",
        "correct": false
      }
    ],
    "explanation": "R13 distingue le DR (obligatoire) du sensible (fortement conseille) pour le dispositif de filtrage qualifie en coupure.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R13 (DR vs sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r14-rupture-flux",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Que doit mettre en place un SI DR selon R14 ?",
    "options": [
      {
        "text": "Un ou des dispositifs de rupture de flux, entre deux dispositifs de filtrage",
        "correct": true
      },
      {
        "text": "Un unique dispositif de filtrage sans rupture de flux",
        "correct": false
      },
      {
        "text": "Un dispositif de rupture de flux place avant tout filtrage",
        "correct": false
      }
    ],
    "explanation": "R14 impose au SI DR un ou des dispositifs de rupture de flux, places entre deux dispositifs de filtrage.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R14 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r14-position",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Ou se situe le dispositif de rupture de flux exige par R14 ?",
    "options": [
      {
        "text": "Entre deux dispositifs de filtrage",
        "correct": true
      },
      {
        "text": "En amont de tous les dispositifs de filtrage",
        "correct": false
      },
      {
        "text": "En aval de la sonde de detection",
        "correct": false
      }
    ],
    "explanation": "R14 precise que le ou les dispositifs de rupture de flux sont places entre deux dispositifs de filtrage.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R14"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r15-sonde-qualifiee",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Selon R15, que doit comporter chaque passerelle de classe 1 d'un SI DR ?",
    "options": [
      {
        "text": "Un systeme de detection avec une sonde qualifiee",
        "correct": true
      },
      {
        "text": "Une sonde non qualifiee suffit",
        "correct": false
      },
      {
        "text": "Aucun systeme de detection n'est requis",
        "correct": false
      }
    ],
    "explanation": "R15 impose au SI DR un systeme de detection avec sonde qualifiee dans chaque passerelle de classe 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R15 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r15-chaque-passerelle",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Vrai ou faux : pour un SI DR, le systeme de detection avec sonde qualifiee n'est requis que dans une seule passerelle de classe 1.",
    "options": [
      {
        "text": "Faux : il est requis dans chaque passerelle de classe 1",
        "correct": true
      },
      {
        "text": "Vrai : une seule passerelle suffit",
        "correct": false
      }
    ],
    "explanation": "R15 exige un systeme de detection avec sonde qualifiee dans chaque passerelle de classe 1 d'un SI DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R15 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r16-taps-passifs",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Que recommande R16 pour alimenter les sondes de detection ?",
    "options": [
      {
        "text": "Mettre des taps passifs qualifies",
        "correct": true
      },
      {
        "text": "Mettre des taps actifs non qualifies",
        "correct": false
      },
      {
        "text": "Alimenter les sondes directement en coupure de flux",
        "correct": false
      }
    ],
    "explanation": "R16 recommande de mettre des taps passifs qualifies pour alimenter les sondes.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R16"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r16-niveau",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Quel est le niveau d'exigence de l'usage de taps passifs qualifies pour les sondes (R16) ?",
    "options": [
      {
        "text": "Recommande",
        "correct": true
      },
      {
        "text": "Obligatoire",
        "correct": false
      },
      {
        "text": "Interdit",
        "correct": false
      }
    ],
    "explanation": "R16 enonce qu'il est recommande (et non obligatoire) de mettre des taps passifs qualifies.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R16"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r17-materiels-distincts",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Que recommande R17 au sujet des pare-feux, dispositifs de rupture et sondes ?",
    "options": [
      {
        "text": "Qu'ils soient portes par des materiels physiquement distincts",
        "correct": true
      },
      {
        "text": "Qu'ils soient mutualises sur un meme materiel pour reduire les couts",
        "correct": false
      },
      {
        "text": "Qu'ils soient virtualises sur un hyperviseur unique",
        "correct": false
      }
    ],
    "explanation": "R17 recommande que pare-feux, dispositifs de rupture et sondes soient portes par des materiels physiquement distincts.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R17"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r17-niveau",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Quel est le niveau d'exigence de la separation physique des pare-feux, dispositifs de rupture et sondes (R17) ?",
    "options": [
      {
        "text": "Recommande",
        "correct": true
      },
      {
        "text": "Obligatoire",
        "correct": false
      },
      {
        "text": "Simple usage sans reference",
        "correct": false
      }
    ],
    "explanation": "R17 indique qu'il est recommande que ces fonctions soient portees par des materiels physiquement distincts.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R17"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-composants-classe1-dr",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Quels dispositifs une passerelle de classe 1 d'un SI DR doit-elle comporter ?",
    "options": [
      {
        "text": "Un dispositif de filtrage qualifie de niveau standard en coupure (R13)",
        "correct": true
      },
      {
        "text": "Un ou des dispositifs de rupture de flux entre deux dispositifs de filtrage (R14)",
        "correct": true
      },
      {
        "text": "Un systeme de detection avec sonde qualifiee (R15)",
        "correct": true
      },
      {
        "text": "Aucun de ces dispositifs n'est obligatoire pour le DR",
        "correct": false
      }
    ],
    "explanation": "Pour le SI DR, R13, R14 et R15 imposent respectivement le filtrage qualifie en coupure, la rupture de flux entre deux filtrages et la detection par sonde qualifiee.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R13, R14, R15 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-piege-tap-coupure",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Idee recue : pour alimenter les sondes, il est recommande d'utiliser des taps actifs places en coupure. Qu'en dit la source ?",
    "options": [
      {
        "text": "C'est faux : R16 recommande des taps passifs qualifies",
        "correct": true
      },
      {
        "text": "C'est vrai : la source recommande des taps actifs en coupure",
        "correct": false
      }
    ],
    "explanation": "R16 recommande des taps passifs qualifies, et non des taps actifs en coupure.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R16"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-piege-mutualisation",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Idee recue : pour un SI DR, il est conseille de mutualiser pare-feux, rupture de flux et sondes sur un seul materiel. Qu'en dit la source ?",
    "options": [
      {
        "text": "C'est faux : R17 recommande au contraire des materiels physiquement distincts",
        "correct": true
      },
      {
        "text": "C'est vrai : la mutualisation est conseillee",
        "correct": false
      }
    ],
    "explanation": "R17 recommande que ces fonctions soient portees par des materiels physiquement distincts, l'inverse de la mutualisation.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R17"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-cas-interconnexion-dr",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Une entite doit interconnecter deux SI DR. Quelle solution est conforme a R9 ?",
    "options": [
      {
        "text": "Etablir un tunnel VPN (confidentialite, integrite, anti-rejeu, authentification mutuelle) avec des equipements agrees DR",
        "correct": true
      },
      {
        "text": "Etablir un tunnel VPN avec des equipements disposant d'un simple visa de securite",
        "correct": false
      },
      {
        "text": "Relier directement les deux SI sans chiffrement, le reseau etant interne",
        "correct": false
      }
    ],
    "explanation": "R9 impose pour les interconnexions DR un VPN avec les quatre services de securite et des equipements agrees DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R9 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-cas-sensible-internet",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Un SI sensible non DR doit etre interconnecte a Internet. Quelles mesures decoulent de la source ?",
    "options": [
      {
        "text": "Filtrer les flux de l'interconnexion (R11)",
        "correct": true
      },
      {
        "text": "Appliquer les bonnes pratiques ANSSI pour l'interconnexion a Internet en classe 1 (R12)",
        "correct": true
      },
      {
        "text": "Aucune mesure de filtrage n'est attendue pour un SI sensible",
        "correct": false
      }
    ],
    "explanation": "R11 prevoit le filtrage des flux des interconnexions de SI sensibles et R12 recommande fortement les bonnes pratiques ANSSI pour l'interconnexion a Internet (classe 1).",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R11 et R12 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-detection-vs-filtrage",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Dans une passerelle de classe 1 d'un SI DR, a quoi sert la sonde qualifiee exigee par R15 ?",
    "options": [
      {
        "text": "A la detection (systeme de detection), distincte du filtrage et de la rupture de flux",
        "correct": true
      },
      {
        "text": "A filtrer les flux en coupure",
        "correct": false
      },
      {
        "text": "A assurer la rupture de flux entre deux pare-feux",
        "correct": false
      }
    ],
    "explanation": "R15 vise un systeme de detection avec sonde qualifiee, fonction distincte du filtrage (R13) et de la rupture de flux (R14).",
    "exigence": {
      "level": "obligatoire",
      "note": "PG-075 R15 (SI DR)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-interco-r10-visa-vs-agrement",
    "refId": "dr-ii901",
    "themeId": "interco",
    "question": "Pour un SI sensible non DR (R10), quel type d'equipement VPN est attendu, par contraste avec le DR ?",
    "options": [
      {
        "text": "Des equipements disposant d'un visa de securite (le DR exigeant lui des equipements agrees DR)",
        "correct": true
      },
      {
        "text": "Des equipements agrees DR, comme pour le DR",
        "correct": false
      },
      {
        "text": "Aucun equipement particulier, le chiffrement logiciel suffit",
        "correct": false
      }
    ],
    "explanation": "R10 attend pour le sensible non DR des equipements disposant d'un visa de securite, alors que R9 exige des equipements agrees DR pour le DR.",
    "exigence": {
      "level": "recommande",
      "note": "PG-075 R10 vs R9"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-web-classe2",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Quelle est la regle concernant la navigation Web depuis un SI de classe 2 ?",
    "options": [
      {
        "text": "Elle est impossible",
        "correct": true
      },
      {
        "text": "Elle est recommandee via un poste de rebond",
        "correct": false
      },
      {
        "text": "Elle est autorisee sous reserve d'un antivirus",
        "correct": false
      },
      {
        "text": "Elle est conseillee uniquement en lecture seule",
        "correct": false
      }
    ],
    "explanation": "Selon R18, la navigation Web est IMPOSSIBLE depuis un SI de classe 2.",
    "exigence": {
      "level": "interdit",
      "note": "R18 (classe 2)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-web-classe1-interdiction",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Pour un SI de classe 1, quel est le niveau d'exigence concernant l'interdiction de la navigation Web ?",
    "options": [
      {
        "text": "Il est recommande de l'interdire",
        "correct": true
      },
      {
        "text": "Elle est strictement impossible",
        "correct": false
      },
      {
        "text": "Elle est obligatoirement autorisee",
        "correct": false
      },
      {
        "text": "Aucune regle ne s'applique",
        "correct": false
      }
    ],
    "explanation": "Selon R18, pour la classe 1, il est recommande d'interdire la navigation Web ; si necessaire, elle se fait via un SI dedie.",
    "exigence": {
      "level": "recommande",
      "note": "R18 (classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-web-classe1-si-dedie",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Si la navigation Web est necessaire depuis un SI de classe 1, comment doit-elle etre realisee selon R18 ?",
    "options": [
      {
        "text": "Via un SI dedie",
        "correct": true
      },
      {
        "text": "Directement depuis le poste de travail sensible",
        "correct": false
      },
      {
        "text": "Via le SI de classe 2",
        "correct": false
      },
      {
        "text": "Via un compte du SI sensible",
        "correct": false
      }
    ],
    "explanation": "R18 precise que pour la classe 1, si la navigation est necessaire, elle doit se faire via un SI dedie.",
    "exigence": {
      "level": "recommande",
      "note": "R18 (classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-postes-rebond-classe1",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Quel est le niveau d'exigence concernant le deploiement de postes de rebond dedies a la navigation pour un SI de classe 1 ?",
    "options": [
      {
        "text": "Il est fortement recommande",
        "correct": true
      },
      {
        "text": "Il est obligatoire",
        "correct": false
      },
      {
        "text": "Il est interdit",
        "correct": false
      },
      {
        "text": "Il est simplement tolere",
        "correct": false
      }
    ],
    "explanation": "Selon R18-, pour la classe 1, il est fortement recommande de deployer des postes de rebond dedies a la navigation, cloisonnes du SI sensible.",
    "exigence": {
      "level": "recommande",
      "note": "R18- (classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-postes-rebond-cloisonnement",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Les postes de rebond dedies a la navigation (R18-) doivent presenter quelle caracteristique vis-a-vis du SI sensible ?",
    "options": [
      {
        "text": "Etre cloisonnes du SI sensible",
        "correct": true
      },
      {
        "text": "Etre integres au SI sensible",
        "correct": false
      },
      {
        "text": "Partager les comptes du SI sensible",
        "correct": false
      },
      {
        "text": "Etre heberges sur le meme reseau que le SI sensible",
        "correct": false
      }
    ],
    "explanation": "R18- prevoit des postes de rebond dedies a la navigation, cloisonnes du SI sensible.",
    "exigence": {
      "level": "recommande",
      "note": "R18- (classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-echange-dr-via-classe0",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Lorsque des informations DR sont echangees entre deux SI DR via un SI de classe 0, que doit-on faire ?",
    "options": [
      {
        "text": "Les chiffrer par des produits agrees DR",
        "correct": true
      },
      {
        "text": "Les chiffrer avec un simple produit a visa de securite",
        "correct": false
      },
      {
        "text": "Les transmettre en clair car les deux extremites sont DR",
        "correct": false
      },
      {
        "text": "Les compresser avant transmission",
        "correct": false
      }
    ],
    "explanation": "Selon R19, les infos DR echangees entre deux SI DR via un SI de classe 0 doivent etre chiffrees par des produits agrees DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R19 (echange DR via classe 0)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-echange-sensible-via-classe0",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Pour des informations sensibles echangees via un SI de classe 0, quelles affirmations sont exactes ?",
    "options": [
      {
        "text": "Elles doivent etre chiffrees",
        "correct": true
      },
      {
        "text": "Il est recommande d'utiliser un produit avec visa de securite",
        "correct": true
      },
      {
        "text": "Le chiffrement est seulement conseille",
        "correct": false
      },
      {
        "text": "Un produit agree DR est obligatoire",
        "correct": false
      }
    ],
    "explanation": "Selon R20, les infos sensibles echangees via un SI de classe 0 doivent etre chiffrees, et il est recommande d'utiliser un produit avec visa de securite.",
    "exigence": {
      "level": "obligatoire",
      "note": "R20 (echange sensible via classe 0)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-distinction-dr-sensible-classe0",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Quelle distinction R19 et R20 etablissent-elles pour le chiffrement via un SI de classe 0 ?",
    "options": [
      {
        "text": "DR : produits agrees DR obligatoires ; sensible : chiffrement obligatoire, produit a visa recommande",
        "correct": true
      },
      {
        "text": "DR et sensible : produits agrees DR obligatoires dans les deux cas",
        "correct": false
      },
      {
        "text": "DR : visa recommande ; sensible : agree DR obligatoire",
        "correct": false
      },
      {
        "text": "Aucune distinction n'est faite entre DR et sensible",
        "correct": false
      }
    ],
    "explanation": "R19 impose des produits agrees DR pour le DR, tandis que R20 impose le chiffrement pour le sensible avec une simple recommandation d'un produit a visa de securite.",
    "exigence": {
      "level": "obligatoire",
      "note": "R19 / R20"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-dmz-classe1",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "L'infrastructure de mise a disposition d'informations sensibles depuis Internet doit etre cloisonnee comment ?",
    "options": [
      {
        "text": "En DMZ, dans une passerelle de classe 1",
        "correct": true
      },
      {
        "text": "En DMZ, dans une passerelle de classe 2",
        "correct": false
      },
      {
        "text": "Directement sur le SI sensible sans cloisonnement",
        "correct": false
      },
      {
        "text": "Dans un SI de classe 0 ouvert",
        "correct": false
      }
    ],
    "explanation": "Selon R22, l'infrastructure de mise a disposition d'infos sensibles depuis Internet doit etre cloisonnee en DMZ, dans une passerelle de classe 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "R22 (DMZ passerelle classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-interconnexion-descendante-classe2",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "En classe 2, que recommande R23 pour une interconnexion descendante ?",
    "options": [
      {
        "text": "Preferer les supports amovibles plutot que le reseau, sous conditions strictes",
        "correct": true
      },
      {
        "text": "Imposer obligatoirement le reseau",
        "correct": false
      },
      {
        "text": "Interdire toute interconnexion descendante",
        "correct": false
      },
      {
        "text": "Autoriser librement le reseau sans condition",
        "correct": false
      }
    ],
    "explanation": "Selon R23, en classe 2 il est recommande de preferer une interconnexion descendante par supports amovibles plutot que par le reseau, avec des conditions strictes.",
    "exigence": {
      "level": "recommande",
      "note": "R23 (classe 2)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-echanges-protocoles-r24",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Dans un systeme d'echanges securises, que prevoit R24 concernant les protocoles et les flux ?",
    "options": [
      {
        "text": "Seuls les protocoles de transfert autorises, flux a l'initiative des clients externes",
        "correct": true
      },
      {
        "text": "Tous les protocoles sont autorises si chiffres",
        "correct": false
      },
      {
        "text": "Les flux sont a l'initiative du SI sensible",
        "correct": false
      },
      {
        "text": "Les protocoles sont libres mais traces",
        "correct": false
      }
    ],
    "explanation": "Selon R24, seuls les protocoles de transfert autorises sont utilises, et les flux doivent etre a l'initiative des clients externes.",
    "exigence": {
      "level": "obligatoire",
      "note": "R24 (echanges securises)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-echanges-restriction-r25",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Quel est le niveau d'exigence concernant la restriction du systeme d'echanges securises aux utilisateurs autorises (R25) ?",
    "options": [
      {
        "text": "Recommande",
        "correct": true
      },
      {
        "text": "Obligatoire",
        "correct": false
      },
      {
        "text": "Interdit",
        "correct": false
      },
      {
        "text": "Simple usage courant",
        "correct": false
      }
    ],
    "explanation": "Selon R25, il est recommande de restreindre l'acces au systeme d'echanges aux utilisateurs autorises.",
    "exigence": {
      "level": "recommande",
      "note": "R25 (echanges securises)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-echanges-auth-r26",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Concernant l'authentification au systeme d'echanges securises (R26), quelles affirmations sont exactes ?",
    "options": [
      {
        "text": "Il ne faut PAS s'authentifier avec un compte du SI sensible",
        "correct": true
      },
      {
        "text": "Le compte doit etre de moindre confiance avec un mot de passe different",
        "correct": true
      },
      {
        "text": "Il faut reutiliser le compte et le mot de passe du SI sensible",
        "correct": false
      },
      {
        "text": "L'authentification est facultative",
        "correct": false
      }
    ],
    "explanation": "Selon R26, on ne doit pas s'authentifier avec un compte du SI sensible : le compte doit etre de moindre confiance et le mot de passe different.",
    "exigence": {
      "level": "obligatoire",
      "note": "R26 (echanges securises)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-echanges-antivirus-r27",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Que prevoit R27 concernant l'analyse de contenu dans un systeme d'echanges securises ?",
    "options": [
      {
        "text": "Une analyse antivirus systematique",
        "correct": true
      },
      {
        "text": "Une analyse antivirus aleatoire par echantillonnage",
        "correct": false
      },
      {
        "text": "Aucune analyse si le flux est chiffre",
        "correct": false
      },
      {
        "text": "Une analyse uniquement pour les fichiers DR",
        "correct": false
      }
    ],
    "explanation": "Selon R27, une analyse de contenu antivirus systematique est requise.",
    "exigence": {
      "level": "obligatoire",
      "note": "R27 (echanges securises)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-echanges-tracabilite-r28",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Selon R28, quelle est l'exigence sur la tracabilite des echanges ?",
    "options": [
      {
        "text": "Tout echange doit etre trace et imputable",
        "correct": true
      },
      {
        "text": "Seuls les echanges DR doivent etre traces",
        "correct": false
      },
      {
        "text": "La tracabilite est seulement recommandee",
        "correct": false
      },
      {
        "text": "L'imputabilite n'est pas exigee",
        "correct": false
      }
    ],
    "explanation": "Selon R28, tout echange doit etre trace et imputable.",
    "exigence": {
      "level": "obligatoire",
      "note": "R28 (echanges securises)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-chiffrement-dr-hors-zone",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Selon l'II 901, quand les informations DR doivent-elles etre chiffrees par des moyens agrees ANSSI ?",
    "options": [
      {
        "text": "Des qu'elles transitent ou sont stockees hors d'une zone physiquement protegee",
        "correct": true
      },
      {
        "text": "Uniquement lorsqu'elles transitent sur Internet",
        "correct": false
      },
      {
        "text": "Seulement lors du stockage, jamais lors du transit",
        "correct": false
      },
      {
        "text": "Uniquement a l'interieur d'une zone physiquement protegee",
        "correct": false
      }
    ],
    "explanation": "Selon l'II 901, les infos DR doivent etre chiffrees par moyens agrees ANSSI des qu'elles transitent ou sont stockees hors d'une zone physiquement protegee.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 (chiffrement DR)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-navigation-chiffrement-moyens-agrees",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Quel type de moyens de chiffrement l'II 901 impose-t-elle pour les informations DR hors zone protegee ?",
    "options": [
      {
        "text": "Des moyens agrees ANSSI",
        "correct": true
      },
      {
        "text": "N'importe quel chiffrement grand public",
        "correct": false
      },
      {
        "text": "Un simple mot de passe d'archive",
        "correct": false
      },
      {
        "text": "Aucun moyen specifique n'est impose",
        "correct": false
      }
    ],
    "explanation": "L'II 901 impose que les infos DR soient chiffrees par des moyens agrees ANSSI hors zone physiquement protegee.",
    "exigence": {
      "level": "obligatoire",
      "note": "II 901 (moyens agrees ANSSI)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-navigation-vraifaux-classe2-navigation",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Vrai ou faux : il est seulement recommande d'eviter la navigation Web depuis un SI de classe 2.",
    "options": [
      {
        "text": "Faux : la navigation Web y est impossible",
        "correct": true
      },
      {
        "text": "Vrai : elle est seulement recommandee d'etre evitee",
        "correct": false
      },
      {
        "text": "Vrai : elle est conseillee via un rebond",
        "correct": false
      }
    ],
    "explanation": "R18 indique que la navigation Web est IMPOSSIBLE depuis un SI de classe 2, et non seulement deconseillee.",
    "exigence": {
      "level": "interdit",
      "note": "R18 (classe 2)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-piege-dr-clair",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Idee recue : comme les deux extremites sont des SI DR, des infos DR peuvent transiter en clair via un SI de classe 0. Qu'en est-il ?",
    "options": [
      {
        "text": "Faux : elles doivent etre chiffrees par produits agrees DR",
        "correct": true
      },
      {
        "text": "Vrai : le chiffrement n'est pas necessaire entre SI DR",
        "correct": false
      },
      {
        "text": "Vrai : un simple visa de securite suffit a les laisser en clair",
        "correct": false
      }
    ],
    "explanation": "R19 impose le chiffrement par produits agrees DR des que des infos DR transitent via un SI de classe 0, meme entre deux SI DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R19"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-piege-compte-sensible",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Un utilisateur peut-il s'authentifier au systeme d'echanges securises avec son compte habituel du SI sensible ?",
    "options": [
      {
        "text": "Non, il faut un compte de moindre confiance avec un mot de passe different",
        "correct": true
      },
      {
        "text": "Oui, pour simplifier la gestion des acces",
        "correct": false
      },
      {
        "text": "Oui, a condition de garder le meme mot de passe",
        "correct": false
      }
    ],
    "explanation": "R26 interdit de s'authentifier avec un compte du SI sensible : le compte doit etre de moindre confiance et le mot de passe different.",
    "exigence": {
      "level": "obligatoire",
      "note": "R26"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-flux-initiative",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Dans un systeme d'echanges securises (R24), qui doit etre a l'initiative des flux ?",
    "options": [
      {
        "text": "Les clients externes",
        "correct": true
      },
      {
        "text": "Le SI sensible interne",
        "correct": false
      },
      {
        "text": "L'administrateur de la passerelle",
        "correct": false
      },
      {
        "text": "N'importe quelle partie indifferemment",
        "correct": false
      }
    ],
    "explanation": "R24 prevoit que les flux sont a l'initiative des clients externes.",
    "exigence": {
      "level": "obligatoire",
      "note": "R24"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-dmz-cas-concret",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Une organisation veut publier des informations sensibles accessibles depuis Internet. Quelle architecture est conforme a R22 ?",
    "options": [
      {
        "text": "Une infrastructure cloisonnee en DMZ au sein d'une passerelle de classe 1",
        "correct": true
      },
      {
        "text": "Un serveur place directement dans le SI sensible",
        "correct": false
      },
      {
        "text": "Une infrastructure en DMZ dans une passerelle de classe 0",
        "correct": false
      },
      {
        "text": "Aucun cloisonnement n'est requis si les donnees sont chiffrees",
        "correct": false
      }
    ],
    "explanation": "R22 exige que l'infrastructure de mise a disposition d'infos sensibles depuis Internet soit cloisonnee en DMZ dans une passerelle de classe 1.",
    "exigence": {
      "level": "obligatoire",
      "note": "R22"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-supports-amovibles-conditions",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "L'interconnexion descendante par supports amovibles recommandee en classe 2 (R23) s'accompagne de quoi ?",
    "options": [
      {
        "text": "De conditions strictes",
        "correct": true
      },
      {
        "text": "D'aucune condition particuliere",
        "correct": false
      },
      {
        "text": "D'une interdiction de tout chiffrement",
        "correct": false
      },
      {
        "text": "D'une obligation d'utiliser le reseau en parallele",
        "correct": false
      }
    ],
    "explanation": "R23 recommande l'interconnexion descendante par supports amovibles plutot que par le reseau, sous conditions strictes.",
    "exigence": {
      "level": "recommande",
      "note": "R23"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-visa-securite-sensible",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Pour le chiffrement d'infos sensibles via un SI de classe 0 (R20), le produit avec visa de securite est-il obligatoire ?",
    "options": [
      {
        "text": "Non, il est seulement recommande",
        "correct": true
      },
      {
        "text": "Oui, il est obligatoire",
        "correct": false
      },
      {
        "text": "Non, il est interdit",
        "correct": false
      },
      {
        "text": "Oui, au meme titre qu'un produit agree DR",
        "correct": false
      }
    ],
    "explanation": "R20 impose le chiffrement des infos sensibles mais recommande seulement l'usage d'un produit avec visa de securite.",
    "exigence": {
      "level": "recommande",
      "note": "R20 (produit a visa)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-antivirus-portee",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "L'analyse antivirus prevue par R27 s'applique-t-elle a tous les echanges ou seulement a certains ?",
    "options": [
      {
        "text": "A tous les echanges, de maniere systematique",
        "correct": true
      },
      {
        "text": "Seulement aux echanges entrants chiffres",
        "correct": false
      },
      {
        "text": "Seulement aux fichiers superieurs a une certaine taille",
        "correct": false
      },
      {
        "text": "Seulement sur demande de l'utilisateur",
        "correct": false
      }
    ],
    "explanation": "R27 prevoit une analyse de contenu antivirus systematique.",
    "exigence": {
      "level": "obligatoire",
      "note": "R27"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-navigation-synthese-classe1-rebond",
    "refId": "dr-ii901",
    "themeId": "navigation",
    "question": "Pour reduire le risque lie a la navigation depuis un SI de classe 1, quelle combinaison est conforme a R18 et R18- ?",
    "options": [
      {
        "text": "Interdire la navigation (recommande) et, si besoin, utiliser des postes de rebond dedies cloisonnes (fortement recommande)",
        "correct": true
      },
      {
        "text": "Autoriser la navigation directe sur les postes sensibles",
        "correct": false
      },
      {
        "text": "Rendre la navigation impossible comme en classe 2",
        "correct": false
      },
      {
        "text": "Naviguer via un compte du SI sensible",
        "correct": false
      }
    ],
    "explanation": "R18 recommande d'interdire la navigation en classe 1 (via un SI dedie si necessaire) et R18- recommande fortement des postes de rebond dedies cloisonnes du SI sensible.",
    "exigence": {
      "level": "recommande",
      "note": "R18 / R18- (classe 1)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-produits-visa-prestataires-r29",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Concernant le recours a des prestataires pour un SI traitant des informations, quel est le niveau d'exigence pose par la source ?",
    "options": [
      {
        "text": "Il est fortement recommande de recourir a des prestataires disposant d'un visa de securite ANSSI",
        "correct": true
      },
      {
        "text": "Il est strictement interdit de recourir a des prestataires sans visa ANSSI",
        "correct": false
      },
      {
        "text": "Le recours a des prestataires est laisse a la libre appreciation sans aucune recommandation",
        "correct": false
      }
    ],
    "explanation": "R29 indique qu'il est fortement recommande de recourir a des prestataires disposant d'un visa de securite ANSSI, ce qui correspond a une recommandation et non a une obligation.",
    "exigence": {
      "level": "recommande",
      "note": "R29 (prestataires de confiance)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-contrat-dr-r29",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Pour un SI Diffusion Restreinte (DR), que precise R29 au sujet du contrat avec le prestataire ?",
    "options": [
      {
        "text": "Le contrat doit apporter des garanties",
        "correct": true
      },
      {
        "text": "Aucun contrat formel n'est necessaire",
        "correct": false
      },
      {
        "text": "Le contrat est seulement conseille mais non requis",
        "correct": false
      }
    ],
    "explanation": "R29 precise que, pour le DR, le contrat doit apporter des garanties, ce qui constitue une obligation (formulation en doit).",
    "exigence": {
      "level": "obligatoire",
      "note": "R29 (SI DR, contrat)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-qualifies-obligatoires-r30",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Que dispose R30 concernant les produits qualifies des qu'ils existent ?",
    "options": [
      {
        "text": "Les produits qualifies doivent etre utilises",
        "correct": true
      },
      {
        "text": "Les produits qualifies sont seulement conseilles",
        "correct": false
      },
      {
        "text": "L'utilisation de produits qualifies est facultative tant qu'un produit certifie existe",
        "correct": false
      }
    ],
    "explanation": "R30 indique que, des qu'ils existent, les produits qualifies doivent etre utilises, soit une obligation.",
    "exigence": {
      "level": "obligatoire",
      "note": "R30 (produits qualifies)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-qualifie-vs-certifie-r30",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Selon R30, comment doit-on arbitrer entre un produit qualifie ANSSI et un produit seulement certifie ?",
    "options": [
      {
        "text": "Un produit qualifie ANSSI doit etre prefere a un produit seulement certifie",
        "correct": true
      },
      {
        "text": "Un produit certifie doit etre prefere a un produit qualifie",
        "correct": false
      },
      {
        "text": "Les deux sont strictement equivalents et interchangeables",
        "correct": false
      }
    ],
    "explanation": "R30 prevoit qu'un produit qualifie ANSSI doit etre prefere a un produit seulement certifie (obligation).",
    "exigence": {
      "level": "obligatoire",
      "note": "R30 (preference qualifie sur certifie)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-conditions-emploi-agree-r31",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Sur un SI DR, quelles regles s'appliquent aux conditions d'emploi d'un produit agree DR (R31) ?",
    "options": [
      {
        "text": "Les conditions d'emploi du produit agree DR doivent etre appliquees",
        "correct": true
      },
      {
        "text": "Les conditions d'emploi peuvent etre adaptees librement par l'exploitant",
        "correct": false
      },
      {
        "text": "Les conditions d'emploi ne s'appliquent qu'aux SI sensibles",
        "correct": false
      }
    ],
    "explanation": "R31 impose que, sur un SI DR, les conditions d'emploi d'un produit agree DR doivent etre appliquees.",
    "exigence": {
      "level": "obligatoire",
      "note": "R31 (SI DR, produit agree)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-preuves-homologation-r31",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "D'apres R31, ou sont versees les preuves de l'application des conditions d'emploi d'un produit agree DR ?",
    "options": [
      {
        "text": "Au dossier d'homologation",
        "correct": true
      },
      {
        "text": "Au registre des prestataires ANSSI",
        "correct": false
      },
      {
        "text": "Aucune preuve n'est requise",
        "correct": false
      }
    ],
    "explanation": "R31 prevoit que les preuves de l'application des conditions d'emploi sont versees au dossier d'homologation.",
    "exigence": {
      "level": "obligatoire",
      "note": "R31 (preuves au dossier d'homologation)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-definition-visa-securite",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Que recouvre la notion de visa de securite selon la source ?",
    "options": [
      {
        "text": "La certification ou la qualification, qui attestent un niveau de confiance",
        "correct": true
      },
      {
        "text": "L'autorisation specifique de traiter des informations DR",
        "correct": false
      },
      {
        "text": "Un contrat de prestation conclu avec l'ANSSI",
        "correct": false
      }
    ],
    "explanation": "La source precise que le visa de securite (certification ou qualification) atteste un niveau de confiance, a distinguer de l'agrement.",
    "exigence": {
      "level": "usage",
      "note": "Definition visa de securite (R29 a R31)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-definition-agrement",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "A quoi sert specifiquement l'agrement, par opposition au visa de securite ?",
    "options": [
      {
        "text": "Il autorise specifiquement le traitement d'informations DR",
        "correct": true
      },
      {
        "text": "Il atteste uniquement un niveau de confiance general du produit",
        "correct": false
      },
      {
        "text": "Il remplace l'obligation de recourir a un produit qualifie",
        "correct": false
      }
    ],
    "explanation": "La source distingue le visa de securite (niveau de confiance) de l'agrement, qui autorise specifiquement le traitement d'informations DR.",
    "exigence": {
      "level": "usage",
      "note": "Distinction visa / agrement"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-agrement-requis-dr",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Pour le traitement d'informations DR, quel element est requis selon la distinction posee par la source ?",
    "options": [
      {
        "text": "L'agrement DR",
        "correct": true
      },
      {
        "text": "Une simple certification suffit toujours",
        "correct": false
      },
      {
        "text": "Aucun agrement, le visa de securite suffit pour le DR",
        "correct": false
      }
    ],
    "explanation": "La source indique explicitement que, pour le DR, l'agrement DR est requis.",
    "exigence": {
      "level": "obligatoire",
      "note": "Distinction DR : agrement requis"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-piege-visa-vaut-agrement",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Vrai ou faux : disposer d'un visa de securite (certification ou qualification) suffit a autoriser le traitement d'informations DR.",
    "options": [
      {
        "text": "Faux : le visa atteste un niveau de confiance, mais l'agrement DR reste requis pour traiter des informations DR",
        "correct": true
      },
      {
        "text": "Vrai : le visa de securite vaut autorisation de traiter du DR",
        "correct": false
      }
    ],
    "explanation": "La source distingue le visa de securite (niveau de confiance) de l'agrement, qui autorise specifiquement le traitement DR : pour le DR, l'agrement DR est requis.",
    "exigence": {
      "level": "obligatoire",
      "note": "Distinction visa / agrement DR"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-piege-recommande-vs-obligatoire-r29-r30",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Parmi ces affirmations, lesquelles refletent correctement le niveau d'exigence de la source ?",
    "options": [
      {
        "text": "Recourir a des prestataires avec visa ANSSI est fortement recommande (R29)",
        "correct": true
      },
      {
        "text": "L'utilisation des produits qualifies, des qu'ils existent, est obligatoire (R30)",
        "correct": true
      },
      {
        "text": "Recourir a des prestataires avec visa ANSSI est une obligation stricte (R29)",
        "correct": false
      },
      {
        "text": "L'utilisation des produits qualifies est seulement recommandee (R30)",
        "correct": false
      }
    ],
    "explanation": "R29 emploie la formulation fortement recommande (recommandation), alors que R30 emploie doivent (obligation) ; il ne faut pas confondre les deux niveaux.",
    "exigence": {
      "level": "obligatoire",
      "note": "R30 obligatoire vs R29 recommande"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-cas-deux-produits",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Cas concret : pour un meme besoin, vous avez le choix entre un produit certifie ANSSI et un produit qualifie ANSSI. Que faire selon R30 ?",
    "options": [
      {
        "text": "Utiliser le produit qualifie, qui doit etre prefere au produit seulement certifie",
        "correct": true
      },
      {
        "text": "Utiliser le produit certifie car la certification est un niveau superieur",
        "correct": false
      },
      {
        "text": "Choisir indifferemment, les deux conviennent",
        "correct": false
      }
    ],
    "explanation": "R30 impose qu'un produit qualifie ANSSI soit prefere a un produit seulement certifie.",
    "exigence": {
      "level": "obligatoire",
      "note": "R30 (preference qualifie)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-cas-produit-qualifie-existe",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Cas concret : un produit qualifie repondant au besoin existe sur le marche. Quelle est la conduite a tenir selon R30 ?",
    "options": [
      {
        "text": "Il doit etre utilise des lors qu'il existe",
        "correct": true
      },
      {
        "text": "Son utilisation reste optionnelle si un produit non qualifie est moins cher",
        "correct": false
      },
      {
        "text": "Il n'est utilise que pour les SI sensibles, pas pour le DR",
        "correct": false
      }
    ],
    "explanation": "R30 dispose que, des qu'ils existent, les produits qualifies doivent etre utilises.",
    "exigence": {
      "level": "obligatoire",
      "note": "R30 (produit qualifie existant)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-produits-cas-agree-dr-conditions",
    "refId": "dr-ii901",
    "themeId": "produits",
    "question": "Cas concret : un produit agree DR est deploye sur un SI DR. Quelles obligations en decoulent (R31) ?",
    "options": [
      {
        "text": "Appliquer les conditions d'emploi du produit agree DR",
        "correct": true
      },
      {
        "text": "Verser au dossier d'homologation les preuves de cette application",
        "correct": true
      },
      {
        "text": "Aucune preuve n'est a conserver une fois le produit installe",
        "correct": false
      }
    ],
    "explanation": "R31 impose d'appliquer les conditions d'emploi du produit agree DR sur un SI DR et de verser les preuves au dossier d'homologation.",
    "exigence": {
      "level": "obligatoire",
      "note": "R31 (conditions d'emploi + preuves)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cloisonnement-r32-zones-confiance",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Selon R32, comment un SI sensible doit-il etre structure du point de vue du cloisonnement ?",
    "options": [
      {
        "text": "En zones de confiance homogenes definies selon les besoins et l'exposition",
        "correct": true
      },
      {
        "text": "En une zone unique pour simplifier l'administration",
        "correct": false
      },
      {
        "text": "En zones reparties uniquement selon l'ordre alphabetique des services",
        "correct": false
      }
    ],
    "explanation": "R32 impose le cloisonnement d'un SI sensible en zones de confiance homogenes (besoins, exposition), avec une segmentation reseau reflechie et un filtrage fin.",
    "exigence": {
      "level": "obligatoire",
      "note": "R32 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r32-segmentation",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Que prevoit R32 en complement du decoupage en zones de confiance ?",
    "options": [
      {
        "text": "Une segmentation reseau reflechie accompagnee d'un filtrage fin",
        "correct": true
      },
      {
        "text": "Le chiffrement integral des disques de chaque poste",
        "correct": false
      },
      {
        "text": "La suppression de tout filtrage entre zones de meme niveau",
        "correct": false
      }
    ],
    "explanation": "R32 associe au cloisonnement une segmentation reseau reflechie et un filtrage fin entre les zones.",
    "exigence": {
      "level": "obligatoire",
      "note": "R32 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r33-zone-publique",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "D'apres R33, que faut-il faire lorsqu'un reseau sensible s'etend dans une zone ouverte au public ?",
    "options": [
      {
        "text": "Cloisonner cette extension du reste du SI sensible",
        "correct": true
      },
      {
        "text": "Interdire purement et simplement toute extension",
        "correct": false
      },
      {
        "text": "La laisser communiquer librement avec le coeur du SI sensible",
        "correct": false
      }
    ],
    "explanation": "R33 impose que l'extension d'un reseau sensible dans une zone ouverte au public soit cloisonnee du reste du SI sensible.",
    "exigence": {
      "level": "obligatoire",
      "note": "R33 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r33-vrai-faux",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Vrai ou faux : selon R33, une extension du reseau sensible dans une zone ouverte au public peut rester au meme niveau de confiance que le coeur du SI sensible, sans cloisonnement specifique.",
    "options": [
      {
        "text": "Faux : elle doit etre cloisonnee du reste du SI sensible",
        "correct": true
      },
      {
        "text": "Vrai : aucun cloisonnement n'est exige dans ce cas",
        "correct": false
      }
    ],
    "explanation": "R33 exige le cloisonnement de l'extension situee en zone ouverte au public vis-a-vis du reste du SI sensible.",
    "exigence": {
      "level": "obligatoire",
      "note": "R33 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r34-laterales",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Que doit definir et mettre en oeuvre le responsable selon R34 ?",
    "options": [
      {
        "text": "Une strategie de blocage des communications laterales",
        "correct": true
      },
      {
        "text": "Une strategie d'ouverture totale des flux internes",
        "correct": false
      },
      {
        "text": "Une politique de sauvegarde hors site uniquement",
        "correct": false
      }
    ],
    "explanation": "R34 impose au responsable de definir et mettre en oeuvre une strategie de blocage des communications laterales.",
    "exigence": {
      "level": "obligatoire",
      "note": "R34 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r34-ordre",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Selon R34, dans quel ordre la strategie de blocage des communications laterales s'applique-t-elle ?",
    "options": [
      {
        "text": "Les postes puis les serveurs",
        "correct": true
      },
      {
        "text": "Les serveurs puis les postes",
        "correct": false
      },
      {
        "text": "Uniquement les equipements reseau",
        "correct": false
      }
    ],
    "explanation": "R34 precise que la strategie de blocage des communications laterales concerne les postes puis les serveurs.",
    "exigence": {
      "level": "obligatoire",
      "note": "R34 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r34-responsabilite",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "A qui R34 attribue-t-il la responsabilite de la strategie de blocage des communications laterales ?",
    "options": [
      {
        "text": "Au responsable",
        "correct": true
      },
      {
        "text": "A chaque utilisateur final",
        "correct": false
      },
      {
        "text": "A un prestataire externe obligatoirement",
        "correct": false
      }
    ],
    "explanation": "R34 designe le responsable comme devant definir et mettre en oeuvre cette strategie.",
    "exigence": {
      "level": "obligatoire",
      "note": "R34 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r35-avant-exploitation",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Selon R35, que faut-il faire avant l'exploitation des materiels et logiciels ?",
    "options": [
      {
        "text": "Verifier leur integrite et durcir leur configuration",
        "correct": true
      },
      {
        "text": "Se contenter d'installer la configuration par defaut du constructeur",
        "correct": false
      },
      {
        "text": "Reporter le durcissement apres la mise en production",
        "correct": false
      }
    ],
    "explanation": "R35 impose, avant exploitation, de verifier l'integrite des materiels/logiciels et de durcir leur configuration.",
    "exigence": {
      "level": "obligatoire",
      "note": "R35 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r35-perimetre",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "A quel perimetre s'applique la verification d'integrite et le durcissement exiges par R35 ?",
    "options": [
      {
        "text": "A chaque composant",
        "correct": true
      },
      {
        "text": "Seulement aux serveurs critiques",
        "correct": false
      },
      {
        "text": "Seulement au premier equipement deploye",
        "correct": false
      }
    ],
    "explanation": "R35 demande que l'integrite soit verifiee et la configuration durcie pour chaque composant.",
    "exigence": {
      "level": "obligatoire",
      "note": "R35 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r35-deux-actions",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Quelles sont les deux actions distinctes exigees par R35 avant exploitation ?",
    "options": [
      {
        "text": "Verifier l'integrite des materiels/logiciels",
        "correct": true
      },
      {
        "text": "Durcir la configuration",
        "correct": true
      },
      {
        "text": "Supprimer toute journalisation des composants",
        "correct": false
      }
    ],
    "explanation": "R35 exige a la fois la verification de l'integrite des materiels/logiciels et le durcissement de leur configuration.",
    "exigence": {
      "level": "obligatoire",
      "note": "R35 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-critere-zones",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Sur quels criteres R32 fonde-t-il l'homogeneite des zones de confiance ?",
    "options": [
      {
        "text": "Les besoins et l'exposition",
        "correct": true
      },
      {
        "text": "L'anciennete des equipements",
        "correct": false
      },
      {
        "text": "Le cout d'acquisition du materiel",
        "correct": false
      }
    ],
    "explanation": "R32 definit des zones de confiance homogenes en fonction des besoins et de l'exposition.",
    "exigence": {
      "level": "obligatoire",
      "note": "R32 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-piege-filtrage",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Idee recue : pour un SI sensible, une simple segmentation reseau suffit-elle au sens de R32 ?",
    "options": [
      {
        "text": "Non : R32 demande une segmentation reflechie ET un filtrage fin",
        "correct": true
      },
      {
        "text": "Oui : la segmentation seule remplit l'exigence",
        "correct": false
      }
    ],
    "explanation": "R32 associe explicitement la segmentation reseau reflechie a un filtrage fin, la segmentation seule ne suffit pas.",
    "exigence": {
      "level": "obligatoire",
      "note": "R32 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r34-objectif",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Quel est l'objectif de la strategie exigee par R34 ?",
    "options": [
      {
        "text": "Bloquer les communications laterales au sein du SI",
        "correct": true
      },
      {
        "text": "Accelerer les echanges entre postes voisins",
        "correct": false
      },
      {
        "text": "Centraliser tous les flux sur un unique relais ouvert",
        "correct": false
      }
    ],
    "explanation": "R34 vise le blocage des communications laterales, en traitant d'abord les postes puis les serveurs.",
    "exigence": {
      "level": "obligatoire",
      "note": "R34 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r35-integrite-config",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Le durcissement de configuration exige par R35 dispense-t-il de verifier l'integrite des materiels et logiciels ?",
    "options": [
      {
        "text": "Non : la verification d'integrite est exigee en plus du durcissement",
        "correct": true
      },
      {
        "text": "Oui : le durcissement couvre a lui seul l'exigence",
        "correct": false
      }
    ],
    "explanation": "R35 impose deux exigences cumulatives : verifier l'integrite des materiels/logiciels et durcir leur configuration, pour chaque composant.",
    "exigence": {
      "level": "obligatoire",
      "note": "R35 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-r33-portee",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "L'exigence de cloisonnement de R33 concerne-t-elle l'isolement vis-a-vis du public ou vis-a-vis du reste du SI sensible ?",
    "options": [
      {
        "text": "Vis-a-vis du reste du SI sensible",
        "correct": true
      },
      {
        "text": "Uniquement vis-a-vis d'Internet, sans rapport avec le SI sensible interne",
        "correct": false
      }
    ],
    "explanation": "R33 demande que l'extension en zone ouverte au public soit cloisonnee du reste du SI sensible.",
    "exigence": {
      "level": "obligatoire",
      "note": "R33 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-cloisonnement-synthese-obligations",
    "refId": "dr-ii901",
    "themeId": "cloisonnement",
    "question": "Parmi ces affirmations sur le cloisonnement et le durcissement d'un SI sensible, lesquelles sont conformes aux regles PG-075 ?",
    "options": [
      {
        "text": "Le SI sensible doit etre cloisonne en zones de confiance homogenes (R32)",
        "correct": true
      },
      {
        "text": "Une strategie de blocage des communications laterales doit etre mise en oeuvre (R34)",
        "correct": true
      },
      {
        "text": "L'integrite et le durcissement peuvent etre verifies une seule fois sur un composant temoin (R35)",
        "correct": false
      }
    ],
    "explanation": "R32 impose le cloisonnement en zones de confiance homogenes et R34 la strategie de blocage des communications laterales ; R35 exige la verification d'integrite et le durcissement pour chaque composant, pas un seul temoin.",
    "exigence": {
      "level": "obligatoire",
      "note": "R32, R34, R35 (SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-marquage-timbre-position",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Ou doit figurer le timbre 'Diffusion Restreinte' sur un document papier ?",
    "options": [
      {
        "text": "Au milieu du haut de chaque page",
        "correct": true
      },
      {
        "text": "Uniquement sur la premiere page",
        "correct": false
      },
      {
        "text": "Au bas de chaque page, a droite",
        "correct": false
      },
      {
        "text": "Dans la marge laterale de la couverture seulement",
        "correct": false
      }
    ],
    "explanation": "Selon l'IGI 1300 Annexe 1 §2, le timbre 'Diffusion Restreinte' est appose au milieu du haut de chaque page du document.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-chaque-page",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Le timbre 'Diffusion Restreinte' ne doit etre appose que sur la premiere page d'un document papier.",
    "options": [
      {
        "text": "Faux : il figure au haut de chaque page",
        "correct": true
      },
      {
        "text": "Vrai : seule la premiere page est concernee",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 impose le timbre au milieu du haut de CHAQUE page, pas seulement la premiere.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-electronique",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Pour un document electronique Diffusion Restreinte, comment est assure le marquage ?",
    "options": [
      {
        "text": "Par un rappel de la mention en debut de chaque page",
        "correct": true
      },
      {
        "text": "Par une seule mention dans les proprietes du fichier",
        "correct": false
      },
      {
        "text": "Par un filigrane uniquement sur la derniere page",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 prevoit, pour les documents electroniques, un rappel de la mention en debut de chaque page.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-document-relie",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Pour un document relie classifie Diffusion Restreinte, ou la mention doit-elle apparaitre ?",
    "options": [
      {
        "text": "Sur la page de garde et la couverture",
        "correct": true
      },
      {
        "text": "Uniquement a l'interieur, sur la table des matieres",
        "correct": false
      },
      {
        "text": "Sur la tranche du document seulement",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 precise que pour les documents relies, la mention figure sur la page de garde et la couverture.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-support-non-papier",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Comment doit etre la mention apposee sur un support non papier (par exemple un support de stockage) ?",
    "options": [
      {
        "text": "Adaptee, definitive et toujours visible",
        "correct": true
      },
      {
        "text": "Temporaire et amovible pour faciliter la reutilisation",
        "correct": false
      },
      {
        "text": "Facultative si le support reste dans un local securise",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 exige pour les supports non papier une mention adaptee, definitive et toujours visible.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-identification-1re-page",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Quelles informations d'identification doivent figurer en premiere page d'un document Diffusion Restreinte ?",
    "options": [
      {
        "text": "L'emetteur",
        "correct": true
      },
      {
        "text": "La date",
        "correct": true
      },
      {
        "text": "Le numero d'enregistrement",
        "correct": true
      },
      {
        "text": "Le nom de tous les destinataires finaux",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 prevoit l'identification en premiere page par l'emetteur, la date et le numero d'enregistrement.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-enregistrement-depart-arrivee",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "A quel(s) moment(s) un document Diffusion Restreinte doit-il etre enregistre ?",
    "options": [
      {
        "text": "Au depart et a l'arrivee",
        "correct": true
      },
      {
        "text": "Au depart uniquement",
        "correct": false
      },
      {
        "text": "A l'arrivee uniquement",
        "correct": false
      },
      {
        "text": "Seulement en cas de destruction",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 impose l'enregistrement des documents au depart ET a l'arrivee.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-lieu-elaboration",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Dans quels lieux l'elaboration d'un document Diffusion Restreinte doit-elle se faire ?",
    "options": [
      {
        "text": "Dans des lieux empechant l'acces de personnes non autorisees",
        "correct": true
      },
      {
        "text": "Dans n'importe quel espace de travail ouvert",
        "correct": false
      },
      {
        "text": "Uniquement dans une zone classifiee Secret",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 impose une elaboration dans des lieux empechant l'acces de personnes non autorisees.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-conservation-meubles",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Comment doivent etre conserves les documents Diffusion Restreinte ?",
    "options": [
      {
        "text": "Dans des meubles fermant a clef",
        "correct": true
      },
      {
        "text": "Dans un coffre-fort agree pour le Secret Defense",
        "correct": false
      },
      {
        "text": "Sur un bureau, a condition que le local soit verrouille la nuit",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §3 prevoit la conservation dans des meubles fermant a clef.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §3"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-reproduction",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "La reproduction d'un document Diffusion Restreinte est :",
    "options": [
      {
        "text": "Limitee aux seuls besoins du service",
        "correct": true
      },
      {
        "text": "Libre et sans restriction",
        "correct": false
      },
      {
        "text": "Totalement interdite",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §3 limite la reproduction aux seuls besoins du service.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §3"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-destruction",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Comment doit etre realisee la destruction d'un document Diffusion Restreinte ?",
    "options": [
      {
        "text": "De maniere irreversible, sous la responsabilite du detenteur",
        "correct": true
      },
      {
        "text": "Par simple mise a la corbeille apres anonymisation",
        "correct": false
      },
      {
        "text": "Obligatoirement par un prestataire externe agree",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §3 impose une destruction irreversible sous la responsabilite du detenteur.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §3"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-double-enveloppe",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Pour la diffusion externe d'un document Diffusion Restreinte par voie postale, quel conditionnement est requis ?",
    "options": [
      {
        "text": "Une double enveloppe",
        "correct": true
      },
      {
        "text": "Une enveloppe unique portant la mention DR",
        "correct": false
      },
      {
        "text": "Une enveloppe transparente pour faciliter le controle",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §4 impose une diffusion externe sous double enveloppe.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §4"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-enveloppe-interieure",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Dans le cadre de la double enveloppe, que doit porter l'enveloppe interieure ?",
    "options": [
      {
        "text": "La mention Diffusion Restreinte et les references",
        "correct": true
      },
      {
        "text": "Rien, elle doit rester neutre",
        "correct": false
      },
      {
        "text": "Uniquement l'adresse du destinataire",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §4 precise que l'enveloppe interieure porte la mention DR et les references.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §4"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-enveloppe-exterieure",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Dans le cadre de la double enveloppe, comment doit etre l'enveloppe exterieure ?",
    "options": [
      {
        "text": "Neutre",
        "correct": true
      },
      {
        "text": "Portant la mention DR bien visible",
        "correct": false
      },
      {
        "text": "De couleur rouge reglementaire",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §4 prevoit une enveloppe exterieure neutre.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §4"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-transmission-internet",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "La transmission d'un document Diffusion Restreinte sur Internet ou un SI non homologue DR est :",
    "options": [
      {
        "text": "Interdite, sauf mesures particulieres conformes a l'II 901",
        "correct": true
      },
      {
        "text": "Autorisee si le fichier est mot de passe protege",
        "correct": false
      },
      {
        "text": "Toujours autorisee entre agents habilites",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §4 interdit la transmission DR sur Internet ou tout SI non homologue DR, sauf mesures particulieres conformes a l'II 901.",
    "exigence": {
      "level": "interdit",
      "note": "IGI 1300 Annexe 1 §4"
    },
    "sources": [
      "igi1300-an1",
      "ii901"
    ]
  },
  {
    "id": "q-marquage-homologation-si",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Les systemes d'information traitant, stockant ou transmettant du Diffusion Restreinte font l'objet de :",
    "options": [
      {
        "text": "Une homologation au titre de l'II 901",
        "correct": true
      },
      {
        "text": "Une simple declaration au RGPD",
        "correct": false
      },
      {
        "text": "Aucune formalite particuliere",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §5 prevoit que les SI traitant, stockant ou transmettant du DR font l'objet d'une homologation (II 901).",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §5"
    },
    "sources": [
      "igi1300-an1",
      "ii901"
    ]
  },
  {
    "id": "q-marquage-exception-urgence",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Dans quel cas un SI non homologue peut-il etre utilise a titre exceptionnel pour du Diffusion Restreinte ?",
    "options": [
      {
        "text": "Lorsque l'urgence prime sur la confidentialite, avec notification au FSSI",
        "correct": true
      },
      {
        "text": "Lorsque l'utilisateur estime le risque acceptable",
        "correct": false
      },
      {
        "text": "Pendant les week-ends et jours feries",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §5 admet, par exception, l'usage d'un SI non homologue si l'urgence prime sur la confidentialite, ce qui doit etre notifie au FSSI.",
    "exigence": {
      "level": "usage",
      "note": "IGI 1300 Annexe 1 §5 (exception notifiee au FSSI)"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-r36-fichiers",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Quel est le niveau d'exigence concernant les moyens de marquage des fichiers et applications sensibles (R36) ?",
    "options": [
      {
        "text": "Fortement recommande",
        "correct": true
      },
      {
        "text": "Obligatoire",
        "correct": false
      },
      {
        "text": "Interdit",
        "correct": false
      },
      {
        "text": "Simple usage facultatif",
        "correct": false
      }
    ],
    "explanation": "La R36 indique qu'il est fortement recommande de se doter de moyens de marquage des fichiers et applications sensibles.",
    "exigence": {
      "level": "recommande",
      "note": "R36 (fichiers/applications sensibles)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-marquage-r36-sensibilisation",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Outre le marquage des fichiers sensibles, que recommande fortement la R36 ?",
    "options": [
      {
        "text": "Sensibiliser les utilisateurs",
        "correct": true
      },
      {
        "text": "Chiffrer systematiquement tous les disques durs",
        "correct": false
      },
      {
        "text": "Detruire les fichiers apres chaque session",
        "correct": false
      }
    ],
    "explanation": "La R36 recommande fortement, en complement du marquage, de sensibiliser les utilisateurs.",
    "exigence": {
      "level": "recommande",
      "note": "R36 (sensibilisation)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-marquage-r37-supports",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Concernant le marquage des supports physiques de stockage (R37), le texte indique qu'il est :",
    "options": [
      {
        "text": "Fortement recommande de les marquer",
        "correct": true
      },
      {
        "text": "Obligatoire de les marquer",
        "correct": false
      },
      {
        "text": "Inutile si les supports sont chiffres",
        "correct": false
      }
    ],
    "explanation": "La R37 indique qu'il est fortement recommande de marquer les supports physiques de stockage.",
    "exigence": {
      "level": "recommande",
      "note": "R37 (supports physiques)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-marquage-r38-cablage",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Que recommande la R38 a propos du cablage ?",
    "options": [
      {
        "text": "Adopter un code couleur selon le niveau de sensibilite",
        "correct": true
      },
      {
        "text": "Utiliser exclusivement de la fibre optique",
        "correct": false
      },
      {
        "text": "Marquer chaque cable d'un numero d'enregistrement",
        "correct": false
      }
    ],
    "explanation": "La R38 recommande d'adopter un code couleur pour le cablage selon le niveau de sensibilite.",
    "exigence": {
      "level": "recommande",
      "note": "R38 (code couleur cablage)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-marquage-dr-vs-sensible-exigence",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Quelle difference de niveau d'exigence le referentiel etablit-il entre le marquage du DR et celui des fichiers sensibles ?",
    "options": [
      {
        "text": "Obligatoire pour le DR (timbre par page), seulement fortement recommande pour les fichiers sensibles (R36)",
        "correct": true
      },
      {
        "text": "Obligatoire dans les deux cas, sans distinction",
        "correct": false
      },
      {
        "text": "Facultatif pour le DR, obligatoire pour le sensible",
        "correct": false
      }
    ],
    "explanation": "Le marquage DR est impose par l'IGI 1300 Annexe 1 §2 (timbre sur chaque page), tandis que la R36 ne fait que fortement recommander le marquage des fichiers et applications sensibles.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2 (DR) vs R36 (sensible)"
    },
    "sources": [
      "igi1300-an1",
      "pg075"
    ]
  },
  {
    "id": "q-marquage-idee-recue-proprietes",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Indiquer le niveau Diffusion Restreinte uniquement dans les proprietes (metadonnees) d'un fichier electronique suffit a satisfaire l'obligation de marquage.",
    "options": [
      {
        "text": "Faux : un rappel de la mention doit figurer en debut de chaque page",
        "correct": true
      },
      {
        "text": "Vrai : les metadonnees tiennent lieu de marquage",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 exige pour les documents electroniques un rappel de la mention en debut de chaque page, ce qu'une simple metadonnee ne realise pas.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-marquage-support-mention-amovible",
    "refId": "dr-ii901",
    "themeId": "marquage",
    "question": "Sur un support non papier, une mention DR collee de facon temporaire et retirable est conforme.",
    "options": [
      {
        "text": "Faux : la mention doit etre definitive et toujours visible",
        "correct": true
      },
      {
        "text": "Vrai, tant que la mention reste lisible le temps de l'usage",
        "correct": false
      }
    ],
    "explanation": "L'IGI 1300 Annexe 1 §2 exige une mention adaptee, definitive et toujours visible sur les supports non papier, ce qui exclut un marquage temporaire.",
    "exigence": {
      "level": "obligatoire",
      "note": "IGI 1300 Annexe 1 §2"
    },
    "sources": [
      "igi1300-an1"
    ]
  },
  {
    "id": "q-acces-r39-mfa-obligatoire",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Selon la R39, quelle est l'exigence concernant l'authentification initiale d'un utilisateur sur un SI sensible ?",
    "options": [
      {
        "text": "Elle doit etre multifacteur a l'etat de l'art.",
        "correct": true
      },
      {
        "text": "Elle peut se limiter a un mot de passe robuste.",
        "correct": false
      },
      {
        "text": "Elle est seulement recommandee, non imposee.",
        "correct": false
      },
      {
        "text": "Elle doit reposer uniquement sur un certificat logiciel.",
        "correct": false
      }
    ],
    "explanation": "La R39 impose que l'authentification initiale sur un SI sensible DOIT etre multifacteur a l'etat de l'art.",
    "exigence": {
      "level": "obligatoire",
      "note": "R39 (authentification SI sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r39-niveau",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Quel est le niveau d'exigence de la R39 sur l'authentification multifacteur ?",
    "options": [
      {
        "text": "Obligatoire (formulation 'doit').",
        "correct": true
      },
      {
        "text": "Recommande (formulation 'il est recommande').",
        "correct": false
      },
      {
        "text": "Conseille (formulation 'il est conseille').",
        "correct": false
      },
      {
        "text": "Simple usage courant.",
        "correct": false
      }
    ],
    "explanation": "La R39 emploie 'DOIT etre multifacteur', ce qui correspond a une exigence obligatoire.",
    "exigence": {
      "level": "obligatoire",
      "note": "R39"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r40-sso",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Que prevoit la R40 concernant les secrets d'authentification secondaires ?",
    "options": [
      {
        "text": "Il est recommande de les proteger via un SSO.",
        "correct": true
      },
      {
        "text": "Il est obligatoire de les supprimer.",
        "correct": false
      },
      {
        "text": "Il est interdit d'utiliser un SSO.",
        "correct": false
      },
      {
        "text": "Ils ne necessitent aucune protection particuliere.",
        "correct": false
      }
    ],
    "explanation": "La R40 recommande de proteger les secrets d'authentification secondaires via un SSO.",
    "exigence": {
      "level": "recommande",
      "note": "R40 (SSO secrets secondaires)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r40-niveau",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Vrai ou faux : la protection des secrets d'authentification secondaires via un SSO est une obligation imperative selon la R40.",
    "options": [
      {
        "text": "Faux : c'est une recommandation, pas une obligation.",
        "correct": true
      },
      {
        "text": "Vrai : c'est une obligation imperative.",
        "correct": false
      },
      {
        "text": "Vrai : c'est interdit donc imperatif.",
        "correct": false
      }
    ],
    "explanation": "La R40 emploie 'recommande', il s'agit donc d'une recommandation et non d'une obligation.",
    "exigence": {
      "level": "recommande",
      "note": "R40"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r41-procedure-imputable",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Selon la R41, comment doit etre geree l'attribution des droits (affectation, modification, suppression) ?",
    "options": [
      {
        "text": "Selon une procedure imputable.",
        "correct": true
      },
      {
        "text": "De maniere informelle au cas par cas.",
        "correct": false
      },
      {
        "text": "Uniquement par le RSSI sans tracabilite.",
        "correct": false
      },
      {
        "text": "Sans aucune revue ulterieure.",
        "correct": false
      }
    ],
    "explanation": "La R41 impose que la gestion des droits suive une procedure imputable couvrant affectation, modification et suppression.",
    "exigence": {
      "level": "obligatoire",
      "note": "R41 (gestion des droits)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r41-revue",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "La R41 prevoit-elle une revue des droits ?",
    "options": [
      {
        "text": "Oui, une revue periodique des droits.",
        "correct": true
      },
      {
        "text": "Non, aucune revue n'est mentionnee.",
        "correct": false
      },
      {
        "text": "Une revue uniquement en cas d'incident.",
        "correct": false
      },
      {
        "text": "Une revue unique a la creation du compte.",
        "correct": false
      }
    ],
    "explanation": "La R41 prevoit une revue periodique des droits, en complement de la procedure imputable.",
    "exigence": {
      "level": "obligatoire",
      "note": "R41"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r41-phases",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Quelles phases du cycle de vie des droits la procedure imputable de la R41 doit-elle couvrir ?",
    "options": [
      {
        "text": "L'affectation.",
        "correct": true
      },
      {
        "text": "La modification.",
        "correct": true
      },
      {
        "text": "La suppression.",
        "correct": true
      },
      {
        "text": "Uniquement l'affectation initiale.",
        "correct": false
      }
    ],
    "explanation": "La R41 cite explicitement l'affectation, la modification et la suppression comme phases couvertes par la procedure imputable.",
    "exigence": {
      "level": "obligatoire",
      "note": "R41"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r42-antivirus-obligatoire",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Que prevoit la R42 au sujet des antivirus ?",
    "options": [
      {
        "text": "Des antivirus doivent etre installes sur les serveurs applicatifs, postes et moyens d'interconnexion.",
        "correct": true
      },
      {
        "text": "Les antivirus sont facultatifs sur les serveurs.",
        "correct": false
      },
      {
        "text": "Les antivirus sont interdits sur les moyens d'interconnexion.",
        "correct": false
      },
      {
        "text": "Les antivirus ne concernent que les postes utilisateurs.",
        "correct": false
      }
    ],
    "explanation": "La R42 impose l'installation d'antivirus sur les serveurs applicatifs, les postes et les moyens d'interconnexion.",
    "exigence": {
      "level": "obligatoire",
      "note": "R42 (antivirus)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r42-perimetre",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Sur quels equipements la R42 impose-t-elle l'installation d'antivirus ?",
    "options": [
      {
        "text": "Les serveurs applicatifs.",
        "correct": true
      },
      {
        "text": "Les postes.",
        "correct": true
      },
      {
        "text": "Les moyens d'interconnexion.",
        "correct": true
      },
      {
        "text": "Uniquement les serveurs de messagerie.",
        "correct": false
      }
    ],
    "explanation": "La R42 vise les serveurs applicatifs, les postes et les moyens d'interconnexion.",
    "exigence": {
      "level": "obligatoire",
      "note": "R42"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r42-diversification",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Que recommande la R42 a propos des technologies antivirus ?",
    "options": [
      {
        "text": "De diversifier les technologies.",
        "correct": true
      },
      {
        "text": "D'utiliser un unique editeur sur tout le parc.",
        "correct": false
      },
      {
        "text": "De n'employer que des solutions libres.",
        "correct": false
      },
      {
        "text": "De desactiver l'antivirus sur les serveurs.",
        "correct": false
      }
    ],
    "explanation": "La R42 recommande de diversifier les technologies antivirus, en complement de l'obligation d'installation.",
    "exigence": {
      "level": "recommande",
      "note": "R42 (diversification)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r42-diversification-niveau",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Quel est le niveau d'exigence de la diversification des technologies antivirus dans la R42 ?",
    "options": [
      {
        "text": "Recommande.",
        "correct": true
      },
      {
        "text": "Obligatoire au meme titre que l'installation.",
        "correct": false
      },
      {
        "text": "Interdit.",
        "correct": false
      },
      {
        "text": "Sans objet.",
        "correct": false
      }
    ],
    "explanation": "Dans la R42, l'installation des antivirus est obligatoire ('doivent') alors que la diversification des technologies est recommandee.",
    "exigence": {
      "level": "recommande",
      "note": "R42"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r43-deploiement",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Que vise la R43 concernant le deploiement des protections ?",
    "options": [
      {
        "text": "Que le deploiement soit reflechi pour ne pas affaiblir la securite.",
        "correct": true
      },
      {
        "text": "Que le maximum de protections soit installe sans analyse prealable.",
        "correct": false
      },
      {
        "text": "Que les protections soient deployees uniquement sur les postes.",
        "correct": false
      },
      {
        "text": "Que les protections soient deportees vers un tiers.",
        "correct": false
      }
    ],
    "explanation": "La R43 demande que le deploiement des protections soit reflechi afin de ne pas affaiblir la securite.",
    "exigence": {
      "level": "obligatoire",
      "note": "R43 (deploiement reflechi)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r43-risques",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Quels risques la R43 cite-t-elle a propos d'un deploiement mal pense des protections ?",
    "options": [
      {
        "text": "L'augmentation de la surface d'attaque.",
        "correct": true
      },
      {
        "text": "Le risque d'exfiltration.",
        "correct": true
      },
      {
        "text": "La diminution des performances reseau uniquement.",
        "correct": false
      },
      {
        "text": "La perte de garantie materielle.",
        "correct": false
      }
    ],
    "explanation": "La R43 mentionne la surface d'attaque et l'exfiltration comme risques d'un deploiement non reflechi des protections.",
    "exigence": {
      "level": "obligatoire",
      "note": "R43"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r44-detection",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Que recommande la R44 ?",
    "options": [
      {
        "text": "D'installer des outils de detection de comportements suspects alimentant la supervision.",
        "correct": true
      },
      {
        "text": "De supprimer la supervision pour reduire les couts.",
        "correct": false
      },
      {
        "text": "D'interdire toute detection comportementale.",
        "correct": false
      },
      {
        "text": "De ne superviser que les serveurs applicatifs.",
        "correct": false
      }
    ],
    "explanation": "La R44 recommande d'installer des outils de detection de comportements suspects qui alimentent la supervision.",
    "exigence": {
      "level": "recommande",
      "note": "R44 (detection comportementale)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r44-postes-prioritaires",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Selon la R44, par quels equipements convient-il de commencer le deploiement des outils de detection comportementale ?",
    "options": [
      {
        "text": "Par les postes.",
        "correct": true
      },
      {
        "text": "Par les moyens d'interconnexion.",
        "correct": false
      },
      {
        "text": "Par les serveurs de sauvegarde.",
        "correct": false
      },
      {
        "text": "Par les equipements reseau du coeur.",
        "correct": false
      }
    ],
    "explanation": "La R44 precise que la detection de comportements suspects doit viser les postes en premier.",
    "exigence": {
      "level": "recommande",
      "note": "R44 (postes en premier)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-r44-niveau",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Quel est le niveau d'exigence de la R44 sur la detection de comportements suspects ?",
    "options": [
      {
        "text": "Recommande.",
        "correct": true
      },
      {
        "text": "Obligatoire.",
        "correct": false
      },
      {
        "text": "Interdit.",
        "correct": false
      }
    ],
    "explanation": "La R44 emploie 'recommande', il s'agit donc d'une recommandation.",
    "exigence": {
      "level": "recommande",
      "note": "R44"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-detection-supervision-lien",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Quel lien la R44 etablit-elle entre les outils de detection et la supervision ?",
    "options": [
      {
        "text": "Les outils de detection alimentent la supervision.",
        "correct": true
      },
      {
        "text": "La supervision remplace les outils de detection.",
        "correct": false
      },
      {
        "text": "Les outils de detection fonctionnent isolement de la supervision.",
        "correct": false
      },
      {
        "text": "La supervision est interdite sur les postes.",
        "correct": false
      }
    ],
    "explanation": "La R44 recommande des outils de detection de comportements suspects alimentant la supervision.",
    "exigence": {
      "level": "recommande",
      "note": "R44"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-mfa-vs-droits-piege",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Vrai ou faux : selon la R41, attribuer les droits par une procedure imputable suffit, sans jamais reexaminer ces droits ensuite.",
    "options": [
      {
        "text": "Faux : une revue periodique des droits est egalement prevue.",
        "correct": true
      },
      {
        "text": "Vrai : aucune revue n'est requise apres l'attribution.",
        "correct": false
      },
      {
        "text": "Vrai : la revue est seulement recommandee a titre facultatif.",
        "correct": false
      }
    ],
    "explanation": "La R41 associe a la procedure imputable une revue periodique des droits, l'attribution initiale ne suffit donc pas.",
    "exigence": {
      "level": "obligatoire",
      "note": "R41"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-antivirus-monoculture-piege",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Un administrateur deploie le meme antivirus sur tous les equipements pour simplifier la gestion. Que dit la R42 sur ce choix ?",
    "options": [
      {
        "text": "La R42 recommande au contraire de diversifier les technologies.",
        "correct": true
      },
      {
        "text": "La R42 impose une solution unique sur tout le parc.",
        "correct": false
      },
      {
        "text": "La R42 interdit toute diversification.",
        "correct": false
      },
      {
        "text": "La R42 ne se prononce pas sur la diversite des technologies.",
        "correct": false
      }
    ],
    "explanation": "La R42 recommande de diversifier les technologies antivirus, ce qui va a l'encontre d'une solution unique.",
    "exigence": {
      "level": "recommande",
      "note": "R42"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-acces-mfa-etat-de-lart",
    "refId": "dr-ii901",
    "themeId": "acces",
    "question": "Selon la R39, l'authentification multifacteur sur un SI sensible doit etre :",
    "options": [
      {
        "text": "A l'etat de l'art.",
        "correct": true
      },
      {
        "text": "Limitee a deux mots de passe distincts.",
        "correct": false
      },
      {
        "text": "Basee uniquement sur une question secrete.",
        "correct": false
      },
      {
        "text": "Renouvelee chaque jour sans facteur supplementaire.",
        "correct": false
      }
    ],
    "explanation": "La R39 precise que l'authentification multifacteur de l'utilisateur sur un SI sensible doit etre a l'etat de l'art.",
    "exigence": {
      "level": "obligatoire",
      "note": "R39"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-supports-limiter-besoin",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Selon le referentiel, quelle attitude est attendue concernant l'usage des supports amovibles ?",
    "options": [
      {
        "text": "Limiter les supports amovibles au strict besoin operationnel et preferer les echanges via le reseau",
        "correct": true
      },
      {
        "text": "Generaliser l'usage des supports amovibles pour tous les echanges",
        "correct": false
      },
      {
        "text": "Interdire totalement et sans exception tout support amovible",
        "correct": false
      }
    ],
    "explanation": "R45 recommande fortement de limiter les supports amovibles au strict besoin operationnel et de privilegier les echanges via le reseau.",
    "exigence": {
      "level": "recommande",
      "note": "R45 (fortement recommande)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-r45-niveau",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Quel est le niveau d'exigence de la mesure invitant a limiter les supports amovibles au strict besoin operationnel (R45) ?",
    "options": [
      {
        "text": "Fortement recommande",
        "correct": true
      },
      {
        "text": "Obligatoire",
        "correct": false
      },
      {
        "text": "Interdit",
        "correct": false
      }
    ],
    "explanation": "R45 emploie la formulation fortement recommande, ce qui correspond au niveau recommande et non a une obligation.",
    "exigence": {
      "level": "recommande",
      "note": "R45 (fortement recommande)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-politique-obligatoire",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Si une entite autorise l'usage de supports amovibles, que doit-elle faire ?",
    "options": [
      {
        "text": "Se doter d'une politique conforme aux mesures de l'II901 (regles de gestion et conditions d'usage)",
        "correct": true
      },
      {
        "text": "Se contenter d'une consigne orale aux utilisateurs",
        "correct": false
      },
      {
        "text": "Aucune obligation tant que les supports sont neufs",
        "correct": false
      }
    ],
    "explanation": "R46 impose (DOIT) a l'entite qui autorise les supports de se doter d'une politique conforme aux mesures de l'II901.",
    "exigence": {
      "level": "obligatoire",
      "note": "R46 (DOIT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-r46-niveau",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Vrai ou faux : la mise en place d'une politique de gestion des supports amovibles conforme a l'II901 (R46) n'est qu'une simple recommandation.",
    "options": [
      {
        "text": "Faux : R46 est une obligation (DOIT) des lors que les supports sont autorises",
        "correct": true
      },
      {
        "text": "Vrai : c'est seulement conseille",
        "correct": false
      }
    ],
    "explanation": "R46 formule une obligation : l'entite DOIT se doter d'une politique conforme aux mesures de l'II901 si les supports sont autorises.",
    "exigence": {
      "level": "obligatoire",
      "note": "R46 (DOIT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-lecture-seule",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Quel type de support est recommande pour reduire les risques lors des echanges ?",
    "options": [
      {
        "text": "Les supports en lecture seule (importation uniquement)",
        "correct": true
      },
      {
        "text": "Les supports en lecture/ecriture sans restriction",
        "correct": false
      },
      {
        "text": "Les supports personnels des agents",
        "correct": false
      }
    ],
    "explanation": "R47 recommande de privilegier les supports en lecture seule, c'est-a-dire dedies a l'importation uniquement.",
    "exigence": {
      "level": "recommande",
      "note": "R47"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-depollution",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Pour les supports non maitrises par l'entite, quelle mesure est fortement recommandee ?",
    "options": [
      {
        "text": "Utiliser une solution de depollution (sas, station blanche)",
        "correct": true
      },
      {
        "text": "Les connecter directement aux postes de travail DR",
        "correct": false
      },
      {
        "text": "Les reformater manuellement par l'utilisateur",
        "correct": false
      }
    ],
    "explanation": "R48 recommande fortement d'utiliser une solution de depollution telle qu'un sas ou une station blanche pour les supports non maitrises.",
    "exigence": {
      "level": "recommande",
      "note": "R48 (fortement recommande)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-station-blanche-def",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "A quoi sert une station blanche evoquee pour les supports amovibles ?",
    "options": [
      {
        "text": "A depolluer les supports non maitrises par l'entite avant usage",
        "correct": true
      },
      {
        "text": "A chiffrer automatiquement les donnees DR",
        "correct": false
      },
      {
        "text": "A delivrer un visa de securite aux supports",
        "correct": false
      }
    ],
    "explanation": "R48 cite la station blanche (et le sas) comme solution de depollution destinee aux supports non maitrises par l'entite.",
    "exigence": {
      "level": "recommande",
      "note": "R48 (fortement recommande)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-dr-chiffrement",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Comment doivent etre protegees les donnees Diffusion Restreinte stockees sur un support amovible ?",
    "options": [
      {
        "text": "Chiffrees par des produits agrees DR",
        "correct": true
      },
      {
        "text": "Chiffrees par un produit disposant d'un simple visa de securite",
        "correct": false
      },
      {
        "text": "Protegees par un mot de passe sur le fichier suffit",
        "correct": false
      }
    ],
    "explanation": "R57 impose (DOIVENT) que les donnees DR sur support amovible soient chiffrees par des produits agrees DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R57 (DOIVENT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-sensible-chiffrement",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Quelle exigence de chiffrement s'applique aux donnees sensibles (non DR) sur support amovible ?",
    "options": [
      {
        "text": "Chiffrement par des produits disposant d'un visa de securite",
        "correct": true
      },
      {
        "text": "Chiffrement par des produits agrees DR obligatoirement",
        "correct": false
      },
      {
        "text": "Aucun chiffrement requis",
        "correct": false
      }
    ],
    "explanation": "R58 impose (DOIVENT) le chiffrement des donnees sensibles par des produits disposant d'un visa de securite.",
    "exigence": {
      "level": "obligatoire",
      "note": "R58 (DOIVENT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-distinction-dr-sensible",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Quelle est la difference de produit de chiffrement entre donnees DR et donnees sensibles sur support amovible ?",
    "options": [
      {
        "text": "DR : produits agrees DR ; sensible : produits disposant d'un visa de securite",
        "correct": true
      },
      {
        "text": "DR : visa de securite ; sensible : produits agrees DR",
        "correct": false
      },
      {
        "text": "Le meme niveau de produit s'applique aux deux",
        "correct": false
      }
    ],
    "explanation": "R57 exige des produits agrees DR pour le DR, tandis que R58 exige des produits disposant d'un visa de securite pour les donnees sensibles non DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R57 et R58 (DOIVENT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-dr-visa-insuffisant",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Vrai ou faux : un produit disposant seulement d'un visa de securite suffit pour chiffrer des donnees DR sur support amovible.",
    "options": [
      {
        "text": "Faux : les donnees DR exigent des produits agrees DR",
        "correct": true
      },
      {
        "text": "Vrai : le visa de securite couvre tous les niveaux",
        "correct": false
      }
    ],
    "explanation": "R57 impose des produits agrees DR pour les donnees DR ; le visa de securite (R58) ne concerne que les donnees sensibles non DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R57 (DOIVENT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-reseau-prefere",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Entre un echange par support amovible et un echange via le reseau, lequel est a privilegier ?",
    "options": [
      {
        "text": "L'echange via le reseau",
        "correct": true
      },
      {
        "text": "L'echange par support amovible",
        "correct": false
      },
      {
        "text": "Les deux sont equivalents et au libre choix de l'agent",
        "correct": false
      }
    ],
    "explanation": "R45 recommande fortement de preferer les echanges via le reseau et de limiter les supports amovibles au strict besoin operationnel.",
    "exigence": {
      "level": "recommande",
      "note": "R45 (fortement recommande)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-importation-uniquement",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Pourquoi privilegier des supports en lecture seule selon R47 ?",
    "options": [
      {
        "text": "Parce qu'ils permettent l'importation uniquement, limitant les risques",
        "correct": true
      },
      {
        "text": "Parce qu'ils sont obligatoirement agrees DR",
        "correct": false
      },
      {
        "text": "Parce qu'ils dispensent de toute politique de gestion",
        "correct": false
      }
    ],
    "explanation": "R47 recommande les supports en lecture seule (importation uniquement) pour reduire les risques lies aux supports amovibles.",
    "exigence": {
      "level": "recommande",
      "note": "R47"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-r48-niveau",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Quel est le niveau d'exigence de l'usage d'un sas ou d'une station blanche pour les supports non maitrises (R48) ?",
    "options": [
      {
        "text": "Fortement recommande",
        "correct": true
      },
      {
        "text": "Obligatoire",
        "correct": false
      },
      {
        "text": "Usage facultatif sans recommandation",
        "correct": false
      }
    ],
    "explanation": "R48 emploie la formulation fortement recommande, ce qui correspond au niveau recommande.",
    "exigence": {
      "level": "recommande",
      "note": "R48 (fortement recommande)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-multi-mesures-obligatoires",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Parmi ces mesures relatives aux supports amovibles, lesquelles sont des obligations ?",
    "options": [
      {
        "text": "Se doter d'une politique conforme a l'II901 si les supports sont autorises",
        "correct": true
      },
      {
        "text": "Chiffrer les donnees DR par des produits agrees DR",
        "correct": true
      },
      {
        "text": "Chiffrer les donnees sensibles par des produits disposant d'un visa de securite",
        "correct": true
      },
      {
        "text": "Limiter les supports au strict besoin operationnel",
        "correct": false
      }
    ],
    "explanation": "R46, R57 et R58 sont des obligations (DOIT/DOIVENT) ; R45 (limitation au strict besoin) n'est qu'une recommandation forte.",
    "exigence": {
      "level": "obligatoire",
      "note": "R46, R57, R58 (DOIT/DOIVENT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-multi-recommandations",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Parmi ces mesures, lesquelles relevent d'une recommandation (et non d'une obligation) ?",
    "options": [
      {
        "text": "Limiter les supports amovibles au strict besoin operationnel",
        "correct": true
      },
      {
        "text": "Privilegier les supports en lecture seule",
        "correct": true
      },
      {
        "text": "Utiliser une solution de depollution pour les supports non maitrises",
        "correct": true
      },
      {
        "text": "Chiffrer les donnees DR par des produits agrees DR",
        "correct": false
      }
    ],
    "explanation": "R45, R47 et R48 sont des recommandations ; R57 (chiffrement DR par produits agrees DR) est une obligation.",
    "exigence": {
      "level": "recommande",
      "note": "R45, R47, R48"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-cas-cle-usb-dr",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Un agent veut copier des documents DR sur une cle USB. Quelle condition s'impose ?",
    "options": [
      {
        "text": "La cle doit chiffrer les donnees via un produit agree DR",
        "correct": true
      },
      {
        "text": "Un chiffrement par produit avec simple visa de securite suffit",
        "correct": false
      },
      {
        "text": "Aucun chiffrement n'est requis si la cle reste dans le batiment",
        "correct": false
      }
    ],
    "explanation": "R57 impose que les donnees DR sur support amovible soient chiffrees par des produits agrees DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R57 (DOIVENT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-cas-support-externe",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Un prestataire apporte un disque externe non maitrise par l'entite. Quelle mesure est fortement recommandee avant de l'utiliser ?",
    "options": [
      {
        "text": "Le faire passer par une solution de depollution (sas, station blanche)",
        "correct": true
      },
      {
        "text": "Le brancher directement sur un poste DR pour gagner du temps",
        "correct": false
      },
      {
        "text": "Le confier a l'agent qui le formatera lui-meme",
        "correct": false
      }
    ],
    "explanation": "R48 recommande fortement la depollution des supports non maitrises par l'entite avant usage, via un sas ou une station blanche.",
    "exigence": {
      "level": "recommande",
      "note": "R48 (fortement recommande)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-politique-contenu",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Que doit notamment couvrir la politique de gestion des supports amovibles imposee par R46 ?",
    "options": [
      {
        "text": "Les regles de gestion et les conditions d'usage des supports",
        "correct": true
      },
      {
        "text": "Uniquement la liste des fournisseurs agrees",
        "correct": false
      },
      {
        "text": "Seulement la duree de vie materielle des supports",
        "correct": false
      }
    ],
    "explanation": "R46 precise que la politique conforme a l'II901 porte sur les regles de gestion et les conditions d'usage des supports.",
    "exigence": {
      "level": "obligatoire",
      "note": "R46 (DOIT)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-supports-idee-recue-interdiction",
    "refId": "dr-ii901",
    "themeId": "supports",
    "question": "Vrai ou faux : le referentiel interdit purement et simplement tout support amovible.",
    "options": [
      {
        "text": "Faux : il recommande de les limiter au strict besoin et encadre leur usage, sans interdiction totale",
        "correct": true
      },
      {
        "text": "Vrai : tout support amovible est proscrit",
        "correct": false
      }
    ],
    "explanation": "R45 recommande fortement de limiter les supports au strict besoin et R46 prevoit explicitement le cas ou ils sont autorises ; il n'y a donc pas d'interdiction absolue.",
    "exigence": {
      "level": "recommande",
      "note": "R45 et R46"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-postes-r49-maitrise",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Selon R49, que doit assurer l'entite vis-a-vis des moyens informatiques des utilisateurs ?",
    "options": [
      {
        "text": "Elle doit en maitriser les moyens par des mesures techniques et organisationnelles",
        "correct": true
      },
      {
        "text": "Elle peut laisser les utilisateurs gerer librement leurs equipements",
        "correct": false
      },
      {
        "text": "Elle doit uniquement appliquer des mesures techniques, sans volet organisationnel",
        "correct": false
      }
    ],
    "explanation": "R49 impose que l'entite maitrise les moyens informatiques des utilisateurs au moyen de mesures a la fois techniques et organisationnelles.",
    "exigence": {
      "level": "obligatoire",
      "note": "R49"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r50-reseau-dedie",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Quel niveau d'exigence s'applique au deploiement des ressources sensibles sur un reseau physique dedie (R50) ?",
    "options": [
      {
        "text": "Fortement recommande",
        "correct": true
      },
      {
        "text": "Obligatoire",
        "correct": false
      },
      {
        "text": "Simple usage facultatif",
        "correct": false
      }
    ],
    "explanation": "R50 indique qu'il est fortement recommande de deployer les ressources sensibles sur un reseau physique dedie.",
    "exigence": {
      "level": "recommande",
      "note": "R50 (fortement recommande)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r50-degrade",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Dans le mode degrade de R50 (R50-), par quoi peut-on remplacer le reseau physique dedie ?",
    "options": [
      {
        "text": "Un reseau logique dedie protege par IPsec, VLAN et filtrage",
        "correct": true
      },
      {
        "text": "Un reseau Wi-Fi public avec mot de passe",
        "correct": false
      },
      {
        "text": "Aucune solution de remplacement n'est admise",
        "correct": false
      }
    ],
    "explanation": "R50- prevoit, en mode degrade, un reseau logique dedie protege par IPsec combine a un cloisonnement VLAN et a du filtrage.",
    "exigence": {
      "level": "recommande",
      "note": "R50- (mode degrade)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r51-auth",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Que recommande fortement R51 concernant les ressources (postes en premier) ?",
    "options": [
      {
        "text": "Qu'elles soient authentifiees avant d'obtenir une connectivite reseau",
        "correct": true
      },
      {
        "text": "Qu'elles soient authentifiees seulement apres connexion au reseau",
        "correct": false
      },
      {
        "text": "Qu'elles disposent d'une adresse IP fixe",
        "correct": false
      }
    ],
    "explanation": "R51 recommande fortement que les ressources, les postes en premier lieu, soient authentifiees avant d'obtenir une connectivite reseau.",
    "exigence": {
      "level": "recommande",
      "note": "R51 (fortement recommande)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r52-poste-dedie",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Quelle est la solution recommandee par R52 pour traiter des informations sensibles sur un poste ?",
    "options": [
      {
        "text": "Un poste sensible physiquement dedie",
        "correct": true
      },
      {
        "text": "Un poste partage entre plusieurs niveaux sans cloisonnement",
        "correct": false
      },
      {
        "text": "Un poste personnel de l'utilisateur",
        "correct": false
      }
    ],
    "explanation": "R52 recommande l'usage d'un poste sensible physiquement dedie.",
    "exigence": {
      "level": "recommande",
      "note": "R52"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r52-minus",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "En l'absence de poste physiquement dedie, que prevoit R52- ?",
    "options": [
      {
        "text": "Un poste multiniveau par virtualisation ou conteneurisation si le cloisonnement est robuste",
        "correct": true
      },
      {
        "text": "L'abandon de toute mesure de cloisonnement",
        "correct": false
      },
      {
        "text": "L'usage exclusif d'un acces distant",
        "correct": false
      }
    ],
    "explanation": "R52- admet, a defaut d'un poste dedie, un poste multiniveau par virtualisation ou conteneurisation a condition que le cloisonnement soit robuste.",
    "exigence": {
      "level": "recommande",
      "note": "R52- (a defaut)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r52-gradation",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Comment se classent les solutions R52, R52- et R52-- en termes de protection ?",
    "options": [
      {
        "text": "R52 offre la meilleure protection, puis R52-, puis R52-- (gradation decroissante)",
        "correct": true
      },
      {
        "text": "R52-- offre la meilleure protection des trois",
        "correct": false
      },
      {
        "text": "Les trois solutions offrent un niveau de protection identique",
        "correct": false
      }
    ],
    "explanation": "R52, R52- et R52-- forment une gradation decroissante de protection, le poste physiquement dedie etant le plus protecteur et le poste sensible avec acces distant au SI usuel le moins protecteur.",
    "exigence": {
      "level": "recommande",
      "note": "R52 / R52- / R52--"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r52-minusminus",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "A quoi correspond la solution R52-- ?",
    "options": [
      {
        "text": "Un poste sensible avec acces distant au SI usuel",
        "correct": true
      },
      {
        "text": "Un poste physiquement dedie au sensible",
        "correct": false
      },
      {
        "text": "Un poste multiniveau par virtualisation",
        "correct": false
      }
    ],
    "explanation": "R52-- decrit un poste sensible disposant d'un acces distant au SI usuel, c'est la solution la moins protectrice de la gradation.",
    "exigence": {
      "level": "recommande",
      "note": "R52--"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r53-nomadisme",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Quand les recommandations ANSSI sur le nomadisme doivent-elles etre appliquees selon R53 ?",
    "options": [
      {
        "text": "Des qu'un service d'acces distant a un SI sensible est en production",
        "correct": true
      },
      {
        "text": "Uniquement lors de la phase de conception du SI",
        "correct": false
      },
      {
        "text": "Seulement si l'entite le juge opportun",
        "correct": false
      }
    ],
    "explanation": "R53 impose l'application des recommandations ANSSI sur le nomadisme des qu'un service d'acces distant a un SI sensible entre en production.",
    "exigence": {
      "level": "obligatoire",
      "note": "R53 (DOIVENT)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r54-protection-physique",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Que doivent prevoir les equipements d'acces nomade sensibles selon R54 ?",
    "options": [
      {
        "text": "Une protection physique (cable antivol, filtre de confidentialite) et une non-exposition sans surveillance",
        "correct": true
      },
      {
        "text": "Uniquement un chiffrement logiciel, sans mesure physique",
        "correct": false
      },
      {
        "text": "Aucune contrainte particuliere en deplacement",
        "correct": false
      }
    ],
    "explanation": "R54 impose une protection physique des equipements nomades sensibles, notamment cable antivol et filtre de confidentialite, et interdit de les laisser sans surveillance.",
    "exigence": {
      "level": "obligatoire",
      "note": "R54 (DOIVENT)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r54-sans-surveillance",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Vrai ou faux : R54 autorise a laisser un equipement nomade sensible sans surveillance s'il est verrouille.",
    "options": [
      {
        "text": "Faux : R54 impose de ne pas le laisser sans surveillance",
        "correct": true
      },
      {
        "text": "Vrai : le verrouillage suffit a couvrir cette exigence",
        "correct": false
      }
    ],
    "explanation": "R54 exige que les equipements d'acces nomade sensibles ne soient pas laisses sans surveillance, en plus des protections physiques.",
    "exigence": {
      "level": "obligatoire",
      "note": "R54 (DOIVENT)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r55-canal-dr",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Comment doit etre securise le canal nomade vers un SI Diffusion Restreinte selon R55 ?",
    "options": [
      {
        "text": "Par des produits agrees DR",
        "correct": true
      },
      {
        "text": "Par un produit disposant d'un simple visa de securite",
        "correct": false
      },
      {
        "text": "Par un VPN grand public",
        "correct": false
      }
    ],
    "explanation": "R55 impose que le canal nomade vers un SI DR soit securise par des produits agrees DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R55 (DOIT)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r56-canal-sensible",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Pour le canal nomade vers un SI sensible non DR, que prevoit R56 ?",
    "options": [
      {
        "text": "Il est recommande d'utiliser un produit avec visa de securite",
        "correct": true
      },
      {
        "text": "Un produit agree DR est obligatoire",
        "correct": false
      },
      {
        "text": "Aucune protection du canal n'est requise",
        "correct": false
      }
    ],
    "explanation": "R56 recommande l'emploi d'un produit disposant d'un visa de securite pour le canal nomade vers un SI sensible non DR.",
    "exigence": {
      "level": "recommande",
      "note": "R56"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-dr-vs-sensible-canal",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Quelle distinction la PG-075 fait-elle entre canal nomade DR (R55) et sensible non DR (R56) ?",
    "options": [
      {
        "text": "DR : produits agrees DR obligatoires ; sensible non DR : produit avec visa recommande",
        "correct": true
      },
      {
        "text": "Les deux exigent obligatoirement des produits agrees DR",
        "correct": false
      },
      {
        "text": "Le sensible non DR est plus exigeant que le DR",
        "correct": false
      }
    ],
    "explanation": "R55 impose des produits agrees DR pour le DR, alors que R56 se limite a recommander un produit avec visa pour le sensible non DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R55 (DR) vs R56 (sensible)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r59-concentrateurs",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Que recommande fortement R59 concernant les flux nomades ?",
    "options": [
      {
        "text": "Qu'ils transitent par des concentrateurs VPN dedies",
        "correct": true
      },
      {
        "text": "Qu'ils empruntent directement Internet sans concentrateur",
        "correct": false
      },
      {
        "text": "Qu'ils soient repartis sur des passerelles partagees avec d'autres SI",
        "correct": false
      }
    ],
    "explanation": "R59 recommande fortement que l'ensemble des flux nomades transitent par des concentrateurs VPN dedies.",
    "exigence": {
      "level": "recommande",
      "note": "R59 (fortement recommande)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r59-tunnel",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Selon R59, quel type de tunnel s'applique respectivement aux flux DR et sensibles via les concentrateurs VPN ?",
    "options": [
      {
        "text": "Tunnel agree DR pour le DR, tunnel a visa pour le sensible",
        "correct": true
      },
      {
        "text": "Tunnel a visa pour le DR, tunnel agree pour le sensible",
        "correct": false
      },
      {
        "text": "Le meme tunnel grand public pour les deux",
        "correct": false
      }
    ],
    "explanation": "R59 prevoit un tunnel agree DR pour les flux DR et un tunnel avec visa pour les flux sensibles, via des concentrateurs VPN dedies.",
    "exigence": {
      "level": "recommande",
      "note": "R59"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r60-justif",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Selon R60, a quelle condition les reseaux sans fil peuvent-ils etre utilises ?",
    "options": [
      {
        "text": "Ils doivent etre justifies par des imperatifs operationnels",
        "correct": true
      },
      {
        "text": "Ils peuvent etre deployes librement sans justification",
        "correct": false
      },
      {
        "text": "Ils sont totalement interdits en toute circonstance",
        "correct": false
      }
    ],
    "explanation": "R60 exige que les reseaux sans fil soient justifies par des imperatifs operationnels.",
    "exigence": {
      "level": "obligatoire",
      "note": "R60 (doivent)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r60-flux",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "D'apres R60, comment securiser les flux sur reseaux sans fil selon le niveau ?",
    "options": [
      {
        "text": "Tunnel a visa pour le sensible, tunnel agree pour le DR, avec architecture cloisonnee",
        "correct": true
      },
      {
        "text": "Aucun tunnel n'est necessaire si le SSID est masque",
        "correct": false
      },
      {
        "text": "Un simple mot de passe WPA suffit pour le DR",
        "correct": false
      }
    ],
    "explanation": "R60 impose de securiser les flux par tunnel a visa (sensible) ou agrement (DR) et de retenir une architecture cloisonnee.",
    "exigence": {
      "level": "obligatoire",
      "note": "R60"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r61-portails",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Que doit-on faire des portails captifs publics sur un equipement nomade sensible selon R61 ?",
    "options": [
      {
        "text": "Bloquer leur acces sur tout equipement nomade sensible",
        "correct": true
      },
      {
        "text": "Les autoriser pour faciliter la connexion en deplacement",
        "correct": false
      },
      {
        "text": "Les autoriser uniquement dans les aeroports",
        "correct": false
      }
    ],
    "explanation": "R61 impose de bloquer l'acces aux portails captifs publics sur tout equipement nomade sensible.",
    "exigence": {
      "level": "obligatoire",
      "note": "R61 (DOIT)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r61-interdit",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "L'acces aux portails captifs publics sur un equipement nomade sensible releve de quel statut ?",
    "options": [
      {
        "text": "D'une fonction interdite, son acces devant etre bloque",
        "correct": true
      },
      {
        "text": "D'un usage simplement deconseille mais tolere",
        "correct": false
      },
      {
        "text": "D'une pratique recommandee pour gagner en connectivite",
        "correct": false
      }
    ],
    "explanation": "R61 impose le blocage de l'acces aux portails captifs publics, ce qui revient a proscrire cet acces sur l'equipement nomade sensible.",
    "exigence": {
      "level": "interdit",
      "note": "R61 (DOIT etre bloque)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r53-niveau",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Quel est le niveau d'exigence de l'application des recommandations nomadisme dans R53 ?",
    "options": [
      {
        "text": "Obligatoire des la mise en production du service d'acces distant",
        "correct": true
      },
      {
        "text": "Simplement conseille",
        "correct": false
      },
      {
        "text": "Laisse a l'appreciation de l'utilisateur nomade",
        "correct": false
      }
    ],
    "explanation": "R53 emploie un verbe d'obligation (DOIVENT) lie a la mise en production du service d'acces distant a un SI sensible.",
    "exigence": {
      "level": "obligatoire",
      "note": "R53 (DOIVENT)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r55-vs-r59-dr",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Pour un SI DR, quelles exigences combinent R55 et R59 sur le canal et les flux nomades ?",
    "options": [
      {
        "text": "Canal securise par produits agrees DR (R55) et transit par concentrateurs VPN dedies avec tunnel agree DR (R59)",
        "correct": true
      },
      {
        "text": "Canal a visa et tunnel a visa",
        "correct": false
      },
      {
        "text": "Canal grand public et transit direct sans concentrateur",
        "correct": false
      }
    ],
    "explanation": "R55 exige des produits agrees DR pour le canal et R59 recommande fortement le transit par concentrateurs VPN dedies avec tunnel agree DR.",
    "exigence": {
      "level": "obligatoire",
      "note": "R55 (DOIT) + R59"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r51-piege",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Vrai ou faux : selon R51, un poste peut obtenir une connectivite reseau puis s'authentifier ensuite.",
    "options": [
      {
        "text": "Faux : R51 recommande fortement l'authentification avant l'obtention de la connectivite",
        "correct": true
      },
      {
        "text": "Vrai : l'ordre d'authentification est indifferent",
        "correct": false
      }
    ],
    "explanation": "R51 place l'authentification de la ressource avant l'obtention de la connectivite reseau.",
    "exigence": {
      "level": "recommande",
      "note": "R51 (fortement recommande)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r50-niveau-piege",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Idee recue : le deploiement des ressources sensibles sur reseau physique dedie est-il une obligation absolue ?",
    "options": [
      {
        "text": "Non, R50 le formule comme fortement recommande, avec un mode degrade R50-",
        "correct": true
      },
      {
        "text": "Oui, c'est une obligation sans alternative",
        "correct": false
      }
    ],
    "explanation": "R50 est une recommandation forte et non une obligation, R50- prevoyant un reseau logique dedie protege par IPsec, VLAN et filtrage en mode degrade.",
    "exigence": {
      "level": "recommande",
      "note": "R50 / R50-"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r54-mesures",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Parmi ces mesures, lesquelles sont citees par R54 pour proteger physiquement un equipement nomade sensible ?",
    "options": [
      {
        "text": "Cable antivol",
        "correct": true
      },
      {
        "text": "Filtre de confidentialite",
        "correct": true
      },
      {
        "text": "Coque de couleur reglementaire",
        "correct": false
      },
      {
        "text": "Antivirus grand public",
        "correct": false
      }
    ],
    "explanation": "R54 mentionne explicitement le cable antivol et le filtre de confidentialite comme mesures de protection physique des equipements nomades sensibles.",
    "exigence": {
      "level": "obligatoire",
      "note": "R54 (DOIVENT)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r59-niveau",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Quel est le niveau d'exigence du transit des flux nomades par des concentrateurs VPN dedies (R59) ?",
    "options": [
      {
        "text": "Fortement recommande",
        "correct": true
      },
      {
        "text": "Obligatoire et sans exception",
        "correct": false
      },
      {
        "text": "Interdit",
        "correct": false
      }
    ],
    "explanation": "R59 formule le transit de tous les flux nomades par des concentrateurs VPN dedies comme fortement recommande.",
    "exigence": {
      "level": "recommande",
      "note": "R59 (fortement recommande)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r56-niveau",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "Pour un SI sensible non DR, un produit avec visa de securite pour le canal nomade est :",
    "options": [
      {
        "text": "Recommande (R56)",
        "correct": true
      },
      {
        "text": "Obligatoire avec agrement DR",
        "correct": false
      },
      {
        "text": "Explicitement interdit",
        "correct": false
      }
    ],
    "explanation": "R56 recommande l'usage d'un produit avec visa de securite pour le canal nomade vers un SI sensible non DR.",
    "exigence": {
      "level": "recommande",
      "note": "R56"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r60-architecture",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "R60 impose, pour les reseaux sans fil, une caracteristique d'architecture. Laquelle ?",
    "options": [
      {
        "text": "Une architecture cloisonnee",
        "correct": true
      },
      {
        "text": "Une architecture a plat sans segmentation",
        "correct": false
      },
      {
        "text": "Une architecture mutualisee avec le SI usuel",
        "correct": false
      }
    ],
    "explanation": "R60 exige une architecture cloisonnee pour les reseaux sans fil, en plus de la justification operationnelle et de la securisation des flux.",
    "exigence": {
      "level": "obligatoire",
      "note": "R60"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r52-virtualisation-condition",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "A quelle condition R52- admet-il un poste multiniveau par virtualisation ou conteneurisation ?",
    "options": [
      {
        "text": "Si le cloisonnement est robuste",
        "correct": true
      },
      {
        "text": "Sans aucune condition particuliere",
        "correct": false
      },
      {
        "text": "Uniquement si le poste est connecte en Wi-Fi",
        "correct": false
      }
    ],
    "explanation": "R52- subordonne le recours a un poste multiniveau par virtualisation ou conteneurisation a un cloisonnement robuste.",
    "exigence": {
      "level": "recommande",
      "note": "R52- (cloisonnement robuste)"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-postes-r49-portee",
    "refId": "dr-ii901",
    "themeId": "postes",
    "question": "R49 couvre la maitrise des moyens informatiques des utilisateurs par :",
    "options": [
      {
        "text": "Des mesures techniques",
        "correct": true
      },
      {
        "text": "Des mesures organisationnelles",
        "correct": true
      },
      {
        "text": "La seule signature d'une charte par l'utilisateur, sans autre mesure",
        "correct": false
      }
    ],
    "explanation": "R49 associe mesures techniques et mesures organisationnelles pour la maitrise des moyens informatiques des utilisateurs.",
    "exigence": {
      "level": "obligatoire",
      "note": "R49"
    },
    "sources": [
      "pg075"
    ]
  },
  {
    "id": "q-admin-guide-anssi-admin-secu",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Que doit faire le responsable concernant l'administration securisee du SI ?",
    "options": [
      {
        "text": "Respecter le guide ANSSI sur l'administration securisee des SI",
        "correct": true
      },
      {
        "text": "Rediger son propre guide interne sans reference externe",
        "correct": false
      },
      {
        "text": "Suivre uniquement les preconisations du fournisseur cloud",
        "correct": false
      }
    ],
    "explanation": "Selon R62, le responsable DOIT respecter le guide ANSSI relatif a l'administration securisee des SI.",
    "exigence": {
      "level": "obligatoire",
      "note": "R62"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-liste-admins-juste-besoin",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Comment la liste des administrateurs d'un SI doit-elle etre etablie ?",
    "options": [
      {
        "text": "Limitee au juste besoin, connue et validee par l'autorite d'homologation",
        "correct": true
      },
      {
        "text": "Ouverte a tous les agents du service pour assurer la continuite",
        "correct": false
      },
      {
        "text": "Definie librement par chaque administrateur",
        "correct": false
      }
    ],
    "explanation": "R63 impose que la liste des administrateurs soit limitee au juste besoin, connue et validee par l'autorite d'homologation.",
    "exigence": {
      "level": "obligatoire",
      "note": "R63"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-habilitation-admins-dr",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Concernant l'habilitation des administrateurs d'un SI Diffusion Restreinte, que prevoit le referentiel ?",
    "options": [
      {
        "text": "Il est recommande que les administrateurs d'un SI DR soient habilites",
        "correct": true
      },
      {
        "text": "L'habilitation des administrateurs est strictement interdite",
        "correct": false
      },
      {
        "text": "Aucune disposition ne concerne l'habilitation des administrateurs",
        "correct": false
      }
    ],
    "explanation": "R63 recommande que les administrateurs d'un SI DR soient habilites, ce qui est une recommandation et non une obligation.",
    "exigence": {
      "level": "recommande",
      "note": "R63 (admins SI DR)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-distance-postes-maitrises",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Si l'administration a distance est autorisee, depuis quels postes les acces doivent-ils se faire ?",
    "options": [
      {
        "text": "Depuis des postes maitrises",
        "correct": true
      },
      {
        "text": "Depuis n'importe quel poste personnel de l'administrateur",
        "correct": false
      },
      {
        "text": "Depuis des postes publics partages",
        "correct": false
      }
    ],
    "explanation": "R64 impose que, lorsque l'administration a distance est autorisee, les acces se fassent depuis des postes maitrises.",
    "exigence": {
      "level": "obligatoire",
      "note": "R64"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-distance-vpn-ipsec",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Quel type de tunnel doit etre utilise pour les flux d'administration a distance ?",
    "options": [
      {
        "text": "Un tunnel VPN IPsec dedie",
        "correct": true
      },
      {
        "text": "Un tunnel SSL grand public mutualise",
        "correct": false
      },
      {
        "text": "Une simple connexion HTTPS sans tunnel",
        "correct": false
      }
    ],
    "explanation": "R64 impose que les flux d'administration a distance passent par un tunnel VPN IPsec dedie.",
    "exigence": {
      "level": "obligatoire",
      "note": "R64"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-telemaintenance-analyse-risque",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Que doit faire l'objet la telemaintenance ?",
    "options": [
      {
        "text": "D'une analyse de risque specifique avec des mises a jour regulieres",
        "correct": true
      },
      {
        "text": "D'une simple declaration verbale aupres de l'administrateur",
        "correct": false
      },
      {
        "text": "D'aucune formalite particuliere",
        "correct": false
      }
    ],
    "explanation": "R64- prevoit que la telemaintenance fasse l'objet d'une analyse de risque specifique, avec des mises a jour regulieres.",
    "exigence": {
      "level": "obligatoire",
      "note": "R64-"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-mcs-politique",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Que prevoit la politique de maintien en condition de securite (MCS) ?",
    "options": [
      {
        "text": "L'etablissement des frequences et des tests des mises a jour",
        "correct": true
      },
      {
        "text": "L'interdiction totale d'appliquer des mises a jour",
        "correct": false
      },
      {
        "text": "La suppression des journaux de securite",
        "correct": false
      }
    ],
    "explanation": "R65 prevoit l'etablissement d'une politique de maintien en condition de securite (MCS) couvrant notamment les frequences et les tests des mises a jour.",
    "exigence": {
      "level": "obligatoire",
      "note": "R65"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-systemes-obsoletes-isoles",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Que doit-on faire des systemes obsoletes conserves ?",
    "options": [
      {
        "text": "Les isoler du SI sensible",
        "correct": true
      },
      {
        "text": "Les connecter directement au SI sensible pour les surveiller",
        "correct": false
      },
      {
        "text": "Les laisser en production sans contrainte particuliere",
        "correct": false
      }
    ],
    "explanation": "R66 impose que les systemes obsoletes conserves soient isoles du SI sensible.",
    "exigence": {
      "level": "obligatoire",
      "note": "R66"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-journalisation-reco-anssi",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Quelle approche doit etre suivie en matiere de journalisation ?",
    "options": [
      {
        "text": "Appliquer les recommandations ANSSI sur la journalisation",
        "correct": true
      },
      {
        "text": "Ne journaliser que les connexions reussies",
        "correct": false
      },
      {
        "text": "Eviter toute journalisation pour des raisons de performance",
        "correct": false
      }
    ],
    "explanation": "R67 demande d'appliquer les recommandations ANSSI relatives a la journalisation.",
    "exigence": {
      "level": "obligatoire",
      "note": "R67"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-journaux-12-mois",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Pendant combien de temps les journaux doivent-ils etre conserves ?",
    "options": [
      {
        "text": "12 mois glissants, sauf contraintes legales particulieres",
        "correct": true
      },
      {
        "text": "3 mois glissants au maximum",
        "correct": false
      },
      {
        "text": "24 mois fixes sans exception",
        "correct": false
      }
    ],
    "explanation": "R68 impose la conservation des journaux pendant 12 mois glissants, sauf contraintes legales particulieres.",
    "exigence": {
      "level": "obligatoire",
      "note": "R68"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-pdis-supervision",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Quel niveau d'exigence s'applique au recours a un prestataire de detection d'incidents (PDIS) qualifie pour la supervision ?",
    "options": [
      {
        "text": "C'est fortement recommande",
        "correct": true
      },
      {
        "text": "C'est strictement obligatoire dans tous les cas",
        "correct": false
      },
      {
        "text": "C'est interdit",
        "correct": false
      }
    ],
    "explanation": "R69 indique qu'il est fortement recommande de recourir a un prestataire de detection d'incidents (PDIS) qualifie pour la supervision, ce qui releve de la recommandation.",
    "exigence": {
      "level": "recommande",
      "note": "R69"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-declaration-incidents-anssi",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Quelle procedure le responsable doit-il formaliser au sujet des incidents ?",
    "options": [
      {
        "text": "Une procedure de declaration des incidents a l'ANSSI",
        "correct": true
      },
      {
        "text": "Une procedure de destruction des journaux apres incident",
        "correct": false
      },
      {
        "text": "Une procedure de communication publique des incidents",
        "correct": false
      }
    ],
    "explanation": "R70 impose au responsable de formaliser une procedure de declaration des incidents a l'ANSSI.",
    "exigence": {
      "level": "obligatoire",
      "note": "R70"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-vf-vpn-obligatoire",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Vrai ou faux : pour l'administration a distance autorisee, un tunnel VPN IPsec dedie est seulement conseille mais non impose.",
    "options": [
      {
        "text": "Faux : le tunnel VPN IPsec dedie est impose (DOIVENT)",
        "correct": true
      },
      {
        "text": "Vrai : c'est une simple suggestion",
        "correct": false
      }
    ],
    "explanation": "R64 emploie une formulation imperative (les flux DOIVENT passer par un tunnel VPN IPsec dedie), ce qui en fait une obligation et non un conseil.",
    "exigence": {
      "level": "obligatoire",
      "note": "R64"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-piege-pdis-obligatoire",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Une idee recue affirme que le recours a un PDIS qualifie est obligatoire pour tout SI. Qu'en est-il selon le referentiel ?",
    "options": [
      {
        "text": "C'est faux : le recours a un PDIS qualifie est fortement recommande, pas obligatoire",
        "correct": true
      },
      {
        "text": "C'est vrai : aucun SI ne peut fonctionner sans PDIS qualifie",
        "correct": false
      }
    ],
    "explanation": "R69 qualifie le recours a un PDIS qualifie de fortement recommande, et non d'obligatoire.",
    "exigence": {
      "level": "recommande",
      "note": "R69"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-validation-autorite-homologation",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Qui doit connaitre et valider la liste des administrateurs ?",
    "options": [
      {
        "text": "L'autorite d'homologation",
        "correct": true
      },
      {
        "text": "Le prestataire cloud uniquement",
        "correct": false
      },
      {
        "text": "Chaque administrateur pour sa propre fiche",
        "correct": false
      }
    ],
    "explanation": "R63 precise que la liste des administrateurs doit etre connue et validee par l'autorite d'homologation.",
    "exigence": {
      "level": "obligatoire",
      "note": "R63"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-mcs-tests-maj",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Quels elements la politique de MCS doit-elle notamment couvrir ?",
    "options": [
      {
        "text": "Les frequences des mises a jour",
        "correct": true
      },
      {
        "text": "Les tests des mises a jour",
        "correct": true
      },
      {
        "text": "La suppression definitive des comptes administrateurs",
        "correct": false
      }
    ],
    "explanation": "R65 prevoit que la politique de maintien en condition de securite couvre les frequences et les tests des mises a jour.",
    "exigence": {
      "level": "obligatoire",
      "note": "R65"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-obsoletes-cible-isolement",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Vis-a-vis de quel perimetre les systemes obsoletes conserves doivent-ils etre isoles ?",
    "options": [
      {
        "text": "Du SI sensible",
        "correct": true
      },
      {
        "text": "Du reseau internet public seulement",
        "correct": false
      },
      {
        "text": "Des postes de bureautique uniquement",
        "correct": false
      }
    ],
    "explanation": "R66 precise que les systemes obsoletes conserves doivent etre isoles du SI sensible.",
    "exigence": {
      "level": "obligatoire",
      "note": "R66"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-journaux-exception-legale",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Existe-t-il une exception a la duree de conservation de 12 mois glissants des journaux ?",
    "options": [
      {
        "text": "Oui, en cas de contraintes legales particulieres",
        "correct": true
      },
      {
        "text": "Non, la duree de 12 mois est absolue et sans exception",
        "correct": false
      }
    ],
    "explanation": "R68 prevoit la conservation de 12 mois glissants, sauf contraintes legales particulieres.",
    "exigence": {
      "level": "obligatoire",
      "note": "R68"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-conditions-admin-distance",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Quelles conditions s'appliquent lorsque l'administration a distance est autorisee ?",
    "options": [
      {
        "text": "Acces depuis des postes maitrises",
        "correct": true
      },
      {
        "text": "Flux passant par un tunnel VPN IPsec dedie",
        "correct": true
      },
      {
        "text": "Acces autorise depuis des postes personnels non maitrises",
        "correct": false
      }
    ],
    "explanation": "R64 impose, en cas d'administration a distance autorisee, des acces depuis des postes maitrises et des flux via un tunnel VPN IPsec dedie.",
    "exigence": {
      "level": "obligatoire",
      "note": "R64"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-telemaintenance-maj-regulieres",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Quel element accompagne l'analyse de risque specifique de la telemaintenance ?",
    "options": [
      {
        "text": "Des mises a jour regulieres",
        "correct": true
      },
      {
        "text": "Une suppression annuelle de toute trace",
        "correct": false
      },
      {
        "text": "L'ouverture d'un acces permanent non controle",
        "correct": false
      }
    ],
    "explanation": "R64- associe a l'analyse de risque specifique de la telemaintenance des mises a jour regulieres.",
    "exigence": {
      "level": "obligatoire",
      "note": "R64-"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-role-responsable-incidents",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "A qui incombe la formalisation de la procedure de declaration des incidents a l'ANSSI ?",
    "options": [
      {
        "text": "Au responsable",
        "correct": true
      },
      {
        "text": "Au prestataire de detection d'incidents seul",
        "correct": false
      },
      {
        "text": "A chaque utilisateur du SI",
        "correct": false
      }
    ],
    "explanation": "R70 impose au responsable de formaliser une procedure de declaration des incidents a l'ANSSI.",
    "exigence": {
      "level": "obligatoire",
      "note": "R70"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-pdis-qualifie-role",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "A quoi sert le recours a un prestataire de detection d'incidents (PDIS) qualifie ?",
    "options": [
      {
        "text": "A la supervision",
        "correct": true
      },
      {
        "text": "A l'habilitation des administrateurs",
        "correct": false
      },
      {
        "text": "A la destruction des systemes obsoletes",
        "correct": false
      }
    ],
    "explanation": "R69 recommande fortement le recours a un PDIS qualifie pour la supervision.",
    "exigence": {
      "level": "recommande",
      "note": "R69"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-vf-systemes-obsoletes-connexion",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Vrai ou faux : un systeme obsolete conserve peut rester connecte au SI sensible s'il est surveille.",
    "options": [
      {
        "text": "Faux : il doit etre isole du SI sensible",
        "correct": true
      },
      {
        "text": "Vrai : la surveillance dispense de l'isolement",
        "correct": false
      }
    ],
    "explanation": "R66 impose l'isolement des systemes obsoletes conserves vis-a-vis du SI sensible, sans exception liee a la surveillance.",
    "exigence": {
      "level": "obligatoire",
      "note": "R66"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-cas-admin-liste-validation",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Un service ajoute un nouvel administrateur a un SI sans validation de l'autorite d'homologation. Cette pratique est-elle conforme ?",
    "options": [
      {
        "text": "Non, la liste doit etre connue et validee par l'autorite d'homologation",
        "correct": true
      },
      {
        "text": "Oui, la validation est facultative tant que le besoin existe",
        "correct": false
      }
    ],
    "explanation": "R63 exige que la liste des administrateurs soit limitee au juste besoin, connue et validee par l'autorite d'homologation.",
    "exigence": {
      "level": "obligatoire",
      "note": "R63"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-cas-journalisation-application",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Pour mettre en oeuvre la journalisation, sur quoi un administrateur doit-il s'appuyer ?",
    "options": [
      {
        "text": "Les recommandations ANSSI sur la journalisation",
        "correct": true
      },
      {
        "text": "Les seules pratiques internes non documentees",
        "correct": false
      },
      {
        "text": "Les recommandations commerciales de l'editeur de logiciels",
        "correct": false
      }
    ],
    "explanation": "R67 demande d'appliquer les recommandations ANSSI relatives a la journalisation.",
    "exigence": {
      "level": "obligatoire",
      "note": "R67"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-cas-telemaintenance-non-analysee",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Un prestataire propose une telemaintenance sans analyse de risque prealable. Est-ce conforme ?",
    "options": [
      {
        "text": "Non, la telemaintenance fait l'objet d'une analyse de risque specifique",
        "correct": true
      },
      {
        "text": "Oui, l'analyse de risque ne concerne pas la telemaintenance",
        "correct": false
      }
    ],
    "explanation": "R64- impose que la telemaintenance fasse l'objet d'une analyse de risque specifique, accompagnee de mises a jour regulieres.",
    "exigence": {
      "level": "obligatoire",
      "note": "R64-"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-duree-glissante-notion",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Que signifie la conservation des journaux sur 12 mois glissants ?",
    "options": [
      {
        "text": "Les journaux couvrent en permanence les 12 derniers mois",
        "correct": true
      },
      {
        "text": "Les journaux sont conserves jusqu'au 31 decembre de chaque annee",
        "correct": false
      },
      {
        "text": "Les journaux sont effaces au bout de 12 jours",
        "correct": false
      }
    ],
    "explanation": "R68 impose une conservation de 12 mois glissants, c'est-a-dire couvrant en continu les douze derniers mois, sauf contraintes legales particulieres.",
    "exigence": {
      "level": "obligatoire",
      "note": "R68"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-admin-synthese-obligations-admin",
    "refId": "dr-ii901",
    "themeId": "admin",
    "question": "Parmi les elements suivants, lesquels constituent des obligations du responsable en matiere d'administration et de journalisation ?",
    "options": [
      {
        "text": "Respecter le guide ANSSI sur l'administration securisee des SI",
        "correct": true
      },
      {
        "text": "Formaliser une procedure de declaration des incidents a l'ANSSI",
        "correct": true
      },
      {
        "text": "Conserver les journaux 12 mois glissants",
        "correct": true
      },
      {
        "text": "Recourir obligatoirement a un PDIS qualifie pour la supervision",
        "correct": false
      }
    ],
    "explanation": "R62, R70 et R68 imposent respectivement le respect du guide ANSSI, la procedure de declaration des incidents et la conservation des journaux 12 mois glissants, alors que R69 ne fait que recommander fortement le recours a un PDIS qualifie.",
    "exigence": {
      "level": "obligatoire",
      "note": "R62, R68, R70 (R69 recommande)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cloud-date-publication-reco",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Quand l'ANSSI a-t-elle publie les 'Recommandations pour l'hebergement des SI sensibles dans le cloud' ?",
    "options": [
      {
        "text": "Le 8 juillet 2024",
        "correct": true
      },
      {
        "text": "Le 8 juillet 2023",
        "correct": false
      },
      {
        "text": "Le 1er janvier 2024",
        "correct": false
      },
      {
        "text": "Le 8 juin 2024",
        "correct": false
      }
    ],
    "explanation": "Selon le document de l'ANSSI, ces recommandations ont ete publiees le 8 juillet 2024.",
    "exigence": {
      "level": "usage",
      "note": "reco-cloud-2024 (date de publication)"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cloud-perimetre-reco",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Quels systemes sont vises par les 'Recommandations pour l'hebergement des SI sensibles dans le cloud' de l'ANSSI ?",
    "options": [
      {
        "text": "Les SI de niveau Diffusion Restreinte",
        "correct": true
      },
      {
        "text": "Les SI sensibles des OIV et OSE",
        "correct": true
      },
      {
        "text": "Les SIIV",
        "correct": true
      },
      {
        "text": "Uniquement les SI classifies Secret",
        "correct": false
      }
    ],
    "explanation": "Les recommandations visent les SI de niveau DR, les SI sensibles des OIV et OSE, ainsi que les SIIV.",
    "exigence": {
      "level": "recommande",
      "note": "reco-cloud-2024 (perimetre)"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cloud-secnumcloud-substitution",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Vrai ou faux : la qualification SecNumCloud se substitue aux exigences legales ou reglementaires applicables, y compris pour le Diffusion Restreinte.",
    "options": [
      {
        "text": "Faux : SecNumCloud ne se substitue pas a ces exigences",
        "correct": true
      },
      {
        "text": "Vrai : SecNumCloud remplace les exigences DR",
        "correct": false
      }
    ],
    "explanation": "SecNumCloud ne se substitue pas aux exigences legales ou reglementaires, dont le DR ; des exigences additionnelles sont requises.",
    "exigence": {
      "level": "obligatoire",
      "note": "reco-cloud-2024 (SecNumCloud et exigences legales)"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cloud-secnumcloud-dr-additionnel",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Pour heberger un SI de niveau DR dans le cloud, comment sont determinees les exigences additionnelles a SecNumCloud ?",
    "options": [
      {
        "text": "Via une homologation au titre de l'II901",
        "correct": true
      },
      {
        "text": "Elles sont automatiquement couvertes par SecNumCloud",
        "correct": false
      },
      {
        "text": "Par une simple declaration du prestataire cloud",
        "correct": false
      },
      {
        "text": "Aucune exigence additionnelle n'est necessaire",
        "correct": false
      }
    ],
    "explanation": "Pour du DR, les exigences additionnelles sont determinees via une homologation au titre de l'II901.",
    "exigence": {
      "level": "obligatoire",
      "note": "reco-cloud-2024 / ii901 (homologation)"
    },
    "sources": [
      "reco-cloud-2024",
      "ii901"
    ]
  },
  {
    "id": "q-cloud-chiffrement-sortie-zone",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Selon l'II901, que doit-on faire des qu'une donnee DR sort d'une zone physiquement protegee dans un contexte d'hebergement cloud ?",
    "options": [
      {
        "text": "La chiffrer par des moyens agrees par l'ANSSI",
        "correct": true
      },
      {
        "text": "La chiffrer avec n'importe quel algorithme du marche",
        "correct": false
      },
      {
        "text": "La conserver en clair si le reseau est interne",
        "correct": false
      },
      {
        "text": "La supprimer immediatement",
        "correct": false
      }
    ],
    "explanation": "L'II901 impose le chiffrement par des moyens agrees ANSSI des qu'une donnee DR sort d'une zone physiquement protegee.",
    "exigence": {
      "level": "obligatoire",
      "note": "ii901 (chiffrement par moyens agrees)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cloud-moyens-agrees-piege",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Un hebergeur propose de chiffrer les donnees DR sortant de la zone protegee avec une solution de chiffrement standard non agreee. Est-ce conforme a l'II901 ?",
    "options": [
      {
        "text": "Non : le chiffrement doit utiliser des moyens agrees par l'ANSSI",
        "correct": true
      },
      {
        "text": "Oui : tout chiffrement robuste suffit",
        "correct": false
      },
      {
        "text": "Oui, a condition que la cle soit longue",
        "correct": false
      }
    ],
    "explanation": "L'II901 exige des moyens agrees ANSSI pour le chiffrement des donnees DR sortant d'une zone physiquement protegee, pas un chiffrement quelconque.",
    "exigence": {
      "level": "obligatoire",
      "note": "ii901 (moyens agrees ANSSI)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cloud-condition-chiffrement",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Quel evenement declenche l'obligation de chiffrement par moyens agrees pour une donnee DR selon l'II901 ?",
    "options": [
      {
        "text": "La sortie de la donnee hors d'une zone physiquement protegee",
        "correct": true
      },
      {
        "text": "La creation de la donnee",
        "correct": false
      },
      {
        "text": "L'archivage de la donnee",
        "correct": false
      },
      {
        "text": "La consultation par un administrateur",
        "correct": false
      }
    ],
    "explanation": "Selon l'II901, l'obligation de chiffrement par moyens agrees ANSSI s'applique des qu'une donnee DR sort d'une zone physiquement protegee.",
    "exigence": {
      "level": "obligatoire",
      "note": "ii901 (declencheur du chiffrement)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cloud-secnumcloud-suffisant-dr",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Idee recue : une offre cloud qualifiee SecNumCloud est-elle suffisante a elle seule pour heberger un SI DR ?",
    "options": [
      {
        "text": "Non : SecNumCloud ne couvre pas les exigences DR, qui necessitent une homologation II901",
        "correct": true
      },
      {
        "text": "Oui : la qualification SecNumCloud couvre integralement le DR",
        "correct": false
      }
    ],
    "explanation": "SecNumCloud ne se substitue pas aux exigences reglementaires dont le DR ; des exigences additionnelles via homologation II901 sont necessaires.",
    "exigence": {
      "level": "obligatoire",
      "note": "reco-cloud-2024 (SecNumCloud insuffisant pour le DR)"
    },
    "sources": [
      "reco-cloud-2024",
      "ii901"
    ]
  },
  {
    "id": "q-cloud-oiv-ose-siiv",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Parmi les systemes suivants, lesquels figurent dans le perimetre des recommandations cloud de l'ANSSI de 2024 ?",
    "options": [
      {
        "text": "Les SI sensibles des OIV",
        "correct": true
      },
      {
        "text": "Les SI sensibles des OSE",
        "correct": true
      },
      {
        "text": "Les SI grand public sans enjeu de securite",
        "correct": false
      },
      {
        "text": "Les SIIV",
        "correct": true
      }
    ],
    "explanation": "Les recommandations visent les SI DR, les SI sensibles des OIV et OSE et les SIIV ; les SI grand public sans enjeu ne sont pas cites.",
    "exigence": {
      "level": "recommande",
      "note": "reco-cloud-2024 (perimetre OIV/OSE/SIIV)"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cloud-nature-document-reco",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Quel est le statut du document de l'ANSSI publie le 8 juillet 2024 sur l'hebergement dans le cloud ?",
    "options": [
      {
        "text": "Des recommandations pour l'hebergement des SI sensibles dans le cloud",
        "correct": true
      },
      {
        "text": "Une instruction interministerielle de classification",
        "correct": false
      },
      {
        "text": "Une loi sur la protection des donnees",
        "correct": false
      }
    ],
    "explanation": "Il s'agit des 'Recommandations pour l'hebergement des SI sensibles dans le cloud' publiees par l'ANSSI le 8 juillet 2024.",
    "exigence": {
      "level": "recommande",
      "note": "reco-cloud-2024 (nature du document)"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cloud-homologation-ii901",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Sous quel texte s'effectue l'homologation permettant de definir les exigences DR additionnelles pour un hebergement cloud ?",
    "options": [
      {
        "text": "L'II901",
        "correct": true
      },
      {
        "text": "Le RGPD",
        "correct": false
      },
      {
        "text": "La norme ISO 27001 seule",
        "correct": false
      },
      {
        "text": "Le referentiel SecNumCloud",
        "correct": false
      }
    ],
    "explanation": "Les exigences additionnelles pour le DR sont determinees via une homologation au titre de l'II901.",
    "exigence": {
      "level": "obligatoire",
      "note": "ii901 (homologation)"
    },
    "sources": [
      "reco-cloud-2024",
      "ii901"
    ]
  },
  {
    "id": "q-cloud-zone-protegee-clair",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Une donnee DR peut-elle rester en clair tant qu'elle demeure dans une zone physiquement protegee, selon l'II901 ?",
    "options": [
      {
        "text": "Oui : l'obligation de chiffrement par moyens agrees vaut des la sortie de la zone protegee",
        "correct": true
      },
      {
        "text": "Non : le chiffrement agree est exige meme a l'interieur de la zone protegee dans tous les cas",
        "correct": false
      }
    ],
    "explanation": "L'II901 declenche l'obligation de chiffrement par moyens agrees ANSSI des que la donnee DR sort d'une zone physiquement protegee.",
    "exigence": {
      "level": "obligatoire",
      "note": "ii901 (perimetre de la zone protegee)"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cloud-secnumcloud-role",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Quel role joue SecNumCloud vis-a-vis des exigences DR pour l'hebergement cloud ?",
    "options": [
      {
        "text": "Il constitue une base de qualification mais ne remplace pas les exigences DR additionnelles",
        "correct": true
      },
      {
        "text": "Il dispense de toute homologation II901",
        "correct": false
      },
      {
        "text": "Il transforme automatiquement le SI en SI DR conforme",
        "correct": false
      }
    ],
    "explanation": "SecNumCloud ne se substitue pas aux exigences legales ou reglementaires dont le DR ; des exigences additionnelles via homologation II901 restent requises.",
    "exigence": {
      "level": "obligatoire",
      "note": "reco-cloud-2024 / ii901 (role de SecNumCloud)"
    },
    "sources": [
      "reco-cloud-2024",
      "ii901"
    ]
  },
  {
    "id": "q-cloud-cible-dr-reco",
    "refId": "dr-ii901",
    "themeId": "cloud",
    "question": "Les recommandations cloud de l'ANSSI de 2024 concernent-elles les SI de niveau Diffusion Restreinte ?",
    "options": [
      {
        "text": "Oui, les SI de niveau DR font partie du perimetre",
        "correct": true
      },
      {
        "text": "Non, elles excluent explicitement le DR",
        "correct": false
      }
    ],
    "explanation": "Les recommandations visent notamment les SI de niveau DR, aux cotes des SI sensibles des OIV/OSE et des SIIV.",
    "exigence": {
      "level": "recommande",
      "note": "reco-cloud-2024 (cible DR)"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cadre-oiv-siiv-lpm",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "De quel cadre juridique relevent les OIV et leurs SIIV ?",
    "options": [
      {
        "text": "La loi de programmation militaire (LPM)",
        "correct": true
      },
      {
        "text": "L'II 901 exclusivement",
        "correct": false
      },
      {
        "text": "Le RGPD",
        "correct": false
      },
      {
        "text": "L'IGI 1300 sur le secret de la defense nationale",
        "correct": false
      }
    ],
    "explanation": "La source indique que les OIV et leurs SIIV relevent de la LPM (loi de programmation militaire).",
    "exigence": {
      "level": "obligatoire",
      "note": "Cadre elargi : OIV/SIIV relevent de la LPM"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cadre-dr-vs-statut",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Quelle distinction fait la source entre la DR et le statut OIV/SIIV ?",
    "options": [
      {
        "text": "La DR concerne le niveau de protection de l'information",
        "correct": true
      },
      {
        "text": "OIV/SIIV concernent le statut de l'operateur et de ses systemes critiques",
        "correct": true
      },
      {
        "text": "DR et OIV/SIIV designent exactement la meme notion",
        "correct": false
      },
      {
        "text": "La DR ne peut jamais coexister avec un statut OIV",
        "correct": false
      }
    ],
    "explanation": "Selon la source, la DR porte sur le niveau de protection de l'information, tandis qu'OIV/SIIV portent sur le statut de l'operateur et de ses systemes critiques ; les deux notions peuvent se superposer.",
    "exigence": {
      "level": "obligatoire",
      "note": "Cadre elargi : distinction niveau de protection vs statut"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cadre-superposition",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Vrai ou faux : les notions de DR et de statut OIV/SIIV peuvent se superposer pour un meme systeme.",
    "options": [
      {
        "text": "Vrai, les deux peuvent se superposer",
        "correct": true
      },
      {
        "text": "Faux, elles sont mutuellement exclusives",
        "correct": false
      }
    ],
    "explanation": "La source precise explicitement que la DR (niveau de protection) et le statut OIV/SIIV peuvent se superposer.",
    "exigence": {
      "level": "obligatoire",
      "note": "Cadre elargi : superposition possible DR et OIV/SIIV"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cadre-reco-cloud-date",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Quelle est la date de la recommandation cloud citee dans le theme Cadre elargi ?",
    "options": [
      {
        "text": "08/07/2024",
        "correct": true
      },
      {
        "text": "08/07/2022",
        "correct": false
      },
      {
        "text": "01/01/2024",
        "correct": false
      },
      {
        "text": "07/08/2024",
        "correct": false
      }
    ],
    "explanation": "La source mentionne la reco cloud du 08/07/2024.",
    "exigence": {
      "level": "usage",
      "note": "Reco cloud du 08/07/2024"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cadre-reco-cloud-perimetre",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Quels perimetres la recommandation cloud du 08/07/2024 traite-t-elle ensemble ?",
    "options": [
      {
        "text": "Les SI DR",
        "correct": true
      },
      {
        "text": "Les SI sensibles d'OIV/OSE",
        "correct": true
      },
      {
        "text": "Les SIIV",
        "correct": true
      },
      {
        "text": "Uniquement les systemes classifies Secret",
        "correct": false
      }
    ],
    "explanation": "La source indique que la reco cloud du 08/07/2024 traite ensemble SI DR, SI sensibles d'OIV/OSE et SIIV.",
    "exigence": {
      "level": "usage",
      "note": "Reco cloud 08/07/2024 : perimetre SI DR, sensibles OIV/OSE et SIIV"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cadre-ose-origine",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "De quelle directive europeenne est issue la notion d'OSE (Operateur de Services Essentiels) ?",
    "options": [
      {
        "text": "La directive NIS1",
        "correct": true
      },
      {
        "text": "Le RGPD",
        "correct": false
      },
      {
        "text": "La directive NIS2",
        "correct": false
      },
      {
        "text": "La directive ePrivacy",
        "correct": false
      }
    ],
    "explanation": "La source precise que la notion d'OSE est issue de la directive NIS1.",
    "exigence": {
      "level": "usage",
      "note": "OSE : notion issue de NIS1"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cadre-nis2-elargit",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Quel est le role de NIS2 (UE 2022/2555) selon la source ?",
    "options": [
      {
        "text": "Elle elargit le dispositif issu de NIS1",
        "correct": true
      },
      {
        "text": "Elle supprime toute reglementation de cybersecurite europeenne",
        "correct": false
      },
      {
        "text": "Elle remplace la LPM francaise",
        "correct": false
      },
      {
        "text": "Elle ne concerne que les administrations centrales",
        "correct": false
      }
    ],
    "explanation": "La source indique que NIS2 (UE 2022/2555) elargit le dispositif (issu de NIS1).",
    "exigence": {
      "level": "usage",
      "note": "NIS2 (UE 2022/2555) elargit le dispositif"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cadre-ose-obsolescence-prudence",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Comment la source recommande-t-elle de traiter le statut d'obsolescence ou de remplacement de la notion d'OSE ?",
    "options": [
      {
        "text": "Le verifier sur une source officielle dediee et le traiter avec prudence",
        "correct": true
      },
      {
        "text": "Considerer d'office que la notion est definitivement supprimee",
        "correct": false
      },
      {
        "text": "L'integrer comme un point central de l'II 901",
        "correct": false
      },
      {
        "text": "L'ignorer car il n'a aucun lien avec la cybersecurite",
        "correct": false
      }
    ],
    "explanation": "La source precise que le statut precis d'obsolescence/remplacement doit etre verifie sur une source officielle dediee, ce point etant peripherique a DR/II901 et a traiter avec prudence.",
    "exigence": {
      "level": "recommande",
      "note": "OSE : verifier le statut sur source officielle dediee, prudence"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cadre-dr-piege-statut",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Idee recue : avoir un systeme classe DR confere automatiquement le statut OIV. Que dit la source ?",
    "options": [
      {
        "text": "Faux : la DR concerne le niveau de protection de l'information, pas le statut de l'operateur",
        "correct": true
      },
      {
        "text": "Vrai : DR et statut OIV sont synonymes",
        "correct": false
      },
      {
        "text": "Vrai : tout SI DR est par definition un SIIV",
        "correct": false
      }
    ],
    "explanation": "La source distingue la DR (niveau de protection de l'information) du statut OIV/SIIV (statut de l'operateur et de ses systemes critiques) ; ce sont des notions differentes meme si elles peuvent se superposer.",
    "exigence": {
      "level": "obligatoire",
      "note": "Cadre elargi : DR vs statut OIV, notions distinctes"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cadre-ose-statut-systeme-critique",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "A quoi se rapporte le statut OIV/SIIV par opposition a la DR ?",
    "options": [
      {
        "text": "Au statut de l'operateur et de ses systemes critiques",
        "correct": true
      },
      {
        "text": "Au niveau de protection de l'information manipulee",
        "correct": false
      },
      {
        "text": "A la duree de conservation des archives",
        "correct": false
      }
    ],
    "explanation": "La source oppose le statut OIV/SIIV (operateur et systemes critiques) au niveau de protection de l'information (DR).",
    "exigence": {
      "level": "obligatoire",
      "note": "Cadre elargi : OIV/SIIV = statut operateur et systemes critiques"
    },
    "sources": [
      "ii901"
    ]
  },
  {
    "id": "q-cadre-nis-niveau-prudence",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Pourquoi le point sur l'obsolescence de la notion d'OSE doit-il etre traite avec prudence dans le cadre DR / II 901 ?",
    "options": [
      {
        "text": "Parce qu'il s'agit d'un point peripherique a DR/II901",
        "correct": true
      },
      {
        "text": "Parce que l'II 901 le definit precisement",
        "correct": false
      },
      {
        "text": "Parce qu'il est central a la classification DR",
        "correct": false
      }
    ],
    "explanation": "La source qualifie ce point de peripherique a DR/II901, justifiant une verification sur source officielle dediee et un traitement prudent.",
    "exigence": {
      "level": "recommande",
      "note": "OSE/NIS : point peripherique a DR/II901, prudence"
    },
    "sources": [
      "reco-cloud-2024"
    ]
  },
  {
    "id": "q-cadre-lpm-vs-ii901",
    "refId": "dr-ii901",
    "themeId": "cadre",
    "question": "Vrai ou faux : selon la source, l'II 901 est le texte qui regit les OIV et leurs SIIV.",
    "options": [
      {
        "text": "Faux : ce sont la LPM qui regit les OIV et leurs SIIV",
        "correct": true
      },
      {
        "text": "Vrai : l'II 901 regit directement les OIV et SIIV",
        "correct": false
      }
    ],
    "explanation": "La source rattache les OIV et leurs SIIV a la LPM, et non a l'II 901 qui porte sur le niveau de protection DR de l'information.",
    "exigence": {
      "level": "obligatoire",
      "note": "Cadre elargi : OIV/SIIV releve de la LPM"
    },
    "sources": [
      "ii901"
    ]
  }
];
