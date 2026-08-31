import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Globe, Building2 } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#FAF9F5] via-white to-white pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-[#E2E8F0]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFF8E7] text-[#9E730E] border border-[#FCE8B2] rounded-full text-xs sm:text-sm font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#C69214]" />
              <span>Licensed Overseas Recruitment Company &bull; Nepal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F3B68] tracking-tight leading-[1.15]">
              Connecting Nepalese Talent With <span className="text-[#C69214]">Global Opportunities</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5A6B82] leading-relaxed max-w-2xl">
              {company.name} connects skilled, semi-skilled, and general workers from Nepal with responsible international employment opportunities through transparent and professional recruitment.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3">
              <Button href="/countries" variant="primary" size="lg">
                <Globe className="w-5 h-5" />
                Explore Countries
              </Button>
              <Button href="/employers#contact-employers" variant="outline" size="lg">
                <Building2 className="w-5 h-5" />
                Employer Enquiry
              </Button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] bg-[#FAF9F5] aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
                alt="Nepalese workforce recruitment and international career opportunities"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white bg-[#0B2545]/70 backdrop-blur-xs p-3.5 rounded-xl border border-white/20">
                <p className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
                  Government License No. {company.licenseNumber}
                </p>
                <p className="text-sm font-extrabold text-white mt-0.5">
                  Authorized Foreign Employment Recruitment Company
                </p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
