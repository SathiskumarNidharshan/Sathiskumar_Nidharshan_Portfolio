/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Sora', 'sans-serif'],
      },
      colors: {
        canvas: 'var(--bg)',
        elevated: 'var(--elevated)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        mute: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        aqua: 'var(--accent-2)',
        soft: 'var(--accent-soft)',
        watermark: 'var(--watermark)',
        field: 'var(--field)',
      },
      boxShadow: {
        lift: 'var(--shadow)',
      },
    },
  },
  plugins: [],
};
