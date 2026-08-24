export interface Destination {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  image: string;
  popularFor: string[];
  keyAdvantages: string[];
  intakes: string[];
  languageRequirement: string;
  overview: string;
  whyChoose: string[];
  mbbsAvailable: boolean;
  slug: string;
}

export interface CourseItem {
  id: string;
  title: string;
  category: 'UG' | 'PG' | 'Diploma' | 'MBBS' | 'Professional Courses' | 'Other Opportunities';
  duration: string;
  popularDestinations: string[];
  eligibility: string;
  description: string;
  highlights: string[];
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
  keyAction: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Mauritius' | 'MBBS' | 'Visa & Admission';
}
