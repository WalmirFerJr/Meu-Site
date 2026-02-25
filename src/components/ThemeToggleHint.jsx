import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggleHint({ toggleRef }) {
  const [showHint, setShowHint] = useState(false)
  const [position, setPosition] = useState({ top: 0, right: 0 })

  useEffect(() => {
    // Verificar se já viu a dica
    const seen = localStorage.getItem('theme-toggle-hint-seen')
    if (seen === 'true') {
      return
    }

    // Função para atualizar posição
    const updatePosition = () => {
      if (toggleRef?.current) {
        const rect = toggleRef.current.getBoundingClientRect()
        setPosition({
          top: rect.top + rect.height / 2,
          right: window.innerWidth - rect.right + 10,
        })
      }
    }

    let intervalId = null
    let hideTimerId = null

    // Mostrar após 0.5s do site carregar (após a intro)
    const showTimer = setTimeout(() => {
      updatePosition()
      setShowHint(true)
      
      // Atualizar posição em caso de scroll/resize
      intervalId = setInterval(updatePosition, 100)
      
      // Esconder após 3 segundos
      hideTimerId = setTimeout(() => {
        setShowHint(false)
        localStorage.setItem('theme-toggle-hint-seen', 'true')
      }, 3000)
    }, 500)

    return () => {
      clearTimeout(showTimer)
      if (intervalId) clearInterval(intervalId)
      if (hideTimerId) clearTimeout(hideTimerId)
    }
  }, [toggleRef])

  if (!showHint || !toggleRef?.current) return null

  return (
    <AnimatePresence>
      {showHint && (
        <motion.div
          className="fixed z-[60] pointer-events-none"
          style={{
            top: `${position.top}px`,
            right: `${position.right}px`,
            transform: 'translateY(-50%)',
          }}
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Seta apontando */}
            <motion.div
              className="absolute -left-6 top-1/2 -translate-y-1/2"
              animate={{
                x: [0, -8, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent-primary dark:text-dark-accent-primary"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.div>
            
            {/* Tooltip */}
            <div className="bg-[#262322] dark:bg-dark-text-primary text-[#FDFBF7] dark:text-dark-canvas px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg">
              Alterar tema
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
