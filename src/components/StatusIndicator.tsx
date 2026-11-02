import React from 'react';

interface StatusIndicatorProps {
  label?: string;
  pulsing?: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label = 'AVAILABLE FOR RESEARCH & INTERNSHIPS',
  pulsing = true
}) => {
  return (
    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[rgba(212,243,106,0.3)] bg-[#D4F36A]/5 text-[11px] font-mono text-[#D4F36A]">
      <span className={`w-1.5 h-1.5 rounded-full bg-[#D4F36A] ${pulsing ? 'animate-pulse' : ''}`} />
      <span>{label}</span>
    </div>
  );
};
