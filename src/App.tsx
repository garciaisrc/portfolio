import Navbar from './components/Navbar'
import ClickRipple from './components/ClickRipple'
import BubbleField from './components/BubbleField'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { FilterProvider } from './context/FilterContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <BubbleField />
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <ClickRipple />
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </FilterProvider>
    </ThemeProvider>
  )
}

export default App
