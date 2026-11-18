import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ClickRipple from './components/ClickRipple'
import BubbleField from './components/BubbleField'
import IntroLoader from './components/IntroLoader'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { FilterProvider } from './context/FilterContext'
import './App.css'

function App() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [introDone])

  return (
    <ThemeProvider>
      <FilterProvider>
        <IntroLoader onDone={() => setIntroDone(true)} />
        <BubbleField />
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <ClickRipple />
        <div className={`app-shell ${introDone ? 'app-shell--ready' : ''}`}>
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </FilterProvider>
    </ThemeProvider>
  )
}

export default App
