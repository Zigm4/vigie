// Table de correspondance EXPLICITE question de QCM -> fiche de revision (NIS2).
// Chaque question est rattachee a une fiche EXISTANTE du meme theme. Aucune
// heuristique au runtime. Une mauvaise reponse fait passer la fiche en "a revoir".

export const NIS2_QCARD_MAP: Record<string, string[]> = {
  // socle
  "q-nis2-nature": ["nis2-quoi"],
  "q-nis2-remplace": ["nis2-remplace-nis1"],
  "q-nis2-applicable-fr": ["nis2-pas-applicable-fr"],
  "q-nis2-saiv": ["nis2-superpose-saiv"],
  "q-nis2-dora": ["nis2-trio-ue"],
  // entites
  "q-nis2-ee-ei-obligations": ["nis2-ee-ei"],
  "q-nis2-ee-ei-diff": ["nis2-ee-ei"],
  "q-nis2-annexes": ["nis2-secteurs"],
  "q-nis2-enregistrement": ["nis2-enregistrement"],
  // obligations
  "q-nis2-art20-qui": ["nis2-gouvernance"],
  "q-nis2-art21-approche": ["nis2-gestion-risques"],
  "q-nis2-art21-socle": ["nis2-gestion-risques"],
  "q-nis2-notif-24": ["nis2-notification"],
  "q-nis2-notif-final": ["nis2-notification"],
  // controle
  "q-nis2-supervision": ["nis2-supervision"],
  "q-nis2-sanction-ee": ["nis2-sanctions"],
  "q-nis2-sanction-ei": ["nis2-sanctions"],
  // france
  "q-nis2-fr-statut": ["nis2-fr-loi"],
  "q-nis2-fr-recyf": ["nis2-fr-recyf"],
  "q-nis2-fr-vigueur": ["nis2-fr-entree-vigueur"],
  // entites
  "q-nis2-champ": ["nis2-champ"],
  "q-nis2-champ-sanstaille": ["nis2-champ"],
  "q-nis2-secteurs-detail": ["nis2-secteurs"],
  // obligations
  "q-nis2-incident-seuil": ["nis2-incident-important"],
  "q-nis2-chaine": ["nis2-chaine-appro"],
  "q-nis2-certif": ["nis2-certification"],
  // cadre-ue
  "q-nis2-autorites": ["nis2-autorites"],
  "q-nis2-csirt": ["nis2-csirt"],
  "q-nis2-cooperation": ["nis2-cooperation"],
  "q-nis2-registre": ["nis2-registre"],
  // controle
  "q-nis2-execution-dirigeant": ["nis2-execution"],
  "q-nis2-execution-graduee": ["nis2-execution"],
  // extension 2026-06-12
  "q-nis2-def-incident": ["nis2-definitions"],
  "q-nis2-def-incident-evite": ["nis2-definitions"],
  "q-nis2-def-vulnerabilite": ["nis2-definitions"],
  "q-nis2-exclusions": ["nis2-exclusions"],
  "q-nis2-exemption-faculte": ["nis2-exclusions"],
  "q-nis2-proportionnalite": ["nis2-proportionnalite"],
  "q-nis2-niveau-adapte": ["nis2-proportionnalite"],
  "q-nis2-art21-mfa": ["nis2-gestion-risques"],
  "q-nis2-notif-responsabilite": ["nis2-notification-clients"],
  "q-nis2-notif-destinataires": ["nis2-notification-clients"],
  "q-nis2-dns-collecte": ["nis2-dns-whois"],
  "q-nis2-dns-delai": ["nis2-dns-whois"],
  "q-nis2-volontaire-qui": ["nis2-notification-volontaire"],
  "q-nis2-volontaire-priorite": ["nis2-notification-volontaire"],
  "q-nis2-normes-imposees": ["nis2-normalisation"],
  "q-nis2-strategie": ["nis2-strategie-nationale"],
  "q-nis2-cyclone-role": ["nis2-eu-cyclone"],
  "q-nis2-cyclone-secretariat": ["nis2-eu-cyclone"],
  "q-nis2-formation-direction": ["nis2-gouvernance"],
  "q-nis2-sanctions-plancher": ["nis2-sanctions"],
};
