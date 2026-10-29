import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

type Bubble = {
  x: number
  y: number
  r: number
  speed: number
  drift: number
  phase: number
  alpha: number
}

const BUBBLE_COUNT = 70
const BUBBLE_RGB = '255, 255, 255'

function spawnBubble(width: number, height: number): Bubble {
  // Burbujas grandes = más lentas y tenues (profundidad), chicas = rápidas y nítidas.
  const r = 3 + Math.random() * Math.random() * 34
  const sizeFactor = r / 37
  return {
    x: Math.random() * width,
    y: height + Math.random() * height * 0.4,
    r,
    speed: (6 + Math.random() * 10) * (1.2 - sizeFactor * 0.6),
    drift: (Math.random() - 0.5) * 10,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.5 - sizeFactor * 0.32 + Math.random() * 0.12,
  }
}

export default function BubbleField({
  force,
  contained,
}: {
  force?: boolean
  contained?: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const active = force || theme === 'dark'

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    if (!canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let bubbles: Bubble[] = []
    let frameId = 0
    let lastTime = performance.now()
    let running = false

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      bubbles = Array.from({ length: BUBBLE_COUNT }, () => {
        const b = spawnBubble(width, height)
        b.y = Math.random() * height
        return b
      })
    }

    const draw = (time: number) => {
      if (!running) return
      const dt = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time
      ctx.clearRect(0, 0, width, height)
      for (const b of bubbles) {
        b.y -= b.speed * dt
        b.x += Math.sin(time / 1400 + b.phase) * b.drift * dt
        if (b.y < -b.r * 2) Object.assign(b, spawnBubble(width, height), { y: height + b.r * 2 })
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        gradient.addColorStop(0, `rgba(${BUBBLE_RGB}, ${b.alpha})`)
        gradient.addColorStop(0.7, `rgba(${BUBBLE_RGB}, ${b.alpha * 0.35})`)
        gradient.addColorStop(1, `rgba(${BUBBLE_RGB}, 0)`)
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fill()
      }
      frameId = requestAnimationFrame(draw)
    }

    const start = () => {
      if (running) return
      running = true
      lastTime = performance.now()
      frameId = requestAnimationFrame(draw)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(frameId)
    }

    resize()
    start()

    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', resize)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', resize)
    }
  }, [active])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      className={`bubble-field${contained ? ' bubble-field--contained' : ''}`}
      aria-hidden="true"
    />
  )
}
