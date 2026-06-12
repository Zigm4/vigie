// Test de coherence du corpus Vigie.
//
// Le contenu (cartes, QCM, lecture, table question -> fiche) est volumineux et
// ecrit a la main : un id de source mal saisi, un themeId obsolete ou une
// question de QCM oubliee dans la table de liaison passent inapercus a l'oeil nu
// et cassent silencieusement l'experience (source manquante, fiche non revue).
//
// Ce script charge le corpus REEL (les memes modules que l'application) et
// verifie un ensemble d'invariants. Il sort en code 1 des qu'une erreur est
// trouvee, pour servir de garde-fou avant tout commit (lance par `npm run check`).
//
// Execution : `node scripts/check-content.ts` (Node 24+ execute le TypeScript
// nativement, aucune dependance a installer).

import { REFERENTIELS } from "../src/content/index.ts";
import { QCARD_MAP } from "../src/content/dr-ii901.qcard-map.ts";
import { LPM_QCARD_MAP } from "../src/content/lpm.qcard-map.ts";
import { NIS2_QCARD_MAP } from "../src/content/nis2.qcard-map.ts";
import { DORA_QCARD_MAP } from "../src/content/dora.qcard-map.ts";
import { CER_QCARD_MAP } from "../src/content/cer.qcard-map.ts";
import { RGS_QCARD_MAP } from "../src/content/rgs.qcard-map.ts";

// Table de liaison fusionnee, identique a celle utilisee par l'application
// (garder en phase avec QCARD_ALL de src/content/index.ts).
const QCARD_ALL: Record<string, string[]> = {
  ...QCARD_MAP,
  ...LPM_QCARD_MAP,
  ...NIS2_QCARD_MAP,
  ...DORA_QCARD_MAP,
  ...CER_QCARD_MAP,
  ...RGS_QCARD_MAP,
};

const errors: string[] = [];
const warnings: string[] = [];

function err(msg: string): void {
  errors.push(msg);
}
function warn(msg: string): void {
  warnings.push(msg);
}

// --------------------------------------------------------------------------
// Index globaux (les recherches de l'app sont globales : ids uniques requis).
// --------------------------------------------------------------------------

const allCardIds = new Set<string>();
const allQcmIds = new Set<string>();

