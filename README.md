# CERAMIC CNC Website

Static Astro site for [ceramiccnc.com](https://www.ceramiccnc.com), focused on precision ceramic CNC machining, diamond grinding, micro-drilling, lapping, inspection-aware RFQ review, and engineering guidance for technical ceramic parts.

This README is the project operating manual. Use it before editing copy, adding pages, changing SEO, replacing images, or preparing the site for ads.

## Positioning

CERAMIC CNC is not a generic ceramics brochure and not a promise-first quote machine. The site should communicate a rigorous RFQ review process:

- The customer sends drawings, CAD files, material grade, quantity, target lead time, and acceptance requirements.
- We review material, geometry, tolerances, surface finish, inspection method, and risk before confirming price or schedule.
- If important information is missing, we ask focused questions instead of pretending the project is already confirmed.
- Capability language should be professional and practical, not exaggerated.

Core service themes:

- Precision ceramic CNC machining
- Diamond grinding, lapping, polishing, and post-sinter finishing
- Micro-holes, slots, thin walls, bores, datums, seal faces, and chip-sensitive edges
- Al2O3, ZrO2, Si3N4, SiC, MACOR, and related technical ceramics
- CMM, optical, surface finish, CT, and acceptance evidence planning

Avoid making the site look like:

- A ceramic 3D printing or ceramic AM supplier
- A catalog of ordinary ceramic shapes
- A guaranteed tolerance, lead-time, or price promise before drawing review
- A broad materials encyclopedia with weak RFQ intent

## Content Rules

Use language that reflects professional evaluation:

- Good: "Send drawing, material, quantity, lead time, and acceptance requirements for review."
- Good: "Feasibility depends on material, fired state, datum strategy, wall thickness, and inspection method."
- Good: "If requirements are unclear, we clarify before confirming quotation or schedule."
- Avoid: "Guaranteed +/-0.01 mm."
- Avoid: "Fastest lead time."
- Avoid: "Any ceramic part can be machined."
- Avoid: "Instant quote."

When adding or editing pages, every claim should answer one of these questions:

- What does the customer need to send?
- What engineering risk affects quote feasibility?
- What feature, material, process, or inspection method changes the route?
- What decision does this help the buyer make?

Articles that drift away from precision ceramic CNC machining, grinding, RFQ preparation, or acceptance control should be removed or rewritten. Ceramic AM, general sintering theory, generic material science, and broad marketing content do not belong unless they directly support CNC finishing and RFQ feasibility.

## Site Map

Primary pages:

- `/` homepage
- `/applications/`
- `/capabilities/`
- `/materials/`
- `/rfq/`
- `/contact/`
- `/faq/`
- `/about/`
- `/privacy/`
- `/terms/`
- `/category/engineering-guide/`

Current engineering articles:

- `/posts/tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process/`
- `/posts/surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price/`
- `/posts/design-rules-dfm/ceramic-dfm-design-rules/`
- `/posts/process-routes-control/green-machining-vs-hard-machining/`
- `/posts/feasibility-process-choice/ceramic-machining-guide/`

## Repository Map

```text
src/pages/                 Route pages
src/data/ceramic.ts        Shared ceramic content, FAQs, article cards, application data
src/data/post/             Markdown engineering articles
src/components/            Astro UI components
src/layouts/               Page and markdown layouts
src/utils/structured-data.ts
                            JSON-LD builders
src/config.yaml            Site metadata, canonical domain, Open Graph defaults
docs/ads-tracking.md       Ads, GA4, GTM, and conversion setup notes
public/                    Static public assets
dist/                      Build output, generated locally
```

## Local Development

```bash
npm install
npm run dev
```

Local preview normally runs at `http://localhost:4321/`. If that port is occupied, Astro will choose another port.

Useful commands:

```bash
npm run check
npm run build
npm run preview
npm run fix
```

`npm run check` runs Astro diagnostics, ESLint, and Prettier. Run it before committing.

## Editing Workflow

For copy-only changes:

1. Edit the page or data source.
2. Run `npm run check`.
3. Run `npm run build`.
4. Search generated output for old wording if the change removes a phrase.
5. Commit and push.

For article changes:

1. Keep frontmatter title, excerpt, metadata title, description, tags, author, and image aligned.
2. Confirm the topic fits the positioning rules above.
3. Avoid adding tags that create thin or off-position tag archives.
4. Run build and confirm sitemap does not contain obsolete article URLs.

For image changes:

1. Use domain-relevant technical ceramic images.
2. Keep all important images with descriptive `alt` text.
3. Hero imagery should reinforce precision ceramic machining, not generic ceramics.
4. Check light and dark mode contrast when transparent or white ceramic images are used.

## SEO Rules

Baseline requirements:

- Every indexable page needs one clear H1.
- Every indexable page needs title, description, canonical, Open Graph data, and structured data where relevant.
- Use canonical trailing-slash URLs. The site config uses `trailingSlash: true`.
- Internal links should point directly to final trailing-slash URLs.
- Do not create duplicate landing pages with the same search intent.
- Do not keep off-position articles just to increase page count.
- Keep title tags concise enough for SERP readability.
- Do not add fake `lastmod` values to sitemap. Add `lastmod` only when reliable update dates are maintained.

SEO scan targets after meaningful changes:

```bash
npm run build
rg -n "ceramic-am|additive manufacturing|AM preforms" dist src
rg -n "hero-2" dist src
rg -n "<meta name=\"robots\" content=\"noindex" dist --glob "*.html"
```

Expected content posture:

- Professional, specific, engineering-led.
- Useful to buyers preparing RFQs.
- Clear about review, feasibility, and acceptance.
- No fake certainty before drawings are reviewed.

## Structured Data

Structured data is generated through `src/utils/structured-data.ts` and page metadata.

Keep these consistent:

- Canonical URL
- JSON-LD `url`
- Breadcrumb URLs
- Open Graph URL
- Sitemap URL

If a page URL changes, search both source and `dist` after build.

## Ads And Tracking

Google Ads, GA4, and GTM are pre-wired with blank public build variables. Fill real values in the hosting environment only.

```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GOOGLE_TAG_ID=AW-XXXXXXXXXX
PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL=xxxxxxxxxxxxxxxxxxx
PUBLIC_GOOGLE_ADS_CONVERSION_VALUE=1.0
PUBLIC_GOOGLE_ADS_CONVERSION_CURRENCY=CNY
PUBLIC_GOOGLE_SITE_VERIFICATION_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Primary lead actions:

- `rfq_email_click`
- `instant_contact_click`

Support and engagement events:

- `generate_lead`
- `rfq_email_copy`
- `rfq_template_copy`
- `rfq_prepare_click`
- `ceramic_page_view`
- `outbound_link_click`

Attribution captured:

- `gclid`
- `gbraid`
- `wbraid`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `landing_page`
- current page context

Detailed setup notes: [docs/ads-tracking.md](docs/ads-tracking.md)

## Deployment

The site builds as static output in `dist/`.

```bash
npm run build
```

Primary domain:

```text
https://www.ceramiccnc.com
```

Before switching production traffic or pushing important SEO changes:

```bash
npm run check
npm run build
git status --short
```

Then verify the generated sitemap:

```bash
rg -n "<loc>" dist/sitemap-0.xml dist/sitemap-index.xml
```

## Pre-Publish Checklist

Use this checklist for every meaningful change:

- Positioning still says precision ceramic CNC machining, not generic ceramics or ceramic AM.
- No unrealistic promises about tolerance, price, lead time, or guaranteed feasibility.
- RFQ path still asks for drawing, material, quantity, lead time, and acceptance requirements.
- All changed pages have sensible title and description.
- All changed images have useful alt text.
- Canonical and internal links use trailing slash URLs.
- Removed pages or articles are absent from `dist` and sitemap after build.
- `npm run check` passes.
- `npm run build` passes.

## RFQ Contact

Customer RFQs are directed to email so drawings and requirements can be reviewed directly.

```text
info@szcomo.com
```

Official quotations, technical confirmations, and commercial terms are valid only when issued from `info@szcomo.com`.
