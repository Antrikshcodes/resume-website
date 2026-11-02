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
      className="p-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[#929292] hover:text-[#D4F36A] hover:border-[#D4F36A] transition-all"
      title={muted ? 'Enable interface feedback audio' : 'Mute feedback audio'}
      aria-label="Toggle interface audio feedback"
    >
      {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4F36A]" />}
    </button>
  );
};
