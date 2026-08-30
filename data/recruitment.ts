import { RecruitmentStep } from '@/types/recruitment';

export const recruitmentSteps: RecruitmentStep[] = [
  {
    stepNumber: '01',
    title: 'Employer Workforce Requirement',
    shortDescription: 'The foreign employer submits official manpower requirements and job criteria to KIRPA INTERNATIONAL.',
    fullDescription:
      'International employers specify job profiles, vacancy counts, salary packages, working hours, experience expectations, and contractual terms.',
    responsibleParty: 'Employer',
  },
  {
    stepNumber: '02',
    title: 'Demand & Documentation Verification',
    shortDescription: 'Document authentication by government ministries and diplomatic missions.',
    fullDescription:
      'Demand letter, power of attorney, employment agreement, and guarantee letters are verified through relevant embassy or labor department channels as required by law.',
    responsibleParty: 'Joint / Government',
  },
  {
    stepNumber: '03',
    title: 'Required Government Approval',
    shortDescription: 'Pre-permission approval from the Department of Foreign Employment (DOFE), Nepal.',
    fullDescription:
      'KIRPA INTERNATIONAL submits authenticated demand documents to DOFE Nepal to obtain formal pre-approval to initiate candidate recruitment.',
    responsibleParty: 'KIRPA',
  },
  {
    stepNumber: '04',
    title: 'Vacancy Announcement',
    shortDescription: 'Official transparent publication of verified vacancies.',
    fullDescription:
      'Vacancies are advertised transparently across national daily newspapers, official website listings, and verified media channels detailing job terms and safety rules.',
    responsibleParty: 'KIRPA',
  },
  {
    stepNumber: '05',
    title: 'Candidate Application',
    shortDescription: 'Job seekers submit applications and credentials directly.',
    fullDescription:
      'Candidates register directly with KIRPA INTERNATIONAL, providing original passports, academic credentials, work experience records, and contact details.',
    responsibleParty: 'Candidate',
  },
  {
    stepNumber: '06',
    title: 'Screening & Shortlisting',
    shortDescription: 'Rigorous candidate evaluation according to employer job specifications.',
    fullDescription:
      'Our recruitment specialists evaluate candidate backgrounds, verify credential authenticity, check language aptitude, and prepare shortlists for employer review.',
    responsibleParty: 'KIRPA',
  },
  {
    stepNumber: '07',
    title: 'Employer Interview / Trade Test',
    shortDescription: 'Direct interviews or practical trade evaluation.',
    fullDescription:
      'Shortlisted candidates undergo virtual/in-person employer interviews or practical trade skill tests at accredited vocational centers to demonstrate technical capability.',
    responsibleParty: 'Joint / Government',
  },
  {
    stepNumber: '08',
    title: 'Medical Examination',
    shortDescription: 'Comprehensive health screening at GAMCA / DOFE authorized medical clinics.',
    fullDescription:
      'Selected candidates complete physical and laboratory health examinations at authorized medical facilities to certify medical fitness for overseas employment.',
    responsibleParty: 'Candidate',
  },
  {
    stepNumber: '09',
    title: 'Employment & Visa Documentation',
    shortDescription: 'Work contract execution and visa application processing.',
    fullDescription:
      'Candidates sign verified bilingual employment contracts. Work authorization permits and visa documentation are submitted to destination country immigration authorities.',
    responsibleParty: 'Joint / Government',
  },
  {
    stepNumber: '10',
    title: 'Pre-Departure Preparation',
    shortDescription: 'Mandatory Pre-Departure Orientation Training (PDOT) and briefing.',
    fullDescription:
      'Candidates attend government-mandated PDOT classes covering work rights, local laws, cultural awareness, labor safety, and emergency assistance channels.',
    responsibleParty: 'KIRPA',
  },
  {
    stepNumber: '11',
    title: 'Travel & Deployment',
    shortDescription: 'Final labor clearance (DOFE sticker) and flight ticketing.',
    fullDescription:
      'KIRPA INTERNATIONAL secures final labor permits from DOFE, organizes flight bookings, provides travel itineraries, and conducts airport departure briefings.',
    responsibleParty: 'KIRPA',
  },
  {
    stepNumber: '12',
    title: 'Post-Deployment Support',
    shortDescription: 'Continuous welfare check and ongoing liaison.',
    fullDescription:
      'We coordinate with employers, European partners (such as Global Work Specialist), and diplomatic missions to monitor worker integration, safety, and contract compliance.',
    responsibleParty: 'KIRPA',
  },
];

export const recruitmentDisclaimer =
  'Exact recruitment steps and processing timelines may vary depending on the destination country regulations, employer requirements, and applicable government laws.';
