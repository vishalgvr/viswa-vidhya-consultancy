import { 
  Phone, 
  Mail, 
  Sparkles, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  HelpCircle
} from 'lucide-react';

import { BRAND } from '../data/consultancyData';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';

export default function Contact() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 space-y-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
          <Sparkles className="w-3.5 h-3.5" /> Get in Touch
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading leading-tight">
          Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-300">Viswa Vidhya</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Have questions about studying abroad, MBBS in Mauritius, or European university admissions? Reach out directly to our lead counsellor.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Counsellor Profile Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 via-teal-500 to-blue-600 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-2xl text-amber-400 font-heading">
                    AL
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{BRAND.contactPerson}</h3>
                  <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">{BRAND.role}</p>
                  <p className="text-xs text-slate-400">{BRAND.company}</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-6 space-y-4">
                
                {/* Phone */}
                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 text-slate-200 hover:text-amber-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Call / WhatsApp</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400">{BRAND.phone}</div>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Direct WhatsApp Chat</div>
                    <div className="text-sm font-bold text-emerald-200">Start Conversation with Arunlal M S</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 text-slate-200 hover:text-teal-300 transition-all group break-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Email Us</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-teal-300">{BRAND.email}</div>
                  </div>
                </a>

              </div>

              {/* Consultancy Hours */}
              <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Counselling Hours</span>
                </div>
                <p className="text-xs text-slate-400">
                  Monday to Saturday: 9:30 AM – 7:00 PM IST <br />
                  Sunday: Prior appointment for parents & working professionals.
                </p>
              </div>

            </div>

            {/* Reassurance card */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Your personal and academic details are kept completely confidential and used solely for university admission guidance.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact & Counselling Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Common Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Quick information for students preparing to apply.
          </p>
        </div>

        <FAQAccordion />
      </section>

    </div>
  );
}
