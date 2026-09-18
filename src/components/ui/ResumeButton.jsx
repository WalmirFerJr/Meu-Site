import { resume } from '../../data/profile'
import { useLanguage } from '../../contexts/LanguageContext'
import { useStringsFor } from '../../i18n/strings'

export const RESUME_URL = resume.url
export const RESUME_FILENAME = resume.filename

function DownloadIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
      />
    </svg>
  )
}

/** variant: 'primary' | 'secondary' | 'inline' */
export default function ResumeButton({ variant = 'secondary', label, className = '' }) {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  const classes = {
    primary: 'btn btn-primary py-3',
    secondary: 'btn btn-secondary py-3',
    inline: 'link-inline link-action font-sans text-meta font-semibold',
  }

  return (
    <a
      href={RESUME_URL}
      download={RESUME_FILENAME}
      className={`${classes[variant] ?? classes.secondary} ${className}`}
      aria-label={t.actions.resumeLong}
    >
      <DownloadIcon />
      {label ?? t.actions.resume}
    </a>
  )
}
