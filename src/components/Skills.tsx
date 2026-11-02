import React, { useRef, useEffect } from 'react';
import { skillCategories } from '../data/skills';
import { gsap, EASES } from '../animations/gsapConfig';
import { Terminal, Code, Cpu, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

      // Categories staggered entrance
      if (categoriesRef.current) {
        const categoryBlocks = categoriesRef.current.children;
        gsap.from(categoryBlocks, {
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 82%',
            once: true
          },
          y: 45,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: EASES.editorial
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'programming':
        return <Code className="w-4 h-4 text-[#D4F36A]" />;
      case 'tools':
        return <Terminal className="w-4 h-4 text-[#D4F36A]" />;
      case 'interests':
        return <Cpu className="w-4 h-4 text-[#D4F36A]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#D4F36A]" />;
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[rgba(255,255,255,0.08)] bg-[#090909]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[rgba(255,255,255,0.1)]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#D4F36A] uppercase mb-3">
              <span>02 // CAPABILITIES & FOCUS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest uppercase text-[#F4F2ED]">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#929292] tracking-wider">
            [ HONEST PROFICIENCY & ACTIVE LEARNING AREAS ]
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div ref={categoriesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.key}
              className="bg-[#111111]/60 border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] mb-6">
                  <div className="flex items-center space-x-2.5">
                    {getCategoryIcon(cat.key)}
                    <h3 className="text-sm font-mono tracking-widest font-semibold text-[#F4F2ED]">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#929292]">0{idx + 1}</span>
                </div>

                {/* Skill Labels */}
                <div className="flex flex-col space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative p-3.5 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#151515]/60 hover:bg-[#1a1a1a] hover:border-[#D4F36A]/40 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-base font-sans font-medium text-[#F4F2ED] group-hover:text-[#D4F36A] transition-colors">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-[rgba(255,255,255,0.05)] text-[#929292] group-hover:text-[#D4F36A] group-hover:bg-[#D4F36A]/10 transition-colors">
                            {skill.tag}
                          </span>
                        )}
                      </div>

                      {/* Honest Context Description instead of fake progress bars */}
                      {skill.levelDescription && (
                        <p className="text-xs font-mono text-[#929292] line-clamp-1 group-hover:text-[#F4F2ED]/80 transition-colors">
                          {skill.levelDescription}
                        </p>
                      )}

                      {/* Subtle underline animation on hover */}
                      <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#D4F36A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.06)] text-[11px] font-mono text-[#929292] flex items-center justify-between">
                <span>{cat.skills.length} ITEMS</span>
                <span className="text-[#D4F36A] uppercase tracking-wider">
                  {cat.key === 'interests' ? 'ACADEMIC EXPLORATION' : 'VERIFIED STACK'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Integrity Statement */}
        <div className="mt-12 p-4 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#111111]/30 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#929292]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4F36A]"></span>
            <span>TRANSPARENCY NOTE: Proficiency reflects genuine undergraduate engineering experience.</span>
          </div>
          <span className="mt-2 sm:mt-0 text-[10px] text-[#929292]/70">NO ARTIFICIAL PERCENTAGES</span>
        </div>

      </div>
    </section>
  );
};
