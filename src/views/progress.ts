// Page "Progression" : synthese locale de l'avancement.
//   - bandeau de metriques globales (compteurs animes) ;
//   - par referentiel : barres animees cartes acquises / QCM reussis ;
//   - par theme : classement des themes les plus a l'aise et a renforcer.
// Toutes les donnees viennent du stockage local (aucun calcul cote serveur).
// Les barres demarrent a 0 et s'animent vers leur valeur au prochain frame.

import { h } from "../dom.ts";
import { getState, type PersistedState } from "../store.ts";
import { REFERENTIELS } from "../content/index.ts";
import { countUp, reducedMotion, staggerReveal } from "../motion.ts";
import type { Referentiel } from "../types.ts";

/** Pose la largeur cible d'une barre au prochain frame (transition CSS). */
function animateWidth(fill: HTMLElement, pct: number): void {
  if (reducedMotion()) {
    fill.style.transition = "none";
    fill.style.width = `${pct}%`;
    return;
  }
  requestAnimationFrame(() => requestAnimationFrame(() => (fill.style.width = `${pct}%`)));
}

/** Barre de progression legendee (valeur / total + pourcentage). */
function bar(value: number, total: number, cls: string): HTMLElement {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100);
  const fill = h("div", { class: `pbar-fill ${cls}` }, []);
  animateWidth(fill, pct);
  return h("div", { class: "pbar" }, [
    fill,
    h("span", { class: "pbar-label" }, [`${value}/${total} (${pct}%)`]),
  ]);
}

/** Tuile de metrique : grand chiffre anime + libelle. */
function metric(
  value: number,
  label: string,
  tone: "ok" | "accent" | "warn" | "muted" = "accent",
  format?: (n: number) => string,
): HTMLElement {
  const val = h("div", { class: `metric-value tone-${tone}` }, ["0"]);
  countUp(val, value, { format });
  return h("div", { class: "metric" }, [val, h("div", { class: "metric-label" }, [label])]);
}

interface ThemeStat {
  id: string;
  title: string;
  cardsAcq: number;
  cardsRev: number;
  cardsTotal: number;
  qCorrect: number;
  qAttempted: number;
  qTotal: number;
  /** Score de maitrise 0-100, ou null si le theme n'a aucune activite. */
  mastery: number | null;
}

/** Calcule les statistiques par theme d'un referentiel. */
function themeStats(ref: Referentiel, st: Readonly<PersistedState>): ThemeStat[] {
  return ref.themes.map((t) => {
    const cards = ref.cards.filter((c) => c.themeId === t.id);
    const qcm = ref.qcm.filter((q) => q.themeId === t.id);
    const cardsAcq = cards.filter((c) => st.cards[c.id] === 2).length;
    const cardsRev = cards.filter((c) => st.cards[c.id] === 1).length;
    const qAttempted = qcm.filter((q) => st.qcm[q.id]).length;
    const qCorrect = qcm.filter((q) => st.qcm[q.id]?.lastCorrect).length;

    // Maitrise : moyenne des signaux disponibles (ratio de cartes acquises et
    // taux de reussite aux QCM tentes). Null si le theme n'a jamais ete touche.
    const parts: number[] = [];
    if (cards.length > 0) parts.push(cardsAcq / cards.length);
    if (qAttempted > 0) parts.push(qCorrect / qAttempted);
    const touched = cardsAcq > 0 || cardsRev > 0 || qAttempted > 0;
    const mastery = touched && parts.length ? Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100) : null;

    return {
      id: t.id,
      title: t.title,
      cardsAcq,
      cardsRev,
      cardsTotal: cards.length,
      qCorrect,
      qAttempted,
      qTotal: qcm.length,
      mastery,
    };
  });
}

/** Classe une maitrise en palier de couleur. */
function masteryTone(pct: number): "ok" | "accent" | "warn" {
  if (pct >= 70) return "ok";
  if (pct >= 40) return "accent";
  return "warn";
}

/** Ligne "theme" : titre, barre de maitrise coloree, detail chiffre. */
function themeRow(s: ThemeStat): HTMLElement {
  const pct = s.mastery ?? 0;
  const tone = masteryTone(pct);
  const detail: string[] = [];
  if (s.qAttempted > 0) detail.push(`QCM ${s.qCorrect}/${s.qAttempted} réussis`);
  if (s.cardsAcq > 0 || s.cardsTotal > 0) detail.push(`cartes ${s.cardsAcq}/${s.cardsTotal} acquises`);
  if (s.cardsRev > 0) detail.push(`${s.cardsRev} à revoir`);

  const fill = h("div", { class: `pbar-fill ${tone}` }, []);
  animateWidth(fill, pct);
  return h("div", { class: "theme-stat" }, [
    h("div", { class: "theme-stat-head" }, [
      h("span", { class: "theme-stat-title" }, [s.title]),
      h("span", { class: `theme-stat-pct tone-${tone}` }, [`${pct}%`]),
    ]),
    h("div", { class: "pbar pbar-sm" }, [fill]),
    detail.length ? h("div", { class: "theme-stat-detail tiny muted" }, [detail.join(" · ")]) : null,
  ]);
}

