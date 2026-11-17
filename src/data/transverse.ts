export type TransversePage = {
  slugEs: string;
  slugEn: string;
  titleEs: string;
  titleEn: string;
  sectionsEs: Array<{ title: string; text: string }>;
  sectionsEn: Array<{ title: string; text: string }>;
};

export const transversePages: TransversePage[] = [
  {
    slugEs: 'que-es',
    slugEn: 'what-is',
    titleEs: 'Qué es la hipoglucemia reactiva',
    titleEn: 'What is reactive hypoglycemia',
    sectionsEs: [
      {
        title: 'Definición',
        text: 'Es una disminución de glucosa relacionada con una comida o un cambio posprandial. Debe documentarse con una medición baja que coincida con síntomas.',
      },
      {
        title: 'Diferencia con el ayuno',
        text: 'En ayunas, los síntomas aparecen sin una relación clara con una comida. El contexto temporal ayuda al médico a definir el mecanismo.',
      },
      {
        title: 'Mitos frecuentes',
        text: 'No se confirma por síntomas aislados. Una lectura casera no reemplaza una medición clínica validada.',
      },
    ],
    sectionsEn: [
      {
        title: 'Definition',
        text: 'It is a glucose decrease related to a meal or postprandial change. It should be documented by a low measurement that matches symptoms.',
      },
      {
        title: 'Difference from fasting',
        text: 'During fasting, symptoms occur without a clear meal relationship. Timing helps clinicians define the mechanism.',
      },
      {
        title: 'Common myths',
        text: 'Symptoms alone do not confirm it. A home reading does not replace a validated clinical measurement.',
      },
    ],
  },
  {
    slugEs: 'diagnostico',
    slugEn: 'diagnosis',
    titleEs: 'Cómo se diagnostica',
    titleEn: 'How it is diagnosed',
    sectionsEs: [
      {
        title: 'Triada de Whipple',
        text: 'Deben coincidir síntomas compatibles, glucosa baja y mejora al elevar la glucosa.',
      },
      {
        title: 'Prueba de comida mixta',
        text: 'Puede estudiarse la respuesta posprandial bajo supervisión especializada. No es útil sin documentación clínica.',
      },
      {
        title: 'Laboratorio',
        text: 'Puede medirse insulina, péptido C, proinsulina, beta-hidroxibutirato y anticuerpos anti-insulina. Se estudia el tamizaje de sulfonilureas y la respuesta al glucagón según el caso.',
      },
      {
        title: 'Imagen y pruebas especiales',
        text: 'La imagen y estudios especiales buscan tumores o localizaciones pancreáticas. Su uso depende de la sospecha clínica.',
      },
    ],
    sectionsEn: [
      {
        title: 'Whipple’s triad',
        text: 'Compatible symptoms, low glucose and symptom improvement after glucose rises should coincide.',
      },
      {
        title: 'Mixed-meal test',
        text: 'Postprandial responses may be studied in specialized supervised settings. It is not useful without clinical documentation.',
      },
      {
        title: 'Laboratory studies',
        text: 'Insulin, C-peptide, proinsulin, beta-hydroxybutyrate and insulin antibodies may be measured. Sulfonylurea screening and glucagon response depend on the case.',
      },
      {
        title: 'Imaging and special studies',
        text: 'Imaging and special studies seek tumors or pancreatic localization. Use depends on clinical suspicion.',
      },
    ],
  },
  {
    slugEs: 'algoritmo-diagnostico',
    slugEn: 'diagnostic-algorithm',
    titleEs: 'Algoritmo diagnóstico',
    titleEn: 'Diagnostic algorithm',
    sectionsEs: [
      {
        title: 'Diagrama',
        text: '1. ¿Hay síntomas compatibles? 2. ¿Hay glucosa baja confirmada durante los síntomas? 3. ¿Mejoran al elevar la glucosa? Si falta un elemento, revisar diagnósticos alternativos.',
      },
      {
        title: 'Alternativa en texto',
        text: 'No confirme hipoglucemia solo por síntomas o por una cifra aislada. Si se confirma, documente insulina endógena o exógena y revise alimentación, cirugía, fármacos y enfermedades asociadas.',
      },
    ],
    sectionsEn: [
      {
        title: 'Diagram',
        text: '1. Are symptoms compatible? 2. Is low glucose confirmed during symptoms? 3. Do symptoms improve as glucose rises? If an element is missing, review alternative diagnoses.',
      },
      {
        title: 'Text alternative',
        text: 'Do not confirm hypoglycemia from symptoms or one isolated value. If confirmed, document endogenous or exogenous insulin and review diet, surgery, medicines and associated conditions.',
      },
    ],
  },
  {
    slugEs: 'orientador',
    slugEn: 'cause-finder',
    titleEs: 'Qué causa podría ser',
    titleEn: 'What might be the cause',
    sectionsEs: [
      {
        title: 'Orientador educativo',
        text: 'Este orientador no realiza diagnósticos. Observe si los episodios siguen comidas, ayunos, cirugía, fármacos o enfermedades asociadas.',
      },
      {
        title: 'Preguntas',
        text: '¿La glucosa estuvo baja durante el síntoma? ¿Ocurre después de cirugía? ¿Usa insulina o secretagogos? ¿Hay antecedentes de enfermedad endocrina o autoinmune? Lleve las respuestas a su profesional.',
      },
    ],
    sectionsEn: [
      {
        title: 'Educational guide',
        text: 'This guide does not diagnose. Check whether episodes follow meals, fasting, surgery, medicines or associated conditions.',
      },
      {
        title: 'Questions',
        text: 'Was glucose low during symptoms? Did episodes follow surgery? Do you use insulin or secretagogues? Is there endocrine or autoimmune disease? Bring answers to a clinician.',
      },
    ],
  },
  {
    slugEs: 'episodio-agudo',
    slugEn: 'acute-episode',
    titleEs: 'Episodio agudo',
    titleEn: 'Acute episode',
    sectionsEs: [
      {
        title: 'Regla 15-15',
        text: 'Si está consciente y puede tragar, tome una fuente rápida de glucosa, espere 15 minutos y mida otra vez. Repita solo según el plan individual.',
      },
      {
        title: 'Glucagón',
        text: 'Use glucagón si su equipo indicó su preparación y otra persona sabe administrarlo. No lo dé por vía oral a una persona inconsciente.',
      },
      {
        title: 'Emergencias',
        text: 'Llame a emergencias ante convulsiones, pérdida del conocimiento o confusión persistente.',
      },
      {
        title: 'Familiares',
        text: 'Enséñeles dónde está el glucagón, cómo reconocer síntomas y cuándo llamar a emergencias.',
      },
    ],
    sectionsEn: [
      {
        title: '15-15 rule',
        text: 'If conscious and able to swallow, take a rapid glucose source, wait 15 minutes and recheck. Repeat only according to an individual plan.',
      },
      {
        title: 'Glucagon',
        text: 'Use glucagon if a care team prescribed a preparation and a caregiver knows how to administer it. Do not give oral food or fluid to an unconscious person.',
      },
      {
        title: 'Emergency care',
        text: 'Call emergency services for seizures, loss of consciousness or persistent confusion.',
      },
      {
        title: 'Family',
        text: 'Teach family members where glucagon is kept, how to recognize symptoms and when to call emergency services.',
      },
    ],
  },
];

