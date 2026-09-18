import { useCallback, useEffect, useRef, useState } from 'react'
import { navLinks, primaryNavHrefs } from '../data/navLinks'
import { profile } from '../data/profile'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import ThemeToggle from './ui/ThemeToggle'
import LanguageToggle from './ui/LanguageToggle'
import ResumeButton from './ui/ResumeButton'
import ScrollProgress from './ui/ScrollProgress'

const primaryLinks = navLinks.filter((link) => primaryNavHrefs.includes(link.href))

/**
 * Disclosure não modal para os destinos restantes.
 * Não prende foco nem trava o scroll: é uma lista de links, não um diálogo.
 * Escape fecha e devolve o foco ao botão que abriu.
 */
function SectionsDisclosure({ id, buttonLabel, className = '', panelClassName = '', children }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const wrapperRef = useRef(null)

  const close = useCallback(
    ({ refocus = false } = {}) => {
      setOpen(false)
      if (refocus) buttonRef.current?.focus()
    },
    [],
  )

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close({ refocus: true })
    }
    const onPointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) close()
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open, close])

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-11 items-center gap-2 rounded-md border border-[var(--border-control)] px-3 font-sans text-meta font-semibold text-[var(--text)] transition-colors duration-normal hover:bg-[var(--surface)]"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        {buttonLabel}
        <svg
          className={`h-4 w-4 transition-transform duration-normal ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Fechado = removido do DOM: nada de link invisível capturando Tab. */}
      {open && (
        <div id={id} className={panelClassName} onClick={() => close()}>
          {children}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  const linkClass =
    'inline-flex min-h-11 items-center px-1 font-sans text-meta font-semibold text-[var(--text)] no-underline transition-colors duration-normal hover:text-[var(--link)] hover:underline underline-offset-4'

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--divider-decorative)] bg-[var(--bg)]"
      style={{ minHeight: 'var(--header-height)' }}
    >
      <nav aria-label={t.nav.label} className="shell flex items-center justify-between gap-3 py-3">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center font-display text-xl font-bold text-[var(--heading)] no-underline"
          aria-label={t.nav.home}
        >
          {profile.shortName}
        </a>

        <div className="flex items-center gap-2">
          {/* Quatro atalhos só onde cabem com folga; os oito ficam no menu. */}
          <ul className="hidden items-center gap-5 xl:flex" role="list">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {pick(link.label, lang)}
                </a>
              </li>
            ))}
          </ul>

          <SectionsDisclosure
            id="nav-sections-desktop"
            buttonLabel={t.nav.allSections}
            className="hidden md:block"
            panelClassName="absolute right-0 top-[calc(100%+0.5rem)] w-64 rounded-lg border border-[var(--border-control)] bg-[var(--bg)] p-2 shadow-lg"
          >
            <ul role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-11 items-center rounded-md px-3 font-sans text-meta font-semibold text-[var(--text)] no-underline hover:bg-[var(--surface)]"
                  >
                    {pick(link.label, lang)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-[var(--divider-decorative)] pt-2">
              <ResumeButton variant="inline" className="px-3 py-2" label={t.actions.resumeShort} />
            </div>
          </SectionsDisclosure>

          <div className="hidden md:block">
            <ResumeButton variant="secondary" label={t.actions.resumeShort} className="px-4" />
          </div>

          <LanguageToggle />
          <ThemeToggle />

          <SectionsDisclosure
            id="nav-sections-mobile"
            buttonLabel={t.nav.menu}
            className="md:hidden"
            panelClassName="absolute right-0 top-[calc(100%+0.5rem)] w-[min(18rem,calc(100vw-2rem))] rounded-lg border border-[var(--border-control)] bg-[var(--bg)] p-2 shadow-lg"
          >
            <ul role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-11 items-center rounded-md px-3 font-sans text-meta font-semibold text-[var(--text)] no-underline hover:bg-[var(--surface)]"
                  >
                    {pick(link.label, lang)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-[var(--divider-decorative)] pt-2">
              <ResumeButton variant="inline" className="px-3 py-2" />
            </div>
          </SectionsDisclosure>
        </div>
      </nav>

      <ScrollProgress />
    </header>
  )
}
