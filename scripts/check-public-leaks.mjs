import fs from 'node:fs';
import path from 'node:path';

const roots = ['src', 'public', 'dist'].map((directory) => path.resolve(directory));
const blockedPatterns = [
  { label: 'supplier Chinese brand', pattern: /越飞/iu },
  { label: 'supplier English brand', pattern: /yuefei/iu },
  { label: 'supplier legal name', pattern: /东莞市越飞陶瓷科技有限公司/iu },
  { label: 'supplier English legal name', pattern: /dongguan\s+yuefei\s+ceramics\s+technology/iu },
  { label: 'supplier domain', pattern: /yhgtc\.net/iu },
  { label: 'supplier marketplace domain', pattern: /yftckj\.1688\.com/iu },
];
const ignoredExtensions = new Set(['.avif', '.gif', '.ico', '.jpeg', '.jpg', '.png', '.webp', '.woff', '.woff2']);
const matches = [];

const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });

for (const root of roots) {
  if (!fs.existsSync(root)) continue;

  for (const file of walk(root)) {
    if (ignoredExtensions.has(path.extname(file).toLowerCase())) continue;
    const contents = fs.readFileSync(file, 'utf8');

    for (const blocked of blockedPatterns) {
      if (blocked.pattern.test(contents)) {
        matches.push({
          file: path.relative(process.cwd(), file).replaceAll('\\', '/'),
          pattern: blocked.label,
        });
      }
    }
  }
}

console.log(JSON.stringify({ checkedRoots: roots, matches }, null, 2));

if (matches.length > 0) process.exitCode = 1;
