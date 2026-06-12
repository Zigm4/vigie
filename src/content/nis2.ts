// Référentiel NIS2 (directive (UE) 2022/2555) et sa transposition française.
//
// Ce fichier assemble le référentiel : métadonnées, sources, thèmes et synthèse de
// lecture y sont définis ; les cartes et QCM sont importés de modules dédiés.
//
// Parti pris (cohérent avec le reste du corpus) : on distingue clairement le SOCLE
// de la directive UE (texte stable, en vigueur au niveau européen) du VOLET FRANÇAIS
// (transposition en cours, non aboutie au 2026-06-03, fiches datées et "à vérifier").
// Les fiches d'articles de la directive (art. 20, 21, 23, 32/33, 34) sont en
// citation verbatim d'après le texte officiel EUR-Lex (PDF FR extrait avec
// pdfminer.six) ; les fiches de cadrage transverses (définitions, secteurs) restent
// des reformulations fidèles (detailParaphrase).
// État vérifié le 2026-06-03 (recherche multi-sources : EUR-Lex, Sénat, ANSSI).

import type { Referentiel } from "../types.ts";
import { nis2Cards } from "./nis2.cards.ts";
import { nis2Qcm } from "./nis2.qcm.ts";

export const nis2: Referentiel = {
  id: "nis2",
  title: "NIS2 (directive UE 2022/2555)",
  shortName: "NIS2",
  description:
    "Directive (UE) 2022/2555 relevant le niveau commun de cybersécurité dans l'Union. Elle remplace NIS1 (régime OSE) par les entités essentielles et importantes, avec des obligations de gestion des risques, de notification d'incidents et un régime de supervision et de sanctions. Sa transposition française (loi « résilience ») est en cours et n'est pas aboutie à la date de revue.",
  status: "en_cours",
  lastReviewed: "2026-06-12",
  note:
    "**NIS2 n'est pas encore applicable en France au 3 juin 2026.** La directive (UE) 2022/2555 est en vigueur au niveau européen, mais une directive ne s'impose qu'une fois transposée : la loi française de transposition (projet « résilience des infrastructures critiques et renforcement de la cybersécurité ») n'est ni adoptée en séance ni promulguée, et aucun décret n'est paru.\n\n- Le **socle de la directive (UE)** décrit ici est stable.\n- Les fiches du thème **« Transposition française »** sont datées et marquées « à vérifier » : périmètre, seuils, calendrier et articulation avec le dispositif SAIV (OIV/SIIV) dépendent des textes à paraître.\n- Les articles de la directive (gouvernance, gestion des risques, notification, supervision, sanctions) sont cités **au mot près** d'après le texte officiel (EUR-Lex). Les fiches de cadrage transverses (définitions, secteurs) restent des reformulations fidèles, signalées comme telles.",

  sources: [
    {
      id: "nis2-dir",
      docTitle: "Directive (UE) 2022/2555 (NIS2)",
      ref: "du 14 décembre 2022 ; art. 20, 21, 23, 32, 33, 34 ; annexes I et II",
      version: "JO L 333 du 27/12/2022",
      date: "2022-12-14",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=CELEX:32022L2555",
    },
    {
      id: "nis1",
      docTitle: "Directive (UE) 2016/1148 (NIS1)",
      ref: "abrogée par NIS2 (régime des opérateurs de services essentiels, OSE)",
      date: "2016-07-06",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/dir/2016/1148/oj",
    },
    {
      id: "cer",
      docTitle: "Directive (UE) 2022/2557 (REC / CER)",
      ref: "résilience des entités critiques (volet physique du paquet du 14/12/2022)",
      date: "2022-12-14",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/dir/2022/2557/oj",
    },
    {
      id: "dora",
      docTitle: "Règlement (UE) 2022/2554 (DORA)",
      ref: "résilience opérationnelle numérique du secteur financier ; directive d'accompagnement (UE) 2022/2556",
      date: "2022-12-14",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj",
    },
    {
      id: "loi-resilience",
      docTitle: "Projet de loi relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité",
      ref: "transpose CER, NIS2 et le volet financier ; non promulgué au 03/06/2026",
      issuer: "Sénat / Assemblée nationale",
      url: "https://www.senat.fr/travaux-parlementaires/textes-legislatifs/la-loi-en-clair/projet-de-loi-relatif-a-la-resilience-des-infrastructures-critiques-et-au-renforcement-de-la-cybersecurite.html",
    },
    {
      id: "senat-rap",
      docTitle: "Sénat, rapport n° 393 (2024-2025) sur le projet de loi résilience",
      ref: "structure du texte : Titre I (REC), Titre II (NIS2), Titre III (volet financier)",
      date: "2025",
      issuer: "Sénat",
      url: "https://www.senat.fr/rap/l24-393/l24-393.html",
    },
    {
      id: "anssi-nis2",
      docTitle: "ANSSI, directive NIS 2 (cyber.gouv.fr)",
      issuer: "ANSSI",
      url: "https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/directive-nis-2/",
    },
    {
      id: "monespacenis2",
      docTitle: "ANSSI, portail MonEspaceNIS2 (pré-enregistrement)",
      ref: "pré-enregistrement volontaire ouvert le 24/11/2025",
      issuer: "ANSSI",
      url: "https://monespacenis2.cyber.gouv.fr/",
    },
    {
      id: "recyf",
      docTitle: "ANSSI, Référentiel Cyber France (ReCyF)",
      ref: "mesures recommandées pour atteindre les objectifs de NIS2 (non obligatoires par défaut)",
      date: "2026-03-17",
      issuer: "ANSSI",
      url: "https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/directive-nis-2/",
    },
  ],

  themes: [
    { id: "socle", title: "Socle & cadre", summary: "Ce qu'est NIS2, ce qu'elle remplace (NIS1/OSE), son articulation avec SAIV et le paquet CER/DORA." },
    { id: "entites", title: "Entités & secteurs", summary: "Entités essentielles vs importantes, annexes I et II, critère de taille, auto-enregistrement." },
    { id: "obligations", title: "Obligations (directive)", summary: "Gouvernance (art. 20), gestion des risques (art. 21), notification d'incidents (art. 23)." },
    { id: "controle", title: "Supervision & sanctions", summary: "Régime de supervision EE/EI (art. 32-33) et plafonds d'amendes (art. 34)." },
    { id: "cadre-ue", title: "Cadre & coopération (UE)", summary: "Autorités compétentes, CSIRT, coopération européenne (groupe de coopération, réseau CSIRT, EU-CyCLONe), compétence et registre ENISA." },
    { id: "france", title: "Transposition française (à vérifier)", summary: "Loi « résilience », ANSSI autorité, pré-enregistrement, ReCyF, entrée en vigueur. Non aboutie au 03/06/2026." },
  ],

  cards: nis2Cards,
  qcm: nis2Qcm,

  reading: [
    {
      id: "nis2-synthese",
      refId: "nis2",
      title: "NIS2 : synthèse de lecture",
      intro:
        "Synthèse paraphrasée distinguant le socle stable de la directive (UE) du volet français en cours de transposition. Elle ne se substitue pas aux textes, qui font seuls foi. État vérifié le 3 juin 2026.",
      sections: [
        {
          id: "directive",
          heading: "La directive (UE) 2022/2555 (socle stable)",
          body: "NIS2 (directive du 14 décembre 2022, en vigueur au niveau de l'Union depuis le 16 janvier 2023) relève le niveau commun de cybersécurité. Elle **abroge NIS1** (directive 2016/1148) et remplace les opérateurs de services essentiels par des **entités essentielles (EE)** et **importantes (EI)**, réparties entre l'annexe I (secteurs hautement critiques) et l'annexe II (autres secteurs critiques). Obligations principales : **gouvernance et responsabilité des dirigeants** (art. 20), **mesures de gestion des risques** selon une approche tous risques (art. 21), **notification d'incident** en cascade 24 h / 72 h / 1 mois (art. 23). La **supervision** est graduée (art. 32 pour les EE, art. 33 pour les EI) et les **sanctions** plafonnées (art. 34 : au moins 10 M€ ou 2 % du CA mondial pour les EE, 7 M€ ou 1,4 % pour les EI). Échéance de transposition par les États : 17 octobre 2024.",
          paraphrase: true,
          sources: ["nis2-dir", "nis1"],
        },
        {
          id: "transposition-fr",
          heading: "Transposition française (en cours au 3 juin 2026)",
          body: "La France transpose NIS2 (avec la directive CER et le volet financier) dans le projet de loi **« relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité »**. Au 3 juin 2026 : adopté en première lecture par le **Sénat le 12 mars 2025**, voté en **commission spéciale à l'Assemblée nationale le 10 septembre 2025**, examen en séance attendu vers **juillet 2026** ; la loi **n'est pas promulguée** et **aucun décret** n'est paru (la Commission européenne a adressé un avis motivé à la France le 7 mai 2025). L'**ANSSI**, autorité nationale, a ouvert le **24 novembre 2025** un **pré-enregistrement volontaire** (MonEspaceNIS2) et publié le **17 mars 2026** le **Référentiel Cyber France (ReCyF)**, recommandé et non obligatoire par défaut. NIS2 ne deviendra **exigible en France** qu'une fois l'ensemble des textes (loi, décrets, arrêtés) promulgués. **À vérifier** : périmètre chiffré, seuils, calendrier d'enregistrement obligatoire et articulation précise avec le dispositif SAIV (OIV/SIIV) et la Diffusion Restreinte.",
          paraphrase: true,
          sources: ["loi-resilience", "anssi-nis2", "monespacenis2", "recyf", "senat-rap"],
        },
      ],
    },
  ],
};
