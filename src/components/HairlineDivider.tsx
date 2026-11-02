import React from 'react';

interface HairlineDividerProps {
  className?: string;
}

export const HairlineDivider: React.FC<HairlineDividerProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent my-6 ${className}`}
    />
  );
};
