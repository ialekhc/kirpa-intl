'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, Phone, Mail, MapPin, Briefcase } from 'lucide-react';
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

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 flex w-[min(100%,24rem)] flex-col justify-between overflow-y-auto bg-white shadow-xl">
        <div>
          {/* Header */}
          <div className="flex min-w-0 items-center justify-between gap-3 border-b border-[#E2E8F0] p-4">
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
          <nav className="px-4 py-6 space-y-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-3 py-2.5 text-base font-bold text-[#17202A] hover:text-[#0F3B68] hover:bg-[#FAF9F5] rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Actions & Contact Info */}
        <div className="p-4 border-t border-[#E2E8F0] bg-[#FAF9F5] space-y-4">
          <div className="space-y-2">
            <Button href="/jobs" onClick={onClose} variant="primary" className="w-full">
              <Briefcase className="w-4 h-4" />
              View Jobs
            </Button>
            <Button href="/employers#contact-employers" onClick={onClose} variant="outline" className="w-full">
              Partner With Us
            </Button>
          </div>

          <div className="text-xs text-[#5A6B82] space-y-2 pt-2 border-t border-[#E2E8F0]">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C69214]" />
              <span>{company.phone} / {company.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C69214]" />
              <span>{company.email}</span>
            </div>
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
