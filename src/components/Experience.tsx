import React, { useRef, useEffect } from 'react';
import { activitiesData } from '../data/experience';
import { gsap, EASES } from '../animations/gsapConfig';
import { Calendar, Award, Users, Bot } from 'lucide-react';

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      id="activities"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[#DEDDD6] bg-[#F7F6F2] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-[#DEDDD6]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#77766F] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
              <span>04 // LEADERSHIP & COMPETITIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest uppercase text-[#171717]">
              ACTIVITIES & INVOLVEMENT
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#77766F] tracking-wider">
            [ CLUBS, HACKATHONS & NATIONAL CHALLENGES ]
          </div>
        </div>

        {/* Minimal Editorial Vertical Timeline in Light Theme */}
        <div className="relative pl-6 md:pl-12">
          {/* Animated vertical connecting line */}
          <div
            ref={timelineLineRef}
            className="absolute left-0 md:left-2 top-3 bottom-8 w-[2px] bg-gradient-to-b from-[#171717] via-[#B7CC64] to-transparent"
          />

          <div className="space-y-12 md:space-y-16">
            {activitiesData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className="relative pl-6 md:pl-10 group"
              >
                {/* Timeline Node indicator */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#DEDDD6] group-hover:border-[#171717] group-hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B7CC64] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Card Container in Light Theme */}
                <div className="bg-[#FFFFFF] border border-[#DEDDD6] rounded-2xl p-6 sm:p-8 hover:border-[#171717] transition-all duration-300 shadow-editorial group-hover:shadow-editorialHover">
                  
                  {/* Top Bar: Event & Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DEDDD6]/60 mb-4">
                    <div className="flex items-center space-x-3">
                      {item.id === 'arthakram' && <Users className="w-5 h-5 text-[#B7CC64]" />}
                      {item.id === 'newtonbotics' && <Bot className="w-5 h-5 text-[#B7CC64]" />}
                      
                      <span className="text-xl sm:text-2xl font-sans font-semibold text-[#171717] group-hover:text-[#171717] transition-colors">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="inline-flex items-center space-x-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#B7CC64]/15 text-[#171717] border border-[#B7CC64]/30 font-medium">
                          <Award className="w-3 h-3 text-[#77766F]" />
                          <span>{item.badge}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-mono text-[#77766F]">
                      <Calendar className="w-3.5 h-3.5 text-[#171717]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Subhead: Organization & Role */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs font-mono mb-4 text-[#77766F]">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#171717] font-sans font-medium text-sm">
                        {item.organization}
                      </span>
                      <span>—</span>
                      <span className="text-[#77766F] font-mono">{item.role}</span>
                    </div>
                  </div>

                  {/* Concise Truthful Description */}
                  <p className="text-sm font-body text-[#77766F] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-[#DEDDD6]/40">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start space-x-2.5 text-xs font-mono text-[#171717]/85">
                          <span className="text-[#B7CC64] font-bold mt-0.5">›</span>
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
