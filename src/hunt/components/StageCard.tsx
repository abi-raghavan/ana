import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { asset } from '../../asset'
import type { Stage } from '../data'
import { isCorrect } from '../utils'
import Confetti from './Confetti'

type Status = 'locked' | 'active' | 'done'

export default function StageCard({
  stage,
  index,
  status,
  onSolved,
}: {
  stage: Stage
  index: number
  status: Status
  onSolved: () => void
}) {
  const [value, setValue] = useState('')
  const [shake, setShake] = useState(0)
  const [justSolved, setJustSolved] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (isCorrect(value, stage.accept, stage.type)) {
      setJustSolved(true)
    } else {
      setShake((n) => n + 1)
    }
  }

  if (status === 'locked') {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-dashed border-rose/25 bg-white/20 px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose/10 text-base opacity-40 grayscale">
          {stage.emoji}
        </span>
        <span className="font-serif text-lg text-rose/50">{stage.time}</span>
        <span className="eyebrow !text-[0.6rem] text-rose/40">to be unlocked</span>
        <span className="ml-auto text-rose/40">🔒</span>
      </div>
    )
  }

  if (status === 'done') {
    return (
      <div className="overflow-hidden rounded-2xl border border-rose/20 bg-white/50">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex w-full items-center gap-4 px-5 py-4 text-left"
        >
          <span className="stamp-ring flex h-9 w-9 items-center justify-center rounded-full bg-blush text-base">
            {stage.emoji}
          </span>
          <span className="font-serif text-lg text-wine">{stage.time}</span>
          <span className="font-serif text-ink/70">{stage.title}</span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-wine text-[10px] text-ivory">
            ✓
          </span>
        </button>
        {expanded && (
          <div className="border-t border-dashed border-rose/15 px-5 py-5">
            {stage.photo && (
              <div className="polaroid relative mb-4 w-fit rotate-[-1.5deg]">
                <span className="tape" aria-hidden />
                <img
                  src={asset(stage.photo)}
                  alt=""
                  loading="lazy"
                  className="h-40 w-32 rounded-sm object-cover sm:h-48 sm:w-40"
                />
              </div>
            )}
            {stage.reveal.map((line, i) => (
              <p key={i} className="font-serif text-ink/70 italic">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    )
  }

  // active
  return (
    <div className="relative overflow-hidden rounded-2xl border border-wine/20 bg-white/70 px-6 py-7 shadow-[0_20px_50px_-30px_rgba(107,31,42,0.4)]">
      {justSolved && <Confetti burstKey={stage.id} />}
      <div className="flex items-center gap-3">
        <span className="stamp-ring flex h-10 w-10 items-center justify-center rounded-full bg-blush text-xl">
          {stage.emoji}
        </span>
        <span className="font-serif text-lg text-wine">{stage.time}</span>
        <span className="eyebrow !text-[0.6rem]">
          {stage.title} · {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {!justSolved ? (
        <form onSubmit={submit} className="mt-5">
          <div className="border-t border-dashed border-rose/20 pt-5">
            <p className="font-serif text-xl text-ink">{stage.question}</p>
          </div>
          <motion.input
            key={shake}
            animate={shake ? { x: [0, -8, 8, -5, 5, 0] } : undefined}
            transition={{ duration: 0.45 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="your answer"
            className="mt-5 w-full border-b border-rose/40 bg-transparent py-2 font-serif text-lg text-wine outline-none placeholder:text-rose/40 focus:border-wine"
          />
          <div className="mt-4 flex items-center gap-4">
            <button
              type="submit"
              className="rounded-full border border-wine/30 px-6 py-2 text-xs tracking-[0.25em] text-wine uppercase transition hover:bg-wine hover:text-ivory"
            >
              unlock ♡
            </button>
            <details className="text-xs text-rose/80">
              <summary className="cursor-pointer select-none">hint</summary>
              <span className="mt-1 block italic">{stage.hint}</span>
            </details>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-5 border-t border-dashed border-rose/20 pt-5"
        >
          {stage.photo && (
            <motion.div
              initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -1.5, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="polaroid relative mb-5 w-fit"
            >
              <span className="tape" aria-hidden />
              <img
                src={asset(stage.photo)}
                alt=""
                loading="lazy"
                className="h-44 w-36 rounded-sm object-cover sm:h-52 sm:w-44"
              />
            </motion.div>
          )}
          {stage.reveal.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.3, duration: 0.8 }}
              className="font-serif text-xl text-ink italic"
            >
              {line}
            </motion.p>
          ))}
          <button
            onClick={onSolved}
            className="mt-6 rounded-full bg-wine px-6 py-2 text-xs tracking-[0.25em] text-ivory uppercase transition hover:opacity-90"
          >
            next stop →
          </button>
        </motion.div>
      )}
    </div>
  )
}
