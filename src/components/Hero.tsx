import React, { useEffect, useRef, useState } from 'react';
import { Download, ArrowDown, MapPin, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
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
  const photoFrameRef = useRef<HTMLDivElement>(null);
  const photoImgRef = useRef<HTMLImageElement>(null);
  const [imgError, setImgError] = useState(false);

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
        duration: 1.15,
        stagger: 0.12,
        ease: EASES.editorial
      }, '-=0.5')
      .from(contentRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.9,
        ease: EASES.editorial
      }, '-=0.7')
      .from(photoFrameRef.current, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        y: 35,
        opacity: 0,
        duration: 1.2,
        ease: EASES.editorial
      }, '-=0.9');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoImgRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const moveX = (clientX / innerWidth - 0.5) * 12;
    const moveY = (clientY / innerHeight - 0.5) * 12;
    photoImgRef.current.style.transform = `scale(1.03) translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = () => {
    if (!photoImgRef.current) return;
    photoImgRef.current.style.transform = 'scale(1) translate(0px, 0px)';
  };

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[88vh] md:min-h-[90vh] flex items-center justify-center pt-24 pb-14 px-6 md:px-12 border-b border-[#DEDDD6] bg-[#F7F6F2] bg-grid-pattern overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* LEFT SIDE: Dominant Typography & Professional Identity (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          
          {/* Small Uppercase Label */}
          <div ref={badgeRef} className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#77766F] uppercase py-1 px-3 rounded-full border border-[#DEDDD6] bg-[#FFFFFF] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64] animate-pulse"></span>
              <span>COMPUTER SCIENCE & AI / 2026</span>
            </span>

            <span className="text-[11px] font-mono tracking-wider text-[#171717] border border-[#B7CC64] bg-[#B7CC64]/20 py-1 px-3 rounded-full hidden sm:inline-flex font-medium">
              NEWTON SCHOOL OF TECHNOLOGY
            </span>
          </div>

          {/* Dominant Name Heading with Masked Reveal */}
          <div className="overflow-hidden mb-1">
            <h1
              ref={nameLine1Ref}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.5rem] font-medium tracking-tightest leading-[0.88] text-[#171717] uppercase font-sans select-none"
            >
              ANTRIKSH
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1
              ref={nameLine2Ref}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.5rem] font-medium tracking-tightest leading-[0.88] text-[#171717] uppercase font-sans select-none flex items-center"
            >
              GALHOTRA
              <span className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-[#B7CC64] inline-block ml-3 md:ml-4 -mt-3 md:-mt-4 shadow-xs"></span>
            </h1>
          </div>

          {/* Subheading, Philosophy & Supporting Statement */}
          <div ref={contentRef} className="space-y-6">
            <div className="space-y-2 border-l-2 border-[#B7CC64] pl-4">
              <p className="text-xl sm:text-2xl font-sans font-normal text-[#171717] tracking-tight">
                Computer Science & AI Undergraduate
              </p>
              <p className="text-sm sm:text-base font-body text-[#77766F] tracking-wide">
                Building technology, exploring ideas and creating meaningful products.
              </p>
            </div>

            {/* Quick Credentials Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-[#DEDDD6] text-xs font-mono text-[#77766F]">
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
                <Github className="w-3.5 h-3.5 text-[#171717]" />
                <span>GitHub</span>
              </a>
              <span className="text-[#DEDDD6]">/</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-[#77766F] hover:text-[#171717] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#171717]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#DEDDD6]">/</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-1.5 text-[#77766F] hover:text-[#171717] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#171717]" />
                <span>Email</span>
              </a>
            </div>

            {/* Two Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onDownloadResume}
                className="group relative inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#171717] text-[#FFFFFF] font-mono text-xs font-semibold tracking-wider hover:bg-[#B7CC64] hover:text-[#171717] transition-all duration-300 shadow-editorial hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center space-x-2 px-6 py-3.5 rounded-full border border-[#DEDDD6] text-[#171717] font-mono text-xs tracking-wider hover:border-[#171717] bg-[#FFFFFF] transition-all duration-300 shadow-xs hover:bg-[#F7F6F2]"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: High-End Framed Editorial Composition / Portrait (5 cols) */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
          <div
            ref={photoFrameRef}
            className="relative w-full max-w-[380px] sm:max-w-[420px] bg-[#FFFFFF] border border-[#DEDDD6] rounded-2xl p-4 shadow-editorial transition-all duration-500 hover:border-[#171717] group"
          >
            {/* Ambient Accent Blur behind Frame */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#B7CC64]/20 to-transparent rounded-3xl blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Frame Editorial Coordinates */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DEDDD6] text-[10px] font-mono text-[#77766F] uppercase tracking-wider">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
                <span className="text-[#171717] font-medium">ANTRIKSH GALHOTRA</span>
              </div>
              <span>28.61° N // IST</span>
            </div>

            {/* Image / Typographic Composition Container */}
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#EFEEE8] border border-[#DEDDD6]">
              {!imgError ? (
                <img
                  ref={photoImgRef}
                  src="/profile.jpg"
                  alt="Antriksh Galhotra"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover grayscale-[30%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              ) : (
                /* Editorial Typographic Composition Fallback */
                <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#FFFFFF] via-[#F7F6F2] to-[#EFEEE8]">
                  <div className="flex justify-between items-start text-xs font-mono text-[#77766F]">
                    <span>EST. 2026</span>
                    <span className="text-[#171717] font-bold">NST &bull; RU</span>
                  </div>
                  <div className="my-auto text-center">
                    <div className="text-7xl font-sans font-bold tracking-tightest text-[#171717]/90 mb-1">
                      AG
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-[#77766F] uppercase">
                      BUILDING MEANINGFUL PRODUCTS
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-[#77766F] border-t border-[#DEDDD6] pt-2 flex justify-between">
                    <span>CS & AI UNDERGRADUATE</span>
                    <span className="text-[#B7CC64] font-bold">VERIFIED</span>
                  </div>
                </div>
              )}

              {/* Editorial Corner Bracket Accent */}
              <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#DEDDD6] text-[10px] font-mono text-[#171717] font-medium tracking-wider shadow-xs pointer-events-none">
                VERIFIED PROFILE / 2026
              </div>
            </div>

            {/* Bottom Metadata Caption */}
            <div className="pt-3.5 mt-3 border-t border-[#DEDDD6] text-[11px] font-mono text-[#77766F] flex items-center justify-between">
              <span>NEWTON SCHOOL OF TECH</span>
              <span className="text-[#171717] font-medium">B.TECH CS & AI</span>
            </div>

          </div>
        </div>

      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-[10px] font-mono text-[#77766F] tracking-widest uppercase opacity-75">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64] animate-bounce"></span>
        <span>SCROLL TO EXPLORE RESUME</span>
      </div>
    </section>
  );
};
