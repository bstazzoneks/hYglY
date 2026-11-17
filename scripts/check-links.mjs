import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
if (!fs.existsSync(dist)) {
  console.error('dist does not exist. Run npm run build first.');
  process.exit(1);
}

const errors = [];
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) htmlFiles.push(file);
  }
}

walk(dist);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const hrefs = [...html.matchAll(/(?:href|src)="([^"#]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|data:)/.test(href) || href.startsWith('javascript:')) continue;
    const clean = decodeURIComponent(href.split('?')[0]);
    if (clean.startsWith('#')) continue;

    let target;
    if (clean.startsWith('/')) {
      const rootRelative = clean.replace(/^\/hYglY(?=\/|$)/, '').replace(/^\/hygly(?=\/|$)/, '');
      target = path.join(dist, rootRelative);
    } else {
      target = path.resolve(path.dirname(file), clean);
    }

    if (
      !fs.existsSync(target) &&
      !fs.existsSync(`${target}.html`) &&
      !fs.existsSync(path.join(target, 'index.html'))
    ) {
      errors.push(`${path.relative(root, file)}: broken link "${href}"`);
    }
  }
}

fs.mkdirSync(path.join(root, 'reports'), { recursive: true });
fs.writeFileSync(
  path.join(root, 'reports/broken-links.json'),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      htmlFilesChecked: htmlFiles.length,
      errors,
    },
    null,
    2,
  ),
);

console.log(`Checked ${htmlFiles.length} HTML files.`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
