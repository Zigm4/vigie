// Utilitaires d'animation de Vigie. Tout respecte prefers-reduced-motion :
// si l'utilisateur refuse le mouvement, les valeurs finales sont posees sans
// transition (aucune information ne depend de l'animation).

/** true si l'utilisateur prefere un mouvement reduit. */
export function reducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Compteur anime : fait defiler un nombre de 0 a `target` dans `el`.
 * `format` permet d'habiller la valeur (suffixe %, separateurs, ...).
 */
export function countUp(
  el: HTMLElement,
  target: number,
  opts: { duration?: number; format?: (n: number) => string } = {},
): void {
  const format = opts.format ?? ((n) => String(n));
  if (reducedMotion() || target === 0) {
    el.textContent = format(target);
    return;
  }
  const duration = opts.duration ?? 900;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    // easeOutCubic : demarre vite, se pose en douceur.
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = format(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Pose l'index de cascade `--i` sur une liste d'elements et la classe
 * `reveal` : le CSS decale l'entree de chacun (apparition en escalier).
 */
export function staggerReveal(els: (HTMLElement | null)[]): void {
  let i = 0;
  for (const el of els) {
    if (!el) continue;
    el.classList.add("reveal");
    el.style.setProperty("--i", String(i++));
  }
}

/**
 * Anneau de progression SVG (score QCM). Renvoie l'element pret a inserer ;
 * le trace s'anime de 0 a `pct` via stroke-dashoffset au prochain frame.
 */
export function progressRing(pct: number, label: string, sub: string): HTMLElement {
  const R = 70;
  const CIRC = 2 * Math.PI * R;
  const wrap = document.createElement("div");
  wrap.className = "ring-wrap";
  wrap.innerHTML =
    `<svg width="158" height="158" viewBox="0 0 158 158" aria-hidden="true">` +
    `<defs><linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent-2)"/>` +
    `</linearGradient></defs>` +
    `<circle class="ring-track" cx="79" cy="79" r="${R}"/>` +
    `<circle class="ring-val" cx="79" cy="79" r="${R}" stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC}"/>` +
    `</svg>` +
    `<div class="ring-center"><span class="big-score">${label}</span>` +
    `<span class="big-score-sub">${sub}</span></div>`;
  const val = wrap.querySelector(".ring-val") as SVGCircleElement;
  const offset = CIRC * (1 - Math.max(0, Math.min(100, pct)) / 100);
  if (reducedMotion()) {
    val.style.transition = "none";
    val.setAttribute("stroke-dashoffset", String(offset));
  } else {
    // Double rAF : laisse le navigateur peindre l'etat initial avant la transition.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => val.setAttribute("stroke-dashoffset", String(offset))),
    );
  }
  return wrap;
}
