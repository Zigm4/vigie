// Coque de l'application : barre superieure unique (marque + navigation inline
// sur PC + acces "A propos"), et barre d'onglets flottante en bas sur mobile.
// Le CSS masque la navigation non pertinente selon la largeur.

import { h } from "../dom.ts";
import type { Route } from "../router.ts";
import { getState } from "../store.ts";
import { iconSvg, type IconName } from "./icons.ts";

interface NavItem {
  label: string;
  icon: IconName;
  hash: string;
  match: (r: Route) => boolean;
}

const NAV: NavItem[] = [
  { label: "Accueil", icon: "home", hash: "#/", match: (r) => r.name === "home" || r.name === "ref" },
  { label: "Cartes", icon: "cards", hash: "#/cartes", match: (r) => r.name === "cards" || r.name === "card" },
  { label: "QCM", icon: "qcm", hash: "#/qcm", match: (r) => r.name === "qcm" },
  { label: "Repères", icon: "repere", hash: "#/epingles", match: (r) => r.name === "pinned" },
  { label: "Progrès", icon: "progress", hash: "#/progression", match: (r) => r.name === "progress" },
];

/** Marque : trace "pulse" (monitoring) sur pastille degradee + nom + version. */
function brand(): HTMLElement {
  return h("a", { href: "#/", class: "brand", "aria-label": "Accueil Vigie" }, [
    h("span", {
      class: "brand-mark",
      html:
        '<svg viewBox="0 0 24 24" fill="none" stroke="#0c0d10" stroke-width="2.6" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M4 12h4l1.5-4.5 3 9L14.5 12H20"/></svg>',
    }),
    h("span", { class: "brand-name" }, ["Vigie"]),
    
  ]);
}

/** Badge du nombre d'epingles (affiche sur l'onglet Reperes). */
function pinBadge(item: NavItem): HTMLElement | null {
  const count = getState().pinned.length;
  if (item.icon !== "repere" || count === 0) return null;
  return h("span", { class: "nav-badge" }, [String(count)]);
}

/** Barre superieure : marque, navigation inline (PC), lien "A propos". */
export function appbar(route: Route): HTMLElement {
  return h("header", { class: "appbar" }, [
    h("div", { class: "appbar-inner" }, [
      brand(),
      h(
        "nav",
        { class: "appbar-nav", "aria-label": "Navigation principale" },
        NAV.map((item) =>
          h(
            "a",
            {
              href: item.hash,
              class: item.match(route) ? "nav-link active" : "nav-link",
              "aria-current": item.match(route) ? "page" : undefined,
            },
            [h("span", { class: "nav-icon", html: iconSvg(item.icon) }), item.label, pinBadge(item)],
          ),
        ),
      ),
      h("a", { href: "#/a-propos", class: "header-link", "aria-label": "À propos" }, [
        h("span", { html: iconSvg("info") }),
      ]),
    ]),
  ]);
}

/** Bandeau d'avertissement : une ligne fine sous la barre. */
export function disclaimer(): HTMLElement {
  return h("div", { class: "disclaimer", role: "note" }, [
    "Contenu pédagogique ",
    h("strong", {}, ["non officiel"]),
    ", tiré de sources publiques. Vérifiez toujours le texte d'origine.",
  ]);
}

/** Barre d'onglets flottante (mobile). */
export function tabbar(route: Route): HTMLElement {
  return h(
    "nav",
    { class: "tabbar", "aria-label": "Navigation principale" },
    NAV.map((item) =>
      h(
        "a",
        {
          href: item.hash,
          class: item.match(route) ? "tab-item active" : "tab-item",
          "aria-current": item.match(route) ? "page" : undefined,
        },
        [
          h("span", { class: "nav-icon", html: iconSvg(item.icon) }),
          h("span", { class: "tab-label" }, [item.label]),
          pinBadge(item),
        ],
      ),
    ),
  );
}
