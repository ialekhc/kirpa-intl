import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { company } from '@/data/company';
import { footerLinks } from '@/data/navigation';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white pt-12 sm:pt-16 pb-8 border-t border-[#1E3A5F]">
      <Container size="wide">
        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 border-b border-[#1E3A5F]">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-1 space-y-4">
            <Logo variant="light" />
            <p className="text-xs text-slate-300 leading-relaxed">
              Licensed foreign employment recruitment agency connecting Nepalese workers with responsible international employment opportunities.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1E3A5F] text-slate-200 rounded-md text-xs font-medium border border-[#2C4E78]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>License No: <strong>{company.licenseNumber}</strong></span>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h5 className="text-sm font-bold text-[#D4A017] uppercase tracking-wider mb-3">Company</h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerLinks.company.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Job Seekers */}
          <div>
            <h5 className="text-sm font-bold text-[#D4A017] uppercase tracking-wider mb-3">Job Seekers</h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerLinks.jobSeekers.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Employers */}
          <div>
            <h5 className="text-sm font-bold text-[#D4A017] uppercase tracking-wider mb-3">Employers</h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {footerLinks.employers.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Information */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-[#D4A017] uppercase tracking-wider mb-3">Contact Us</h5>
            <div className="text-xs text-slate-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <span>{company.address.street}, {company.address.municipality}, {company.address.city}, {company.address.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href={`tel:${company.mobileRaw}`} className="hover:text-white transition-colors">
                  {company.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 {company.name} All Rights Reserved. Govt. License No. {company.licenseNumber}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
