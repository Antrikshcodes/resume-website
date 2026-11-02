import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { KeyboardShortcuts } from './components/KeyboardShortcuts';
import { JsonLd } from './components/JsonLd';
import { SkipToContent } from './components/SkipToContent';
import { ScrollTrigger } from './animations/gsapConfig';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState<boolean>(false);

  // Initialize Lenis smooth scroll and connect to GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    // Section Observer for active navigation pill
    const sections = ['hero', 'education', 'skills', 'activities', 'projects', 'contact'];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });

    // Keyboard Shortcuts for Quick Recruiter Navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      switch (e.key.toLowerCase()) {
        case '1': {
          const el = document.getElementById('hero');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          break;
        }
        case '2': {
          const el = document.getElementById('education');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          break;
        }
        case '3': {
          const el = document.getElementById('skills');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          break;
        }
        case '4': {
          const el = document.getElementById('activities');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          break;
        }
        case '5': {
          const el = document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          break;
        }
        case 'r':
          setIsResumeModalOpen((prev) => !prev);
          break;
        case '?':
          setIsShortcutsOpen((prev) => !prev);
          break;
        case 'escape':
          setIsResumeModalOpen(false);
          setIsShortcutsOpen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('scroll', handleScrollSpy);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F7F6F2] text-[#171717] selection:bg-[#B7CC64] selection:text-[#171717]">
      {/* Schema.org Structured Data */}
      <JsonLd />

      {/* Accessible Skip to Content */}
      <SkipToContent />

      {/* Subtle Tactile Film Grain Texture */}
      <div className="grain-overlay" />

      {/* Preloader opening sequence */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Custom Spring Physics Cursor */}
      <CustomCursor />

      {/* Persistent Floating Navigation */}
      <Navigation
        activeSection={activeSection}
        onDownloadResume={() => setIsResumeModalOpen(true)}
      />

      {/* 5 Main Resume Content Sections */}
      <main className="relative z-10">
        <Hero onDownloadResume={() => setIsResumeModalOpen(true)} />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>

      {/* Contact & Editorial Footer */}
      <Footer onDownloadResume={() => setIsResumeModalOpen(true)} />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Recruiter Keyboard Shortcuts Help */}
      <KeyboardShortcuts
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
};

export default App;
