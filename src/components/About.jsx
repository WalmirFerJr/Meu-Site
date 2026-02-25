import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'
import ProfileImageWithLED from './ProfileImageWithLED'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[#FDFBF7] dark:bg-dark-canvas"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="about-heading"
          className="section-title dark:text-dark-text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre mim
        </motion.h2>
        <motion.p
          className="section-subtitle mb-12 dark:text-dark-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trajetória e foco
        </motion.p>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProfileImageWithLED src="/images/foto-perfil.png" alt="Walmir Fernandes Junior" />
          </motion.div>
          <motion.div
            className="md:col-span-3 space-y-4 text-[#262322] dark:text-dark-text-primary leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Sou um estudante apaixonado por tecnologia e resolução de problemas, com forte interesse na área de finanças e
              atualmente movido pela vontade de aprender cada dia mais e me profissionalizar dentro da minha área. Possuo
              Foco em <strong className="text-accent-primary dark:text-dark-accent-primary">desenvolvimento backend</strong> e
              experiência com Python, Java, SQL, AWS e Linux em projetos reais.
            </p>
            <p>
              Este portfólio é uma vitrine de que também consigo entregar uma interface clara e performática,
              mesmo meu foco sendo em me especializar em conceitos de system design, estrutura de dados, banco de dados, infraestrutura
              e outras habilidade imprescindíveis para um bom engenheiro de software.
            </p>
            <p>
              Busco um <strong className="text-accent-primary dark:text-dark-accent-primary">estágio</strong> em engenharia de software para contribuir
              com código de qualidade e aprender com times experientes dentro de sistemas em produção.
            </p>
          </motion.div>
        </div>
      </div>
      <ScrollArrow targetId="education" />
    </section>
  )
}
