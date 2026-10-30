import { useMemo } from 'react'

const colors = ['#6b1f2a', '#c98b8b', '#f3e3df', '#9c4a56']

// Remount with a changing `burstKey` to trigger a new confetti burst.
export default function Confetti({ burstKey }: { burstKey: number | string }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.25,
        duration: 1.1 + Math.random() * 0.6,
        color: colors[i % colors.length],
        rotate: Math.random() * 90 - 45,
      })),
    [burstKey],
  )

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-40 overflow-hidden" aria-hidden>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}
