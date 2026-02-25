import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle({ onMount }) {
  const { isDark, toggleTheme } = useTheme()
  const [shouldPulse, setShouldPulse] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    // Verificar se já viu a dica
    const seen = localStorage.getItem('theme-toggle-hint-seen')
    if (seen === 'true') {
      return
    }

    // Começar a piscar após 0.5s e parar após 3.5s
    const startTimer = setTimeout(() => {
      setShouldPulse(true)
    }, 500)

    const stopTimer = setTimeout(() => {
      setShouldPulse(false)
    }, 3500)

    // Passar a referência para o componente pai
    if (onMount && buttonRef.current) {
      onMount(buttonRef.current)
    }

    return () => {
      clearTimeout(startTimer)
      clearTimeout(stopTimer)
    }
  }, [onMount])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-offset-2 dark:focus:ring-offset-dark-canvas"
      style={{
        backgroundColor: isDark ? '#3A3429' : '#EFE9E1',
      }}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: isDark ? '#C9A882' : '#8B572A',
        }}
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
          scale: shouldPulse ? [1, 1.15, 1] : 1,
        }}
        transition={{
          x: {
            type: 'spring',
            stiffness: 500,
            damping: 30,
          },
          scale: shouldPulse
            ? {
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }
            : { duration: 0.3 },
        }}
      >
        {isDark ? (
          <svg className="w-4 h-4 text-dark-canvas" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-[#FDFBF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </motion.div>
    </button>
  )
}
