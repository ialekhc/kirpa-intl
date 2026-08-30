export interface RecruitmentStep {
  stepNumber: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  responsibleParty: 'Employer' | 'KIRPA' | 'Candidate' | 'Joint / Government';
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
