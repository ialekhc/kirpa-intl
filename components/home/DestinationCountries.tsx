import React from 'react';
import Image from 'next/image';
import { ArrowRight, Globe } from 'lucide-react';
import { countries } from '@/data/countries';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export function DestinationCountries() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
      <Container size="wide">
        <SectionHeader
          eyebrow="Global Destinations"
          title="Where We Recruit"
          description="Explore international employment destinations supported through KIRPA INTERNATIONAL and its European recruitment partner."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.id}
              className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image & Flag Header */}
                <div className="relative h-48 w-full bg-[#17202A]">
                  <Image
                    src={country.heroImage}
                    alt={`Employment opportunities in ${country.name}`}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#17202A]">
                    <span className="text-xl">{country.flag}</span>
                    <span>{country.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Partner Attribution Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EBF3FA] text-[#1E3A5F] border border-[#D4E4F7] rounded text-xs font-semibold">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Partner: {country.partnerName}</span>
                  </div>

                  <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-3">
                    {country.description}
                  </p>

                  {/* Employment Categories */}
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#17202A] mb-2">
                      Key Industries & Sectors:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {country.keyIndustries.slice(0, 4).map((ind, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-0.5 bg-[#F8F9FA] border border-[#E5E7EB] rounded text-xs font-medium text-[#1F2937]"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Button href={`/countries/${country.slug}`} variant="outline" className="w-full justify-between">
                  <span>View {country.name} Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-center text-[#667085]">
          * Industry categories shown above represent standard recruitment sectors in destination markets. Active vacancies are subject to approved demand letters.
        </p>
      </Container>
    </section>
  );
}
