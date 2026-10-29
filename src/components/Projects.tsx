import { projects } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { useFilter, stackMatches, FilterBadge } from '../context/FilterContext'

export default function Projects() {
  const { ref, isInView } = useInView<HTMLElement>()
  const { activeStack, toggleStack } = useFilter()

  return (
    <section
      id="proyectos"
      ref={ref}
      className={`section section--alt reveal ${isInView ? 'reveal--visible' : ''}`}
    >
      <h2 className="section__title">Proyectos</h2>
      <FilterBadge />
      <div className="projects-grid">
        {projects.map((project, i) => {
          const matches = activeStack
            ? project.stack.some((tech) => stackMatches(activeStack, tech))
            : true

          return (
            <article
              key={project.name}
              className={`project-card reveal ${i % 2 === 0 ? 'reveal--left' : 'reveal--right'} ${isInView ? 'reveal--visible' : ''} ${project.featured ? 'project-card--featured' : ''} ${!matches ? 'is-dimmed' : ''}`}
              style={{ transitionDelay: isInView ? `${i * 80}ms` : '0ms' }}
            >
              {project.featured && <span className="project-card__badge">Destacado</span>}
              {project.image && (
                <img
                  className="project-card__image"
                  src={project.image}
                  alt={`Captura de ${project.name}`}
                  loading="lazy"
                />
              )}
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.stack.map((tech) => {
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
              {project.link && (
                <a className="project-card__link" href={project.link} target="_blank" rel="noreferrer">
                  {project.link.includes('github.com') ? 'Ver repositorio →' : 'Ver proyecto →'}
                </a>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
