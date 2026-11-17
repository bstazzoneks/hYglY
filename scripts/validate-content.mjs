import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const causesRoot = path.join(root, 'src/content/causas');
const required = [
  'titulo',
  'resumen',
  'causa',
  'grupo',
  'audiencia',
  'idioma',
  'tipo_hipoglucemia',
  'frecuencia_postprandial',
  'fuentes',
  'ultima_revision',
  'revisado_por',
  'nivel_evidencia',
  'estado',
];

const errors = [];
const pending = [];
const causes = fs.existsSync(causesRoot)
  ? fs.readdirSync(causesRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory())
  : [];

for (const cause of causes) {
  const causeDir = path.join(causesRoot, cause.name);
  for (const lang of ['es', 'en']) {
    const langDir = path.join(causeDir, lang);
    if (!fs.existsSync(langDir)) {
      errors.push(`${cause.name}: missing language directory ${lang}`);
      continue;
    }

    const audienceFiles =
      lang === 'es'
        ? [
            ['paciente.md', 'paciente'],
            ['medico.md', 'medico'],
          ]
        : [
            ['patient.md', 'paciente'],
            ['clinician.md', 'medico'],
          ];

    for (const [fileName, audience] of audienceFiles) {
      const file = path.join(langDir, fileName);
      if (!fs.existsSync(file)) {
        errors.push(`${cause.name}/${lang}: missing ${audienciaName(audience)}`);
        continue;
      }

      const source = fs.readFileSync(file, 'utf8');
      const parsed = matter(source);
      for (const field of required) {
        if (
          !(field in parsed.data) ||
          parsed.data[field] === undefined ||
          parsed.data[field] === null
        ) {
          errors.push(`${relative(file)}: missing required frontmatter field "${field}"`);
        }
      }

      if (parsed.data.audiencia !== audience) {
        errors.push(`${relative(file)}: audiencia must be "${audience}"`);
      }
      if (parsed.data.idioma !== lang) {
        errors.push(`${relative(file)}: idioma must be "${lang}"`);
      }
      if (!Array.isArray(parsed.data.fuentes) || parsed.data.fuentes.length === 0) {
        errors.push(`${relative(file)}: fuentes must contain at least one source`);
      }
      if (
        String(parsed.data.revisado_por || '')
          .toUpperCase()
          .includes('PENDIENTE')
      ) {
        pending.push(relative(file));
      }
    }
  }
}

function audienciaName(audience) {
  return audience === 'paciente' ? 'patient/paciente' : 'clinician/médico';
}

function relative(file) {
  return path.relative(root, file).replaceAll(path.sep, '/');
}

const report = {
  generatedAt: new Date().toISOString(),
  causesChecked: causes.length,
  errors,
  pendingMedicalReview: pending,
};

fs.mkdirSync(path.join(root, 'reports'), { recursive: true });
fs.writeFileSync(
  path.join(root, 'reports/content-validation.json'),
  JSON.stringify(report, null, 2),
);

console.log(`Validated ${causes.length} causes.`);
console.log(`Pending medical review: ${pending.length}`);

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}
