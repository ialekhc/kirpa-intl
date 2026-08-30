import React from 'react';
import {
  UtensilsCrossed,
  HardHat,
  Factory,
  Sprout,
  Truck,
  Warehouse,
  PackageCheck,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react';
import { industries } from '@/data/industries';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  HardHat,
  Factory,
  Sprout,
  Truck,
  Warehouse,
  PackageCheck,
  Sparkles,
  Users,
  Wrench,
};

export function IndustriesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <Container size="wide">
        <SectionHeader
          eyebrow="Sector Expertise"
          title="Industries We Serve"
          description="Sourcing skilled, semi-skilled, and general workforce tailored to international industry standards."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((ind) => {
            const IconComponent = iconMap[ind.iconName] || Users;
            return (
              <div
                key={ind.id}
                className="bg-white p-5 rounded-xl border border-[#E2E8F0] hover:border-[#0F3B68] hover:shadow-xs transition-all flex flex-col items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EBF3FA] text-[#0F3B68] group-hover:bg-[#0F3B68] group-hover:text-[#D4A017] transition-colors flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#17202A] text-sm sm:text-base leading-snug group-hover:text-[#0F3B68] transition-colors">
                    {ind.title}
                  </h4>
                  <p className="text-xs text-[#5A6B82] mt-1 leading-relaxed line-clamp-2">
                    {ind.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
