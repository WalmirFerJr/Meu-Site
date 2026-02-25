import { useMemo } from 'react'

const GOOEY_FILTER_ID = 'splash-gooey'

/**
 * Retorna o id do filtro SVG gooey para uso em style={{ filter: `url(#${id})` }}
 * O filtro deve ser renderizado uma vez no DOM (no IntroComponent).
 */
export function useGooeyFilter() {
  return useMemo(() => GOOEY_FILTER_ID, [])
}
