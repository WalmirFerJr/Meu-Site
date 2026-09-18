import { useEffect, useState } from 'react'

/**
 * Barra fina de progresso de leitura, puramente decorativa.
 *
 * Feita com scroll listener passivo em vez de spring do Framer Motion: sob
 * `prefers-reduced-motion` a barra deve acompanhar a rolagem sem inércia.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="absolute inset-x-0 bottom-0 h-0.5" aria-hidden="true">
      <div
        className="h-full origin-left bg-[var(--accent)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
