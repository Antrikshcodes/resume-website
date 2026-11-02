import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#hero"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#D4F36A] focus:text-[#090909] focus:font-mono focus:text-xs focus:rounded"
    >
      Skip to main content
    </a>
  );
};
