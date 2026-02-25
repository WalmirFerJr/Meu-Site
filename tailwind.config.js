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
        // Paleta de cores claro
        canvas: '#FDFBF7', // Creme Marfim - Fundo
        text: {
          primary: '#262322', // Café quase preto - Texto Principal
        },
        accent: {
          primary: '#8B572A', // Bronze/Marrom Couro - Destaque
          hover: '#6B4423', // Versão mais escura para hover
        },
        border: {
          soft: '#EFE9E1', // Areia suave - Bordas/Cards
        },
        // Paleta de cores escuro
        dark: {
          canvas: '#1A1612', // Fundo escuro
          text: {
            primary: '#E8E0D6', // Texto claro creme
            secondary: '#C4B5A0', // Texto secundário
          },
          accent: {
            primary: '#C9A882', // Bronze claro para destaque
            hover: '#D4B896', // Hover mais claro
          },
          border: {
            soft: '#3A3429', // Bordas escuras
            medium: '#2A241F', // Bordas médias
          },
        },
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #8B572A 0%, #A0683A 100%)',
        'gradient-cta-dark': 'linear-gradient(135deg, #C9A882 0%, #D4B896 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #FDFBF7 0%, #FAF9F6 100%)',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'accent-glow': '0 0 20px rgba(139, 87, 42, 0.2)',
        'accent-glow-dark': '0 0 20px rgba(201, 168, 130, 0.3)',
        'led-glow': '0 0 15px rgba(245, 235, 220, 0.6), 0 0 30px rgba(245, 235, 220, 0.4)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
