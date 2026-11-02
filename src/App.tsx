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
import { ScrollTrigger } from './animations/gsapConfig';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

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
    const sections = ['hero', 'education', 'skills', 'experience', 'projects', 'contact'];
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

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#F4F2ED] selection:bg-[#D4F36A] selection:text-[#090909]">
      {/* Film Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Preloader opening sequence */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Custom Spring Physics Cursor */}
      <CustomCursor />

      {/* Persistent Floating Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Resume Content Architecture */}
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
    </div>
  );
};

export default App;
