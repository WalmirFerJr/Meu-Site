import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 bg-[#FDFBF7] dark:bg-dark-canvas"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">
        <motion.h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#262322] dark:text-dark-text-primary leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Olá, sou{' '}
          <span className="bg-gradient-to-r from-accent-primary via-accent-hover to-accent-primary dark:from-dark-accent-primary dark:via-dark-accent-hover dark:to-dark-accent-primary bg-clip-text text-transparent">
            Walmir Fernandes
          </span>
        </motion.h1>
        <motion.p
          className="text-[#262322]/70 dark:text-dark-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Graduando na area de computação pela <strong className="text-[#262322] dark:text-dark-text-primary">USP</strong> <br /> <br />
          Engenheiro de software em formação com foco em backend
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <a href="#projects" className="btn-primary">
            Ver projetos
          </a>
          <a href="#contact" className="btn-secondary">
            Entrar em contato
          </a>
        </motion.div>
      </div>
      <ScrollArrow targetId="about" />
    </section>
  )
}
