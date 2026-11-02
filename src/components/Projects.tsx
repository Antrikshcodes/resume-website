import React, { useRef, useEffect } from 'react';
import { projectsData } from '../data/projects';
import { gsap, EASES } from '../animations/gsapConfig';
import { Github, ExternalLink, Cpu, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Staggered asymmetric cards reveal
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
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[rgba(255,255,255,0.08)] bg-[#090909] relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-[rgba(255,255,255,0.1)]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#D4F36A] uppercase mb-3">
              <span>04 // TECHNICAL BUILDS & SYSTEMS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tightest uppercase text-[#F4F2ED]">
              SELECTED PROJECTS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-[#929292] tracking-wider">
            [ 05 VERIFIED PROTOTYPES & SYSTEMS ]
          </div>
        </div>

        {/* Minimal Asymmetric Editorial Project List */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectCardsRef.current[index] = el)}
              className="group relative bg-[#111111]/70 border border-[rgba(255,255,255,0.08)] hover:border-[#D4F36A]/50 rounded-2xl p-6 sm:p-10 transition-all duration-300"
            >
              {/* Subtle accent hover indicator on left border */}
              <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[#D4F36A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left: Index & Meta (3 cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-3xl sm:text-4xl font-mono font-medium text-[#D4F36A] tracking-tighter">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono text-[#929292]">/ 05</span>
                  </div>

                  <div className="inline-block px-2.5 py-1 rounded text-[11px] font-mono uppercase bg-[rgba(255,255,255,0.04)] text-[#929292] border border-[rgba(255,255,255,0.08)]">
                    {project.category}
                  </div>
                </div>

                {/* Center: Title & Description (6 cols) */}
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#F4F2ED] group-hover:text-[#D4F36A] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#929292] tracking-wide mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm font-body text-[#929292] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#181818] border border-[rgba(255,255,255,0.06)] text-[#F4F2ED]/80"
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
                      className="inline-flex items-center space-x-2 text-xs font-mono px-4 py-2 rounded-full border border-[rgba(255,255,255,0.15)] text-[#F4F2ED] hover:border-[#D4F36A] hover:text-[#D4F36A] transition-all bg-[#151515]"
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
                      className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#929292] hover:text-[#D4F36A] transition-colors"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
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

// Tech chip border styling

// Tech chip border styling

// Tech chip border styling
