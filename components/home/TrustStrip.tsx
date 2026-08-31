import React from 'react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';

export function TrustStrip() {
  return (
    <section className="bg-[#0B2545] text-white py-5 border-y border-[#1E3A5F]">
      <Container size="wide">
        <div className="space-y-4">
          <div className="text-center font-extrabold text-sm sm:text-base tracking-wide text-[#E5B22E] uppercase">
            Licensed &bull; Transparent &bull; Internationally Connected
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-[#2C4E78] bg-[#102F52] text-center text-xs text-slate-300 sm:grid-cols-2 sm:text-sm lg:grid-cols-4">
            <div className="px-4 py-3 lg:border-r lg:border-[#2C4E78]">
              <span className="text-slate-400">License:</span>{' '}
              <strong className="text-white font-bold">{company.licenseNumber}</strong>
            </div>
            <div className="border-t border-[#2C4E78] px-4 py-3 sm:border-l sm:border-t-0 lg:border-l-0 lg:border-r">
              <span className="text-slate-400">Location:</span>{' '}
              <strong className="text-white font-bold">Lalitpur, Nepal</strong>
            </div>
            <div className="border-t border-[#2C4E78] px-4 py-3 lg:border-r">
              <span className="text-slate-400">Partner:</span>{' '}
              <a
                href={company.europeanPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline decoration-[#D4A017] underline-offset-4 hover:text-[#D4A017]"
              >
                {company.europeanPartner.name}
              </a>
            </div>
            <div className="border-t border-[#2C4E78] px-4 py-3 sm:border-l lg:border-l-0 lg:border-t-0">
              <span className="text-slate-400">Markets:</span>{' '}
              <strong className="text-[#D4A017] font-bold">Romania &bull; Bulgaria &bull; Greece</strong>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
