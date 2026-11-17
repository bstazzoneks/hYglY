export type CauseLink = { slug: string; es: string; en: string };

export const phase4Causes: CauseLink[] = [
  { slug: 'prediabetes', es: 'Prediabetes', en: 'Prediabetes' },
  {
    slug: 'dm2-temprana',
    es: 'Hipoglucemia temprana en diabetes tipo 2',
    en: 'Early type 2 diabetes hypoglycemia',
  },
  { slug: 'sindrome-metabolico', es: 'Síndrome metabólico', en: 'Metabolic syndrome' },
  { slug: 'sop', es: 'Síndrome de ovario poliquístico', en: 'Polycystic ovary syndrome' },
  { slug: 'obesidad', es: 'Obesidad', en: 'Obesity' },
  {
    slug: 'higado-graso-metabolico',
    es: 'Enfermedad hepática metabólica asociada a disfunción metabólica',
    en: 'Metabolic dysfunction-associated steatotic liver disease',
  },
  {
    slug: 'diabetes-tratada-desajuste',
    es: 'Desajuste en diabetes tratada',
    en: 'Mis-timed diabetes treatment',
  },
  {
    slug: 'fibrosis-quistica-diabetes',
    es: 'Hipoglucemia posprandial por diabetes relacionada con fibrosis quística',
    en: 'Postprandial hypoglycemia in cystic fibrosis-related diabetes',
  },
];
