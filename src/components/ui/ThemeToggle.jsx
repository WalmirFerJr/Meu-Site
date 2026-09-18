import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useStringsFor } from '../../i18n/strings'

/**
 * Botão de tema. O nome acessível descreve a ação, e `aria-pressed` diz o estado
 * — a função fica clara sem a dica pulsante que existia antes.
 *
 * Os dois toggles (desktop e móvel) podem estar montados ao mesmo tempo: o
 * contexto usa atualização funcional, então um não sobrescreve o outro.
 */
export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()
  const { lang } = useLanguage()
  const t = useStringsFor(lang)
  const label = isDark ? t.actions.theme.toLight : t.actions.theme.toDark

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={`inline-grid h-11 w-11 place-items-center rounded-md border border-[var(--border-control)] text-[var(--text)] transition-colors duration-normal hover:bg-[var(--surface)] ${className}`}
    >
      {isDark ? (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path strokeLinecap="round" d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinejoin="round" d="M20 13.4A8.4 8.4 0 0 1 10.6 4a8.4 8.4 0 1 0 9.4 9.4Z" />
        </svg>
      )}
    </button>
  )
}
