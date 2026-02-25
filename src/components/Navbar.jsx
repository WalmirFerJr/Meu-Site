import { useState } from 'react'
import { useToggle } from '../hooks/useToggle'
import { navLinks } from '../data/navLinks'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import ThemeToggleHint from './ThemeToggleHint'

export default function Navbar() {
  const [isOpen, toggle] = useToggle(false)
  const [toggleRef, setToggleRef] = useState(null)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#EFE9E1] dark:border-dark-border-medium bg-[#FDFBF7]/95 dark:bg-dark-canvas/95 backdrop-blur-md shadow-subtle"
      aria-label="Navegação principal"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold text-xl text-[#262322] dark:text-dark-text-primary hover:text-accent-primary dark:hover:text-dark-accent-primary transition-colors"
        >
          WF
        </a>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8" role="list">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-[#262322]/70 dark:text-dark-text-secondary hover:text-accent-primary dark:hover:text-dark-accent-primary transition-colors text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary dark:bg-dark-accent-primary transition-all group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>
          <ThemeToggle onMount={setToggleRef} />
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle onMount={setToggleRef} />
          <button
            type="button"
            className="p-2 text-[#262322]/70 dark:text-dark-text-secondary hover:text-accent-primary dark:hover:text-dark-accent-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary/30 dark:focus:ring-dark-accent-primary/30 transition-colors"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="nav-menu-mobile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-menu-mobile"
            className="md:hidden border-t border-[#EFE9E1] dark:border-dark-border-medium bg-[#FDFBF7]/98 dark:bg-dark-canvas/98 backdrop-blur-md px-6 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden={!isOpen}
          >
            <ul className="flex flex-col gap-4" role="list">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                <a
                  href={link.href}
                  className="text-[#262322]/70 dark:text-dark-text-secondary hover:text-accent-primary dark:hover:text-dark-accent-primary transition-colors font-medium block py-1"
                  onClick={toggle}
                >
                  {link.label}
                </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
        </AnimatePresence>
      <ThemeToggleHint toggleRef={toggleRef} />
    </nav>
  )
}
