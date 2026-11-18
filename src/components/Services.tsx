import { services } from '../data/profile'
import { useInView } from '../hooks/useInView'
import ConceptIcon from './icons/ConceptIcon'

export default function Services() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="servicios"
      ref={ref}
      className={`section section--alt reveal ${isInView ? 'reveal--visible' : ''}`}
    >
      <h2 className="section__title">Servicios</h2>
      <div className="services-grid">
        {services.map((service, i) => (
          <div
            key={service.title}
            className={`service-card reveal ${i % 2 === 0 ? 'reveal--left' : 'reveal--right'} ${isInView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: isInView ? `${i * 80}ms` : '0ms' }}
          >
            <span className="service-card__icon">
              <ConceptIcon kind={service.icon} />
            </span>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
