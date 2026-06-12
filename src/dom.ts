// Petits utilitaires DOM, sans framework.

import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: true });

type Attrs = Record<string, string | number | boolean | EventListener | undefined>;

/** Crée un élément. Les clés commençant par "on" sont des écouteurs. */
export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Attrs = {},
  children: (Node | string | null | undefined)[] = [],
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === undefined || value === false) continue;
    if (key.startsWith("on") && typeof value === "function") {
      node.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
    } else if (key === "class") {
      node.className = String(value);
    } else if (key === "html") {
      node.innerHTML = String(value);
    } else {
      node.setAttribute(key, String(value));
    }
  }
  for (const child of children) {
    if (child == null) continue;
    node.append(child instanceof Node ? child : document.createTextNode(child));
  }
  return node;
}

export function clear(node: HTMLElement): void {
  node.replaceChildren();
}

/** Markdown -> HTML pour le contenu DE CONFIANCE (corpus écrit par nous). */
export function mdTrusted(src: string): string {
  return marked.parse(src) as string;
}

/** Crée un nœud à partir de HTML (le HTML doit déjà être sûr). */
export function fromHtml(html: string, tag: keyof HTMLElementTagNameMap = "div"): HTMLElement {
  const wrap = document.createElement(tag);
  wrap.innerHTML = html;
  return wrap;
}
