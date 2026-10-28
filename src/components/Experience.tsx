import { useState } from 'react'
import { experience } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { useFilter, stackMatches, FilterBadge } from '../context/FilterContext'

export default function Experience() {
  const { ref, isInView } = useInView<HTMLElement>()
  const { activeStack, toggleStack } = useFilter()
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set([0]))

  const toggleExpanded = (i: number) => {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <section
      id="experiencia"
      ref={ref}
      className={`section reveal ${isInView ? 'reveal--visible' : ''}`}
    >
      <h2 className="section__title">Experiencia</h2>
      <FilterBadge />
      <div className="timeline">
        {experience.map((job, i) => {
          const isExpanded = expanded.has(i)
          const matches = activeStack
            ? job.stack.some((tech) => stackMatches(activeStack, tech))
            : true
          const detailsId = `experience-details-${i}`

          return (
            <article
              key={job.company}
              className={`timeline__item reveal ${isInView ? 'reveal--visible' : ''} ${!matches ? 'is-dimmed' : ''}`}
              style={{ transitionDelay: isInView ? `${i * 80}ms` : '0ms' }}
            >
              <div className="timeline__marker" />
              <div className="timeline__content">
                <header>
                  <h4>{job.role}</h4>
                  <span className="timeline__period">{job.period}</span>
                </header>
                <p className="timeline__company">{job.company}</p>
                <button
                  type="button"
                  className="timeline__toggle"
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  onClick={() => toggleExpanded(i)}
                >
                  {isExpanded ? 'Ocultar detalles ▴' : 'Ver detalles ▾'}
                </button>
                {isExpanded && (
                  <div className="timeline__details" id={detailsId}>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="tag-row">
                      {job.stack.map((tech) => {
                        const isActive = activeStack !== null && stackMatches(activeStack, tech)
                        return (
                          <button
                            key={tech}
                            type="button"
                            className={`tag ${isActive ? 'tag--active' : ''}`}
                            onClick={() => toggleStack(tech)}
                          >
                            {tech}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
