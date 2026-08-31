import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { AboutSection } from '@/components/home/AboutSection';
import { PartnershipSection } from '@/components/home/PartnershipSection';
import { DestinationCountries } from '@/components/home/DestinationCountries';
import { IndustriesGrid } from '@/components/home/IndustriesGrid';
import { RecruitmentSteps } from '@/components/home/RecruitmentSteps';
import { JobSeekersSection } from '@/components/home/JobSeekersSection';
import { EmployersSection } from '@/components/home/EmployersSection';
import { WhyKirpa } from '@/components/home/WhyKirpa';
import { WorkerSafety } from '@/components/home/WorkerSafety';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <PartnershipSection />
      <DestinationCountries />
      <IndustriesGrid />
      <RecruitmentSteps />
      <JobSeekersSection />
      <EmployersSection />
      <WhyKirpa />
      <WorkerSafety />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