export function progressView(): HTMLElement {
  const st = getState();

  // Agregats globaux (tous referentiels confondus).
  let cardsAcq = 0;
  let cardsRev = 0;
  let cardsTotal = 0;
  let qAttempted = 0;
  let qCorrect = 0;
  let qTotal = 0;
  for (const ref of REFERENTIELS) {
    cardsTotal += ref.cards.length;
    cardsAcq += ref.cards.filter((c) => st.cards[c.id] === 2).length;
    cardsRev += ref.cards.filter((c) => st.cards[c.id] === 1).length;
    qTotal += ref.qcm.length;
    qAttempted += ref.qcm.filter((q) => st.qcm[q.id]).length;
    qCorrect += ref.qcm.filter((q) => st.qcm[q.id]?.lastCorrect).length;
  }
  const successRate = qAttempted > 0 ? Math.round((qCorrect / qAttempted) * 100) : 0;

  const blocks = REFERENTIELS.map((ref) => {
    const acquired = ref.cards.filter((c) => st.cards[c.id] === 2).length;
    const toReview = ref.cards.filter((c) => st.cards[c.id] === 1).length;
    const qcmIds = ref.qcm.map((q) => q.id);
    const qcmAttempted = qcmIds.filter((id) => st.qcm[id]).length;
    const qcmCorrect = qcmIds.filter((id) => st.qcm[id]?.lastCorrect).length;

    // Themes avec activite, classes du plus faible au plus solide.
    const stats = themeStats(ref, st)
      .filter((s) => s.mastery !== null)
      .sort((a, b) => (a.mastery ?? 0) - (b.mastery ?? 0));
    const strongest = stats.length ? stats[stats.length - 1] : null;
    const weakest = stats.length ? stats[0] : null;

    return h("section", { class: "progress-block panel" }, [
      h("h2", {}, [ref.shortName]),
      h("div", { class: "progress-line" }, [
        h("span", { class: "progress-cap" }, ["Cartes acquises"]),
        bar(acquired, ref.cards.length, "ok"),
      ]),
      toReview > 0 ? h("p", { class: "tiny muted" }, [`${toReview} carte(s) marquée(s) « à revoir »`]) : null,
      h("div", { class: "progress-line" }, [
        h("span", { class: "progress-cap" }, ["QCM réussis (dernière tentative)"]),
        bar(qcmCorrect, ref.qcm.length, "accent"),
      ]),
      h("p", { class: "tiny muted" }, [`${qcmAttempted}/${ref.qcm.length} question(s) tentée(s)`]),

      // ---- Repartition par theme ----
      stats.length === 0
        ? h("p", { class: "tiny muted theme-stat-empty" }, [
            "Répondez à des QCM ou marquez des cartes pour voir vos points forts et vos thèmes à renforcer.",
          ])
        : h("div", { class: "theme-stats" }, [
            strongest && weakest && strongest.id !== weakest.id
              ? h("div", { class: "theme-highlights" }, [
                  h("div", { class: "theme-highlight" }, [
                    h("span", { class: "theme-highlight-cap tone-ok" }, ["Plus à l'aise"]),
                    h("span", { class: "theme-highlight-name" }, [strongest.title]),
                  ]),
                  h("div", { class: "theme-highlight" }, [
                    h("span", { class: "theme-highlight-cap tone-warn" }, ["À renforcer"]),
                    h("span", { class: "theme-highlight-name" }, [weakest.title]),
                  ]),
                ])
              : null,
            h("h3", { class: "theme-stats-title" }, ["Maîtrise par thème"]),
            ...stats.map(themeRow),
          ]),
    ]);
  });
  staggerReveal(blocks);

  return h("div", { class: "view" }, [
    h("span", { class: "kicker" }, ["Suivi local"]),
    h("h1", {}, ["Progression"]),
    h("p", { class: "tiny muted" }, ["Données locales à cet appareil."]),

    // ---- Bandeau de metriques globales ----
    h("div", { class: "metric-grid" }, [
      metric(cardsAcq, `cartes acquises sur ${cardsTotal}`, "ok"),
      metric(cardsRev, "cartes à revoir", cardsRev > 0 ? "warn" : "muted"),
      qAttempted > 0
        ? metric(successRate, "réussite QCM (dernier essai)", "accent", (n) => `${n}%`)
        : h("div", { class: "metric" }, [
            h("div", { class: "metric-value tone-accent" }, ["N/A"]),
            h("div", { class: "metric-label" }, ["réussite QCM (dernier essai)"]),
          ]),
      metric(qAttempted, `questions tentées sur ${qTotal}`, "muted"),
    ]),

    // ---- Par referentiel ----
    ...blocks,
  ]);
}
