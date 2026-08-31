import React from 'react';
import { Phone, Globe, Building2 } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#0B2545] text-white">
      <Container size="wide" className="text-center space-y-6">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] bg-[#1E3A5F] px-3 py-1 rounded-md border border-[#2C4E78]">
          Start Your Journey
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Your international recruitment journey starts here.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you are a job seeker pursuing career opportunities abroad or an employer seeking dependable talent from Nepal, KIRPA INTERNATIONAL is your trusted recruitment bridge.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="/countries" variant="gold" size="lg">
            <Globe className="w-5 h-5" />
            Explore Countries
          </Button>
          <Button href="/employers#enquiry" variant="secondary" size="lg" className="border border-slate-700">
            <Building2 className="w-5 h-5" />
            Recruit From Nepal
          </Button>
        </div>

        <div className="pt-6 border-t border-[#1E3A5F] max-w-md mx-auto flex items-center justify-center gap-2 text-sm text-slate-300">
          <Phone className="w-4 h-4 text-[#D4A017]" />
          <span>Questions? Call our helpline:</span>
          <a href={`tel:${company.mobileRaw}`} className="font-bold text-white hover:text-[#D4A017] transition-colors">
            {company.mobile}
          </a>
        </div>
      </Container>
    </section>
  );
}
