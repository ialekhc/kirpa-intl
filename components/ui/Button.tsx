import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'secondary' | 'outline' | 'ghost' | 'european';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs sm:text-sm gap-1.5',
    md: 'px-4 py-2 text-sm sm:text-base gap-2',
    lg: 'px-6 py-3 text-base sm:text-lg gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#0F3B68] text-white hover:bg-[#0B2D50] focus:ring-[#0F3B68] shadow-xs active:bg-[#08223D]',
    gold:
      'bg-[#C69214] text-white hover:bg-[#A87A0F] focus:ring-[#C69214] shadow-xs active:bg-[#8C640A]',
    secondary:
      'bg-[#0B2545] text-white hover:bg-[#17335C] focus:ring-[#0B2545] shadow-xs',
    european:
      'bg-[#1E3A5F] text-white hover:bg-[#152943] focus:ring-[#1E3A5F] shadow-xs',
    outline:
      'border border-[#CBD5E1] bg-white text-[#0F3B68] hover:bg-[#FAF9F5] hover:border-[#0F3B68] focus:ring-[#0F3B68]',
    ghost:
      'text-[#0F3B68] hover:bg-[#FAF9F5] hover:text-[#C69214] focus:ring-[#0F3B68]',
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
