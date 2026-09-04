import { motion, useScroll, useSpring } from 'framer-motion'

/** Barra fina de progresso de leitura, ancorada na base da navbar. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-accent-primary to-accent-hover dark:from-dark-accent-primary dark:to-dark-accent-hover"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
