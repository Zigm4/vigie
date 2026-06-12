// Persistance 100% locale (localStorage). Aucun cookie, aucun backend, aucun
// tracking. Les données vivent sur l'appareil. Un "sessionId" local est généré
// pour étiqueter la sauvegarde (utile si une synchro optionnelle est ajoutée un
// jour) ; il n'est envoyé nulle part.

const STORAGE_KEY = "vigie.state.v1";

export interface PersistedState {
  sessionId: string;
  createdAt: number;
  lastSeenAt: number;
  /** ids de cartes épinglées. */
  pinned: string[];
  /** ids d'éléments mis en surbrillance (cartes, sections, questions). */
  highlighted: string[];
  /** Progression QCM : questionId -> { lastCorrect, attempts, correctCount }. */
  qcm: Record<string, { lastCorrect: boolean; attempts: number; correct: number }>;
  /** Cartes "vues/maîtrisées" : cardId -> niveau (0 inconnu, 1 à revoir, 2 acquis). */
  cards: Record<string, 0 | 1 | 2>;
  /** Notes libres attachées à un élément (carte ou section) : id -> texte. */
  annotations: Record<string, string>;
  /** Palette d'accent choisie ("blue" | "cyan" | "green"). */
  theme: ThemeName;
}

export type ThemeName = "blue" | "cyan" | "green";
export const THEMES: { id: ThemeName; label: string }[] = [
  { id: "blue", label: "Lime" },
  { id: "cyan", label: "Glacier" },
  { id: "green", label: "Corail" },
];

function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  // Repli simple (non cryptographique) pour environnements anciens.
  return "s-" + Math.abs(hashStr(String(performance.now()) + navigator.userAgent)).toString(36);
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}

function defaultState(): PersistedState {
  const now = Date.now();
  return {
    sessionId: uuid(),
    createdAt: now,
    lastSeenAt: now,
    pinned: [],
    highlighted: [],
    qcm: {},
    cards: {},
    annotations: {},
    theme: "blue",
  };
}

let state: PersistedState = load();

function load(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

function persist(): void {
  try {
    state.lastSeenAt = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota plein ou storage indisponible : on dégrade silencieusement */
  }
}

type Listener = () => void;
const listeners = new Set<Listener>();
export function subscribe(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function emit(): void {
  persist();
  listeners.forEach((l) => l());
}

export function getState(): Readonly<PersistedState> {
  return state;
}

export function getSessionId(): string {
  return state.sessionId;
}

// Épingles
export function isPinned(id: string): boolean {
  return state.pinned.includes(id);
}
export function togglePin(id: string): void {
  state.pinned = isPinned(id)
    ? state.pinned.filter((x) => x !== id)
    : [...state.pinned, id];
  emit();
}

// Surbrillance
export function isHighlighted(id: string): boolean {
  return state.highlighted.includes(id);
}
export function toggleHighlight(id: string): void {
  state.highlighted = isHighlighted(id)
    ? state.highlighted.filter((x) => x !== id)
    : [...state.highlighted, id];
  emit();
}

// Progression QCM
export function recordQcm(questionId: string, correct: boolean): void {
  const prev = state.qcm[questionId] ?? { lastCorrect: false, attempts: 0, correct: 0 };
  state.qcm[questionId] = {
    lastCorrect: correct,
    attempts: prev.attempts + 1,
    correct: prev.correct + (correct ? 1 : 0),
  };
  emit();
}

// Progression cartes
export function setCardLevel(cardId: string, level: 0 | 1 | 2): void {
  state.cards[cardId] = level;
  emit();
}
export function getCardLevel(cardId: string): 0 | 1 | 2 {
  return state.cards[cardId] ?? 0;
}
/** Liste les ids de cartes à un niveau de maîtrise donné. */
export function cardIdsByLevel(level: 0 | 1 | 2): string[] {
  return Object.entries(state.cards)
    .filter(([, l]) => l === level)
    .map(([id]) => id);
}

// Annotations (notes libres)
export function getAnnotation(id: string): string {
  return state.annotations[id] ?? "";
}
export function setAnnotation(id: string, text: string): void {
  const trimmed = text.trim();
  if (trimmed) state.annotations[id] = trimmed;
  else delete state.annotations[id];
  emit();
}
export function annotatedIds(): string[] {
  return Object.keys(state.annotations);
}

// Theme (palette d'accent)
export function getTheme(): ThemeName {
  return state.theme ?? "blue";
}
export function setTheme(theme: ThemeName): void {
  state.theme = theme;
  emit();
}

// Import / export (récupération manuelle de la progression)
export function exportState(): string {
  return JSON.stringify(state);
}
export function importState(json: string): boolean {
  try {
    const parsed = JSON.parse(json) as PersistedState;
    if (!parsed || typeof parsed !== "object") return false;
    state = { ...defaultState(), ...parsed };
    emit();
    return true;
  } catch {
    return false;
  }
}
export function resetState(): void {
  state = defaultState();
  emit();
}
