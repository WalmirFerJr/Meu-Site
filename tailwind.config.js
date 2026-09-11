/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Paleta clara personalizada
        canvas: '#F9FBF8',
        text: {
          primary: '#17161C',
        },
        accent: {
          primary: '#3C3233',
          hover: '#17161C',
        },
        border: {
          soft: '#E5DBCF',
        },
        // Paleta escura personalizada
        dark: {
          canvas: '#17161C',
          text: {
            primary: '#F9FBF8',
            secondary: '#DFD1C4',
          },
          accent: {
            primary: '#DFD1C4',
            hover: '#E5DBCF',
          },
          border: {
            soft: '#3C3233',
            medium: '#3C3233',
          },
        },
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #3C3233 0%, #17161C 100%)',
        'gradient-cta-dark': 'linear-gradient(135deg, #DFD1C4 0%, #E5DBCF 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #F9FBF8 0%, #E5DBCF 100%)',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'accent-glow': '0 0 20px rgba(60, 50, 51, 0.2)',
        'accent-glow-dark': '0 0 20px rgba(223, 209, 196, 0.3)',
        'led-glow': '0 0 15px rgba(229, 219, 207, 0.6), 0 0 30px rgba(229, 219, 207, 0.4)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
