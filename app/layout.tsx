import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { company } from '@/data/company';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getOrganizationSchema } from '@/lib/seo';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Licensed Overseas Recruitment Agency Nepal`,
    template: `%s | ${company.shortName}`,
  },
  description:
    'KIRPA INTERNATIONAL PVT. LTD. (License No. 1847/082/083) is a licensed Nepal-based foreign employment recruitment company connecting Nepalese workers with international employment opportunities, including recruitment partnerships for Romania, Bulgaria, and Greece.',
  keywords: [
    'KIRPA INTERNATIONAL',
    'Overseas recruitment Nepal',
    'Manpower company Lalitpur',
    'Bulgaria recruitment Nepal',
    'Greece recruitment Nepal',
    'Romania recruitment Nepal',
    'Global Work Specialist partner',
    'Foreign employment agency Nepal',
    'License 1847/082/083',
  ],
  authors: [{ name: company.name }],
  icons: {
    icon: [{ url: '/kripa-intl.svg', type: 'image/svg+xml' }],
    shortcut: '/kripa-intl.svg',
  },
  openGraph: {
    title: `${company.name} | Foreign Employment Recruitment Company Nepal`,
    description:
      'Licensed Nepal foreign employment recruitment company partnered with Global Work Specialist for recruitment in Romania, Bulgaria, and Greece.',
    url: company.website,
    siteName: company.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#1F2937] selection:bg-[#FDEDEC] selection:text-[#C62828]">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
