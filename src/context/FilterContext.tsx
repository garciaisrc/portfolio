import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type FilterContextValue = {
  activeStack: string | null
  toggleStack: (stack: string) => void
}

const FilterContext = createContext<FilterContextValue | null>(null)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [activeStack, setActiveStack] = useState<string | null>(null)

  const value = useMemo<FilterContextValue>(
    () => ({
      activeStack,
      toggleStack: (stack: string) =>
        setActiveStack((current) => (current === stack ? null : stack)),
    }),
    [activeStack],
  )

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}

export function useFilter() {
  const ctx = useContext(FilterContext)
  if (!ctx) throw new Error('useFilter must be used within a FilterProvider')
  return ctx
}

/** Matches loosely so compound skill labels (e.g. "Java · Spring Boot") still
 * match simpler stack tags (e.g. "Java") used elsewhere, without renaming data. */
export function stackMatches(a: string, b: string): boolean {
  const an = a.toLowerCase().trim()
  const bn = b.toLowerCase().trim()
  return an === bn || bn.includes(an) || an.includes(bn)
}

export function FilterBadge() {
  const { activeStack, toggleStack } = useFilter()
  if (!activeStack) return null

  return (
    <p className="filter-badge">
      Filtrando por <strong>{activeStack}</strong>{' '}
      <button
        type="button"
        className="filter-badge__clear"
        onClick={() => toggleStack(activeStack)}
      >
        Ver todo ✕
      </button>
    </p>
  )
}
