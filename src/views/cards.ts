// Vue "cartes" en deck 3D : une seule carte affichee a la fois.
//   - La carte active se fait glisser au doigt OU a la souris (pointer events) :
//     elle suit le geste avec une legere rotation, puis part sur le cote si le
//     seuil est franchi (sinon elle revient se poser).
//   - Les entrees sont DIRECTIONNELLES : la carte suivante arrive du cote vers
//     lequel on navigue (classes .from-left / .from-right posees sur le slot).
//   - Fleches a l'ecran et touches fleches du clavier en complement.
// Le filtre par theme est un menu deroulant. Par defaut, les cartes marquees
// "a revoir" sont placees en tete ; un bouton "Melanger" donne un ordre aleatoire.

import { h, clear } from "../dom.ts";
import { getReferentiel, getCard, REFERENTIELS } from "../content/index.ts";
import { getQueryParam, navigate } from "../router.ts";
import { cardElement } from "../ui/card.ts";
import { iconSvg } from "../ui/icons.ts";
import { themeSelect } from "../ui/controls.ts";
import { getCardLevel } from "../store.ts";
import { reducedMotion } from "../motion.ts";
import type { ReviewCard, Referentiel } from "../types.ts";
import { notFound } from "./misc.ts";
import { referentielChooser } from "./chooser.ts";

// Gestionnaire clavier courant (un seul a la fois, retire au changement de vue).
let deckKeyHandler: ((e: KeyboardEvent) => void) | null = null;

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function cardsView(refId: string | undefined, _rerender: () => void): HTMLElement {
  // Pas de referentiel choisi : aller direct s'il n'y en a qu'un, sinon proposer le choix.
  if (!refId) {
    if (REFERENTIELS.length === 1) refId = REFERENTIELS[0].id;
    else return referentielChooser("cartes");
  }
  const ref = getReferentiel(refId);
  if (!ref) return notFound();

  const themeFilter = getQueryParam("theme") || "";
  const cards = themeFilter ? ref.cards.filter((c) => c.themeId === themeFilter) : ref.cards;

  const view = h("div", { class: "view" }, [
    h("div", { class: "breadcrumb" }, [h("a", { href: `#/ref/${ref.id}` }, [`← ${ref.shortName}`])]),
    h("span", { class: "kicker" }, [ref.shortName]),
    h("h1", {}, ["Cartes de révision"]),
  ]);

  if (cards.length === 0) {
    if (themeFilter) {
      view.append(
        h("div", { class: "cards-toolbar" }, [
          themeSelect(themeFilter, ref.themes, (val) => navigate(`#/cartes/${ref.id}${val ? `?theme=${val}` : ""}`)),
        ]),
        h("p", { class: "muted" }, ["Aucune carte pour ce thème."]),
      );
    } else {
      view.append(h("p", { class: "muted" }, ["Contenu en préparation pour ce référentiel."]));
    }
    return view;
  }

  view.append(deck(ref, cards, themeFilter));
  return view;
}

