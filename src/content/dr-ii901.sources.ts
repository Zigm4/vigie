// Sources officielles du référentiel DR / II 901.
//
// Chaque carte/QCM référence un ou plusieurs de ces identifiants. Le numéro de
// recommandation précis (Rxx) ou l'article/mesure II 901 est cité dans le texte
// de la carte ; ces entrées portent l'origine documentaire (titre, version, date,
// URL publique vérifiée).

import type { Source } from "../types.ts";

export const drSources: Source[] = [
  {
    id: "ii901",
    docTitle: "Instruction interministérielle n°901/SGDSN/ANSSI",
    ref: "« relative à la protection des systèmes d'informations sensibles », NOR PRMD1503279J (texte intégral sur Légifrance, présentation sur cyber.gouv.fr)",
    version: "signée le 28/01/2015",
    date: "2015-02-11",
    issuer: "SGDSN / ANSSI",
    url: "https://www.legifrance.gouv.fr/circulaire/id/39217",
  },
  {
    id: "ii901-art2",
    docTitle: "II 901",
    ref: "article 2 : détermine quelles mesures sont obligatoires et lesquelles sont recommandées",
    date: "2015",
    issuer: "SGDSN / ANSSI",
    url: "https://www.legifrance.gouv.fr/circulaire/id/39217",
  },
  {
    id: "ii901-art14",
    docTitle: "II 901",
    ref: "article 14 : choix de la classe du SI",
    date: "2015",
    issuer: "SGDSN / ANSSI",
    url: "https://www.legifrance.gouv.fr/circulaire/id/39217",
  },
  {
    id: "ii901-annexe2",
    docTitle: "II 901",
    ref: "annexe 2 : concept de « classe de réseau » (classe 1 / classe 2) pour les SI homologués DR",
    date: "2015",
    issuer: "SGDSN / ANSSI",
    url: "https://www.legifrance.gouv.fr/circulaire/id/39217",
  },
  {
    id: "igi1300",
    docTitle: "IGI n°1300/SGDSN/PSE/PSD",
    ref: "§1.3.2 : portée de la mention Diffusion Restreinte",
    version: "version du 09/08/2021",
    date: "2021-08-09",
    issuer: "SGDSN",
    url: "https://www.sgdsn.gouv.fr/files/files/Nos_missions/igi-1300-20210809.pdf",
  },
  {
    id: "igi1300-an1",
    docTitle: "IGI 1300, Annexe 1",
    ref: "Règles de protection des informations et supports portant la mention Diffusion Restreinte",
    version: "version du 09/08/2021",
    date: "2021-08-09",
    issuer: "SGDSN",
    url: "https://www.sgdsn.gouv.fr/files/files/Nos_missions/igi-1300-20210809.pdf",
  },
  {
    id: "pg075",
    docTitle: "Guide ANSSI-PG-075",
    ref: "« Recommandations pour les architectures des SI sensibles ou Diffusion Restreinte », sans caractère normatif (Licence Ouverte v2.0)",
    version: "v1.2",
    date: "2021-09-24",
    issuer: "ANSSI",
    url: "https://messervices.cyber.gouv.fr/documents-guides/anssi-guide-recommandations_architectures_systemes_information_sensibles_ou_diffusion_restreinte-v1.2.pdf",
  },
  {
    id: "reco-cloud-2024",
    docTitle: "Recommandations pour l'hébergement dans le cloud des systèmes d'information sensibles",
    ref: "vise les SI de niveau DR, les SI sensibles d'OIV/OSE et les SIIV",
    date: "2024-07-08",
    issuer: "ANSSI",
    url: "https://cyber.gouv.fr/publications/recommandations-pour-lhebergement-des-si-sensibles-dans-le-cloud",
  },
  {
    id: "faq-cloud",
    docTitle: "FAQ ANSSI, recommandations hébergement cloud",
    ref: "chiffrement par moyens agréés ; SecNumCloud ne se substitue pas aux exigences DR",
    date: "2024",
    issuer: "ANSSI",
    url: "https://cyber.gouv.fr/enjeux-technologiques/cloud/faq-recommandations-hebergement-cloud/",
  },
];
