import type { Destination, CourseItem, ServiceStep, FAQItem } from '../types';

export const BRAND = {
  company: 'Viswa Vidhya Educational Consultancy',
  shortName: 'Viswa Vidhya',
  tagline: 'Study Abroad',
  contactPerson: 'Arunlal M S',
  role: 'Managing Director & Lead Career Counsellor',
  phone: '+91 9487808313',
  phoneClean: '+919487808313',
  email: 'viswavidhyaconsultancy@gmail.com',
  whatsappUrl: 'https://wa.me/919487808313?text=Hello%20Viswa%20Vidhya%2C%20I%20would%20like%20to%20know%20more%20about%20study%20abroad%20opportunities.',
  mainFocus: [
    'Study Abroad',
    'MBBS Abroad',
    'Career Guidance',
    'University Selection',
    'Admission Support',
    'Visa Guidance',
  ],
  primaryDestinations: [
    { name: 'Germany', code: 'DE', flag: '🇩🇪' },
    { name: 'Hungary', code: 'HU', flag: '🇭🇺' },
    { name: 'Mauritius', code: 'MU', flag: '🇲🇺' },
  ],
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'mauritius',
    slug: 'mauritius',
    name: 'Mauritius',
    flag: '🇲🇺',
    tagline: 'Top Choice for MBBS & Global Higher Education',
    image: '/images/mauritius-campus.jpg',
    popularFor: ['MBBS & Medical Sciences', 'Business & Management', 'Information Technology', 'Hospitality & Tourism'],
    keyAdvantages: [
      'No IELTS required for admission',
      'Extremely safe environment with very low crime rate',
      'Majority of students and faculty are from Indian backgrounds',
      'Higher FMGE passing average among graduating medical students',
      'Last year’s FMGE First Rank holder graduated from Mauritius',
      'Separate secure hostel facilities for boys and girls',
      'Comfortable, culturally familiar atmosphere for Indian students',
      'English-medium curriculum with recognized medical faculties'
    ],
    intakes: ['February / March', 'September / October'],
    languageRequirement: 'No IELTS Required (English Medium)',
    overview: 'Mauritius is a serene, highly developed, and peaceful island nation situated in the Indian Ocean. Renowned for its disciplined educational institutions and welcoming culture, it has become a premier global destination for Indian students—especially those pursuing MBBS and professional programs.',
    whyChoose: [
      'Peaceful, tropical island environment conducive to focused study',
      'Indian cuisine and vibrant cultural familiarity available everywhere',
      'Affordable tuition fee structures compared to western medical schools',
      'Direct flights from major Indian cities'
    ],
    mbbsAvailable: true,
  },
  {
    id: 'germany',
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    tagline: 'Global Engine of Engineering, Innovation & Research',
    image: '/images/germany.jpg',
    popularFor: ['Engineering & Automotive', 'Computer Science & AI', 'Data Science & Business', 'Renewable Energy'],
    keyAdvantages: [
      'World-renowned public universities with low to zero tuition fees',
      'Hub for global automotive, tech, and manufacturing industries',
      'Generous post-study work visa opportunities (up to 18 months)',
      'High standard of living and strong international student community',
      'English-taught Bachelor and Master programs available',
      'Practical hands-on industry research and internships'
    ],
    intakes: ['Winter (September/October)', 'Summer (March/April)'],
    languageRequirement: 'English (IELTS/TOEFL) / German proficiency depends on program',
    overview: 'Germany stands at the pinnacle of scientific research, technology, and engineering in Europe. With state-of-the-art laboratory facilities and strong industry-academia partnerships, German universities prepare students for influential global careers.',
    whyChoose: [
      'Globally esteemed degrees with exceptional international prestige',
      'Opportunity to learn German and access Europe-wide job markets',
      'Safe, modern European infrastructure and student transport discounts',
      'Exceptional career opportunities in EU economic powerhouse'
    ],
    mbbsAvailable: false,
  },
  {
    id: 'hungary',
    slug: 'hungary',
    name: 'Hungary',
    flag: '🇭🇺',
    tagline: 'European Academic Heritage with Modern Career Pathways',
    image: '/images/hungary.jpg',
    popularFor: ['Medicine & Health Sciences', 'Computer Science', 'Business Economics', 'Engineering'],
    keyAdvantages: [
      'Historic European universities dating back centuries with EU recognition',
      'Stipendium Hungaricum and accessible scholarship programs',
      'High-quality education with reasonable living and tuition expenses',
      'Gateway to the European Schengen zone for travel and networking',
      'Comprehensive English-taught undergraduate and graduate degrees',
      'Vibrant multicultural student cities like Budapest, Debrecen & Szeged'
    ],
    intakes: ['September (Primary)', 'February (Secondary)'],
    languageRequirement: 'IELTS / Medium of Instruction Certificate (as per university)',
    overview: 'Hungary provides high-quality European Union standard higher education in the heart of Central Europe. With vibrant campus life in iconic cities and rigorous academic curriculums, it is an increasingly favored choice for ambitious international students.',
    whyChoose: [
      'EU accredited degree recognized throughout Europe and worldwide',
      'Affordable European lifestyle with rich cultural heritage',
      'Safe, welcoming cities with active international student networks',
      'Direct pathway to internships and careers in Central Europe'
    ],
    mbbsAvailable: true,
  },
];

