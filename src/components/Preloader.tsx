import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const counterRef = useRef<number>(0);

  useEffect(() => {
    const duration = 1400; // 1.4s smooth duration
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      counterRef.current += step;
      if (counterRef.current >= 100) {
        counterRef.current = 100;
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 650);
        }, 250);
      } else {
        setProgress(Math.floor(counterRef.current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%',
            transition: { 
              duration: 0.85, 
              ease: [0.77, 0, 0.175, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 md:p-12 bg-[#F7F6F2] text-[#171717] select-none"
        >
          {/* Top Metadata */}
          <div className="flex items-center justify-between text-xs font-mono text-[#77766F] uppercase tracking-widest border-b border-[#DEDDD6] pb-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#B7CC64] animate-pulse"></span>
              <span>PERSONAL PROFILE / 2026</span>
            </div>
            <div>NEWTON SCHOOL OF TECHNOLOGY</div>
          </div>

          {/* Center Brand typography */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="overflow-hidden mb-2">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs md:text-sm font-mono tracking-widest text-[#77766F] uppercase flex items-center space-x-2"
              >
                <span className="text-[#B7CC64] font-bold">//</span>
                <span>INITIALIZING DIGITAL RESUME</span>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-8xl font-medium tracking-tightest leading-none font-sans text-[#171717]"
              >
                ANTRIKSH GALHOTRA
              </motion.h1>
            </div>

            <div className="overflow-hidden mt-3">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm md:text-base font-mono text-[#77766F]"
              >
                CS & AI Undergraduate | Developer | Product Enthusiast
              </motion.p>
            </div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-4xl mx-auto space-y-4">
            <div className="flex items-end justify-between font-mono text-sm">
              <span className="text-xs text-[#77766F] tracking-wider">PREPARING EDITORIAL LAYOUT</span>
              <span className="text-2xl md:text-3xl font-medium text-[#171717] tracking-tight">
                {String(progress).padStart(2, '0')}%
              </span>
            </div>

            {/* Precision thin progress line */}
            <div className="w-full h-[1.5px] bg-[#DEDDD6] relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#B7CC64]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-[#77766F] pt-1">
              <span>LATENCY: 0.12ms</span>
              <span>LOCATION: INDIA [IST]</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
