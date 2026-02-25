import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ScrollArrow from './ScrollArrow'

function ProjectCard({ project, index }) {
  const hasDemo = Boolean(project.demoUrl)

  return (
    <motion.article
      className="group p-6 rounded-2xl card-glass hover:border-accent-primary dark:hover:border-dark-accent-primary/40 transition-all flex flex-col hover:shadow-soft"
      aria-labelledby={`project-${project.id}-title`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3
        id={`project-${project.id}-title`}
        className="font-semibold text-xl text-[#262322] dark:text-dark-text-primary mb-3 group-hover:text-accent-primary dark:group-hover:text-dark-accent-primary transition-colors"
      >
        {project.title}
      </h3>
      <p className="text-[#262322]/70 dark:text-dark-text-secondary text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded bg-accent-primary/10 dark:bg-dark-accent-primary/20 text-accent-primary dark:text-dark-accent-primary text-xs font-medium border border-accent-primary/20 dark:border-dark-accent-primary/30 font-mono"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 pt-2 border-t border-[#EFE9E1] dark:border-dark-border-medium">
        {hasDemo && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm bg-gradient-to-r from-accent-primary to-accent-hover dark:from-dark-accent-primary dark:to-dark-accent-hover text-[#FDFBF7] dark:text-dark-canvas hover:brightness-110 transition-all"
          >
            <span aria-hidden>▶</span>
            Demo
          </a>
        )}
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm border border-[#EFE9E1] dark:border-dark-border-medium text-[#262322] dark:text-dark-text-primary hover:border-accent-primary dark:hover:border-dark-accent-primary hover:text-accent-primary dark:hover:text-dark-accent-primary transition-colors"
        >
          <span aria-hidden>{"</>"}</span>
          Repo
        </a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#FDFBF7] dark:bg-dark-canvas"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="projects-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projetos em destaque
        </motion.h2>
        <motion.p
          className="section-subtitle mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Alguns dos meus projetos que mais me orgulho.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      <ScrollArrow targetId="activities" />
    </section>
  )
}
