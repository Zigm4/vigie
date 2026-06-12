// Vue QCM en deux temps :
//   1. Un ecran de configuration : choix du theme, du format (10 / 20 / tout)
//      et du mode (melange ou "a revoir en priorite").
//   2. Le moteur de quiz : chaque question GLISSE vers la gauche en sortant et
//      la suivante entre depuis la droite (classes q-in / q-exit), la barre de
//      progression et le score s'animent, l'anneau de score conclut la serie.
// La configuration est encodee dans la query du hash (?theme=&len=&mode=&go=1),
// ce qui rend l'etat partageable et compatible avec le routage statique.

import { h, mdTrusted, fromHtml, clear } from "../dom.ts";
import { getReferentiel, resolveSources, cardIdsForQuestion, REFERENTIELS } from "../content/index.ts";
import { referentielChooser } from "./chooser.ts";
import { getQueryParam, navigate } from "../router.ts";
import { themeSelect } from "../ui/controls.ts";
import type { QcmQuestion, Referentiel } from "../types.ts";
import { exigenceBadge } from "../ui/exigence.ts";
import { sourcesBlock } from "../ui/sources.ts";
import { recordQcm, getState, setCardLevel } from "../store.ts";
import { progressRing, reducedMotion } from "../motion.ts";
import { notFound } from "./misc.ts";

type Mode = "melange" | "revoir";

export function qcmView(refId: string | undefined): HTMLElement {
  if (!refId) {
    if (REFERENTIELS.length === 1) refId = REFERENTIELS[0].id;
    else return referentielChooser("qcm");
  }
  const ref = getReferentiel(refId);
  if (!ref) return notFound();
  if (ref.qcm.length === 0) {
    return h("div", { class: "view" }, [
      h("h1", {}, ["QCM"]),
      h("p", { class: "muted" }, ["Aucune question disponible pour ce référentiel."]),
    ]);
  }

  const go = getQueryParam("go");
  const theme = getQueryParam("theme") || "";
  const len = getQueryParam("len") || "20";
  const mode = (getQueryParam("mode") as Mode) || "melange";

  if (!go) return configView(ref, { theme, len, mode });
  return runnerView(ref, { theme, len, mode });
}

// --------------------------------------------------------------------------
// Ecran de configuration
// --------------------------------------------------------------------------

function cfgUrl(refId: string, p: { theme: string; len: string; mode: string; go?: boolean }): string {
  const q = new URLSearchParams();
  if (p.theme) q.set("theme", p.theme);
  q.set("len", p.len);
  q.set("mode", p.mode);
  if (p.go) q.set("go", "1");
  return `#/qcm/${refId}?${q.toString()}`;
}

function pool(ref: Referentiel, theme: string): QcmQuestion[] {
  return theme ? ref.qcm.filter((q) => q.themeId === theme) : ref.qcm;
}

function wrongCount(ref: Referentiel, theme: string): number {
  const st = getState().qcm;
  return pool(ref, theme).filter((q) => st[q.id] && st[q.id].lastCorrect === false).length;
}

function configView(ref: Referentiel, cfg: { theme: string; len: string; mode: string }): HTMLElement {
  const available = pool(ref, cfg.theme).length;
  const wrong = wrongCount(ref, cfg.theme);

  // Bouton segmente. `disabled` grise sans rendre cliquable.
  const segBtn = (key: "len" | "mode", value: string, label: string, disabled = false) => {
    const active = cfg[key] === value;
    return h(
      "a",
      {
        href: disabled ? undefined : cfgUrl(ref.id, { ...cfg, [key]: value }),
        class: "cfg-seg-item" + (active ? " active" : "") + (disabled ? " disabled" : ""),
        "aria-disabled": disabled ? "true" : undefined,
      },
      [label],
    );
  };

  // Formats chiffres proposes, bornes au nombre reellement disponible.
  const presets = [10, 20, 30].filter((n) => n < available);
  const isPreset = presets.some((n) => String(n) === cfg.len) || cfg.len === "tout";

  // Champ "nombre precis" : tout entier entre 1 et le total disponible. La
  // valeur n'est affichee que lorsqu'elle ne correspond pas a un prereglage.
  const customInput = h("input", {
    type: "number",
    class: "cfg-number",
    min: 1,
    max: available,
    placeholder: "Nb",
    value: !isPreset && cfg.len ? cfg.len : "",
    "aria-label": "Nombre précis de questions",
    onchange: (e: Event) => {
      const raw = parseInt((e.currentTarget as HTMLInputElement).value, 10);
      if (!Number.isFinite(raw) || raw < 1) return;
      const n = Math.min(raw, available);
      navigate(cfgUrl(ref.id, { ...cfg, len: String(n) }));
    },
  }) as HTMLInputElement;

  // En mode "a revoir", il faut au moins une question ratee pour demarrer.
  const startable = cfg.mode === "revoir" ? wrong > 0 : available > 0;

  const field = (label: string, control: HTMLElement, hint?: HTMLElement | null) =>
    h("div", { class: "cfg-field" }, [h("span", { class: "cfg-label" }, [label]), control, hint ?? null]);

  return h("div", { class: "view qcm-config" }, [
    h("div", { class: "breadcrumb" }, [h("a", { href: `#/ref/${ref.id}` }, [`← ${ref.shortName}`])]),
    h("div", { class: "config-card panel" }, [
      h("span", { class: "kicker" }, ["Paramètres de session"]),
      h("h1", { class: "config-title" }, ["Configurer le QCM"]),
      h("p", { class: "config-sub muted" }, ["Thème, format et mode de révision."]),

      field(
        "Thème",
        themeSelect(cfg.theme, ref.themes, (val) => navigate(cfgUrl(ref.id, { ...cfg, theme: val }))),
      ),

      field(
        "Format",
        h("div", { class: "cfg-seg" }, [
          ...presets.map((n) => segBtn("len", String(n), String(n))),
          segBtn("len", "tout", "Tout"),
          h("div", { class: "cfg-number-wrap" + (!isPreset && cfg.len ? " active" : "") }, [
            customInput,
          ]),
        ]),
      ),

      field(
        "Mode",
        h("div", { class: "cfg-seg" }, [
          segBtn("mode", "melange", "Mélange"),
          segBtn("mode", "revoir", `À revoir (${wrong})`),
        ]),
        cfg.mode === "revoir"
          ? h("p", { class: "cfg-hint tiny muted" }, [
              wrong > 0
                ? `${wrong} question(s) ratée(s) seront posées en priorité, complétées par des questions non vues.`
                : "Aucune question ratée pour ce périmètre. Choisissez « Mélange » ou répondez d'abord à quelques questions.",
            ])
          : h("p", { class: "cfg-hint tiny muted" }, [`${available} question(s) disponibles pour ce périmètre.`]),
      ),

      startable
        ? h("a", { href: cfgUrl(ref.id, { ...cfg, go: true }), class: "btn primary config-start" }, [
            "Commencer le QCM",
          ])
        : h("button", { class: "btn primary config-start", disabled: true }, ["Commencer le QCM"]),
    ]),
  ]);
}

