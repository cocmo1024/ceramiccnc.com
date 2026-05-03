# CERAMIC CNC Website

Static Astro site for CERAMIC CNC, focused on precision ceramic CNC machining RFQs, application pages, material guidance, and engineering guide articles.

## Project Scope

- Precision ceramic CNC machining service pages
- Diamond grinding, lapping, micro-drilling, edge quality, and inspection content
- Advanced ceramic applications, materials, and capability pages
- Engineering guide articles with tags, related posts, RSS, sitemap, and structured data

## Local Development

```bash
npm install
npm run dev
```

Local preview runs at `http://localhost:4321/` unless the port is already in use.

## Quality Checks

```bash
npm run check
npm run build
```

`npm run check` runs Astro diagnostics, ESLint, and Prettier checks.

## Deployment

The site builds as static output in `dist/`.

```bash
npm run build
```

Primary domain: `https://www.ceramiccnc.com`

## Google Tracking

Google Ads, GA4, and GTM are pre-wired with blank public build variables. Fill the real IDs in the hosting environment when the ads account is ready; no code change is required.

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

Primary lead actions are `rfq_email_click` and `instant_contact_click`. They push DataLayer events, GA4 `generate_lead`, and a Google Ads conversion when the Ads conversion ID and label are configured. Attribution fields include `gclid`, `gbraid`, `wbraid`, UTM parameters, landing page, and current page context.

Detailed setup notes: [docs/ads-tracking.md](docs/ads-tracking.md)

## RFQ Contact

Customer RFQs are directed to email so drawings and requirements can be reviewed directly.

Email: `info@szcomo.com`
