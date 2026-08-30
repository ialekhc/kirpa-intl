import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, Navigation, Globe, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact Us | Direct Phone, Email & Office Location',
  description:
    'Contact KIRPA INTERNATIONAL PVT. LTD. directly in Lalitpur, Kathmandu, Nepal. Office telephone: +977-1-5401847, Mobile: +977-9851451847, Email: info@kirpainternational.com.',
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <section className="bg-gradient-to-b from-[#FAF9F5] to-white py-12 sm:py-16 border-b border-[#E2E8F0]">
        <Container size="wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C69214] mb-2 block">
              Official Direct Channels
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F3B68] tracking-tight leading-tight">
              Contact KIRPA INTERNATIONAL
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5A6B82] leading-relaxed">
              Reach out directly to our official office in Lalitpur for candidate inquiries, job verification, or European employer workforce recruitment.
            </p>
          </div>
        </Container>
      </section>

      {/* Direct Contact Cards Grid */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <Container size="wide">
          <SectionHeader
            eyebrow="Direct Connection"
            title="Choose Your Preferred Contact Channel"
            description="Contact our team directly through official telephone, mobile, email, or in-person office visit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1: Office Phone */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#0F3B68] transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0F3B68] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B82] block">
                    Office Telephone
                  </span>
                  <h4 className="text-lg font-black text-[#0F3B68] mt-1">{company.phone}</h4>
                  <p className="text-xs text-[#5A6B82] mt-1">Landline office assistance during working hours.</p>
                </div>
              </div>
              <Button href={`tel:${company.phoneRaw}`} variant="primary" className="w-full">
                <Phone className="w-4 h-4" />
                Call Landline
              </Button>
            </div>

            {/* Card 2: Mobile / Helpline */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#0F3B68] transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#C69214] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B82] block">
                    Mobile Helpline
                  </span>
                  <h4 className="text-lg font-black text-[#0F3B68] mt-1">{company.mobile}</h4>
                  <p className="text-xs text-[#5A6B82] mt-1">Direct mobile helpline for urgent candidate queries.</p>
                </div>
              </div>
              <Button href={`tel:${company.mobileRaw}`} variant="gold" className="w-full">
                <Phone className="w-4 h-4" />
                Call Mobile
              </Button>
            </div>

            {/* Card 3: WhatsApp Support */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#0F3B68] transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B82] block">
                    WhatsApp Chat
                  </span>
                  <h4 className="text-lg font-black text-[#0F3B68] mt-1">{company.mobile}</h4>
                  <p className="text-xs text-[#5A6B82] mt-1">Send documents or inquiries directly on WhatsApp.</p>
                </div>
              </div>
              <Button href={`https://wa.me/${company.mobileRaw.replace('+', '')}`} external variant="secondary" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white">
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Card 4: Official Email */}
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#0F3B68] transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A6B82] block">
                    Official Email
                  </span>
                  <h4 className="text-sm font-black text-[#0F3B68] mt-1 break-all">{company.email}</h4>
                  <p className="text-xs text-[#5A6B82] mt-1">Send formal employer demand letters & proposals.</p>
                </div>
              </div>
              <Button href={`mailto:${company.email}`} variant="outline" className="w-full">
                <Mail className="w-4 h-4" />
                Send Direct Email
              </Button>
            </div>
          </div>

          {/* Detailed Headquarters & Licensing Banner */}
          <div className="bg-[#0B2545] text-white rounded-2xl p-6 sm:p-10 border border-[#1E3A5F] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-[#D4A017] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Govt. License No. {company.licenseNumber}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Headquarters Office Location
              </h3>

              <div className="text-sm sm:text-base text-slate-200 space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                  <span>
                    <strong>Address:</strong> {company.address.street}, {company.address.municipality}, {company.address.city}, {company.address.country}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                  <span>
                    <strong>Office Hours:</strong> Sunday – Friday: 9:30 AM – 5:30 PM (Saturday Closed)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Globe className="w-5 h-5 text-[#D4A017] shrink-0 mt-0.5" />
                  <span>
                    <strong>European Partner:</strong> {company.europeanPartner.name} (Bulgaria, Greece, Romania)
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button href={company.address.directionsUrl} external variant="gold" size="lg" className="w-full">
                <Navigation className="w-5 h-5" />
                Open Google Maps Directions
              </Button>
              <Button href={`tel:${company.phoneRaw}`} variant="secondary" size="lg" className="w-full border border-slate-700">
                <Phone className="w-5 h-5" />
                Call Headquarters Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#FAF9F5]">
        <Container size="wide">
          <SectionHeader
            eyebrow="Visit Our Office"
            title="Interactive Office Map"
            description="Shanti Marg, Lalitpur Metropolitan City–05, Kathmandu, Nepal"
            centered
          />

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md bg-white aspect-[16/7] relative">
            <iframe
              src={company.address.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KIRPA INTERNATIONAL Office Location Map"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
