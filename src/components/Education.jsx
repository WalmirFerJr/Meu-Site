import { educationItems } from '../data/education'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import InstitutionLogo from './ui/InstitutionLogo'
import InstitutionMark from './ui/InstitutionMark'
import ExternalLink from './ui/ExternalLink'

export default function Education() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    <Section id="education" index="04" eyebrow={t.education.eyebrow} title={t.education.title}>
      <div className="divide-y divide-[var(--divider-decorative)]">
        {educationItems.map((item, index) => (
          <Reveal
            key={item.id}
            as="article"
            delay={Math.min(index * 0.05, 0.15)}
            className="grid gap-4 py-10 first:pt-0 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <p className="font-sans text-meta font-semibold text-[var(--text-secondary)]">
                {pick(item.period, lang)}
              </p>
              {item.detail && (
                <p className="mt-1 text-meta text-[var(--text-secondary)]">{pick(item.detail, lang)}</p>
              )}
            </div>

            <div className="md:col-span-9">
              <div className="flex flex-wrap items-center gap-4">
                {item.logo ? (
                  <InstitutionLogo
                    src={item.logo}
                    institution={item.institution}
                    backdrop={item.logoBackdrop}
                    size="sm"
                    decorative
                  />
                ) : (
                  item.mark && <InstitutionMark label={item.mark} size="sm" />
                )}
                <div>
                  <h3 className="font-display text-card">{pick(item.title, lang)}</h3>
                  <p className="mt-1 font-sans text-meta font-semibold text-[var(--text)]">
                    {item.institution}
                  </p>
                </div>
              </div>

              {item.institutionUrl && (
                <p className="mt-4">
                  {/* Rótulo descreve o destino real: é uma notícia, não comprovante. */}
                  <ExternalLink
                    href={item.institutionUrl}
                    className="link-inline link-action font-sans text-meta"
                    accessibleName={pick(item.institutionUrlLabel, lang)}
                  >
                    {pick(item.institutionUrlLabel, lang)}
                  </ExternalLink>
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
