import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text, label = 'Copy', className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded text-xs font-mono transition-colors ${className}`}
      title={`Copy ${text}`}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-[#D4F36A]" /> : <Copy className="w-3.5 h-3.5 text-[#929292]" />}
      <span>{copied ? 'COPIED' : label}</span>
    </button>
  );
};
