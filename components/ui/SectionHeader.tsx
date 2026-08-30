import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-12 max-w-3xl',
        centered && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#C69214] mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F3B68] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-[#5A6B82] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
