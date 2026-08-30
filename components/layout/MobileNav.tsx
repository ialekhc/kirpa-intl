'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, Phone, Mail, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { company } from '@/data/company';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-navigation"
      className={`fixed inset-0 z-50 transition-visibility duration-300 lg:hidden ${
        isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
      }`}
      role="dialog"
      aria-modal={isOpen}
      aria-hidden={!isOpen}
      aria-label="Mobile navigation"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`absolute inset-y-0 right-0 w-[min(100%,24rem)] overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="sticky top-0 z-10 flex min-w-0 items-center justify-between gap-3 border-b border-[#E2E8F0] bg-white/95 p-4 backdrop-blur-xs">
            <Logo onClick={onClose} size="sm" className="min-w-0" />
            <button
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[#5A6B82] hover:bg-[#FAF9F5] hover:text-[#0F3B68] focus:outline-none focus:ring-2 focus:ring-[#0F3B68]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 py-5" aria-label="Main navigation">
            <p className="mb-2 px-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#9E730E]">
              Menu
            </p>
            <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between border-b border-[#EDF2F7] px-4 py-2.5 text-sm font-bold leading-5 text-[#17202A] transition-colors last:border-b-0 hover:bg-[#FAF9F5] hover:text-[#0F3B68]"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-[#94A3B8] transition-transform group-hover:translate-x-0.5 group-hover:text-[#C69214]" />
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom Actions & Contact Info */}
        <div className="space-y-4 border-t border-[#E2E8F0] bg-[#FAF9F5] p-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#9E730E]">
            Quick actions
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Button href="/jobs" onClick={onClose} variant="primary" size="sm" className="w-full min-h-10">
              <Briefcase className="w-4 h-4" />
              View Jobs
            </Button>
            <Button href="/employers#contact-employers" onClick={onClose} variant="outline" size="sm" className="w-full min-h-10">
              Partner With Us
            </Button>
          </div>

          <div className="space-y-2 border-t border-[#E2E8F0] pt-3 text-xs leading-4 text-[#5A6B82]">
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#9E730E]">
              Contact
            </p>
            <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 hover:text-[#0F3B68]">
              <Phone className="w-3.5 h-3.5 text-[#C69214]" />
              <span>{company.phone} / {company.mobile}</span>
            </a>
            <a href={`mailto:${company.email}`} className="flex min-w-0 items-center gap-2 hover:text-[#0F3B68]">
              <Mail className="w-3.5 h-3.5 text-[#C69214]" />
              <span className="truncate">{company.email}</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C69214] shrink-0 mt-0.5" />
              <span>{company.address.street}, {company.address.municipality}, {company.address.city}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
