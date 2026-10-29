import { useEffect, useRef } from 'react'

type Ripple = {
  x: number
  y: number
  start: number
}

const DURATION_MS = 650
const MAX_RADIUS = 120
const MAX_CONCURRENT = 10
const RIPPLE_RGB = '255, 118, 0'

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export default function ClickRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Movimiento reducido: no se agrega ningún listener ni animación.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let ripples: Ripple[] = []
    let frameId = 0
    let running = false

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height)
      ripples = ripples.filter((r) => now - r.start < DURATION_MS)
      for (const r of ripples) {
        // now puede llegar levemente antes que r.start (desfase entre el
        // timestamp del evento de click y el del siguiente frame de rAF),
        // así que se acota a [0, 1] para que el radio nunca sea negativo.
        const t = Math.min(Math.max((now - r.start) / DURATION_MS, 0), 1)
        const eased = easeOutCubic(t)
        const radius = eased * MAX_RADIUS
        const alpha = (1 - t) * 0.35
        const gradient = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, radius)
        gradient.addColorStop(0, `rgba(${RIPPLE_RGB}, ${alpha})`)
        gradient.addColorStop(1, `rgba(${RIPPLE_RGB}, 0)`)
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
      if (ripples.length > 0) {
        frameId = requestAnimationFrame(draw)
      } else {
        running = false
      }
    }

    const start = () => {
      if (running) return
      running = true
      frameId = requestAnimationFrame(draw)
    }

    const onClick = (e: MouseEvent) => {
      if (ripples.length >= MAX_CONCURRENT) ripples.shift()
      ripples.push({ x: e.clientX, y: e.clientY, start: performance.now() })
      start()
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return <canvas ref={canvasRef} className="click-ripple" aria-hidden="true" />
}
