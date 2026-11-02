import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Printer, X, ExternalLink, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/resume';
import { educationInfo } from '../data/education';
import { skillCategories } from '../data/skills';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const downloadDirectPDF = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Antriksh_Galhotra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#111111] border border-[rgba(255,255,255,0.15)] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Modal Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.1)] bg-[#161616]">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#D4F36A]">
              <CheckCircle className="w-4 h-4" />
              <span>ATS-COMPLIANT RESUME // ANTRIKSH GALHOTRA</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={downloadDirectPDF}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#D4F36A] text-[#090909] text-xs font-mono font-medium hover:bg-[#E4FF85] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>SAVE PDF</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[rgba(255,255,255,0.15)] text-[#F4F2ED] text-xs font-mono hover:border-[#D4F36A] hover:text-[#D4F36A] transition-colors"
                title="Print resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PRINT</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#929292] hover:text-[#F4F2ED] hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Container */}
          <div className="p-8 sm:p-12 overflow-y-auto bg-white text-[#111111] font-sans selection:bg-[#D4F36A] selection:text-black">
            
            {/* Header */}
            <div className="border-b-2 border-[#111111] pb-4 mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#090909] uppercase">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-medium text-[#444444] mt-1">
                {personalInfo.role} &bull; Developer &bull; Product Enthusiast
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#555555] font-mono mt-2">
                <span>{personalInfo.location}</span>
                <span>&bull;</span>
                <a href={`mailto:${personalInfo.email}`} className="text-black underline">{personalInfo.email}</a>
                <span>&bull;</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-black underline">github.com/Antrikshcodes</a>
                <span>&bull;</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-black underline">linkedin.com/in/antriksh-galhotra</a>
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-black border-b border-gray-300 pb-1 mb-2">
                EDUCATION
              </h2>
              <div className="flex justify-between items-baseline text-sm font-bold text-[#111111]">
                <span>{educationInfo.institution} &mdash; {educationInfo.university}</span>
                <span className="text-xs font-normal text-gray-600 font-mono">{educationInfo.period}</span>
              </div>
              <div className="text-xs text-gray-700 italic mb-1">
                {educationInfo.degree} &mdash; Specialization in {educationInfo.specialization} (First Year)
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                &bull; Rigorous curriculum focused on algorithmic foundations, data structures, and AI engineering principles.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-black border-b border-gray-300 pb-1 mb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs">
                <div>
                  <span className="font-bold text-[#111111]">Programming Languages: </span>
                  <span className="text-gray-800">Python, HTML, CSS</span>
                </div>
                <div>
                  <span className="font-bold text-[#111111]">Developer Tools & Frameworks: </span>
                  <span className="text-gray-800">Git, GitHub, React (modern component workflows), Linux/macOS</span>
                </div>
                <div>
                  <span className="font-bold text-[#111111]">Areas of Focus: </span>
                  <span className="text-gray-800">Artificial Intelligence, Machine Learning, Robotics (Microcontrollers/Motors), Product Development, UI/UX</span>
                </div>
              </div>
            </div>

            {/* Experience & Hackathons */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-black border-b border-gray-300 pb-1 mb-2">
                EXPERIENCE, HACKATHONS & ACTIVITIES
              </h2>
              <div className="space-y-3">
                {experienceData.map((item) => (
                  <div key={item.id} className="text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-[#111111]">
                        {item.title} &mdash; <span className="italic font-normal">{item.organization}</span>
                      </span>
                      <span className="text-gray-600 font-mono">{item.period}</span>
                    </div>
                    <div className="text-gray-700 text-[11px] mb-0.5">Role: {item.role} {item.badge && `(${item.badge})`}</div>
                    <p className="text-gray-700 leading-relaxed">
                      &bull; {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-black border-b border-gray-300 pb-1 mb-2">
                SELECTED TECHNICAL PROJECTS
              </h2>
              <div className="space-y-3">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-[#111111]">{proj.title}</span>
                      <span className="text-[11px] font-mono text-gray-600">
                        {proj.technologies.join(', ')}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      &bull; {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer note */}
          <div className="px-6 py-3 border-t border-[rgba(255,255,255,0.1)] bg-[#161616] text-[11px] font-mono text-[#929292] flex justify-between items-center">
            <span>Verified 2026 Academic & Project Credentials</span>
            <button onClick={downloadDirectPDF} className="text-[#D4F36A] hover:underline flex items-center space-x-1">
              <span>Direct PDF Download</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Printable layout conforms to 0.5in margins

// Printable layout conforms to 0.5in margins
