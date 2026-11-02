import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../hooks/useSound';

export const AudioToggle: React.FC = () => {
  const [muted, setMuted] = useState(false);
  const { playClick } = useSound();

  const handleToggle = () => {
    const nextState = !muted;
    setMuted(nextState);
    if (!nextState) {
      playClick(1000, 0.05);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="p-1.5 rounded-full border border-[#DEDDD6] bg-[#FFFFFF] text-[#77766F] hover:text-[#171717] hover:border-[#171717] transition-all shadow-xs"
      title={muted ? 'Enable interface feedback audio' : 'Mute feedback audio'}
      aria-label="Toggle interface audio feedback"
    >
      {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#171717]" />}
    </button>
  );
};
