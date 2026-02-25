import { motion } from 'framer-motion'
import { educationItems } from '../data/education'
import ScrollArrow from './ScrollArrow'

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-[#FDFBF7] dark:bg-dark-canvas"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="education-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Formação
        </motion.h2>
        <motion.p
          className="section-subtitle mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trajetória acadêmica em tecnologia.
        </motion.p>
        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="p-6 rounded-xl card-glass hover:border-accent-primary dark:hover:border-dark-accent-primary/40 transition-all hover:shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-lg text-[#262322] dark:text-dark-text-primary mb-1">
                {item.title}
              </h3>
              {item.institutionUrl ? (
                <a
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary dark:text-dark-accent-primary font-medium text-sm mb-1 hover:text-accent-hover dark:hover:text-dark-accent-hover transition-colors inline-block"
                >
                  {item.institution} →
                </a>
              ) : (
                <p className="text-accent-primary dark:text-dark-accent-primary font-medium text-sm mb-1">{item.institution}</p>
              )}
              <p className="text-[#262322]/70 dark:text-dark-text-secondary text-sm">
                {item.period}
                {item.detail && ` · ${item.detail}`}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
      <ScrollArrow targetId="projects" />
    </section>
  )
}
