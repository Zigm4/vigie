// Bloc "Sources" : transparence systematique sur l'origine de chaque element.

import type { Source } from "../types.ts";
import { h } from "../dom.ts";

function sourceLabel(s: Source): string {
  const bits = [s.docTitle];
  if (s.ref) bits.push(s.ref);
  const meta = [s.version, s.date].filter(Boolean).join(", ");
  if (meta) bits.push(`(${meta})`);
  return bits.join(", ");
}

export function sourcesBlock(sources: Source[]): HTMLElement | null {
  if (!sources.length) return null;
  return h("div", { class: "sources" }, [
    h("div", { class: "sources-title" }, ["Sources"]),
    h(
      "ul",
      { class: "sources-list" },
      sources.map((s) =>
        h("li", {}, [
          s.url
            ? h("a", { href: s.url, target: "_blank", rel: "noopener noreferrer" }, [sourceLabel(s)])
            : sourceLabel(s),
        ]),
      ),
    ),
  ]);
}
