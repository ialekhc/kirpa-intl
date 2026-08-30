'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { MobileNav } from '@/components/layout/MobileNav';
import { Logo } from '@/components/ui/Logo';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-[#E2E8F0] shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 min-w-0 items-center justify-between gap-3 sm:h-20">
          {/* Official Logo Component */}
          <Logo size="sm" className="min-w-0" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-bold text-[#334155] hover:text-[#0F3B68] transition-colors rounded-md hover:bg-[#F8FAFC]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center">
            <Button href="/jobs" variant="primary" size="sm">
              View Jobs
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[#0F3B68] transition-colors hover:bg-[#FAF9F5] focus:outline-none focus:ring-2 focus:ring-[#0F3B68] lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}
