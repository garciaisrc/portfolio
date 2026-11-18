import type { CSSProperties } from 'react'
import ConceptIcon from './ConceptIcon'
import { brandIconMap, genericIconMap } from './techIcons'

export default function SkillIcon({ name }: { name: string }) {
  const brand = brandIconMap[name]
  if (brand) {
    return (
      <span
        className="skill-icon skill-icon--brand"
        style={{ color: `#${brand.hex}` } as CSSProperties}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={brand.path} />
        </svg>
      </span>
    )
  }

  const kind = genericIconMap[name]
  if (kind) {
    return (
      <span className="skill-icon skill-icon--generic">
        <ConceptIcon kind={kind} />
      </span>
    )
  }

  return null
}
