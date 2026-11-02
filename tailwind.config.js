/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F6F2',
        secondaryBg: '#EFEEE8',
        card: '#FFFFFF',
        surfaceBorder: '#DEDDD6',
        subtleBorder: '#E6E5DF',
        primaryText: '#171717',
        secondaryText: '#77766F',
        accent: {
          DEFAULT: '#B7CC64',
          hover: '#A5BC4E',
          muted: 'rgba(183, 204, 100, 0.18)',
          glow: 'rgba(183, 204, 100, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Manrope', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['Inter', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 4px 20px -2px rgba(23, 23, 23, 0.04), 0 2px 6px -1px rgba(23, 23, 23, 0.02)',
        editorialHover: '0 12px 30px -4px rgba(23, 23, 23, 0.08), 0 4px 12px -2px rgba(23, 23, 23, 0.03)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widestEditorial: '0.18em',
      }
    },
  },
  plugins: [],
}
