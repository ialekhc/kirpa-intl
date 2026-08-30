import React from 'react';
import { Metadata } from 'next';
import {
  Workflow,
  FileText,
  UserCheck,
  ShieldAlert,
  PlaneTakeoff,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { workerResources } from '@/data/resources';
import { faqs } from '@/data/faqs';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Worker Resources & Candidate Safety | KIRPA INTERNATIONAL',
  description:
    'Essential guidance for Nepalese job seekers: document checklists, interview preparation tips, recruitment safety rules, pre-departure guidelines, and FAQs.',
};

const iconMap: Record<string, React.ElementType> = {
  Workflow,
  FileText,
  UserCheck,
  ShieldAlert,
  PlaneTakeoff,
};

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Worker Resources' }]} />

      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-12 sm:py-16 border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Candidate Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17202A] tracking-tight leading-tight">
              Worker Resources & Guidance
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              Clear, transparent information for Nepalese candidates seeking foreign employment opportunities.
            </p>
          </div>
        </Container>
      </section>

      {/* Resource Guides */}
      <section className="py-16 bg-white border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workerResources.map((res) => {
              const IconComp = iconMap[res.iconName] || FileText;
              return (
                <div
                  key={res.id}
                  id={res.id}
                  className="bg-[#F8F9FA] p-6 sm:p-8 rounded-xl border border-[#E5E7EB] space-y-4 shadow-2xs scroll-mt-24"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FDEDEC] text-[#C62828] flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#17202A]">{res.title}</h3>
                      <p className="text-xs text-[#667085]">{res.summary}</p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                    {res.details.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4B5563]">
                        <CheckCircle2 className="w-4 h-4 text-[#C62828] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-[#F8F9FA] border-b border-[#E5E7EB] scroll-mt-24">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Help & Support"
            title="Candidate & General FAQs"
            description="Answers to common questions regarding foreign employment licensing, documentation, and recruitment partnerships."
            centered
          />
          <Accordion
            items={faqs.map((f) => ({
              id: f.id,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white text-center">
        <Container size="narrow" className="space-y-4">
          <h3 className="text-2xl font-bold text-[#17202A]">Need Direct Verification or Assistance?</h3>
          <p className="text-sm text-[#667085] max-w-md mx-auto">
            Our recruitment counselors are available at our official Lalitpur office to assist you.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary">
              Contact KIRPA Office Directly
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
