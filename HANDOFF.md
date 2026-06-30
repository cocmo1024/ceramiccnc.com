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
```

Preview built site:

```bash
npm run preview
```

Format and lint fixes:

```bash
npm run fix
```

## Completed Work

- Copied and adapted the copper-site template into the ceramic CNC site.
- Set up site positioning around custom precision ceramic CNC machining, diamond grinding, lapping, micro-drilling, inspection-aware RFQ review, and engineering guidance.
- Replaced copper-specific content with ceramic-focused content across main pages.
- Added core pages: homepage, applications, capabilities, materials, RFQ, contact, FAQ, about, privacy, terms, engineering guide.
- Added footer related-site links for the group ecosystem.
- Added Google Ads / GA4 / GTM-ready tracking hooks with blank public build variables only.
- Added RFQ email/copy tracking, instant-contact tracking, attribution capture, and conversion-event scaffolding.
- Added strict content posture: review first, no fake tolerance/price/lead-time promises before drawing review.
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
  - `d3a303b Add ceramic engineering guide updates`
  - `5610e7f Document article image prompt protocol`
  - `d2b94fd Add ceramic micro-hole machining RFQ guide`
  - `ac7b2d0 Streamline SEO and RFQ content`
  - `a7932f5 Refine ceramic visual system`

## Current Unfinished Tasks

- No known uncommitted code changes at the time of this handoff.
- Continue adding high-value engineering articles when there is a clear RFQ/search-intent gap.
- After each new article batch, confirm generated output, sitemap, RSS, canonical URLs, title/description, image alt, and structured data.
- Optional future work: deeper Search Console-based content planning after enough impressions and queries accumulate.
- Optional future work: add reliable `lastmod` only if update dates are maintained truthfully.
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

1. Add another small batch of high-value RFQ-intent articles only after checking current inventory.
2. Strong next article themes:
   - Ceramic thin-wall sleeve machining and bore concentricity RFQ
   - SiC / silicon nitride wear ring grinding and roundness RFQ
   - Alumina or AlN high-voltage creepage/clearance ceramic insulation design for RFQ
   - Ceramic nozzle/orifice inspection and flow acceptance
   - Semiconductor ceramic edge-chip criteria and packaging requirements
3. For every new article:
   - use `docs/article-image-prompt-protocol.md`
   - generate a fresh 16:9 image
   - add frontmatter title/excerpt/metadata/image/tags
   - update `src/data/ceramic.ts` if the article should appear in RFQ-related guides
   - run `npm run check`
   - run `npm run build`
   - verify sitemap and RSS contain the article
4. If working from live SEO data, use Google Search Console exports to prioritize topics by impression growth, query relevance, and RFQ intent.

## Validation Checklist Before Pushing

```bash
npm run check
npm run build
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
