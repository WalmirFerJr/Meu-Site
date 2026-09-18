import { useLanguage } from '../../contexts/LanguageContext'
import { useStringsFor } from '../../i18n/strings'

/**
 * Troca de idioma. O rótulo é escrito no idioma de destino — quem não lê a
 * língua atual ainda entende para onde o botão leva.
 */
export default function LanguageToggle({ className = '' }) {
  const { lang, toggleLanguage } = useLanguage()
  const t = useStringsFor(lang)
  const goingToEnglish = lang === 'pt'
  const label = goingToEnglish ? t.actions.language.toEn : t.actions.language.toPt
  const code = goingToEnglish ? t.actions.language.codeEn : t.actions.language.codePt

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={label}
      title={label}
      lang={goingToEnglish ? 'en' : 'pt-BR'}
      className={`inline-grid h-11 min-w-11 place-items-center rounded-md border border-[var(--border-control)] px-3 font-sans text-meta font-semibold tracking-wider text-[var(--text)] transition-colors duration-normal hover:bg-[var(--surface)] ${className}`}
    >
      <span aria-hidden="true">{code}</span>
    </button>
  )
}
