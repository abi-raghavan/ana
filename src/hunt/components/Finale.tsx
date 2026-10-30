import { useState } from 'react'
import { motion } from 'framer-motion'
import { config } from '../../config'
import Confetti from './Confetti'

export default function Finale({ wheelResult }: { wheelResult: string | null }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative rounded-2xl border border-wine/20 bg-white/70 px-6 py-8 text-center shadow-[0_20px_50px_-30px_rgba(107,31,42,0.4)]">
      <Confetti burstKey="finale" />
      <span className="eyebrow">last stop</span>
      <h3 className="mt-2 font-serif text-3xl text-wine italic">You made it through the whole day</h3>
      {wheelResult && (
        <p className="mt-2 font-serif text-ink/70 italic">...and {wheelResult.toLowerCase()} is still coming.</p>
      )}

      <div className="relative mx-auto mt-8 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl bg-blush">
        {!playing ? (
          <button
            onClick={() => setPlaying(true)}
            className="group relative h-full w-full"
            aria-label="Play video"
          >
            <img
              src="media/surprise-poster.webp"
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory/90 text-wine shadow-lg">
                ▶
              </span>
            </span>
          </button>
        ) : (
          <video
            src="media/surprise.mp4"
            poster="media/surprise-poster.webp"
            controls
            playsInline
            autoPlay
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mx-auto mt-8 max-w-xs font-hand text-3xl text-wine"
      >
        {config.signoff}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-1 font-hand text-xl text-rose"
      >
        {config.signature}
      </motion.p>
    </div>
  )
}
