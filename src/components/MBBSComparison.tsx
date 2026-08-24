import { CheckCircle2, Star } from 'lucide-react';
import { MBBS_DECISION_FACTORS } from '../data/consultancyData';

interface MBBSComparisonProps {
  onOpenGuidanceModal: () => void;
}

export default function MBBSComparison({ onOpenGuidanceModal }: MBBSComparisonProps) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Glow backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Strategic Medical Decision Matrix
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Key Factors for Selecting an MBBS Destination
          </h3>
          <p className="text-sm text-slate-300">
            Choosing where to study medicine is more than just choosing a degree. It involves safety, clinical mentorship, licensing exam preparation, and living comfort.
          </p>
        </div>

        {/* Comparison Grid / Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="py-4 px-4">Evaluation Factor</th>
                <th className="py-4 px-4">Why It Matters</th>
                <th className="py-4 px-4 text-amber-400">Mauritius Medical Advantage 🇲🇺</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm">
              {MBBS_DECISION_FACTORS.map((item, index) => (
                <tr key={index} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-white align-top">
                    {item.factor}
                  </td>
                  <td className="py-4 px-4 text-slate-300 text-xs leading-relaxed align-top">
                    {item.description}
                  </td>
                  <td className="py-4 px-4 align-top">
                    <div className="flex items-start gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl p-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-amber-200">
                        {item.mauritiusScore}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-800/60 to-amber-900/30 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-white text-base">
              Need personalized MBBS eligibility assessment?
            </h4>
            <p className="text-xs text-slate-300">
              Get detailed guidance on NEET score mapping, hostel arrangements, and transparent admission procedures.
            </p>
          </div>

          <button
            onClick={onOpenGuidanceModal}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            Talk to a Medical Career Counsellor
          </button>
        </div>

      </div>

    </div>
  );
}
