import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { jobs } from '@/data/jobs';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JobCard } from '@/components/jobs/JobCard';
import { Button } from '@/components/ui/Button';

export function CurrentJobsPreview() {
  const featuredJobs = jobs.slice(0, 6);
  const hasJobs = featuredJobs.length > 0;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <SectionHeader
            eyebrow="Current Openings"
            title="Verified Job Opportunities"
            description="Explore recently authenticated foreign employment demand listings and recruitment schedules."
            className="mb-0 max-w-2xl"
          />
          {hasJobs && (
            <div className="mt-4 md:mt-0 shrink-0">
              <Button href="/jobs" variant="outline">
                View All Opportunities ({jobs.length})
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        {hasJobs ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-8 text-center max-w-xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#E5E7EB] text-[#667085] flex items-center justify-center mx-auto">
              <Briefcase className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#17202A] text-lg">No Vacancies Currently Published</h4>
            <p className="text-sm text-[#667085] leading-relaxed">
              No vacancies are currently published. Please check again or contact KIRPA INTERNATIONAL for verified opportunities.
            </p>
            <Button href="/contact" variant="primary" size="sm">
              Contact KIRPA Office
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
