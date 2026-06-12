// Jeu d'icones SVG en traits fins, monochromes (currentColor). Prefere aux
// emojis : rendu homogene sur tous les OS et coherent avec le style console.

type IconName =
  | "home"
  | "cards"
  | "qcm"
  | "repere"
  | "progress"
  | "pin"
  | "highlight"
  | "note"
  | "link"
  | "share"
  | "info"
  | "chevron-left"
  | "chevron-right"
  | "shuffle"
  | "radar"
  | "doc";

const PATHS: Record<IconName, string> = {
  // Maison / accueil
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/>',
  // Pile de cartes (couches)
  cards: '<path d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z"/><path d="M3.5 12.5 12 17l8.5-4.5"/>',
  // QCM (case cochee)
  qcm: '<rect x="3.5" y="3.5" width="17" height="17" rx="1"/><path d="m8 12 3 3 5-6"/>',
  // Repere (marque-page)
  repere: '<path d="M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-3.7L5.5 21V4.5a1 1 0 0 1 1-1Z"/>',
  // Progression (signal / activite)
  progress: '<path d="M3 12h3.5l2.5 7 4-15 2.5 8H21"/>',
  // Epingle
  pin: '<path d="M9 3.5h6l-1 5 3 3v2H7v-2l3-3-1-5Z"/><path d="M12 13.5V21"/>',
  // Surligneur
  highlight: '<path d="m4 20 2-.5 9.5-9.5-1.5-1.5L4.5 18 4 20Z"/><path d="m14 8 2-2 1.5 1.5-2 2"/>',
  // Note (bulle)
  note: '<path d="M5 4.5h14a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H9l-4 3.5V5.5a1 1 0 0 1 1-1Z"/>',
  // Lien (chaine)
  link: '<path d="M9.5 14.5 14.5 9.5"/><path d="M11 7.5l1.5-1.5a3.5 3.5 0 0 1 5 5L16 12.5"/><path d="M13 16.5 11.5 18a3.5 3.5 0 0 1-5-5L8 11.5"/>',
  // Partage (export)
  share: '<path d="M12 15V4"/><path d="m8 7.5 4-4 4 4"/><path d="M5 13v6.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V13"/>',
  // Info
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
  // Chevrons (navigation deck)
  "chevron-left": '<path d="M15 5 8 12l7 7"/>',
  "chevron-right": '<path d="M9 5l7 7-7 7"/>',
  // Melanger (shuffle)
  shuffle:
    '<path d="M4 6h3c4 0 6 12 10 12h3"/><path d="M4 18h3c4 0 6-12 10-12h3"/><path d="M17 3l3 3-3 3"/><path d="M17 15l3 3-3 3"/>',
  // Radar (decoratif)
  radar:
    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 12l5.5-6.5"/><circle cx="15" cy="8" r="1.2" fill="currentColor" stroke="none"/>',
  // Document (lecture)
  doc: '<path d="M6 3.5h8l4 4V20.5H6V3.5Z"/><path d="M14 3.5v4h4"/><path d="M9 12h6M9 15.5h6"/>',
};

/** Renvoie le markup SVG d'une icone (a inserer via l'attribut `html`). */
export function iconSvg(name: IconName): string {
  return (
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ` +
    `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[name]}</svg>`
  );
}

export type { IconName };
