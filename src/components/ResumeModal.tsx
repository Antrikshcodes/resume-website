import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Printer, X, ExternalLink, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/resume';
import { educationInfo } from '../data/education';
import { skillCategoryGroups } from '../data/skills';
import { activitiesData } from '../data/experience';
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/50 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#DEDDD6] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Modal Toolbar in Light Theme */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#DEDDD6] bg-[#F7F6F2]">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#171717] font-semibold">
              <CheckCircle className="w-4 h-4 text-[#B7CC64]" />
              <span>ATS-COMPLIANT RESUME // ANTRIKSH GALHOTRA</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={downloadDirectPDF}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#171717] text-[#FFFFFF] text-xs font-mono font-medium hover:bg-[#B7CC64] hover:text-[#171717] transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>SAVE PDF</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#DEDDD6] bg-[#FFFFFF] text-[#171717] text-xs font-mono hover:border-[#171717] transition-colors shadow-xs"
                title="Print resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PRINT</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#77766F] hover:text-[#171717] hover:bg-[#EFEEE8] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Container */}
          <div className="p-8 sm:p-12 overflow-y-auto bg-white text-[#171717] font-sans selection:bg-[#B7CC64] selection:text-[#171717]">
            
            {/* Header */}
            <div className="border-b-2 border-[#171717] pb-4 mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] uppercase">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-medium text-[#444444] mt-1">
                {personalInfo.role}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#555555] font-mono mt-2">
                <span>{personalInfo.location}</span>
                <span>&bull;</span>
                <a href={`mailto:${personalInfo.email}`} className="text-[#171717] underline">{personalInfo.email}</a>
                <span>&bull;</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[#171717] underline">github.com/Antrikshcodes</a>
                <span>&bull;</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#171717] underline">linkedin.com/in/antriksh-galhotra</a>
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-[#171717] border-b border-gray-300 pb-1 mb-2">
                EDUCATION
              </h2>
              <div className="flex justify-between items-baseline text-sm font-bold text-[#171717]">
                <span>{educationInfo.institution} &mdash; {educationInfo.university}</span>
                <span className="text-xs font-normal text-gray-600 font-mono">{educationInfo.period}</span>
              </div>
              <div className="text-xs text-gray-700 italic mb-1">
                {educationInfo.degree} &mdash; Specialization in {educationInfo.specialization}
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                &bull; Rigorous curriculum focused on algorithmic problem solving, software engineering, and modern AI architectures.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-[#171717] border-b border-gray-300 pb-1 mb-2">
                TECHNICAL SKILLS (VERIFIED FROM GITHUB PROFILE)
              </h2>
              <div className="space-y-1.5 text-xs">
                {skillCategoryGroups.map((group) => (
                  <div key={group.id}>
                    <span className="font-bold text-[#171717]">{group.title}: </span>
                    <span className="text-gray-800">
                      {group.technologies.map(t => t.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Involvement */}
            <div className="mb-6">
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-[#171717] border-b border-gray-300 pb-1 mb-2">
                ACTIVITIES & INVOLVEMENT
              </h2>
              <div className="space-y-3">
                {activitiesData.map((item) => (
                  <div key={item.id} className="text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-[#171717]">
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

            {/* Selected Projects */}
            <div>
              <h2 className="text-xs font-bold font-mono tracking-wider uppercase text-[#171717] border-b border-gray-300 pb-1 mb-2">
                SELECTED TECHNICAL PROJECTS
              </h2>
              <div className="space-y-3">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-[#171717]">{proj.title}</span>
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
          <div className="px-6 py-3 border-t border-[#DEDDD6] bg-[#F7F6F2] text-[11px] font-mono text-[#77766F] flex justify-between items-center">
            <span>Verified 2026–2030 Academic & Technical Credentials</span>
            <button onClick={downloadDirectPDF} className="text-[#171717] font-semibold hover:underline flex items-center space-x-1">
              <span>Direct PDF Download</span>
              <ExternalLink className="w-3 h-3 text-[#B7CC64]" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
