import { SITE } from 'astrowind:config';
import type { ImageMetadata } from 'astro';
import type { JsonLdNode, Post } from '~/types';

const siteUrl = String(SITE.site).replace(/\/$/, '');
const siteOrigin = new URL(siteUrl).origin;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const hasFileExtension = (pathname: string) => /\.[a-z0-9]+$/i.test(pathname.split('/').pop() || '');

const normalizeInternalUrl = (url: URL): string => {
  if (url.origin !== siteOrigin) return String(url);

  if (SITE.trailingSlash && url.pathname !== '/' && !url.pathname.endsWith('/') && !hasFileExtension(url.pathname)) {
    url.pathname = `${url.pathname}/`;
  } else if (SITE.trailingSlash === false && url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
  }

  return String(url);
};

export const toAbsoluteUrl = (url: string | URL | undefined): string | undefined => {
  if (!url) return undefined;

  const value = String(url);
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return normalizeInternalUrl(new URL(value));
  }

  return normalizeInternalUrl(new URL(value.startsWith('/') ? value : `/${value}`, `${siteUrl}/`));
};

export const createBreadcrumbSchema = (items: Array<{ name: string; item?: string | URL }>): JsonLdNode => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(({ name, item }, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    ...(item ? { item: toAbsoluteUrl(item) } : {}),
  })),
});

export const createCeramicServiceSchema = (): JsonLdNode => ({
  '@type': 'Service',
  '@id': `${siteUrl}/#precision-ceramic-cnc-machining-service`,
  name: 'Precision Ceramic CNC Machining Services',
  serviceType: 'Advanced ceramic CNC machining, diamond grinding, lapping, micro-drilling, and inspection support',
  provider: { '@id': organizationId },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Engineering, procurement, semiconductor, vacuum, electrical, wear, and industrial OEM teams',
  },
  description:
    'Precision machining support for advanced ceramic components in Al2O3, ZrO2, Si3N4, SiC, MACOR, and related technical ceramics, with feasibility review, grinding plans, edge quality control, and inspection evidence.',
  url: toAbsoluteUrl('/'),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Precision ceramic machining service scope',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Materials reviewed',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Alumina Al2O3 machining' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zirconia ZrO2 machining' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Silicon nitride Si3N4 machining' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Silicon carbide SiC grinding' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MACOR and machinable ceramic parts' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Process capabilities',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-sinter CNC machining' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diamond grinding and lapping' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Micro-drilling and precision orifices' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Edge break and chip-control finishing' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Inspection and acceptance support',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMM and optical inspection planning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Surface finish and flatness reporting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CT and key-dimension report support' } },
        ],
      },
    ],
  },
});

export const createCeramicApplicationServiceSchema = ({
  id,
  name,
  serviceType,
  description,
  url,
  audienceType,
}: {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  url: string | URL;
  audienceType: string;
}): JsonLdNode => ({
  '@type': 'Service',
  '@id': toAbsoluteUrl(`/${id.replace(/^\/|\/$/g, '')}/#service`),
  name,
  serviceType,
  provider: { '@id': organizationId },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  audience: {
    '@type': 'Audience',
    audienceType,
  },
  description,
  url: toAbsoluteUrl(url),
});

export const createFAQPageSchema = (items: Array<{ title: string; description?: string }>): JsonLdNode => ({
  '@type': 'FAQPage',
  mainEntity: items
    .filter((item) => item.title && item.description)
    .map((item) => ({
      '@type': 'Question',
      name: item.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.description,
      },
    })),
});

export const createItemListSchema = (
  name: string,
  items: Array<{ name: string; description?: string; url: string | URL }>
): JsonLdNode => ({
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: toAbsoluteUrl(item.url),
    item: {
      '@type': 'Thing',
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      url: toAbsoluteUrl(item.url),
    },
  })),
});

export const createArticleSchema = ({
  post,
  url,
  image,
}: {
  post: Post;
  url: string | URL;
  image?: ImageMetadata | string;
}): JsonLdNode => {
  const imageUrl = typeof image === 'string' ? toAbsoluteUrl(image) : toAbsoluteUrl(image?.src);

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: {
      '@id': `${url}#webpage`,
    },
    headline: post.title,
    ...(post.excerpt ? { description: post.excerpt } : {}),
    ...(imageUrl ? { image: [imageUrl] } : {}),
    datePublished: post.publishDate.toISOString(),
    dateModified: (post.updateDate || post.publishDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: post.author || SITE.name,
      url: siteUrl,
    },
    publisher: { '@id': organizationId },
    ...(post.category?.title ? { articleSection: post.category.title } : {}),
    ...(post.tags?.length ? { keywords: post.tags.map((tag) => tag.title).join(', ') } : {}),
  };
};

export const structuredDataIds = {
  organization: organizationId,
  website: websiteId,
};
