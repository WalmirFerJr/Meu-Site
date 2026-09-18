/**
 * Acesso a localStorage que nunca lança.
 *
 * Modo privado, cookies de terceiros bloqueados e cota cheia fazem
 * `localStorage` lançar só de ser lido. Como tema e idioma são aplicados antes
 * da primeira pintura, uma exceção aqui derrubaria a página inteira.
 * Sem armazenamento, a preferência vale apenas para a sessão em memória.
 */
export function readStored(key) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}
