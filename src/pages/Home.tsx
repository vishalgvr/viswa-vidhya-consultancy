import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2, 
  Globe, 
  Trophy, 
  HeartHandshake, 
  BookOpen, 
  Award,
  Users,
  HelpCircle,
  Phone
} from 'lucide-react';
import { BRAND, DESTINATIONS, MAURITIUS_MBBS_POINTS, SERVICES_LIST, COURSES_DATA } from '../data/consultancyData';

import DestinationCard from '../components/DestinationCard';
import FAQAccordion from '../components/FAQAccordion';

interface HomeProps {
  onOpenGuidanceModal: (dest?: string, course?: string) => void;
}

export default function Home({ onOpenGuidanceModal }: HomeProps) {
  const [activeDestIndex, setActiveDestIndex] = useState(0);
  const destinationTickers = ['🇩🇪 Germany', '🇭🇺 Hungary', '🇲🇺 Mauritius'];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDestIndex((prev) => (prev + 1) % destinationTickers.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-teal-500/15 to-amber-500/20 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Animated Live Indicator Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  Targeting: <strong className="text-amber-400 font-bold transition-all">{destinationTickers[activeDestIndex]}</strong>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight leading-[1.08]">
                Think Global. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-teal-300 to-blue-400">
                  Choose Your Future.
                </span>
              </h1>

              {/* Supporting Subheadline */}
              <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Personalized guidance, trusted destinations, and complete support from course selection to admission and visa.
              </p>

              {/* Primary Hero CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onOpenGuidanceModal()}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-base flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-slate-950" />
                  <span>Get Free Career Guidance</span>
                </button>

                <Link
                  to="/destinations"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 transition-all"
                >
                  <span>Explore Destinations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
                <div className="text-left">
                  <div className="text-amber-400 font-bold text-base sm:text-lg">1-on-1</div>
                  <div className="text-xs text-slate-400">Direct Mentorship</div>
                </div>
                <div className="text-left">
                  <div className="text-teal-300 font-bold text-base sm:text-lg">No IELTS</div>
                  <div className="text-xs text-slate-400">Options (Mauritius)</div>
                </div>
                <div className="text-left">
                  <div className="text-blue-400 font-bold text-base sm:text-lg">100%</div>
                  <div className="text-xs text-slate-400">Transparent Support</div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Visual Card */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                  <img
                    src="/images/hero.jpg"
                    alt="Viswa Vidhya Study Abroad Students"
                    className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Floating Floating Pill: FMGE Success */}
                  <div className="absolute top-4 right-4 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-amber-500/40 shadow-xl max-w-[200px] animate-bounce-slow">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-extrabold text-amber-300 font-heading">FMGE 1st Rank</div>
                        <div className="text-[10px] text-slate-300">From Mauritius graduates</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400 font-semibold">Lead Counsellor</div>
                        <div className="text-sm font-bold text-white">{BRAND.contactPerson}</div>
                      </div>
                      <a
                        href={`tel:${BRAND.phoneClean}`}
                        className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating Destination Badges */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl items-center gap-3">
                  <div className="flex -space-x-2">
                    <span className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-sm shadow">🇩🇪</span>
                    <span className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-sm shadow">🇭🇺</span>
                    <span className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-sm shadow">🇲🇺</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">3 Key Global Hubs</div>
                    <div className="text-[10px] text-slate-400">Germany • Hungary • Mauritius</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY STUDY ABROAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
            <Globe className="w-3.5 h-3.5" /> Global Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            Why Study Abroad?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Expand your academic horizons, gain international work exposure, and build a globally accredited career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: GraduationCap,
              color: 'text-amber-400',
              bg: 'bg-amber-500/10 border-amber-500/20',
              title: 'World-Class Education',
              desc: 'Learn through modern, practical curriculums, advanced research labs, and globally recognized faculty.'
            },
            {
              icon: Award,
              color: 'text-teal-400',
              bg: 'bg-teal-500/10 border-teal-500/20',
              title: 'Global Career Edge',
              desc: 'International degrees open doors to global MNCs, research fellowships, and premier clinical practices.'
            },
            {
              icon: Users,
              color: 'text-blue-400',
              bg: 'bg-blue-500/10 border-blue-500/20',
              title: 'Cultural Exposure',
              desc: 'Live and collaborate with international peers, broadening your perspective and independence.'
            },
            {
              icon: ShieldCheck,
              color: 'text-emerald-400',
              bg: 'bg-emerald-500/10 border-emerald-500/20',
              title: 'High Living Standards',
              desc: 'Safe student environments, disciplined university ecosystems, and structured support networks.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.bg} border`}>
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. EXPLORE PRIMARY DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Handpicked Study Hubs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
              Explore Our Key Destinations
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              We specialize in three prime destinations offering outstanding educational quality, safety, and transparent pathways.
            </p>
          </div>

          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Compare All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onOpenGuidanceModal={onOpenGuidanceModal}
            />
          ))}
        </div>
      </section>

      {/* 4. WHY MAURITIUS FOR MBBS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950 border border-amber-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side text & points */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                🇲🇺 Mauritius Spotlight
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight">
                Why Mauritius for MBBS?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Mauritius has emerged as a preferred destination for Indian medical aspirants seeking international medical degrees in a safe, culturally familiar, and supportive environment.
              </p>

              {/* Points grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {MAURITIUS_MBBS_POINTS.map((pt, idx) => (
                  <div key={idx} className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <h4 className="font-bold text-xs sm:text-sm text-white font-heading">{pt.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/mauritius"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <span>Complete Mauritius Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => onOpenGuidanceModal('Mauritius', 'MBBS')}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all cursor-pointer"
                >
                  Check MBBS Eligibility
                </button>
              </div>

            </div>

            {/* Right side image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="/images/mauritius-campus.jpg"
                  alt="Medical campus in Mauritius"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs text-slate-200">
                  <div className="font-bold text-amber-400">Familiar & Disciplined Campus Life</div>
                  <div>Majority Indian students, Indian faculty & separate secure hostels.</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. POPULAR STUDY OPPORTUNITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
            <BookOpen className="w-3.5 h-3.5" /> Diverse Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            Popular Study Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore diverse undergraduate, postgraduate, medical, and specialized diploma pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES_DATA.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-amber-400 border border-slate-700">
                    {course.category}
                  </span>
                  <span className="text-xs text-slate-400">{course.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-white font-heading group-hover:text-amber-400 transition-colors mb-2">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 mb-4">
                  {course.description}
                </p>
                <div className="text-xs text-slate-400 space-y-1 mb-4">
                  <div className="font-semibold text-slate-300">Key Destinations:</div>
                  <div className="text-teal-300 font-medium">{course.popularDestinations.join(' • ')}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenGuidanceModal(course.popularDestinations[0], course.category)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Enquire for {course.category}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
          >
            <span>View All Courses & Eligibility Filters</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. OUR COMPLETE 8-STEP SUPPORT PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Structured Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            Our Complete Support Process
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From your very first counselling conversation to stepping onto campus, Viswa Vidhya guides you at every single milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.step}
              className="relative bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-heading text-amber-400/70 group-hover:text-amber-400 transition-colors">
                  {srv.step}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                  Phase
                </span>
              </div>
              <h3 className="text-base font-bold text-white font-heading mb-2 group-hover:text-amber-400 transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {srv.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Learn More About Our 8 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. WHY CHOOSE VISWA VIDHYA - STUDENT FOCUSED BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <img
                src="/images/counselling.jpg"
                alt="Personalized career mentorship"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
                <div className="text-xs font-bold text-amber-400">Direct Mentorship with Arunlal M S</div>
                <div className="text-xs text-slate-300">Dedicated career assessment for every student.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <HeartHandshake className="w-3.5 h-3.5" /> Student-First Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              Why Choose Viswa Vidhya?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Unlike commercial agencies, Viswa Vidhya is founded on direct mentorship, transparent guidance, and zero false claims. We walk with you through every step of your international education journey.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Personalized One-on-One Mentorship', desc: 'Customized course and destination matching according to your background and career goals.' },
                { title: '100% Transparent Counselling', desc: 'Real facts, clear fee structures, and authentic university information without hidden charges.' },
                { title: 'Recognized Universities & Complete Visa Guidance', desc: 'Step-by-step documentation, mock interviews, and pre-departure briefings.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">{item.title}</div>
                    <div className="text-xs text-slate-300">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/why-choose-us"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Read Why Students & Parents Trust Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
            <HelpCircle className="w-3.5 h-3.5" /> Have Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-300">
            Quick answers regarding admissions, IELTS requirements, MBBS pathways, and visa support.
          </p>
        </div>

        <FAQAccordion />
      </section>

    </div>
  );
}
