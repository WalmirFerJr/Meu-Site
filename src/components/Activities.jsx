import { activities } from '../data/activities'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import Figure from './ui/Figure'
import ExternalLink from './ui/ExternalLink'

export default function Activities() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    <Section
      id="activities"
      index="06"
      eyebrow={t.activities.eyebrow}
      title={t.activities.title}
      lede={t.activities.volunteerNote}
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-10">
        {activities.map((activity, index) => (
          <Reveal key={activity.id} as="article" delay={Math.min(index * 0.06, 0.12)} className="flex flex-col">
            {/* Cada imagem mantém a razão do arquivo: o retrato vertical não vira faixa. */}
            <Figure
              src={activity.image}
              alt={pick(activity.imageAlt, lang)}
              width={activity.imageWidth}
              height={activity.imageHeight}
              className="mb-6"
            />
            <h3 className="font-display text-card">{pick(activity.title, lang)}</h3>
            <p className="mt-2 font-sans text-meta font-semibold text-[var(--text-secondary)]">
              {pick(activity.period, lang)}
            </p>
            <ul className="mt-4 space-y-2 text-body text-[var(--text)]" role="list">
              {pick(activity.points, lang).map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {activity.url && (
              <p className="mt-5">
                <ExternalLink
                  href={activity.url}
                  className="link-inline link-action font-sans text-meta font-semibold"
                  accessibleName={pick(activity.urlLabel, lang)}
                >
                  {pick(activity.urlLabel, lang)}
                </ExternalLink>
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
