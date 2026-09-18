import { useEffect, useRef, useState } from 'react'

/**
 * Entrada suave ao entrar na viewport.
 *
 * Feita com IntersectionObserver próprio em vez de `whileInView`, por um motivo
 * concreto: com `once: true` um bloco que entra e sai da tela entre duas
 * amostragens do observer — rolagem muito rápida, tecla End, link direto para o
 * rodapé — podia ficar preso em opacidade 0 para sempre. Aqui há rede de
 * segurança: qualquer elemento que já esteja acima da borda inferior da janela
 * é revelado na hora, e um último passe roda depois do load.
 *
 * Sob `prefers-reduced-motion` não há animação nenhuma: o conteúdo nasce visível.
 */
function usePrefersReducedMotion() {
  const [reduzido, setReduzido] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const aoMudar = (evento) => setReduzido(evento.matches)
    mq.addEventListener('change', aoMudar)
    return () => mq.removeEventListener('change', aoMudar)
  }, [])

  return reduzido
}

function useReveal(imediato) {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(imediato)

  useEffect(() => {
    if (visivel) return undefined
    const alvo = ref.current
    if (!alvo) return undefined

    const jaPassou = () => alvo.getBoundingClientRect().top < window.innerHeight
    if (jaPassou()) {
      setVisivel(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) setVisivel(true)
      },
      { rootMargin: '0px 0px -5% 0px' },
    )
    observer.observe(alvo)

    // Rede de segurança: se o observer perder o elemento numa rolagem abrupta,
    // esta verificação depois do load garante que nada fique invisível.
    const conferir = () => {
      if (jaPassou()) setVisivel(true)
    }
    window.addEventListener('scroll', conferir, { passive: true })
    const timer = window.setTimeout(conferir, 1200)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', conferir)
      window.clearTimeout(timer)
    }
  }, [visivel])

  return [ref, visivel]
}

function estilo(visivel, reduzido, y, delay) {
  if (reduzido) return undefined
  return {
    opacity: visivel ? 1 : 0,
    transform: visivel ? 'none' : `translate3d(0, ${y}px, 0)`,
    transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 500ms cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    willChange: visivel ? 'auto' : 'opacity, transform',
  }
}

export default function Reveal({ children, delay = 0, y = 18, as: Tag = 'div', className = '', ...rest }) {
  const reduzido = usePrefersReducedMotion()
  const [ref, visivel] = useReveal(reduzido)

  return (
    <Tag ref={ref} className={className} style={estilo(visivel, reduzido, y, delay)} {...rest}>
      {children}
    </Tag>
  )
}

/** Mesma entrada, mas imediata — para o conteúdo acima da dobra. */
export function RevealNow({ children, delay = 0, y = 18, as: Tag = 'div', className = '', ...rest }) {
  const reduzido = usePrefersReducedMotion()
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setVisivel(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <Tag className={className} style={estilo(reduzido || visivel, reduzido, y, delay)} {...rest}>
      {children}
    </Tag>
  )
}
