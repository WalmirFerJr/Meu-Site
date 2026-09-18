import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { readStored, writeStored } from '../lib/storage'

const ThemeContext = createContext(null)

export const THEME_KEY = 'theme'

/**
 * Claro é o padrão, por decisão do proprietário.
 * Só uma escolha explícita e guardada muda isso — não há detecção pelo sistema,
 * para que o site abra sempre igual e o botão seja a única fonte de verdade.
 */
function resolveInitialTheme() {
  const saved = readStored(THEME_KEY)
  return saved === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(resolveInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    writeStored(THEME_KEY, theme)
  }, [theme])

  // Atualização funcional: dois toggles montados (desktop e móvel) não competem.
  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ theme, isDark: theme === 'dark', toggleTheme }),
    [theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme precisa estar dentro de ThemeProvider')
  return context
}
