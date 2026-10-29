import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { heroSlides } from '../data/profile'
import { useTheme } from '../context/ThemeContext'
import BubbleField from './BubbleField'

const AUTOPLAY_MS = 6000

const heroBgStyle = {
  '--hero-bg-desktop': `url(${import.meta.env.BASE_URL}images/hero-bg-v2.jpg)`,
  '--hero-bg-mobile': `url(${import.meta.env.BASE_URL}images/hero-bg-mobile-v2.jpg)`,
} as CSSProperties

export default function Hero() {
  const { theme } = useTheme()
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const paused = useRef(false)

  const goTo = useCallback((i: number) => {
    setIndex((i + heroSlides.length) % heroSlides.length)
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!isPlaying) return
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % heroSlides.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [isPlaying])

  const activeSlide = heroSlides[index]

  return (
    <section
      id="inicio"
      className="hero-carousel"
      style={heroBgStyle}
      aria-roledescription="carousel"
      aria-label="Presentación"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      {theme === 'light' && <BubbleField force contained />}
      <div className="hero-carousel__overlay" />

      <p className="sr-only" aria-live="polite">
        {`Diapositiva ${index + 1} de ${heroSlides.length}: ${activeSlide.title}`}
      </p>

      <button
        type="button"
        className="hero-carousel__arrow hero-carousel__arrow--prev"
        aria-label="Anterior"
        onClick={prev}
      >
        ‹
      </button>
      <button
        type="button"
        className="hero-carousel__arrow hero-carousel__arrow--next"
        aria-label="Siguiente"
        onClick={next}
      >
        ›
      </button>

      <div className="hero-carousel__viewport">
        <div
          className="hero-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroSlides.map((slide, i) => {
            const isActive = i === index
            const linkTabIndex = isActive ? undefined : -1
            return (
              <div className="hero-carousel__slide" key={i} aria-hidden={!isActive}>
                <div className="hero-carousel__content">
                  {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
                  {slide.title && <h1>{slide.title}</h1>}
                  {slide.subtitle && <p className="hero-carousel__subtitle">{slide.subtitle}</p>}
                  <p className="hero-carousel__text">{slide.text}</p>
                  {i === 0 && (
                    <div className="hero__actions">
                      <a className="btn btn--primary" href="#proyectos" tabIndex={linkTabIndex}>
                        Ver proyectos
                      </a>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="hero__actions">
                      <a className="btn btn--primary" href="#skills" tabIndex={linkTabIndex}>
                        Ver skills
                      </a>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="hero__actions">
                      <a
                        className="btn btn--primary"
                        href="https://garciatechnology.online/auth/login"
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={linkTabIndex}
                      >
                        Ver proyecto
                      </a>
                      <a
                        className="btn btn--ghost"
                        href="#proyectos"
                        tabIndex={linkTabIndex}
                      >
                        Todos los proyectos
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="hero-carousel__indicators">
        {heroSlides.map((_, i) => (
          <button
            type="button"
            key={i}
            className={i === index ? 'is-active' : ''}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <button
        type="button"
        className="hero-carousel__play-toggle"
        aria-label={isPlaying ? 'Pausar presentación' : 'Reanudar presentación'}
        onClick={() => setIsPlaying((v) => !v)}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
    </section>
  )
}
