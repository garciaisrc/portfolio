import { skillGroups } from '../data/profile'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className={`section section--alt reveal ${isInView ? 'reveal--visible' : ''}`}
    >
      <h2 className="section__title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className={`skill-card reveal ${i % 2 === 0 ? 'reveal--left' : 'reveal--right'} ${isInView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: isInView ? `${i * 80}ms` : '0ms' }}
          >
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
