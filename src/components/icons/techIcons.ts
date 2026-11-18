import {
  siAngular,
  siReact,
  siTypescript,
  siSpringboot,
  siLaravel,
  siNodedotjs,
  siPostgresql,
  siMysql,
  siMongodb,
  siDocker,
  siNginx,
  siGit,
  siKibana,
  siDynatrace,
  siDatadog,
  siJunit5,
  siSwagger,
} from 'simple-icons'
import type { ConceptIconKind } from './ConceptIcon'

export type BrandIcon = { path: string; hex: string }

/** Skill label (as used in `skillGroups`) -> official brand icon, for a real logo instead of plain text.
 * Angular's current brand color (#0F0F11) is near-black and invisible glowing on a dark card, so it
 * keeps the official logo shape but uses the classic, more legible Angular red instead. */
export const brandIconMap: Record<string, BrandIcon> = {
  Angular: { path: siAngular.path, hex: 'DD0031' },
  React: siReact,
  TypeScript: siTypescript,
  'Java · Spring Boot': siSpringboot,
  'PHP · Laravel': siLaravel,
  'Node.js': siNodedotjs,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Docker: siDocker,
  Nginx: siNginx,
  'Git / GitHub': siGit,
  Kibana: siKibana,
  Dynatrace: siDynatrace,
  Datadog: siDatadog,
  JUnit: siJunit5,
  Swagger: siSwagger,
}

/** Skills/concepts with no official brand mark (architecture patterns, AWS/Oracle/SQL Server which
 * simple-icons no longer ships for trademark reasons) fall back to a generic concept glyph. */
export const genericIconMap: Record<string, ConceptIconKind> = {
  'APIs RESTful': 'fullstack',
  AWS: 'cloud',
  'Oracle · PL/SQL': 'database',
  'SQL Server': 'database',
  'Arquitectura Hexagonal': 'hex',
  'Domain-Driven Design (DDD)': 'hex',
  'Event-Driven Architecture': 'hex',
  'Function-as-a-Service': 'hex',
  'LLM Harness': 'sparkle',
  'Agentes de IA': 'sparkle',
}
