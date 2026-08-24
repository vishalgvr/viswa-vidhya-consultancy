import { 
  Sparkles, 
  ShieldCheck, 
  Target, 
  UserCheck, 
  ArrowRight,
  Phone,
  Mail,
  Compass
} from 'lucide-react';

import { BRAND } from '../data/consultancyData';

interface AboutProps {
  onOpenGuidanceModal: () => void;
}

export default function About({ onOpenGuidanceModal }: AboutProps) {
  const values = [
    {
      icon: UserCheck,
      title: 'One-on-One Mentorship',
      desc: 'Every student receives direct personal guidance tailored to their specific background, budget, and future career goals.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Counselling',
      desc: 'We present clear facts regarding curriculums, living conditions, recognized universities, and visa processes without exaggerated claims.'
    },
    {
      icon: Target,
      title: 'Recognized University Options',
      desc: 'We partner with and guide students toward recognized and accredited higher education institutions across Germany, Hungary, and Mauritius.'
    },
    {
      icon: Compass,
      title: 'Student-First Philosophy',
      desc: 'Your educational success and safety come first. We help you choose the right country and course that genuinely matches your potential.'
    }
  ];

  const journeyMilestones = [
    {
      year: 'Phase 1',
      title: 'Personal Discovery & Academic Mapping',
      description: 'Understanding the student’s strengths, academic score, budget parameters, and career ambitions through thorough 1-on-1 dialogue.'
    },
    {
      year: 'Phase 2',
      title: 'Transparent Destination & Program Matching',
      description: 'Evaluating suitable pathways in Germany (Engineering & Tech), Hungary (EU Degrees & Medicine), or Mauritius (MBBS with Indian faculty & safe hostels).'
    },
    {
      year: 'Phase 3',
      title: 'Application & Admission Formalities',
      description: 'Meticulous documentation, official SOP alignment, liaising with admissions departments, and securing confirmed offer letters.'
    },
    {
      year: 'Phase 4',
      title: 'Visa Processing & Interview Preparation',
      description: 'Comprehensive financial dossier compilation, embassy appointment coordination, and personalized mock interview practice.'
    },
    {
      year: 'Phase 5',
      title: 'Pre-Departure Briefing & Campus Landing',
      description: 'Equipping students with travel checklists, forex advice, accommodation confirmation, and connecting with on-campus senior student networks.'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Sparkles className="w-3.5 h-3.5" /> About Viswa Vidhya
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
              Empowering Students with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-300">Trusted Global Guidance</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Viswa Vidhya Educational Consultancy is a student-focused educational consultancy dedicated to helping students and parents make confident, informed decisions about international education and medical careers.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              We specialize in guiding aspiring doctors, engineers, and professionals to world-class institutions across <strong>Germany 🇩🇪</strong>, <strong>Hungary 🇭🇺</strong>, and <strong>Mauritius 🇲🇺</strong> with complete transparency from initial counselling to visa approval and campus departure.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenGuidanceModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <span>Book a Mentorship Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${BRAND.phoneClean}`}
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <img
                src="/images/counselling.jpg"
                alt="Viswa Vidhya Counselling Session"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              {/* Trust Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700 space-y-1">
                <div className="text-xs font-bold text-amber-400">Direct Personal Attention</div>
                <div className="text-xs text-slate-300">
                  Led by <strong>{BRAND.contactPerson}</strong>, ensuring honest advice without confusing middleman tiers.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
            <ShieldCheck className="w-3.5 h-3.5" /> Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            Our Core Principles
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Every recommendation we make is grounded in student well-being, verified university credentials, and career sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-6 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">{v.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Journey / Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
            <Compass className="w-3.5 h-3.5" /> Step-by-Step Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            The Viswa Vidhya Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            How we guide students through a smooth, stress-free international education transition.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {journeyMilestones.map((m, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:scale-125 transition-transform shadow" />
              
              {/* Phase label */}
              <span className="hidden sm:block absolute -left-28 top-1 text-xs font-bold text-amber-400 uppercase font-heading">
                {m.year}
              </span>

              <div className="bg-slate-900/80 border border-slate-800 group-hover:border-slate-700 rounded-2xl p-6 shadow-lg transition-all">
                <span className="sm:hidden inline-block text-xs font-bold text-amber-400 uppercase font-heading mb-1">
                  {m.year}
                </span>
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Counsellor / Leadership Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 text-center lg:text-left space-y-3">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-teal-500 p-1 mx-auto lg:mx-0 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-3xl font-heading text-amber-400">
                  AL
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-heading">{BRAND.contactPerson}</h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">{BRAND.role}</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                “Choosing an international education pathway is one of the most critical decisions for a student and their family. At Viswa Vidhya, our pledge is to deliver authentic, accurate, and supportive mentorship that puts the student's career, safety, and confidence first.”
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{BRAND.phone}</span>
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-teal-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>{BRAND.email}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
