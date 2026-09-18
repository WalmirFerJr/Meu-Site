import { navLinks } from '../data/navLinks'
import { profile } from '../data/profile'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import ResumeButton from './ui/ResumeButton'

export default function Footer() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--divider-decorative)] py-12" role="contentinfo">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-card">{profile.name}</p>
            <p className="mt-2 font-sans text-meta text-[var(--text-secondary)]">
              © {year} {t.footer.rights}. {t.footer.stack}
            </p>
            <div className="mt-4">
              <ResumeButton variant="inline" />
            </div>
          </div>

          {/* Mesma fonte de dados do menu: reordenar seções não gera divergência. */}
          <nav aria-label={t.nav.footerNav}>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center font-sans text-meta text-[var(--text)] no-underline hover:text-[var(--link)] hover:underline underline-offset-4"
                  >
                    {pick(link.label, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-[var(--divider-decorative)] pt-6">
          <p className="text-meta text-[var(--text-secondary)]">{t.footer.focus}</p>
          <p className="mt-2 max-w-reading text-meta text-[var(--text-secondary)]">
            {t.footer.trademarks}
          </p>
        </div>
      </div>
    </footer>
  )
}
