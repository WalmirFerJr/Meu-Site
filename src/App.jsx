import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import IntroComponent from './components/IntroComponent'
import { useSplashScreen } from './hooks/useSplashScreen'

const About = lazy(() => import('./components/About'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Activities = lazy(() => import('./components/Activities'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))

function SectionFallback() {
  return <div className="min-h-[50vh]" aria-hidden />
}

function App() {
  const [isSplashVisible, hideSplash, isAnimating] = useSplashScreen()

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isSplashVisible ? (
          <IntroComponent
            key="splash"
            onComplete={() => {
              if (isAnimating) {
                hideSplash()
              }
            }}
          />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.25 }}
          >
            <Navbar />
            <main>
              <Hero />
              <Suspense fallback={<SectionFallback />}>
                <About />
                <Education />
                <Projects />
                <Activities />
                <Certifications />
                <Skills />
                <Contact />
              </Suspense>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
