import { site } from '~/config/site';

type SiteSeoOptions = {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
};

export function useSiteSeo(options: SiteSeoOptions = {}) {
  const title = options.title ?? `${site.name} — ${site.title}`;
  const description = options.description ?? site.description;
  const canonicalUrl = options.path ? `${site.url}${options.path}` : site.url;

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonicalUrl,
    ogType: 'website',
    ogLocale: 'fr_FR',
    twitterCard: 'summary',
    robots: options.noindex ? 'noindex, follow' : 'index, follow',
  });

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
  });
}

export function usePersonJsonLd() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: site.name,
          jobTitle: site.title,
          url: site.url,
          description: site.description,
        }),
      },
    ],
  });
}
