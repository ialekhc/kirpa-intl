import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'For International Employers | Direct Workforce Sourcing Contact',
  description:
    'Directly contact KIRPA INTERNATIONAL PVT. LTD. to recruit skilled, semi-skilled, and general workers from Nepal for your European or international enterprise.',
};

export default function EmployersPage() {
  const whyNepal = [
    { title: 'Hardworking & Versatile', desc: 'Nepalese workers are globally recognized for dedication, adaptability, and high productivity.' },
    { title: 'Wide Skill Spectrum', desc: 'Sourcing capabilities spanning skilled trade technicians, manufacturing operators, and hospitality staff.' },
    { title: 'Cost-Effective Sourcing', desc: 'Streamlined recruitment management in full compliance with Nepalese and international labor laws.' },
    { title: 'Strong European Track Record', desc: 'Proven partnership frameworks with Global Work Specialist for Bulgaria, Greece, and Romania.' },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: 'For Employers' }]} />

      {/* Hero Banner */}
      <section className="bg-[#0B2545] text-white py-16 sm:py-20 border-b border-[#1E3A5F]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] bg-[#1E3A5F] px-3 py-1 rounded-md border border-[#2C4E78]">
                International Corporate Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Recruit qualified workers from Nepal
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {company.name} provides end-to-end foreign employment recruitment services for international companies seeking dependable manpower solutions.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A017] bg-[#1E3A5F] px-3.5 py-2 rounded-lg border border-[#2C4E78] w-fit">
                <Globe className="w-4 h-4 text-blue-300" />
                <span>European Recruitment Partner: {company.europeanPartner.name}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#1E3A5F] p-6 rounded-2xl border border-[#2C4E78] space-y-4 shadow-xl">
              <h4 className="font-bold text-white text-lg">Govt. Licensed Agency</h4>
              <p className="text-xs text-slate-200">
                Operating under Ministry of Labour License No. <strong>{company.licenseNumber}</strong> in Kathmandu, Nepal.
              </p>
              <div className="pt-2 text-xs text-slate-300 border-t border-[#2C4E78] space-y-2">
                <div>Direct candidate sourcing &bull; Trade test verification &bull; Legal visa clearance</div>
                <Button href={`tel:${company.phoneRaw}`} variant="gold" size="sm" className="w-full mt-2">
                  <Phone className="w-4 h-4" />
                  Call Office: {company.phone}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Nepal Section */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <Container size="wide">
          <SectionHeader
            eyebrow="Workforce Advantage"
            title="Why Recruit Workers From Nepal?"
            description="The key advantages international employers experience when sourcing talent through KIRPA INTERNATIONAL."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyNepal.map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2E8F0] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3FA] text-[#0F3B68] flex items-center justify-center font-black">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-[#17202A] text-lg">{item.title}</h4>
                <p className="text-xs text-[#5A6B82] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* European Partnership Details */}
      <section id="european-partnership" className="py-16 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <Container size="wide">
          <div className="bg-[#1E3A5F] text-white rounded-2xl p-8 sm:p-10 border border-[#152943] space-y-6">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-[#D4A017] shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white">European Partner Network</h3>
                <p className="text-xs text-blue-200">{company.europeanPartner.name} &bull; Bulgaria, Greece, Romania</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
              For European employers operating in Bulgaria, Greece, and Romania, our joint partnership with Global Work Specialist facilitates seamless demand clearance, local visa embassy coordination, trade testing, and deployment logistics.
            </p>
          </div>
        </Container>
      </section>

      {/* Direct Employer Contact Options Section (Replaces Form) */}
      <section id="contact-employers" className="py-16 sm:py-24 bg-white">
        <Container size="wide">
          <SectionHeader
            eyebrow="Direct Corporate Sourcing"
            title="Discuss Your Manpower Requirements Directly"
            description="Connect directly with our recruitment directors to submit demand proposals, review candidate availability, or arrange trade test schedules."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Phone Call Card */}
            <div className="bg-[#FAF9F5] p-8 rounded-2xl border border-[#E2E8F0] text-center space-y-4 shadow-2xs hover:border-[#0F3B68] transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-[#0F3B68] text-[#D4A017] flex items-center justify-center mx-auto">
                  <Phone className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-[#0F3B68]">Call Headquarters</h4>
                <p className="text-xs text-[#5A6B82]">
                  Speak directly with our overseas recruitment team regarding candidate specifications.
                </p>
                <div className="text-sm font-black text-[#17202A]">{company.phone} / {company.mobile}</div>
              </div>
              <Button href={`tel:${company.phoneRaw}`} variant="primary" className="w-full">
                <Phone className="w-4 h-4" />
                Call +977-1-5401847
              </Button>
            </div>

            {/* Email Card */}
            <div className="bg-[#FAF9F5] p-8 rounded-2xl border border-[#E2E8F0] text-center space-y-4 shadow-2xs hover:border-[#0F3B68] transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-[#C69214] text-white flex items-center justify-center mx-auto">
                  <Mail className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-[#0F3B68]">Send Demand Letters</h4>
                <p className="text-xs text-[#5A6B82]">
                  Email official employer demand letters, job specifications, and power of attorney documents.
                </p>
                <div className="text-xs font-bold text-[#0F3B68] break-all">{company.email}</div>
              </div>
              <Button href={`mailto:${company.email}`} variant="gold" className="w-full">
                <Mail className="w-4 h-4" />
                Send Email Proposal
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#FAF9F5] p-8 rounded-2xl border border-[#E2E8F0] text-center space-y-4 shadow-2xs hover:border-[#0F3B68] transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mx-auto">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-[#0F3B68]">WhatsApp Chat</h4>
                <p className="text-xs text-[#5A6B82]">
                  Instant WhatsApp messaging for fast document exchanges and employer queries.
                </p>
                <div className="text-sm font-black text-[#17202A]">{company.mobile}</div>
              </div>
              <Button href={`https://wa.me/${company.mobileRaw.replace('+', '')}`} external variant="secondary" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white">
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
