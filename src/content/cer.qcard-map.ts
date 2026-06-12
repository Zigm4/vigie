// Table de correspondance EXPLICITE question de QCM -> fiche de revision (CER).
// Chaque question est rattachee a une fiche EXISTANTE du meme theme. Aucune
// heuristique au runtime. Une mauvaise reponse fait passer la fiche en "a revoir".

export const CER_QCARD_MAP: Record<string, string[]> = {
  // socle
  "q-cer-nature": ["cer-quoi"],
  "q-cer-objet": ["cer-quoi", "cer-articulation-nis2"],
  "q-cer-abroge": ["cer-abroge-2008-114"],
  "q-cer-transposition": ["cer-abroge-2008-114"],
  "q-cer-coordination": ["cer-articulation-nis2"],
  "q-cer-secteurs-exemptes": ["cer-articulation-nis2"],
  // entites
  "q-cer-designation": ["cer-recensement", "cer-definitions"],
  "q-cer-recensement-date": ["cer-recensement"],
  "q-cer-def-resilience": ["cer-definitions"],
  "q-cer-secteurs-nb": ["cer-secteurs"],
  "q-cer-strategie": ["cer-cadre-national"],
  // obligations
  "q-cer-eval-delai": ["cer-eval-risques-entite"],
  "q-cer-mesures-nature": ["cer-mesures"],
  "q-cer-antecedents": ["cer-antecedents"],
  "q-cer-notif-delai": ["cer-notification"],
  "q-cer-notif-qui": ["cer-notification"],
  // controle-ue
  "q-cer-ecip": ["cer-ecip"],
  "q-cer-supervision": ["cer-supervision"],
  "q-cer-sanctions": ["cer-sanctions"],
  // france
  "q-cer-fr-statut": ["cer-fr-loi"],
  "q-cer-fr-oiv": ["cer-fr-saiv"],
};
