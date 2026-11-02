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
    <footer id="contact" className="pt-24 pb-12 px-6 md:px-12 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Contact Hero Area */}
        <div className="border border-[rgba(255,255,255,0.1)] rounded-3xl p-8 sm:p-14 md:p-16 bg-[#111111]/80 relative overflow-hidden mb-16">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4F36A]/5 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#D4F36A] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4F36A]"></span>
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tightest uppercase text-[#F4F2ED] mb-6 font-sans">
              LET’S CONNECT.
            </h2>

            <p className="text-base sm:text-lg font-body text-[#929292] leading-relaxed mb-8">
              Open to technical internships, research assistantships, AI systems engineering, and collaborative product builds. Feel free to reach out directly.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Email with Copy Action */}
              <div className="flex items-center rounded-full border border-[rgba(255,255,255,0.15)] bg-[#151515] p-1.5 pl-4 pr-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-mono text-[#F4F2ED] hover:text-[#D4F36A] transition-colors mr-3"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[#D4F36A] hover:text-[#090909] text-[#929292] transition-colors"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#D4F36A] hover:text-[#090909]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Download Resume Button */}
              <button
                onClick={onDownloadResume}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#D4F36A] text-[#090909] font-mono text-xs font-semibold tracking-wider hover:bg-[#E4FF85] transition-all shadow-[0_0_20px_rgba(212,243,106,0.2)]"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center space-x-6 text-xs font-mono text-[#929292]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#D4F36A] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>
              <span className="text-[rgba(255,255,255,0.15)]">/</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#D4F36A] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
            </div>

          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#929292] pt-6 border-t border-[rgba(255,255,255,0.08)] gap-4">
          <div>
            <span>© 2026 Antriksh Galhotra.</span>
            <span className="ml-2 text-[#929292]/60 hidden sm:inline">
              Crafted with intentional minimalism & precision engineering.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[10px] text-[#929292]/60 uppercase tracking-widest">
              NEWTON SCHOOL OF TECHNOLOGY
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 p-2 rounded-full border border-[rgba(255,255,255,0.1)] hover:border-[#D4F36A] hover:text-[#D4F36A] transition-colors"
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

// Secure external anchor references

// Secure external anchor references

// Secure external anchor references

// Secure external anchor references

// Secure external anchor references
