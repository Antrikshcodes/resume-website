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

      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true
        },
        y: 45,
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
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[#DEDDD6] bg-[#F7F6F2] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#DEDDD6]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#77766F] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
              <span>02 // ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest uppercase text-[#171717]">
              EDUCATION
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#77766F] tracking-wider">
            [ VERIFIED CREDENTIALS / 2026–2030 ]
          </div>
        </div>

        {/* Minimal Editorial Education Display in Light Theme */}
        <div
          ref={cardRef}
          className="relative bg-[#FFFFFF] border border-[#DEDDD6] rounded-2xl p-8 sm:p-12 shadow-editorial transition-all duration-300 hover:border-[#171717] group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left: Timing & Degree Badge (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-[#B7CC64]/20 border border-[#B7CC64] text-[#171717] font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationInfo.period}</span>
              </div>

              <div>
                <span className="block text-xs font-mono text-[#77766F] uppercase tracking-widest mb-1">
                  CURRENT DEGREE
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-medium text-[#171717] tracking-tight">
                  {educationInfo.degree}
                </h3>
                <p className="text-sm font-mono text-[#77766F] mt-1 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B7CC64]" />
                  <span>Specialization: {educationInfo.specialization}</span>
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-[#77766F] pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#171717]" />
                <span>{educationInfo.location}</span>
              </div>
            </div>

            {/* Right: Institution Details & Description (8 cols) */}
            <div className="lg:col-span-8 lg:border-l lg:border-[#DEDDD6] lg:pl-10 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-[#171717]" />
                    <span className="text-xs font-mono text-[#77766F] uppercase tracking-wider">
                      INSTITUTION & AFFILIATION
                    </span>
                  </div>
                  <h4 className="text-3xl sm:text-4xl font-sans font-medium text-[#171717] tracking-tight">
                    {educationInfo.institution}
                  </h4>
                  <p className="text-lg font-sans text-[#77766F] mt-1">
                    {educationInfo.university}
                  </p>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="h-[1px] w-full bg-[#DEDDD6]" />

              {/* Verified academic context without fake coursework or fabricated CGPA */}
              <div className="space-y-3">
                {educationInfo.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 text-sm font-body text-[#77766F] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64] mt-2 shrink-0"></span>
                    <span className="text-[#171717]/85">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Academic Truthfulness Transparency Note */}
              <div className="pt-2 text-[11px] font-mono text-[#77766F] flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
                <span>Verified Undergraduate Enrollment (2026–2030). Academic records reflect actual institutional registration.</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
