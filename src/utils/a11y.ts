export const announceToScreenReader = (message: string) => { const el = document.getElementById('a11y-status'); if (el) el.textContent = message; };
