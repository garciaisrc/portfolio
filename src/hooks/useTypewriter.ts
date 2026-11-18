import { useEffect, useState } from 'react'

const TYPE_MS = 65
const DELETE_MS = 35
const HOLD_MS = 1600
const PAUSE_MS = 300

export function useTypewriter(words: string[]) {
  const [text, setText] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? words[0] ?? '' : '',
  )

  useEffect(() => {
    if (words.length === 0) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }

    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId: number

    const tick = () => {
      const current = words[wordIndex]

      if (!deleting) {
        charIndex++
        setText(current.slice(0, charIndex))
        if (charIndex === current.length) {
          deleting = true
          timeoutId = window.setTimeout(tick, HOLD_MS)
          return
        }
        timeoutId = window.setTimeout(tick, TYPE_MS)
        return
      }

      charIndex--
      setText(current.slice(0, charIndex))
      if (charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        timeoutId = window.setTimeout(tick, PAUSE_MS)
        return
      }
      timeoutId = window.setTimeout(tick, DELETE_MS)
    }

    timeoutId = window.setTimeout(tick, TYPE_MS)
    return () => window.clearTimeout(timeoutId)
    // Mount-only: `words` is a stable module-level array in practice.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return text
}
