import { company } from '@/data/company';
import { JobVacancy } from '@/types/job';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RecruitmentAgency',
    name: company.name,
    legalName: company.name,
    description:
      'Licensed Nepal-based foreign employment recruitment company connecting Nepalese workers with international employment opportunities, including recruitment partnerships for Bulgaria, Greece, and Romania.',
    url: company.website,
    telephone: company.phone,
    email: company.email,
    identifier: company.licenseNumber,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.municipality,
      addressRegion: company.address.city,
      addressCountry: company.address.country,
    },
    memberOf: {
      '@type': 'Organization',
      name: company.europeanPartner.name,
      url: company.europeanPartner.website,
      role: company.europeanPartner.partnershipRole,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function getJobPostingSchema(job: JobVacancy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: company.name,
      value: job.id,
    },
    datePosted: job.publishedAt,
    validThrough: job.deadline,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: company.name,
      sameAs: company.website,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: job.country,
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: job.salary.currency,
      value: {
        '@type': 'QuantitativeValue',
        value: job.salary.amount,
        unitText: 'MONTH',
      },
    },
  };
}
