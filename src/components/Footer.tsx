import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download, Copy, Check, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/resume';

interface FooterProps {
  onDownloadResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-6 md:px-12 bg-[#F7F6F2] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Contact Hero Card in Light Theme */}
        <div className="border border-[#DEDDD6] rounded-3xl p-8 sm:p-14 md:p-16 bg-[#FFFFFF] relative overflow-hidden mb-16 shadow-editorial">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B7CC64]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#77766F] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tightest uppercase text-[#171717] mb-6 font-sans">
              LET’S CONNECT.
            </h2>

            <p className="text-base sm:text-lg font-body text-[#77766F] leading-relaxed mb-8">
              Open to technical internships, research roles, AI systems engineering, and collaborative software/hardware builds. Reach out directly.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Email with Copy Action */}
              <div className="flex items-center rounded-full border border-[#DEDDD6] bg-[#F7F6F2] p-1.5 pl-4 pr-2 shadow-xs">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-mono text-[#171717] hover:underline transition-colors mr-3 font-medium"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-full bg-[#FFFFFF] hover:bg-[#B7CC64] text-[#171717] transition-colors shadow-xs"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#171717]" /> : <Copy className="w-3.5 h-3.5 text-[#77766F]" />}
                </button>
              </div>

              {/* Download Resume Button */}
              <button
                onClick={onDownloadResume}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#171717] text-[#FFFFFF] font-mono text-xs font-semibold tracking-wider hover:bg-[#B7CC64] hover:text-[#171717] transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center space-x-6 text-xs font-mono text-[#77766F]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#171717] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>
              <span className="text-[#DEDDD6]">/</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#171717] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
            </div>

          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#77766F] pt-6 border-t border-[#DEDDD6] gap-4">
          <div>
            <span className="text-[#171717] font-medium">© 2026 Antriksh Galhotra.</span>
            <span className="ml-2 text-[#77766F] hidden sm:inline">
              Crafted with intentional minimalism, light editorial aesthetics & precision engineering.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[10px] text-[#77766F] uppercase tracking-widest">
              NEWTON SCHOOL OF TECHNOLOGY
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 p-2 rounded-full border border-[#DEDDD6] bg-[#FFFFFF] hover:border-[#171717] text-[#171717] transition-colors shadow-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
