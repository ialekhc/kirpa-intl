import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export function PartnershipSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#E2E8F0] relative overflow-hidden">
      <Container size="wide">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-10 lg:p-12 relative">
          <SectionHeader
            eyebrow="European Recruitment Partnership"
            title="Connecting Nepal with opportunities across Europe"
            description="A structured recruitment framework supporting verified workforce sourcing and employment coordination."
            centered
          />

          {/* Partnership Highlight Box */}
          <div className="my-8 p-6 bg-[#0B2545] text-white rounded-xl border border-[#1E3A5F] text-center max-w-4xl mx-auto shadow-md">
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
              <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-[#FAF8F3] p-2 sm:h-32 sm:w-32">
                <Image
                  src="/kripa-intl.svg"
                  alt="KIRPA INTERNATIONAL PVT. LTD."
                  width={508}
                  height={508}
                  className="h-full w-full object-contain"
                  sizes="(max-width: 640px) 112px, 128px"
                />
              </div>

              <span className="text-3xl font-light text-[#D4A017]" aria-hidden="true">
                &times;
              </span>

              <a
                href={company.europeanPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Global Work Specialist – European Recruitment Partner website"
                className="flex h-28 w-full max-w-sm items-center justify-center rounded-xl bg-white p-4 transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545] sm:h-32"
              >
                <Image
                  src="/global-work-specialist-logo.png"
                  alt="Global Work Specialist – European Recruitment Partner"
                  width={928}
                  height={300}
                  className="h-auto max-h-full w-full object-contain"
                  sizes="(max-width: 640px) calc(100vw - 96px), 320px"
                />
              </a>
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#D4A017] sm:text-sm">
              {company.europeanPartner.tagline}
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-[#FAF9F5] p-5 rounded-xl border border-[#E2E8F0] flex items-center gap-4">
              <span className="text-4xl shrink-0">🇷🇴</span>
              <div>
                <h4 className="font-bold text-[#0F3B68] text-lg">Romania</h4>
                <p className="text-xs text-[#5A6B82]">
                  Production Lines, Construction, Warehousing & Services
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-5 rounded-xl border border-[#E2E8F0] flex items-center gap-4">
              <span className="text-4xl shrink-0">🇧🇬</span>
              <div>
                <h4 className="font-bold text-[#0F3B68] text-lg">Bulgaria</h4>
                <p className="text-xs text-[#5A6B82]">
                  Manufacturing, Construction, Hospitality & Logistics
                </p>
              </div>
            </div>

            <div className="bg-[#FAF9F5] p-5 rounded-xl border border-[#E2E8F0] flex items-center gap-4">
              <span className="text-4xl shrink-0">🇬🇷</span>
              <div>
                <h4 className="font-bold text-[#0F3B68] text-lg">Greece</h4>
                <p className="text-xs text-[#5A6B82]">
                  Hospitality, Tourism, Agriculture & Food Processing
                </p>
              </div>
            </div>
          </div>

          {/* Explanation Text */}
          <p className="text-center text-sm sm:text-base text-[#5A6B82] max-w-3xl mx-auto leading-relaxed mb-8">
            This international partnership supports workforce sourcing, candidate screening, documentation coordination, and employment placement between qualified Nepalese workers and participating European employers in Bulgaria, Greece, and Romania.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/countries" variant="european">
              <Globe className="w-4 h-4" />
              Explore European Opportunities
            </Button>
            <Button href="/about#partnership" variant="outline">
              Learn About Our Partnership
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
