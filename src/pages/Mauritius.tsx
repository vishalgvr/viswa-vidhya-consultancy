import { 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  Users, 
  Trophy, 
  Home as HomeIcon, 
  CheckCircle2, 
  Phone, 
  Palmtree, 
  Utensils, 
  Award
} from 'lucide-react';
import { BRAND } from '../data/consultancyData';

import MBBSComparison from '../components/MBBSComparison';
import FAQAccordion from '../components/FAQAccordion';

interface MauritiusProps {
  onOpenGuidanceModal: (dest?: string, course?: string) => void;
}

export default function Mauritius({ onOpenGuidanceModal }: MauritiusProps) {
  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Very Low Crime Rate & Safe Environment',
      description: 'Mauritius is one of the safest and most tranquil island nations globally, providing a peaceful and disciplined study environment.',
      tag: 'Peace of Mind'
    },
    {
      icon: GraduationCap,
      title: 'No IELTS Required for Admission',
      description: 'Direct admission process for eligible applicants without the mandatory barrier of IELTS or TOEFL exams.',
      tag: 'Hassle-Free'
    },
    {
      icon: Users,
      title: 'Majority Indian Students & Faculty',
      description: 'The vast majority of classmates, senior doctors, and teaching faculty members are from Indian backgrounds, creating a culturally comfortable atmosphere.',
      tag: 'Cultural Comfort'
    },
    {
      icon: Trophy,
      title: 'Higher FMGE Passing Average',
      description: 'Medical graduates from Mauritius achieve higher FMGE passing averages, and last year’s FMGE All India First Rank holder graduated from Mauritius.',
      tag: 'Proven Milestone'
    },
    {
      icon: HomeIcon,
      title: 'Separate Hostels for Boys & Girls',
      description: 'Safe, well-maintained, and secure separate residential hostel facilities for male and female students with 24/7 warden and security oversight.',
      tag: 'Secure Living'
    },
    {
      icon: Utensils,
      title: 'Indian Food & Homelike Community',
      description: 'Availability of traditional Indian vegetarian and non-vegetarian meals, festive celebrations, and supportive senior student guidance.',
      tag: 'Home Away From Home'
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24">
      
      {/* 1. MAURITIUS HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Palmtree className="w-3.5 h-3.5" /> Premier Study Island Destination 🇲🇺
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
              Study in Mauritius. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-teal-300 to-blue-400">
                Build Your Future with Confidence.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Mauritius offers a safe, peaceful, and world-class academic destination for Indian students. With English-medium curriculums, Indian faculty, separate hostels, and No IELTS requirement, it provides the ideal launchpad for your global career.
            </p>

            {/* Quick Hero Feature Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> No IELTS Required
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-teal-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Low Crime Rate
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Indian Professors & Students
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenGuidanceModal('Mauritius', 'MBBS')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Apply for Mauritius Intake</span>
              </button>

              <a
                href={`tel:${BRAND.phoneClean}`}
                className="px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Talk to Counsellor</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative group">
              <img
                src="/images/mauritius-campus.jpg"
                alt="Medical students at Mauritius University"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              {/* FMGE Highlight Badge */}
              <div className="absolute top-4 right-4 p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-amber-500/50 shadow-xl max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-amber-300 font-heading">FMGE 1st Rank Holder</div>
                    <div className="text-[10px] text-slate-300">Graduated from Mauritius</div>
                  </div>
                </div>
              </div>

              {/* Hostels & Safety Note */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80">
                <div className="text-xs font-bold text-teal-300">Safe, Secure Campus Environment</div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Separate boys and girls hostel facilities with dedicated wardens & 24/7 security.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY MAURITIUS INTERACTIVE BENEFITS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" /> Essential Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            Why Indian Students Choose Mauritius
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Mauritius blends international educational standards with cultural comfort, unmatched safety, and strong clinical training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">
                    {b.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. DEDICATED MBBS IN MAURITIUS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-amber-950/40 border border-amber-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <GraduationCap className="w-4 h-4" /> Medical Education Spotlight
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading leading-tight">
                MBBS in Mauritius: Medical Excellence in a Peaceful Paradise
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                For medical aspirants, Mauritius provides the perfect balance of rigorous clinical exposure, dedicated bedside training, and a warm, supportive faculty composed largely of experienced Indian medical professors.
              </p>

              <div className="space-y-3">
                {[
                  'English medium medical curriculum aligned with international licensing exams',
                  'Rigorous bedside clinical rotations in multi-specialty affiliated hospitals',
                  'High FMGE passing average among graduating students',
                  'Last year’s FMGE First Rank holder achieved their medical degree in Mauritius',
                  'Separate, secure hostel facilities for boys and girls with Indian food'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
                <button
                  onClick={() => onOpenGuidanceModal('Mauritius', 'MBBS')}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Enquire for MBBS in Mauritius</span>
                </button>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="/images/mauritius-hospital.jpg"
                  alt="Clinical training in Mauritius hospital"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. DECISION COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MBBSComparison onOpenGuidanceModal={() => onOpenGuidanceModal('Mauritius', 'MBBS')} />
      </section>

      {/* 5. MAURITIUS FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Mauritius Study FAQs
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Answers to common questions regarding living, hostels, faculty, and admissions in Mauritius.
          </p>
        </div>
        <FAQAccordion />
      </section>

    </div>
  );
}
