// Badge de niveau d'exigence : tag console a coin coupe + note explicative.
// Coeur du parti pris non dogmatique : chaque mesure affiche ce que le texte
// impose reellement. Les niveaux contraignants (obligatoire, interdit) portent
// un point qui pulse doucement, comme un signal de veille.

import type { Exigence, ExigenceLevel } from "../types.ts";
import { h } from "../dom.ts";

const META: Record<ExigenceLevel, { label: string; cls: string; title: string }> = {
  obligatoire: {
    label: "Obligatoire",
    cls: "exi-obligatoire",
    title: "Imposé par le texte",
  },
  recommande: {
    label: "Recommandé",
    cls: "exi-recommande",
    title: "Recommandé par le texte (non imposé)",
  },
  conseille: {
    label: "Conseillé",
    cls: "exi-conseille",
    title: "Bonne pratique évoquée, non contraignante",
  },
  usage: {
    label: "Pratique d'usage",
    cls: "exi-usage",
    title: "Pratique courante NON imposée par le texte",
  },
  interdit: {
    label: "Interdit",
    cls: "exi-interdit",
    title: "Explicitement proscrit par le texte",
  },
};

/**
 * Tag compact (niveau) + note detachee qui peut passer a la ligne.
 * Le tag reste de taille fixe ; la note ne force pas de debordement.
 */
export function exigenceBadge(exi?: Exigence): HTMLElement | null {
  if (!exi) return null;
  const meta = META[exi.level];
  return h("span", { class: "exi-wrap" }, [
    h("span", { class: `exi ${meta.cls}`, title: meta.title }, [
      h("span", { class: "exi-dot" }),
      meta.label,
    ]),
    exi.note ? h("span", { class: "exi-note" }, [exi.note]) : null,
  ]);
}
