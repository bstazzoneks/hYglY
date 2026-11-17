# hYglY

hYglY es una base de datos bilingüe sobre hipoglucemia reactiva postprandial.

## Requisitos

- Node.js 22.23.4 o posterior
- npm

## Desarrollo

```sh
npm install
npm run dev
```

## Compilacion

```sh
npm run build
npm run preview
```

La compilación ejecuta las validaciones de contenido, Astro Check, genera las páginas estáticas,
crea el índice Pagefind y revisa enlaces locales.

## Validaciones

```sh
npm run validate:content
npm run validate:links
npm run lint
npm run format:check
npm run test:a11y
```

Las validaciones generan informes en `reports/`:

- `content-validation.json`: paridad ES/EN, pares de audiencia y revisión pendiente.
- `broken-links.json`: enlaces locales rotos encontrados en `dist/`.

Las pruebas `pa11y` usan WCAG 2.2 nivel AA. El flujo las ejecuta contra un servidor local.

## GitHub Pages

El flujo de GitHub Actions valida y publica el sitio al hacer `push` a `main`.
En GitHub, configure **Settings > Pages > Build and deployment > Source** como **GitHub Actions**.
El sitio de este repositorio se publica en `https://bstazzoneks.github.io/hYglY/`.

Para generar manualmente el sitio del repositorio:

```sh
ASTRO_BASE=/hYglY/ SITE_URL=https://bstazzoneks.github.io npm run build
```

Para un sitio en el dominio raiz, use `ASTRO_BASE=/`.

La interfaz usa celestes pastel y azul Francia. Los colores de texto y controles mantienen
contraste WCAG AA tanto en modo claro como oscuro.

## Rutas previstas

- Espanol: `/es/`
- English: `/en/`
- Contenido clinico: `src/content/causas/<causa>/<es,en>/<paciente,medico>.md`
- Paginas transversales: `src/content/paginas/`

## Agregar una causa

1. Cree `src/content/causas/<causa>/es/paciente.md`.
2. Cree `src/content/causas/<causa>/es/medico.md`.
3. Cree las equivalentes `en/patient.md` y `en/clinician.md`.
4. Complete el frontmatter obligatorio indicado en `src/content.config.ts`.
5. Agregue una fuente real con título, URL y año.
6. Use `PENDIENTE DE REVISION MEDICA` hasta que exista revisión médica.
7. Ejecute `npm run build`.

No incluya dosis, valores de corte o referencias sin fuente publicada.

## Flujo de revisión médica

Las fichas comienzan en estado `borrador`. Solo un revisor médico autorizado debe cambiar
`estado: revisado` y completar su nombre y especialidad en `revisado_por`.

Las correcciones médicas deben incluir una fuente verificable y pasar las pruebas de CI.

## Revision medica

Las fichas nuevas deben usar estado `borrador`. No se deben publicar datos clinicos sin fuente.
Si falta una fuente confiable, use `PENDIENTE DE REVISION MEDICA`.
