// Composants de controle reutilisables (selecteurs, etc.).

import { h } from "../dom.ts";
import type { Theme } from "../types.ts";

/**
 * Menu deroulant de selection de theme, style champ console. Naturel sur
 * mobile (selecteur natif) comme sur PC.
 * `value` vide = "Tous les themes". `onChange` recoit l'id choisi (ou "").
 */
export function themeSelect(value: string, themes: Theme[], onChange: (value: string) => void): HTMLElement {
  const select = h(
    "select",
    {
      class: "theme-select",
      "aria-label": "Filtrer par thème",
      onchange: (e: Event) => onChange((e.currentTarget as HTMLSelectElement).value),
    },
    [
      h("option", { value: "", ...(value === "" ? { selected: true } : {}) }, ["Tous les thèmes"]),
      ...themes.map((t) =>
        h("option", { value: t.id, ...(value === t.id ? { selected: true } : {}) }, [t.title]),
      ),
    ],
  ) as HTMLSelectElement;
  select.value = value;
  return h("div", { class: "select-wrap" }, [select]);
}