const extraPagesEs = [
  [
    'tabla-comparativa-causas',
    'Tabla comparativa de causas',
    'Compara la relación temporal, el mecanismo y los estudios clave de cada causa. Consulte cada ficha antes de tomar decisiones clínicas.',
  ],
  [
    'tratamiento-alimentacion',
    'Tratamiento y alimentación general',
    'Las recomendaciones se individualizan. Las comidas deben mantener una distribución segura, sin dietas restrictivas automáticas.',
  ],
  [
    'ejercicio',
    'Ejercicio y actividad física',
    'Planifique actividad con el equipo médico si existen episodios frecuentes. Observe síntomas y mida glucosa cuando esté indicado.',
  ],
  [
    'embarazo-lactancia',
    'Embarazo y lactancia',
    'Derive a obstetricia y endocrinología. Los tratamientos y pruebas deben adaptarse a estos periodos.',
  ],
  [
    'ninos-adolescentes',
    'Niños y adolescentes',
    'Derivar a servicios pediátricos especializados. Las causas congénitas, medicamentos y alimentación requieren evaluación pediátrica.',
  ],
  [
    'adultos-mayores',
    'Adultos mayores',
    'Revise medicamentos, insuficiencia renal, alimentación y riesgo de caídas. El equipo debe adaptar los objetivos de seguridad.',
  ],
  [
    'conducir-trabajo-seguridad',
    'Conducir, trabajo y seguridad',
    'No conduzca ni opere maquinaria durante síntomas o glucosa baja. Informe a un profesional de la salud según las normas locales.',
  ],
  [
    'salud-mental',
    'Salud mental y apoyo emocional',
    'La ansiedad puede imitar síntomas. La incertidumbre diagnóstica también puede causar angustia; busque apoyo profesional sin asumir una causa.',
  ],
  [
    'familiares-cuidadores',
    'Familiares y cuidadores',
    'Aprendan a reconocer síntomas, preparar glucagón y actuar ante pérdida de conciencia. Mantengan datos de episodios y contactos médicos.',
  ],
  [
    'tarjeta-medica',
    'Tarjeta médica imprimible',
    'Imprima esta tarjeta y complete antecedentes, diagnóstico confirmado, medicamentos y contactos de emergencia.',
  ],
  [
    'diario',
    'Diario de glucosa y síntomas',
    'Anote hora, comida, glucosa, síntomas y recuperación. Lleve solo mediciones válidas y siga las instrucciones del equipo clínico.',
  ],
  [
    'que-llevar-consulta',
    'Qué llevar a la consulta',
    'Lleve lista de medicamentos, pruebas recientes, tiempos de episodios, comidas, cirugías y familiares disponibles para aportar información.',
  ],
  [
    'guia-atencion-primaria',
    'Guía para atención primaria',
    'Sospeche hipoglucemia ante síntomas compatibles y una medición baja simultánea. Derive para estudio endocrino si persiste o hay hiperinsulinismo endógeno.',
  ],
  [
    'glosario',
    'Glosario',
    'Glucosa: azúcar principal utilizada por el organismo. Insulina: hormona que ayuda a incorporar glucosa. Péptido C: marcador de insulina producida por el organismo.',
  ],
  [
    'faq',
    'Preguntas frecuentes',
    '¿Tener hambre después de comer confirma hipoglucemia? No. ¿Una lectura baja siempre necesita emergencias? Depende de síntomas, medición y contexto.',
  ],
  [
    'biblioteca',
    'Biblioteca de guías y artículos',
    'Use sociedades endocrinas, guías nacionales y PubMed. Verifique fecha, población y tipo de evidencia antes de aplicar una recomendación.',
  ],
  [
    'ensayos-clinicos',
    'Ensayos clínicos',
    'Puede buscar estudios relacionados en ClinicalTrials.gov. Participar requiere criterios, consentimiento y revisión independiente.',
  ],
  [
    'directorio-centros',
    'Directorio de especialistas y centros',
    'La información de centros debe verificarse por fecha. El directorio aún debe completarse con fuentes y permisos locales.',
  ],
  [
    'organizaciones-apoyo',
    'Organizaciones de pacientes y apoyo',
    'Busque organizaciones con información revisada por profesionales y políticas claras de privacidad. Evite fuentes comerciales sin respaldo.',
  ],
  [
    'novedades',
    'Novedades y cambios',
    'Esta sección registrará modificaciones importantes del contenido, correcciones y revisiones médicas.',
  ],
  [
    'metodologia',
    'Metodología',
    'El contenido se selecciona por fuente publicada, se clasifica por nivel de evidencia y pasa por revisión médica antes de cambiar su estado.',
  ],
  [
    'equipo-revisores',
    'Equipo y revisores médicos',
    'Las fichas muestran el revisor y estado. Los nombres reales solo deben añadirse después de aprobación médica documentada.',
  ],
  [
    'accesibilidad',
    'Accesibilidad',
    'hYglY busca cumplir WCAG 2.2 AA. Puede ajustar el tamaño del texto y usar navegación completa por teclado.',
  ],
  [
    'privacidad',
    'Privacidad',
    'Este sitio no usa cookies ni analítica de rastreo. No envía datos personales a servicios externos de búsqueda o analítica.',
  ],
  [
    'aviso-legal',
    'Aviso legal y descargo médico',
    'La información educativa no reemplaza una consulta individual. Ante síntomas graves consulte servicios de urgencias.',
  ],
  [
    'contacto',
    'Contacto',
    'Puede reportar una corrección desde el repositorio de GitHub o por el canal de contacto establecido por el proyecto.',
  ],
] as const;