/** Construit le deck navigable pour une liste de cartes. */
function deck(ref: Referentiel, baseCards: ReviewCard[], themeFilter: string): HTMLElement {
  let shuffled = false;
  let cards = order();
  let index = 0;
  // Sens de la derniere navigation : pilote l'animation d'entree (-1 / 0 / +1).
  let lastDir = 0;

  // Ordre par defaut : cartes "a revoir" d'abord, puis le reste (ordre du
  // corpus). Bouton "Melanger" : ordre aleatoire.
  function order(): ReviewCard[] {
    if (shuffled) return shuffle(baseCards);
    const toReview: ReviewCard[] = [];
    const rest: ReviewCard[] = [];
    for (const c of baseCards) (getCardLevel(c.id) === 1 ? toReview : rest).push(c);
    return [...toReview, ...rest];
  }

  const slot = h("div", { class: "deck-card" }, []);
  const counter = h("span", { class: "deck-counter" }, []);
  const gaugeFill = h("i", {});
  const prevBtn = h("button", {
    class: "deck-arrow",
    "aria-label": "Carte précédente",
    html: iconSvg("chevron-left"),
  }) as HTMLButtonElement;
  const nextBtn = h("button", {
    class: "deck-arrow",
    "aria-label": "Carte suivante",
    html: iconSvg("chevron-right"),
  }) as HTMLButtonElement;

  const shuffleBtn = h(
    "button",
    {
      class: "btn shuffle-btn",
      title: "Mélanger l'ordre des cartes",
      onclick: () => {
        shuffled = !shuffled;
        shuffleBtn.classList.toggle("active", shuffled);
        cards = order();
        index = 0;
        lastDir = 0;
        renderSlot();
      },
    },
    [h("span", { class: "chip-icon", html: iconSvg("shuffle") }), h("span", {}, ["Mélanger"])],
  ) as HTMLButtonElement;

  const container = h("div", { class: "deck" }, []);

  function renderSlot(): void {
    clear(slot);
    // Pose la classe directionnelle AVANT d'inserer la carte : l'animation
    // d'entree (deck-in-l / deck-in-r) part du cote d'ou l'on vient.
    slot.classList.remove("dragging", "settle", "from-left", "from-right");
    if (lastDir > 0) slot.classList.add("from-right");
    else if (lastDir < 0) slot.classList.add("from-left");
    lastDir = 0;
    slot.append(cardElement(cards[index], ref, { expanded: false, onChange: renderSlot }));
    counter.innerHTML = "";
    counter.append(h("b", {}, [String(index + 1)]), ` / ${String(cards.length)}`);
    gaugeFill.style.width = `${((index + 1) / cards.length) * 100}%`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === cards.length - 1;
    // Revient tout en haut : titre, menu, fleches et carte restent a la meme
    // position d'une carte a l'autre.
    window.scrollTo({ top: 0 });
  }

  function go(delta: number): void {
    const next = index + delta;
    if (next < 0 || next >= cards.length) return;
    index = next;
    lastDir = delta;
    renderSlot();
  }

  /**
   * Sortie animee : la carte active part sur le cote oppose, puis la suivante
   * entre par l'animation directionnelle. Sans mouvement si reduced motion.
   */
  function flyOut(delta: number): void {
    const next = index + delta;
    if (next < 0 || next >= cards.length) return;
    const inner = slot.firstElementChild as HTMLElement | null;
    if (!inner || reducedMotion()) {
      go(delta);
      return;
    }
    slot.classList.add("settle");
    inner.style.transform = `translateX(${delta * -110}%) rotate(${delta * -6}deg)`;
    inner.style.opacity = "0";
    setTimeout(() => go(delta), 190);
  }

  prevBtn.addEventListener("click", () => flyOut(-1));
  nextBtn.addEventListener("click", () => flyOut(1));

  container.append(
    h("div", { class: "cards-toolbar" }, [
      themeSelect(themeFilter, ref.themes, (val) => navigate(`#/cartes/${ref.id}${val ? `?theme=${val}` : ""}`)),
      shuffleBtn,
    ]),
    // Barre de navigation AU-DESSUS de la carte : sa position ne depend pas de
    // la hauteur (variable) de la carte.
    h("div", { class: "deck-controls" }, [prevBtn, counter, nextBtn]),
    h("div", { class: "deck-gauge", "aria-hidden": "true" }, [gaugeFill]),
    h("div", { class: "deck-viewport" }, [h("div", { class: "deck-stack" }, [slot])]),
    h("p", { class: "deck-hint" }, [h("span", {}, ["Glissez la carte ou utilisez les flèches"])]),
  );

  // ---- Drag au pointeur (tactile ET souris) ----
  // La carte suit le geste horizontal (translation + rotation legere). Le drag
  // ne demarre qu'au-dela d'un petit seuil pour laisser vivre clics et scroll
  // vertical (touch-action: pan-y).
  let startX = 0;
  let dx = 0;
  let dragging = false;
  let pointerId = -1;
  slot.style.touchAction = "pan-y";

  function innerCard(): HTMLElement | null {
    return slot.firstElementChild as HTMLElement | null;
  }

  slot.addEventListener("pointerdown", (e) => {
    // Ne pas detourner les elements interactifs de la carte.
    const t = e.target as HTMLElement;
    if (t.closest("button, a, textarea, input, select")) return;
    startX = e.clientX;
    dx = 0;
    pointerId = e.pointerId;
    dragging = false;
  });
  slot.addEventListener("pointermove", (e) => {
    if (e.pointerId !== pointerId) return;
    dx = e.clientX - startX;
    if (!dragging && Math.abs(dx) > 10) {
      dragging = true;
      slot.classList.add("dragging");
      slot.setPointerCapture(pointerId);
    }
    if (dragging) {
      const inner = innerCard();
      if (inner) inner.style.transform = `translateX(${dx}px) rotate(${dx * 0.03}deg)`;
    }
  });
  function endDrag(): void {
    if (pointerId === -1) return;
    pointerId = -1;
    if (!dragging) return;
    dragging = false;
    slot.classList.remove("dragging");
    const inner = innerCard();
    // Glisser vers la gauche = carte suivante (elle arrive de la droite).
    const delta = dx < 0 ? 1 : -1;
    const can = delta === 1 ? index < cards.length - 1 : index > 0;
    if (Math.abs(dx) > 90 && can) {
      flyOut(delta);
    } else if (inner) {
      // Retour elastique a la position de repos.
      slot.classList.add("settle");
      inner.style.transform = "";
      setTimeout(() => slot.classList.remove("settle"), 280);
    }
  }
  slot.addEventListener("pointerup", endDrag);
  slot.addEventListener("pointercancel", endDrag);

  // Clavier (PC) : fleches gauche / droite. Un seul gestionnaire global actif.
  if (deckKeyHandler) window.removeEventListener("keydown", deckKeyHandler);
  deckKeyHandler = (e: KeyboardEvent) => {
    if (!document.body.contains(container)) return;
    const tag = (document.activeElement?.tagName || "").toLowerCase();
    if (tag === "textarea" || tag === "input" || tag === "select") return;
    if (e.key === "ArrowRight") flyOut(1);
    else if (e.key === "ArrowLeft") flyOut(-1);
  };
  window.addEventListener("keydown", deckKeyHandler);

  renderSlot();
  return container;
}

export function cardView(cardId: string, _rerender: () => void): HTMLElement {
  const found = getCard(cardId);
  if (!found) return notFound();
  const { card, ref } = found;
  const view = h("div", { class: "view" }, []);
  const slot = h("div", { class: "deck-card" }, []);
  const render = () => {
    clear(slot);
    slot.append(cardElement(card, ref, { expanded: true, onChange: render }));
  };
  view.append(
    h("div", { class: "breadcrumb" }, [h("a", { href: `#/cartes/${ref.id}` }, ["← Toutes les cartes"])]),
    slot,
  );
  render();
  return view;
}
