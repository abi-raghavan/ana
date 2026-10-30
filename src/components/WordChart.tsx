import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import stats from '../data/stats.json'
import Reveal from './Reveal'

const words: [string, number][] = [
  ['honey', stats.honey],
  ['hearts', stats.hearts],
  ['baby', stats.baby],
  ['kisses', stats.kisses],
  ['miss', stats.miss],
]

const max = Math.max(...words.map(([, n]) => n))

function Bar({ label, count, index }: { label: string; count: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  return (
    <div ref={ref} className="grid grid-cols-[4.5rem_1fr_2.5rem] items-center gap-3">
      <span className="font-serif text-lg text-wine italic">{label}</span>
      <div className="h-3 overflow-hidden rounded-full bg-rose/15">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-rose to-wine"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${(count / max) * 100}%` : 0 }}
          transition={{ duration: 1.1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="text-right font-serif text-lg text-wine tabular-nums">{count}</span>
    </div>
  )
}

export default function WordChart() {
  return (
    <section className="slide">
      <Reveal className="text-center">
        <span className="eyebrow">6 May — 24 Oct 2026</span>
        <h2 className="mt-4 font-serif text-4xl font-light text-wine sm:text-5xl">The words we used</h2>
      </Reveal>

      <div className="mt-14 flex w-full max-w-md flex-col gap-5">
        {words.map(([label, count], i) => (
          <Bar key={label} label={label} count={count} index={i} />
        ))}
      </div>
    </section>
  )
}
