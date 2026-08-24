import React, { useState } from 'react';
import { X, CheckCircle2, Globe, GraduationCap, Phone, Mail, User, Send, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND } from '../data/consultancyData';

interface GuidanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  initialCourse?: string;
}

export default function GuidanceModal({ isOpen, onClose, initialDestination = '', initialCourse = '' }: GuidanceModalProps) {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState(initialDestination || 'Mauritius');
  const [courseCategory, setCourseCategory] = useState(initialCourse || 'MBBS');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#38bdf8', '#34d399', '#f59e0b']
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({ name: '', phone: '', email: '', message: '' });
    onClose();
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Mr. Arunlal M S (Viswa Vidhya Consultancy),\nMy name is ${formData.name}.\nI am interested in studying: ${courseCategory} in ${destination}.\nMy phone is: ${formData.phone}${formData.email ? `\nEmail: ${formData.email}` : ''}${formData.message ? `\nQuery: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/919487808313?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header background glow */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-600/30 via-teal-500/20 to-amber-500/20 pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative p-6 sm:p-8">
          {!submitted ? (
            <>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5" /> 100% Free 1-on-1 Guidance
                </span>
                <span className="text-xs text-slate-400">Step {step} of 3</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-heading">
                Start Your Global Education Journey
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Direct mentorship with <strong className="text-amber-400">{BRAND.contactPerson}</strong>. No agency fees or hidden surprises.
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 h-1.5 rounded-full mb-6 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-amber-400 h-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-slate-200">
                    <Globe className="w-4 h-4 inline mr-2 text-blue-400" />
                    Where do you want to study?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: 'Mauritius', flag: '🇲🇺', tag: 'MBBS & Safe Island' },
                      { name: 'Germany', flag: '🇩🇪', tag: 'Tech & Low Tuition' },
                      { name: 'Hungary', flag: '🇭🇺', tag: 'EU Degrees & Quality' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() => setDestination(item.name)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          destination === item.name
                            ? 'bg-blue-600/30 border-amber-400 shadow-lg shadow-blue-500/10'
                            : 'bg-slate-800/60 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        <div className="text-2xl mb-1">{item.flag}</div>
                        <div className="font-bold text-white text-base">{item.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.tag}</div>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full mt-6 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                  >
                    Continue to Course Selection <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-slate-200">
                    <GraduationCap className="w-4 h-4 inline mr-2 text-teal-400" />
                    What course category are you interested in?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'MBBS', label: 'MBBS Abroad', highlight: '🔥 Top Choice' },
                      { id: 'UG', label: 'Bachelor (UG)', highlight: '3-4 Years' },
                      { id: 'PG', label: 'Master (PG / MBA)', highlight: '1-2 Years' },
                      { id: 'Diploma', label: 'Diploma Programs', highlight: 'Fast-track' },
                      { id: 'Professional', label: 'Professional Courses', highlight: 'Career Focused' },
                      { id: 'General Guidance', label: 'Undecided / Advice', highlight: '1-on-1 Help' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setCourseCategory(item.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          courseCategory === item.id
                            ? 'bg-teal-600/30 border-amber-400 shadow-md'
                            : 'bg-slate-800/60 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                        <div className="text-xs text-amber-400 font-semibold">{item.highlight}</div>
                        <div className="font-bold text-white text-sm mt-0.5">{item.label}</div>
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-teal-600/30 transition-all cursor-pointer"
                    >
                      Enter Contact Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center justify-between text-xs text-slate-300">
                    <div>
                      Target: <strong className="text-amber-400">{destination}</strong>
                    </div>
                    <div>
                      Course: <strong className="text-teal-300">{courseCategory}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-blue-400 hover:underline"
                    >
                      Change
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone / WhatsApp <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Specific Question or Academic Background
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Completed 12th PCB / NEET qualified, looking for budget guidance..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" /> Request Free Guidance
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                Thank You, {formData.name}!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Your consultation request for <strong className="text-amber-400">{courseCategory}</strong> in <strong className="text-teal-300">{destination}</strong> has been received. <br />
                <strong>{BRAND.contactPerson}</strong> will connect with you shortly at <strong>{formData.phone}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Sparkles className="w-4 h-4" /> Chat on WhatsApp Now
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
