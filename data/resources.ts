export interface ResourceGuide {
  id: string;
  title: string;
  summary: string;
  iconName: string;
  details: string[];
}

export const workerResources: ResourceGuide[] = [
  {
    id: 'how-recruitment-works',
    title: 'How Overseas Recruitment Works',
    summary: 'A step-by-step understanding of transparent Nepalese foreign employment recruitment.',
    iconName: 'Workflow',
    details: [
      'Demand verified by government and embassy officials',
      'Transparent vacancy publication with salary and benefits details',
      'No registration fee charged for candidate shortlisting',
      'Formal contract signing before visa stamping',
      'Mandatory pre-departure orientation briefing',
    ],
  },
  {
    id: 'documents-required',
    title: 'Required Documents Checklist',
    summary: 'Keep these mandatory official documents ready for your recruitment journey.',
    iconName: 'FileText',
    details: [
      'Original Nepalese Passport (minimum 24 months validity)',
      'Nepal Police Clearance Certificate (PCC)',
      'Recent passport-size color photographs (White background)',
      'Citizenship Card (Nagarikta) copy',
      'Academic certificates and formal trade experience letters (for skilled positions)',
    ],
  },
  {
    id: 'interview-preparation',
    title: 'Employer Interview & Trade Test Tips',
    summary: 'Prepare effectively for physical trade skill evaluations and employer interviews.',
    iconName: 'UserCheck',
    details: [
      'Be punctual and wear clean, professional attire',
      'Carry original documents, certificates, and work portfolio',
      'Be prepared to demonstrate practical skills during trade tests',
      'Communicate clearly and answer background questions honestly',
      'Ask clarifying questions about working hours, duties, and safety',
    ],
  },
  {
    id: 'recruitment-safety',
    title: 'Recruitment Safety & Anti-Fraud Protection',
    summary: 'Essential rules to safeguard yourself from unauthorized agents and scams.',
    iconName: 'ShieldAlert',
    details: [
      'Verify recruitment through official KIRPA INTERNATIONAL contact channels (+977-1-5401847 / +977-9851451847)',
      'Never pay money to unauthorized sub-agents or personal bank accounts',
      'Ensure you receive a government-approved receipt for any authorized transaction',
      'Carefully read your bilingual employment contract before signing',
      'Keep digital and hard copies of your passport, visa, and work contract',
    ],
  },
  {
    id: 'pre-departure-information',
    title: 'Pre-Departure Information',
    summary: 'Important guidelines before traveling to European destination countries.',
    iconName: 'PlaneTakeoff',
    details: [
      'Attend mandatory 2-day Pre-Departure Orientation Training (PDOT)',
      'Understand climate conditions and dress requirements of destination country',
      'Keep embassy contact numbers and KIRPA helpline saved on your phone',
      'Ensure emergency contact numbers in Nepal are documented',
    ],
  },
];
