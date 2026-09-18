import { useLanguage } from '../../contexts/LanguageContext'
import { useStringsFor } from '../../i18n/strings'

/**
 * Link externo com proteção de nova aba e nome acessível completo.
 * O sufixo "abre em nova aba" fica só para leitores de tela: o aviso é útil,
 * mas repeti-lo visualmente em cada link polui a leitura.
 */
export default function ExternalLink({ href, children, className = '', accessibleName }) {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={accessibleName ? `${accessibleName} (${t.misc.opensInNewTab})` : undefined}
    >
      {children}
      {!accessibleName && <span className="sr-only"> ({t.misc.opensInNewTab})</span>}
    </a>
  )
}
