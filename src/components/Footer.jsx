import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  const footerLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#education', label: 'Formação' },
    { href: '#projects', label: 'Projetos' },
    { href: '#activities', label: 'Atividades' },
    { href: '#certifications', label: 'Certificados' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contato' },
  ]

  return (
    <footer className="py-12 px-6 border-t border-[#EFE9E1] dark:border-dark-border-medium bg-[#FDFBF7] dark:bg-dark-canvas" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#262322]/70 dark:text-dark-text-secondary text-sm">
              © {year} Walmir Fernandes Junior. React, Vite, Tailwind.
            </p>
          </motion.div>
          <nav aria-label="Links do rodapé">
            <motion.div
              className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {footerLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#262322]/70 dark:text-dark-text-secondary hover:text-accent-primary dark:hover:text-dark-accent-primary text-sm transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary dark:bg-dark-accent-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </motion.div>
          </nav>
        </div>
        <motion.div
          className="text-center pt-6 border-t border-[#EFE9E1] dark:border-dark-border-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#262322]/50 dark:text-dark-text-secondary text-xs">
            Desenvolvido com foco em performance e experiência do usuário
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
