/**
 * Dev tool: generate placeholder SVG images ke public/images/placeholder/
 * Jalankan: node scripts/gen-placeholders.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'images', 'placeholder');
mkdirSync(OUT, { recursive: true });

const svg = (label, w = 1200, h = 675, bg = '#e5eaf0', fg = '#0f766e') =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect x="20" y="20" width="${w - 40}" height="${h - 40}" fill="none" stroke="${fg}" stroke-width="4" rx="16" stroke-dasharray="12 10"/>
  <text x="50%" y="46%" font-family="system-ui,sans-serif" font-size="34" font-weight="800" fill="${fg}" text-anchor="middle">${label}</text>
  <text x="50%" y="58%" font-family="system-ui,sans-serif" font-size="20" fill="#6b7280" text-anchor="middle">placeholder — ganti dengan foto riil</text>
</svg>`;

const files = {
  'hero.svg': 'Interior Batam',
  'pilar-1.svg': 'Pilar 1: Kitchen Set',
  'pilar-2.svg': 'Pilar 2: Rumah Subsidi',
  'pilar-3.svg': 'Pilar 3: Apartemen',
  'pilar-4.svg': 'Pilar 4: Ruang Tamu',
  'pilar-5.svg': 'Pilar 5: Komersial',
  'article.svg': 'Artikel Interior Batam',
};

for (let i = 1; i <= 30; i++) {
  files[`article-${String(i).padStart(2, '0')}.svg`] = `Artikel ${String(i).padStart(2, '0')}`;
}

for (const [name, label] of Object.entries(files)) {
  writeFileSync(join(OUT, name), svg(label), 'utf8');
}

console.log(`Generated ${Object.keys(files).length} placeholder SVGs in ${OUT}`);
