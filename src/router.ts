// Routeur minimal basé sur le hash (#/...). Compatible hébergement statique pur
// (GitHub Pages) : pas de réécriture serveur nécessaire, les liens profonds
// fonctionnent partout.

export type Route =
  | { name: "home" }
  | { name: "ref"; refId: string }
  | { name: "reading"; refId: string; docId?: string }
  | { name: "cards"; refId?: string }
  | { name: "card"; cardId: string }
  | { name: "qcm"; refId?: string }
  | { name: "pinned" }
  | { name: "progress" }
  | { name: "about" };

export function parseHash(): Route {
  const rawFull = location.hash.replace(/^#\/?/, "");
  const raw = rawFull.split("?")[0];
  const parts = raw.split("/").filter(Boolean).map(decodeURIComponent);

  if (parts.length === 0) return { name: "home" };

  switch (parts[0]) {
    case "ref":
      return parts[1] ? { name: "ref", refId: parts[1] } : { name: "home" };
    case "lecture":
      return parts[1]
        ? { name: "reading", refId: parts[1], docId: parts[2] }
        : { name: "home" };
    case "cartes":
      return { name: "cards", refId: parts[1] };
    case "carte":
      return parts[1] ? { name: "card", cardId: parts[1] } : { name: "home" };
    case "qcm":
      return { name: "qcm", refId: parts[1] };
    case "epingles":
      return { name: "pinned" };
    case "progression":
      return { name: "progress" };
    case "a-propos":
      return { name: "about" };
    default:
      return { name: "home" };
  }
}

export function navigate(hash: string): void {
  if (location.hash === hash) {
    // Force un re-render même si le hash est identique.
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    location.hash = hash;
  }
}

export function onRouteChange(fn: (route: Route) => void): void {
  window.addEventListener("hashchange", () => fn(parseHash()));
}

/** Lit un paramètre de requête dans le hash (ex. #/cartes/x?theme=y). */
export function getQueryParam(key: string): string | null {
  const q = location.hash.split("?")[1];
  if (!q) return null;
  return new URLSearchParams(q).get(key);
}
