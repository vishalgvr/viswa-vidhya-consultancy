import { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  BookOpen, 
  Globe, 
  Building2, 
  FileCheck, 
  Award, 
  FileText, 
  PlaneTakeoff, 
  ArrowRight,
  Phone
} from 'lucide-react';

import { BRAND, SERVICES_LIST } from '../data/consultancyData';

interface ServicesProps {
  onOpenGuidanceModal: () => void;
}

export default function Services({ onOpenGuidanceModal }: ServicesProps) {
  const [selectedStep, setSelectedStep] = useState<string>('01');

  const iconMap: Record<string, any> = {
    Compass,
    BookOpen,
    Globe,
    Building2,
    FileCheck,
    Award,
    FileText,
    PlaneTakeoff,
  };

  const currentService = SERVICES_LIST.find((s) => s.step === selectedStep) || SERVICES_LIST[0];
  const CurrentIcon = iconMap[currentService.iconName] || Compass;

  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
          <Sparkles className="w-3.5 h-3.5" /> Complete End-to-End Support
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
          Our 8-Step <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-300">Consultancy Journey</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          From the initial career counselling session to touchdown on your international campus, Viswa Vidhya provides personalized, transparent, and comprehensive guidance at each step.
        </p>
      </section>

      {/* Interactive Step Selector & Deep-Dive Viewer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {SERVICES_LIST.map((srv) => {
            const isSelected = selectedStep === srv.step;
            return (
              <button
                key={srv.step}
                onClick={() => setSelectedStep(srv.step)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`text-lg font-black font-heading ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                  {srv.step}
                </div>
                <div className={`text-xs font-bold truncate mt-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {srv.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Highlighted Step Feature Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-amber-400 font-heading">
                  Step {currentService.step}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-teal-300 border border-slate-700">
                  {currentService.keyAction}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                {currentService.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentService.description}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={onOpenGuidanceModal}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Help with {currentService.title}</span>
                </button>
                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Counsellor</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-40 h-40 rounded-3xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                <CurrentIcon className="w-20 h-20 text-amber-400 relative z-10" />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Complete 8-Step Interactive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Detailed Overview of All 8 Phases
          </h2>
          <p className="text-sm text-slate-300">
            Click on any phase or explore the full sequence below:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((s) => {
            const Icon = iconMap[s.iconName] || Compass;
            return (
              <div
                key={s.step}
                onClick={() => setSelectedStep(s.step)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  selectedStep === s.step
                    ? 'bg-slate-900 border-amber-400 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-amber-400">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-amber-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {s.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-teal-300 flex items-center justify-between">
                  <span>{s.keyAction}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-amber-950 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Ready to Begin Step 01?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule your 1-on-1 profile discovery session with Arunlal M S today.
            </p>
          </div>

          <button
            onClick={onOpenGuidanceModal}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-sm whitespace-nowrap shadow-xl transition-all cursor-pointer"
          >
            Start Career Counselling
          </button>
        </div>
      </section>

    </div>
  );
}
