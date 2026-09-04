/** Caminho único do currículo — servido estaticamente a partir de /public. */
export const RESUME_URL = '/curriculo-walmir-fernandes-junior.pdf'
export const RESUME_FILENAME = 'Curriculo-Walmir-Fernandes-Junior.pdf'

function DownloadIcon() {
  return (
    <svg className="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
      />
    </svg>
  )
}

/**
 * Botão de download do currículo em PDF.
 * variant: 'primary' | 'secondary' | 'nav' | 'ghost'
 */
export default function ResumeButton({ variant = 'secondary', label = 'Baixar currículo', className = '' }) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    nav:
      'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium border border-accent-primary/30 dark:border-dark-accent-primary/30 text-accent-primary dark:text-dark-accent-primary hover:bg-accent-primary/10 dark:hover:bg-dark-accent-primary/10 transition-colors',
    ghost:
      'inline-flex items-center gap-2 text-sm font-medium text-[#262322]/70 dark:text-dark-text-secondary hover:text-accent-primary dark:hover:text-dark-accent-primary transition-colors',
  }

  return (
    <a
      href={RESUME_URL}
      download={RESUME_FILENAME}
      className={`${variants[variant] ?? variants.secondary} ${className}`}
      aria-label="Baixar currículo em PDF"
    >
      <DownloadIcon />
      {label}
    </a>
  )
}
