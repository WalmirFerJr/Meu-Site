import { motion } from 'framer-motion'

export default function DSA() {
  return (
    <section
      id="dsa"
      className="py-16 px-6 bg-[#FDFBF7]"
      aria-labelledby="dsa-heading"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="dsa-heading"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Estruturas de dados e algoritmos
        </motion.h2>
        <motion.p
          className="section-subtitle mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Base para raciocínio lógico e sistemas escaláveis.
        </motion.p>
        <motion.div
          className="p-6 rounded-xl card-glass border-accent-primary/30 flex flex-wrap items-center justify-center gap-6 hover:shadow-soft transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#262322] text-sm md:text-base">
            Interesse em DSA e resolução de problemas. Perfis em plataformas de programação competitiva:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#EFE9E1] text-[#262322] text-sm font-mono hover:border-accent-primary hover:text-accent-primary transition-colors"
            >
              LeetCode
            </a>
            <a
              href="https://codeforces.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#EFE9E1] text-[#262322] text-sm font-mono hover:border-accent-primary hover:text-accent-primary transition-colors"
            >
              Codeforces
            </a>
          </div>
          <p className="text-[#262322]/50 text-xs w-full text-center">
            Substitua os links acima pela URL do seu perfil em cada plataforma.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
