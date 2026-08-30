export interface EmploymentCategory {
  title: string;
  description: string;
  demandLevel: 'High' | 'Medium' | 'Steady';
}

export interface DestinationCountry {
  id: string;
  slug: string;
  name: string;
  flag: string;
  code: string;
  heroImage: string;
  description: string;
  partnerName: string;
  partnerRole: string;
  keyIndustries: string[];
  employmentCategories: EmploymentCategory[];
  recruitmentOverview: string;
  candidatePreparation: string[];
  faqs: { question: string; answer: string }[];
}
