import { affiliations, profile } from '../data/profile'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import InstitutionLogo from './ui/InstitutionLogo'
import ResumeButton from './ui/ResumeButton'
import { RevealNow } from './ui/Reveal'

/**
 * Abertura editorial: texto à esquerda, retrato à direita no desktop; no celular
 * texto e ações vêm antes da foto (ordem do DOM = ordem de leitura).
 *
 * A altura é guiada pelo conteúdo, não por `min-h-screen`. A entrada é escalonada
 * em cascata curta — e desligada por completo sob movimento reduzido.
 */
export default function Hero() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    <section id="top" className="relative overflow-hidden pb-section pt-12 md:pt-20" aria-labelledby="hero-heading">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <RevealNow y={12}>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true" />
              {t.hero.eyebrow}
            </p>
          </RevealNow>

          {/* Um único h1: nome e posicionamento juntos. */}
          <h1 id="hero-heading" className="mt-6 text-hero">
            <RevealNow as="span" delay={0.06} className="block">
              {t.hero.name}
            </RevealNow>
            <RevealNow as="span" delay={0.14} className="mt-5 block">
              <span className="block font-sans text-[clamp(1.125rem,0.85rem+1.1vw,1.75rem)] font-semibold leading-snug text-[var(--accent)]">
                {t.hero.tagline}
              </span>
            </RevealNow>
          </h1>

          <RevealNow delay={0.2}>
            <p className="lede mt-7">{t.hero.intro}</p>
          </RevealNow>

          <RevealNow delay={0.27}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#experience" className="btn btn-primary py-3">
                {t.actions.seeExperience}
              </a>
              <ResumeButton variant="secondary" />
              <a href="#contact" className="btn btn-secondary py-3">
                {t.actions.contact}
              </a>
            </div>
          </RevealNow>

          <RevealNow delay={0.34}>
            <div className="mt-12">
              <h2 className="eyebrow mb-3">{t.hero.specialtiesLabel}</h2>
              <p className="font-sans text-meta font-semibold text-[var(--text-secondary)]">
                {t.hero.specialties.join('  ·  ')}
              </p>
            </div>
          </RevealNow>
        </div>

        <div className="lg:col-span-5">
          <RevealNow delay={0.12} y={24}>
            {/* Bloco vinho deslocado: a colagem editorial da referência. Decorativo,
                dentro de um wrapper com espaço já reservado. */}
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Bloco de acento deslocado — o único uso do vinho em área
                  preenchida. Decorativo, atrás da foto, e some no celular. */}
              <div
                className="pointer-events-none absolute hidden rounded-sm bg-[var(--accent-block-bg)] sm:block"
                style={{ inset: '2.5rem -1.75rem -1.75rem 2.5rem' }}
                aria-hidden="true"
              />
              <img
                src={profile.photo.src}
                alt={pick(profile.photo.alt, lang)}
                width={profile.photo.width}
                height={profile.photo.height}
                loading="eager"
                decoding="sync"
                className="relative w-full rounded-sm object-cover"
              />
            </div>
            <p className="mt-6 flex items-center gap-3 font-sans text-meta text-[var(--text-secondary)] lg:mt-8">
              <span className="h-px w-6 bg-[var(--divider-decorative)]" aria-hidden="true" />
              {pick(profile.location, lang)}
            </p>
          </RevealNow>
        </div>
      </div>

      {/* Faixa institucional: vínculo explícito de cada logo, não "clientes". */}
      <div className="shell mt-20">
        <RevealNow delay={0.42}>
          <h2 className="eyebrow mb-6 flex items-center gap-4">
            {t.hero.trackLabel}
            <span className="h-px flex-1 bg-[var(--divider-decorative)]" aria-hidden="true" />
          </h2>
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-7" role="list">
            {affiliations.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <InstitutionLogo
                  src={item.logo}
                  institution={item.name}
                  backdrop={item.backdrop}
                  size="sm"
                  decorative
                />
                <span className="font-sans text-meta">
                  <span className="block font-semibold text-[var(--text)]">{item.name}</span>
                  <span className="block text-[var(--text-secondary)]">{pick(item.relation, lang)}</span>
                </span>
              </li>
            ))}
          </ul>
        </RevealNow>
      </div>
    </section>
  )
}
