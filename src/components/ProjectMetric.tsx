import React from 'react';

interface ProjectMetricProps {
  label: string;
  value: string;
}

export const ProjectMetric: React.FC<ProjectMetricProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col border border-[rgba(255,255,255,0.06)] bg-[#141414] rounded-lg p-2.5">
      <span className="text-[10px] font-mono text-[#929292] uppercase tracking-wider">{label}</span>
      <span className="text-sm font-sans font-medium text-[#F4F2ED] mt-0.5">{value}</span>
    </div>
  );
};
