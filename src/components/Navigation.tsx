import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'education', label: 'EDUCATION', num: '01' },
  { id: 'skills', label: 'SKILLS', num: '02' },
  { id: 'experience', label: 'EXPERIENCE', num: '03' },
  { id: 'projects', label: 'PROJECTS', num: '04' },
  { id: 'contact', label: 'CONTACT', num: '05' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Format India Standard Time (IST)
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setCurrentTime(formatter.format(new Date()) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled
            ? 'py-3 bg-[#090909]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center space-x-3 text-sm font-mono tracking-wider"
          >
            <div className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-xs text-[#F4F2ED] group-hover:border-[#D4F36A] group-hover:text-[#D4F36A] transition-colors">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold tracking-tight text-[#F4F2ED] text-sm">
                ANTRIKSH GALHOTRA
              </span>
              <span className="text-[10px] text-[#929292] font-mono tracking-widest hidden sm:inline">
                RESUME / 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-1.5 bg-[#111111]/70 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-[#090909] font-medium' : 'text-[#929292] hover:text-[#F4F2ED]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#D4F36A] rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-1">
                    <span className="text-[9px] opacity-60">{item.num}.</span>
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Meta Info & Resume CTA */}
          <div className="hidden sm:flex items-center space-x-5 text-xs font-mono">
            {/* Live IST clock */}
            <div className="flex items-center space-x-2 text-[#929292] border-r border-[rgba(255,255,255,0.1)] pr-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F36A] animate-pulse"></span>
              <span>{currentTime}</span>
            </div>

            {/* Quick Resume Link */}
            <a
              href="#resume-download"
              onClick={(e) => {
                e.preventDefault();
                const resumeElem = document.getElementById('contact');
                if (resumeElem) resumeElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[#D4F36A] text-[#F4F2ED] hover:text-[#D4F36A] transition-all bg-[#111111]/40"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="tracking-widest text-[11px]">RESUME</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[rgba(255,255,255,0.12)] text-[#F4F2ED] hover:text-[#D4F36A] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#090909]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.1)] p-6 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between py-2 text-sm font-mono tracking-wider border-b border-[rgba(255,255,255,0.05)] ${
                    activeSection === item.id ? 'text-[#D4F36A]' : 'text-[#929292]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-[rgba(255,255,255,0.3)]">{item.num}</span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </button>
              ))}

              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#929292]">
                <span>NEWTON SCHOOL OF TECH</span>
                <span>{currentTime}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Navigation backdrop saturation tuning
