import React from 'react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';

export function TrustStrip() {
  return (
    <section className="bg-[#0B2545] text-white py-5 border-y border-[#1E3A5F]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="font-extrabold text-sm sm:text-base tracking-wide text-[#E5B22E] uppercase">
            Licensed &bull; Transparent &bull; Internationally Connected
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
            <div>
              <span className="text-slate-400">License:</span>{' '}
              <strong className="text-white font-bold">{company.licenseNumber}</strong>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div>
              <span className="text-slate-400">Location:</span>{' '}
              <strong className="text-white font-bold">Lalitpur, Nepal</strong>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div>
              <span className="text-slate-400">Partner:</span>{' '}
              <strong className="text-white font-bold">{company.europeanPartner.name}</strong>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div>
              <span className="text-slate-400">Markets:</span>{' '}
              <strong className="text-[#D4A017] font-bold">Bulgaria &bull; Greece &bull; Romania</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
