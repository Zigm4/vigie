// Referentiel REC/CER (directive (UE) 2022/2557, resilience des entites critiques)
// et sa transposition francaise.
//
// Ce fichier assemble le referentiel : metadonnees, sources, themes et synthese de
// lecture y sont definis ; les cartes et QCM sont importes de modules dedies.
//
// Parti pris (coherent avec le reste du corpus) : on distingue clairement le SOCLE
// de la directive UE (texte stable, en vigueur au niveau europeen) du VOLET FRANCAIS
// (transposition par le Titre I du projet de loi "resilience", non aboutie au
// 2026-06-12, fiches datees et "a verifier"). Les fiches d'articles de la directive
// (art. 1, 2, 4-6, 12-15, 17-18, 21-22, 26-27) sont en citation verbatim d'apres le
// texte officiel EUR-Lex FR (version HTML) ; la fiche des secteurs de l'annexe est
// une liste fidele (l'annexe est un tableau, detailParaphrase).
// Etat verifie le 2026-06-12 (EUR-Lex, Senat, SGDSN).

import type { Referentiel } from "../types.ts";
import { cerCards } from "./cer.cards.ts";
import { cerQcm } from "./cer.qcm.ts";

export const cer: Referentiel = {
  id: "cer",
  title: "REC / CER (directive UE 2022/2557)",
  shortName: "REC / CER",
  description:
    "Directive (UE) 2022/2557 sur la résilience des entités critiques : le volet « physique » et tous risques du paquet européen du 14 décembre 2022 dont NIS2 est le volet cyber. Elle abroge la directive 2008/114/CE (infrastructures critiques européennes) et impose aux États de recenser des entités critiques, tenues à des mesures de résilience et à la notification de leurs incidents. Sa transposition française (Titre I de la loi « résilience ») est en cours et n'est pas aboutie à la date de revue.",
  status: "en_cours",
  lastReviewed: "2026-06-12",
  note:
    "**La directive CER n'est pas encore transposée en France au 12 juin 2026.** La directive (UE) 2022/2557 est en vigueur au niveau européen et devait être transposée au plus tard le 17 octobre 2024 (art. 26), mais une directive ne s'impose qu'une fois transposée : la loi française de transposition (Titre I du projet de loi « résilience des infrastructures critiques et renforcement de la cybersécurité ») n'est ni adoptée définitivement ni promulguée, et aucun décret n'est paru.\n\n- Le **socle de la directive (UE)** décrit ici est stable.\n- Les fiches du thème **« Transposition française »** sont datées et marquées « à vérifier » : l'évolution du dispositif SAIV (OIV/PIV), les seuils et le calendrier dépendent des textes à paraître.\n- Les articles de la directive (recensement, mesures de résilience, vérification des antécédents, notification, supervision, sanctions) sont cités **au mot près** d'après le texte officiel (EUR-Lex). La fiche des secteurs de l'annexe est une liste fidèle (tableau non citable en l'état), signalée comme telle.",

  sources: [
    {
      id: "cer-dir",
      docTitle: "Directive (UE) 2022/2557 (REC / CER)",
      ref: "du 14 décembre 2022 ; art. 1, 2, 4-6, 12-15, 17-18, 21-22, 26-27 ; annexe",
      version: "JO L 333 du 27/12/2022",
      date: "2022-12-14",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/dir/2022/2557/oj",
    },
    {
      id: "dir-2008-114",
      docTitle: "Directive 2008/114/CE (infrastructures critiques européennes)",
      ref: "abrogée par CER avec effet au 18 octobre 2024 (art. 27)",
      date: "2008-12-08",
      issuer: "Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/dir/2008/114/oj",
    },
    {
      id: "nis2",
      docTitle: "Directive (UE) 2022/2555 (NIS2)",
      ref: "volet cybersécurité du paquet du 14/12/2022 ; articulation : art. 1 §2 et art. 8 de CER",
      date: "2022-12-14",
      issuer: "Parlement européen et Conseil (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/dir/2022/2555/oj",
    },
    {
      id: "loi-resilience",
      docTitle: "Projet de loi relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité",
      ref: "Titre I : transposition de CER ; non promulgué au 12/06/2026",
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
      id: "sgdsn-saiv",
      docTitle: "SGDSN, dispositif de sécurité des activités d'importance vitale (SAIV)",
      ref: "dispositif national existant le plus proche de CER (OIV, PIV)",
      issuer: "SGDSN",
      url: "https://www.sgdsn.gouv.fr/nos-missions/proteger/proteger-les-activites-indispensables-lexercice-de-lautorite-de-letat-et-au",
    },
  ],

  themes: [
    { id: "socle", title: "Socle & cadre", summary: "Ce qu'est CER, ce qu'elle abroge (2008/114/CE), son articulation avec NIS2 et le calendrier de transposition." },
    { id: "entites", title: "Entités critiques & secteurs", summary: "Définitions (art. 2), recensement par les États (art. 6), les 11 secteurs de l'annexe, stratégie et évaluation des risques nationales (art. 4-5)." },
    { id: "obligations", title: "Obligations (directive)", summary: "Évaluation des risques par l'entité (art. 12), mesures de résilience (art. 13), vérification des antécédents (art. 14), notification des incidents (art. 15)." },
    { id: "controle-ue", title: "Contrôle & dimension UE", summary: "Entités critiques d'importance européenne particulière (art. 17-18), supervision et exécution (art. 21), sanctions (art. 22)." },
    { id: "france", title: "Transposition française (à vérifier)", summary: "Titre I de la loi « résilience », évolution du dispositif SAIV (OIV/PIV). Non aboutie au 12/06/2026." },
  ],

  cards: cerCards,
  qcm: cerQcm,

  reading: [
    {
      id: "cer-synthese",
      refId: "cer",
      title: "REC / CER : synthèse de lecture",
      intro:
        "Synthèse paraphrasée distinguant le socle stable de la directive (UE) du volet français en cours de transposition. Elle ne se substitue pas aux textes, qui font seuls foi. État vérifié le 12 juin 2026.",
      sections: [
        {
          id: "directive",
          heading: "La directive (UE) 2022/2557 (socle stable)",
          body: "CER (directive du 14 décembre 2022, dite REC en français) organise la **résilience tous risques des entités critiques** : c'est le volet « physique » du paquet européen dont NIS2 (2022/2555) est le volet cyber, avec une **mise en œuvre coordonnée** obligatoire (art. 1 §2). Elle **abroge la directive 2008/114/CE** sur les infrastructures critiques européennes (art. 27). Logique du texte : chaque État adopte une **stratégie** et une **évaluation des risques d'État membre** (art. 4-5, au plus tard le 17 janvier 2026), puis **recense et désigne ses entités critiques** (art. 6, au plus tard le 17 juillet 2026) dans les **11 secteurs de l'annexe**. Les entités désignées réalisent leur **évaluation des risques** (art. 12, sous neuf mois puis au moins tous les quatre ans), prennent des **mesures de résilience** techniques, de sécurité et organisationnelles formalisées dans un **plan de résilience** (art. 13), peuvent recourir à la **vérification des antécédents** du personnel sensible (art. 14) et **notifient leurs incidents à l'autorité compétente** (art. 15 : première notification sous 24 h, rapport détaillé sous un mois). Les entités fournissant des services essentiels à ou dans **six États membres ou plus** peuvent être reconnues d'importance européenne particulière (art. 17-18). La supervision repose sur inspections, audits et injonctions (art. 21) ; les **sanctions**, sans plafond chiffré, sont renvoyées aux États (art. 22 : effectives, proportionnées, dissuasives). Échéance de transposition : **17 octobre 2024** (art. 26).",
          paraphrase: true,
          sources: ["cer-dir", "dir-2008-114", "nis2"],
        },
        {
          id: "transposition-fr",
          heading: "Transposition française (en cours au 12 juin 2026)",
          body: "La France transpose CER dans le **Titre I** du projet de loi **« relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité »** (Titre II : NIS2 ; Titre III : volet financier). Au 12 juin 2026 : présenté en Conseil des ministres le **15 octobre 2024**, adopté en première lecture par le **Sénat le 12 mars 2025**, voté en **commission spéciale à l'Assemblée nationale le 10 septembre 2025** ; la loi **n'est pas promulguée** et **aucun décret** n'est paru, l'échéance du 17 octobre 2024 étant dépassée. Le dispositif national existant le plus proche est le **SAIV** (sécurité des activités d'importance vitale, code de la défense : OIV, PIV), piloté par le SGDSN, que la loi doit faire évoluer pour transposer CER. **À vérifier** : la correspondance entre OIV et « entité critique », les seuils, le calendrier de désignation et l'articulation précise des régimes dépendent des textes à paraître ; aucun rapprochement précis ne doit être présumé d'ici là.",
          paraphrase: true,
          sources: ["loi-resilience", "senat-rap", "sgdsn-saiv"],
        },
      ],
    },
  ],
};
