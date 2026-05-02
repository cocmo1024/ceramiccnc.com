import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { rfqEmailHref } from './data/ceramic';

const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'Applications',
      href: getPermalink('/applications'),
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
          href: getPermalink('/posts/design-rules-feature-dfam/ceramic-dfm-design-rules'),
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
      title: 'Start',
      links: [
        { text: 'Applications', href: getPermalink('/applications') },
        { text: 'Capabilities', href: getPermalink('/capabilities') },
        { text: 'RFQ inputs', href: getPermalink('/rfq') },
      ],
    },
    {
      title: 'Engineering',
      links: [
        {
          text: 'Tolerance map',
          href: getPermalink('/posts/tolerances-gdt/ceramic-tolerance-capability-map-by-feature-process'),
        },
        {
          text: 'Surface finish and SSD',
          href: getPermalink('/posts/surface-finish-functional/ceramic-ssd-surface-finish-specify-control-price'),
        },
        {
          text: 'DFM design rules',
          href: getPermalink('/posts/design-rules-feature-dfam/ceramic-dfm-design-rules'),
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Materials', href: getPermalink('/materials') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Engineering Guide', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
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
