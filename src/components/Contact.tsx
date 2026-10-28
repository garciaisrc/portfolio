import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h4v11.52H3zM9.5 8.98H13v1.57h.05c.5-.9 1.7-1.85 3.5-1.85 3.75 0 4.45 2.3 4.45 5.3v6.5h-4v-5.76c0-1.37-.03-3.13-1.9-3.13-1.9 0-2.2 1.5-2.2 3.03v5.86h-4V8.98Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.17c0 4.47 2.87 8.26 6.84 9.6.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.21-3.37-1.21-.46-1.17-1.11-1.48-1.11-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.55 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.17C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  )
}

export default function Contact() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section
      id="contacto"
      ref={ref}
      className={`section reveal ${isInView ? 'reveal--visible' : ''}`}
    >
      <h2 className="section__title">Contacto</h2>
      <div className="contact">
        <p>¿Tienes un proyecto en mente o una oportunidad? Escríbeme.</p>
        <div className="contact__links">
          <a
            className={`btn btn--primary reveal ${isInView ? 'reveal--visible' : ''}`}
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <a
            className={`btn btn--ghost reveal ${isInView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: isInView ? '80ms' : '0ms' }}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={`btn btn--ghost reveal ${isInView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: isInView ? '160ms' : '0ms' }}
            href={profile.cvFile}
            download
          >
            Descargar CV
          </a>
        </div>
        <div className="contact__socials">
          <a
            className={`social-icon reveal ${isInView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: isInView ? '240ms' : '0ms' }}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            className={`social-icon reveal ${isInView ? 'reveal--visible' : ''}`}
            style={{ transitionDelay: isInView ? '320ms' : '0ms' }}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
