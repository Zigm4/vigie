// Carte de revision v2 : panneau a crochets d'angle, couche courte visible,
// detail depliable avec animation de hauteur fluide (grid-template-rows).
// Les comportements (epingle, note, niveau de maitrise, lien) sont identiques
// a la v1 ; seul l'habillage change.

import type { ReviewCard, Referentiel } from "../types.ts";
import { h, mdTrusted, fromHtml } from "../dom.ts";
import { exigenceBadge } from "./exigence.ts";
import { sourcesBlock } from "./sources.ts";
import { iconSvg, type IconName } from "./icons.ts";
import { resolveSources } from "../content/index.ts";
import {
  isPinned,
  togglePin,
  getCardLevel,
  setCardLevel,
  getAnnotation,
  setAnnotation,
} from "../store.ts";
import { buildCardLink, copyToClipboard } from "../share.ts";

/** Carte de revision complete : couche courte visible, detail depliable. */
export function cardElement(
  card: ReviewCard,
  ref: Referentiel,
  opts: { expanded?: boolean; onChange?: () => void } = {},
): HTMLElement {
  const sources = resolveSources(ref, card.sources);
  const level = getCardLevel(card.id);

  const detail = h("div", { class: "card-detail" }, [
    // Note visible quand le detail ne peut pas reproduire le texte source verbatim.
    card.detailParaphrase
      ? h("p", { class: "detail-paraphrase" }, [
          card.detailNote ??
            "Reformulation fidèle, et non le texte intégral de la source (texte d'origine non reproduit ici). Se reporter à la source citée ci-dessous pour la formulation exacte.",
        ])
      : null,
    fromHtml(mdTrusted(card.detail), "div"),
    card.elementDeLangage
      ? h("div", { class: "edl" }, [
          h("div", { class: "edl-title" }, ["Élément de langage"]),
          h("p", {}, [card.elementDeLangage]),
        ])
      : null,
    sourcesBlock(sources),
  ]);

  // Pli anime : .fold passe de 0fr a 1fr (transition CSS), le contenu reste
  // dans le flux (pas de [hidden]), donc la hauteur s'anime sans calcul JS.
  const fold = h("div", { class: opts.expanded ? "fold open" : "fold" }, [
    h("div", { class: "fold-in" }, [detail]),
  ]);

  const togLabel = h("span", {}, [opts.expanded ? "Masquer le détail" : "Voir le détail"]);
  const toggleBtn = h(
    "button",
    {
      class: "btn-link card-toggle",
      "aria-expanded": String(Boolean(opts.expanded)),
      onclick: () => {
        const open = !fold.classList.contains("open");
        fold.classList.toggle("open", open);
        toggleBtn.setAttribute("aria-expanded", String(open));
        togLabel.textContent = open ? "Masquer le détail" : "Voir le détail";
      },
    },
    [h("span", { class: "tog-sign" }, ["+"]), togLabel],
  );

  return h("article", { class: "card panel", id: `card-${card.id}` }, [
    h("div", { class: "card-head" }, [
      h("h3", { class: "card-title" }, [card.title]),
      exigenceBadge(card.exigence),
    ]),
    h("p", { class: "card-short" }, [card.short]),
    toggleBtn,
    fold,
    annotationView(card.id, opts.onChange),
    cardActions(card, opts.onChange),
    levelControl(card.id, level, opts.onChange),
  ]);
}

/** Petit bouton d'action : icone SVG + libelle. */
function actionButton(
  icon: IconName,
  label: string,
  active: boolean,
  onClick: (btn: HTMLButtonElement) => void,
  title?: string,
): HTMLButtonElement {
  const btn = h(
    "button",
    {
      class: active ? "chip active" : "chip",
      title: title ?? label,
      onclick: () => onClick(btn),
    },
    [h("span", { class: "chip-icon", html: iconSvg(icon) }), h("span", {}, [label])],
  );
  return btn;
}