export const MAURITIUS_MBBS_POINTS = [
  {
    title: 'Safe Environment & Low Crime Rate',
    desc: 'Mauritius is one of the safest and most peaceful countries in the world, with a very low crime rate and a disciplined academic atmosphere.',
    icon: 'ShieldCheck'
  },
  {
    title: 'No IELTS Required',
    desc: 'Streamlined admission criteria without the mandatory barrier of IELTS or TOEFL exams for eligible students.',
    icon: 'GraduationCap'
  },
  {
    title: 'Indian Students & Faculty Dominance',
    desc: 'Majority of students and faculty members are of Indian origin, ensuring a comfortable, familiar, and empathetic learning environment.',
    icon: 'Users'
  },
  {
    title: 'Exceptional FMGE Track Record',
    desc: 'Graduates from Mauritius achieve a higher FMGE passing average, and last year’s FMGE All India First Rank holder was from Mauritius.',
    icon: 'Trophy'
  },
  {
    title: 'Separate Secure Hostels',
    desc: 'Dedicated and secure separate hostel facilities for boys and girls with 24/7 security and Indian food options.',
    icon: 'Home'
  },
  {
    title: 'Disciplined Academic Culture',
    desc: 'Rigorous clinical exposure and structured bedside training under experienced senior medical doctors and professors.',
    icon: 'BookOpen'
  },
];

export const MBBS_DECISION_FACTORS = [
  {
    factor: 'Student Safety & Security',
    description: 'A peaceful, crime-free environment with supportive campus security and dedicated female/male housing.',
    mauritiusScore: 'Exceptional (Low crime rate, secure hostels)',
    importance: 'Critical for parents & students'
  },
  {
    factor: 'English Medium & Faculty Quality',
    description: 'Experienced professors who explain concepts clearly without regional language barriers.',
    mauritiusScore: 'Majority Indian professors & English curriculum',
    importance: 'Essential for clinical understanding'
  },
  {
    factor: 'FMGE / NExT Exam Readiness',
    description: 'Curriculum structured according to medical guidelines with clinical training matching Indian patterns.',
    mauritiusScore: 'Higher FMGE passing average + 1st Rank holder',
    importance: 'Decisive for Indian licensing'
  },
  {
    factor: 'Cultural & Food Comfort',
    description: 'Availability of nutritious Indian food, cultural celebrations, and approachable seniors.',
    mauritiusScore: 'Familiar Indian student community & cuisine',
    importance: 'High impact on student well-being'
  },
  {
    factor: 'Standardized Admission Process',
    description: 'Transparent guidance without hidden entrance tests or unnecessary language prerequisites.',
    mauritiusScore: 'Direct admission & No IELTS required',
    importance: 'High convenience'
  },
];

