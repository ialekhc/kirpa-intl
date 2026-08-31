import React from 'react';
import { ShieldCheck, MessageSquareCheck, Globe, UserCheck, FileCheck, HelpCircle } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function WhyKirpa() {
  const pillars = [
    {
      title: 'Licensed Recruitment Agency',
      description: `Officially government licensed (License No. ${company.licenseNumber}) under Ministry of Labour Nepal regulations.`,
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Communication',
      description: 'Clear and honest recruitment details communicated strictly through verified official channels.',
      icon: MessageSquareCheck,
    },
    {
      title: 'European Partnerships',
      description: 'Recruitment coordination with Global Work Specialist for Romania, Bulgaria, and Greece.',
      icon: Globe,
    },
    {
      title: 'Rigorous Candidate Screening',
      description: 'Structured trade testing, language assessment, and background checks tailored to employer needs.',
      icon: UserCheck,
    },
    {
      title: 'Documentation Support',
      description: 'End-to-end guidance for work permits, medical fitness, consular visas, and legal clearances.',
      icon: FileCheck,
    },
    {
      title: 'Candidate Welfare & Guidance',
      description: 'Pre-departure orientation and ongoing support to protect candidate rights during deployment.',
      icon: HelpCircle,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <Container size="wide">
        <SectionHeader
          eyebrow="Our Commitment"
          title={`Why work with ${company.shortName}?`}
          description="Built on principles of compliance, candidate safety, and dependable employer relations."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F5] p-6 rounded-xl border border-[#E2E8F0] hover:border-[#0F3B68] hover:shadow-xs transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EBF3FA] text-[#0F3B68] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#17202A] text-lg">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A6B82] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
