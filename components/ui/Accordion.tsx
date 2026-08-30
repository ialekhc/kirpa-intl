'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn('divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-4 sm:py-5">
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between text-left focus:outline-none focus:text-[#0F3B68] group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-bold text-[#17202A] group-hover:text-[#0F3B68] transition-colors pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-[#5A6B82] transition-transform duration-200 shrink-0',
                  isOpen && 'rotate-180 text-[#C69214]'
                )}
              />
            </button>
            {isOpen && (
              <div className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed pr-6">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
