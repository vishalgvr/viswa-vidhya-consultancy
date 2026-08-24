import { 
  HeartHandshake, 
  UserCheck, 
  Layers, 
  Building, 
  Coins, 
  CheckCircle2, 
  FileSpreadsheet, 
  Luggage, 
  Eye, 
  Phone,
  XCircle
} from 'lucide-react';

import { BRAND, WHY_CHOOSE_US_POINTS } from '../data/consultancyData';

interface WhyChooseUsProps {
  onOpenGuidanceModal: () => void;
}

export default function WhyChooseUs({ onOpenGuidanceModal }: WhyChooseUsProps) {
  const iconMap: Record<string, any> = {
    UserCheck,
    Layers,
    Building,
    Coins,
    CheckCircle2,
    FileSpreadsheet,
    Luggage,
    Eye,
  };

  const comparisonPoints = [
    {
      feature: 'Counselling Approach',
      viswa: 'Personalized 1-on-1 mentorship with Arunlal M S tailored to your academic reality',
      traditional: 'Generic sales quotas and pushy agent targets'
    },
    {
      feature: 'Destination Transparency',
      viswa: 'Honest pros and cons for Germany, Hungary, and Mauritius with verified ground facts',
      traditional: 'Pushing destinations with highest agent commissions'
    },
    {
      feature: 'MBBS Guidance',
      viswa: 'Detailed clarity on FMGE exam readiness, Indian faculty presence, safety, and hostel rules',
      traditional: 'Vague promises with hidden university clauses'
    },
    {
      feature: 'Fee & Cost Transparency',
      viswa: 'Complete breakdown of official tuition fees, living costs, and zero hidden consultancy charges',
      traditional: 'Hidden processing fees introduced at every phase'
    },
    {
      feature: 'Post-Admission Support',
      viswa: 'Continuous pre-departure briefings, airport arrival guidance, and on-campus senior network bridge',
      traditional: 'Communication ceases once university fees are remitted'
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
          <HeartHandshake className="w-3.5 h-3.5" /> Built on Trust & Integrity
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-300">Viswa Vidhya</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          We combine individualized career mentoring, verified international university options, and 100% transparent guidance to empower students and reassure parents.
        </p>
      </section>

      {/* 8 Core Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((pt, idx) => {
            const Icon = iconMap[pt.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white font-heading">{pt.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Matrix: Traditional Agents vs. Viswa Vidhya */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">The Difference is Clarity</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
              Viswa Vidhya vs. Typical Consultancy Agencies
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              See why hundreds of students and parents prefer our ethical, transparent mentorship model.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4 w-1/4">Key Aspect</th>
                  <th className="py-4 px-4 w-5/12 text-amber-400 bg-amber-500/5 rounded-t-xl">Viswa Vidhya Educational Consultancy ✨</th>
                  <th className="py-4 px-4 w-1/3 text-slate-500">Typical Commercial Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {comparisonPoints.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-4 font-bold text-white align-top">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 align-top bg-amber-500/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-100">{row.viswa}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-400 align-top">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Leadership Endorsement Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Ready for a Transparent Conversation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with <strong className="text-amber-400">{BRAND.contactPerson}</strong> for honest, reliable study abroad counsel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onOpenGuidanceModal}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm shadow-xl transition-all cursor-pointer"
            >
              Get Free Guidance
            </button>
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
