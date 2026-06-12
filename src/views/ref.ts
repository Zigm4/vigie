// Page d'un referentiel : en-tete, note d'avertissement, acces cartes/QCM,
// grille de themes (avec mini-jauge de maitrise locale) et lectures.

import { h, mdTrusted, fromHtml } from "../dom.ts";
import { getReferentiel } from "../content/index.ts";
import { iconSvg } from "../ui/icons.ts";
import { getCardLevel } from "../store.ts";
import { staggerReveal } from "../motion.ts";
import { notFound } from "./misc.ts";

export function refView(refId: string): HTMLElement {
  const ref = getReferentiel(refId);
  if (!ref) return notFound();

  const themeItems = ref.themes.map((t) => {
    const cards = ref.cards.filter((c) => c.themeId === t.id);
    const nQcm = ref.qcm.filter((q) => q.themeId === t.id).length;
    // Jauge locale : part de cartes du theme marquees "acquises" sur l'appareil.
    const acquired = cards.filter((c) => getCardLevel(c.id) === 2).length;
    const pct = cards.length ? Math.round((acquired / cards.length) * 100) : 0;
    return h("a", { href: `#/cartes/${ref.id}?theme=${t.id}`, class: "theme-item panel" }, [
      h("h3", {}, [t.title]),
      t.summary ? h("p", { class: "muted" }, [t.summary]) : null,
      h("div", { class: "theme-counts" }, [`${cards.length} cartes · ${nQcm} QCM`]),
      h("div", { class: "theme-gauge", title: `${acquired}/${cards.length} cartes acquises` }, [
        h("i", { style: `width:${pct}%` }),
      ]),
    ]);
  });
  staggerReveal(themeItems);

  return h("div", { class: "view" }, [
    h("div", { class: "breadcrumb" }, [h("a", { href: "#/" }, ["← Référentiels"])]),
    h("span", { class: "kicker" }, [ref.shortName]),
    h("h1", {}, [ref.title]),
    h("p", { class: "muted" }, [ref.description]),
    ref.lastReviewed
      ? h("p", { class: "tiny muted mono" }, [`Dernière révision éditoriale : ${ref.lastReviewed}`])
      : null,

    ref.note
      ? h("div", { class: "callout-warn" }, [
          h("div", { class: "callout-warn-head" }, [
            h("span", { class: "callout-warn-icon", html: iconSvg("info") }),
            h("span", {}, ["À garder en tête"]),
          ]),
          fromHtml(mdTrusted(ref.note), "div"),
        ])
      : null,

    h("div", { class: "action-row" }, [
      h("a", { href: `#/cartes/${ref.id}`, class: "btn primary" }, [
        h("span", { class: "chip-icon", html: iconSvg("cards") }),
        `Cartes (${ref.cards.length})`,
      ]),
      h("a", { href: `#/qcm/${ref.id}`, class: "btn" }, [
        h("span", { class: "chip-icon", html: iconSvg("qcm") }),
        `QCM (${ref.qcm.length})`,
      ]),
    ]),

    h("h2", { class: "section-title" }, ["Thèmes"]),
    h("div", { class: "theme-list" }, themeItems),

    ref.reading.length
      ? h("div", {}, [
          h("h2", { class: "section-title" }, ["Lecture des textes"]),
          h(
            "div",
            { class: "theme-list" },
            ref.reading.map((d) =>
              h("a", { href: `#/lecture/${ref.id}/${d.id}`, class: "theme-item panel" }, [
                h("h3", {}, [
                  h("span", { class: "chip-icon", html: iconSvg("doc") }),
                  ` ${d.title}`,
                ]),
                d.intro ? h("p", { class: "muted" }, [d.intro]) : null,
              ]),
            ),
          ),
        ])
      : null,
  ]);
}