function cardActions(card: ReviewCard, onChange?: () => void): HTMLElement {
  const refresh = () => onChange?.();
  return h("div", { class: "card-actions" }, [
    actionButton("pin", isPinned(card.id) ? "Épinglé" : "Épingler", isPinned(card.id), () => {
      togglePin(card.id);
      refresh();
    }),
    actionButton(
      "note",
      getAnnotation(card.id) ? "Note" : "Annoter",
      Boolean(getAnnotation(card.id)),
      () => openNoteEditor(card.id, refresh),
      "Ajouter ou modifier une note",
    ),
    actionButton(
      "link",
      "Lien",
      false,
      async (btn) => {
        const ok = await copyToClipboard(buildCardLink(card.id));
        flash(btn, ok ? "Lien copié" : "Échec");
      },
      "Copier le lien vers cette carte (nécessite d'ouvrir Vigie)",
    ),
  ]);
}

/** Affiche brievement un message de confirmation sur un bouton, puis restaure. */
function flash(btn: HTMLButtonElement, msg: string): void {
  const span = btn.querySelector("span:last-child");
  if (!span) return;
  const prev = span.textContent;
  span.textContent = msg;
  setTimeout(() => {
    span.textContent = prev;
  }, 1600);
}

/** Bloc affichant la note attachee a un element, s'il y en a une. */
function annotationView(id: string, onChange?: () => void): HTMLElement | null {
  const note = getAnnotation(id);
  if (!note) return null;
  return h("div", { class: "annotation", id: `note-${id}` }, [
    h("div", { class: "annotation-head" }, [
      h("span", { class: "annotation-icon", html: iconSvg("note") }),
      h("span", { class: "annotation-label" }, ["Ma note"]),
      h(
        "button",
        { class: "btn-link tiny", onclick: () => openNoteEditor(id, onChange) },
        ["Modifier"],
      ),
    ]),
    h("p", { class: "annotation-text" }, [note]),
  ]);
}

/**
 * Ouvre un editeur de note inline juste sous l'element cible. La sauvegarde
 * persiste l'annotation puis declenche un re-rendu (onChange).
 */
export function openNoteEditor(id: string, onChange?: () => void): void {
  const anchor =
    document.getElementById(`card-${id}`) ||
    document.getElementById(id) ||
    document.getElementById(`note-${id}`);
  if (!anchor) return;
  // Evite d'ouvrir deux editeurs.
  if (anchor.querySelector(".note-editor")) return;

  const textarea = h("textarea", {
    class: "note-textarea",
    rows: 3,
    placeholder: "Votre note (visible uniquement sur cet appareil)…",
  }) as HTMLTextAreaElement;
  textarea.value = getAnnotation(id);

  const editor = h("div", { class: "note-editor" }, [
    textarea,
    h("div", { class: "note-editor-actions" }, [
      h(
        "button",
        {
          class: "btn primary tiny",
          onclick: () => {
            setAnnotation(id, textarea.value);
            onChange?.();
          },
        },
        ["Enregistrer"],
      ),
      h(
        "button",
        { class: "btn tiny", onclick: () => editor.remove() },
        ["Annuler"],
      ),
      getAnnotation(id)
        ? h(
            "button",
            {
              class: "btn danger tiny",
              onclick: () => {
                setAnnotation(id, "");
                onChange?.();
              },
            },
            ["Supprimer"],
          )
        : null,
    ]),
  ]);
  anchor.append(editor);
  textarea.focus();
}

// Deux bascules : rien n'est actif par defaut (niveau 0). Cliquer active le
// niveau ; recliquer sur le niveau actif le desactive (retour a "rien").
const LEVELS: { v: 1 | 2; label: string }[] = [
  { v: 1, label: "À revoir" },
  { v: 2, label: "Acquis" },
];

function levelControl(cardId: string, current: 0 | 1 | 2, onChange?: () => void): HTMLElement {
  return h("div", { class: "level-wrap" }, [
    h("span", { class: "level-caption" }, ["Maîtrise"]),
    h(
      "div",
      { class: "level-control", role: "group", "aria-label": "Niveau de maîtrise" },
      LEVELS.map((l) =>
        h(
          "button",
          {
            class: current === l.v ? `level level-${l.v} active` : `level level-${l.v}`,
            "aria-pressed": current === l.v ? "true" : "false",
            onclick: () => {
              setCardLevel(cardId, current === l.v ? 0 : l.v);
              onChange?.();
            },
          },
          [l.label],
        ),
      ),
    ),
  ]);
}
