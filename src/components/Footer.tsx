import { Link } from 'react-router-dom';
import { Phone, Mail, User, ShieldCheck, Award, HeartHandshake, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/consultancyData';

interface FooterProps {
  onOpenGuidanceModal: () => void;
}

export default function Footer({ onOpenGuidanceModal }: FooterProps) {
  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-r from-blue-600/10 via-amber-500/15 to-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Pre-Footer Action Banner */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-teal-950/80 border border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Award className="w-3.5 h-3.5" /> Next Intake Consultations Open
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
              “Your future is global. Let's find the right path.”
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Speak directly with <strong className="text-amber-400">{BRAND.contactPerson}</strong> for clear, transparent, and personalized advice on medical and higher education abroad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto">
            <button
              onClick={onOpenGuidanceModal}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all cursor-pointer"
            >
              Get Free Guidance <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-teal-600 to-amber-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-teal-300">
                    VV
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-lg font-black tracking-tight text-white font-heading leading-tight">
                  Viswa Vidhya
                </span>
                <span className="block text-xs font-semibold tracking-wider uppercase text-amber-400">
                  Educational Consultancy
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering students and parents with honest, transparent, and end-to-end career guidance for premier study destinations in Mauritius, Germany, and Hungary.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> 100% Transparent
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <HeartHandshake className="w-3.5 h-3.5 text-teal-400" /> 1-on-1 Mentorship
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-amber-400 transition-colors">Study Destinations</Link>
              </li>
              <li>
                <Link to="/mauritius" className="hover:text-amber-400 transition-colors font-medium text-amber-300">Mauritius Spotlight</Link>
              </li>
              <li>
                <Link to="/mbbs-abroad" className="hover:text-amber-400 transition-colors font-medium text-teal-300">MBBS Abroad</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-amber-400 transition-colors">Courses & Opportunities</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">Our 8 Services</Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="hover:text-amber-400 transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Primary Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/mauritius" className="group flex items-start gap-2 hover:text-white transition-colors">
                  <span className="text-base">🇲🇺</span>
                  <div>
                    <div className="font-semibold text-slate-200 group-hover:text-amber-400">Mauritius</div>
                    <div className="text-xs text-slate-500">MBBS & Indian Faculty</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="group flex items-start gap-2 hover:text-white transition-colors">
                  <span className="text-base">🇩🇪</span>
                  <div>
                    <div className="font-semibold text-slate-200 group-hover:text-blue-400">Germany</div>
                    <div className="text-xs text-slate-500">Engineering & Tech Hub</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="group flex items-start gap-2 hover:text-white transition-colors">
                  <span className="text-base">🇭🇺</span>
                  <div>
                    <div className="font-semibold text-slate-200 group-hover:text-teal-400">Hungary</div>
                    <div className="text-xs text-slate-500">EU Degrees & Medical</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <User className="w-4 h-4 text-amber-400" />
                  <span>{BRAND.contactPerson}</span>
                </div>
                <div className="text-xs text-slate-400 pl-6">
                  {BRAND.role}
                </div>
              </div>

              <a
                href={`tel:${BRAND.phoneClean}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-xs">{BRAND.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-teal-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-xs">{BRAND.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {BRAND.company}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Study Abroad • MBBS Abroad • Career Guidance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
