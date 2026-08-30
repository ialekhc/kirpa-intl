import React from 'react';
import { Metadata } from 'next';
import { jobs } from '@/data/jobs';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { JobFilters } from '@/components/jobs/JobFilters';

export const metadata: Metadata = {
  title: 'Current Job Vacancies | Foreign Employment Opportunities',
  description:
    'Browse verified foreign employment job vacancies in Bulgaria, Greece, Romania and other markets sourced through KIRPA INTERNATIONAL.',
};

export default function JobsPage() {
  const countryList = Array.from(new Set(jobs.map((j) => j.country)));
  const industryList = Array.from(new Set(jobs.map((j) => j.industry)));

  return (
    <>
      <Breadcrumbs items={[{ label: 'Current Vacancies' }]} />

      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-12 sm:py-16 border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Verified Demand Listings
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17202A] tracking-tight leading-tight">
              Current Job Opportunities
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Explore authentic, government-approved foreign employment demand listings and recruitment announcements.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container size="wide">
          <JobFilters
            initialJobs={jobs}
            countries={countryList}
            industries={industryList}
          />
        </Container>
      </section>
    </>
  );
}
