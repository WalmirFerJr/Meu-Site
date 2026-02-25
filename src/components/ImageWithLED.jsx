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
  const viewBoxSize = rounded === '2xl' ? 400 : 300
  const cornerRadius = rounded === '2xl' ? 32 : 16

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
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ filter: isComplete ? 'drop-shadow(0 0 15px rgba(139, 87, 42, 0.6)) drop-shadow(0 0 30px rgba(139, 87, 42, 0.4))' : 'none' }}
      >
        <motion.path
          d={`M ${cornerRadius} 0 L ${viewBoxSize - cornerRadius} 0 Q ${viewBoxSize} 0 ${viewBoxSize} ${cornerRadius} L ${viewBoxSize} ${viewBoxSize - cornerRadius} Q ${viewBoxSize} ${viewBoxSize} ${viewBoxSize - cornerRadius} ${viewBoxSize} L ${cornerRadius} ${viewBoxSize} Q 0 ${viewBoxSize} 0 ${viewBoxSize - cornerRadius} L 0 ${cornerRadius} Q 0 0 ${cornerRadius} 0 Z`}
          fill="none"
          stroke="#8B572A"
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
