import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { ShieldCheck, Target, Eye, CheckCircle2, ArrowRight, Mail } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us | Responsible Foreign Employment Recruitment',
  description:
    'Learn about KIRPA INTERNATIONAL PVT. LTD., a licensed Nepal-based foreign employment agency dedicated to transparent workforce recruitment and European partnerships.',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Integrity',
      description: 'Adhering strictly to ethical recruitment rules and government regulations without compromise.',
    },
    {
      title: 'Transparency',
      description: 'Providing candidates and employers with clear, unvarnished information regarding job terms and processing.',
    },
    {
      title: 'Respect',
      description: 'Upholding the dignity, rights, and safety of every Nepalese candidate throughout their deployment.',
    },
    {
      title: 'Responsibility',
      description: 'Taking active ownership of screening, documentation, pre-departure preparation, and post-deployment welfare.',
    },
    {
      title: 'Professionalism',
      description: 'Delivering dependable, high-standard workforce solutions to international employers.',
    },
    {
      title: 'Partnership',
      description: 'Fostering collaborative relationships with certified global partners such as Global Work Specialist.',
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-12 sm:py-16 border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              Who We Are
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17202A] tracking-tight leading-tight">
              Responsible recruitment built on compliance and trust
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              {company.name} is an authorized foreign employment recruitment agency in Nepal, helping bridge Nepalese talent with verified overseas career opportunities.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview & Licensing Section */}
      <section className="py-16 bg-white border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="Government Authorization"
                title="Licensed & Fully Compliant"
              />
              
              <p className="text-base text-[#4B5563] leading-relaxed">
                Operating under Ministry of Labour, Employment and Social Security License No. <strong>{company.licenseNumber}</strong>, KIRPA INTERNATIONAL operates with strict adherence to the Department of Foreign Employment (DOFE), Nepal.
              </p>

              <p className="text-base text-[#4B5563] leading-relaxed">
                We believe overseas employment should be a safe, dignified, and transformative experience. Our structured recruitment operations ensure that every candidate is thoroughly prepared, legally cleared, and placed with legitimate employers.
              </p>

              <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#E5E7EB] space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#17202A] text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#C62828]" />
                  <span>Company Registration Details</span>
                </div>
                <div className="text-xs text-[#667085] space-y-1">
                  <div>Company Name: <strong>{company.name}</strong></div>
                  <div>Govt License No: <strong>{company.licenseNumber}</strong></div>
                  <div>Head Office: <strong>{company.address.street}, {company.address.municipality}, {company.address.city}, Nepal</strong></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#E5E7EB] aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  alt="KIRPA INTERNATIONAL office recruitment interview and administration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#FAF9F5] border-b border-[#E2E8F0]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#EBF3FA] text-[#0F3B68] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#17202A]">Our Mission</h3>
              <p className="text-base text-[#5A6B82] leading-relaxed">
                To connect Nepalese workers with responsible international employment opportunities through professional, transparent, and compliant recruitment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#FFF8E7] text-[#C69214] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#17202A]">Our Vision</h3>
              <p className="text-base text-[#5A6B82] leading-relaxed">
                To become a trusted bridge between Nepalese talent and international employers through sustainable workforce partnerships built on integrity and mutual growth.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <Container size="wide">
          <SectionHeader
            eyebrow="Guiding Principles"
            title="Core Values"
            description="The values that shape every candidate interview, employer agreement, and deployment protocol."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-[#F8F9FA] p-6 rounded-xl border border-[#E5E7EB] space-y-2">
                <div className="flex items-center gap-2 text-[#C62828] font-bold text-[#17202A] text-lg">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{val.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* European Partnership Focus */}
      <section id="partnership" className="py-16 bg-[#1E3A5F] text-white">
        <Container size="wide">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-md">
              {company.europeanPartner.partnershipRole}
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white">
              International Strategic Partner: {company.europeanPartner.name}
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              {company.europeanPartner.description}
            </p>

            <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
              <Button href="/countries" variant="primary" className="w-full sm:w-auto">
                View Jobs by Country
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href="/contact"
                variant="inverse"
                className="w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                Contact Our Recruitment Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
