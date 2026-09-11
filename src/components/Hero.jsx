import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'
import ResumeButton from './ResumeButton'
import InstitutionLogo from './InstitutionLogo'

const roles = ['Engenharia de Dados', 'Engenharia de Software', 'AWS & Cloud', 'IA Aplicada']
const companies = [
  { name: 'Itaú Unibanco', logo: '/images/itau.svg', backdrop: 'light' },
  { name: 'BTG Pactual', logo: '/images/btg-pactual.png', backdrop: 'dark' },
  { name: 'USP', logo: '/images/usp.jpg', backdrop: 'light' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 bg-[#F9FBF8] dark:bg-dark-canvas overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Brilho ambiente sutil atrás do título */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
        style={{
          background:
            'radial-gradient(60% 45% at 50% 30%, rgba(60, 50, 51, 0.12) 0%, rgba(60, 50, 51, 0) 70%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {roles.map((role) => (
            <span
              key={role}
              className="px-3 py-1 rounded-full font-mono text-[11px] tracking-wide uppercase border border-accent-primary/25 dark:border-dark-accent-primary/25 bg-accent-primary/5 dark:bg-dark-accent-primary/10 text-accent-primary dark:text-dark-accent-primary"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#17161C] dark:text-dark-text-primary leading-tight mb-6"
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
          className="text-[#17161C]/70 dark:text-dark-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Engenheiro de dados e software em formação, graduando em Sistemas de Informação pela{' '}
          <strong className="text-[#17161C] dark:text-dark-text-primary">USP</strong>.
          <br />
          Construo pipelines de grande volumetria e sistemas backend escaláveis na{' '}
          <strong className="text-[#17161C] dark:text-dark-text-primary">AWS</strong>.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <a href="#experience" className="btn-primary">
            Ver experiência
          </a>
          <ResumeButton variant="secondary" />
          <a href="#contact" className="btn-secondary">
            Entrar em contato
          </a>
        </motion.div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#17161C]/45 dark:text-dark-text-secondary/70 mb-3">
            Experiência em
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2" role="list">
            {companies.map((company) => (
              <li
                key={company.name}
                className="flex flex-col items-center gap-2 font-medium text-sm md:text-base text-[#17161C]/55 dark:text-dark-text-secondary/80"
              >
                <InstitutionLogo
                  src={company.logo}
                  institution={company.name}
                  backdrop={company.backdrop}
                  compact
                />
                <span>{company.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <ScrollArrow targetId="about" />
    </section>
  )
}
