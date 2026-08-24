import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BRAND } from '../data/consultancyData';

interface FloatingCTAProps {
  onOpenGuidanceModal: () => void;
}

export default function FloatingCTA({ onOpenGuidanceModal }: FloatingCTAProps) {
  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Buttons Group */}
      <div className="flex flex-col items-end gap-2.5 pointer-events-auto">
        
        {/* Floating "Talk to Counsellor" Pill */}
        <button
          onClick={onOpenGuidanceModal}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-amber-400/50 text-white shadow-xl shadow-black/40 hover:scale-105 transition-all text-xs font-bold cursor-pointer backdrop-blur-md group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>Talk to Counsellor</span>
        </button>

        {/* Quick Call Circle */}
        <a
          href={`tel:${BRAND.phoneClean}`}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all"
          title={`Call ${BRAND.contactPerson}`}
          aria-label="Call Viswa Vidhya"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Floating Circle */}
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all"
          title="Chat with us on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200 border-2 border-slate-950"></span>
          </span>
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Floating Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-2.5 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 flex items-center gap-2 pointer-events-auto shadow-2xl z-40">
        <a
          href={`tel:${BRAND.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 text-slate-100 text-xs font-bold"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Counsellor</span>
        </a>
        <button
          onClick={onOpenGuidanceModal}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-extrabold shadow-md shadow-amber-500/20"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Free Guidance</span>
        </button>
      </div>

    </div>
  );
}
