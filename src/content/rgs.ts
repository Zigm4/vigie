// Referentiel RGS v2.0 (Referentiel general de securite, France).
//
// Ce fichier assemble le referentiel : metadonnees, sources, themes et synthese
// de lecture y sont definis ; les cartes et QCM sont importes de modules dedies.
//
// Parti pris (coherent avec le reste du corpus) : le RGS est un texte public et
// stable (version 2.0 approuvee par arrete du Premier ministre du 13 juin 2014,
// pris en application du decret n° 2010-112 et de l'ordonnance n° 2005-1516).
// Les fiches citent le corps du texte et l'annexe A1 AU MOT PRES (verbatim « »
// verifie contre les documents officiels, ressources/txt/rgs-v2-*.txt). Seule la
// definition du teleservice, issue de l'ordonnance (art. 1er, verifiee sur
// Legifrance), est une reformulation signalee (detailParaphrase).
// Etat verifie le 2026-06-12.

import type { Referentiel } from "../types.ts";
import { rgsCards } from "./rgs.cards.ts";
import { rgsQcm } from "./rgs.qcm.ts";

export const rgs: Referentiel = {
  id: "rgs",
  title: "RGS v2.0 (Référentiel général de sécurité)",
  shortName: "RGS",
  description:
    "Référentiel général de sécurité, version 2.0 : il encadre la sécurité des échanges électroniques entre les usagers et les autorités administratives, et entre autorités administratives. Fondé sur l'ordonnance n° 2005-1516 et le décret n° 2010-112, il impose une démarche de sécurité aboutissant à l'homologation des systèmes d'information (téléservices en tête), fixe des exigences par fonction de sécurité et par niveau (*, **, ***), et organise la qualification des produits de sécurité et des prestataires de services de confiance.",
  status: "en_cours",
  lastReviewed: "2026-06-12",
  note:
    "**Le RGS décrit ici est la version 2.0, approuvée par l'arrêté du Premier ministre du 13 juin 2014** (elle remplace la version 1.0 du 6 mai 2010). Il est pris en application du décret n° 2010-112 du 2 février 2010, lui-même pris pour l'application des articles 9, 10 et 12 de l'ordonnance n° 2005-1516 du 8 décembre 2005.\n\n- Les fiches citent **au mot près** le corps du texte du RGS v2.0 et son annexe A1 (documents publics ANSSI/SGMAP). Les coquilles du document original sont conservées et signalées par [sic].\n- Le document date de **2014** : avant tout usage opposable, vérifier sur cyber.gouv.fr et Légifrance l'état du droit en vigueur (textes postérieurs sur l'identification électronique et les services de confiance, renumérotation des articles du code civil cités, etc.).",

  sources: [
    {
      id: "rgs-corps",
      docTitle: "Référentiel général de sécurité, version 2.0 (corps du texte)",
      ref: "chapitres 1 à 10",
      version: "2.0",
      date: "2014-06-13",
      issuer: "Premier ministre, ANSSI / SGMAP",
      url: "https://cyber.gouv.fr/documents/331/RGS_v-2-00_Corps_du_texte.pdf",
    },
    {
      id: "rgs-a1",
      docTitle: "RGS v2.0, annexe A1 : règles relatives à la mise en œuvre des fonctions de sécurité basées sur l'emploi de certificats électroniques",
      version: "3.0",
      date: "2014-02-27",
      issuer: "ANSSI / SGMAP",
      url: "https://cyber.gouv.fr/documents/332/RGS_v-2-0_A1.pdf",
    },
    {
      id: "rgs-docs",
      docTitle: "ANSSI, page des documents constitutifs du RGS (cyber.gouv.fr)",
      ref: "corps du texte et annexes A, B, C",
      issuer: "ANSSI",
      url: "https://cyber.gouv.fr/reglementation/reglementation-identite-confiance-numerique/securite-echanges-voie-electronique/referentiel-general-de-securite/documents-referentiel-general-de-securite/",
    },
    {
      id: "ordonnance-2005",
      docTitle: "Ordonnance n° 2005-1516 du 8 décembre 2005 relative aux échanges électroniques entre les usagers et les autorités administratives et entre les autorités administratives",
      ref: "art. 1er (définitions), 5, 8, 9, 10, 12",
      date: "2005-12-08",
      issuer: "Légifrance",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000636232",
    },
  ],

  themes: [
    { id: "socle", title: "Socle & champ d'application", summary: "Ce qu'est le RGS, sa base légale (ordonnance de 2005, décret de 2010, arrêté de 2014), à qui il s'impose, ce qu'est un téléservice." },
    { id: "demarche", title: "Démarche de sécurité", summary: "Les cinq étapes imposées : analyse des risques, objectifs de sécurité, mesures, homologation obligatoire, suivi opérationnel." },
    { id: "fonctions", title: "Fonctions & niveaux de sécurité", summary: "Authentification, signature, cachet, confidentialité, horodatage ; les niveaux (*), (**) et (***) et leurs pièges." },
    { id: "produits-prestataires", title: "Produits & prestataires qualifiés", summary: "La qualification (label) : produits de sécurité (élémentaire / standard / renforcée) et PSCO (PSCE, PSHE, prestataires d'audit), annexes A, B et C." },
  ],

  cards: rgsCards,
  qcm: rgsQcm,

  reading: [
    {
      id: "rgs-synthese",
      refId: "rgs",
      title: "RGS v2.0 : synthèse de lecture",
      intro:
        "Synthèse paraphrasée du corps du texte du RGS v2.0 et de son annexe A1. Elle ne se substitue pas aux documents officiels (ANSSI / SGMAP), qui font seuls foi. Etat vérifié le 12 juin 2026.",
      sections: [
        {
          id: "socle-demarche",
          heading: "Le RGS, son champ et sa démarche",
          body: "Le RGS vise à **renforcer la confiance des usagers** dans les services électroniques des **autorités administratives** (notion de l'ordonnance n° 2005-1516 qui dépasse l'Etat : collectivités territoriales, établissements publics administratifs, organismes de protection sociale). Il s'applique à leurs systèmes d'information dans leurs relations entre elles et avec les usagers, et n'est qu'un **recueil de bonnes pratiques** pour les autres organismes. Version 2.0 approuvée par **arrêté du Premier ministre du 13 juin 2014**, en application du **décret n° 2010-112** (« décret RGS »). La mise en conformité suit **cinq étapes imposées** : analyse des risques, définition des objectifs de sécurité, choix et mise en œuvre des mesures, **homologation de sécurité** (obligatoire avant la mise en service opérationnelle ; la décision concernant un téléservice est rendue accessible aux usagers), puis suivi opérationnel. ISO 27005 et EBIOS sont recommandées en appui, pas imposées.",
          paraphrase: true,
          sources: ["rgs-corps", "ordonnance-2005"],
        },
        {
          id: "fonctions-qualification",
          heading: "Fonctions de sécurité, niveaux et qualification",
          body: "Le RGS **n'impose aucune technologie** : il fixe des exigences par **fonction de sécurité** (authentification de personne et de serveur, signature électronique, cachet, confidentialité, horodatage), déclinées en trois niveaux aux exigences croissantes, une étoile (\\*), deux étoiles (\\*\\*) et trois étoiles (\\*\\*\\*), choisis d'après l'analyse de risques ; l'horodatage ne connaît qu'un **niveau unique** (annexe A5) et le certificat « double usage » n'existe qu'aux niveaux (\\*) et (\\*\\*). Au niveau (\\*\\*\\*), la signature bénéficie de la **présomption de fiabilité** (art. 1316-4 du code civil, rédaction de l'époque). Côté confiance : la **qualification** (label créé par l'ordonnance de 2005) atteste la conformité au RGS des **produits de sécurité** (niveaux élémentaire / standard / renforcée, attestés par l'ANSSI sur la base d'une CSPN ou des Critères communs) et des **PSCO** (PSCE, PSHE, prestataires d'audit de la SSI ; qualification de trois ans délivrée par un organisme accrédité COFRAC et habilité par l'ANSSI). Les autorités administratives recourent à des produits et prestataires **qualifiés ou, à défaut, attestent formellement** de leur conformité au RGS auprès de l'ANSSI (art. 4 du décret RGS).",
          paraphrase: true,
          sources: ["rgs-corps", "rgs-a1", "rgs-docs"],
        },
      ],
    },
  ],
};
