// Schéma de contenu de Vigie.
//
// Principe directeur (non négociable) : tout élément factuel est rattaché à sa
// SOURCE exacte (texte, article/annexe, version, date) et porte son NIVEAU
// D'EXIGENCE tel que le texte le formule. Pas de dogme : on distingue ce qui est
// imposé de ce qui est recommandé / conseillé / simple pratique d'usage.

/** Niveau d'exigence d'une mesure, tel que formulé par le référentiel. */
export type ExigenceLevel =
  | "obligatoire" // imposé par le texte (doit / est tenu de…)
  | "recommande" // recommandé par le texte (il est recommandé de…)
  | "conseille" // bonne pratique évoquée, non contraignante
  | "usage" // pratique courante NON imposée par le texte (à signaler comme telle)
  | "interdit"; // explicitement proscrit

export interface Exigence {
  level: ExigenceLevel;
  /** Précision libre : "obligatoire pour un SI de classe 2", "selon l'art. X", … */
  note?: string;
}

/** Référence à une source officielle publique. */
export interface Source {
  /** Identifiant court réutilisable (ex. "ii901", "ii901-annexe-b"). */
  id: string;
  /** Titre du document (ex. "Instruction interministérielle n°901/SGDSN/ANSSI"). */
  docTitle: string;
  /** Localisation précise dans le document (ex. "art. 12", "annexe B §3"). */
  ref?: string;
  /** Version / édition du document. */
  version?: string;
  /** Date de la source au format ISO (AAAA-MM-JJ) ou AAAA. */
  date?: string;
  /** Émetteur (SGDSN, ANSSI, Légifrance, …). */
  issuer?: string;
  /** URL publique officielle. */
  url?: string;
}

/** Carte de révision : double couche (courte + détail). */
export interface ReviewCard {
  id: string;
  refId: string;
  themeId: string;
  title: string;
  /** Couche courte : explication vulgarisée, va à l'essentiel. */
  short: string;
  /** Élément de langage : formulation prête à l'emploi (réunion, oral). */
  elementDeLangage?: string;
  /** Couche détaillée (markdown) : restitue le TEXTE EXACT de la source (verbatim
   *  entre « », avec référence précise). L'interprétation reste dans `short` /
   *  `elementDeLangage`. */
  detail: string;
  /** true quand `detail` ne peut PAS reproduire le texte source verbatim (source
   *  non librement reproductible, ex. II 901 et son annexe F) : la couche reste
   *  une paraphrase fidèle ancrée à la référence, et une note visible le signale
   *  en renvoyant à la source. Les textes publics (IGI 1300, code de la défense,
   *  lois, arrêtés au JO, guide PG-075) doivent être cités au mot près, sans ce drapeau. */
  detailParaphrase?: boolean;
  /** Texte personnalisé de la note visible (n'a d'effet que si `detailParaphrase`).
   *  Sert aux fiches "repère" (sommaire/cartographie) pour expliquer leur nature et
   *  renvoyer vers le document à lire. Si absent, une note générique est affichée. */
  detailNote?: string;
  /** Niveau d'exigence de la mesure décrite, si applicable. */
  exigence?: Exigence;
  /** Sources rattachées (ids déclarés dans le référentiel ou inline). */
  sources?: string[];
  /** Étiquettes libres pour le filtrage. */
  tags?: string[];
}

export interface QcmOption {
  text: string;
  correct: boolean;
}

/** Question de QCM (réponse unique ou multiple selon le nombre d'options correctes). */
export interface QcmQuestion {
  id: string;
  refId: string;
  themeId: string;
  question: string;
  options: QcmOption[];
  /** Explication affichée après réponse (markdown). */
  explanation: string;
  exigence?: Exigence;
  sources?: string[];
}

/** Bloc de lecture brute d'un texte officiel. */
export interface ReadingSection {
  id: string;
  /** Titre de section (ex. "Article 4, Champ d'application"). */
  heading: string;
  /** Corps (markdown). Peut être une synthèse/paraphrase si le texte n'est pas
   *  librement reproductible, dans ce cas, l'indiquer et renvoyer à la source. */
  body: string;
  /** true si body est une paraphrase et non le texte officiel verbatim. */
  paraphrase?: boolean;
  sources?: string[];
}

export interface ReadingDoc {
  id: string;
  refId: string;
  title: string;
  intro?: string;
  sections: ReadingSection[];
}

export interface Theme {
  id: string;
  title: string;
  summary?: string;
}

export interface Referentiel {
  id: string;
  /** Nom long (ex. "Diffusion Restreinte (II901)"). */
  title: string;
  /** Nom court pour les chips/onglets (ex. "DR / II901"). */
  shortName: string;
  description: string;
  /** Statut de maturité du contenu pour la transparence. */
  status: "complet" | "en_cours" | "ebauche";
  /** Dernière révision éditoriale du contenu (ISO). */
  lastReviewed?: string;
  /** Note d'avertissement (markdown) affichée en encadré sur la page du référentiel. */
  note?: string;
  sources: Source[];
  themes: Theme[];
  cards: ReviewCard[];
  qcm: QcmQuestion[];
  reading: ReadingDoc[];
}

