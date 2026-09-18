import { languageSkills, skillGroups } from '../data/skills'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import Section from './ui/Section'
import Reveal from './ui/Reveal'

export default function Skills() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    <Section id="skills" index="05" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      {/* Grupos tipográficos com rótulo e lista, não um mosaico de chips iguais. */}
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={Math.min(index * 0.035, 0.18)}>
            <h3 className="eyebrow mb-4 border-t border-[var(--divider-decorative)] pt-4">
              {pick(group.title, lang)}
            </h3>
            <ul className="space-y-1.5 text-body text-[var(--text)]" role="list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* Idiomas em faixa própria. Sem barras ou porcentagens: não há esse dado. */}
      <div className="mt-12 border-t border-[var(--divider-decorative)] pt-8">
        <h3 className="eyebrow mb-4">{t.skills.languagesTitle}</h3>
        <dl className="flex flex-wrap gap-x-12 gap-y-4">
          {languageSkills.map((item) => (
            <div key={item.id}>
              <dt className="font-display text-card">{pick(item.language, lang)}</dt>
              <dd className="mt-1 font-sans text-meta text-[var(--text-secondary)]">
                {pick(item.level, lang)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
