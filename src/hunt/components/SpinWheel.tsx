import { useState } from 'react'
import { motion } from 'framer-motion'
import { wheelOptions } from '../data'
import Confetti from './Confetti'

const colors = ['#6b1f2a', '#c98b8b']
const slice = 360 / wheelOptions.length

export default function SpinWheel({ onDone }: { onDone: (result: string) => void }) {
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const background = `conic-gradient(${wheelOptions
    .map((_, i) => `${colors[i % 2]} ${i * slice}deg ${(i + 1) * slice}deg`)
    .join(', ')})`

  const spin = () => {
    if (spinning || result) return
    setSpinning(true)
    const index = Math.floor(Math.random() * wheelOptions.length)
    const center = index * slice + slice / 2
    const extraSpins = 5 + Math.floor(Math.random() * 2)
    const target = extraSpins * 360 - center
    setRotation(target)
    setTimeout(() => {
      setSpinning(false)
      setResult(wheelOptions[index])
    }, 3200)
  }

  return (
    <div className="relative rounded-2xl border border-wine/20 bg-white/70 px-6 py-8 text-center shadow-[0_20px_50px_-30px_rgba(107,31,42,0.4)]">
      {result && <Confetti burstKey="wheel" />}
      <span className="eyebrow">bonus round</span>
      <h3 className="mt-2 font-serif text-2xl text-wine italic">Spin for tonight's surprise</h3>

      <div className="relative mx-auto mt-8 h-56 w-56">
        <span className="absolute -top-3 -left-3 text-rose/50">✦</span>
        <span className="absolute -top-3 -right-3 text-rose/50">✦</span>
        <span className="absolute -bottom-2 -left-4 text-rose/40">✧</span>
        <span className="absolute -right-4 -bottom-2 text-rose/40">✧</span>
        <div
          className="absolute -top-2 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-x-8 border-t-[14px] border-x-transparent border-t-wine"
          aria-hidden
        />
        <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-rose/25" aria-hidden />
        <motion.div
          className="h-full w-full rounded-full border-4 border-ivory shadow-inner"
          style={{ background }}
          animate={{ rotate: rotation }}
          transition={{ duration: 3.2, ease: [0.12, 0, 0.08, 1] }}
        >
          {wheelOptions.map((label, i) => {
            const angle = i * slice + slice / 2
            return (
              <div
                key={label}
                className="absolute top-1/2 left-1/2 h-0 w-0"
                style={{ transform: `rotate(${angle}deg) translate(0, -78px)` }}
              >
                <span
                  className="block w-20 -translate-x-1/2 text-center text-[0.6rem] leading-tight font-medium tracking-tight text-ivory"
                  style={{ transform: `rotate(${-angle}deg)` }}
                >
                  {label}
                </span>
              </div>
            )
          })}
        </motion.div>
        <div className="absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-rose shadow">
          ♡
        </div>
      </div>

      {!result ? (
        <button
          onClick={spin}
          disabled={spinning}
          className="mt-8 rounded-full border border-wine/30 px-8 py-2 text-xs tracking-[0.25em] text-wine uppercase transition hover:bg-wine hover:text-ivory disabled:opacity-50"
        >
          {spinning ? 'spinning…' : 'spin the wheel'}
        </button>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8">
          <p className="font-serif text-xl text-wine italic">You landed on: {result}</p>
          <button
            onClick={() => onDone(result)}
            className="mt-5 rounded-full bg-wine px-6 py-2 text-xs tracking-[0.25em] text-ivory uppercase transition hover:opacity-90"
          >
            one last thing →
          </button>
        </motion.div>
      )}
    </div>
  )
}
