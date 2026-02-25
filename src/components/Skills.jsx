import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import ScrollArrow from './ScrollArrow'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-[#FDFBF7] dark:bg-dark-canvas"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="skills-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <motion.p
          className="section-subtitle mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tecnologias e ferramentas com as quais trabalho.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="p-6 rounded-xl card-glass hover:border-accent-primary dark:hover:border-dark-accent-primary/30 transition-all hover:shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-accent-primary dark:text-dark-accent-primary mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-2" role="list">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-[#EFE9E1] dark:bg-dark-border-medium text-[#262322] dark:text-dark-text-primary text-sm border border-[#EFE9E1] dark:border-dark-border-medium hover:border-accent-primary dark:hover:border-dark-accent-primary/50 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollArrow targetId="contact" />
    </section>
  )
}
