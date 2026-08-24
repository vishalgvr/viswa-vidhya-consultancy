import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onOpenGuidanceModal?: (destName: string) => void;
}

export default function DestinationCard({ destination, onOpenGuidanceModal }: DestinationCardProps) {
  return (
    <div className="group relative bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between">
      
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={destination.image}
          alt={`Study in ${destination.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        {/* Country Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-white shadow-lg">
          <span className="text-xl">{destination.flag}</span>
          <span className="font-bold text-sm font-heading">{destination.name}</span>
        </div>

        {destination.mbbsAvailable && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
            MBBS Hub
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs text-amber-400 font-bold tracking-wide uppercase">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <p className="text-sm text-slate-300 line-clamp-3 mb-4">
            {destination.overview}
          </p>

          {/* Key Advantages */}
          <div className="space-y-2 mb-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Key Advantages:
            </div>
            <div className="space-y-1.5">
              {destination.keyAdvantages.slice(0, 3).map((adv, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Programs Tags */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-semibold text-slate-400">Popular Fields:</div>
            <div className="flex flex-wrap gap-1.5">
              {destination.popularFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2.5">
          {destination.id === 'mauritius' ? (
            <Link
              to="/mauritius"
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
            >
              <span>Explore Mauritius</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <Link
              to={`/destinations#${destination.slug}`}
              className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <span>Explore {destination.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}

          {onOpenGuidanceModal && (
            <button
              onClick={() => onOpenGuidanceModal(destination.name)}
              className="p-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 text-blue-400 hover:text-blue-300 text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
              title={`Get Guidance for ${destination.name}`}
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
