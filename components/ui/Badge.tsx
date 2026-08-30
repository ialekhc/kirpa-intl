import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'gold' | 'european' | 'success' | 'warning' | 'neutral';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variantStyles = {
    default: 'bg-[#FAF9F5] text-[#17202A] border border-[#E2E8F0]',
    primary: 'bg-[#EBF3FA] text-[#0F3B68] border border-[#D0E2F4]',
    gold: 'bg-[#FFF8E7] text-[#9E730E] border border-[#FCE8B2]',
    european: 'bg-[#EBF3FA] text-[#1E3A5F] border border-[#D4E4F7]',
    success: 'bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]',
    warning: 'bg-[#FFF8E1] text-[#F57F17] border border-[#FFECB3]',
    neutral: 'bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
