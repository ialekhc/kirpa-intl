import React from 'react';
import { Metadata } from 'next';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | Recruitment Terms & Verification Rules',
  description:
    'Terms of Service for KIRPA INTERNATIONAL PVT. LTD. outlining website usage rules, recruitment verification disclaimers, and candidate application terms.',
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <section className="py-12 sm:py-16 bg-white">
        <Container size="narrow" className="space-y-6 text-[#17202A]">
          <h1 className="text-3xl font-black tracking-tight">Terms of Service</h1>
          <p className="text-xs text-[#667085]">Last Updated: August 2026</p>

          <div className="space-y-4 text-sm text-[#4B5563] leading-relaxed">
            <h3 className="text-lg font-bold text-[#17202A]">1. Acceptance of Terms</h3>
            <p>
              By accessing this website, you agree to comply with these terms. {company.name} is a government-licensed foreign employment agency (License No. {company.licenseNumber}).
            </p>

            <h3 className="text-lg font-bold text-[#17202A]">2. Vacancy Listings & Application Rules</h3>
            <p>
              All published job listings represent authentic employer demand letters subject to pre-approval and final labor clearance by the Department of Foreign Employment (DOFE), Nepal. Published salary figures and contract durations reflect approved demand criteria.
            </p>

            <h3 className="text-lg font-bold text-[#17202A]">3. European Partnership Context</h3>
            <p>
              Recruitment coordination for Bulgaria, Greece, and Romania is conducted in official partnership with {company.europeanPartner.name}. Each party operates within its authorized jurisdiction and regulatory framework.
            </p>

            <h3 className="text-lg font-bold text-[#17202A]">4. Anti-Fraud & Verification Notice</h3>
            <p>
              Candidates are strictly advised to verify all recruitment notices exclusively through official contact details listed on this website. KIRPA INTERNATIONAL disclaims liability for transactions made to unauthorized sub-agents.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