// --------------------------------------------------------------------------
// Construction de la liste de questions
// --------------------------------------------------------------------------

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildList(ref: Referentiel, cfg: { theme: string; len: string; mode: string }): QcmQuestion[] {
  const base = pool(ref, cfg.theme);
  let ordered: QcmQuestion[];

  if (cfg.mode === "revoir") {
    const st = getState().qcm;
    const failed: QcmQuestion[] = [];
    const unseen: QcmQuestion[] = [];
    const ok: QcmQuestion[] = [];
    for (const q of base) {
      const e = st[q.id];
      if (e && e.lastCorrect === false) failed.push(q);
      else if (!e) unseen.push(q);
      else ok.push(q);
    }
    // Ratees d'abord, puis non vues, puis le reste ; melange dans chaque groupe.
    ordered = [...shuffle(failed), ...shuffle(unseen), ...shuffle(ok)];
  } else {
    ordered = shuffle(base);
  }

  if (cfg.len === "tout") return ordered;
  const n = parseInt(cfg.len, 10) || 20;
  return ordered.slice(0, n);
}

// --------------------------------------------------------------------------
// Moteur de quiz
// --------------------------------------------------------------------------

function runnerView(ref: Referentiel, cfg: { theme: string; len: string; mode: string }): HTMLElement {
  const container = h("div", { class: "view qcm" }, []);
  const stage = h("div", { class: "qcm-stage" }, []);
  const progressRow = h("div", { class: "qcm-progress-row" }, []);
  const barFill = h("i", {});
  const progress = h("div", { class: "qcm-progress" }, [
    progressRow,
    h("div", { class: "qbar", "aria-hidden": "true" }, [barFill]),
  ]);

  const themeLabel = cfg.theme ? ref.themes.find((t) => t.id === cfg.theme)?.title : "Tous les thèmes";

  let questions: QcmQuestion[] = [];
  let index = 0;
  let score = 0;
  let answered = 0;

  function renderProgress(): void {
    clear(progressRow);
    progressRow.append(
      h("span", {}, [`Q ${Math.min(index + 1, questions.length)} / ${questions.length}`]),
      h("span", { class: "qcm-score" }, [
        h("span", { class: "score-ok" }, [`OK ${score}`]),
        h("span", { class: "score-ko" }, [`KO ${answered - score}`]),
      ]),
    );
    barFill.style.width = questions.length ? `${(answered / questions.length) * 100}%` : "0";
  }

  function renderQuestion(): void {
    clear(stage);
    if (index >= questions.length) {
      stage.append(renderSummary(ref, cfg, score, questions.length, restart));
      renderProgress();
      return;
    }
    stage.append(questionCard(ref, questions[index], onAnswered, onNext));
    renderProgress();
    window.scrollTo({ top: 0 });
  }

  function onAnswered(correct: boolean): void {
    answered++;
    if (correct) score++;
    renderProgress();
  }

  /** Passage a la question suivante : sortie animee puis entree de la suivante. */
  function onNext(): void {
    const current = stage.querySelector(".qcm-card");
    if (current && !reducedMotion()) {
      current.classList.add("q-exit");
      setTimeout(() => {
        index++;
        renderQuestion();
      }, 190);
    } else {
      index++;
      renderQuestion();
    }
  }

  function restart(): void {
    questions = buildList(ref, cfg);
    index = 0;
    score = 0;
    answered = 0;
    renderQuestion();
  }

  container.append(
    h("div", { class: "breadcrumb" }, [h("a", { href: `#/qcm/${ref.id}` }, ["← Configurer le QCM"])]),
    h("span", { class: "kicker" }, [
      `${themeLabel} / ${cfg.mode === "revoir" ? "à revoir en priorité" : "mélange"}`,
    ]),
    h("h1", {}, ["QCM"]),
    progress,
    stage,
  );
  restart();
  return container;
}

