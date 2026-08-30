import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { company } from '@/data/company';

interface LogoProps {
  variant?: 'full' | 'icon-only' | 'light';
  className?: string;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({
  variant = 'full',
  className,
  href = '/',
  onClick,
  size = 'md',
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12 sm:h-14 sm:w-14',
    lg: 'h-14 w-14 sm:h-16 sm:w-16',
  };

  const nameClasses = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
  };

  const logoContent = (
    <span className={cn('inline-flex items-center gap-3 select-none', className)}>
      <Image
        src="/kripa-intl.svg"
        alt=""
        width={508}
        height={508}
        priority
        className={cn('block shrink-0 object-contain', sizeClasses[size])}
      />

      {variant !== 'icon-only' && (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={cn(
              'font-black tracking-tight',
              nameClasses[size],
              variant === 'light' ? 'text-white' : 'text-[#123B63]'
            )}
          >
            KIRPA INTERNATIONAL
          </span>
          <span
            className={cn(
              'mt-1 text-[9px] font-extrabold tracking-[0.18em] sm:text-[10px]',
              variant === 'light' ? 'text-[#D9A441]' : 'text-[#9E730E]'
            )}
          >
            PVT. LTD.
          </span>
          <span className="sr-only">{company.name}</span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label={`${company.name} home`}
        className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3B68] focus-visible:ring-offset-2"
      >
        {logoContent}
      </Link>
    );
  }

  return <div onClick={onClick} className="inline-flex">{logoContent}</div>;
}
