// Page "A propos" (vie privee, palette, import/export) et page introuvable.

import { h } from "../dom.ts";
import {
  getSessionId,
  exportState,
  importState,
  resetState,
  getTheme,
  setTheme,
  THEMES,
} from "../store.ts";

/** Apercu de couleur de chaque palette (pastille du nuancier). Les ids
 *  stockes (blue/cyan/green) sont historiques, les teintes actuelles different. */
const SWATCH: Record<string, string> = {
  blue: "linear-gradient(135deg, #c3f53c, #4ef0c0)",
  cyan: "linear-gradient(135deg, #6ee7f3, #a5f3fc)",
  green: "linear-gradient(135deg, #ff9d5c, #ffc24b)",
};

/** Declenche le telechargement d'un fichier texte (JSON) en local. */
function downloadJson(filename: string, text: string): void {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = h("a", { href: url, download: filename }) as HTMLAnchorElement;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** Champ de fichier (cache) pour importer une progression depuis un fichier JSON. */
function importInput(rerender: () => void): HTMLElement {
  return h("input", {
    type: "file",
    id: "import-file",
    accept: "application/json,.json",
    class: "visually-hidden",
    onchange: (e: Event) => {
      const input = e.currentTarget as HTMLInputElement;
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const ok = importState(String(reader.result));
        alert(ok ? "Progression importée." : "Fichier invalide.");
        if (ok) rerender();
      };
      reader.readAsText(file);
      input.value = ""; // permet de reimporter le meme fichier plus tard
    },
  });
}

export function notFound(): HTMLElement {
  return h("div", { class: "view" }, [
    h("span", { class: "kicker" }, ["Erreur 404"]),
    h("h1", {}, ["Introuvable"]),
    h("p", { class: "muted" }, ["Ce contenu n'existe pas (ou plus)."]),
    h("a", { href: "#/", class: "btn" }, ["← Accueil"]),
  ]);
}

export function aboutView(rerender: () => void): HTMLElement {
  const current = getTheme();

  return h("div", { class: "view" }, [
    h("span", { class: "kicker" }, ["Vigie"]),
    h("h1", {}, ["À propos"]),
    h("div", { class: "callout" }, [
      h("strong", {}, ["Contenu non officiel. "]),
      "Vigie est un outil pédagogique privé. Le contenu est tiré de sources publiques officielles, mais ne se substitue pas aux textes d'origine, qui font seuls foi. Vérifiez toujours la source citée.",
    ]),

    // ---- Apparence ----
    h("h2", { class: "section-title" }, ["Apparence"]),
    h("p", { class: "tiny muted" }, ["Choisissez la palette d'accent (mémorisée sur cet appareil)."]),
    h(
      "div",
      { class: "cfg-row" },
      THEMES.map((t) =>
        h(
          "button",
          {
            class: current === t.id ? "chip active" : "chip",
            onclick: () => {
              setTheme(t.id);
              rerender();
            },
          },
          [h("span", { class: "swatch", style: `background:${SWATCH[t.id]}` }), t.label],
        ),
      ),
    ),

    // ---- Vie privee et donnees ----
    h("h2", { class: "section-title" }, ["Vie privée & données"]),
    h("div", { class: "callout" }, [
      h("strong", {}, ["Rien n'est stocké sur un serveur. "]),
      "Vigie n'a aucun backend : aucune donnée ne quitte votre appareil. Il n'y a ni compte, ni authentification, ni cookie, ni traceur, ni publicité.",
    ]),
    h("ul", { class: "bullets" }, [
      h("li", {}, ["Aucune requête réseau pour vos données : tout est traité localement, dans votre navigateur."]),
      h("li", {}, ["Fonctionne hors-ligne une fois chargé (application installable)."]),
      h("li", {}, ["Aucune collecte, aucun profilage, aucune mesure d'audience."]),
    ]),

    h("h3", { class: "about-sub" }, ["Comment la sauvegarde fonctionne"]),
    h("p", { class: "muted" }, [
      "Votre progression et vos annotations sont enregistrées dans le ",
      h("strong", {}, ["stockage local (localStorage)"]),
      " de ce navigateur, sur cet appareil uniquement. Sont conservés : les cartes épinglées, les surlignages, les notes, les réponses de QCM (pour le mode « à revoir »), le niveau de maîtrise des cartes, et la palette choisie.",
    ]),
    h("ul", { class: "bullets" }, [
      h("li", {}, ["Ces données restent sur l'appareil : elles ne sont pas synchronisées entre vos appareils."]),
      h("li", {}, [
        "Effacer les données de navigation (ou le stockage du site) supprime définitivement votre progression.",
      ]),
      h("li", {}, ["Aucune expiration automatique côté serveur : il n'y a pas de serveur."]),
    ]),
    h("p", { class: "tiny muted" }, [
      "Identifiant de session local : ",
      h("code", {}, [getSessionId()]),
      ". Il sert uniquement à étiqueter la sauvegarde locale et n'est transmis nulle part.",
    ]),

    h("h3", { class: "about-sub" }, ["Transférer ou réinitialiser"]),
    h("p", { class: "tiny muted" }, [
      "Pour déplacer votre progression vers un autre appareil ou navigateur : exportez un fichier, puis importez-le. ",
    ]),
    importInput(rerender),
    h("div", { class: "action-row" }, [
      h(
        "button",
        {
          class: "btn",
          onclick: () => {
            const stamp = new Date().toISOString().slice(0, 10);
            downloadJson(`vigie-progression-${stamp}.json`, exportState());
          },
        },
        ["Exporter (fichier)"],
      ),
      h(
        "button",
        {
          class: "btn",
          onclick: () => document.getElementById("import-file")?.click(),
        },
        ["Importer un fichier"],
      ),
      h(
        "button",
        {
          class: "btn danger",
          onclick: () => {
            if (confirm("Effacer toute la progression locale ? Action irréversible.")) {
              resetState();
              rerender();
            }
          },
        },
        ["Réinitialiser"],
      ),
    ]),

    h("h2", { class: "section-title" }, ["Sources & licence"]),
    h("p", { class: "tiny muted" }, [
      "Contenu fondé sur des sources publiques (Légifrance, SGDSN, ANSSI). Le guide ANSSI-PG-075 est sous Licence Ouverte v2.0 (Etalab). Chaque carte et question cite sa source.",
    ]),
  ]);
}
