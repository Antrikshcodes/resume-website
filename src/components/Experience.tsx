import React, { useRef, useEffect } from 'react';
import { experienceData } from '../data/experience';
import { gsap, EASES } from '../animations/gsapConfig';
import { Trophy, Calendar, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
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

      // Continuous timeline vertical line scrub draw
      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 85%',
              scrub: 0.5
            }
          }
        );
      }

      // Staggered timeline cards entrance
      itemsRef.current.forEach((item) => {
        if (!item) return;
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            once: true
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: EASES.editorial
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[rgba(255,255,255,0.08)] bg-grid-pattern relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-[rgba(255,255,255,0.1)]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#D4F36A] uppercase mb-3">
              <span>03 // TRACK RECORD & LEADERSHIP</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest uppercase text-[#F4F2ED]">
              EXPERIENCE & ACTIVITIES
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#929292] tracking-wider">
            [ HACKATHONS, PRODUCT CHALLENGES & CLUBS ]
          </div>
        </div>

        {/* Minimal Editorial Vertical Timeline */}
        <div className="relative pl-6 md:pl-12">
          {/* Animated vertical connecting line */}
          <div
            ref={timelineLineRef}
            className="absolute left-0 md:left-2 top-3 bottom-8 w-[2px] bg-gradient-to-b from-[#D4F36A] via-[rgba(212,243,106,0.3)] to-transparent"
          />

          <div className="space-y-12 md:space-y-16">
            {experienceData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className="relative pl-6 md:pl-10 group"
              >
                {/* Node indicator */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#090909] border-2 border-[rgba(255,255,255,0.3)] group-hover:border-[#D4F36A] group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4F36A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Card Container */}
                <div className="bg-[#111111]/80 border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-8 hover:border-[rgba(212,243,106,0.4)] transition-all duration-300">
                  
                  {/* Top Bar: Event & Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[rgba(255,255,255,0.06)] mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl sm:text-2xl font-sans font-semibold text-[#F4F2ED] group-hover:text-[#D4F36A] transition-colors">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#D4F36A]/10 text-[#D4F36A] border border-[#D4F36A]/20">
                          <Award className="w-3 h-3" />
                          <span>{item.badge}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-mono text-[#929292]">
                      <Calendar className="w-3.5 h-3.5 text-[#D4F36A]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Subhead: Organization & Role */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs font-mono mb-4 text-[#929292]">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#F4F2ED] font-sans font-medium text-sm">
                        {item.organization}
                      </span>
                      <span>—</span>
                      <span className="text-[#D4F36A]">{item.role}</span>
                    </div>
                  </div>

                  {/* Concise Truthful Description */}
                  <p className="text-sm font-body text-[#929292] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-[rgba(255,255,255,0.04)]">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start space-x-2.5 text-xs font-mono text-[#929292]/90">
                          <span className="text-[#D4F36A] mt-0.5">›</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
