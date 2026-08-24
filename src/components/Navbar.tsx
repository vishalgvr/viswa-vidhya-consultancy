import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Globe, Sparkles, ChevronDown } from 'lucide-react';
import { BRAND } from '../data/consultancyData';

interface NavbarProps {
  onOpenGuidanceModal: () => void;
}

export default function Navbar({ onOpenGuidanceModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDestDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations', hasDropdown: true },
    { name: 'Mauritius', path: '/mauritius', badge: 'Popular' },
    { name: 'MBBS Abroad', path: '/mbbs-abroad', badge: 'Top Choice' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/why-choose-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-600 via-teal-600 to-amber-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg sm:text-xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-teal-300 to-blue-400">
                  VV
                </span>
              </div>
            </div>
            <div>
              <span className="block text-base sm:text-lg font-black tracking-tight text-white font-heading leading-tight group-hover:text-amber-400 transition-colors">
                Viswa Vidhya
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-amber-400">
                Educational Consultancy • Study Abroad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative group"
                    onMouseEnter={() => setIsDestDropdownOpen(true)}
                    onMouseLeave={() => setIsDestDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                          isActive || location.pathname.startsWith('/destinations')
                            ? 'text-amber-400 bg-slate-800/60 font-semibold'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                        }`
                      }
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </NavLink>

                    {/* Dropdown Menu */}
                    {isDestDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-60 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
                        <Link
                          to="/mauritius"
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl">🇲🇺</span>
                            <div>
                              <div className="font-semibold text-xs text-white">Mauritius</div>
                              <div className="text-[10px] text-amber-400 font-medium">MBBS & Safe Island</div>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/destinations#germany"
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl">🇩🇪</span>
                            <div>
                              <div className="font-semibold text-xs text-white">Germany</div>
                              <div className="text-[10px] text-blue-400 font-medium">Tech & Zero Tuition</div>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/destinations#hungary"
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800/80 text-slate-200 hover:text-white transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl">🇭🇺</span>
                            <div>
                              <div className="font-semibold text-xs text-white">Hungary</div>
                              <div className="text-[10px] text-teal-400 font-medium">EU Degrees & Medical</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'text-amber-400 bg-slate-800/60 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`
                  }
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Phone quick link */}
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
              title="Call Arunlal M S"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BRAND.phone}</span>
            </a>

            {/* Guidance CTA Button */}
            <button
              onClick={onOpenGuidanceModal}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span>Get Free Guidance</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4 pt-4 pb-6 border-t border-slate-800/80 bg-slate-950/95 rounded-2xl p-4 shadow-2xl space-y-1 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/30 to-amber-500/10 text-amber-400 border border-amber-400/20'
                      : 'text-slate-200 hover:bg-slate-800/60'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-3 mt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
              <a
                href={`tel:${BRAND.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Now</span>
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 text-xs font-semibold"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
