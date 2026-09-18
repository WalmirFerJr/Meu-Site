import { aboutParagraphs, studyInterests } from '../data/profile'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ResumeButton from './ui/ResumeButton'

export default function About() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    <Section id="about" index="01" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <div className="max-w-reading space-y-6 text-body text-[var(--text)]">
            {aboutParagraphs[lang].map((paragraph, index) => (
              <Reveal key={index} as="p" delay={Math.min(index * 0.04, 0.16)}>
                {paragraph}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.14} className="mt-10">
            <ResumeButton variant="inline" label={t.actions.resumeLong} />
          </Reveal>
        </div>

        {/* Temas de estudo. O objetivo de carreira fica implícito na escolha. */}
        <div className="lg:col-span-5">
          <Reveal>
            <h3 className="font-display text-card">{t.about.interestsTitle}</h3>
          </Reveal>
          <dl className="mt-8 space-y-0">
            {studyInterests.map((interest, index) => (
              <Reveal key={interest.id} delay={Math.min(0.06 + index * 0.05, 0.2)}>
                <div className="border-t border-[var(--divider-decorative)] py-5">
                  <dt className="font-sans text-meta font-semibold uppercase tracking-[0.12em] text-[var(--text)]">
                    {pick(interest.title, lang)}
                  </dt>
                  <dd className="mt-2 text-meta leading-relaxed text-[var(--text-secondary)]">
                    {pick(interest.text, lang)}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
