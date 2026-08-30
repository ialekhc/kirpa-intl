import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';
import { company } from '@/data/company';

export function TopBar() {
  return (
    <div className="hidden sm:block bg-[#0B2545] text-white text-xs py-2 border-b border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-200 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#D4A017] shrink-0" />
          <span>Govt. License No: <strong className="text-white font-bold">{company.licenseNumber}</strong></span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-300">{company.trustStatement}</span>
        </div>

        <div className="flex items-center gap-4 text-slate-200">
          <a
            href={`tel:${company.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>{company.phone}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>{company.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
