import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const distRoot = path.join(projectRoot, 'dist');
const siteOrigin = 'https://ceramiccnc.com';

if (!fs.existsSync(distRoot)) {
  console.error('SEO output check requires a completed build in dist/.');
  process.exit(1);
}

const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });

const decodeHtml = (value = '') =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&nbsp;', ' ')
    .replace(/\s+/g, ' ')
    .trim();

const getAttribute = (tag, name) => {
  const quoted = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, 'i'));
  if (quoted) return decodeHtml(quoted[2]);
  const unquoted = tag.match(new RegExp(`\\b${name}\\s*=\\s*([^\\s>]+)`, 'i'));
  return unquoted ? decodeHtml(unquoted[1]) : '';
};

const routeFromFile = (file) => {
  const relative = path.relative(distRoot, file).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'index.html'.length)}`;
  return `/${relative}`;
};

const failures = [];
const warnings = [];
const pages = walk(distRoot)
  .filter((file) => file.endsWith('.html'))
  .map((file) => {
    const html = fs.readFileSync(file, 'utf8');
    const route = routeFromFile(file);
    const title = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '');
    const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
    const linkTags = html.match(/<link\b[^>]*>/gi) || [];
    const descriptionTag = metaTags.find((tag) => getAttribute(tag, 'name').toLowerCase() === 'description');
    const robotsTag = metaTags.find((tag) => getAttribute(tag, 'name').toLowerCase() === 'robots');
    const canonicalTag = linkTags.find((tag) =>
      getAttribute(tag, 'rel').toLowerCase().split(/\s+/).includes('canonical')
    );
    const description = descriptionTag ? getAttribute(descriptionTag, 'content') : '';
    const robots = robotsTag ? getAttribute(robotsTag, 'content').toLowerCase() : '';
    const canonical = canonicalTag ? getAttribute(canonicalTag, 'href') : '';
    const indexable = route !== '/404.html' && !robots.includes('noindex');
    const headings = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
    const h1Count = headings.filter((level) => level === 1).length;
    const images = html.match(/<img\b[^>]*>/gi) || [];

    if (indexable) {
      if (!title) failures.push({ route, issue: 'missing title' });
      if (!description) failures.push({ route, issue: 'missing meta description' });
      if (canonical !== `${siteOrigin}${route}`) {
        failures.push({ route, issue: 'canonical mismatch', canonical });
      }
      if (h1Count !== 1) failures.push({ route, issue: 'expected exactly one H1', count: h1Count });

      if (title && (title.length < 25 || title.length > 65)) {
        warnings.push({ route, issue: 'title length', length: title.length });
      }
      if (description && (description.length < 80 || description.length > 170)) {
        warnings.push({ route, issue: 'description length', length: description.length });
      }
    }

    for (let index = 1; index < headings.length; index += 1) {
      if (headings[index] > headings[index - 1] + 1) {
        failures.push({
          route,
          issue: 'heading level skipped',
          from: headings[index - 1],
          to: headings[index],
        });
        break;
      }
    }

    const missingAlt = images.filter((tag) => !/\balt\s*=/i.test(tag)).length;
    const missingDimensions = images.filter((tag) => !/\bwidth\s*=/i.test(tag) || !/\bheight\s*=/i.test(tag)).length;
    if (missingAlt) failures.push({ route, issue: 'images missing alt', count: missingAlt });
    if (missingDimensions) failures.push({ route, issue: 'images missing dimensions', count: missingDimensions });

    for (const [index, match] of [
      ...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
    ].entries()) {
      try {
        JSON.parse(match[1]);
      } catch (error) {
        failures.push({ route, issue: 'invalid JSON-LD', block: index + 1, message: error.message });
      }
    }

    return { route, title, description, indexable };
  });

const duplicateValues = (key) => {
  const values = new Map();
  for (const page of pages.filter((candidate) => candidate.indexable)) {
    const value = page[key].toLowerCase().replace(/\s+/g, ' ').trim();
    if (!value) continue;
    values.set(value, [...(values.get(value) || []), page.route]);
  }
  return [...values.entries()].filter(([, routes]) => routes.length > 1);
};

for (const [value, routes] of duplicateValues('title')) {
  failures.push({ issue: 'duplicate title', value, routes });
}
for (const [value, routes] of duplicateValues('description')) {
  failures.push({ issue: 'duplicate description', value, routes });
}

const sitemapPath = path.join(distRoot, 'sitemap-0.xml');
if (!fs.existsSync(sitemapPath)) {
  failures.push({ issue: 'missing sitemap-0.xml' });
} else {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapRoutes = new Set(
    [...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) => new URL(decodeHtml(match[1])).pathname)
  );
  const indexableRoutes = new Set(pages.filter((page) => page.indexable).map((page) => page.route));

  for (const route of indexableRoutes) {
    if (!sitemapRoutes.has(route)) failures.push({ route, issue: 'indexable page missing from sitemap' });
  }
  for (const route of sitemapRoutes) {
    if (!indexableRoutes.has(route)) failures.push({ route, issue: 'non-indexable URL present in sitemap' });
  }
}

const result = {
  htmlPages: pages.length,
  indexablePages: pages.filter((page) => page.indexable).length,
  failures,
  warnings,
};

console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