const extraPagesEn = [
  [
    'cause-comparison-table',
    'Cause comparison table',
    'Compare timing, mechanism and key tests for each cause. Review each record before making clinical decisions.',
  ],
  [
    'general-treatment-nutrition',
    'General treatment and nutrition',
    'Recommendations are individualized. Meals should maintain a safe distribution without automatic restrictive diets.',
  ],
  [
    'exercise',
    'Exercise and physical activity',
    'Plan activity with the care team when episodes recur. Watch symptoms and measure glucose when directed.',
  ],
  [
    'pregnancy-breastfeeding',
    'Pregnancy and breastfeeding',
    'Seek obstetric and endocrine care. Tests and treatments should be adapted for these periods.',
  ],
  [
    'children-adolescents',
    'Children and adolescents',
    'Refer to specialized pediatric services. Congenital causes, medicines and nutrition require pediatric assessment.',
  ],
  [
    'older-adults',
    'Older adults',
    'Review medicines, kidney function, nutrition and fall risk. Adapt safety goals with the care team.',
  ],
  [
    'driving-work-safety',
    'Driving, work and safety',
    'Do not drive or operate machinery during symptoms or low glucose. Follow local rules and inform a clinician.',
  ],
  [
    'mental-health',
    'Mental health and emotional support',
    'Anxiety can mimic symptoms. Diagnostic uncertainty can also cause distress. Seek professional support without assuming one cause.',
  ],
  [
    'family-caregivers',
    'Family and caregivers',
    'Learn warning signs, glucagon use and emergency response. Keep episode details and medical contacts available.',
  ],
  [
    'medical-card',
    'Printable medical card',
    'Print this card and complete diagnoses, medicines and emergency contacts.',
  ],
  [
    'glucose-symptom-diary',
    'Glucose and symptom diary',
    'Record time, food, glucose, symptoms and recovery. Keep only valid measurements and follow clinical instructions.',
  ],
  [
    'prepare-for-appointment',
    'What to bring to the appointment',
    'Bring medicines, recent tests, episode timing, meals, surgical history and available family observations.',
  ],
  [
    'primary-care-guide',
    'Primary care guide',
    'Suspect hypoglycemia with compatible symptoms and simultaneous low glucose. Refer for endocrine testing if it persists or endogenous hyperinsulinism is suspected.',
  ],
  [
    'glossary',
    'Glossary',
    'Glucose: the main sugar used by the body. Insulin: a hormone that helps move glucose. C-peptide: a marker of insulin made by the body.',
  ],
  [
    'faq',
    'Frequently asked questions',
    'Does hunger after eating confirm hypoglycemia? No. Does low glucose always need emergency care? It depends on symptoms, measurement and context.',
  ],
  [
    'library',
    'Guides and article library',
    'Use endocrine societies, national guidelines and PubMed. Check date, population and evidence level before applying a recommendation.',
  ],
  [
    'clinical-trials',
    'Clinical trials',
    'Search related studies at ClinicalTrials.gov. Participation requires eligibility, consent and independent review.',
  ],
  [
    'specialist-directory',
    'Specialist and center directory',
    'Center information must have a verification date. The directory still needs locally verified entries and permissions.',
  ],
  [
    'patient-organizations',
    'Patient organizations and support',
    'Choose organizations with professionally reviewed information and clear privacy policies. Avoid unsupported commercial sources.',
  ],
  [
    'updates',
    'Updates and changes',
    'This section will document major content changes, corrections and medical reviews.',
  ],
  [
    'methodology',
    'Methodology',
    'Content is selected from published sources, classified by evidence level and medically reviewed before revision status changes.',
  ],
  [
    'reviewers',
    'Medical team and reviewers',
    'Records show reviewer and status. Real names should be added only after documented medical approval.',
  ],
  [
    'accessibility',
    'Accessibility',
    'hYglY seeks WCAG 2.2 AA conformance. Use text enlargement and full keyboard navigation.',
  ],
  [
    'privacy',
    'Privacy',
    'This site uses no cookies or tracking analytics. It sends no personal data to external search or analytics services.',
  ],
  [
    'legal-notice',
    'Legal notice and medical disclaimer',
    'Educational information does not replace an individual consultation. Seek emergency care for severe symptoms.',
  ],
  [
    'contact',
    'Contact',
    'Report a correction through the GitHub repository or the project contact channel.',
  ],
] as const;

export const extraEs = extraPagesEs.map(([slug, title, text]) => ({ slug, title, text }));
export const extraEn = extraPagesEn.map(([slug, title, text]) => ({ slug, title, text }));
