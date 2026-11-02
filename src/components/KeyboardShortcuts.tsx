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
    { key: '1', desc: 'Jump to Introduction' },
    { key: '2', desc: 'Jump to Education' },
    { key: '3', desc: 'Jump to Technical Skills' },
    { key: '4', desc: 'Jump to Activities & Involvement' },
    { key: '5', desc: 'Jump to Selected Projects' },
    { key: 'R', desc: 'Open / Download Resume PDF' },
    { key: '?', desc: 'Toggle Shortcuts Help' },
    { key: 'ESC', desc: 'Close Modal' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#FFFFFF] border border-[#DEDDD6] rounded-2xl max-w-md w-full p-6 text-[#171717] shadow-2xl"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#DEDDD6] mb-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#171717] font-semibold">
              <Command className="w-4 h-4 text-[#B7CC64]" />
              <span>KEYBOARD SHORTCUTS</span>
            </div>
            <button onClick={onClose} className="text-[#77766F] hover:text-[#171717]">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            {shortcuts.map((s) => (
              <div key={s.key} className="flex items-center justify-between py-1.5 border-b border-[#DEDDD6]/50">
                <span className="text-[#77766F]">{s.desc}</span>
                <kbd className="px-2.5 py-1 rounded bg-[#F7F6F2] border border-[#DEDDD6] text-[#171717] font-bold shadow-xs">
                  {s.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[10px] font-mono text-center text-[#77766F]">
            PRESS ANY KEY TO ACTIVATE QUICK JUMP
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
