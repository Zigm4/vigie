// Ecran de selection du referentiel, affiche avant les cartes ou les QCM
// lorsqu'il existe plusieurs referentiels. On revise un referentiel a la fois.

import { h } from "../dom.ts";
import { REFERENTIELS } from "../content/index.ts";
import { refCard } from "./home.ts";
import { staggerReveal } from "../motion.ts";

export function referentielChooser(kind: "cartes" | "qcm"): HTMLElement {
  const cards = REFERENTIELS.map((ref) => refCard(ref, `#/${kind}/${ref.id}`));
  staggerReveal(cards);
  return h("div", { class: "view" }, [
    h("span", { class: "kicker" }, ["Sélection"]),
    h("h1", {}, [kind === "qcm" ? "QCM" : "Cartes de révision"]),
    h("p", { class: "muted" }, ["Choisissez un référentiel à réviser."]),
    h("div", { class: "ref-grid" }, cards),
  ]);
}
