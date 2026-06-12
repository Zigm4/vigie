// Page "Reperes" : regroupe ce que l'utilisateur a mis de cote pour reviser :
// cartes epinglees, cartes marquees "a revoir", et toutes les annotations
// (cartes comme sections de lecture).

import { h } from "../dom.ts";
import { getState, cardIdsByLevel, annotatedIds, getAnnotation } from "../store.ts";
import { getCard, getReadingSectionByHlId } from "../content/index.ts";
import { cardElement, openNoteEditor } from "../ui/card.ts";
import { iconSvg, type IconName } from "../ui/icons.ts";

function emptyHint(text: string): HTMLElement {
  return h("p", { class: "muted tiny" }, [text]);
}

function sectionTitle(icon: IconName, label: string, count: number): HTMLElement {
  return h("h2", { class: "repere-title" }, [
    h("span", { class: "repere-title-icon", html: iconSvg(icon) }),
    label,
    h("span", { class: "repere-count" }, [String(count)]),
  ]);
}

export function pinnedView(rerender: () => void): HTMLElement {
  const st = getState();

  // Cartes epinglees.
  const pinned = st.pinned
    .map((id) => getCard(id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  // Cartes marquees "a revoir" (niveau 1), hors cartes deja epinglees
  // (pour eviter les doublons d'affichage et d'identifiants DOM).
  const pinnedSet = new Set(st.pinned);
  const toReview = cardIdsByLevel(1)
    .filter((id) => !pinnedSet.has(id))
    .map((id) => getCard(id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  // Toutes les annotations (cartes et sections de lecture).
  const notes = annotatedIds();

  return h("div", { class: "view" }, [
    h("span", { class: "kicker" }, ["Mise de côté locale"]),
    h("h1", {}, ["Repères"]),
    h("p", { class: "tiny muted" }, ["Vos éléments mis de côté. Données locales à cet appareil."]),

    // ---- Epingles ----
    sectionTitle("pin", "Épinglées", pinned.length),
    pinned.length === 0
      ? emptyHint("Épinglez une carte pour la retrouver ici.")
      : h(
          "div",
          { class: "card-list" },
          pinned.map(({ card, ref }) => cardElement(card, ref, { onChange: rerender })),
        ),

    // ---- A revoir ----
    sectionTitle("highlight", "À revoir", toReview.length),
    toReview.length === 0
      ? emptyHint("Marquez une carte « À revoir » (niveau de maîtrise) pour la lister ici.")
      : h(
          "div",
          { class: "card-list" },
          toReview.map(({ card, ref }) => cardElement(card, ref, { onChange: rerender })),
        ),

    // ---- Annotations ----
    sectionTitle("note", "Annotations", notes.length),
    notes.length === 0
      ? emptyHint("Vos notes (sur une carte ou une section) apparaîtront ici.")
      : h(
          "div",
          { class: "note-list" },
          notes.map((id) => annotationItem(id, rerender)),
        ),
  ]);
}

/** Ligne compacte pour une annotation : titre cliquable + note + edition. */
function annotationItem(id: string, rerender: () => void): HTMLElement {
  const note = getAnnotation(id);
  const card = getCard(id);
  let title = id;
  let href = "#/";

  if (card) {
    title = card.card.title;
    href = `#/carte/${card.card.id}`;
  } else {
    const sec = getReadingSectionByHlId(id);
    if (sec) {
      title = `${sec.doc.title} · ${sec.section.heading}`;
      href = `#/lecture/${sec.ref.id}/${sec.doc.id}`;
    }
  }

  return h("div", { class: "note-item panel", id: `note-${id}` }, [
    h("a", { href, class: "note-item-title" }, [title]),
    h("p", { class: "annotation-text" }, [note]),
    h("div", { class: "note-item-actions" }, [
      h("button", { class: "btn-link tiny", onclick: () => openNoteEditor(id, rerender) }, ["Modifier"]),
    ]),
  ]);
}
