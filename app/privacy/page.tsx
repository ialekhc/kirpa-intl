import React from 'react';
import { Metadata } from 'next';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Protection & Candidate Confidentiality',
  description:
    'Privacy Policy for KIRPA INTERNATIONAL PVT. LTD. explaining candidate data protection, document confidentiality, and foreign employment application record policies.',
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="py-12 sm:py-16 bg-white">
        <Container size="narrow" className="space-y-6 text-[#17202A]">
          <h1 className="text-3xl font-black tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-[#667085]">Last Updated: August 2026</p>

          <div className="space-y-4 text-sm text-[#4B5563] leading-relaxed">
            <h3 className="text-lg font-bold text-[#17202A]">1. Data Collection Principles</h3>
            <p>
              {company.name} (License No. {company.licenseNumber}) respects candidate confidentiality. We collect personal information (including names, contact numbers, passports, CVs, and medical reports) solely for foreign employment verification, visa processing, and recruitment coordination with certified employers and partners (such as {company.europeanPartner.name}).
            </p>

            <h3 className="text-lg font-bold text-[#17202A]">2. Information Disclosure</h3>
            <p>
              Candidate records are shared exclusively with relevant government labor departments (DOFE Nepal), diplomatic missions, medical clinics, accredited trade test centers, and participating international employers for contract fulfillment. We do not sell or monetize personal candidate data.
            </p>

            <h3 className="text-lg font-bold text-[#17202A]">3. Data Security</h3>
            <p>
              We implement physical and digital safeguards to protect stored candidate records against unauthorized access, loss, or disclosure.
            </p>

            <h3 className="text-lg font-bold text-[#17202A]">4. Official Communication</h3>
            <p>
              KIRPA INTERNATIONAL communicates only through official phone numbers ({company.phone}, {company.mobile}) and email ({company.email}).
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
