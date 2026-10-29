export const profile = {
  name: 'Israel Garcia Cruz',
  role: 'Ingeniero de Software · Full Stack Developer',
  tagline:
    'Construyo soluciones backend y frontend escalables, con foco en arquitecturas event-driven, automatización y agentes de IA. Aplico arquitectura hexagonal y Domain-Driven Design (DDD) para mantener el dominio del negocio desacoplado de frameworks e infraestructura, con código testeable, mantenible y preparado para escalar en el tiempo.',
  summary:
    'Profesional con experiencia en empresas del sector TI, enfocado en la implementación y gestión de soluciones empresariales, con amplia trayectoria en sistemas de información y automatización de procesos. Me caracterizo por ser una persona comprometida, responsable y honesta, con gran capacidad de aprendizaje y adaptación. Disfruto asumir nuevos retos y creo que la constancia, el esfuerzo y el trabajo en equipo son fundamentales para alcanzar objetivos y aportar valor en cada proyecto en el que participo.',
  email: 'garciaisrc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/israel-garcia-cruz-21912b260',
  github: 'https://github.com/garciaisrc',
}

export type HeroSlide = {
  eyebrow?: string
  title?: string
  subtitle?: string
  text: string
}

export const heroSlides: HeroSlide[] = [
  {
    subtitle: profile.role,
    text: profile.tagline,
  },
  {
    eyebrow: 'Arquitectura',
    title: 'Hexagonal + DDD',
    text: 'Diseño sistemas con el dominio de negocio aislado de frameworks y bases de datos, usando Domain-Driven Design y arquitecturas orientadas a eventos para construir software desacoplado, testeable y fácil de evolucionar.',
  },
  {
    eyebrow: 'Proyecto destacado',
    title: 'Jaznex Dental',
    text: 'SaaS para gestión de clínicas dentales: backend en Laravel 11 con PostgreSQL y frontend en Angular 18, dockerizado y publicado mediante Cloudflare Tunnel.',
  },
]

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['Angular', 'React', 'TypeScript'] },
  { title: 'Backend', items: ['Java · Spring Boot', 'PHP · Laravel', 'Node.js', 'APIs RESTful'] },
  { title: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'Oracle · PL/SQL', 'MongoDB', 'SQL Server'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Nginx', 'Git / GitHub'] },
  {
    title: 'Arquitectura',
    items: ['Arquitectura Hexagonal', 'Domain-Driven Design (DDD)', 'Event-Driven Architecture', 'Function-as-a-Service'],
  },
  { title: 'IA', items: ['LLM Harness', 'Agentes de IA'] },
  { title: 'Monitoreo & Calidad', items: ['Kibana', 'Dynatrace', 'Datadog', 'JUnit', 'Swagger'] },
]

export type Experience = {
  company: string
  role: string
  period: string
  bullets: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'Damatech – Health & Life IPS',
    role: 'Desarrollador de Software',
    period: 'Dic 2025 – Sep 2026',
    bullets: [
      'Diseño, desarrollo y mantenimiento de soluciones full stack: APIs backend en Java y frontend en Angular.',
      'Arquitecturas orientadas a eventos y Function-as-a-Service para servicios desacoplados y escalables.',
      'Gestión de bases de datos MySQL y PostgreSQL: modelado, consultas, optimización y mantenimiento.',
      'Implementación de LLM Harness y agentes de IA para automatizar procesos e integrar modelos de lenguaje.',
      'Control de versiones con Git y configuración de entornos de despliegue con Nginx.',
    ],
    stack: ['Angular', 'Java', 'Laravel', 'PostgreSQL', 'MySQL', 'Node.js'],
  },
  {
    company: 'Global Hitss – Claro Colombia',
    role: 'Analista Soporte DBA',
    period: 'Feb 2019 – Ago 2025',
    bullets: [
      'Soporte a procesos ETL en SQL sobre Linux y AIX, asegurando calidad y confiabilidad.',
      'Gestión de bases de datos en entornos cloud (AWS) y on-premise (IBM, HPE).',
      'Desarrollo en PHP (Laravel) y Java Spring Boot; administración de Oracle, MySQL y MongoDB.',
      'Monitoreo y observabilidad con Kibana, Dynatrace y Datadog para optimizar infraestructura.',
      'Implementación de APIs RESTful, pruebas unitarias con JUnit y documentación con Swagger.',
    ],
    stack: ['Oracle', 'PL/SQL', 'SQL', 'Kibana', 'Azure', 'Postman'],
  },
  {
    company: 'Axity',
    role: 'Analista BPO 1 Commissions',
    period: 'Ago 2016 – Feb 2019',
    bullets: [
      'Administración de SO Unix y procesos ETL contables en Oracle, supervisando facturación.',
      'Gestión de sistemas financieros desarrollados en Node.js.',
      'Manejo de BMC Remedy para incidencias y cambios, cumpliendo SLA/ANS acordados.',
    ],
    stack: ['Git', 'Oracle', 'Unix', 'Jira', 'Bitbucket', 'MongoDB', 'Azure'],
  },
]

export type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  featured?: boolean
  image?: string
}

export const projects: Project[] = [
  {
    name: 'Jaznex Dental',
    description:
      'SaaS para gestión de clínicas dentales: backend en Laravel 11 con PostgreSQL y frontend en Angular 18, dockerizado y publicado mediante Cloudflare Tunnel.',
    stack: ['Laravel', 'Angular', 'PostgreSQL', 'Docker', 'Nginx'],
    link: 'https://garciatechnology.online/auth/login',
    featured: true,
  },
  {
    name: 'Reactive Scaffold Usercredit',
    description:
      'Proyecto base con arquitectura Hexagonal y patrones DDD, backend reactivo en Java con Spring WebFlux y conexión a base de datos relacional vía R2DBC.',
    stack: ['Java', 'Spring WebFlux', 'R2DBC', 'Docker'],
    link: 'https://github.com/garciaisrc/reactive-scaffold-usercredit',
  },
  {
    name: 'User Report',
    description: 'Reporte de usuarios implementado como monolito en Laravel (PHP) con vistas Blade.',
    stack: ['Laravel', 'PHP', 'Blade'],
    link: 'https://github.com/garciaisrc/user-report',
  },
  {
    name: 'VotMVC',
    description: 'Sistema de votación con arquitectura MVC, desarrollado en Python.',
    stack: ['Python', 'MVC'],
    link: 'https://github.com/garciaisrc/VotMVC',
  },
  {
    name: 'Inventario',
    description:
      'Gestión de inventarios con arquitectura MVC y patrones DAO/DTO, backend en Java con PostgreSQL vía JDBC.',
    stack: ['Java', 'MVC', 'PostgreSQL', 'JDBC'],
    link: 'https://github.com/garciaisrc/Inventario',
  },
]

export type EducationItem = {
  title: string
  institution: string
  year: string
}

export const education: EducationItem[] = [
  { title: 'Ingeniería de Software', institution: 'Universidad Politécnico Grancolombiano', year: '2022' },
  {
    title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
    institution: 'Formación Tecnológica SENA',
    year: '2017',
  },
  { title: 'Técnico en Mantenimiento de Equipos de Cómputo', institution: 'Formación Técnica SENA', year: '2012' },
]

export const certifications: string[] = [
  'ITIL Foundation Certificate 4th Edition — PeopleCert',
  'Diplomado en Desarrollo de Software — Universidad Nacional',
  'Diplomado en Fundamentos de Programación — Universidad Nacional',
]
