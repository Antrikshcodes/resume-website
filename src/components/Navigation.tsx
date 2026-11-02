import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowUpRight, Menu, X } from 'lucide-react';
import { AudioToggle } from './AudioToggle';

interface NavigationProps {
  activeSection: string;
  onDownloadResume: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Introduction', num: '01' },
  { id: 'education', label: 'Education', num: '02' },
  { id: 'skills', label: 'Skills', num: '03' },
  { id: 'activities', label: 'Activities', num: '04' },
  { id: 'projects', label: 'Projects', num: '05' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onDownloadResume }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
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
      setHasScrolled(window.scrollY > 30);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          hasScrolled
            ? 'py-3 bg-[#F7F6F2]/85 backdrop-blur-md border-b border-[#DEDDD6] shadow-editorial'
            : 'py-5 bg-transparent'
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
            <div className="w-8 h-8 rounded-full border border-[#DEDDD6] bg-[#FFFFFF] flex items-center justify-center text-xs font-semibold text-[#171717] group-hover:border-[#B7CC64] group-hover:text-[#B7CC64] transition-colors shadow-sm">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold tracking-tight text-[#171717] text-sm">
                ANTRIKSH GALHOTRA
              </span>
              <span className="text-[10px] text-[#77766F] font-mono tracking-widest hidden sm:inline">
                DIGITAL RESUME / 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 border border-[#DEDDD6] rounded-full px-4 py-1.5 bg-[#FFFFFF]/80 backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-[#171717] font-semibold' : 'text-[#77766F] hover:text-[#171717]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillLight"
                      className="absolute inset-0 bg-[#B7CC64] rounded-full z-0 opacity-80"
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
          <div className="hidden sm:flex items-center space-x-4 text-xs font-mono">
            {/* Live IST clock */}
            <div className="flex items-center space-x-2 text-[#77766F] border-r border-[#DEDDD6] pr-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64] animate-pulse"></span>
              <span>{currentTime}</span>
            </div>

            {/* Audio Feedback Toggle */}
            <AudioToggle />

            {/* Quick Resume Link */}
            <button
              onClick={onDownloadResume}
              className="group flex items-center space-x-1.5 px-4 py-1.5 rounded-full border border-[#DEDDD6] bg-[#FFFFFF] hover:border-[#B7CC64] text-[#171717] hover:text-[#171717] transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#B7CC64]" />
              <span className="tracking-widest text-[11px] font-medium">RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-[#77766F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#171717] transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[#DEDDD6] bg-[#FFFFFF] text-[#171717] hover:text-[#B7CC64] transition-colors"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#F7F6F2]/95 backdrop-blur-xl border-b border-[#DEDDD6] p-6 lg:hidden shadow-editorial"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between py-2.5 text-sm font-mono tracking-wider border-b border-[#DEDDD6]/60 ${
                    activeSection === item.id ? 'text-[#171717] font-semibold' : 'text-[#77766F]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-[#77766F]/60">{item.num}</span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </button>
              ))}

              <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#77766F]">
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
