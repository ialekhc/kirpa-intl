import React from 'react';
import { Metadata } from 'next';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { recruitmentSteps, recruitmentDisclaimer } from '@/data/recruitment';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Recruitment Process | 12-Step Foreign Employment Journey',
  description:
    'Detailed 12-step transparent recruitment process followed by KIRPA INTERNATIONAL for overseas Nepalese candidate recruitment, selection, visa clearance, and deployment.',
};

export default function RecruitmentPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Recruitment Process' }]} />

      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-12 sm:py-16 border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Transparent & Compliant Operations
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17202A] tracking-tight leading-tight">
              Our 12-Step Recruitment Process
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              KIRPA INTERNATIONAL adheres to a rigorous, government-authorized 12-step recruitment journey to guarantee ethical sourcing, worker welfare, and reliable deployment for foreign employers.
            </p>
          </div>
        </Container>
      </section>

      {/* 12 Steps Vertical Timeline */}
      <section className="py-16 bg-white border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="space-y-8 max-w-4xl mx-auto">
            {recruitmentSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-[#F8F9FA] p-6 sm:p-8 rounded-xl border border-[#E5E7EB] shadow-2xs hover:border-[#C62828] transition-all flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0F3B68] text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-xs">
                  {step.stepNumber}
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-xl font-bold text-[#17202A]">{step.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 bg-white border border-[#E5E7EB] text-[#1E3A5F] rounded">
                      Role: {step.responsibleParty}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#4B5563]">
                    {step.shortDescription}
                  </p>

                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {step.fullDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#FFF8E7] rounded-xl border border-[#FCE8B2] text-center max-w-3xl mx-auto space-y-2">
            <p className="text-xs sm:text-sm text-[#78570A] font-semibold">
              <strong>Disclaimer:</strong> {recruitmentDisclaimer}
            </p>
          </div>
        </Container>
      </section>

      {/* Candidate vs Employer Responsibilities */}
      <section className="py-16 bg-[#FAF9F5]">
        <Container size="wide">
          <SectionHeader
            eyebrow="Clear Accountabilities"
            title="Key Stakeholder Responsibilities"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] space-y-4">
              <h3 className="text-2xl font-bold text-[#17202A]">Candidate Responsibilities</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5A6B82]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C69214] shrink-0 mt-0.5" />
                  <span>Provide original, authentic passport and credential documents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span>Undergo medical check-ups at authorized health institutions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span>Attend mandatory Pre-Departure Orientation Training (PDOT).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                  <span>Abide by destination country laws and employment contract terms.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] space-y-4">
              <h3 className="text-2xl font-bold text-[#17202A]">Employer Responsibilities</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
                  <span>Issue verified demand documents and government work permissions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
                  <span>Provide agreed salary packages, accommodation, and medical insurance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
                  <span>Ensure a safe working environment compliant with local labor laws.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
                  <span>Coordinate airport pickup and local worker orientation upon arrival.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary">
              Have Questions? Contact Recruitment Desk
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
