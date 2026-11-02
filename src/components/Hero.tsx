import React, { useEffect, useRef } from 'react';
import { Download, ArrowDown, MapPin, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
import { Scene3D } from './Scene3D';
import { personalInfo } from '../data/resume';
import { gsap, EASES } from '../animations/gsapConfig';

interface HeroProps {
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameLine1Ref = useRef<HTMLHeadingElement>(null);
  const nameLine2Ref = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: EASES.editorial
      })
      .from([nameLine1Ref.current, nameLine2Ref.current], {
        y: '105%',
        duration: 1.2,
        stagger: 0.12,
        ease: EASES.editorial
      }, '-=0.5')
      .from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: EASES.editorial
      }, '-=0.7');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 md:px-12 border-b border-[#DEDDD6] bg-[#F7F6F2] bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Editorial Resume Typography & Identity (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          
          {/* Top Monospaced Label & Status */}
          <div ref={badgeRef} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#77766F] uppercase py-1 px-3 rounded-full border border-[#DEDDD6] bg-[#FFFFFF] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64] animate-pulse"></span>
              <span>PERSONAL PROFILE / 2026</span>
            </span>

            <span className="text-[11px] font-mono tracking-wider text-[#171717] border border-[#B7CC64] bg-[#B7CC64]/15 py-1 px-3 rounded-full hidden sm:inline-flex font-medium">
              CS & AI UNDERGRADUATE // 2026–2030
            </span>
          </div>

          {/* Masked Name Typography */}
          <div className="overflow-hidden mb-1">
            <h1
              ref={nameLine1Ref}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.2rem] font-medium tracking-tightest leading-[0.9] text-[#171717] uppercase font-sans"
            >
              ANTRIKSH
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1
              ref={nameLine2Ref}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.2rem] font-medium tracking-tightest leading-[0.9] text-[#171717] uppercase font-sans flex items-center"
            >
              GALHOTRA
              <span className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#B7CC64] inline-block ml-3 md:ml-4 -mt-4 shadow-sm"></span>
            </h1>
          </div>

          {/* Subheading, Philosophy & Meta Information */}
          <div ref={contentRef} className="space-y-6">
            <div className="space-y-2 border-l-2 border-[#B7CC64] pl-4">
              <p className="text-xl sm:text-2xl font-sans font-normal text-[#171717] tracking-tight">
                CS & AI Undergraduate
              </p>
              <p className="text-sm sm:text-base font-mono text-[#77766F] tracking-wide">
                Building things that solve real problems.
              </p>
            </div>

            {/* Structured Institution & Location Data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#DEDDD6] text-xs font-mono text-[#77766F]">
              <div className="flex items-start space-x-2.5">
                <GraduationCap className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#171717] font-sans font-medium">Newton School of Technology</span>
                  <span>Rishihood University (2026–2030)</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#171717] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#171717] font-sans font-medium">India</span>
                  <span>Open to Relocation & Remote</span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center space-x-4 text-xs font-mono">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-[#77766F] hover:text-[#171717] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-[#DEDDD6]">/</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-[#77766F] hover:text-[#171717] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#DEDDD6]">/</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-1.5 text-[#77766F] hover:text-[#171717] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onDownloadResume}
                className="group relative inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#171717] text-[#FFFFFF] font-mono text-xs font-semibold tracking-wider hover:bg-[#B7CC64] hover:text-[#171717] transition-all duration-300 shadow-editorial hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-[#DEDDD6] text-[#171717] font-mono text-xs tracking-wider hover:border-[#171717] bg-[#FFFFFF] transition-all duration-300 shadow-sm"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Right Column: Abstract Hamol Studio 3D Element (5 cols) */}
        <div className="lg:col-span-5 h-[380px] sm:h-[450px] lg:h-[550px] flex items-center justify-center relative">
          <div className="absolute w-72 h-72 rounded-full bg-[#B7CC64]/10 blur-3xl pointer-events-none" />
          <Scene3D />
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-[10px] font-mono text-[#77766F] tracking-widest uppercase opacity-75">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64] animate-bounce"></span>
        <span>SCROLL TO EXPLORE RESUME</span>
      </div>
    </section>
  );
};
