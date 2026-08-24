import { 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Phone, 
  HeartHandshake, 
  Stethoscope, 
  Coins, 
  Smile,
  Trophy
} from 'lucide-react';


import { BRAND, MAURITIUS_MBBS_POINTS } from '../data/consultancyData';
import MBBSComparison from '../components/MBBSComparison';
import FAQAccordion from '../components/FAQAccordion';

interface MBBSAbroadProps {
  onOpenGuidanceModal: (dest?: string, course?: string) => void;
}

export default function MBBSAbroad({ onOpenGuidanceModal }: MBBSAbroadProps) {
  const coreFactors = [
    {
      icon: ShieldCheck,
      title: 'Safety & Security',
      description: 'Peaceful, stable environment with low crime rates and secure residential accommodation for complete peace of mind.'
    },
    {
      icon: GraduationCap,
      title: 'Quality Medical Education',
      description: 'English-medium curriculum, experienced clinical faculties, modern diagnostic laboratories, and intensive hospital rotations.'
    },
    {
      icon: Coins,
      title: 'Affordable Investment',
      description: 'Transparent tuition structures without excessive commercial costs, ensuring manageable expenses for families.'
    },
    {
      icon: Smile,
      title: 'Student Comfort & Culture',
      description: 'Culturally familiar atmosphere, delicious Indian food, approachable professors, and welcoming student communities.'
    },
    {
      icon: Trophy,
      title: 'Future Medical Licensing',
      description: 'Curriculum structured to prepare graduates for medical licensing exams like FMGE / NExT and global medical pathways.'
    },
    {
      icon: HeartHandshake,
      title: 'Quality Guidance & Mentorship',
      description: 'Personalized 1-on-1 advice from experienced counsellors who help you navigate choices with honesty and transparency.'
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
              <Stethoscope className="w-4 h-4" /> Medical Education Advisory
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
              Thinking About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-300 to-teal-300">
                MBBS Abroad?
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Choosing where to study medicine is one of the most critical decisions of your life. It is not just about getting an admission letter—it is about safety, clinical training quality, licensing exam preparation, and feeling supported throughout your medical degree.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenGuidanceModal('Mauritius', 'MBBS')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Talk to a Medical Career Counsellor</span>
              </button>

              <a
                href={`tel:${BRAND.phoneClean}`}
                className="px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-slate-400">
              <span>✓ NEET Counselling Guidance</span>
              <span>✓ Transparent Fees</span>
              <span>✓ 1-on-1 Mentorship</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <img
                src="/images/mauritius-hospital.jpg"
                alt="Medical clinical training"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
                <div className="text-xs font-bold text-amber-400">Bedside Clinical Rotations</div>
                <div className="text-xs text-slate-300">
                  Real hands-on patient exposure under experienced senior medical practitioners.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE 6 ESSENTIAL PILLARS OF CHOOSING AN MBBS DESTINATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" /> Decision Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            What Truly Matters When Choosing MBBS Abroad
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We evaluate every medical destination against 6 core parameters to safeguard your education and career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFactors.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PROMINENT MAURITIUS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-amber-950/50 border border-amber-500/40 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              🇲🇺 Spotlight: Mauritius for MBBS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              Why Mauritius is the Top Choice for Indian Medical Aspirants
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mauritius stands out as a prime destination offering complete cultural alignment, exceptional safety, Indian professors, and a stellar track record in Indian licensing examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MAURITIUS_MBBS_POINTS.map((pt, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <h4 className="font-bold text-white text-sm font-heading">{pt.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onOpenGuidanceModal('Mauritius', 'MBBS')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Mauritius MBBS Roadmap</span>
            </button>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Instant WhatsApp Query</span>
            </a>
          </div>

        </div>
      </section>

      {/* 4. COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MBBSComparison onOpenGuidanceModal={() => onOpenGuidanceModal('Mauritius', 'MBBS')} />
      </section>

      {/* 5. FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            MBBS Abroad FAQs
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Addressing common questions from NEET aspirants and parents.
          </p>
        </div>
        <FAQAccordion />
      </section>

    </div>
  );
}
