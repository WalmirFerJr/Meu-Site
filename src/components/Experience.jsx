import { experiences } from '../data/experience'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import InstitutionLogo from './ui/InstitutionLogo'

function ExperienceItem({ experience, strings, lang, index }) {
  const points = pick(experience.points, lang)
  const isAcademic = experience.kind === 'academic'

  return (
    <Reveal as="article" delay={Math.min(index * 0.05, 0.15)} className="grid gap-6 py-12 first:pt-0 md:grid-cols-12 md:gap-10">
      {/* Datas em coluna lateral, como a timeline da referência. */}
      <div className="md:col-span-3">
        <p className="font-sans text-meta font-semibold text-[var(--text-secondary)]">
          {pick(experience.period, lang)}
        </p>
        {experience.current && (
          /* Estado por texto, não só por cor. */
          <p className="mt-2 inline-block rounded-full border border-[var(--border-control)] px-2.5 py-0.5 font-sans text-[0.8125rem] font-bold uppercase tracking-wider text-[var(--text)]">
            {strings.experience.current}
          </p>
        )}
        {isAcademic && (
          <p className="mt-2 text-meta text-[var(--text-secondary)]">{strings.experience.academic}</p>
        )}
      </div>

      <div className="md:col-span-9">
        <div className="flex flex-wrap items-center gap-4">
          <InstitutionLogo
            src={experience.logo}
            institution={experience.logoInstitution ?? experience.company}
            backdrop={experience.logoBackdrop}
            size="sm"
            /* No DASI a logo é da USP, não do diretório: precisa de nome próprio. */
            decorative={!experience.logoInstitution}
          />
          <div>
            <h3 className="font-display text-card">{pick(experience.role, lang)}</h3>
            <p className="mt-1 font-sans text-meta font-semibold text-[var(--text)]">
              {experience.company}
            </p>
          </div>
        </div>

        {experience.area && (
          <p className="mt-3 font-sans text-meta text-[var(--text-secondary)]">
            {pick(experience.area, lang)}
          </p>
        )}

        <ul className="mt-6 space-y-3 text-body text-[var(--text)]" role="list">
          {points.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Resultados junto da experiência que os originou. */}
        {experience.results.length > 0 && (
          <div className="mt-6">
            <h4 className="eyebrow mb-3">{strings.experience.resultsLabel}</h4>
            <ul className="grid gap-4 sm:grid-cols-2" role="list">
              {experience.results.map((result) => (
                <li key={result.value} className="panel px-4 py-3">
                  <p className="font-display text-card text-[var(--heading)]">{result.value}</p>
                  <p className="mt-1 text-meta text-[var(--text-secondary)]">{pick(result.label, lang)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <h4 className="eyebrow mb-2">{strings.experience.stackLabel}</h4>
          <p className="font-sans text-meta text-[var(--text-secondary)]">
            {[...new Set([...experience.focus, ...experience.stack])].join(' · ')}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    /* Faixa escura: a pausa visual do site, em carvão neutro. */
    <Section id="experience" index="02" tone="invert" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <div className="divide-y divide-[var(--divider-decorative)]">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            strings={t}
            lang={lang}
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
