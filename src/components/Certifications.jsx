import { certifications } from '../data/certifications'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ExternalLink from './ui/ExternalLink'

export default function Certifications() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  if (!certifications.length) return null

  return (
    <Section id="certifications" index="07" eyebrow={t.certifications.eyebrow} title={t.certifications.title}>
      <ul className="divide-y divide-[var(--divider-decorative)] border-y border-[var(--divider-decorative)]" role="list">
        {certifications.map((cert, index) => {
          const title = pick(cert.title, lang)
          return (
            <Reveal key={cert.id} as="li" delay={Math.min(index * 0.04, 0.16)}>
              <ExternalLink
                href={cert.credentialUrl}
                className="flex min-h-11 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4 text-[var(--text)] no-underline hover:text-[var(--link)]"
                accessibleName={`${t.actions.credential}: ${title}`}
              >
                <span className="font-sans text-body font-semibold">{title}</span>
                <span className="link-inline font-sans text-meta">{t.actions.credential}</span>
              </ExternalLink>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
