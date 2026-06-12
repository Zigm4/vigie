// Registre du contenu. Chaque référentiel est un module séparé pour faciliter
// la maintenance et les contributions (un fichier par sujet, versionné dans git).

import type { Referentiel, ReviewCard, QcmQuestion, Source, ReadingDoc, ReadingSection } from "../types.ts";
import { drII901 } from "./dr-ii901.ts";
import { lpm } from "./lpm.ts";
import { nis2 } from "./nis2.ts";
import { dora } from "./dora.ts";
import { cer } from "./cer.ts";
import { rgs } from "./rgs.ts";
import { QCARD_MAP } from "./dr-ii901.qcard-map.ts";
import { LPM_QCARD_MAP } from "./lpm.qcard-map.ts";
import { NIS2_QCARD_MAP } from "./nis2.qcard-map.ts";
import { DORA_QCARD_MAP } from "./dora.qcard-map.ts";
import { CER_QCARD_MAP } from "./cer.qcard-map.ts";
import { RGS_QCARD_MAP } from "./rgs.qcard-map.ts";

// Table de liaison fusionnée de tous les référentiels (ids de questions uniques).
const QCARD_ALL: Record<string, string[]> = {
  ...QCARD_MAP,
  ...LPM_QCARD_MAP,
  ...NIS2_QCARD_MAP,
  ...DORA_QCARD_MAP,
  ...CER_QCARD_MAP,
  ...RGS_QCARD_MAP,
};

export const REFERENTIELS: Referentiel[] = [drII901, lpm, nis2, dora, cer, rgs];

export function getReferentiel(id: string): Referentiel | undefined {
  return REFERENTIELS.find((r) => r.id === id);
}

export function getCard(cardId: string): { card: ReviewCard; ref: Referentiel } | undefined {
  for (const ref of REFERENTIELS) {
    const card = ref.cards.find((c) => c.id === cardId);
    if (card) return { card, ref };
  }
  return undefined;
}

export function allCards(): { card: ReviewCard; ref: Referentiel }[] {
  return REFERENTIELS.flatMap((ref) => ref.cards.map((card) => ({ card, ref })));
}

export function allQcm(): { q: QcmQuestion; ref: Referentiel }[] {
  return REFERENTIELS.flatMap((ref) => ref.qcm.map((q) => ({ q, ref })));
}

/**
 * Retrouve une section de lecture à partir de son identifiant de surbrillance
 * (format `sec-<docId>-<sectionId>`), utilisé pour les annotations.
 */
export function getReadingSectionByHlId(
  hlId: string,
): { ref: Referentiel; doc: ReadingDoc; section: ReadingSection } | undefined {
  for (const ref of REFERENTIELS) {
    for (const doc of ref.reading) {
      for (const section of doc.sections) {
        if (`sec-${doc.id}-${section.id}` === hlId) return { ref, doc, section };
      }
    }
  }
  return undefined;
}

/**
 * Cartes de révision liées à une question, via la table de correspondance
 * EXPLICITE et vérifiée (QCARD_MAP). Une question peut être reliée à une OU
 * plusieurs cartes. Aucune heuristique : la table couvre toutes les questions.
 */
export function cardIdsForQuestion(q: { id: string }): string[] {
  return QCARD_ALL[q.id] ?? [];
}

/** Résout des ids de sources vers leurs objets, à l'échelle d'un référentiel. */
export function resolveSources(ref: Referentiel, ids?: string[]): Source[] {
  if (!ids) return [];
  return ids
    .map((id) => ref.sources.find((s) => s.id === id))
    .filter((s): s is Source => Boolean(s));
}
