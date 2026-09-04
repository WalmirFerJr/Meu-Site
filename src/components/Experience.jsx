import { motion } from 'framer-motion'
import { experiences, experienceHighlights } from '../data/experience'
import ScrollArrow from './ScrollArrow'

function HighlightCard({ item, index }) {
  return (
    <motion.div
      className="flex-1 min-w-[150px] p-5 rounded-xl card-glass text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <p className="font-mono text-2xl md:text-3xl font-semibold text-accent-primary dark:text-dark-accent-primary">
        {item.value}
      </p>
      <p className="text-[#262322]/70 dark:text-dark-text-secondary text-xs mt-1 leading-snug">{item.label}</p>
    </motion.div>
  )
}

function ExperienceCard({ experience, index }) {
  return (
    <motion.article
      className="relative pl-10 md:pl-14 pb-12 last:pb-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      {/* Marcador da linha do tempo */}
      <span
        className="absolute left-[10px] md:left-[14px] top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent-primary dark:bg-dark-accent-primary ring-4 ring-[#FDFBF7] dark:ring-dark-canvas"
        aria-hidden
      >
        {experience.current && (
          <span className="absolute inset-0 rounded-full bg-accent-primary dark:bg-dark-accent-primary animate-ping opacity-60" />
        )}
      </span>

      <div className="p-6 rounded-xl card-glass transition-all hover:border-accent-primary dark:hover:border-dark-accent-primary/40 hover:shadow-soft">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
          <h3 className="font-semibold text-lg text-[#262322] dark:text-dark-text-primary">{experience.role}</h3>
          <span className="font-mono text-xs text-[#262322]/60 dark:text-dark-text-secondary whitespace-nowrap">
            {experience.period}
          </span>
        </div>

        <p className="text-accent-primary dark:text-dark-accent-primary font-medium text-sm">
          {experience.company}
          {experience.current && (
            <span className="ml-2 align-middle inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-accent-primary/10 dark:bg-dark-accent-primary/15 text-accent-primary dark:text-dark-accent-primary border border-accent-primary/20 dark:border-dark-accent-primary/25">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary dark:bg-dark-accent-primary" aria-hidden />
              Atual
            </span>
          )}
        </p>

        {experience.area && (
          <p className="text-[#262322]/60 dark:text-dark-text-secondary text-xs mt-0.5 mb-4">{experience.area}</p>
        )}

        <ul className="space-y-2.5 text-[#262322]/80 dark:text-dark-text-secondary text-sm leading-relaxed" role="list">
          {experience.points.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-accent-primary/60 dark:bg-dark-accent-primary/60"
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#EFE9E1] dark:border-dark-border-medium" role="list">
          {experience.stack.map((tech) => (
            <li
              key={tech}
              className="px-2.5 py-1 rounded-md font-mono text-xs bg-[#EFE9E1] dark:bg-dark-border-medium text-[#262322] dark:text-dark-text-primary border border-[#EFE9E1] dark:border-dark-border-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-[#FDFBF7] dark:bg-dark-canvas"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          id="experience-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experiência profissional
        </motion.h2>
        <motion.p
          className="section-subtitle mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Engenharia de dados e de software aplicadas ao mercado financeiro.
        </motion.p>

        <div className="flex flex-wrap gap-4 mb-14">
          {experienceHighlights.map((item, index) => (
            <HighlightCard key={item.label} item={item} index={index} />
          ))}
        </div>

        {/* Linha do tempo */}
        <div className="relative">
          <span
            className="absolute left-[10px] md:left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-primary/50 via-[#EFE9E1] to-transparent dark:from-dark-accent-primary/50 dark:via-dark-border-soft dark:to-transparent"
            aria-hidden
          />
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
      <ScrollArrow targetId="education" />
    </section>
  )
}
