// Point d'entree de Vigie : rendu par route dans une coque "editorial
// premium" (barre superieure + onglets mobiles), avec transition de vue animee
// (View Transitions API quand disponible, repli direct sinon).

import "./styles.css";
import { parseHash, onRouteChange, type Route } from "./router.ts";
import { appbar, tabbar, disclaimer } from "./ui/shell.ts";
import { clear, h } from "./dom.ts";
import { homeView } from "./views/home.ts";
import { refView } from "./views/ref.ts";
import { cardsView, cardView } from "./views/cards.ts";
import { qcmView } from "./views/qcm.ts";
import { pinnedView } from "./views/pinned.ts";
import { progressView } from "./views/progress.ts";
import { readingView } from "./views/reading.ts";
import { aboutView, notFound } from "./views/misc.ts";
import { getTheme } from "./store.ts";
import { reducedMotion } from "./motion.ts";

const app = document.getElementById("app")!;

function viewFor(route: Route, rerender: () => void): HTMLElement {
  switch (route.name) {
    case "home":
      return homeView();
    case "ref":
      return refView(route.refId);
    case "cards":
      return cardsView(route.refId, rerender);
    case "card":
      return cardView(route.cardId, rerender);
    case "qcm":
      return qcmView(route.refId);
    case "reading":
      return readingView(route.refId, route.docId, rerender);
    case "pinned":
      return pinnedView(rerender);
    case "progress":
      return progressView();
    case "about":
      return aboutView(rerender);
    default:
      return notFound();
  }
}

function paint(route: Route): void {
  // Applique la palette d'accent choisie (lue depuis le stockage local).
  document.documentElement.dataset.theme = getTheme();
  clear(app);
  const main = h("main", { class: "app-main" }, [viewFor(route, render)]);
  app.append(appbar(route), disclaimer(), main, tabbar(route));
  // Remonte en haut sauf pour les ancres de cartes profondes.
  if (route.name !== "card") window.scrollTo({ top: 0 });
}

/** Cle de vue : permet de distinguer changement de page et re-rendu interne. */
let lastKey = "";
function routeKey(route: Route): string {
  return JSON.stringify(route) + location.hash.split("?")[1];
}

function render(): void {
  const route = parseHash();
  const key = routeKey(route);
  const sameView = key === lastKey;
  lastKey = key;

  // Transition de vue native quand on change reellement de page : fondu/glisse
  // declare en CSS (::view-transition-*). Repli : rendu direct.
  const vt = (document as Document & { startViewTransition?: (cb: () => void) => void })
    .startViewTransition;
  if (!sameView && vt && !reducedMotion()) {
    vt.call(document, () => paint(route));
  } else {
    paint(route);
  }
}

onRouteChange(render);
render();
