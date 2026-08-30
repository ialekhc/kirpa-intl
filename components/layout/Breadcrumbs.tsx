import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-[#F8F9FA] border-b border-[#E5E7EB] py-3 text-xs sm:text-sm">
      <Container size="wide">
        <nav className="flex items-center gap-1.5 text-[#667085]" aria-label="Breadcrumb">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#C62828] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#C62828] transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-[#17202A] truncate" aria-current="page">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
