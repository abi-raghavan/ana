import { motion } from 'framer-motion'
import { config } from '../config'
import Reveal from './Reveal'

export default function LoveLetter() {
  return (
    <section className="slide">
      <Reveal className="text-center">
        <span className="eyebrow">a letter</span>
      </Reveal>

      <div className="relative mt-10 w-full max-w-xl border border-rose/20 bg-white/50 px-8 py-14 shadow-[0_40px_80px_-40px_rgba(107,31,42,0.3)] sm:px-14">
        {config.letter.map((line, i) => (
          <motion.p
            key={i}
            className={`font-hand text-2xl leading-relaxed text-ink sm:text-[1.7rem] ${i === 0 ? 'mb-6 text-wine' : 'mb-4'}`}
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.4, delay: i * 0.7 }}
          >
            {line}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: config.letter.length * 0.7 + 0.3 }}
          className="mt-10 text-right"
        >
          <p className="font-hand text-4xl text-wine">{config.signoff}</p>
          <p className="mt-2 font-hand text-2xl text-rose">{config.signature}</p>
        </motion.div>
      </div>

      <Reveal delay={0.4} className="mt-20 text-center">
        <motion.span
          className="inline-block font-serif text-4xl text-rose"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          ♡
        </motion.span>
        <p className="eyebrow mt-4">
          {config.me} &amp; {config.her} · forever
        </p>
      </Reveal>
    </section>
  )
}
