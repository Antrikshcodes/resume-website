/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        secondaryBg: '#111111',
        surface: '#151515',
        surfaceBorder: 'rgba(255, 255, 255, 0.12)',
        subtleBorder: 'rgba(255, 255, 255, 0.07)',
        primaryText: '#F4F2ED',
        secondaryText: '#929292',
        accent: {
          DEFAULT: '#D4F36A',
          muted: '#a3be43',
          glow: 'rgba(212, 243, 106, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Manrope', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['Inter', 'Manrope', 'sans-serif'],
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

