import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fuenteSchema = z.object({
  titulo: z.string(),
  url: z.string().url(),
  anio: z.number().int(),
});

const causaSchema = z.object({
  titulo: z.string(),
  resumen: z.string(),
  causa: z.string(),
  grupo: z.string(),
  subgrupo: z.string().optional(),
  audiencia: z.enum(['paciente', 'medico']),
  idioma: z.enum(['es', 'en']),
  tipo_hipoglucemia: z.enum(['postprandial', 'ayuno', 'ambas']),
  frecuencia_postprandial: z.enum(['habitual', 'menos_habitual', 'rara', 'controvertida']),
  fuentes: z.array(fuenteSchema),
  ultima_revision: z.coerce.date(),
  revisado_por: z.string(),
  nivel_evidencia: z.enum([
    'guia',
    'revision',
    'serie_de_casos',
    'reporte_de_casos',
    'opinion_de_expertos',
  ]),
  estado: z.enum(['borrador', 'en_revision', 'revisado']),
});

const paginasSchema = z.object({
  titulo: z.string(),
  idioma: z.enum(['es', 'en']),
  resumen: z.string().optional(),
  ultima_revision: z.coerce.date().optional(),
});

export const collections = {
  causas: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/causas' }),
    schema: causaSchema,
  }),
  paginas: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/paginas' }),
    schema: paginasSchema,
  }),
};
