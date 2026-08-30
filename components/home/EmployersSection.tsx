import React from 'react';
import { Building2, CheckCircle2, Users } from 'lucide-react';
import { company } from '@/data/company';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function EmployersSection() {
  const servicePoints = [
    'Workforce requirement assessment',
    'Candidate sourcing & talent mapping',
    'Rigorous screening & shortlisting',
    'Employer interview coordination',
    'Skills/trade-test center orchestration',
    'Bilingual contract & visa documentation',
    'Flight deployment & travel logistics',
    'Post-deployment worker welfare check',
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0B2545] text-white border-b border-[#1E3A5F]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#D4A017] bg-[#1E3A5F] px-3 py-1 rounded-md border border-[#2C4E78]">
              For International Employers
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Build your workforce with qualified talent from Nepal
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              <strong className="text-white">{company.name}</strong> supports international employers with candidate sourcing, screening, recruitment coordination, documentation, and deployment of qualified Nepalese workers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {servicePoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/employers#enquiry" variant="gold" size="lg">
                <Building2 className="w-5 h-5" />
                Discuss Your Workforce Requirements
              </Button>
            </div>
          </div>

          {/* Right Column B2B Value Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#1E3A5F] border border-[#2C4E78] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 border-b border-[#2C4E78] pb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#D4A017]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">European Employer Solutions</h4>
                  <p className="text-xs text-slate-300">Coordinated in partnership with Global Work Specialist</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Whether you require seasonal hospitality personnel in Greece, industrial plant assembly workers in Bulgaria, or civil construction trade crews in Romania, KIRPA INTERNATIONAL delivers end-to-end recruitment management.
              </p>

              <div className="p-4 bg-[#0B2545] rounded-lg border border-[#1E3A5F] text-xs text-slate-300 space-y-2">
                <div className="font-bold text-[#D4A017]">Govt. License No. {company.licenseNumber}</div>
                <div>Official Ministry of Labour foreign employment permit holder in Kathmandu, Nepal.</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
