# CERAMIC CNC Project Handoff

## Project Path

```text
G:\Codex\ceramiccnc.com
```

GitHub repository:

```text
https://github.com/cocmo1024/ceramiccnc.com
```

Production domain:

```text
https://ceramiccnc.com/
```

## Technical Stack

- Astro static site
- TypeScript
- Tailwind CSS
- Astro content collections for engineering articles
- Astro sitemap and RSS integrations
- Astro Icon / Tabler icons
- Sharp for local image processing
- Prettier, ESLint, Astro check

Key directories:

```text
src/pages/                         Route pages
src/data/ceramic.ts                Shared ceramic content and article cards
src/data/post/                     Markdown engineering articles
src/assets/images/ceramic/         Site and article images
src/components/                    Astro UI components
src/layouts/                       Page and Markdown layouts
src/utils/structured-data.ts       JSON-LD builders
docs/                              Internal project documentation
```

## Commands

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Full validation:

```bash
npm run check
npm run build
npx wrangler@4.111.0 deploy --dry-run
git diff --check
```

Preview built site:

```bash
npm run preview
```

Format and lint fixes:

```bash
npm run fix
```

## Current Operating Snapshot

Updated: 2026-07-19

- Business position: precision ceramic CNC machining, diamond grinding, lapping, feature-specific inspection, and drawing-led RFQ review for custom industrial ceramic components.
- Public content inventory after the current batch: 49 engineering articles connected to four hand-built application hubs.
- Latest live Search Console review, 2026-06-20 through 2026-07-17: 7 clicks, 898 impressions, 0.8% CTR, and 22.8 average position.
- Previous equal-length window: 1 click, 336 impressions, 0.3% CTR, and 37.9 average position.
- Indexing report at review time: 29 indexed and 28 not indexed. The current binding constraint is index coverage and query-to-page clarity, not raw page count.
- Sitemap: `https://ceramiccnc.com/sitemap-index.xml`, successful in Search Console, with 59 discovered pages at review time.
- No main-domain robots block, manual action, or security issue was found. The reported critical robots/5xx item belongs to `ads.ceramiccnc.com`, not the main content site.
- Current content batch:
  - New analytical-instrument article limited to ceramic sample/wetted-path parts.
  - New high/UHV article limited to non-chuck machined alumina bodies and explicit assembly/test boundaries.
  - Existing Si3N4 URL refreshed for custom rollers and bearing-adjacent parts; no duplicate bearing article created.
  - Legacy `/posts/`, old sitemap endpoints, and uppercase `/Privacy/` are redirected to current canonical destinations.

## Completed Work

- Copied and adapted the copper-site template into the ceramic CNC site.
- Set up site positioning around custom precision ceramic CNC machining, diamond grinding, lapping, micro-drilling, inspection-aware RFQ review, and engineering guidance.
- Replaced copper-specific content with ceramic-focused content across main pages.
- Added core pages: homepage, applications, capabilities, materials, RFQ, contact, FAQ, about, privacy, terms, engineering guide.
- Added footer related-site links for the group ecosystem.
- Added Google Ads / GA4 / GTM-ready tracking hooks with blank public build variables only.
- Added RFQ email/copy tracking, instant-contact tracking, attribution capture, and conversion-event scaffolding.
- Added strict content posture: review first, no fake tolerance/price/lead-time promises before drawing review.
- Added four hand-built application hubs for semiconductor, electrical/thermal, wear/fluid-control, and automation/vacuum ceramic component RFQs.
- Connected article topic pathways, navigation, applications, and footer links to those hubs so long-tail articles support commercial application pages.
- Removed public-facing SEO editorial language from existing articles and shortened search titles/descriptions for clearer result snippets.
- Refined visual design toward precision ceramic: restrained, clean, technical, cool neutral palette, high contrast, light/dark mode support.
- Replaced hero imagery with ceramic CNC product imagery.
- Added and documented project image-generation protocol based on the TITAN industrial SEO visual-manifest logic:
  - `docs/article-image-prompt-protocol.md`
- Added engineering articles covering:
  - Ceramic CNC buyer guide
  - Green machining vs hard machining
  - Ceramic DFM design rules
  - Ceramic tolerance capability map
  - Surface finish and subsurface damage
  - RFQ checklist
  - Material selection
  - AI semiconductor equipment ceramic parts
  - AI data center power electronics ceramic parts
  - Ceramic micro-hole machining RFQ
  - Ceramic lapped seal faces RFQ
  - Ceramic vacuum chuck flatness RFQ
  - Ceramic high-voltage insulators RFQ
- Disabled low-value generated blog tag archive pages to reduce thin/noindex page clutter.
- Kept legacy noindex redirect/fallback pages for old URLs where needed.
- Verified recent builds with `npm run check` and `npm run build`.
- Recent commits:
  - `50fc957 Expand SEO into optical ceramic applications`
  - `c844a3b Document content update workflow`
  - `cbfa5c9 Optimize hero delivery and security policy`
  - `8f4126e fix: remove duplicate sitemap output`
  - `1af2773 Rework SEO content around buyer intent`
  - `3e6b414 Build ceramic application SEO hubs`

## Current Unfinished Tasks

