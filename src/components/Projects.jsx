import { projects } from '../data/projects'
import { useLanguage, pick } from '../contexts/LanguageContext'
import { useStringsFor } from '../i18n/strings'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ExternalLink from './ui/ExternalLink'

function ProjectArticle({ project, index, strings, lang }) {
  const number = String(index + 1).padStart(2, '0')
  const title = pick(project.title, lang)

  return (
    <Reveal
      as="article"
      delay={Math.min(index * 0.05, 0.15)}
      className="group grid gap-4 py-12 md:grid-cols-12 md:gap-8"
      aria-labelledby={`project-${project.id}-title`}
    >
      <p
        className="font-display text-[clamp(2rem,1.4rem+1.6vw,3rem)] leading-none text-[var(--text-secondary)] md:col-span-2"
        aria-hidden="true"
      >
        {number}
      </p>

      <div className="md:col-span-10">
        <h3
          id={`project-${project.id}-title`}
          className="font-display text-card transition-colors duration-normal group-hover:text-[var(--accent)]"
        >
          {title}
        </h3>
        <p className="mt-3 max-w-reading text-body text-[var(--text)]">
          {pick(project.description, lang)}
        </p>

        <div className="mt-5">
          <h4 className="eyebrow mb-2">{strings.projects.techLabel}</h4>
          <p className="font-sans text-meta text-[var(--text-secondary)]">{project.tech.join(' · ')}</p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          <ExternalLink
            href={project.repo}
            className="link-inline link-action font-sans text-meta font-semibold"
            accessibleName={pick(project.repoLabel, lang)}
          >
            {pick(project.repoLabel, lang)}
          </ExternalLink>
          {/* demoUrl é null em todos: nenhuma ação de demo é inventada. */}
          {!project.demoUrl && (
            <span className="font-sans text-meta text-[var(--text-secondary)]">
              {strings.projects.noDemo}
            </span>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  return (
    <Section id="projects" index="03" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <div className="divide-y divide-[var(--divider-decorative)]">
        {projects.map((project, index) => (
          <ProjectArticle key={project.id} project={project} index={index} strings={t} lang={lang} />
        ))}
      </div>
    </Section>
  )
}
