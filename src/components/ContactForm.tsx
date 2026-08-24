import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, Globe, BookOpen, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND } from '../data/consultancyData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Mauritius',
    course: 'MBBS Abroad',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#38bdf8', '#34d399', '#f59e0b']
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Mr. Arunlal M S (Viswa Vidhya),\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDestination: ${formData.destination}\nCourse: ${formData.course}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919487808313?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
      
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Direct Counsellor Connect
            </span>
            <h3 className="text-2xl font-bold text-white font-heading">
              Start Your Study Abroad Journey
            </h3>
            <p className="text-xs text-slate-300">
              Fill in your details below and <strong className="text-amber-400">{BRAND.contactPerson}</strong> will provide a tailored study roadmap.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-amber-400">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ananya Nair"
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 9487808313"
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ananya@example.com"
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Preferred Destination <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 appearance-none cursor-pointer"
                >
                  <option value="Mauritius">🇲🇺 Mauritius (MBBS & Higher Ed)</option>
                  <option value="Germany">🇩🇪 Germany (Engineering & Tech)</option>
                  <option value="Hungary">🇭🇺 Hungary (EU Degrees & Medicine)</option>
                  <option value="All / Undecided">All / Need Destination Advice</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Course Interested In <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <BookOpen className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 appearance-none cursor-pointer"
                >
                  <option value="MBBS Abroad">MBBS Abroad</option>
                  <option value="Undergraduate (UG / Bachelor)">Undergraduate (UG / Bachelor)</option>
                  <option value="Postgraduate (PG / Master / MBA)">Postgraduate (PG / Master / MBA)</option>
                  <option value="Diploma Programs">Diploma Programs</option>
                  <option value="Professional Courses">Professional Courses</option>
                  <option value="General Guidance">General Career Guidance</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Message / Specific Questions
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention your current educational qualification, NEET status (if MBBS), or any budget preferences..."
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" /> Submit Counselling Request
            </button>
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="py-4 px-6 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4" /> Send via WhatsApp
            </button>
          </div>
        </form>
      ) : (
        <div className="py-10 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">
            Request Received Successfully!
          </h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Thank you, <strong className="text-amber-400">{formData.name}</strong>. Your enquiry for <strong className="text-teal-300">{formData.course}</strong> in <strong className="text-amber-300">{formData.destination}</strong> has been logged.
          </p>
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 max-w-md mx-auto">
            Our counsellor <strong className="text-white">{BRAND.contactPerson}</strong> will get in touch with you shortly on <strong className="text-amber-400">{formData.phone}</strong>.
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Submit Another Query
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
