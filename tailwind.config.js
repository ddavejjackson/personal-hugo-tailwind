/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          border: '#334155',
          text: '#f1f5f9',
          muted: '#94a3b8'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}