/** Prefixe lettre des options (A., B., C., ...). */
const KEYS = "ABCDEFGH";

function questionCard(
  ref: Referentiel,
  q: QcmQuestion,
  onAnswered: (correct: boolean) => void,
  onNext: () => void,
): HTMLElement {
  // L'ordre des options est melange a chaque presentation : sans cela, la bonne
  // reponse serait toujours a la meme position (biais du contenu genere).
  const opts = shuffle(q.options);
  const isMulti = opts.filter((o) => o.correct).length > 1;
  const selected = new Set<number>();
  let validated = false;

  const optionsWrap = h("div", { class: "qcm-options" }, []);
  const optionButtons: HTMLButtonElement[] = opts.map((opt, i) => {
    const btn = h(
      "button",
      {
        class: "qcm-option",
        style: `--i:${i}`,
        onclick: () => {
          if (validated) return;
          if (isMulti) {
            selected.has(i) ? selected.delete(i) : selected.add(i);
            btn.classList.toggle("selected", selected.has(i));
          } else {
            selected.clear();
            selected.add(i);
            optionButtons.forEach((b, j) => b.classList.toggle("selected", j === i));
          }
        },
      },
      [h("span", { class: "opt-key" }, [KEYS[i] ?? "?"]), h("span", {}, [opt.text])],
    );
    return btn;
  });
  optionButtons.forEach((b) => optionsWrap.append(b));

  const feedback = h("div", { class: "qcm-feedback", hidden: true }, []);

  const validateBtn = h(
    "button",
    {
      class: "btn primary",
      onclick: () => {
        if (validated) return;
        if (selected.size === 0) return;
        validated = true;
        const correct = opts.every((opt, i) => opt.correct === selected.has(i));
        optionButtons.forEach((b, i) => {
          if (opts[i].correct) b.classList.add("correct");
          else if (selected.has(i)) b.classList.add("wrong");
          b.disabled = true;
        });
        recordQcm(q.id, correct);
        // Reponse fausse : la ou les cartes de revision liees (table explicite
        // question -> fiche) passent en "a revoir".
        if (!correct) {
          for (const cid of cardIdsForQuestion(q)) setCardLevel(cid, 1);
        }
        onAnswered(correct);
        clear(feedback);
        const src = sourcesBlock(resolveSources(ref, q.sources));
        feedback.append(
          h("div", { class: correct ? "verdict ok" : "verdict ko" }, [
            correct ? "✓ Correct" : "✗ Incorrect",
          ]),
          exigenceBadge(q.exigence) ?? h("span", {}, []),
          fromHtml(mdTrusted(q.explanation), "div"),
        );
        if (src) feedback.append(src);
        feedback.hidden = false;
        validateBtn.hidden = true;
        nextBtn.hidden = false;
        nextBtn.focus();
      },
    },
    ["Valider"],
  );

  const nextBtn = h("button", { class: "btn", hidden: true, onclick: () => onNext() }, ["Suivant →"]);

  return h("div", { class: "qcm-card panel" }, [
    isMulti ? h("div", { class: "qcm-multi" }, ["Plusieurs réponses possibles"]) : null,
    h("h2", { class: "qcm-question" }, [q.question]),
    optionsWrap,
    h("div", { class: "action-row" }, [validateBtn, nextBtn]),
    feedback,
  ]);
}

function renderSummary(
  ref: Referentiel,
  cfg: { theme: string; len: string; mode: string },
  score: number,
  total: number,
  restart: () => void,
): HTMLElement {
  const pct = total ? Math.round((score / total) * 100) : 0;
  return h("div", { class: "qcm-summary" }, [
    h("span", { class: "kicker" }, ["Fin de session"]),
    h("h2", {}, ["Terminé"]),
    progressRing(pct, `${pct}%`, `${score} / ${total}`),
    h("div", { class: "action-row" }, [
      h("button", { class: "btn primary", onclick: () => restart() }, ["Rejouer cette série"]),
      h("a", { href: `#/qcm/${ref.id}`, class: "btn" }, ["Nouveau QCM"]),
      h("a", { href: `#/cartes/${ref.id}${cfg.theme ? `?theme=${cfg.theme}` : ""}`, class: "btn" }, [
        "Réviser les cartes",
      ]),
    ]),
  ]);
}
