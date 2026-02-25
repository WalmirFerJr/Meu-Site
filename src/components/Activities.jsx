import { motion } from 'framer-motion'
import { activities } from '../data/activities'
import ScrollArrow from './ScrollArrow'
import ImageWithLED from './ImageWithLED'

function ActivityCard({ activity, index }) {
  return (
    <motion.article
      key={activity.id}
      className="p-6 rounded-xl card-glass hover:border-accent-primary dark:hover:border-dark-accent-primary/40 transition-all group hover:shadow-soft"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {activity.image && (
        <div className="mb-4">
          <ImageWithLED src={activity.image} alt={activity.title} className="w-full h-48" rounded="lg" />
        </div>
      )}
      <h3 className="font-semibold text-lg text-[#262322] dark:text-dark-text-primary mb-2">
        {activity.url ? (
          <a
            href={activity.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-primary dark:hover:text-dark-accent-primary transition-colors"
          >
            {activity.title} →
          </a>
        ) : (
          activity.title
        )}
      </h3>
      <p className="text-accent-primary dark:text-dark-accent-primary text-sm font-medium mb-4">{activity.period}</p>
      <ul className="space-y-2 text-[#262322]/70 dark:text-dark-text-secondary text-sm leading-relaxed list-disc list-inside" role="list">
        {activity.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.article>
  )
}

export default function Activities() {
  return (
    <section
      id="activities"
      className="py-20 px-6 bg-[#FDFBF7] dark:bg-dark-canvas"
      aria-labelledby="activities-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="activities-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Atividades extracurriculares
        </motion.h2>
        <motion.p
          className="section-subtitle mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Liderança, impacto social e organização de eventos.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>
      <ScrollArrow targetId="certifications" />
    </section>
  )
}
