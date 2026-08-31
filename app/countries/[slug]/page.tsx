import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { countries } from '@/data/countries';
import { jobs } from '@/data/jobs';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { JobCard } from '@/components/jobs/JobCard';

export async function generateStaticParams() {
  return countries.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return { title: 'Country Not Found' };

  return {
    title: `Recruitment Opportunities in ${country.name}`,
    description: `Explore employment sectors, candidate preparation steps, and verified recruitment options for ${country.name} in partnership with Global Work Specialist.`,
  };
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  const countryJobs = jobs.filter((j) => j.countrySlug === country.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Countries', href: '/countries' },
          { label: country.name },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-[#17202A] text-white py-12 sm:py-16 relative overflow-hidden">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{country.flag}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#93C5FD] bg-[#1E3A5F] px-3 py-1 rounded">
                  Partner Country &bull; European Union
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Recruitment Opportunities in {country.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {country.description}
              </p>

              {/* Partner Attribution Banner */}
              <div className="bg-[#1E3A5F] border border-[#2C4E78] p-4 rounded-lg flex items-center gap-3 text-xs sm:text-sm">
                <Globe className="w-5 h-5 text-blue-300 shrink-0" />
                <div>
                  <span className="text-slate-300 block">European Recruitment Partner:</span>
                  <a
                    href={company.europeanPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${country.partnerName} – European Recruitment Partner website`}
                    className="font-bold text-white underline decoration-blue-300 underline-offset-4 hover:text-blue-200"
                  >
                    {country.partnerName}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] border border-slate-700">
                <Image
                  src={country.heroImage}
                  alt={`Work in ${country.name}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Employment Sectors */}
      <section className="py-16 bg-white border-b border-[#E5E7EB]">
        <Container size="wide">
          <SectionHeader
            eyebrow="Key Industry Sectors"
            title={`Employment Categories in ${country.name}`}
            description="Overview of primary operational categories requiring qualified Nepalese workers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.employmentCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] p-6 rounded-xl border border-[#E5E7EB] space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-[#17202A] text-lg">{cat.title}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white border border-[#E5E7EB] text-[#1E3A5F] rounded">
                      Demand: {cat.demandLevel}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Candidate Preparation & Document Requirements */}
      <section className="py-16 bg-[#F8F9FA] border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Candidate Prerequisites"
                title="Preparation Checklist"
                description={`Mandatory requirements and legal document prerequisites for processing work applications for ${country.name}.`}
              />

              <div className="space-y-3">
                {country.candidatePreparation.map((prep, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-[#E5E7EB]">
                    <CheckCircle2 className="w-5 h-5 text-[#C62828] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#17202A]">{prep}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-[#E5E7EB] space-y-4 shadow-2xs">
              <h3 className="text-xl font-bold text-[#17202A]">Recruitment Process Overview</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {country.recruitmentOverview}
              </p>

              <div className="p-4 bg-[#FDEDEC] rounded-lg border border-[#FADBD8] text-xs text-[#791E1E] space-y-1">
                <div className="font-bold">Legal Disclaimer:</div>
                <div>
                  KIRPA INTERNATIONAL and Global Work Specialist provide recruitment facilitation in full compliance with government rules. No guarantee of immigration status or visa issuance can be made prior to consular approval.
                </div>
              </div>

              <Button href="/contact" variant="primary" className="w-full">
                Enquire About {country.name} Opportunities
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Current Vacancies for this Country */}
      {countryJobs.length > 0 && (
        <section className="py-16 bg-white border-b border-[#E5E7EB]">
          <Container size="wide">
            <SectionHeader
              eyebrow="Open Vacancies"
              title={`Current Job Listings for ${country.name}`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-white">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title={`Questions Regarding ${country.name} Recruitment`}
            centered
          />
          <Accordion
            items={country.faqs.map((f, i) => ({
              id: `country-faq-${i}`,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </Container>
      </section>
    </>
  );
}
