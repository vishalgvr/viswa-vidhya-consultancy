import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle2, ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { DESTINATIONS } from '../data/consultancyData';

interface DestinationsProps {
  onOpenGuidanceModal: (dest?: string) => void;
}

export default function Destinations({ onOpenGuidanceModal }: DestinationsProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'MBBS' | 'Europe'>('All');

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (activeFilter === 'MBBS') return d.mbbsAvailable;
    if (activeFilter === 'Europe') return d.id === 'germany' || d.id === 'hungary';
    return true;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
          <Globe className="w-3.5 h-3.5" /> World-Class Study Hubs
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
          Explore Prime <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-300">Study Abroad Destinations</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Discover top-tier educational hubs across Mauritius, Germany, and Hungary. Filter by specializations, explore key advantages, and find your ideal pathway.
        </p>

        {/* Filter Pills */}
        <div className="pt-4 flex flex-wrap gap-2 justify-center">
          {[
            { id: 'All', label: 'All Destinations (3)' },
            { id: 'MBBS', label: 'MBBS & Medical Hubs (Mauritius & Hungary)' },
            { id: 'Europe', label: 'European Hubs (Germany & Hungary)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Destination Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredDestinations.map((dest) => (
          <div
            id={dest.slug}
            key={dest.id}
            className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 sm:p-10 shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl group h-72 sm:h-96">
                <img
                  src={dest.image}
                  alt={`Study in ${dest.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white font-bold text-sm">
                  <span className="text-2xl">{dest.flag}</span>
                  <span>{dest.name}</span>
                </div>

                {dest.mbbsAvailable && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider">
                    MBBS Preferred
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-amber-400 uppercase tracking-wide">
                  {dest.tagline}
                </div>
              </div>

              {/* Right Column: Information & Deep-Dive */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white font-heading mb-2">
                    Study in {dest.name} {dest.flag}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {dest.overview}
                  </p>
                </div>

                {/* Key Advantages */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Highlights & Advantages:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {dest.keyAdvantages.map((adv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Intakes & Language Requirements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                  <div>
                    <div className="text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" /> Intakes:
                    </div>
                    <div className="text-white font-medium">{dest.intakes.join(' & ')}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 font-semibold mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Language Requirement:
                    </div>
                    <div className="text-white font-medium">{dest.languageRequirement}</div>
                  </div>
                </div>

                {/* Popular Fields */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-400">Popular Study Fields:</div>
                  <div className="flex flex-wrap gap-2">
                    {dest.popularFor.map((p, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap gap-3">
                  {dest.id === 'mauritius' ? (
                    <Link
                      to="/mauritius"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
                    >
                      <span>Explore Mauritius Landing Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => onOpenGuidanceModal(dest.name)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                    >
                      <span>Apply for {dest.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    onClick={() => onOpenGuidanceModal(dest.name)}
                    className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer"
                  >
                    Get Free Counsellor Advice
                  </button>
                </div>

              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Destination Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-teal-950/60 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Undecided Between Germany, Hungary & Mauritius?
            </h3>
            <p className="text-sm text-slate-300">
              Let us analyze your academic background, budget, and career ambition to map out the most rewarding destination.
            </p>
          </div>
          <button
            onClick={() => onOpenGuidanceModal()}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm whitespace-nowrap shadow-xl transition-all cursor-pointer"
          >
            Get Destination Matching
          </button>
        </div>
      </section>

    </div>
  );
}
