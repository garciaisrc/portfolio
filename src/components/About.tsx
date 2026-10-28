import { profile, certifications, education } from '../data/profile'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className={`section reveal ${isInView ? 'reveal--visible' : ''}`}
    >
      <h2 className="section__title">Sobre mí</h2>
      <div className="about">
        <p className="about__summary">{profile.summary}</p>
        <div className="about__grid">
          <div
            className={`reveal reveal--left ${isInView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: isInView ? '80ms' : '0ms' }}
          >
            <h4>Formación académica</h4>
            <ul className="plain-list">
              {education.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>
                    {item.institution} · {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`reveal reveal--right ${isInView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: isInView ? '160ms' : '0ms' }}
          >
            <h4>Certificaciones</h4>
            <ul className="plain-list">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