for (const ref of REFERENTIELS) {
  const themeIds = new Set(ref.themes.map((t) => t.id));
  const sourceIds = new Set(ref.sources.map((s) => s.id));

  // Themes : ids uniques au sein du referentiel.
  const seenThemes = new Set<string>();
  for (const t of ref.themes) {
    if (seenThemes.has(t.id)) err(`[${ref.id}] theme en double : "${t.id}"`);
    seenThemes.add(t.id);
  }

  // Sources : ids uniques, et detection des sources jamais referencees (warning).
  const seenSources = new Set<string>();
  const usedSources = new Set<string>();
  for (const s of ref.sources) {
    if (seenSources.has(s.id)) err(`[${ref.id}] source en double : "${s.id}"`);
    seenSources.add(s.id);
  }

  // ---- Cartes ----
  for (const c of ref.cards) {
    if (allCardIds.has(c.id)) err(`[${ref.id}] id de carte non unique (collision globale) : "${c.id}"`);
    allCardIds.add(c.id);

    if (c.refId !== ref.id) err(`[${ref.id}] carte "${c.id}" : refId="${c.refId}" ne correspond pas au referentiel`);
    if (!themeIds.has(c.themeId)) err(`[${ref.id}] carte "${c.id}" : themeId inconnu "${c.themeId}"`);

    for (const sid of c.sources ?? []) {
      if (!sourceIds.has(sid)) err(`[${ref.id}] carte "${c.id}" : source inconnue "${sid}"`);
      else usedSources.add(sid);
    }
  }

  // ---- QCM ----
  for (const q of ref.qcm) {
    if (allQcmIds.has(q.id)) err(`[${ref.id}] id de question non unique (collision globale) : "${q.id}"`);
    allQcmIds.add(q.id);

    if (q.refId !== ref.id) err(`[${ref.id}] question "${q.id}" : refId="${q.refId}" ne correspond pas au referentiel`);
    if (!themeIds.has(q.themeId)) err(`[${ref.id}] question "${q.id}" : themeId inconnu "${q.themeId}"`);

    const nCorrect = q.options.filter((o) => o.correct).length;
    if (q.options.length < 2) err(`[${ref.id}] question "${q.id}" : moins de 2 options`);
    if (nCorrect === 0) err(`[${ref.id}] question "${q.id}" : aucune option correcte`);

    for (const sid of q.sources ?? []) {
      if (!sourceIds.has(sid)) err(`[${ref.id}] question "${q.id}" : source inconnue "${sid}"`);
      else usedSources.add(sid);
    }
  }

  // ---- Lecture ----
  for (const doc of ref.reading) {
    if (doc.refId !== ref.id) err(`[${ref.id}] document de lecture "${doc.id}" : refId="${doc.refId}" incoherent`);
    const seenSec = new Set<string>();
    for (const sec of doc.sections) {
      if (seenSec.has(sec.id)) err(`[${ref.id}] lecture "${doc.id}" : section en double "${sec.id}"`);
      seenSec.add(sec.id);
      for (const sid of sec.sources ?? []) {
        if (!sourceIds.has(sid)) err(`[${ref.id}] lecture "${doc.id}"/"${sec.id}" : source inconnue "${sid}"`);
        else usedSources.add(sid);
      }
    }
  }

  // Sources declarees mais jamais citees : signale (non bloquant).
  for (const s of ref.sources) {
    if (!usedSources.has(s.id)) warn(`[${ref.id}] source jamais referencee : "${s.id}"`);
  }
}

// --------------------------------------------------------------------------
// Table de liaison question -> fiche (QCARD_ALL).
//   - couverture : chaque question doit avoir une entree (sinon une mauvaise
//     reponse ne fait passer aucune fiche en "a revoir") ;
//   - integrite : chaque cle pointe vers une question existante et chaque cible
//     vers une carte existante.
// --------------------------------------------------------------------------

for (const qid of allQcmIds) {
  const targets = QCARD_ALL[qid];
  if (!targets || targets.length === 0) {
    err(`table question->fiche : question "${qid}" sans fiche liee`);
  }
}

for (const [qid, cardIds] of Object.entries(QCARD_ALL)) {
  if (!allQcmIds.has(qid)) err(`table question->fiche : cle orpheline "${qid}" (aucune question correspondante)`);
  for (const cid of cardIds) {
    if (!allCardIds.has(cid)) err(`table question->fiche : "${qid}" pointe vers une fiche inexistante "${cid}"`);
  }
}

// --------------------------------------------------------------------------
// Rapport
// --------------------------------------------------------------------------

const totalCards = REFERENTIELS.reduce((n, r) => n + r.cards.length, 0);
const totalQcm = REFERENTIELS.reduce((n, r) => n + r.qcm.length, 0);

// Couche `detail` : part de fiches citant le texte verbatim (« ») vs reformulees
// (signalees par detailParaphrase + note visible). Indicateur de qualite editoriale.
const allCards = REFERENTIELS.flatMap((r) => r.cards);
const paraphrased = allCards.filter((c) => c.detailParaphrase).length;
const verbatim = allCards.length - paraphrased;

console.log(
  `Corpus : ${REFERENTIELS.length} referentiels, ${totalCards} cartes, ${totalQcm} questions, ${Object.keys(QCARD_ALL).length} liens question->fiche.`,
);
console.log(`Couche detail : ${verbatim} fiches verbatim, ${paraphrased} reformulees (note visible).`);

for (const w of warnings) console.log(`  avertissement : ${w}`);

if (errors.length > 0) {
  console.error(`\n${errors.length} erreur(s) de coherence :`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`Coherence du corpus : OK${warnings.length ? ` (${warnings.length} avertissement(s))` : ""}.`);
