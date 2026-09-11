import { motion } from 'framer-motion'
import ScrollArrow from './ScrollArrow'
import ProfileImageWithLED from './ProfileImageWithLED'
import ResumeButton from './ResumeButton'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[#F9FBF8] dark:bg-dark-canvas"
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
            className="md:col-span-3 space-y-4 text-[#17161C] dark:text-dark-text-primary leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Sou estudante de Sistemas de Informação na USP e atuo com{' '}
              <strong className="text-accent-primary dark:text-dark-accent-primary">engenharia de dados e de software</strong>{' '}
              no mercado financeiro. Hoje construo pipelines de grande volumetria e soluções de IA aplicada no{' '}
              <strong className="text-[#17161C] dark:text-dark-text-primary">Itaú Unibanco</strong>, depois de desenvolver
              automações fullstack e arquiteturas orientadas a eventos no{' '}
              <strong className="text-[#17161C] dark:text-dark-text-primary">BTG Pactual</strong>.
            </p>
            <p>
              Meu trabalho vive entre Python, FastAPI, SQL e AWS — Glue, Athena, Lambda, S3 e DynamoDB —, sempre com
              atenção a custo de consulta, escalabilidade e segurança. Trato dado como produto: modelagem em camadas,
              ownership por domínio e automação de tudo que for repetitivo.
            </p>
            <p>
              Meu objetivo é me tornar um{' '}
              <strong className="text-accent-primary dark:text-dark-accent-primary">engenheiro de software qualificado</strong>,
              e por isso invisto em system design, estruturas de dados, bancos de dados e infraestrutura. Este portfólio
              é a prova de que também entrego uma interface clara e performática.
            </p>
            <p>
              Busco desafios em <strong className="text-accent-primary dark:text-dark-accent-primary">engenharia de software</strong>{' '}
              para escrever código de qualidade e aprender com times experientes dentro de sistemas em produção.
            </p>
            <div className="pt-2">
              <ResumeButton variant="ghost" label="Baixar currículo em PDF" />
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollArrow targetId="experience" />
    </section>
  )
}
