import { useEffect, useState } from 'react'

const VISIBLE_MS = 1700
const LEAVE_MS = 700

type Phase = 'hidden' | 'visible' | 'leaving'

function getInitialPhase(): Phase {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'hidden'
  return 'visible'
}

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>(getInitialPhase)

  useEffect(() => {
    if (phase === 'hidden') {
      onDone()
      return
    }
    if (phase === 'visible') {
      const id = window.setTimeout(() => setPhase('leaving'), VISIBLE_MS)
      return () => window.clearTimeout(id)
    }
    const id = window.setTimeout(onDone, LEAVE_MS)
    return () => window.clearTimeout(id)
    // Runs once per phase transition; onDone identity isn't expected to change mid-intro.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  if (phase === 'hidden') return null

  return (
    <div
      className={`intro-loader ${phase === 'leaving' ? 'intro-loader--leaving' : ''}`}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Cargando portafolio…</span>
      <div className="intro-loader__glow" aria-hidden="true" />
      <div className="intro-loader__mark" aria-hidden="true">
        GARCIAISRC
      </div>
      <div className="intro-loader__bar" aria-hidden="true">
        <span className="intro-loader__bar-fill" />
      </div>
    </div>
  )
}
