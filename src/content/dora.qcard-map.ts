// Table de correspondance EXPLICITE question de QCM -> fiche de revision (DORA).
// Chaque question est rattachee a une fiche EXISTANTE du meme theme. Aucune
// heuristique au runtime. Une mauvaise reponse fait passer la fiche en "a revoir".

export const DORA_QCARD_MAP: Record<string, string[]> = {
  // socle
  "q-dora-nature": ["dora-reglement-direct"],
  "q-dora-date": ["dora-reglement-direct"],
  "q-dora-piliers": ["dora-quoi"],
  "q-dora-nis2-articulation": ["dora-lex-specialis"],
  "q-dora-2556": ["dora-dir-accompagnement"],
  // perimetre
  "q-dora-entites": ["dora-perimetre-entites"],
  "q-dora-prestataires-tic": ["dora-perimetre-entites"],
  "q-dora-proportionnalite": ["dora-proportionnalite"],
  "q-dora-micro": ["dora-exclusions-micro"],
  // risques
  "q-dora-organe-direction": ["dora-gouvernance"],
  "q-dora-formation-direction": ["dora-gouvernance"],
  "q-dora-cadre-revue": ["dora-cadre-gestion-risque"],
  "q-dora-fonction-controle": ["dora-cadre-gestion-risque"],
  "q-dora-sauvegarde": ["dora-continuite-sauvegarde"],
  "q-dora-post-incident": ["dora-apprentissage-communication"],
  // incidents
  "q-dora-enregistrement": ["dora-incidents-processus"],
  "q-dora-classification": ["dora-incidents-classification"],
  "q-dora-delais": ["dora-incidents-notification"],
  "q-dora-rapports": ["dora-incidents-notification"],
  "q-dora-cybermenace": ["dora-cybermenaces-volontaire"],
  "q-dora-clients": ["dora-incidents-notification"],
  // tests
  "q-dora-tests-qui": ["dora-tests-programme"],
  "q-dora-tests-freq": ["dora-tests-programme"],
  "q-dora-tlpt-qui": ["dora-tlpt"],
  "q-dora-tlpt-freq": ["dora-tlpt"],
  "q-dora-tlpt-env": ["dora-tlpt"],
  // tiers
  "q-dora-externalisation": ["dora-tiers-responsabilite"],
  "q-dora-registre": ["dora-registre-informations"],
  "q-dora-contrats": ["dora-contrats"],
  "q-dora-critiques": ["dora-prestataires-critiques"],
  // partage
  "q-dora-partage": ["dora-partage-infos"],
  "q-dora-partage-notif": ["dora-partage-infos"],
};
