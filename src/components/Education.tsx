import React, { useRef, useEffect } from 'react';
import { educationInfo } from '../data/education';
import { gsap, EASES } from '../animations/gsapConfig';
import { GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for section header
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: EASES.editorial
      });

      // Card entrance animation
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true
        },
        y: 50,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: EASES.editorial
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[rgba(255,255,255,0.08)] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[rgba(255,255,255,0.1)]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#D4F36A] uppercase mb-3">
              <span>01 // ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest uppercase text-[#F4F2ED]">
              EDUCATION
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#929292] tracking-wider">
            [ VERIFIED CREDENTIALS / CURRENT ENROLLMENT ]
          </div>
        </div>

        {/* Minimal Editorial Education Display */}
        <div
          ref={cardRef}
          className="relative bg-[#111111]/70 border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 sm:p-12 transition-all duration-300 hover:border-[#D4F36A]/50 group"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4F36A]/5 blur-3xl pointer-events-none rounded-full group-hover:bg-[#D4F36A]/10 transition-colors duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left: Timing & Degree Badge (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-[#D4F36A]/10 border border-[#D4F36A]/30 text-[#D4F36A]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationInfo.period}</span>
              </div>

              <div>
                <span className="block text-xs font-mono text-[#929292] uppercase tracking-widest mb-1">
                  CURRENT DEGREE
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-medium text-[#F4F2ED] tracking-tight">
                  {educationInfo.degree}
                </h3>
                <p className="text-sm font-mono text-[#D4F36A] mt-1 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Specialization: {educationInfo.specialization}</span>
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-[#929292] pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4F36A]" />
                <span>{educationInfo.location}</span>
              </div>
            </div>

            {/* Right: Institution Details & Description (8 cols) */}
            <div className="lg:col-span-8 lg:border-l lg:border-[rgba(255,255,255,0.1)] lg:pl-10 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-[#D4F36A]" />
                    <span className="text-xs font-mono text-[#929292] uppercase tracking-wider">
                      INSTITUTION & AFFILIATION
                    </span>
                  </div>
                  <h4 className="text-3xl sm:text-4xl font-sans font-medium text-[#F4F2ED] tracking-tight">
                    {educationInfo.institution}
                  </h4>
                  <p className="text-lg font-sans text-[#929292] mt-1">
                    {educationInfo.university}
                  </p>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="h-[1px] w-full bg-[rgba(255,255,255,0.08)]" />

              {/* Verified academic context without fake coursework or fabricated CGPA */}
              <div className="space-y-3">
                {educationInfo.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 text-sm font-body text-[#929292] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4F36A] mt-2 shrink-0"></span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Academic Truthfulness Transparency Note */}
              <div className="pt-2 text-[11px] font-mono text-[#929292]/70 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4F36A]/60"></span>
                <span>Verified First-Year Standing. Academic records reflect actual enrollment status.</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
