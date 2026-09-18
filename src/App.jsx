import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLanguage } from './contexts/LanguageContext'
import { useStringsFor } from './i18n/strings'

/**
 * Sem intro, sem splash e sem temporizador: header, hero e ações aparecem na
 * primeira renderização útil.
 *
 * As seções também deixaram de ser `lazy`. São oito componentes pequenos de um
 * site de página única, e o carregamento adiado fazia links diretos como
 * /#contact dependerem de um chunk que ainda não chegou. Imports diretos tornam
 * as oito âncoras alcançáveis desde a primeira pintura.
 */
export default function App() {
  const { lang } = useLanguage()
  const t = useStringsFor(lang)

  /**
   * Entrada direta por hash (/#contact, recarga, link compartilhado).
   *
   * O HTML servido tem o root vazio, então o navegador procura a âncora antes de
   * o React montar, não encontra e deixa a página no topo. Aqui a rolagem é
   * refeita uma vez, depois da primeira montagem — não é espera fixa: as seções
   * são importadas diretamente, então o alvo já existe neste ponto.
   *
   * O salto é `instant` de propósito: quem abre um link direto espera já estar
   * na seção, não assistir a página percorrer tudo até lá — e uma animação longa
   * no carregamento ainda pode ser interrompida por imagens que chegam depois.
   */
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skipToContent}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Activities />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
