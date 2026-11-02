import React, { useRef, useEffect, useState } from 'react';
import { skillCategoryGroups } from '../data/skills';
import { gsap, EASES } from '../animations/gsapConfig';
import { Code2, Layout, Server, Database, Smartphone, Wrench, BrainCircuit } from 'lucide-react';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 82%',
            once: true
          },
          y: 35,
          opacity: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: EASES.editorial
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming-languages':
        return <Code2 className="w-4 h-4 text-[#171717]" />;
      case 'frontend-development':
        return <Layout className="w-4 h-4 text-[#171717]" />;
      case 'backend-cloud':
        return <Server className="w-4 h-4 text-[#171717]" />;
      case 'ai-data':
        return <BrainCircuit className="w-4 h-4 text-[#171717]" />;
      case 'databases':
        return <Database className="w-4 h-4 text-[#171717]" />;
      case 'mobile-hardware':
        return <Smartphone className="w-4 h-4 text-[#171717]" />;
      case 'tools-creative':
        return <Wrench className="w-4 h-4 text-[#171717]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#171717]" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategoryGroups
    : skillCategoryGroups.filter(c => c.id === selectedCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[#DEDDD6] bg-[#EFEEE8]/60"
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
            [ EXTRACTED FROM GITHUB PROFILE README / VERIFIED STACK ]
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#DEDDD6]/60">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#171717] text-[#FFFFFF] shadow-sm'
                : 'bg-[#FFFFFF] text-[#77766F] border border-[#DEDDD6] hover:border-[#171717]'
            }`}
          >
            ALL CATEGORIES ({skillCategoryGroups.reduce((acc, c) => acc + c.technologies.length, 0)})
          </button>
          {skillCategoryGroups.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#171717] text-[#FFFFFF] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#77766F] border border-[#DEDDD6] hover:border-[#171717]'
              }`}
            >
              {cat.title} ({cat.technologies.length})
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid in Editorial Light Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => (
            <div
              key={group.id}
              className="bg-[#FFFFFF] border border-[#DEDDD6] rounded-2xl p-6 sm:p-7 shadow-editorial hover:border-[#171717] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#DEDDD6] mb-5">
                  <div className="flex items-center space-x-2.5">
                    {getCategoryIcon(group.id)}
                    <h3 className="text-xs font-mono tracking-widest font-bold text-[#171717]">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#77766F]">0{idx + 1}</span>
                </div>

                <p className="text-xs font-body text-[#77766F] mb-4 leading-relaxed">
                  {group.description}
                </p>

                {/* Technology Chips Matrix */}
                <div className="flex flex-wrap gap-2">
                  {group.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group/item relative px-3 py-1.5 rounded-lg border border-[#DEDDD6] bg-[#F7F6F2] hover:bg-[#FFFFFF] hover:border-[#B7CC64] transition-all duration-200 flex items-center space-x-2 shadow-xs"
                    >
                      <span className="text-xs font-sans font-medium text-[#171717]">
                        {tech.name}
                      </span>
                      {tech.tag && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#EFEEE8] text-[#77766F] group-hover/item:text-[#171717] group-hover/item:bg-[#B7CC64]/20 transition-colors">
                          {tech.tag}
                        </span>
                      )}
                      {/* Subtle underline indicator on hover */}
                      <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-[#B7CC64] scale-x-0 group-hover/item:scale-x-100 transition-transform duration-200 origin-left" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Meta */}
              <div className="pt-5 mt-5 border-t border-[#DEDDD6]/60 text-[10px] font-mono text-[#77766F] flex items-center justify-between">
                <span>{group.technologies.length} TECHNOLOGIES</span>
                <span className="text-[#171717] font-medium">README.MD VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Truthfulness Notice */}
        <div className="mt-10 p-4 rounded-xl border border-[#DEDDD6] bg-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#77766F] shadow-xs">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
            <span>TRANSPARENCY: Exactly mirrors the “Languages and Tools” from GitHub @Antrikshcodes.</span>
          </div>
          <span className="mt-2 sm:mt-0 text-[10px] text-[#171717] font-medium">ZERO FAKE SKILL BARS</span>
        </div>

      </div>
    </section>
  );
};
