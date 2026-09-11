import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageWithLED({ src, alt, className = '', rounded = 'lg' }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleAnimationComplete = () => {
    setIsComplete(true)
    setTimeout(() => {
      setIsComplete(false)
    }, 500)
  }

  const roundedClass = rounded === '2xl' ? 'rounded-2xl' : 'rounded-lg'
  const cornerRadius = rounded === '2xl' ? 16 : 8

  return (
    <div
      className={`relative overflow-hidden ${roundedClass} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsComplete(false)
      }}
    >
      {/* Imagem com zoom */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-out"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none'
        }}
      />

      {/* SVG para linha LED */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
        style={{ filter: isComplete ? 'drop-shadow(0 0 15px rgba(60, 50, 51, 0.6)) drop-shadow(0 0 30px rgba(60, 50, 51, 0.4))' : 'none' }}
      >
        <motion.rect
          x="1.5"
          y="1.5"
          width="calc(100% - 3px)"
          height="calc(100% - 3px)"
          rx={cornerRadius}
          fill="none"
          stroke="#3C3233"
          strokeWidth="3"
          className="dark:stroke-dark-accent-primary"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isHovered
              ? {
                  pathLength: 1,
                  opacity: 1,
                }
              : {
                  pathLength: 0,
                  opacity: 0,
                }
          }
          transition={{
            pathLength: {
              duration: 1.5,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 0.3,
            },
          }}
          onAnimationComplete={() => {
            if (isHovered && !isComplete) {
              handleAnimationComplete()
            }
          }}
        />
      </svg>

      {/* Glow quando completa */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            className={`absolute inset-0 ${roundedClass} pointer-events-none glow-light dark:glow-dark`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
