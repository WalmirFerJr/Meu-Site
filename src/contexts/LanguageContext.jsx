import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { readStored, writeStored } from '../lib/storage'

const LanguageContext = createContext(null)

export const LANGUAGE_KEY = 'lang'
export const LANGUAGES = ['pt', 'en']

/**
 * Português é o idioma do site; inglês é uma tradução oferecida pelo botão.
 *
 * Só uma escolha explícita e guardada muda o padrão. Detectar pelo navegador
 * faria um recrutador brasileiro com o sistema em inglês cair na tradução, e o
 * próprio dono nunca ver a versão original — troca previsibilidade por palpite.
 */
function resolveInitialLanguage() {
  const saved = readStored(LANGUAGE_KEY)
  return LANGUAGES.includes(saved) ? saved : 'pt'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(resolveInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
    writeStored(LANGUAGE_KEY, lang)
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'pt' ? 'en' : 'pt'))
  }, [])

  const value = useMemo(() => ({ lang, toggleLanguage }), [lang, toggleLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage precisa estar dentro de LanguageProvider')
  return context
}

/**
 * Lê um campo que pode ou não ser traduzido.
 * `{ pt, en }` resolve pelo idioma; qualquer outro valor passa direto — assim
 * nomes de empresa, tecnologias e URLs ficam no dado uma vez só.
 */
export function pick(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('pt' in value || 'en' in value)) {
    return value[lang] ?? value.pt
  }
  return value
}
