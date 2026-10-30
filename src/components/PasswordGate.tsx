import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'

const normalize = (s: string) => s.toLowerCase().replace(/[\s/.\-]/g, '')

export default function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [shake, setShake] = useState(0)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (normalize(value) === normalize(config.password)) {
      sessionStorage.setItem('unlocked', '1')
      onUnlock()
    } else {
      setShake((n) => n + 1)
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ivory/80 px-6 backdrop-blur-xl"
      exit={{ opacity: 0, filter: 'blur(12px)' }}
      transition={{ duration: 1.2 }}
    >
      <motion.form
        onSubmit={submit}
        className="flex w-full max-w-xs flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <span className="eyebrow">a little secret</span>
        <h1 className="mt-4 font-serif text-5xl font-light text-wine italic">Only for {config.her}</h1>
        <motion.input
          key={shake}
          animate={shake ? { x: [0, -8, 8, -5, 5, 0] } : undefined}
          transition={{ duration: 0.45 }}
          type="password"
          inputMode="numeric"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="••••••••"
          className="mt-10 w-full border-b border-rose/50 bg-transparent py-2 text-center font-serif text-2xl tracking-[0.4em] text-wine outline-none placeholder:text-rose/40 focus:border-wine"
        />
        <p className="mt-3 text-xs text-rose/80">hint: {config.passwordHint}</p>
        <button
          type="submit"
          className="mt-10 rounded-full border border-wine/30 px-8 py-2 text-xs tracking-[0.3em] text-wine uppercase transition hover:bg-wine hover:text-ivory"
        >
          open ♡
        </button>
      </motion.form>
    </motion.div>
  )
}
