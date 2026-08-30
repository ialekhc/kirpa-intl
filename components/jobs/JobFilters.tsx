'use client';

import React, { useState } from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';
import { JobVacancy } from '@/types/job';
import { JobCard } from '@/components/jobs/JobCard';
import { Button } from '@/components/ui/Button';

interface JobFiltersProps {
  initialJobs: JobVacancy[];
  countries: string[];
  industries: string[];
}

export function JobFilters({ initialJobs, countries, industries }: JobFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const filteredJobs = initialJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCountry = selectedCountry === 'All' || job.country === selectedCountry;
    const matchesIndustry = selectedIndustry === 'All' || job.industry === selectedIndustry;
    const matchesStatus = selectedStatus === 'All' || job.status === selectedStatus;

    return matchesSearch && matchesCountry && matchesIndustry && matchesStatus;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCountry('All');
    setSelectedIndustry('All');
    setSelectedStatus('All');
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Bar */}
      <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F3B68] mb-1">
          <Filter className="w-4 h-4 text-[#C69214]" />
          <span>Filter & Search Opportunities</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Keyword Search Input */}
          <div className="relative md:col-span-1">
            <Search className="w-4 h-4 text-[#5A6B82] absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search title, keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            />
          </div>

          {/* Country Filter */}
          <div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            >
              <option value="All">All Partner Countries</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Industry Filter */}
          <div>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            >
              <option value="All">All Industry Sectors</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF9F5] border border-[#E2E8F0] rounded-md text-sm text-[#17202A] focus:outline-none focus:border-[#0F3B68] focus:bg-white"
            >
              <option value="All">All Application Statuses</option>
              <option value="Open">Open Vacancy</option>
              <option value="Interview Scheduled">Interview Scheduled</option>
              <option value="Processing">Processing</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Results Stats & Reset */}
        <div className="flex items-center justify-between pt-2 border-t border-[#FAF9F5] text-xs text-[#5A6B82]">
          <span>
            Showing <strong>{filteredJobs.length}</strong> of {initialJobs.length} published vacancies
          </span>
          {(searchTerm || selectedCountry !== 'All' || selectedIndustry !== 'All' || selectedStatus !== 'All') && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-[#0F3B68] font-bold hover:underline cursor-pointer"
            >
              <RefreshCw className="w-3 h-3 text-[#C69214]" />
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Jobs Grid Output */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 text-center space-y-3 max-w-md mx-auto">
          <p className="text-base font-bold text-[#17202A]">No vacancies match your selected criteria.</p>
          <p className="text-xs text-[#5A6B82]">
            Try adjusting your search terms or selecting &quot;All Partner Countries&quot; to view available listings.
          </p>
          <Button onClick={resetFilters} variant="outline" size="sm">
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
