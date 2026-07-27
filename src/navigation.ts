import { getPermalink, getBlogPermalink } from './utils/permalinks';

const rfqFormHref = '/rfq/#rfq-form';
const rfqEmailHref = 'mailto:info@szcomo.com';
const whatsappHref =
  'https://wa.me/8615301541312?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20precision%20ceramic%20project.';
const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'Products',
      href: getPermalink('/products'),
    },
    {
      text: 'Applications',
      href: getPermalink('/applications'),
    },
    {
      text: 'Capabilities',
      links: [
        { text: 'Ceramic manufacturing capabilities', href: getPermalink('/capabilities') },
        { text: 'Ceramic materials', href: getPermalink('/materials') },
        { text: 'Application review', href: getPermalink('/applications') },
        { text: 'Quotation checklist', href: getPermalink('/rfq') },
      ],
    },
    {
      text: 'Engineering Guides',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Submit RFQ', href: rfqFormHref, title: 'Submit CAD files and ceramic quotation requirements' }],
};

export const footerData = {
  links: [
    {
      title: 'Plan a project',
      links: [
        { text: 'Product catalogue', href: getPermalink('/products') },
        { text: 'Application guide', href: getPermalink('/applications') },
        { text: 'Manufacturing capabilities', href: getPermalink('/capabilities') },
        { text: 'Ceramic materials', href: getPermalink('/materials') },
        { text: 'Quotation checklist', href: getPermalink('/rfq') },
      ],
    },
    {
      title: 'Product families',
      links: [
        { text: 'Precision shapes', href: getPermalink('/products') + '#precision-shapes' },
        { text: 'Fluid-control ceramics', href: getPermalink('/products') + '#fluid-control' },
        { text: 'Automation and electronics', href: getPermalink('/products') + '#automation-electronics' },
        { text: 'Material-led components', href: getPermalink('/products') + '#material-led' },
        { text: 'Semiconductor ceramics', href: getPermalink('/applications/semiconductor-ceramic-components') },
        {
          text: 'Wear and fluid-control parts',
          href: getPermalink('/applications/wear-fluid-control-ceramic-components'),
        },
      ],
    },
    {
      title: 'Company & resources',
      links: [
        { text: 'Engineering Guides', href: getBlogPermalink() },
        { text: 'About CERAMIC CNC', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Como Precision', href: 'https://www.szcomo.com/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: rfqEmailHref },
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: whatsappHref,
    },
  ],
  footNote: `
    &copy; ${currentYear} CERAMIC CNC &middot; Suzhou Como Precision Materials Co., Ltd.
  `,
};
