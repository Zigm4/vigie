// Référentiel Diffusion Restreinte / II 901.
//
// Ce fichier assemble le référentiel : métadonnées, thèmes et synthèse de lecture
// y sont définis, tandis que les sources, les cartes et les QCM (volumineux) sont
// importés depuis des modules dédiés pour rester maintenables.
//
// Sources : IGI 1300 (mention DR, Annexe 1), II 901 (art. 2, art. 14, annexe 2),
// guide ANSSI-PG-075 v1.2 (70 recommandations), recommandations cloud du
// 08/07/2024 et FAQ cloud ANSSI. Principe non dogmatique : le niveau d'exigence
// de chaque élément suit la formulation du texte (voir dr-ii901.cards.ts).

import type { Referentiel } from "../types.ts";
import { drSources } from "./dr-ii901.sources.ts";
import { drCards } from "./dr-ii901.cards.ts";
import { drQcm } from "./dr-ii901.qcm.ts";
import { drCardsExtra, drQcmExtra } from "./dr-ii901.extra.ts";

export const drII901: Referentiel = {
  id: "dr-ii901",
  title: "Diffusion Restreinte (II 901)",
  shortName: "DR / II901",
  description:
    "Protection des systèmes d'information traitant des informations « Diffusion Restreinte ». La mention DR est définie par l'IGI 1300 ; la protection des SI qui la traitent est régie par l'instruction interministérielle II 901, déclinée par le guide ANSSI-PG-075.",
  status: "en_cours",
  lastReviewed: "2026-06-02",

  sources: drSources,

  themes: [
    { id: "notions", title: "Notions fondamentales", summary: "Ce qu'est (et n'est pas) la mention Diffusion Restreinte." },
    { id: "textes", title: "Textes & périmètre", summary: "IGI 1300, II 901, champ d'application, qui peut apposer la DR." },
    { id: "structure", title: "Structure & articles de l'II 901", summary: "Les 21 articles : principes, traitement DR, physique, externalisation, nomadisme." },
    { id: "demarche", title: "Démarche & homologation", summary: "Tri du patrimoine, régime de protection, obligatoire vs recommandé." },
    { id: "homologation", title: "Homologation", summary: "Acceptation des risques, EBIOS RM, périmètre, réévaluation, interconnexions." },
    { id: "classes", title: "Classes & architectures", summary: "Classes 0/1/2 et options d'architecture (R5+/R5/R5-)." },
    { id: "interco", title: "Interconnexions & passerelles", summary: "Sécurisation des interconnexions et passerelles de classe 1." },
    { id: "navigation", title: "Navigation, transferts & échanges", summary: "Navigation Web, chiffrement des transferts, échanges sécurisés." },
    { id: "produits", title: "Produits & prestataires de confiance", summary: "Visas de sécurité, qualification, agrément DR." },
    { id: "cloisonnement", title: "Cloisonnement & durcissement", summary: "Zonage, communications latérales, durcissement." },
    { id: "marquage", title: "Marquage & manipulation", summary: "Marquage, conservation, diffusion (IGI 1300, Annexe 1)." },
    { id: "acces", title: "Accès & codes malveillants", summary: "Authentification, droits, protection contre les codes malveillants." },
    { id: "supports", title: "Supports amovibles", summary: "Maîtrise, dépollution et chiffrement des supports." },
    { id: "postes", title: "Postes & nomadisme", summary: "Postes de travail, nomadisme et réseaux sans fil." },
    { id: "admin", title: "Administration & journalisation", summary: "Administration sécurisée, MCS, journalisation, incidents." },
    { id: "mesures", title: "Catalogue des mesures (annexe F)", summary: "Les mesures de l'II 901 par domaine : ORG, RH, GDB, INT, PHY, RES, EXP, PDT, DEV, TI, PCA." },
    { id: "cloud", title: "Hébergement & cloud", summary: "Recommandations de juillet 2024 et cas SecNumCloud." },
    { id: "cadre", title: "Cadre élargi", summary: "Situer la DR vis-à-vis de LPM/OIV/SIIV et NIS2." },
  ],

  cards: [...drCards, ...drCardsExtra],
  qcm: [...drQcm, ...drQcmExtra],

  reading: [
    {
      id: "ii901-synthese",
      refId: "dr-ii901",
      title: "II 901 & DR : synthèse de lecture",
      intro:
        "Le texte intégral de l'II 901 et de ses annexes n'est pas confirmé librement téléchargeable (à la différence de l'IGI 1300, public). Les sections ci-dessous sont des synthèses paraphrasées renvoyant aux sources officielles. Elles ne se substituent pas aux textes, qui font seuls foi.",
      sections: [
        {
          id: "objet",
          heading: "Objet et nature des textes",
          body: "L'**IGI 1300** (09/08/2021) définit la mention DR et, en Annexe 1, les règles de protection des informations et supports DR. L'**II 901** (signée le 28/01/2015, publiée le 11/02/2015) définit les objectifs et règles, organisationnelles et techniques, de protection des systèmes d'information sensibles, notamment ceux traitant du DR. Le guide **ANSSI-PG-075** (v1.2, 24/09/2021) en décline les recommandations d'architecture, sans caractère normatif.",
          paraphrase: true,
          sources: ["ii901", "igi1300", "pg075"],
        },
        {
          id: "perimetre",
          heading: "Champ d'application",
          body: "L'II 901 s'applique aux administrations de l'État (SI sensibles), à toute personne morale exploitant un SI DR, et aux entités relevant de la PPST. Elle s'étend aux SI traitant Restreint UE / Restreint OTAN, et **ne concerne pas** les SI traitant d'informations classifiées de défense (régime de l'IGI 1300).",
          paraphrase: true,
          sources: ["ii901"],
        },
        {
          id: "classes",
          heading: "Classes de réseau (annexe 2)",
          body: "L'**annexe 2** définit le concept de **classe de réseau** ; le choix de la classe relève de l'**article 14**.\n\n- **Classe 0** : SI public ou connecté à un SI public, non conforme aux exigences de classe 1.\n- **Classe 1** : SI sensible/DR connecté à Internet via une passerelle sécurisée conforme à l'II 901.\n- **Classe 2** : SI sensible/DR physiquement isolé d'Internet.\n\nPoint d'attention : l'isolement physique caractérise la **classe 2**, et **non la classe 1**, contrairement à une idée reçue répandue. Le recours à la classe 2 est obligatoire lorsque les risques sont élevés (PG-075).",
          paraphrase: true,
          sources: ["ii901-annexe2", "ii901-art14", "pg075"],
        },
        {
          id: "obligatoire-recommande",
          heading: "Mesures obligatoires vs recommandées (article 2)",
          body: "La distinction entre mesures **obligatoires** et **recommandées** se lit à l'**article 2 de l'II 901**, selon le régime de protection retenu. Le guide PG-075 (annexe B) aide à cette lecture mais reste **sans caractère normatif**. Beaucoup de cartes signalent la gradation **DR vs sensible** : ce qui est obligatoire pour un SI DR est souvent seulement recommandé pour un SI sensible non DR (ex. R9 vs R10, R55 vs R56).",
          paraphrase: true,
          sources: ["ii901-art2", "pg075"],
        },
        {
          id: "manipulation",
          heading: "Manipulation de l'information DR (IGI 1300, Annexe 1)",
          body: "L'Annexe 1 de l'IGI 1300 fixe les règles de marquage (timbre DR en haut de chaque page, enregistrement au départ et à l'arrivée), de conservation (meubles fermant à clef), de reproduction (limitée aux besoins du service) et de destruction (irréversible). Surtout, la transmission DR est **interdite sur Internet ou tout SI non homologué DR**, sauf mesures particulières conformes à l'II 901 : c'est le lien direct entre l'information et le SI.",
          paraphrase: true,
          sources: ["igi1300-an1", "ii901"],
        },
        {
          id: "mesures-cles",
          heading: "Quelques mesures techniques clés",
          body: "- **Chiffrement** : informations DR chiffrées par moyens agréés ANSSI dès qu'elles sortent d'une zone physiquement protégée.\n- **Homologation** : tout SI sensible homologué avant production ; interconnexions homologuées à part ; risques réévalués (art. 3).\n- **Passerelle de classe 1** (SI DR) : filtrage qualifié + rupture de flux + détection (R13, R14, R15).\n- **Journalisation** : 12 mois glissants (R68) ; déclaration des incidents à l'ANSSI (R70).\n- **Cloud** : SecNumCloud ne suffit pas pour du DR ; homologation II 901 requise.",
          paraphrase: true,
          sources: ["ii901", "pg075", "faq-cloud"],
        },
        {
          id: "caveats",
          heading: "Limites de cette synthèse",
          body: "Cette synthèse est **non officielle** et **paraphrasée**. Le texte de l'II 901 reste daté du 28/01/2015 (aucune révision confirmée à ce jour, à revérifier sur Légifrance / cyber.gouv.fr). Le guide PG-075 est sous Licence Ouverte v2.0 (Etalab), réutilisable avec mention de la paternité. Vérifiez toujours les sources d'origine avant tout usage.",
          paraphrase: true,
          sources: ["ii901", "pg075"],
        },
      ],
    },
  ],
};
