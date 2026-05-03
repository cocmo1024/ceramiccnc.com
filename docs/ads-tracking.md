# Ads Tracking Setup

This site is prepared for Google Ads, GA4, and Google Tag Manager. Keep real account IDs in the hosting/build environment only.

## Build Variables

Use direct Google tag variables when you want the site to load `gtag.js` without GTM:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
PUBLIC_GOOGLE_TAG_ID=AW-XXXXXXXXXX
PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
PUBLIC_GOOGLE_ADS_LEAD_CONVERSION_LABEL=xxxxxxxxxxxxxxxxxxx
PUBLIC_GOOGLE_ADS_CONVERSION_VALUE=1.0
PUBLIC_GOOGLE_ADS_CONVERSION_CURRENCY=CNY
```

Use GTM when conversion and remarketing tags will be managed in Google Tag Manager:

```bash
PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
```

Compatibility aliases are also supported:

```bash
PUBLIC_GTM_ID=
PUBLIC_GOOGLE_ADS_RFQ_CONVERSION_LABEL=
PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=
```

## Lead Events

`rfq_email_click`

Primary RFQ lead event. Fires when a visitor clicks any `mailto:` RFQ/contact link. It pushes:

- DataLayer event `rfq_email_click`
- DataLayer event `generate_lead`
- GA4 event `rfq_email_click`
- GA4 event `generate_lead`
- Google Ads `conversion` event when `PUBLIC_GOOGLE_ADS_CONVERSION_ID` and a lead label are set

`instant_contact_click`

Primary instant-contact lead event. Fires when a link has `data-aw-instant-contact-link`. It uses the same lead and Ads conversion pipeline as `rfq_email_click`.

`rfq_email_copy`

Support signal when the email address is copied after a mail link click. This is not treated as a separate Ads conversion.

## Engagement Events

`ceramic_page_view`

Custom page context event pushed once per page URL. It includes page title, path, page type, and attribution fields for GTM triggers or GA4 custom dimensions.

`rfq_prepare_click`

Fires when a visitor clicks an internal `/rfq` preparation link.

`rfq_template_copy`

Fires when a visitor copies the RFQ email template.

`outbound_link_click`

Fires when a visitor clicks an external `http` or `https` link. It includes `outbound_domain`.

## Attribution Fields

The script stores paid-search and campaign parameters in `sessionStorage` and reuses them on later events in the same session:

- `gclid`
- `gbraid`
- `wbraid`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `landing_page`
- `updated_at`

Every event also includes `page_location`, `page_path`, and `page_title`.

## GTM Trigger Plan

Recommended GTM custom event triggers:

- `rfq_email_click`: Google Ads lead conversion and GA4 lead event
- `instant_contact_click`: Google Ads lead conversion and GA4 lead event
- `ceramic_page_view`: page classification and attribution enrichment
- `outbound_link_click`: outbound engagement reporting

If using GTM for Google Ads conversion tags, do not also configure a direct Google Ads conversion label in the build environment unless duplicate conversion handling has been reviewed in the Ads account.
