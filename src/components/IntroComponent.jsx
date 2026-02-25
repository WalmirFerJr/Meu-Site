import { memo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Constantes de tempo ────────────────────────────────────────────────────
const PHASE1_DISPLAY_MS = 1400  // quanto tempo "Bem Vindo" fica visível
const EXIT_DURATION_MS  = 1100  // tempo da saída antes de chamar onComplete

// ─── Texto "Bem Vindo" ───────────────────────────────────────────────────────
const WELCOME_TEXT  = 'Bem Vindo'
const STAGGER_DELAY = 0.06

const WelcomeText = memo(({ reverse = false, onEnterComplete }) => {
  const letters = WELCOME_TEXT.split('')
  const totalDuration = letters.length * STAGGER_DELAY + 0.6

  useEffect(() => {
    if (reverse || !onEnterComplete) return
    const t = setTimeout(onEnterComplete, totalDuration * 1000)
    return () => clearTimeout(t)
  }, [reverse, onEnterComplete, totalDuration])

  return (
    <motion.div
      className="flex justify-center items-center"
      style={{ gap: '0.05em', perspective: 600 }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="text-[#262322] dark:text-dark-text-primary select-none font-semibold"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            letterSpacing: '0.04em',
          }}
          initial={reverse
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : { opacity: 0, y: 0, filter: 'blur(6px)' }
          }
          animate={reverse
            ? { opacity: 0, y: -10, filter: 'blur(6px)' }
            : { opacity: 1, y: 0, filter: 'blur(0px)' }
          }
          transition={
            reverse
              ? { delay: i * STAGGER_DELAY * 0.5, duration: 0.4, ease: 'easeIn' }
              : { delay: 0.1 + i * STAGGER_DELAY, duration: 0.55, ease: [0.16, 1, 0.3, 1] }
          }
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
})
WelcomeText.displayName = 'WelcomeText'

// ─── Cantos HUD sutis ────────────────────────────────────────────────────────
const corners = [
  'top-0 left-0 border-l border-t',
  'top-0 right-0 border-r border-t',
  'bottom-0 left-0 border-l border-b',
  'bottom-0 right-0 border-r border-b',
]

const CornerHUD = memo(({ reverse = false }) => (
  <div className="absolute inset-0 pointer-events-none">
    {corners.map((cls, i) => (
      <motion.div
        key={i}
        className={`absolute w-8 h-8 border-[#EFE9E1] dark:border-dark-border-medium/60 ${cls}`}
        initial={{ opacity: reverse ? 0.6 : 0 }}
        animate={{ opacity: reverse ? 0 : 0.6 }}
        transition={{ delay: reverse ? i * 0.04 : 0.05 + i * 0.08, duration: 0.4 }}
      />
    ))}
  </div>
))
CornerHUD.displayName = 'CornerHUD'

// ─── Subtexto discreto ──────────────────────────────────────────────────────
const Subtext = memo(({ reverse = false }) => (
  <motion.p
    className="text-[#262322]/80 dark:text-dark-text-secondary tracking-[0.3em] uppercase text-[10px] font-mono select-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: reverse ? 0 : 0.7 }}
    transition={{ delay: reverse ? 0 : 0.7, duration: 0.6 }}
  >
    Portfólio Walmir Fernandes
  </motion.p>
))
Subtext.displayName = 'Subtext'

// ─── Glow ambiente ───────────────────────────────────────────────────────────
const AmbientGlow = memo(({ visible }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
      style={{
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(139,87,42,0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }}
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
    transition={{ duration: 1.4, ease: 'easeOut' }}
  />
))
AmbientGlow.displayName = 'AmbientGlow'

// ─── Componente principal ────────────────────────────────────────────────────
// phase 0 → "Bem Vindo" entra com blur/fade (sem y, corrige o flick)
// phase 1 → fica parado com cantos HUD visíveis
// phase 2 → saída em reverse → onComplete

function IntroComponent({ onComplete }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (phase !== 1) return
    const t = setTimeout(() => setPhase(2), PHASE1_DISPLAY_MS)
    return () => clearTimeout(t)
  }, [phase])

  useEffect(() => {
    if (phase !== 2) return
    const t = setTimeout(() => onComplete?.(), EXIT_DURATION_MS)
    return () => clearTimeout(t)
  }, [phase, onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#FDFBF7] dark:bg-dark-canvas"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Noise sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />

      <AmbientGlow visible={phase < 2} />

      {/* Container com tamanho fixo para evitar qualquer deslocamento */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 'min(480px, 90vw)', height: 160 }}
      >
        <AnimatePresence>
          {phase >= 0 && (
            <motion.div
              key="welcome-group"
              className="relative flex flex-col items-center justify-center gap-4 w-full h-full"
              initial={false}
            >
              <CornerHUD reverse={phase === 2} />
              <WelcomeText
                reverse={phase === 2}
                onEnterComplete={phase === 0 ? () => setPhase(1) : undefined}
              />
              <Subtext reverse={phase === 2} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default memo(IntroComponent)