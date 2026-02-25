import { motion } from 'framer-motion'
//import { certifications } from '../data/certifications'
import ScrollArrow from './ScrollArrow'

const certifications = [
  { id: '1', title: 'Teste', credentialUrl: 'https://google.com' }
]

export default function Certifications() {
 // if (!certifications.length) return null

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-[#FDFBF7] dark:bg-dark-canvas"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="certifications-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificações
        </motion.h2>
        <motion.p
       //   className="section-subtitle mb-10"
       //   initial={{ opacity: 0, y: 20 }}
       //   whileInView={{ opacity: 1, y: 0 }}
       //   viewport={{ once: true }}
       //   transition={{ duration: 0.6, delay: 0.1 }}
        >
          Credenciais e links para verificação.
        </motion.p>
        <ul className="space-y-3" role="list">
          {certifications.map((cert, index) => (
            <motion.li
              key={cert.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 py-3 px-4 rounded-lg border border-[#EFE9E1] dark:border-dark-border-medium bg-[#FDFBF7] dark:bg-dark-border-soft text-[#262322] dark:text-dark-text-primary hover:border-accent-primary dark:hover:border-dark-accent-primary/50 hover:text-accent-primary dark:hover:text-dark-accent-primary transition-all hover:shadow-subtle"
              >
                <span>{cert.title}</span>
                <span className="text-[#262322]/50 dark:text-dark-text-secondary text-xs shrink-0">Ver credencial →</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <ScrollArrow targetId="skills" />
    </section>
  )
}
