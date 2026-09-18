/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Georgia é uma serif de sistema: título editorial sem nova dependência.
        display: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        // As cinco cores da paleta, para quando o papel é fixo (ex.: fundo de logo).
        palette: {
          mist: '#dce0d9',  // única cor clara da paleta
          plum: '#31081f',  // mais escura; base do tema escuro
          wine: '#6b0f1a',  // superfície de destaque
          slate: '#595959', // texto secundário no claro
          sage: '#808f85',  // texto secundário no escuro
        },
        // Papéis semânticos. Resolvem por tema e também dentro de painéis locais
        // (.panel-navy / .panel-accent), o que o variante `dark:` sozinho não faria.
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        heading: 'var(--heading)',
        ink: 'var(--text)',
        'ink-soft': 'var(--text-secondary)',
        link: 'var(--link)',
        edge: 'var(--border-control)',
        'edge-soft': 'var(--divider-decorative)',
        focusring: 'var(--focus)',
      },
      maxWidth: {
        content: '75rem',
        reading: '68ch',
      },
      spacing: {
        section: 'clamp(3.5rem, 7vw, 6rem)',
        gutter: 'clamp(1rem, 4vw, 2.5rem)',
      },
      fontSize: {
        hero: ['clamp(2.75rem, 1.75rem + 4vw, 5.25rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        section: ['clamp(2rem, 1.5rem + 2vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        card: ['clamp(1.25rem, 1rem + 0.6vw, 1.625rem)', { lineHeight: '1.2' }],
        body: ['clamp(1rem, 0.96rem + 0.2vw, 1.125rem)', { lineHeight: '1.65' }],
        meta: ['0.875rem', { lineHeight: '1.5' }],
      },
      transitionDuration: {
        fast: 'var(--motion-fast)',
        normal: 'var(--motion-normal)',
      },
    },
  },
  plugins: [],
}
