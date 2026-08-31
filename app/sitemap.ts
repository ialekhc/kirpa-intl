import { MetadataRoute } from 'next';
import { company } from '@/data/company';
import { countries } from '@/data/countries';
import { jobs } from '@/data/jobs';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.website;

  const staticPages = [
    '',
    '/about',
    '/countries',
    '/jobs',
    '/recruitment',
    '/employers',
    '/resources',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const countryPages = countries.map((c) => ({
    url: `${baseUrl}/countries/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const jobPages = jobs.map((j) => ({
    url: `${baseUrl}/jobs/${j.slug}`,
    lastModified: new Date(j.publishedAt),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...countryPages, ...jobPages];
}
