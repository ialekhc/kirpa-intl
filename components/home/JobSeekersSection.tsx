import React from 'react';
import Link from 'next/link';
import { Globe, Workflow, FileText, PhoneCall, ShieldAlert, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { company } from '@/data/company';

export function JobSeekersSection() {
  const actions = [
    {
      title: 'Explore Destinations',
      desc: 'Learn about recruitment opportunities in Romania, Bulgaria, Greece, and other markets.',
      href: '/countries',
      icon: Globe,
    },
    {
      title: 'Recruitment Process',
      desc: 'Understand the step-by-step procedure from application to visa deployment.',
      href: '/recruitment',
      icon: Workflow,
    },
    {
      title: 'Required Documents',
      desc: 'Check the official document requirements needed for your application.',
      href: '/resources#required-documents',
      icon: FileText,
    },
    {
      title: 'Contact KIRPA Directly',
      desc: 'Get in touch with our official office in Lalitpur for verified candidate guidance.',
      href: '/contact',
      icon: PhoneCall,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              eyebrow="For Candidate Aspirants"
              title="Looking for an opportunity abroad?"
              description="Explore destination countries, understand the recruitment process, prepare required documents, and contact KIRPA INTERNATIONAL through official channels."
            />

            {/* Safety Callout Box */}
            <div className="bg-[#FFF8E7] border border-[#FCE8B2] p-5 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-[#9E730E] font-bold text-sm">
                <ShieldAlert className="w-5 h-5 shrink-0 text-[#C69214]" />
                <span>Important Safety Callout</span>
              </div>
              <p className="text-xs sm:text-sm text-[#78570A] leading-relaxed font-semibold">
                Always verify employment opportunities exclusively through official KIRPA INTERNATIONAL contact channels ({company.phone} / {company.mobile}). Never pay unauthorized intermediaries or sub-agents.
              </p>
            </div>
          </div>

          {/* Right Action Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {actions.map((act, idx) => {
              const IconComp = act.icon;
              return (
                <Link
                  key={idx}
                  href={act.href}
                  className="bg-white p-6 rounded-xl border border-[#E2E8F0] hover:border-[#0F3B68] hover:shadow-xs transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EBF3FA] text-[#0F3B68] group-hover:bg-[#0F3B68] group-hover:text-[#D4A017] transition-colors flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#17202A] text-base group-hover:text-[#0F3B68] transition-colors">
                      {act.title}
                    </h4>
                    <p className="text-xs text-[#5A6B82] leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#FAF9F5] flex items-center gap-1 text-xs font-bold text-[#0F3B68]">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
