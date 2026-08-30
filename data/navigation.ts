export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Recruitment', href: '/recruitment' },
  { label: 'Countries', href: '/countries' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'For Employers', href: '/employers' },
  { label: 'Worker Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About KIRPA', href: '/about' },
    { label: 'Recruitment Process', href: '/recruitment' },
    { label: 'Destination Countries', href: '/countries' },
    { label: 'Current Vacancies', href: '/jobs' },
  ],
  jobSeekers: [
    { label: 'Current Jobs', href: '/jobs' },
    { label: 'How to Apply', href: '/resources#how-to-apply' },
    { label: 'Required Documents', href: '/resources#required-documents' },
    { label: 'Recruitment Safety', href: '/resources#recruitment-safety' },
    { label: 'Candidate FAQs', href: '/resources#faqs' },
  ],
  employers: [
    { label: 'Hire From Nepal', href: '/employers' },
    { label: 'Recruitment Services', href: '/employers#contact-employers' },
    { label: 'European Partnership', href: '/employers#european-partnership' },
    { label: 'Direct Employer Contact', href: '/employers#contact-employers' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
