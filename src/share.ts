// Partage d'une carte de révision via un lien profond vers le corpus, sans
// backend : le lien (#/carte/<id>) pointe vers la carte dans Vigie. Le fragment
// d'URL n'est jamais envoyé au serveur, tout reste côté client.

/** Construit l'URL absolue partageable d'une carte du corpus (par id). */
export function buildCardLink(cardId: string): string {
  const base = location.origin + location.pathname;
  return `${base}#/carte/${encodeURIComponent(cardId)}`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
