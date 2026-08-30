import React from 'react';
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function WorkerSafety() {
  const safetyRules = [
    'Contact KIRPA exclusively through official channels (+977-1-5401847 / +977-9851451847).',
    'Verify any vacancy announcement before providing original documents or payments.',
    'Carefully read and understand your employment contract terms before signing.',
    'Never rely solely on unauthorized individuals or sub-agent intermediaries.',
    'Always keep digital and physical copies of your passport, work permit, and receipts.',
    'Report any suspicious recruitment activity or unauthorized fee demands immediately.',
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF8E7]/50 border-b border-[#FCE8B2]">
      <Container size="wide">
        <div className="bg-white rounded-2xl border border-[#FCE8B2] shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="flex items-center gap-2 text-[#9E730E] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            <Lock className="w-4 h-4 text-[#C69214]" />
            <span>Candidate Protection Notice</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#17202A] tracking-tight mb-4">
            Protect yourself during foreign employment recruitment
          </h2>

          <p className="text-sm sm:text-base text-[#5A6B82] max-w-3xl leading-relaxed mb-8">
            KIRPA INTERNATIONAL is committed to zero-tolerance against recruitment fraud. Follow these essential safety guidelines to ensure your overseas employment remains safe and lawful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {safetyRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E2E8F0]">
                <CheckCircle2 className="w-5 h-5 text-[#C69214] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-[#17202A] leading-relaxed">
                  {rule}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#FFF8E7] rounded-xl border border-[#FCE8B2]">
            <div className="text-xs sm:text-sm text-[#78570A] font-bold">
              Have questions about a recruitment notice? Call our official office at {company.phone}.
            </div>
            <Button href="/resources#recruitment-safety" variant="gold" size="sm" className="shrink-0">
              Recruitment Safety Guidelines
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