- Do not accelerate page count until the 49-page batch has been crawled and index coverage is reviewed again.
- Refresh the existing tolerance-capability, surface-finish/SSD, and green-vs-hard-machining URLs with stronger technical sourcing and acceptance logic; do not create replacements.
- Use Search Console `query + page` evidence before merging or redirecting the overlapping DFM, AI-semiconductor, and pump/valve pairs.
- The next net-new application candidate is precision ceramic grippers and contact fingers for industrial robotic handling, provided the existing wafer end-effector page can be kept distinct.
- Two substantive articles were reported as crawled but not indexed: the ceramic valve article and ceramic machining buyer guide. The valve article had only recently been crawled, while the buyer guide was materially refreshed after Google's recorded crawl; reassess after recrawl before rewriting again.
- After each article batch, confirm generated output, sitemap, RSS, canonical URLs, titles/descriptions, image alt, structured data, internal links, and production rendering.
- Add reliable sitemap `lastmod` only if `updateDate` continues to be maintained truthfully.
- Current long-term SEO operating plan:
  - `docs/industrial-ceramic-long-term-seo-roadmap.md`
  - Use it before selecting new articles when the user asks for long-term daily updates, broad keyword expansion, or cross-industry RFQ coverage.
  - Keep tag/category archive pages disabled unless they become hand-built, high-value hub pages.

## Design Style

- Professional precision ceramic machining site, not a generic ceramic brochure.
- Visual direction: clean, restrained, technical, high-end B2B, engineering-first.
- Palette: cool neutral graphite, ceramic white, desaturated blue/green accents; avoid loud gradients and decorative color.
- Components should feel precise and calm: compact panels, clear hierarchy, modest shadows, readable typography.
- Images should show difficult real ceramic machining features:
  - micro-hole plates
  - vacuum chucks
  - lapped seal faces
  - ceramic nozzles
  - SiC/Si3N4 wear parts
  - AlN/alumina insulation parts
  - precision bores, slots, threads, thin walls, datum pads, edge-break details
- Article images should follow:

```text
docs/article-image-prompt-protocol.md
```

## Important Notes

- The business principle is “send drawings and requirements, then we review.” Do not promise feasibility, price, delivery, or tolerance before evaluation.
- RFQ language should ask for:
  - drawing
  - STEP/CAD
  - material or grade
  - blank/source requirement
  - quantity
  - target timing
  - functional surfaces
  - surface finish / flatness / edge criteria
  - inspection evidence
- Use canonical trailing-slash URLs.
- Keep internal links pointed directly to final trailing-slash URLs.
- Do not create duplicate landing pages with the same search intent.
- Do not add broad/off-position content only to increase page count.
- Do not add fake `lastmod` dates.
- Do not expose sensitive keys in the repo. Tracking IDs and ad conversion IDs are configured through environment variables only.
- Keep generated prompts and visual manifests out of live articles. They belong in docs or internal workflow, not published content.
- Keep SEO planning language out of public articles. Do not discuss keywords, ranking, search value, search intent, content clusters, or why a topic was selected; translate that reasoning into buyer decisions, failure modes, inspection, and RFQ inputs.
- New article hero images should be fresh, relevant, and saved under:

```text
src/assets/images/ceramic/posts/
```

## Do Not Change Without A Clear Reason

- Do not weaken the “review first” positioning.
- Do not turn the site into ceramic AM / ceramic 3D printing content.
- Do not change the domain/canonical base unless the production domain changes.
- Do not remove ads/tracking scaffolding unless replacing it with a better equivalent.
- Do not re-enable thin blog tag archive generation without a strong indexing strategy.
- Do not remove legacy noindex redirect/fallback pages unless confirming no old URLs need them.
- Do not replace the precision ceramic visual system with generic marketing gradients or decorative illustrations.
- Do not publish AI prompt blocks, internal visual manifests, or writing protocol text inside customer-facing articles.
- Do not add article claims that imply guaranteed tolerance, guaranteed lead time, guaranteed price, or universal material capability.

## Next Step Suggestions

1. Recheck Search Console index coverage and query/page performance after this batch is crawled.
2. Refresh the three high-link foundation URLs in place: tolerance capability, surface finish/SSD, and green versus hard machining.
3. Resolve duplicate-intent decisions with current evidence before redirecting anything.
4. If the next net-new page is justified, publish one industrial robotic gripper/contact-finger guide and review its indexing before another addition.
5. For every new article:
   - use `docs/article-image-prompt-protocol.md`
   - generate a fresh 16:9 image
   - add frontmatter title/excerpt/metadata/image/tags
   - connect it to `src/data/article-topic-hubs.ts` and the appropriate `src/data/application-hubs.ts` entry
   - run `npm run check`
   - run `npm run build`
   - verify sitemap and RSS contain the article
6. If working from live SEO data, use query-and-page evidence to prioritize topics by impression growth, relevance, index state, and RFQ intent.

## Validation Checklist Before Pushing

```bash
npm run check
npm run build
npx wrangler@4.111.0 deploy --dry-run
git diff --check
git status --short
```

For SEO/content changes, also confirm:

```bash
rg -n "<loc>" dist/sitemap-0.xml dist/sitemap-index.xml
rg -n "noindex" dist --glob "*.html"
```

Expected posture:

- Site remains precision ceramic CNC machining focused.
- RFQ path remains clear.
- No unrealistic promises.
- No missing alt text for meaningful images.
- Canonical and sitemap URLs remain consistent.
