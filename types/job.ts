export type JobStatus = 'Open' | 'Interview Scheduled' | 'Processing' | 'Closed';

export interface JobVacancy {
  id: string;
  slug: string;
  title: string;
  country: string;
  countrySlug: string;
  industry: string;
  employer: string;
  showEmployer: boolean;
  vacanciesCount: number;
  genderRequirement: 'Male' | 'Female' | 'Any' | 'Male & Female';
  salary: {
    amount: string;
    currency: string;
    period: string;
    details?: string;
  };
  contractDuration: string;
  workingHours: string;
  deadline: string;
  status: JobStatus;
  experienceRequired: string;
  description: string;
  requirements: string[];
  duties: string[];
  benefits: string[];
  requiredDocuments: string[];
  recruitmentPartner?: string;
  publishedAt: string;
  featured?: boolean;
}
