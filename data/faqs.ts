export interface FAQItem {
  id: string;
  category: 'General' | 'Job Seekers' | 'Employers' | 'Safety & Verification';
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'General',
    question: 'Is KIRPA INTERNATIONAL PVT. LTD. a licensed recruitment agency?',
    answer:
      'Yes. KIRPA INTERNATIONAL PVT. LTD. is officially licensed by the Ministry of Labour, Employment and Social Security, Government of Nepal under License No. 1847/082/083.',
  },
  {
    id: 'faq-02',
    category: 'General',
    question: 'What is the role of Global Work Specialist on this website?',
    answer:
      'Global Work Specialist is KIRPA INTERNATIONAL’s designated European Recruitment Partner for workforce sourcing and recruitment coordination in Bulgaria, Greece, and Romania.',
  },
  {
    id: 'faq-03',
    category: 'Job Seekers',
    question: 'How can I enquire about recruitment opportunities?',
    answer:
      'Review our destination country and recruitment information, then contact KIRPA INTERNATIONAL directly through our official channels or visit our office in Shanti Marg, Lalitpur Metropolitan City–05 with your original passport and CV.',
  },
  {
    id: 'faq-04',
    category: 'Job Seekers',
    question: 'What documents are required to initiate job applications?',
    answer:
      'Candidates need an original Nepalese passport (valid for at least 2 years), updated CV, police clearance certificate, passport photographs, and relevant educational or trade experience certificates.',
  },
  {
    id: 'faq-05',
    category: 'Employers',
    question: 'How do international employers recruit workers through KIRPA INTERNATIONAL?',
    answer:
      'International employers can contact us via our Employer Enquiry form or email info@kirpainternational.com. Our team will review your manpower requirement, verify documentation, and guide you through candidate sourcing and deployment.',
  },
  {
    id: 'faq-06',
    category: 'Safety & Verification',
    question: 'How do I verify if a job vacancy or agent is legitimate?',
    answer:
      'Always contact KIRPA INTERNATIONAL exclusively through official phone numbers (+977-1-5401847, +977-9851451847) or email (info@kirpainternational.com). Never pay unauthorized intermediaries or individuals claiming to represent KIRPA.',
  },
];
