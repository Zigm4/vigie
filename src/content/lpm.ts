// Référentiel LPM / OIV / SIIV (dispositif SAIV) - v1 (cartes).
//
// Socle vérifié (recherche du 2026-06-02, sources primaires Légifrance / code de
// la défense, SGDSN, ANSSI cyber.gouv.fr). Principe non dogmatique conservé :
// niveau d'exigence selon le texte. Les volets NON établis par une source
// vérifiée (articulation précise avec NIS2 et avec la DR/II 901, restructuration
// par la loi de résilience 2024-2025) sont marqués "à vérifier" et NON inventés.
//
// QCM et table de liaison question -> fiche(s) à venir (même pipeline que la DR).

import type { Referentiel } from "../types.ts";
import { lpmQcm } from "./lpm.qcm.ts";

export const lpm: Referentiel = {
  id: "lpm",
  title: "LPM / OIV / SIIV (dispositif SAIV)",
  shortName: "LPM / SAIV",
  description:
    "Sécurité des activités d'importance vitale (SAIV) : le dispositif interministériel du code de la défense et son volet cyber introduit par la LPM, qui impose aux opérateurs d'importance vitale (OIV) des règles de sécurité sur leurs systèmes d'information d'importance vitale (SIIV).",
  status: "en_cours",
  lastReviewed: "2026-06-02",
  note:
    "Le socle décrit ici (dispositif SAIV de 2006, volet cyber de la LPM 2013) est en vigueur. Trois points évoluent ou restent à confirmer ; les fiches concernées portent la mention « à vérifier » (thème « Cadre élargi ») :\n\n- **NIS2** : la transposition française (loi de résilience) introduit les entités essentielles et importantes, en remplacement des OSE. Son statut exact en 2026 n'est pas figé, et NIS2 fera l'objet d'un référentiel dédié.\n- **Articulation avec la Diffusion Restreinte (II 901)** : lorsqu'un SIIV traite aussi des informations DR, le cumul précis des obligations (homologation, cloisonnement) n'est pas tranché par un texte officiel unique.\n- **Loi de résilience (transposition CER + NIS2, 2024-2025)** : elle pourrait restructurer les 12 secteurs et le périmètre des OIV.",

  sources: [
    {
      id: "code-defense",
      docTitle: "Code de la défense",
      ref: "partie législative : chapitre II « Protection des installations d'importance vitale », art. L.1332-1 à L.1332-7",
      issuer: "Légifrance",
      // Chapitre II « Protection des installations d'importance vitale » (partie législative, L.1332-1 à L.1332-7).
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071307/LEGISCTA000006166900/",
    },
    {
      id: "code-defense-r",
      docTitle: "Code de la défense",
      ref: "partie réglementaire : chapitre II « Protection des installations d'importance vitale », art. R.1332-1 à R.1332-42",
      issuer: "Légifrance",
      // Partie reglementaire du meme chapitre (definitions OIV/secteurs, designation, PSO/PPP, volet SIIV R.1332-41-x).
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071307/LEGISCTA000006167383/",
    },
    {
      id: "lpm-2013",
      docTitle: "Loi n°2013-1168 du 18 décembre 2013 (LPM 2014-2019)",
      ref: "article 22 : volet cyber, insère les art. L.1332-6-1 à L.1332-6-6 du code de la défense (L.1332-6-1 modifié par la loi n°2015-917 du 28/07/2015)",
      date: "2013-12-18",
      issuer: "Légifrance / JO",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000028338825",
    },
    {
      id: "decret-2006",
      docTitle: "Décret n°2006-212 du 23 février 2006",
      ref: "relatif à la sécurité des activités d'importance vitale (base du dispositif SAIV)",
      date: "2006-02-23",
      issuer: "Légifrance / JO",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000634536",
    },
    {
      id: "sgdsn-saiv",
      docTitle: "SGDSN, page « Protéger les activités d'importance vitale »",
      date: "2026",
      issuer: "SGDSN",
      url: "https://www.sgdsn.gouv.fr/nos-missions/proteger/proteger-les-activites-indispensables-lexercice-de-lautorite-de-letat-et-au",
    },
    {
      id: "sgdsn-plaquette",
      docTitle: "SGDSN, plaquette du dispositif SAIV",
      issuer: "SGDSN",
      url: "https://www.sgdsn.gouv.fr/files/files/Nos_missions/plaquette-saiv.pdf",
    },
    {
      id: "cyber-saiv",
      docTitle: "ANSSI, dispositif SAIV (cyber.gouv.fr)",
      issuer: "ANSSI",
      url: "https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/dispositif-saiv/",
    },
    {
      id: "cyber-siiv-faq",
      docTitle: "ANSSI, FAQ systèmes d'information d'importance vitale (SIIV)",
      issuer: "ANSSI",
      url: "https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/dispositif-saiv/faq-systemes-dinformation-dimportance-vitale/",
    },
    {
      id: "pdis",
      docTitle: "Référentiel PDIS (Prestataires de détection des incidents de sécurité)",
      ref: "décret n°2015-350 du 27 mars 2015, art. 10",
      date: "2015-03-27",
      issuer: "ANSSI",
      url: "https://cyber.gouv.fr/offre-de-service/solutions-certifiees-et-qualifiees/services-de-securite-evalue/solutions-en-cours-de-qualification/pdis/",
    },
    {
      id: "arrete-2016",
      docTitle: "Arrêté du 28 novembre 2016, secteur « Finances »",
      ref: "fixant les règles de sécurité et les modalités de déclaration des SIIV et des incidents de sécurité (annexe : 20 règles SIIV). Chaque secteur a son propre arrêté, avec la même annexe de 20 règles.",
      date: "2016-11-28",
      issuer: "Premier ministre / ANSSI (JO)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033518925",
    },
    {
      id: "cyber-nis2",
      docTitle: "ANSSI, directive NIS 2 (cyber.gouv.fr)",
      issuer: "ANSSI",
      url: "https://cyber.gouv.fr/reglementation/cybersecurite-systemes-dinformation/directives-nis-nis2-et-dispositif-saiv/directive-nis-2/",
    },
  ],

  themes: [
    { id: "base", title: "Base légale & dispositif SAIV", summary: "Le dispositif SAIV, le code de la défense et l'apport cyber de la LPM." },
    { id: "perimetre", title: "Secteurs, OIV & PIV", summary: "12 secteurs en 4 dominantes, plus de 300 OIV, environ 1500 PIV." },
    { id: "oiv", title: "OIV : désignation & obligations", summary: "Désignation, délégué, plan de sécurité d'opérateur, plans particuliers de protection." },
    { id: "siiv", title: "Volet cyber de la LPM (L.1332-6-x)", summary: "Règles fixées par le Premier ministre, détection, incidents, contrôles, sanctions." },
    { id: "regles", title: "Règles de sécurité des SIIV", summary: "Définition des SIIV, arrêtés sectoriels, familles de règles, homologation, contrôles." },
    { id: "regles20", title: "Les 20 règles SIIV (arrêté 2016)", summary: "Le détail des 20 règles de sécurité imposées aux SIIV par les arrêtés sectoriels." },
    { id: "cadre", title: "Cadre élargi (à vérifier)", summary: "Articulation avec NIS2 et avec la DR/II 901 : points non encore établis, à confirmer." },
  ],

  cards: [
    // base
    {
      id: "lpm-saiv-dispositif",
      detailParaphrase: true,
      refId: "lpm",
      themeId: "base",
      title: "Le dispositif SAIV : un cadre interministériel créé en 2006",
      short:
        "La sécurité des activités d'importance vitale (SAIV) est un dispositif interministériel créé en 2006 (décret du 23 février 2006), piloté par le SGDSN, qui associe les opérateurs critiques à la sécurité nationale.",
      elementDeLangage:
        "« Le SAIV n'est pas né avec la LPM : c'est un dispositif de 2006, piloté par le SGDSN, que la LPM de 2013 a complété d'un volet cyber. »",
      detail:
        "Le dispositif SAIV a été créé en 2006 (décret n°2006-212 du 23 février 2006), sur les bases de l'ancien dispositif de protection des points et réseaux sensibles. Interministériel, piloté par le SGDSN, il associe des opérateurs publics ou privés à la stratégie de sécurité nationale, face à la malveillance (terrorisme, sabotage, cyberattaque) comme aux risques naturels, technologiques et sanitaires.",
      exigence: { level: "obligatoire", note: "décret n°2006-212 du 23/02/2006" },
      sources: ["decret-2006", "sgdsn-saiv"],
      tags: ["définition", "cadre"],
    },
    {
      id: "lpm-code-defense",
      refId: "lpm",
      themeId: "base",
      title: "La base légale : le code de la défense (L. et R. 1332)",
      short:
        "Le dispositif repose sur les articles L.1332-1 et suivants (partie législative) et R.1332-1 à R.1332-42 (partie réglementaire) du code de la défense.",
      detail:
        "Article L.1332-1 du code de la défense : « Les opérateurs publics ou privés exploitant des établissements ou utilisant des installations et ouvrages, dont l'indisponibilité risquerait de diminuer d'une façon importante le potentiel de guerre ou économique, la sécurité ou la capacité de survie de la nation, sont tenus de coopérer à leurs frais dans les conditions définies au présent chapitre, à la protection desdits établissements, installations et ouvrages contre toute menace, notamment à caractère terroriste. » La partie réglementaire (R.1332-1 à R.1332-42) en précise la mise en œuvre.",
      exigence: { level: "obligatoire", note: "code de la défense, L.1332-1 et s." },
      sources: ["code-defense", "sgdsn-saiv"],
      tags: ["base légale"],
    },
    {
      id: "lpm-art22-volet-cyber",
      refId: "lpm",
      themeId: "base",
      title: "L'apport de la LPM : l'article 22 crée le volet cyber",
      short:
        "L'article 22 de la LPM (loi n°2013-1168 du 18 décembre 2013) a inséré dans le code de la défense les articles L.1332-6-1 à L.1332-6-6 (sécurité des SI) et renforcé les sanctions (L.1332-7).",
      elementDeLangage:
        "« C'est l'article 22 de la LPM de 2013 qui a donné une base légale aux obligations cyber des OIV, codifiées aux articles L.1332-6-1 et suivants du code de la défense. »",
      detail:
        "L'article 22 de la LPM 2013 a créé une nouvelle section « Dispositions spécifiques à la sécurité des systèmes d'information » (art. L.1332-6-1 à L.1332-6-6) et modifié l'article L.1332-7 (dispositions pénales). L'article L.1332-6-1 a ensuite été modifié par la loi n°2015-917 du 28 juillet 2015. Ce socle reste en vigueur en 2026.",
      exigence: { level: "obligatoire", note: "LPM 2013, art. 22" },
      sources: ["lpm-2013", "code-defense"],
      tags: ["base légale", "cyber"],
    },

    // perimetre
    {
      id: "lpm-12-secteurs",
      refId: "lpm",
      themeId: "perimetre",
      title: "12 secteurs d'activités d'importance vitale, en 4 dominantes",
      short:
        "Le dispositif compte 12 secteurs d'activités d'importance vitale, répartis en 4 dominantes (humaine, régalienne, économique, technologique), chacun supervisé par un ministre coordonnateur.",
      detail:
        "Article R.1332-2 du code de la défense : « Un secteur d'activités d'importance vitale [...] est constitué d'activités concourant à un même objectif, qui : 1° Ont trait à la production et la distribution de biens ou de services indispensables : a) A la satisfaction des besoins essentiels pour la vie des populations ; b) Ou à l'exercice de l'autorité de l'Etat ; c) Ou au fonctionnement de l'économie ; d) Ou au maintien du potentiel de défense ; e) Ou à la sécurité de la Nation, dès lors que ces activités sont difficilement substituables ou remplaçables ; 2° Ou peuvent présenter un danger grave pour la population. » La liste des secteurs (12, regroupés en 4 dominantes : humaine, régalienne, économique, technologique) est fixée par l'arrêté du Premier ministre du 2 juin 2006 modifié.",
      exigence: { level: "obligatoire", note: "R.1332-2 ; arrêté du 02/06/2006 modifié" },
      sources: ["code-defense-r", "sgdsn-plaquette"],
      tags: ["périmètre", "secteurs"],
    },
    {
      id: "lpm-oiv-definition",
      refId: "lpm",
      themeId: "perimetre",
      title: "Qu'est-ce qu'un opérateur d'importance vitale (OIV)",
      short:
        "Un OIV est un opérateur public ou privé exploitant des installations dont l'indisponibilité ou la destruction obérerait gravement le potentiel de guerre ou économique, la sécurité ou la survie de la Nation, ou la santé et la vie de la population.",
      detail:
        "Article R.1332-1 du code de la défense : « II. Un opérateur d'importance vitale : 1° Exerce des activités mentionnées à l'article R. 1332-2 et comprises dans un secteur d'activités d'importance vitale ; 2° Gère ou utilise au titre de cette activité un ou des établissements ou ouvrages, une ou des installations dont le dommage ou l'indisponibilité ou la destruction par suite d'un acte de malveillance, de sabotage ou de terrorisme risquerait, directement ou indirectement : a) D'obérer gravement le potentiel de guerre ou économique, la sécurité ou la capacité de survie de la Nation ; b) Ou de mettre gravement en cause la santé ou la vie de la population. »",
      exigence: { level: "obligatoire", note: "code de la défense, R.1332-1" },
      sources: ["code-defense-r", "sgdsn-saiv"],
      tags: ["définition", "OIV"],
    },
    {
      id: "lpm-oiv-piv-chiffres",
      refId: "lpm",
      themeId: "perimetre",
      title: "Plus de 300 OIV, environ 1500 points d'importance vitale",
      short:
        "Le dispositif désigne plus de 300 OIV répartis dans les 12 secteurs, exerçant sur près de 1500 points d'importance vitale (PIV). L'identité des OIV et des PIV est protégée (secret de la défense nationale).",
      detail:
        "Le SGDSN fait état de « plus de 300 opérateurs » et de « près de 1500 points d'importance vitale ». Les identités exactes sont classifiées, d'où des chiffres agrégés et arrondis. Un PIV est un point névralgique au sein de l'OIV, faisant l'objet d'un plan particulier de protection.",
      exigence: { level: "conseille", note: "ordres de grandeur SGDSN ; identités classifiées" },
      sources: ["sgdsn-saiv", "sgdsn-plaquette"],
      tags: ["périmètre", "chiffres"],
    },

    // oiv
    {
      id: "lpm-designation-oiv",
      refId: "lpm",
      themeId: "oiv",
      title: "Comment un OIV est désigné",
      short:
        "L'OIV est désigné par arrêté du ministre coordonnateur du secteur, après concertation et avis d'une commission ; l'opérateur pressenti est notifié et dispose de deux mois pour présenter ses observations. La désignation est confidentielle.",
      detail:
        "Article R.1332-3 du code de la défense : « Les opérateurs d'importance vitale sont désignés pour chaque secteur d'activités d'importance vitale par arrêté du ministre coordonnateur. Cet arrêté est pris en concertation avec le ou les ministres intéressés, après avis de la commission mentionnée à l'article R. 1332-10. [...] Le ministre coordonnateur ou le préfet de département, selon le cas, notifie à l'opérateur son intention de le désigner comme opérateur d'importance vitale. L'opérateur dispose, pour présenter ses observations, d'un délai de deux mois à compter de la notification. Les arrêtés mentionnés au présent article ne sont pas publiés. [...] ils ne sont pas communicables. »",
      exigence: { level: "obligatoire", note: "code de la défense, R.1332-3" },
      sources: ["code-defense-r", "sgdsn-plaquette"],
      tags: ["OIV", "désignation"],
    },
    {
      id: "lpm-pso-ppp",
      refId: "lpm",
      themeId: "oiv",
      title: "Obligations générales de l'OIV : délégué, PSO et PPP",
      short:
        "Une fois désigné, l'OIV nomme un délégué pour la défense et la sécurité, rédige un plan de sécurité d'opérateur (PSO), et un plan particulier de protection (PPP) pour chaque point d'importance vitale, approuvé par le préfet.",
      detail:
        "Article R.1332-25 du code de la défense : « Les opérateurs d'importance vitale transmettent pour approbation le projet de plan particulier de protection au préfet du département dans le ressort duquel se trouve le point d'importance vitale. [...] Le préfet de département ou l'autorité désignée par le ministre de la défense statue dans un délai de six mois à compter de la date de réception du plan. » Le PSO (plan de sécurité d'opérateur) décrit l'organisation et la politique de sécurité de l'opérateur ; chaque PPP couvre un point d'importance vitale (PIV). Le volet cyber est porté à part par les articles L.1332-6-x.",
      exigence: { level: "obligatoire", note: "code de la défense, R.1332-25" },
      sources: ["code-defense-r", "sgdsn-plaquette"],
      tags: ["OIV", "plans"],
    },

    // siiv (volet cyber LPM)
    {
      id: "lpm-l13326-1-regles",
      refId: "lpm",
      themeId: "siiv",
      title: "L.1332-6-1 : le Premier ministre fixe les règles, appliquées aux frais de l'OIV",
      short:
        "Le Premier ministre fixe les règles de sécurité nécessaires à la protection des systèmes d'information des OIV ; les opérateurs sont tenus de les appliquer à leurs frais.",
      elementDeLangage:
        "« Le pivot du volet cyber, c'est l'article L.1332-6-1 : le Premier ministre fixe les règles, l'OIV les applique, et à ses frais. »",
      detail:
        "Article L.1332-6-1 du code de la défense (issu de la LPM 2013) : « Le Premier ministre fixe les règles de sécurité nécessaires à la protection des systèmes d'information » des OIV, et « ces opérateurs sont tenus d'appliquer ces règles à leurs frais ». La mise en œuvre opérationnelle est déléguée à l'ANSSI.",
      exigence: { level: "obligatoire", note: "code de la défense, L.1332-6-1" },
      sources: ["lpm-2013", "code-defense"],
      tags: ["cyber", "obligations"],
    },
    {
      id: "lpm-detection-territoire",
      refId: "lpm",
      themeId: "siiv",
      title: "Détection : systèmes qualifiés, exploités sur le territoire national",
      short:
        "Les règles peuvent imposer des systèmes qualifiés de détection des événements de sécurité, exploités sur le territoire national par des prestataires qualifiés (PDIS), par l'ANSSI, ou par d'autres services de l'État désignés par le Premier ministre.",
      elementDeLangage:
        "« La détection des incidents sur un SIIV passe par des systèmes qualifiés exploités sur le territoire national : c'est l'exigence de souveraineté de la LPM. »",
      detail:
        "L'article L.1332-6-1 prévoit que les règles peuvent prescrire « la mise en œuvre de systèmes qualifiés de détection [...] exploités sur le territoire national par des prestataires de service qualifiés [PDIS], par l'autorité nationale de sécurité des systèmes d'information [ANSSI] ou par d'autres services de l'État désignés par le Premier ministre ». En pratique, ce sont des prestataires qualifiés (PDIS) qui opèrent la détection, et non l'ANSSI elle-même.",
      exigence: { level: "obligatoire", note: "L.1332-6-1 ; exploitation sur le territoire national" },
      sources: ["lpm-2013", "code-defense"],
      tags: ["cyber", "détection", "PDIS"],
    },
    {
      id: "lpm-l13326-2-incidents",
      refId: "lpm",
      themeId: "siiv",
      title: "L.1332-6-2 : déclaration des incidents sans délai",
      short:
        "Les OIV informent sans délai le Premier ministre (en pratique l'ANSSI) des incidents affectant le fonctionnement ou la sécurité de leurs systèmes d'information.",
      detail:
        "Article L.1332-6-2 : « Les opérateurs [...] informent sans délai le Premier ministre des incidents affectant le fonctionnement ou la sécurité des systèmes d'information. » La déclaration légale est faite au Premier ministre ; opérationnellement, elle est adressée à l'ANSSI (formulaire sécurisé).",
      exigence: { level: "obligatoire", note: "code de la défense, L.1332-6-2" },
      sources: ["lpm-2013", "cyber-siiv-faq"],
      tags: ["cyber", "incident"],
    },
    {
      id: "lpm-l13326-3-controles",
      refId: "lpm",
      themeId: "siiv",
      title: "L.1332-6-3 : contrôles, aux frais de l'opérateur",
      short:
        "À la demande du Premier ministre, l'OIV soumet ses systèmes d'information à des contrôles destinés à vérifier le niveau de sécurité et le respect des règles ; le coût est à la charge de l'opérateur.",
      detail:
        "Article L.1332-6-3 du code de la défense : « À la demande du Premier ministre, les opérateurs mentionnés aux articles L. 1332-1 et L. 1332-2 soumettent leurs systèmes d'information à des contrôles destinés à vérifier le niveau de sécurité et le respect des règles de sécurité prévues à l'article L. 1332-6-1. Les contrôles sont effectués par l'autorité nationale de sécurité des systèmes d'information ou par des services de l'Etat désignés par le Premier ministre ou par des prestataires de service qualifiés par ce dernier. Le coût des contrôles est à la charge de l'opérateur. »",
      exigence: { level: "obligatoire", note: "code de la défense, L.1332-6-3" },
      sources: ["lpm-2013", "cyber-siiv-faq"],
      tags: ["cyber", "contrôle"],
    },
    {
      id: "lpm-l13327-sanctions",
      refId: "lpm",
      themeId: "siiv",
      title: "L.1332-7 : sanctions pénales",
      short:
        "Le non-respect des obligations cyber (art. L.1332-6-1 à L.1332-6-4) est sanctionné pénalement, par une amende de 150 000 euros.",
      detail:
        "Article L.1332-7 du code de la défense (alinéa relatif au volet cyber) : « Est puni d'une amende de 150 000 € le fait, pour les mêmes personnes [les dirigeants des opérateurs], de ne pas satisfaire aux obligations prévues aux articles L. 1332-6-1 à L. 1332-6-4. Hormis le cas d'un manquement à l'article L. 1332-6-2, cette sanction est précédée d'une mise en demeure. » Les personnes morales encourent une amende selon l'article 131-38 du code pénal (quintuple, soit 750 000 €).",
      exigence: { level: "obligatoire", note: "code de la défense, L.1332-7" },
      sources: ["lpm-2013", "code-defense"],
      tags: ["cyber", "sanction"],
    },

    // regles SIIV
    {
      id: "lpm-siiv-definition",
      detailParaphrase: true,
      refId: "lpm",
      themeId: "regles",
      title: "Qu'est-ce qu'un SIIV, et qui l'identifie",
      short:
        "Un système d'information d'importance vitale (SIIV) est un SI dont une atteinte à la sécurité ou au fonctionnement pourrait impacter significativement les activités vitales de l'OIV. C'est l'OIV qui identifie ses SIIV.",
      elementDeLangage:
        "« Ce n'est pas l'État qui liste les SIIV : c'est l'OIV qui, par analyse d'impact, identifie lui-même ses systèmes d'information d'importance vitale. »",
      detail:
        "Selon l'ANSSI (FAQ SIIV), un SIIV est un SI dont l'atteinte impacterait significativement les activités vitales de l'opérateur. L'OIV analyse les impacts potentiels pour déterminer quels systèmes constituent des SIIV. Les règles de sécurité ne s'appliquent qu'à ce périmètre identifié.",
      exigence: { level: "obligatoire", note: "ANSSI, FAQ SIIV" },
      sources: ["cyber-siiv-faq", "cyber-saiv"],
      tags: ["définition", "SIIV"],
    },
    {
      id: "lpm-arretes-sectoriels",
      detailParaphrase: true,
      refId: "lpm",
      themeId: "regles",
      title: "Des règles fixées par arrêtés sectoriels",
      short:
        "Les règles de sécurité applicables aux SIIV sont fixées par des arrêtés sectoriels, publiés progressivement de juillet 2016 (santé, eau, alimentation) à octobre 2017 (espace, armement).",
      detail:
        "Plutôt qu'un texte unique, le volet cyber de la LPM est décliné par des arrêtés sectoriels (un jeu de règles par secteur), publiés progressivement entre juillet 2016 et octobre 2017. Les exigences sont globalement homogènes d'un secteur à l'autre, avec des adaptations.",
      exigence: { level: "obligatoire", note: "arrêtés sectoriels (2016-2017)" },
      sources: ["cyber-siiv-faq", "cyber-saiv"],
      tags: ["SIIV", "arrêtés"],
    },
    {
      id: "lpm-familles-regles",
      detailParaphrase: true,
      refId: "lpm",
      themeId: "regles",
      title: "Les grandes familles de règles de sécurité des SIIV",
      short:
        "Gouvernance (PSSI), homologation, cartographie, maintien en condition de sécurité, journalisation, détection (PDIS), traitement des incidents, identification et authentification, gestion des accès.",
      detail:
        "D'après l'ANSSI (FAQ SIIV et page règles de sécurité), les exigences couvrent notamment : la **gouvernance** (politique de sécurité, PSSI), l'**homologation** des SIIV, la **cartographie**, le **maintien en condition de sécurité**, la **journalisation** et l'analyse des journaux, la **détection** (via PDIS), le **traitement des incidents** (avec un SI dédié), l'**identification/authentification** et la **gestion des accès**.\n\nÀ noter (honnêteté de sourcing) : le nombre exact de règles et leur liste détaillée n'ont pas pu être confirmés par une source unique vérifiée ; ces familles reflètent ce qui est explicitement cité par l'ANSSI.",
      exigence: { level: "obligatoire", note: "ANSSI ; liste exhaustive à confirmer par les arrêtés" },
      sources: ["cyber-siiv-faq", "cyber-saiv"],
      tags: ["SIIV", "règles"],
    },
    {
      id: "lpm-homologation-siiv",
      detailParaphrase: true,
      refId: "lpm",
      themeId: "regles",
      title: "Homologation : l'OIV prononce l'homologation de ses SIIV",
      short:
        "C'est l'OIV qui prononce formellement l'homologation de ses SIIV. Les contrôles de conformité sont réalisés par des prestataires d'audit qualifiés (PASSI), indépendants des auditeurs ayant réalisé l'homologation.",
      detail:
        "L'ANSSI (FAQ SIIV) indique que l'OIV prononce formellement l'homologation de ses SIIV (acceptation des risques). Les contrôles de conformité ultérieurs sont menés via des prestataires d'audit qualifiés PASSI, indépendants et distincts des auditeurs ayant contribué à l'homologation, garantissant l'objectivité du contrôle.",
      exigence: { level: "obligatoire", note: "ANSSI, FAQ SIIV ; contrôles PASSI indépendants" },
      sources: ["cyber-siiv-faq"],
      tags: ["SIIV", "homologation", "contrôle"],
    },
    {
      id: "lpm-detection-pdis-correlation",
      refId: "lpm",
      themeId: "regles",
      title: "Détection : corrélation et analyse des journaux selon le référentiel PDIS",
      short:
        "La règle 6 de l'arrêté impose un système de corrélation et d'analyse de journaux, installé et exploité en s'appuyant sur le référentiel d'exigences applicable aux prestataires de détection des incidents de sécurité (PDIS).",
      detail:
        "Arrêté du 28 novembre 2016, annexe, règle 6 : « L'opérateur ou le prestataire mandaté à cet effet installe et exploite ce système [...] en s'appuyant sur les exigences du référentiel en matière de détection des incidents de sécurité prévu à l'article 10 du décret n° 2015-350 du 27 mars 2015 ». Ce référentiel est celui des prestataires de détection des incidents de sécurité (PDIS).",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle 6 ; référentiel PDIS (décret 2015-350, art. 10)" },
      sources: ["arrete-2016", "pdis"],
      tags: ["SIIV", "détection", "PDIS"],
    },

    // regles20 : le detail des 20 regles de securite SIIV (arrete du 28/11/2016,
    // structure commune aux arretes sectoriels). Toutes obligatoires pour un SIIV.
    {
      id: "lpm-r01-pssi",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 1 : politique de sécurité des SI (PSSI)",
      short:
        "L'opérateur définit, fait approuver et applique une politique de sécurité des systèmes d'information couvrant ses SIIV.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 1 : « L'opérateur d'importance vitale élabore, tient à jour et met en œuvre une politique de sécurité des systèmes d'information (PSSI). »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « politique de sécurité »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "gouvernance"],
    },
    {
      id: "lpm-r02-homologation",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 2 : homologation de sécurité",
      short:
        "Chaque SIIV fait l'objet d'une homologation de sécurité prononcée par l'opérateur (acceptation formelle des risques).",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 2 : « L'opérateur d'importance vitale procède à l'homologation de sécurité de chaque système d'information d'importance vitale (SIIV), en mettant en œuvre la procédure d'homologation prévue par sa politique de sécurité des systèmes d'information (PSSI). »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « homologation »" },
      sources: ["arrete-2016", "cyber-siiv-faq"],
      tags: ["règles SIIV", "homologation"],
    },
    {
      id: "lpm-r03-cartographie",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 3 : cartographie",
      short:
        "L'opérateur établit et tient à jour une cartographie de ses SIIV (architectures applicative, système et réseau).",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 3 : « L'opérateur d'importance vitale doit être en mesure de fournir à l'Agence nationale de la sécurité des systèmes d'information, pour chaque système d'information d'importance vitale (SIIV), les éléments de cartographie suivants : » (la liste des éléments de cartographie est détaillée dans l'annexe de l'arrêté).",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « cartographie »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "cartographie"],
    },
    {
      id: "lpm-r04-mcs",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 4 : maintien en condition de sécurité (MCS)",
      short:
        "L'opérateur maintient ses SIIV en condition de sécurité : suivi des vulnérabilités, application des correctifs, gestion des versions.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 4 : « L'opérateur d'importance vitale élabore, tient à jour et met en œuvre une procédure de maintien en conditions de sécurité des ressources matérielles et logicielles de ses systèmes d'information d'importance vitale (SIIV), conformément à sa politique de sécurité des systèmes d'information. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « MCS »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "MCS"],
    },
    {
      id: "lpm-r05-journalisation",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 5 : journalisation",
      short:
        "L'opérateur journalise les événements critiques de ses SIIV.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 5 : « L'opérateur d'importance vitale met en œuvre sur chaque système d'information d'importance vitale (SIIV) un système de journalisation qui enregistre les événements relatifs à l'authentification des utilisateurs, à la gestion des comptes et des droits d'accès, à l'accès aux ressources, aux modifications des règles de sécurité du SIIV ainsi qu'au fonctionnement du SIIV. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « journalisation »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "journalisation"],
    },
    {
      id: "lpm-r06-correlation",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 6 : corrélation et analyse des journaux",
      short:
        "L'opérateur met en œuvre un système de corrélation et d'analyse des journaux, exploité selon les exigences du référentiel PDIS.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 6 : « L'opérateur d'importance vitale met en œuvre un système de corrélation et d'analyse de journaux qui exploite les événements enregistrés par le système de journalisation installé sur chacun des systèmes d'information d'importance vitale (SIIV), afin de détecter des événements susceptibles d'affecter la sécurité des SIIV. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « corrélation et analyse » ; PDIS" },
      sources: ["arrete-2016", "pdis"],
      tags: ["règles SIIV", "détection", "PDIS"],
    },
    {
      id: "lpm-r07-detection",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 7 : détection",
      short:
        "L'opérateur met en œuvre des dispositifs de détection (sondes d'analyse de fichiers et de protocoles) sur ses SIIV.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 7 : « L'opérateur d'importance vitale met en œuvre, en application de l'article R. 1332-41-3 du code de la défense, un système de détection qualifié de type « sonde d'analyse de fichiers et de protocoles ». »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « détection »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "détection"],
    },
    {
      id: "lpm-r08-incidents",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 8 : traitement des incidents de sécurité",
      short:
        "L'opérateur dispose d'une organisation et de moyens pour traiter les incidents de sécurité affectant ses SIIV.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 8 : « L'opérateur d'importance vitale élabore, tient à jour et met en œuvre une procédure de traitement des incidents affectant le fonctionnement ou la sécurité de ses systèmes d'information d'importance vitale (SIIV), conformément à sa politique de sécurité des systèmes d'information. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « traitement des incidents »" },
      sources: ["arrete-2016", "cyber-siiv-faq"],
      tags: ["règles SIIV", "incident"],
    },
    {
      id: "lpm-r09-alertes",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 9 : traitement des alertes",
      short:
        "L'opérateur met en place le traitement des alertes de sécurité, notamment celles émises par l'ANSSI.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 9 : « L'opérateur d'importance vitale met en place un service de permanence lui permettant de prendre connaissance, à tout moment et sans délai, d'informations transmises par l'Agence nationale de la sécurité des systèmes d'information relatives à des incidents, des vulnérabilités et des menaces. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « traitement des alertes »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "alertes"],
    },
    {
      id: "lpm-r10-crise",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 10 : gestion de crise",
      short:
        "L'opérateur définit une organisation de gestion de crise informatique pour ses SIIV.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 10 : « L'opérateur d'importance vitale élabore, tient à jour et met en œuvre une procédure de gestion de crises en cas d'attaques informatiques majeures, conformément à sa politique de sécurité des systèmes d'information. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « gestion de crise »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "crise"],
    },
    {
      id: "lpm-r11-identification",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 11 : identification",
      short:
        "Les utilisateurs et les ressources des SIIV sont identifiés par des comptes individuels.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 11 : « L'opérateur d'importance vitale crée des comptes individuels pour les utilisateurs et pour les processus automatiques accédant aux ressources de ses systèmes d'information d'importance vitale (SIIV). »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « identification »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "accès"],
    },
    {
      id: "lpm-r12-authentification",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 12 : authentification",
      short:
        "L'accès aux SIIV repose sur une authentification fondée sur des secrets, suffisamment robuste.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 12 : « L'opérateur d'importance vitale protège les accès aux ressources de ses systèmes d'information d'importance vitale (SIIV), que ce soit par un utilisateur ou par un processus automatique, au moyen d'un mécanisme d'authentification basé sur un élément secret. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « authentification »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "authentification"],
    },
    {
      id: "lpm-r13-droits-acces",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 13 : droits d'accès",
      short:
        "Les droits d'accès sont attribués selon le principe du moindre privilège et revus régulièrement.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 13 : « L'opérateur d'importance vitale définit, conformément à sa politique de sécurité des systèmes d'information, les règles de gestion et d'attribution des droits d'accès aux ressources de ses systèmes d'information d'importance vitale (SIIV), et respecte les règles suivantes : » (les sous-règles sont détaillées dans l'annexe de l'arrêté).",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « droits d'accès »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "accès"],
    },
    {
      id: "lpm-r14-comptes-admin",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 14 : comptes d'administration",
      short:
        "Les comptes d'administration des SIIV sont encadrés : usage dédié, traçabilité, protection renforcée.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 14 : « L'opérateur d'importance vitale crée des comptes (appelés « comptes d'administration ») destinés aux seules personnes (appelées administrateurs) chargées d'effectuer les opérations d'administration (installation, configuration, gestion, maintenance, supervision, etc.) des ressources de ses systèmes d'information d'importance vitale (SIIV). »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « comptes d'administration »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "administration"],
    },
    {
      id: "lpm-r15-si-admin",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 15 : systèmes d'information d'administration",
      short:
        "L'administration des SIIV s'effectue depuis un SI d'administration dédié et protégé.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 15 : « L'opérateur d'importance vitale applique les règles suivantes aux systèmes d'information utilisés pour effectuer l'administration de ses systèmes d'information d'importance vitale (SIIV), qui sont appelés « systèmes d'information d'administration » : » (les sous-règles sont détaillées dans l'annexe de l'arrêté).",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « SI d'administration »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "administration"],
    },
    {
      id: "lpm-r16-cloisonnement",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 16 : cloisonnement",
      short:
        "Le SIIV est cloisonné (physiquement ou logiquement) pour limiter la propagation d'une attaque.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 16 : « L'opérateur d'importance vitale procède au cloisonnement de ses systèmes d'information d'importance vitale (SIIV) afin de limiter la propagation des attaques informatiques au sein de ses systèmes ou ses sous-systèmes. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « cloisonnement »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "cloisonnement"],
    },
    {
      id: "lpm-r17-filtrage",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 17 : filtrage",
      short:
        "Les flux de données entrants et sortants du SIIV sont filtrés.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 17 : « L'opérateur d'importance vitale met en place des mécanismes de filtrage des flux de données circulant dans ses systèmes d'information d'importance vitale (SIIV) afin de bloquer la circulation des flux inutiles au fonctionnement de ses systèmes et susceptibles de faciliter des attaques informatiques. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « filtrage »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "filtrage"],
    },
    {
      id: "lpm-r18-acces-distant",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 18 : accès à distance",
      short:
        "Les accès à distance aux SIIV sont sécurisés (chiffrement, authentification forte, postes maîtrisés).",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 18 : « L'opérateur d'importance vitale protège les accès à ses systèmes d'information d'importance vitale (SIIV) effectués à travers des réseaux tiers. »",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « accès à distance »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "accès distant"],
    },
    {
      id: "lpm-r19-installation",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 19 : installation de services et d'équipements",
      short:
        "L'installation de services et d'équipements sur le SIIV est encadrée (configuration maîtrisée, durcissement).",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 19 : « L'opérateur d'importance vitale respecte les règles suivantes lorsqu'il installe des services et des équipements sur ses systèmes d'information d'importance vitale (SIIV) : » (les sous-règles sont détaillées dans l'annexe de l'arrêté).",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « installation de services et équipements »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "durcissement"],
    },
    {
      id: "lpm-r20-indicateurs",
      refId: "lpm",
      themeId: "regles20",
      title: "Règle 20 : indicateurs",
      short:
        "L'opérateur produit des indicateurs permettant de mesurer le niveau de sécurité de ses SIIV.",
      detail:
        "Arrêté du 28/11/2016, annexe, règle 20 : « L'opérateur d'importance vitale évalue, pour chaque système d'information d'importance vitale (SIIV), les indicateurs suivants : » (la liste des indicateurs est détaillée dans l'annexe de l'arrêté).",
      exigence: { level: "obligatoire", note: "arrêté du 28/11/2016, règle « indicateurs »" },
      sources: ["arrete-2016"],
      tags: ["règles SIIV", "indicateurs"],
    },

    // cadre (à vérifier)
    {
      id: "lpm-nis2-articulation",
      detailParaphrase: true,
      refId: "lpm",
      themeId: "cadre",
      title: "Articulation avec NIS2 : à vérifier",
      short:
        "NIS2 (directive UE 2022/2555) et sa transposition française introduisent les entités essentielles (EE) et importantes (EI), remplaçant les OSE. L'articulation précise avec OIV/SIIV et le calendrier exact ne sont pas établis ici : à confirmer sur une source officielle.",
      detail:
        "Le régime SAIV/LPM (OIV/SIIV) reste en vigueur en 2026 et n'est pas abrogé par NIS2. En revanche, la transposition française de NIS2 (projet/loi de résilience des infrastructures critiques et de cybersécurité, 2024-2025) crée les catégories d'entités essentielles et importantes en remplacement des OSE.\n\n**À vérifier (non établi par une source vérifiée dans nos recherches)** : le statut et le calendrier exacts de la transposition à la date considérée, et la manière dont OIV/SIIV s'articulent avec EE/EI (superposition, cumul d'obligations, bascule). Vérifier sur cyber.gouv.fr et Légifrance avant tout usage en révision.",
      exigence: { level: "conseille", note: "à vérifier ; statut NIS2 non établi ici" },
      sources: ["cyber-nis2"],
      tags: ["cadre", "NIS2", "à vérifier"],
    },
    {
      id: "lpm-dr-articulation",
      detailParaphrase: true,
      refId: "lpm",
      themeId: "cadre",
      title: "Articulation avec la Diffusion Restreinte / II 901 : à approfondir",
      short:
        "Un SIIV peut traiter des informations sensibles, voire DR. L'articulation précise entre les obligations SIIV (LPM) et la protection DR (II 901) n'est pas établie ici et reste à approfondir.",
      detail:
        "Les recommandations cloud de l'ANSSI (juillet 2024) visent d'ailleurs ensemble les SI de niveau DR, les SI sensibles d'OIV/OSE et les SIIV, ce qui montre que les périmètres se croisent.\n\n**À approfondir (non établi par une source vérifiée ici)** : le cumul exact des obligations lorsqu'un SIIV traite du DR (homologation au titre de l'II 901, cloisonnement, mesures complémentaires). À documenter à partir des textes avant usage.",
      exigence: { level: "conseille", note: "à approfondir ; non établi ici" },
      sources: ["cyber-saiv"],
      tags: ["cadre", "DR", "à vérifier"],
    },
    {
      id: "lpm-restructuration-cer",
      detailParaphrase: true,
      refId: "lpm",
      themeId: "cadre",
      title: "Possible restructuration (loi résilience / CER) : à surveiller",
      short:
        "La transposition de la directive CER et de NIS2 (loi de résilience des infrastructures critiques, 2024-2025) pourrait faire évoluer les secteurs et le périmètre OIV. À vérifier avant de considérer le dispositif comme figé.",
      detail:
        "Une loi de résilience des infrastructures critiques et de renforcement de la cybersécurité (transposition des directives CER et NIS2) a été engagée en 2024-2025. Elle pourrait restructurer les 12 secteurs et le périmètre OIV.\n\n**À vérifier** : l'état d'avancement, les décrets d'application et l'impact concret sur le dispositif SAIV. Tant que ce n'est pas confirmé, le socle décrit ici (état 2013-2015 en vigueur en 2026) fait référence.",
      exigence: { level: "conseille", note: "à surveiller ; évolution réglementaire en cours" },
      sources: ["cyber-nis2", "cyber-saiv"],
      tags: ["cadre", "à vérifier"],
    },
  ],

  qcm: lpmQcm,

  reading: [
    {
      id: "lpm-synthese",
      refId: "lpm",
      title: "LPM / SAIV : synthèse de lecture",
      intro:
        "Synthèse paraphrasée à partir de sources publiques officielles (code de la défense, SGDSN, ANSSI). Elle ne se substitue pas aux textes. Les points non établis par une source vérifiée sont signalés « à vérifier ».",
      sections: [
        {
          id: "socle",
          heading: "Le socle : SAIV (2006) et volet cyber (LPM 2013)",
          body: "Le dispositif SAIV (décret du 23/02/2006, code de la défense, art. L. et R. 1332) associe plus de 300 OIV à la sécurité nationale, sur 12 secteurs en 4 dominantes. L'article 22 de la LPM (loi du 18/12/2013) y a ajouté un volet cyber, codifié aux articles L.1332-6-1 à L.1332-6-6, avec des sanctions pénales (L.1332-7).",
          paraphrase: true,
          sources: ["decret-2006", "lpm-2013", "code-defense"],
        },
        {
          id: "obligations-cyber",
          heading: "Les obligations cyber (L.1332-6-x)",
          body: "Le Premier ministre fixe les règles de sécurité, que l'OIV applique à ses frais (L.1332-6-1). La détection passe par des systèmes qualifiés exploités sur le territoire national (PDIS). Les incidents sont déclarés sans délai (L.1332-6-2), et les SI sont soumis à des contrôles aux frais de l'opérateur (L.1332-6-3).",
          paraphrase: true,
          sources: ["lpm-2013", "cyber-siiv-faq"],
        },
        {
          id: "regles-siiv",
          heading: "Les règles de sécurité des SIIV",
          body: "Les SIIV sont identifiés par l'OIV. Les règles, fixées par arrêtés sectoriels (2016-2017), couvrent notamment gouvernance/PSSI, homologation (prononcée par l'OIV), cartographie, maintien en condition de sécurité, journalisation, détection (PDIS), traitement des incidents, identification/authentification et gestion des accès. Les contrôles sont réalisés par des prestataires PASSI indépendants.",
          paraphrase: true,
          sources: ["cyber-siiv-faq", "cyber-saiv"],
        },
        {
          id: "caveats",
          heading: "Limites et points à vérifier",
          body: "Cette synthèse est non officielle. À vérifier impérativement avant usage : le statut exact de la transposition NIS2 en France et l'articulation OIV/SIIV avec les entités essentielles/importantes ; l'articulation précise avec la DR/II 901 ; la liste exhaustive des règles des arrêtés sectoriels ; et l'impact éventuel de la loi de résilience des infrastructures critiques (2024-2025).",
          paraphrase: true,
          sources: ["cyber-nis2", "cyber-saiv"],
        },
      ],
    },
  ],
};
