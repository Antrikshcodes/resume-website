export interface ShortcutMapping {
  key: string;
  action: () => void;
  description: string;
}

export const registerShortcuts = (mappings: ShortcutMapping[]): (() => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }
    const matched = mappings.find(m => m.key.toLowerCase() === e.key.toLowerCase());
    if (matched) {
      e.preventDefault();
      matched.action();
    }
  };

  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
};
