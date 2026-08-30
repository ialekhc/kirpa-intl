import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Image Column */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0] aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                alt="KIRPA INTERNATIONAL professional candidate briefing and recruitment interview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Overlay License Card */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-[#0B2545] text-white p-4 sm:p-5 rounded-xl border border-[#1E3A5F] shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-2 text-[#D4A017] mb-1">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">Government Licensed</span>
              </div>
              <p className="text-xs text-slate-300">
                Operating in strict compliance under Nepal Department of Foreign Employment guidelines.
              </p>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <SectionHeader
              eyebrow="Who We Are"
              title="Responsible recruitment built on trust"
            />
            
            <p className="text-base sm:text-lg text-[#5A6B82] leading-relaxed">
              <strong className="text-[#0F3B68]">{company.name}</strong> is a licensed Nepal-based foreign employment recruitment company helping connect Nepalese workers with verified employment opportunities abroad.
            </p>

            <p className="text-base text-[#5A6B82] leading-relaxed">
              Our focus is to maintain a clear, professional, and transparent recruitment experience for workers and international employers throughout the recruitment, selection, visa documentation, and deployment process.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C69214] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-[#17202A]">
                  Government License No. {company.licenseNumber} fully verified
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C69214] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-[#17202A]">
                  Direct coordination with certified international employers & partners
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C69214] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-[#17202A]">
                  Ethical candidate pre-screening and comprehensive welfare support
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="/about" variant="primary">
                About KIRPA INTERNATIONAL
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
