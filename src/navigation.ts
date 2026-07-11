import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { rfqEmailHref } from './data/ceramic';

const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'Applications',
      links: [
        {
          text: 'Applications overview',
          href: getPermalink('/applications'),
        },
        {
          text: 'Semiconductor ceramics',
          href: getPermalink('/applications/semiconductor-ceramic-components'),
        },
        {
          text: 'Electrical and thermal ceramics',
          href: getPermalink('/applications/electrical-thermal-ceramic-components'),
        },
        {
          text: 'Wear and fluid-control ceramics',
          href: getPermalink('/applications/wear-fluid-control-ceramic-components'),
        },
        {
          text: 'Automation and vacuum ceramics',
          href: getPermalink('/applications/automation-vacuum-ceramic-components'),
        },
      ],
    },
    {
      text: 'Capabilities',
      href: getPermalink('/capabilities'),
    },
    {
      text: 'Materials',
      href: getPermalink('/materials'),
    },
    {
      text: 'Engineering',
      links: [
        {
          text: 'Engineering Guide',
          href: getBlogPermalink(),
        },
        {
          text: 'Tolerance capability map',
          href: getPermalink('/posts/tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process'),
        },
        {
          text: 'DFM design rules',
          href: getPermalink('/posts/design-rules-dfm/ceramic-dfm-design-rules'),
        },
        {
          text: 'Material selection',
          href: getPermalink('/posts/materials-grade-selection/ceramic-material-selection-cnc-machining'),
        },
        {
          text: 'RFQ checklist',
          href: getPermalink('/posts/rfq-preparation/custom-ceramic-cnc-machining-rfq-checklist'),
        },
      ],
    },
    {
      text: 'RFQ',
      href: getPermalink('/rfq'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Email RFQ', href: rfqEmailHref, title: 'Email info@szcomo.com' }],
};

export const footerData = {
  links: [
    {
      title: 'Applications',
      links: [
        { text: 'Applications overview', href: getPermalink('/applications') },
        {
          text: 'Semiconductor ceramics',
          href: getPermalink('/applications/semiconductor-ceramic-components'),
        },
        {
          text: 'Electrical and thermal ceramics',
          href: getPermalink('/applications/electrical-thermal-ceramic-components'),
        },
        {
          text: 'Wear and fluid-control ceramics',
          href: getPermalink('/applications/wear-fluid-control-ceramic-components'),
        },
        {
          text: 'Automation and vacuum ceramics',
          href: getPermalink('/applications/automation-vacuum-ceramic-components'),
        },
      ],
    },
    {
      title: 'Engineering',
      links: [
        { text: 'Capabilities', href: getPermalink('/capabilities') },
        { text: 'Materials', href: getPermalink('/materials') },
        { text: 'Engineering Guide', href: getBlogPermalink() },
        {
          text: 'Tolerance map',
          href: getPermalink('/posts/tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process'),
        },
        {
          text: 'Surface finish and subsurface damage',
          href: getPermalink('/posts/surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price'),
        },
        {
          text: 'DFM design rules',
          href: getPermalink('/posts/design-rules-dfm/ceramic-dfm-design-rules'),
        },
        {
          text: 'Material selection guide',
          href: getPermalink('/posts/materials-grade-selection/ceramic-material-selection-cnc-machining'),
        },
        {
          text: 'RFQ checklist',
          href: getPermalink('/posts/rfq-preparation/custom-ceramic-cnc-machining-rfq-checklist'),
        },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Privacy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
    {
      title: 'Related sites',
      links: [
        { text: 'Como Precision', href: 'https://szcomo.com/' },
        { text: 'Copper 3D Printing', href: 'https://copper3dp.com/' },
        { text: 'Titanium Alloy AM', href: 'https://titanium3dp.com/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: rfqEmailHref },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${currentYear} CERAMIC CNC - Suzhou Como Precision Materials Co., Ltd. - All rights reserved.
  `,
};
