// Referentiel DORA (reglement (UE) 2022/2554, resilience operationnelle
// numerique du secteur financier).
//
// Ce fichier assemble le referentiel : metadonnees, sources, themes et synthese de
// lecture y sont definis ; les cartes et QCM sont importes de modules dedies.
//
// Parti pris (coherent avec le reste du corpus) : DORA est un REGLEMENT,
// directement applicable depuis le 17 janvier 2025 (art. 64), sans transposition,
// a la difference de NIS2 (directive). Les fiches d'articles sont en citation
// verbatim d'apres le texte officiel EUR-Lex FR (ressources/txt/dora-eurlex-html.txt,
// version HTML EUR-Lex) ; seule la fiche repere de structure (cartographie des
// chapitres) est une reformulation signalee (detailParaphrase).
// Les delais chiffres de notification d'incidents ne figurent PAS dans le
// reglement : ils relevent de normes techniques de reglementation (RTS, art. 20),
// et ne sont donc jamais cites ici.
// Etat verifie le 2026-06-12.

import type { Referentiel } from "../types.ts";
import { doraCards } from "./dora.cards.ts";
import { doraQcm } from "./dora.qcm.ts";

export const dora: Referentiel = {
  id: "dora",
  title: "DORA (règlement UE 2022/2554)",
  shortName: "DORA",
  description:
    "Règlement (UE) 2022/2554 sur la résilience opérationnelle numérique du secteur financier (DORA). Directement applicable depuis le 17 janvier 2025, sans transposition, il impose aux entités financières des exigences uniformes : gestion du risque lié aux TIC, notification des incidents majeurs, tests de résilience (dont les TLPT), maîtrise du risque lié aux prestataires tiers de services TIC (avec supervision européenne des prestataires critiques) et partage d'informations sur les cybermenaces.",
  status: "en_cours",
  lastReviewed: "2026-06-12",
  note:
    "**DORA s'applique depuis le 17 janvier 2025.** C'est un règlement de l'Union (et non une directive comme NIS2) : il est obligatoire dans tous ses éléments et directement applicable dans tout État membre, sans loi de transposition (art. 64).\n\n- Le règlement renvoie sur de nombreux points (seuils de classification des incidents, **délais de notification**, modèles de rapports, registre d'informations, modalités des TLPT...) à des **normes techniques de réglementation et d'exécution (RTS/ITS)** élaborées par les autorités européennes de surveillance (ABE, AEMF, AEAPP) et adoptées par la Commission. Pour ces points, se reporter aux normes techniques en vigueur : ce référentiel cite le règlement, pas les RTS.\n- Pour les entités financières également couvertes par NIS2, DORA est un **acte juridique sectoriel (lex specialis)** : voir la fiche dédiée à l'articulation.",

  sources: [
    {
      id: "dora-reg",
      docTitle: "Règlement (UE) 2022/2554 (DORA)",
      ref: "du 14 décembre 2022 ; notamment art. 1, 2, 4, 5, 6, 8 à 14, 17 à 20, 24 à 28, 30, 31, 45, 64",
      version: "JO L 333 du 27/12/2022",
      date: "2022-12-14",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/reg/2022/2554/oj",
    },
    {
      id: "dir-2556",
      docTitle: "Directive (UE) 2022/2556 (accompagnement de DORA)",
      ref: "modifie les directives sectorielles financières (2009/65/CE, 2009/138/CE, 2011/61/UE, 2013/36/UE, 2014/59/UE, 2014/65/UE, (UE) 2015/2366, (UE) 2016/2341)",
      date: "2022-12-14",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/dir/2022/2556/oj",
    },
    {
      id: "nis2-dir",
      docTitle: "Directive (UE) 2022/2555 (NIS2)",
      ref: "pour l'articulation : DORA est un acte juridique sectoriel aux fins de son article 4 (lex specialis)",
      date: "2022-12-14",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj",
    },
  ],

  themes: [
    { id: "socle", title: "Socle & cadre", summary: "Ce qu'est DORA, règlement vs directive (application directe au 17/01/2025), articulation NIS2 (lex specialis), directive d'accompagnement 2022/2556, structure du texte." },
    { id: "perimetre", title: "Périmètre", summary: "Les entités financières visées (art. 2), les prestataires tiers TIC, le principe de proportionnalité (art. 4), exclusions et allégements (microentreprises)." },
    { id: "risques", title: "Gestion du risque TIC", summary: "Gouvernance et responsabilité de l'organe de direction (art. 5), cadre de gestion du risque TIC (art. 6), mesures clés des art. 8 à 14 (identification, protection, détection, continuité, sauvegarde, apprentissage, communication)." },
    { id: "incidents", title: "Incidents", summary: "Processus de gestion (art. 17), classification (art. 18), déclaration des incidents majeurs et notification volontaire des cybermenaces (art. 19), délais renvoyés aux RTS (art. 20)." },
    { id: "tests", title: "Tests de résilience", summary: "Programme de tests (art. 24-25) et tests de pénétration fondés sur la menace, TLPT (art. 26-27) : qui, quand, comment." },
    { id: "tiers", title: "Prestataires tiers TIC", summary: "Responsabilité pleine de l'entité (art. 28), registre d'informations, clauses contractuelles (art. 30), prestataires critiques supervisés par les AES (art. 31)." },
    { id: "partage", title: "Partage d'informations", summary: "Échange volontaire et encadré de renseignements sur les cybermenaces entre entités financières (art. 45)." },
  ],

  cards: doraCards,
  qcm: doraQcm,

  reading: [
    {
      id: "dora-synthese",
      refId: "dora",
      title: "DORA : synthèse de lecture",
      intro:
        "Synthèse paraphrasée du règlement (UE) 2022/2554. Elle ne se substitue pas au texte, qui fait seul foi (EUR-Lex). État vérifié le 12 juin 2026.",
      sections: [
        {
          id: "reglement",
          heading: "Le règlement et ses cinq blocs d'exigences",
          body: "DORA (règlement du 14 décembre 2022, **applicable depuis le 17 janvier 2025**) harmonise la résilience opérationnelle numérique de tout le secteur financier de l'Union : une vingtaine de catégories d'entités financières (banques, paiement, monnaie électronique, investissement, crypto-actifs, assurance, gestion d'actifs, infrastructures de marché...), plus les prestataires tiers de services TIC. Étant un **règlement**, il s'applique directement, sans transposition, à la différence de NIS2 ; pour les entités financières aussi couvertes par NIS2, il joue comme **lex specialis** (art. 1 §2 et considérant 16). La directive d'accompagnement (UE) 2022/2556 met en cohérence les directives sectorielles. Le cœur du texte tient en cinq blocs : **gestion du risque TIC** (chap. II : gouvernance par l'organe de direction, cadre documenté revu au moins annuellement, identification des actifs, protection, détection, continuité et sauvegardes, apprentissage et communication de crise), **incidents** (chap. III : processus interne, enregistrement de tous les incidents, classification selon les critères de l'art. 18, déclaration des incidents majeurs en trois jalons), **tests de résilience** (chap. IV : programme annuel pour les systèmes critiques, TLPT au moins triennaux pour les entités désignées), **prestataires tiers TIC** (chap. V : responsabilité pleine de l'entité, registre d'informations, clauses contractuelles imposées, supervision européenne des prestataires critiques) et **partage d'informations** sur les cybermenaces (chap. VI, volontaire). Le tout sous un **principe de proportionnalité** (art. 4) qui module l'application selon la taille et le profil de risque, avec des allégements pour les microentreprises.",
          paraphrase: true,
          sources: ["dora-reg", "dir-2556", "nis2-dir"],
        },
        {
          id: "supervision-rts",
          heading: "Supervision, prestataires critiques et normes techniques (RTS/ITS)",
          body: "Le respect de DORA est assuré par les **autorités compétentes sectorielles** existantes (art. 46), chaque entité relevant de son superviseur financier habituel. Innovation majeure : les **prestataires tiers de services TIC critiques** pour le secteur (grands fournisseurs cloud en tête) sont désignés au niveau européen par les **AES** (ABE, AEMF, AEAPP) et placés sous la supervision d'un **superviseur principal** (art. 31), avec un cadre dédié (forum de supervision, recommandations, inspections). Attention à un point souvent mal compris : le règlement fixe les principes, mais renvoie beaucoup de modalités à des **normes techniques de réglementation et d'exécution (RTS/ITS)** élaborées par les AES et adoptées par la Commission. C'est le cas notamment des **seuils** qui font d'un incident un incident « majeur » (art. 18 §3), des **délais et modèles de notification** des incidents (art. 20), des modèles du **registre d'informations** des contrats TIC (art. 28 §9), du contenu de la politique sur les services TIC critiques (art. 28 §10) et de la méthodologie des **TLPT**, alignée sur le cadre TIBER-EU (art. 26 §11). Les chiffres opérationnels (délais de notification en particulier) se lisent donc dans les RTS en vigueur, pas dans le corps du règlement.",
          paraphrase: true,
          sources: ["dora-reg"],
        },
      ],
    },
  ],
};
