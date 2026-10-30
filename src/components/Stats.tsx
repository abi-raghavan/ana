import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import stats from '../data/stats.json'
import Reveal from './Reveal'

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 2.2, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])

  return <span ref={ref}>{n}</span>
}

const items: [number, string][] = [
  [stats.honey, 'honeys'],
  [stats.calls, 'calls'],
  [stats.photos, 'photos'],
  [stats.hearts, 'hearts'],
  [stats.kisses, 'kisses'],
  [stats.miss, 'missing yous'],
]

export default function Stats() {
  return (
    <section className="slide">
      <Reveal className="text-center">
        <span className="eyebrow">our story in numbers</span>
        <h2 className="mt-4 font-serif text-4xl font-light text-wine sm:text-5xl">
          Counted in little things
        </h2>
      </Reveal>

      <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-px bg-rose/20 sm:grid-cols-3">
        {items.map(([n, label], i) => (
          <Reveal key={label} delay={i * 0.12} className="bg-ivory px-4 py-10 text-center">
            <div className="font-serif text-5xl font-light text-wine sm:text-6xl">
              <CountUp to={n} />
            </div>
            <div className="eyebrow mt-3">{label}</div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.6} className="mt-12 text-center font-serif text-ink/70">
        <p>Us · 31 Oct 2021 — 31 Oct 2026</p>
        <p className="mt-1 text-ink/50 italic">Counted from our chat · 6 May 2026 — 24 Oct 2026</p>
      </Reveal>
    </section>
  )
}
