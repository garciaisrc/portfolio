export type ConceptIconKind = 'fullstack' | 'hex' | 'sparkle' | 'cloud' | 'database'

const common = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export default function ConceptIcon({ kind }: { kind: ConceptIconKind }) {
  switch (kind) {
    case 'fullstack':
      return (
        <svg {...common} aria-hidden="true">
          <polyline points="8 6 3 12 8 18" />
          <polyline points="16 6 21 12 16 18" />
        </svg>
      )
    case 'hex':
      return (
        <svg {...common} aria-hidden="true">
          <polygon points="12 2.5 20.1 7.25 20.1 16.75 12 21.5 3.9 16.75 3.9 7.25" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg {...common} fill="currentColor" stroke="none" aria-hidden="true">
          <path d="M12 2.5c.5 3.3 1.3 5.3 2.6 6.6 1.3 1.3 3.3 2.1 6.6 2.6-3.3.5-5.3 1.3-6.6 2.6-1.3 1.3-2.1 3.3-2.6 6.6-.5-3.3-1.3-5.3-2.6-6.6-1.3-1.3-3.3-2.1-6.6-2.6 3.3-.5 5.3-1.3 6.6-2.6 1.3-1.3 2.1-3.3 2.6-6.6Z" />
        </svg>
      )
    case 'cloud':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M7 18.5a4.3 4.3 0 0 1-.6-8.55 5.2 5.2 0 0 1 9.86-2.1 4.6 4.6 0 0 1 1.6 8.9c-.2.03-.4.05-.6.05H7Z" />
        </svg>
      )
    case 'database':
      return (
        <svg {...common} aria-hidden="true">
          <ellipse cx="12" cy="5.2" rx="7.2" ry="2.7" />
          <path d="M4.8 5.2v6.9c0 1.5 3.22 2.7 7.2 2.7s7.2-1.2 7.2-2.7V5.2" />
          <path d="M4.8 12.1v6.7c0 1.5 3.22 2.7 7.2 2.7s7.2-1.2 7.2-2.7v-6.7" />
        </svg>
      )
    default:
      return null
  }
}
