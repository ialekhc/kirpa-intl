import React from 'react';
import { ArrowRight } from 'lucide-react';
import { recruitmentSteps, recruitmentDisclaimer } from '@/data/recruitment';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export function RecruitmentSteps() {
  const previewSteps = recruitmentSteps.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <Container size="wide">
        <SectionHeader
          eyebrow="Structured Process"
          title="A clear recruitment journey"
          description="Transparent 12-step recruitment framework ensuring legal compliance, candidate welfare, and employer satisfaction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {previewSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#FAF9F5] p-6 rounded-xl border border-[#E2E8F0] relative flex flex-col justify-between hover:border-[#0F3B68] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-black text-2xl text-[#0F3B68]">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white border border-[#E2E8F0] rounded text-[#0F3B68]">
                    {step.responsibleParty}
                  </span>
                </div>
                <h4 className="font-bold text-[#17202A] text-lg mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5A6B82] leading-relaxed">
                  {step.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer & See Full Process Button */}
        <div className="mt-10 p-6 bg-[#FAF9F5] rounded-xl border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#5A6B82] leading-relaxed max-w-2xl">
            <strong>Notice:</strong> {recruitmentDisclaimer}
          </p>
          <Button href="/recruitment" variant="primary" className="shrink-0">
            See Full 12-Step Process
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
