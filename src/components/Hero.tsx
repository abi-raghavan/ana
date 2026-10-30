import { motion } from 'framer-motion'
import { config } from '../config'
import Counter from './Counter'

export default function Hero() {
  return (
    <section className="slide text-center">
      <motion.span
        className="eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        happy anniversary
      </motion.span>

      <motion.h1
        className="mt-6 font-serif text-6xl font-light text-wine sm:text-8xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.5 }}
      >
        {config.me} <span className="italic text-rose">&amp;</span> {config.her}
      </motion.h1>

      <motion.svg
        width="220"
        height="40"
        viewBox="0 0 220 40"
        fill="none"
        className="mt-8 text-rose"
      >
        <motion.path
          d="M0 20 H85 C90 20 92 8 100 8 C106 8 110 14 110 18 C110 14 114 8 120 8 C128 8 130 20 135 20 H220 M110 18 C110 26 104 30 110 34 C116 30 110 26 110 18"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, delay: 1, ease: 'easeInOut' }}
        />
      </motion.svg>

      <motion.p
        className="mt-8 max-w-md font-serif text-xl text-ink/70 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      >
        Five years of us.
      </motion.p>

      <motion.div
        className="mt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.4 }}
      >
        <Counter />
        <p className="eyebrow mt-6 !text-[0.6rem]">and counting, together</p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-rose"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <span className="text-xs tracking-[0.3em]">scroll ↓</span>
      </motion.div>
    </section>
  )
}
