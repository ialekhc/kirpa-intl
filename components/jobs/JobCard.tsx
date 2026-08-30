import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { JobVacancy } from '@/types/job';
import { Card } from '@/components/ui/Card';
import { JobStatusBadge } from '@/components/ui/JobStatusBadge';
import { Button } from '@/components/ui/Button';

interface JobCardProps {
  job: JobVacancy;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card hoverEffect className="flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <JobStatusBadge status={job.status} />
          <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#FAF9F5] border border-[#E2E8F0] text-[#0F3B68]">
            {job.industry}
          </span>
        </div>

        {/* Title & Country */}
        <div>
          <h3 className="text-lg font-extrabold text-[#17202A] group-hover:text-[#0F3B68] transition-colors leading-snug">
            <Link href={`/jobs/${job.slug}`}>{job.title}</Link>
          </h3>
          <div className="flex items-center gap-2 mt-1 text-xs font-extrabold text-[#0F3B68]">
            <MapPin className="w-3.5 h-3.5 text-[#C69214]" />
            <span>{job.country}</span>
            {job.recruitmentPartner && (
              <>
                <span>&bull;</span>
                <span className="text-[#5A6B82]">Partner: {job.recruitmentPartner}</span>
              </>
            )}
          </div>
        </div>

        {/* Key Job Specifications */}
        <div className="grid grid-cols-2 gap-2 text-xs bg-[#FAF9F5] p-3 rounded-lg border border-[#E2E8F0]">
          <div>
            <span className="text-[#5A6B82] block">Salary Package:</span>
            <strong className="text-[#0F3B68] font-black">
              {job.salary.currency} {job.salary.amount}
            </strong>
          </div>

          <div>
            <span className="text-[#5A6B82] block">Vacancies:</span>
            <strong className="text-[#17202A] font-bold">
              {job.vacanciesCount} Positions ({job.genderRequirement})
            </strong>
          </div>

          <div>
            <span className="text-[#5A6B82] block">Contract:</span>
            <span className="text-[#17202A] font-semibold">{job.contractDuration}</span>
          </div>

          <div>
            <span className="text-[#5A6B82] block">Working Hours:</span>
            <span className="text-[#17202A] font-semibold">{job.workingHours}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-[#5A6B82] leading-relaxed line-clamp-2">
          {job.description}
        </p>
      </div>

      {/* Footer Actions */}
      <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
        <span className="text-[11px] text-[#5A6B82]">
          Deadline: <strong>{job.deadline}</strong>
        </span>
        <Button href={`/jobs/${job.slug}`} variant="outline" size="sm">
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </Card>
  );
}
