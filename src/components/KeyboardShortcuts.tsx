import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, X } from 'lucide-react';

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '1', desc: 'Jump to Education' },
    { key: '2', desc: 'Jump to Technical Skills' },
    { key: '3', desc: 'Jump to Experience & Hackathons' },
    { key: '4', desc: 'Jump to Selected Projects' },
    { key: '5', desc: 'Jump to Contact' },
    { key: 'R', desc: 'Open / Download Resume PDF' },
    { key: '?', desc: 'Toggle Shortcuts Help' },
    { key: 'ESC', desc: 'Close Modal' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#111111] border border-[rgba(255,255,255,0.15)] rounded-2xl max-w-md w-full p-6 text-[#F4F2ED]"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.1)] mb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#D4F36A]">
              <Command className="w-4 h-4" />
              <span>KEYBOARD SHORTCUTS</span>
            </div>
            <button onClick={onClose} className="text-[#929292] hover:text-[#F4F2ED]">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            {shortcuts.map((s) => (
              <div key={s.key} className="flex items-center justify-between py-1 border-b border-[rgba(255,255,255,0.04)]">
                <span className="text-[#929292]">{s.desc}</span>
                <kbd className="px-2 py-1 rounded bg-[#1c1c1c] border border-[rgba(255,255,255,0.15)] text-[#D4F36A] font-bold">
                  {s.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[10px] font-mono text-center text-[#929292]">
            PRESS ANY KEY TO ACTIVATE QUICK JUMP
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
