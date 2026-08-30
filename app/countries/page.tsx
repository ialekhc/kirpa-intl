import React from 'react';
import { Metadata } from 'next';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DestinationCountries } from '@/components/home/DestinationCountries';

export const metadata: Metadata = {
  title: 'Destination Countries | Bulgaria, Greece, Romania Recruitment',
  description:
    'Explore overseas employment destination countries supported through KIRPA INTERNATIONAL and European recruitment partner Global Work Specialist.',
};

export default function CountriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Destination Countries' }]} />

      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-12 sm:py-16 border-b border-[#E5E7EB]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C62828] mb-2 block">
              International Employment Horizons
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17202A] tracking-tight leading-tight">
              Supported Destination Countries
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed">
              KIRPA INTERNATIONAL works in partnership with European recruitment partner <strong>{company.europeanPartner.name}</strong> for foreign employment sourcing across Bulgaria, Greece, and Romania.
            </p>
          </div>
        </Container>
      </section>

      <DestinationCountries />
    </>
  );
}
