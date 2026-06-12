// Lecture des textes : sections en panneaux, surlignage et annotation par
// section (etat local). Meme logique que la v1, habillage console.

import { h, mdTrusted, fromHtml } from "../dom.ts";
import { getReferentiel, resolveSources } from "../content/index.ts";
import { sourcesBlock } from "../ui/sources.ts";
import { iconSvg } from "../ui/icons.ts";
import { isHighlighted, toggleHighlight, getAnnotation } from "../store.ts";
import { openNoteEditor } from "../ui/card.ts";
import { staggerReveal } from "../motion.ts";
import { notFound } from "./misc.ts";

export function readingView(refId: string, docId: string | undefined, rerender: () => void): HTMLElement {
  const ref = getReferentiel(refId);
  if (!ref) return notFound();
  const doc = docId ? ref.reading.find((d) => d.id === docId) : ref.reading[0];
  if (!doc) return notFound();

  const sections = doc.sections.map((sec) => {
    const hlId = `sec-${doc.id}-${sec.id}`;
    const note = getAnnotation(hlId);
    return h(
      "section",
      { class: isHighlighted(hlId) ? "reading-sec panel highlighted" : "reading-sec panel", id: hlId },
      [
        h("div", { class: "reading-sec-head" }, [
          h("h2", {}, [sec.heading]),
          h("div", { class: "reading-sec-tools" }, [
            h(
              "button",
              {
                class: isHighlighted(hlId) ? "icon-btn active" : "icon-btn",
                title: "Surligner cette section",
                "aria-label": "Surligner cette section",
                onclick: () => {
                  toggleHighlight(hlId);
                  rerender();
                },
                html: iconSvg("highlight"),
              },
              [],
            ),
            h(
              "button",
              {
                class: note ? "icon-btn active" : "icon-btn",
                title: "Annoter cette section",
                "aria-label": "Annoter cette section",
                onclick: () => openNoteEditor(hlId, rerender),
                html: iconSvg("note"),
              },
              [],
            ),
          ]),
        ]),
        sec.paraphrase
          ? h("p", { class: "tiny muted paraphrase-note" }, [
              "Synthèse paraphrasée, se reporter à la source officielle.",
            ])
          : null,
        fromHtml(mdTrusted(sec.body), "div"),
        note
          ? h("div", { class: "annotation" }, [
              h("div", { class: "annotation-head" }, [
                h("span", { class: "annotation-icon", html: iconSvg("note") }),
                h("span", { class: "annotation-label" }, ["Ma note"]),
              ]),
              h("p", { class: "annotation-text" }, [note]),
            ])
          : null,
        sourcesBlock(resolveSources(ref, sec.sources)),
      ],
    );
  });
  staggerReveal(sections.slice(0, 6)); // cascade sur le premier ecran seulement

  return h("div", { class: "view reading" }, [
    h("div", { class: "breadcrumb" }, [h("a", { href: `#/ref/${ref.id}` }, [`← ${ref.shortName}`])]),
    h("span", { class: "kicker" }, [ref.shortName]),
    h("h1", {}, [doc.title]),
    doc.intro ? h("p", { class: "muted" }, [doc.intro]) : null,
    ...sections,
  ]);
}
