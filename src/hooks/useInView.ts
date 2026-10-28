import { useEffect, useRef, useState } from 'react'

const DEFAULT_OPTIONS: IntersectionObserverInit = { threshold: 0.15 }

export function useInView<T extends HTMLElement>(options: IntersectionObserverInit = DEFAULT_OPTIONS) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // Mount-only: re-observing on every options identity change isn't needed here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, isInView }
}
