import { useState, useEffect } from 'react'

/**
 * Hook para gerenciar estado da splash screen
 * @returns {[boolean, () => void, boolean]} [isVisible, hideSplash, isAnimating]
 */
export function useSplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Delay inicial para garantir que a animação líquida tenha tempo de executar
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const hideSplash = () => {
    setIsAnimating(false)
    setIsVisible(false) // Splash já fez o reverse; AnimatePresence cuida do exit
  }

  useEffect(() => {
    if (isAnimating) {
      const autoHideTimer = setTimeout(() => {
        hideSplash()
      }, 8000) // Fallback; o splash chama onComplete após o reverse

      return () => clearTimeout(autoHideTimer)
    }
  }, [isAnimating])

  return [isVisible, hideSplash, isAnimating]
}