export const SERVICES_LIST: ServiceStep[] = [
  {
    step: '01',
    title: 'Career Counselling',
    description: 'We conduct an in-depth one-on-one session to understand the student’s academic background, passions, budget, and long-term career aspirations.',
    keyAction: 'Personal Profile Assessment & Goal Mapping',
    iconName: 'Compass'
  },
  {
    step: '02',
    title: 'Course Selection',
    description: 'Identify suitable undergraduate, postgraduate, diploma, MBBS, or professional courses aligned with future industry demand and personal strengths.',
    keyAction: 'Curriculum & Career Pathways Alignment',
    iconName: 'BookOpen'
  },
  {
    step: '03',
    title: 'Country Selection',
    description: 'Help students and parents evaluate ideal global destinations (Germany, Hungary, Mauritius) based on safety, budget, language, and post-study opportunities.',
    keyAction: 'Destination Suitability Analysis',
    iconName: 'Globe'
  },
  {
    step: '04',
    title: 'University Selection',
    description: 'Guide students toward recognized, accredited universities that match their academic credentials and career goals.',
    keyAction: 'Shortlisting Recognized Institutions',
    iconName: 'Building2'
  },
  {
    step: '05',
    title: 'Application Support',
    description: 'Assist through meticulous documentation, Statement of Purpose (SOP) refinement, transcripts, and application filing.',
    keyAction: 'Error-Free Application Submission',
    iconName: 'FileCheck'
  },
  {
    step: '06',
    title: 'Admission Support',
    description: 'Liaise directly with university admissions teams, secure official offer letters, and assist with admission formalities and fee remittances.',
    keyAction: 'Offer Letter & Seat Confirmation',
    iconName: 'Award'
  },
  {
    step: '07',
    title: 'Visa Guidance',
    description: 'Comprehensive visa file preparation, financial documentation guidance, mock interview sessions, and embassy appointment assistance.',
    keyAction: 'End-to-End Visa File Processing',
    iconName: 'FileText'
  },
  {
    step: '08',
    title: 'Pre-Departure Guidance',
    description: 'Prepare students for international travel, accommodation booking, airport pickup coordination, forex, packing checklists, and campus orientation.',
    keyAction: 'Smooth Transition & Travel Readiness',
    iconName: 'PlaneTakeoff'
  },
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'mbbs-medicine',
    title: 'MBBS / General Medicine',
    category: 'MBBS',
    duration: '5 - 6 Years',
    popularDestinations: ['Mauritius', 'Hungary'],
    eligibility: '10+2 with Physics, Chemistry & Biology (PCB) with qualifying marks & NEET qualification',
    description: 'Premier medical degree programs with world-class clinical hospital rotations, English-taught curriculums, and strong preparation for medical licensing exams like FMGE / NExT.',
    highlights: ['Hospital Bedside Training', 'No IELTS for Mauritius', 'High FMGE Track Record', 'Separate Hostels']
  },
  {
    id: 'ug-engineering',
    title: 'Bachelor of Engineering & Technology (B.Eng / B.Sc)',
    category: 'UG',
    duration: '3 - 4 Years',
    popularDestinations: ['Germany', 'Hungary'],
    eligibility: '10+2 with Physics, Chemistry & Mathematics (PCM)',
    description: 'Hands-on undergraduate engineering programs in Mechanical, Automotive, Computer Science, Electrical, and Mechatronics at top European universities.',
    highlights: ['Industry Internships', 'Cutting-Edge Labs', 'Low/Zero Tuition in Germany', 'Post-Study Work Options']
  },
  {
    id: 'ug-business',
    title: 'Bachelor of Business Administration & Management',
    category: 'UG',
    duration: '3 Years',
    popularDestinations: ['Germany', 'Hungary', 'Mauritius'],
    eligibility: '10+2 in any stream (Commerce, Science, or Arts)',
    description: 'Foundational degree in international business, marketing, finance, and global trade with international student networking.',
    highlights: ['Global Case Studies', 'Cross-Border Networking', 'Modern Curriculum', 'Career Placement Guidance']
  },
  {
    id: 'pg-datascience-ai',
    title: 'Master of Science in Data Science & Artificial Intelligence',
    category: 'PG',
    duration: '1.5 - 2 Years',
    popularDestinations: ['Germany', 'Hungary'],
    eligibility: 'Bachelor’s degree in CS, IT, Math, or related STEM field',
    description: 'Advanced postgraduate specialization in machine learning, deep neural networks, big data analytics, and cloud computing architectures.',
    highlights: ['High Industry Demand', 'Tech Hub Ecosystems', 'European Research Facilities', '18-Month Job Search Visa in Germany']
  },
  {
    id: 'pg-management-mba',
    title: 'Master of Business Administration (MBA & International Management)',
    category: 'PG',
    duration: '1 - 2 Years',
    popularDestinations: ['Germany', 'Hungary', 'Mauritius'],
    eligibility: 'Bachelor’s degree in any discipline (work experience is advantageous)',
    description: 'Strategic leadership, financial modeling, and global operations management designed for emerging business leaders and entrepreneurs.',
    highlights: ['Leadership Workshops', 'Executive Seminars', 'Corporate Projects', 'Global Alumni Network']
  },
  {
    id: 'diploma-hospitality',
    title: 'International Diploma in Hospitality & Tourism Management',
    category: 'Diploma',
    duration: '1 - 2 Years',
    popularDestinations: ['Mauritius', 'Hungary'],
    eligibility: '10+2 from a recognized board',
    description: 'Practical training in luxury resort management, culinary operations, customer experience, and international tourism logistics.',
    highlights: ['Paid Resort Internships', 'Hands-on Service Training', 'Global Hospitality Careers', 'Island Resort Exposure']
  },
  {
    id: 'diploma-it-computing',
    title: 'Diploma in Applied Information Technology & Web Development',
    category: 'Diploma',
    duration: '1 - 2 Years',
    popularDestinations: ['Mauritius', 'Germany'],
    eligibility: '10+2 with basic computer proficiency',
    description: 'Fast-track practical diploma covering full-stack web applications, database administration, software testing, and cybersecurity fundamentals.',
    highlights: ['Project-Centric Learning', 'Portfolio Development', 'Industry-Relevant Tools', 'Direct Career Entryway']
  },
  {
    id: 'prof-biotech',
    title: 'Professional Studies in Biotechnology & Pharmacy',
    category: 'Professional Courses',
    duration: '3 - 5 Years',
    popularDestinations: ['Hungary', 'Germany'],
    eligibility: '10+2 with Biology & Chemistry or relevant Bachelor degree',
    description: 'Specialized scientific training in pharmaceuticals, genetic engineering, clinical trials, and healthcare product development.',
    highlights: ['Advanced Laboratories', 'European Pharma Hubs', 'Research Fellowships', 'High Clinical Relevance']
  },
  {
    id: 'other-opportunities',
    title: 'Preparatory Pathways & International Foundation Programs',
    category: 'Other Opportunities',
    duration: '6 - 12 Months',
    popularDestinations: ['Germany', 'Hungary', 'Mauritius'],
    eligibility: 'High School completion or undergraduate transition requirements',
    description: 'Bridge programs designed to strengthen language proficiency, foundational sciences, and academic adjustment before entering main degree programs.',
    highlights: ['Guaranteed University Progression', 'Language Immersion', 'Academic Soft Skills', 'Smooth Cultural Onboarding']
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Personalized One-on-One Mentorship',
    desc: 'No generic formulas. Arunlal M S and the Viswa Vidhya counselling team provide dedicated personal attention tailored to your exact academic profile and financial goals.',
    icon: 'UserCheck'
  },
  {
    title: 'Guidance for All Major Course Categories',
    desc: 'Expertise across Undergraduate (UG), Postgraduate (PG), Medical (MBBS), Diplomas, and specialized Professional Pathways.',
    icon: 'Layers'
  },
  {
    title: 'University Selection Assistance',
    desc: 'Unbiased matching of students with recognized, reputable universities that match their academic credentials and global ambitions.',
    icon: 'Building'
  },
  {
    title: 'Scholarship & Financial Advisory',
    desc: 'Identification of eligible scholarship opportunities, tuition discount schemes, and cost-of-living planning to optimize family investments.',
    icon: 'Coins'
  },
  {
    title: 'End-to-End Application & Admission Support',
    desc: 'Complete assistance with documentation, SOP reviews, submission tracking, and liaising with university admissions officers.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Meticulous Visa Guidance',
    desc: 'Step-by-step visa dossier compilation, financial document validation, and personalized mock visa interview preparations.',
    icon: 'FileSpreadsheet'
  },
  {
    title: 'Pre-Departure Briefings & Travel Prep',
    desc: 'Comprehensive guidance on flight booking, foreign exchange, accommodation search, airport pickups, packing lists, and student life orientation.',
    icon: 'Luggage'
  },
  {
    title: '100% Transparent Counselling Process',
    desc: 'Zero hidden clauses, genuine course details, realistic timelines, and trustworthy advice parents and students can rely upon.',
    icon: 'Eye'
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'Mauritius',
    question: 'Why is Mauritius such a popular destination for Indian medical students?',
    answer: 'Mauritius offers a safe environment with very low crime rates, separate secure hostel facilities for boys and girls, and no IELTS requirement for admission. The majority of professors and students come from Indian backgrounds, creating a familiar cultural and dietary environment. Furthermore, graduates have achieved a high FMGE passing average, and last year’s FMGE All India First Rank holder was from Mauritius.'
  },
  {
    category: 'MBBS',
    question: 'Is NEET mandatory for studying MBBS in Mauritius or abroad?',
    answer: 'Yes, as per National Medical Commission (NMC) regulations, qualifying in the NEET exam is required for Indian citizens who wish to practice medicine in India after completing their MBBS abroad.'
  },
  {
    category: 'General',
    question: 'Is IELTS required for studying abroad through Viswa Vidhya?',
    answer: 'For Mauritius, NO IELTS is required for admission. For Germany and Hungary, English-medium programs often accept Medium of Instruction (MOI) certificates or IELTS/TOEFL depending on specific university policies. We provide personalized guidance on language requirements for every institution.'
  },
  {
    category: 'Visa & Admission',
    question: 'What support does Viswa Vidhya provide throughout the admission and visa process?',
    answer: 'Viswa Vidhya provides end-to-end support including 1-on-1 career counselling, course & university selection, SOP assistance, application filing, offer letter confirmation, visa documentation, mock interview training, and pre-departure briefings.'
  },
  {
    category: 'General',
    question: 'How can I schedule a personal consultation with Mr. Arunlal M S?',
    answer: 'You can reach out directly via phone at +91 9487808313, email us at viswavidhyaconsultancy@gmail.com, or fill out the Free Guidance Form on our website to receive an immediate callback.'
  },
];
