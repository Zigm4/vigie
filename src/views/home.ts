// Accueil : hero editorial (titre serif avec accent italique en degrade, arcs
// concentriques en rotation lente), bandeau de statistiques du corpus
// (compteurs animes sur rangee hairline) et cartes de referentiels.

import { h } from "../dom.ts";
import { REFERENTIELS } from "../content/index.ts";
import { getState } from "../store.ts";
import { countUp, staggerReveal } from "../motion.ts";

const STATUS_LABEL: Record<string, string> = {
  complet: "Complet",
  en_cours: "En cours",
  ebauche: "Ébauche",
};

/**
 * Ligne "pulse" : trace de monitoring qui traverse le hero. Un segment
 * lumineux parcourt le trace en boucle (dasharray/dashoffset animes en CSS).
 * pathLength normalise la longueur a 1000 quel que soit le dessin.
 */
function pulseSvg(): HTMLElement {
  return h("div", {
    class: "hero-pulse",
    "aria-hidden": "true",
    html:
      `<svg viewBox="0 0 1000 56" preserveAspectRatio="none">` +
      `<defs><linearGradient id="pulse-grad" x1="0" y1="0" x2="1" y2="0">` +
      `<stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent-2)"/>` +
      `</linearGradient></defs>` +
      `<path class="pulse-base" pathLength="1000" d="M0 28 H320 l14-12 16 26 14-22 10 8 H520 l12-9 14 18 12-14 8 5 H1000"/>` +
      `<path class="pulse-run" pathLength="1000" d="M0 28 H320 l14-12 16 26 14-22 10 8 H520 l12-9 14 18 12-14 8 5 H1000"/>` +
      `</svg>`,
  });
}

/** Tuile de statistique : valeur animee + libelle. */
function stat(value: number, label: string): HTMLElement {
  const val = h("div", { class: "stat-value" }, ["0"]);
  countUp(val, value);
  return h("div", { class: "stat" }, [val, h("div", { class: "stat-label" }, [label])]);
}

/** Carte d'un referentiel (reutilisee par l'ecran de selection). */
export function refCard(ref: (typeof REFERENTIELS)[number], href: string): HTMLElement {
  return h("a", { href, class: "ref-card panel" }, [
    h("div", { class: "ref-card-head" }, [
      h("span", { class: "ref-short" }, [ref.shortName]),
      h("span", { class: `status status-${ref.status}` }, [STATUS_LABEL[ref.status] ?? ref.status]),
    ]),
    h("h3", {}, [ref.title]),
    h("p", {}, [ref.description]),
    h("div", { class: "ref-meta" }, [
      `${ref.cards.length} cartes · ${ref.qcm.length} questions · ${ref.themes.length} thèmes`,
    ]),
  ]);
}

export function homeView(): HTMLElement {
  const st = getState();

  // Agregats du corpus, calcules a l'affichage (toujours en phase avec le code).
  const totals = REFERENTIELS.reduce(
    (acc, r) => {
      acc.cards += r.cards.length;
      acc.qcm += r.qcm.length;
      acc.themes += r.themes.length;
      acc.sources += r.sources.length;
      return acc;
    },
    { cards: 0, qcm: 0, themes: 0, sources: 0 },
  );

  const refCards = REFERENTIELS.map((ref) => refCard(ref, `#/ref/${ref.id}`));
  staggerReveal(refCards);

  return h("div", { class: "view" }, [
    h("section", { class: "hero" }, [
      h("span", { class: "kicker" }, ["Veille réglementaire cyber"]),
      h("h1", {}, ["Réviser le cadre cyber, ", h("em", {}, ["sans le dogme"]), "."]),
      h("p", { class: "hero-sub" }, [
        "Cartes, QCM et lectures tirés directement des textes. Chaque mesure indique son niveau d'exigence réel : obligatoire, recommandé, conseillé. Aucun compte, aucun cookie, hors-ligne.",
      ]),
      pulseSvg(),
    ]),
    h("div", { class: "stat-strip" }, [
      stat(totals.cards, "Cartes"),
      stat(totals.qcm, "Questions"),
      stat(totals.themes, "Thèmes"),
      stat(totals.sources, "Sources citées"),
    ]),
    h("h2", { class: "section-title" }, ["Référentiels"]),
    h("div", { class: "ref-grid" }, refCards),
    st.pinned.length > 0
      ? h("p", { class: "home-note" }, [
          h("a", { href: "#/epingles" }, [`Reprendre vos ${st.pinned.length} épingle(s) →`]),
        ])
      : null,
  ]);
}
