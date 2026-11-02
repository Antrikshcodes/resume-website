import React, { useRef, useEffect } from 'react';
import { projectsData } from '../data/projects';
import { gsap, EASES } from '../animations/gsapConfig';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      projectCardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: EASES.editorial
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[#DEDDD6] bg-[#EFEEE8]/60 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-[#DEDDD6]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#77766F] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7CC64]"></span>
              <span>05 // TECHNICAL BUILDS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest uppercase text-[#171717]">
              SELECTED PROJECTS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#77766F] tracking-wider">
            [ 05 VERIFIED PROTOTYPES & SYSTEMS ]
          </div>
        </div>

        {/* Minimal Asymmetric Editorial Project List in Light Theme */}
        <div className="space-y-6 sm:space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectCardsRef.current[index] = el)}
              className="group relative bg-[#FFFFFF] border border-[#DEDDD6] hover:border-[#171717] rounded-2xl p-6 sm:p-10 transition-all duration-300 shadow-editorial hover:shadow-editorialHover"
            >
              {/* Subtle accent hover indicator on left border */}
              <div className="absolute left-0 top-8 bottom-8 w-[2.5px] bg-[#B7CC64] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left: Index & Meta (3 cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-[#171717] tracking-tighter">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono text-[#77766F]">/ 05</span>
                  </div>

                  <div className="inline-block px-2.5 py-1 rounded text-[11px] font-mono uppercase bg-[#F7F6F2] text-[#77766F] border border-[#DEDDD6]">
                    {project.category}
                  </div>
                </div>

                {/* Center: Title & Description (6 cols) */}
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#171717] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#77766F] tracking-wide mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm font-body text-[#77766F] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F7F6F2] border border-[#DEDDD6] text-[#171717]/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Actions / Links (3 cols) */}
                <div className="lg:col-span-3 flex lg:flex-col lg:items-end justify-between lg:justify-start gap-4 pt-4 lg:pt-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono px-4 py-2 rounded-full border border-[#DEDDD6] text-[#171717] hover:border-[#171717] bg-[#FFFFFF] transition-all shadow-xs"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>REPOSITORY</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#171717] hover:underline transition-colors font-medium"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#B7CC64]" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
