import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MapPin, Calendar, Users, ShieldCheck, CheckCircle2, PhoneCall, ArrowRight, Globe } from 'lucide-react';
import { jobs } from '@/data/jobs';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { JobStatusBadge } from '@/components/ui/JobStatusBadge';
import { getJobPostingSchema } from '@/lib/seo';

export async function generateStaticParams() {
  return jobs.map((j) => ({
    slug: j.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: 'Job Vacancy Not Found' };

  return {
    title: `${job.title} in ${job.country} | Vacancy ${job.id}`,
    description: `Apply for ${job.title} vacancy in ${job.country}. Vacancies: ${job.vacanciesCount}, Salary: ${job.salary.currency} ${job.salary.amount}. Recruited by ${company.name}.`,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const jobPostingSchema = getJobPostingSchema(job);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Jobs', href: '/jobs' },
          { label: job.title },
        ]}
      />

      {/* Header Banner */}
      <section className="bg-[#17202A] text-white py-12 sm:py-16">
        <Container size="wide">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <JobStatusBadge status={job.status} />
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#1E3A5F] text-blue-200 border border-[#2C4E78] rounded">
                  {job.industry}
                </span>
                {job.recruitmentPartner && (
                  <span className="text-xs font-semibold px-2.5 py-1 bg-white/10 text-slate-200 rounded flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" />
                    Partner: {job.recruitmentPartner}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {job.title}
              </h1>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#C62828]" />
                  {job.country}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-slate-400" />
                  {job.vacanciesCount} Positions ({job.genderRequirement})
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  Deadline: {job.deadline}
                </span>
              </div>
            </div>

            <div className="shrink-0 bg-white/10 p-5 rounded-xl border border-white/20 text-center space-y-2">
              <div className="text-xs text-slate-300 uppercase font-bold tracking-wider">Salary Package</div>
              <div className="text-2xl font-black text-white">
                {job.salary.currency} {job.salary.amount}
              </div>
              <div className="text-xs text-slate-300">{job.salary.period}</div>
              <Button href={`/contact?subject=Inquiry for Job ${job.id}: ${job.title}`} variant="primary" className="w-full mt-2">
                Enquire About This Job
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Details */}
      <section className="py-16 bg-white">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Overview */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#17202A]">Job Overview</h3>
                <p className="text-base text-[#4B5563] leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Duties & Responsibilities */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#17202A]">Duties & Key Responsibilities</h3>
                <div className="grid grid-cols-1 gap-2">
                  {job.duties.map((duty, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-[#17202A]">
                      <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                      <span>{duty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Candidate Requirements */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#17202A]">Candidate Qualifications & Requirements</h3>
                <div className="grid grid-cols-1 gap-2">
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-[#17202A]">
                      <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Salary & Benefits */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#17202A]">Provided Benefits & Allowances</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.benefits.map((ben, idx) => (
                    <div key={idx} className="p-3 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB] text-xs font-semibold text-[#17202A]">
                      &bull; {ben}
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#17202A]">Required Application Documents</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {job.requiredDocuments.map((doc, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-[#E5E7EB] text-xs font-semibold text-[#4B5563]">
                      ✓ {doc}
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Candidate Notice */}
              <div className="bg-[#FDEDEC] border border-[#FADBD8] p-5 rounded-xl text-xs sm:text-sm text-[#791E1E] space-y-2">
                <div className="font-bold flex items-center gap-2 text-[#C62828]">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Important Verification Notice</span>
                </div>
                <p className="leading-relaxed">
                  All applications for this vacancy must be processed directly through KIRPA INTERNATIONAL’s official office at Shanti Marg, Lalitpur Metropolitan City–05, Kathmandu. Never pay money to unauthorized sub-agents.
                </p>
              </div>
            </div>

            {/* Right Specification Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-[#E5E7EB] space-y-4">
                <h4 className="font-bold text-[#17202A] text-lg border-b border-[#E5E7EB] pb-3">
                  Vacancy Specifications
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[#667085] block">Job Reference Code:</span>
                    <strong className="text-[#17202A] font-bold text-sm">{job.id}</strong>
                  </div>

                  <div>
                    <span className="text-[#667085] block">Destination Country:</span>
                    <strong className="text-[#17202A] font-semibold">{job.country}</strong>
                  </div>

                  <div>
                    <span className="text-[#667085] block">Industry Sector:</span>
                    <span className="text-[#17202A] font-semibold">{job.industry}</span>
                  </div>

                  <div>
                    <span className="text-[#667085] block">Required Experience:</span>
                    <span className="text-[#17202A] font-semibold">{job.experienceRequired}</span>
                  </div>

                  <div>
                    <span className="text-[#667085] block">Contract Duration:</span>
                    <span className="text-[#17202A] font-semibold">{job.contractDuration}</span>
                  </div>

                  <div>
                    <span className="text-[#667085] block">Working Hours:</span>
                    <span className="text-[#17202A] font-semibold">{job.workingHours}</span>
                  </div>

                  <div>
                    <span className="text-[#667085] block">Application Deadline:</span>
                    <strong className="text-[#C62828] font-bold">{job.deadline}</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
                  <Button href="/contact" variant="primary" className="w-full">
                    Enquire About This Job
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#17202A] hover:text-[#C62828]"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Helpline: {company.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
