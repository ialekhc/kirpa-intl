import { DestinationCountry } from '@/types/country';

const countryDisplayOrder = ['romania', 'bulgaria', 'greece'];

export const countries = ([
  {
    id: 'bulgaria',
    slug: 'bulgaria',
    name: 'Bulgaria',
    flag: '🇧🇬',
    code: 'BG',
    heroImage: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=1200&auto=format&fit=crop',
    description:
      'Bulgaria offers expanding employment avenues across manufacturing, hospitality, construction, and logistics sectors. KIRPA INTERNATIONAL coordinates recruitment for Bulgarian employers in partnership with Global Work Specialist.',
    partnerName: 'Global Work Specialist',
    partnerRole: 'European Recruitment Partner',
    keyIndustries: [
      'Hospitality & Tourism',
      'Manufacturing & Production',
      'Construction & Civil Works',
      'Agriculture & Farming',
      'Logistics & Warehousing',
      'General Workforce',
    ],
    employmentCategories: [
      {
        title: 'Hospitality & Tourism',
        description: 'Hotel staff, kitchen helpers, cleaners, and resort service workers for peak seasonal and year-round operations.',
        demandLevel: 'High',
      },
      {
        title: 'Manufacturing & Assembly',
        description: 'Factory operators, packaging specialists, assembly line technicians, and quality check assistants.',
        demandLevel: 'High',
      },
      {
        title: 'Construction & Civil Works',
        description: 'Masons, steel fixers, carpenters, general site helpers, and scaffolding technicians.',
        demandLevel: 'High',
      },
      {
        title: 'Agriculture & Agro-Processing',
        description: 'Farm workers, crop harvesting staff, greenhouse operators, and agricultural packing personnel.',
        demandLevel: 'Medium',
      },
      {
        title: 'Logistics & Warehousing',
        description: 'Warehouse assistants, order pickers, forklift operators, and freight handlers.',
        demandLevel: 'Steady',
      },
      {
        title: 'General Support Workers',
        description: 'Facility maintenance helpers, industrial cleaners, and general duty support staff.',
        demandLevel: 'Steady',
      },
    ],
    recruitmentOverview:
      'Recruitment for Bulgaria follows strict European Union labour regulations and Bulgarian Ministry of Labour approval protocols. Work permits and residence documentation are coordinated systematically between the employer, Global Work Specialist, and KIRPA INTERNATIONAL.',
    candidatePreparation: [
      'Valid passport with at least 2 years remaining validity',
      'Police clearance certificate (PCC) issued by Nepal Police',
      'Skill certification or trade test evidence where required',
      'Medical fitness examination at an accredited medical facility',
      'Completion of official Pre-Departure Orientation (PDOT)',
    ],
    faqs: [
      {
        question: 'Who handles recruitment coordination for Bulgaria?',
        answer:
          'KIRPA INTERNATIONAL PVT. LTD. handles sourcing, screening, documentation, and government approvals in Nepal, working in official partnership with Global Work Specialist for Bulgarian employer requirements.',
      },
      {
        question: 'What documents are required for Bulgarian work permit processing?',
        answer:
          'Candidates must submit a valid passport, updated CV, police clearance certificate, passport-sized photographs, and medical fitness certificate. Trade certificate copies are required for skilled roles.',
      },
    ],
  },
  {
    id: 'greece',
    slug: 'greece',
    name: 'Greece',
    flag: '🇬🇷',
    code: 'GR',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    description:
      'Greece presents opportunities in its world-leading hospitality, seasonal agriculture, food processing, and facility management industries. Sourcing is coordinated through Global Work Specialist.',
    partnerName: 'Global Work Specialist',
    partnerRole: 'European Recruitment Partner',
    keyIndustries: [
      'Hospitality & Resort Services',
      'Tourism & Guest Relations',
      'Agriculture & Harvest Services',
      'Food Production & Packaging',
      'Cleaning & Facility Services',
      'General Commercial Support',
    ],
    employmentCategories: [
      {
        title: 'Hospitality & Resort Services',
        description: 'Room attendants, kitchen stewards, laundry operators, and hotel maintenance support.',
        demandLevel: 'High',
      },
      {
        title: 'Tourism & Service Operations',
        description: 'Seasonal resort assistants, luggage handlers, beach resort staff, and food service helpers.',
        demandLevel: 'High',
      },
      {
        title: 'Agriculture & Harvest Work',
        description: 'Olive and fruit farm harvesters, greenhouse technicians, and agricultural produce sorters.',
        demandLevel: 'Steady',
      },
      {
        title: 'Food Production & Processing',
        description: 'Food processing factory workers, hygiene operators, and packaging line assistants.',
        demandLevel: 'Medium',
      },
      {
        title: 'Cleaning & Facility Management',
        description: 'Commercial facility cleaners, janitorial staff, and housekeeping specialists.',
        demandLevel: 'Steady',
      },
      {
        title: 'General Support Services',
        description: 'Utility helpers, warehouse loading staff, and general service workers.',
        demandLevel: 'Steady',
      },
    ],
    recruitmentOverview:
      'Recruitment into Greece relies on verified employer quota allocations, bilateral work agreements, and Greek consular visa issuance procedures. All candidates receive thorough briefing on employment terms before departure.',
    candidatePreparation: [
      'Original Nepalese passport (valid for minimum 24 months)',
      'Clean criminal background verification',
      'Comprehensive medical screening clearance',
      'Work contract review and pre-departure orientation attendance',
    ],
    faqs: [
      {
        question: 'Are seasonal and long-term contracts available for Greece?',
        answer:
          'Yes, depending on employer requirements, contracts range from seasonal agricultural/tourism periods to multi-year employment agreements.',
      },
      {
        question: 'How is candidate selection conducted for Greek employers?',
        answer:
          'Selection is carried out via virtual interviews, trade tests, or direct employer review of verified candidate video assessments organized by KIRPA INTERNATIONAL.',
      },
    ],
  },
  {
    id: 'romania',
    slug: 'romania',
    name: 'Romania',
    flag: '🇷🇴',
    code: 'RO',
    heroImage: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=1200&auto=format&fit=crop',
    description:
      'Romania is one of Europe’s rapidly growing industrial destinations, actively sourcing skilled and general workforce in construction, logistics, and manufacturing through KIRPA INTERNATIONAL and Global Work Specialist.',
    partnerName: 'Global Work Specialist',
    partnerRole: 'European Recruitment Partner',
    keyIndustries: [
      'Manufacturing & Industrial Lines',
      'Construction & Building Infrastructure',
      'Logistics & Warehousing Hubs',
      'Warehousing & Inventory Handling',
      'Hospitality & Hotel Operations',
      'General Industrial Workforce',
    ],
    employmentCategories: [
      {
        title: 'Manufacturing & Industrial Production',
        description: 'Automotive sub-assembly workers, plastic molding operators, electronic assembly assistants, and packers.',
        demandLevel: 'High',
      },
      {
        title: 'Construction & Civil Engineering',
        description: 'Shuttering carpenters, rebar fitters, bricklayers, concrete finishers, and site helpers.',
        demandLevel: 'High',
      },
      {
        title: 'Logistics & Distribution',
        description: 'E-commerce fulfillment workers, inventory pickers, pallet loaders, and sorting operators.',
        demandLevel: 'High',
      },
      {
        title: 'Warehousing & Storage Operations',
        description: 'Forklift drivers, goods-in assistants, and warehouse safety helpers.',
        demandLevel: 'Medium',
      },
      {
        title: 'Hospitality & Commercial Services',
        description: 'Kitchen utility workers, line cooks, housekeeping staff, and facility helpers.',
        demandLevel: 'Steady',
      },
      {
        title: 'General Industrial Support',
        description: 'Factory cleaning technicians, maintenance assistants, and general labor workforce.',
        demandLevel: 'Steady',
      },
    ],
    recruitmentOverview:
      'Romanian recruitment requires issuance of an official Work Authorization Notice (Aviz de Munca) by the Romanian Inspectorate General for Immigration. KIRPA INTERNATIONAL manages candidate submission, documentation, medical fitness, and visa appointment coordination in Nepal.',
    candidatePreparation: [
      'Valid Nepalese passport with sufficient blank visa pages',
      'Attested police record certificate',
      'Formal medical assessment certificate from authorized medical center',
      'Attested educational and vocational certificates',
      'Pre-departure orientation completion certificate (PDOT)',
    ],
    faqs: [
      {
        question: 'What is the processing timeframe for Romania?',
        answer:
          'Typically, work authorization processing by Romanian authorities takes between 60 to 90 days after complete document submission, followed by visa stamping.',
      },
      {
        question: 'What support does KIRPA provide for Romanian visa processing?',
        answer:
          'KIRPA INTERNATIONAL guides candidates through document legalization, medical tests, visa application submission, consular interview prep, and flight deployment logistics.',
      },
    ],
  },
] satisfies DestinationCountry[]).sort(
  (a, b) => countryDisplayOrder.indexOf(a.slug) - countryDisplayOrder.indexOf(b.slug),
);
