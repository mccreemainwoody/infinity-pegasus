// ----------------------
// READ ME!
// ----------------------
//
// Both ID and names can be used for both subjects and marks (marks ID are their order in the list)
// Subjects or marks with a coefficient of 1 (or equivalent) can be omitted
// Coefficient does not have to sum up to 1, since the sum of the coefficients will be used
// No need to specify module coefficients, since they are already retrieved from the PDF
// Also, regex are supported for marks name :^) (which means '[' must be escaped !)

// TODO: This was imported from past year, it will need to be updated when the syllabus is released

export default {
  '[IAET] IA - Entreprise': {
    NLP1: { 'NLP1.*': 1 },
    NLP2: { 'NLP2.*': 1 },
  },
  '[IAOT8] IA - Outils et Techniques': {
    PYBD: { 'PROJET': 1 },
  },
  '[IAML8] IA - Machine Learning': {
    IREN: { 'PROJECT': 1 },
    REMA1: { 'CONTROLE': 1 },
  },
  '[SG8] - Sciences de base': {
    PBS2: {
      'PBS2_DM.*': 0.4,
      'PBS2_PARTIEL_.*': 0.6,
    },
    LOFO: {
      'LOFO_CC.*': 1/3,
      'LOFO_EXAM.*': 2/3,
    },
  },
  '[INFO8] - Informatique': {
    DEPLOY_S8: { 
        'PROJECT': 0.8,
        '*': 0.02
    },
  },
  '[MCE8] - Management et Connaissances pour l\'Entreprise': {
    COIN: { 'COIN.*': 1 },
    GRS_S8: { 'GRS_S8.*': 1 },
    DBRE: { 'DBRE.*': 1 },
    MCRIN: { 'MCRIN.*': 1 },
    MPRO: { 'MPRO.*': 1 },
    BIWI: { 'BIWI.*': 1 },
    RE_S8: { 'RE_S8.*': 1 },
    PFE_S8: { 'PFE_S8.*': 1 },
  },
};
