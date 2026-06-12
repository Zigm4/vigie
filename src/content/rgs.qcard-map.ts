// Table de correspondance EXPLICITE question de QCM -> fiche de revision (RGS).
// Chaque question est rattachee a une fiche EXISTANTE du meme theme. Aucune
// heuristique au runtime. Une mauvaise reponse fait passer la fiche en "a revoir".

export const RGS_QCARD_MAP: Record<string, string[]> = {
  // socle
  "q-rgs-base-legale": ["rgs-quoi"],
  "q-rgs-etat-seulement": ["rgs-a-qui"],
  "q-rgs-teleservice": ["rgs-teleservice"],
  // demarche
  "q-rgs-etapes": ["rgs-demarche"],
  "q-rgs-homologation-facultative": ["rgs-homologation"],
  "q-rgs-homologation-teleservice": ["rgs-homologation"],
  "q-rgs-analyse-methode": ["rgs-analyse-risques"],
  "q-rgs-objectifs": ["rgs-analyse-risques"],
  // fonctions
  "q-rgs-techno": ["rgs-pas-de-techno"],
  "q-rgs-fonctions-liste": ["rgs-fonctions"],
  "q-rgs-niveaux-confusion": ["rgs-niveaux"],
  "q-rgs-horodatage-niveau": ["rgs-niveaux"],
  "q-rgs-cachet": ["rgs-signature-cachet"],
  "q-rgs-presomption": ["rgs-signature-cachet"],
  // produits-prestataires
  "q-rgs-qualif-recours": ["rgs-qualification-label"],
  "q-rgs-qualif-niveaux": ["rgs-qualification-produits"],
  "q-rgs-psco-categories": ["rgs-psco"],
  "q-rgs-psco-duree": ["rgs-psco"],
};
