import React, { useRef, useEffect, useState } from 'react';
import { skillCategoryGroups } from '../data/skills';
import { TechIcon } from './TechIcons';
import { gsap, EASES } from '../animations/gsapConfig';
import { Code2, Layout, Server, Database, Wrench, Layers, Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal section header on scroll
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: EASES.editorial
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming-languages':
        return <Terminal className="w-4 h-4 text-[#171717]" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-[#171717]" />;
      case 'backend':
        return <Server className="w-4 h-4 text-[#171717]" />;
      case 'frameworks-libraries':
        return <Code2 className="w-4 h-4 text-[#171717]" />;
      case 'databases':
        return <Database className="w-4 h-4 text-[#171717]" />;
      case 'development-tools':
        return <Wrench className="w-4 h-4 text-[#171717]" />;
      case 'other-technologies':
        return <Layers className="w-4 h-4 text-[#171717]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#171717]" />;
    }
  };

  const displayedGroups = activeCategory === 'all'
    ? skillCategoryGroups
    : skillCategoryGroups.filter(c => c.id === activeCategory);

  const totalSkillCount = skillCategoryGroups.reduce((acc, c) => acc + c.technologies.length, 0);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[#DEDDD6] bg-[#EFEEE8]/60 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#DEDDD6]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#77766F] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
              <span>03 // LANGUAGES & TOOLS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest uppercase text-[#171717]">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#77766F] tracking-wider">
            [ VERIFIED GITHUB README STACK / {totalSkillCount} TECHNOLOGIES ]
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#DEDDD6]/60">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-[#171717] text-[#FFFFFF] shadow-sm font-medium'
                : 'bg-[#FFFFFF] text-[#77766F] border border-[#DEDDD6] hover:border-[#171717] hover:text-[#171717]'
            }`}
          >
            All Categories ({totalSkillCount})
          </button>
          {skillCategoryGroups.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#171717] text-[#FFFFFF] shadow-sm font-medium'
                  : 'bg-[#FFFFFF] text-[#77766F] border border-[#DEDDD6] hover:border-[#171717] hover:text-[#171717]'
              }`}
            >
              {cat.title} ({cat.technologies.length})
            </button>
          ))}
        </div>

        {/* Responsive Grid of Categories & Verified Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map((group, idx) => (
            <div
              key={group.id}
              className="bg-[#FFFFFF] border border-[#DEDDD6] rounded-2xl p-6 sm:p-7 shadow-editorial hover:border-[#171717] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DEDDD6] mb-4">
                  <div className="flex items-center space-x-2.5">
                    {getCategoryIcon(group.id)}
                    <h3 className="text-xs font-mono tracking-widest font-bold text-[#171717] uppercase">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#77766F]">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs font-body text-[#77766F] mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Technology Icons & Labels Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group/item relative px-3 py-2.5 rounded-xl border border-[#DEDDD6] bg-[#F7F6F2] hover:bg-[#FFFFFF] hover:border-[#171717] transition-all duration-200 flex items-center space-x-2.5 shadow-xs hover:-translate-y-0.5"
                    >
                      {/* Robust Embedded SVG Tech Icon with Fallback */}
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 text-[#171717] group-hover/item:text-[#171717] transition-colors">
                        <TechIcon name={tech.name} size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-sans font-medium text-[#171717] truncate leading-tight">
                          {tech.name}
                        </span>
                        {tech.tag && (
                          <span className="block text-[9px] font-mono uppercase text-[#77766F] truncate mt-0.5">
                            {tech.tag}
                          </span>
                        )}
                      </div>

                      {/* Subtle lime accent indicator on hover */}
                      <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#B7CC64] scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-left" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Meta Info */}
              <div className="pt-5 mt-5 border-t border-[#DEDDD6]/60 text-[10px] font-mono text-[#77766F] flex items-center justify-between">
                <span>{group.technologies.length} TECHNOLOGIES</span>
                <span className="text-[#171717] font-medium tracking-wider">
                  VERIFIED GITHUB STACK
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Truthfulness & Verification Banner */}
        <div className="mt-10 p-4 rounded-xl border border-[#DEDDD6] bg-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#77766F] shadow-xs">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
            <span>DATA SOURCE: Languages and Tools section of github.com/Antrikshcodes/Antrikshcodes.</span>
          </div>
          <span className="mt-2 sm:mt-0 text-[10px] text-[#171717] font-medium tracking-wide">
            ZERO FAKE METRICS &bull; LOCAL VECTOR ICONS
          </span>
        </div>

      </div>
    </section>
  );
};
