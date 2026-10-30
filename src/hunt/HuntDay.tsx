import { motion } from 'framer-motion'
import { config } from '../config'
import { stages, daysTogether } from './data'
import { useProgress } from './useProgress'
import StageCard from './components/StageCard'
import SpinWheel from './components/SpinWheel'
import Finale from './components/Finale'

export default function HuntDay() {
  const { progress, advance, setWheelResult, reset } = useProgress()
  const allStagesDone = progress.unlocked >= stages.length
  const doneCount = Math.min(progress.unlocked, stages.length)

  return (
    <section className="dot-grid relative bg-blush/30 px-5 py-24 opacity-100 [background-size:26px_26px]">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="eyebrow">🗺️ 31 october</span>
          <h2 className="mt-3 font-serif text-4xl font-light text-wine sm:text-5xl">Our Day</h2>
          <p className="mt-3 font-serif text-ink/60 italic">
            Day {daysTogether} — {config.me} &amp; {config.her}
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-rose/40">
            <span className="h-px w-10 bg-rose/30" />
            <span className="text-sm">♡</span>
            <span className="h-px w-10 bg-rose/30" />
          </div>

          <p className="mt-5 text-xs text-rose/70">One answer unlocks the next stop.</p>

          <div className="mx-auto mt-4 flex max-w-[220px] items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-rose/15">
              <motion.div
                className="h-full rounded-full bg-wine"
                initial={{ width: 0 }}
                animate={{ width: `${(doneCount / stages.length) * 100}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <span className="eyebrow !text-[0.55rem] whitespace-nowrap">
              {doneCount}/{stages.length} stops
            </span>
          </div>
        </motion.div>

        <div className="relative mt-12 pl-7 sm:pl-9">
          <div className="timeline-rail absolute top-2 left-[7px] h-[calc(100%-1rem)] sm:left-[9px]" aria-hidden />

          <div className="flex flex-col gap-10">
            {stages.map((stage, i) => {
              const status = i < progress.unlocked ? 'done' : i === progress.unlocked ? 'active' : 'locked'
              return (
                <div key={stage.id} className="relative">
                  <span
                    className={`absolute top-6 -left-7 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:-left-9 ${
                      status === 'locked'
                        ? 'border-rose/30 bg-ivory'
                        : 'border-wine bg-wine shadow-[0_0_0_4px_rgba(107,31,42,0.12)]'
                    }`}
                    aria-hidden
                  />
                  <StageCard stage={stage} index={i} status={status} onSolved={advance} />
                </div>
              )
            })}

            {allStagesDone && !progress.wheelResult && (
              <div className="relative">
                <span
                  className="absolute top-6 -left-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-wine bg-wine shadow-[0_0_0_4px_rgba(107,31,42,0.12)] sm:-left-9"
                  aria-hidden
                />
                <SpinWheel onDone={setWheelResult} />
              </div>
            )}

            {progress.wheelResult && (
              <div className="relative">
                <span
                  className="absolute top-6 -left-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-wine bg-wine text-[10px] text-ivory shadow-[0_0_0_4px_rgba(107,31,42,0.12)] sm:-left-9"
                  aria-hidden
                >
                  ♡
                </span>
                <Finale wheelResult={progress.wheelResult} />
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 text-rose/20">
          <span>✦</span>
          <button
            onClick={() => confirm('Restart the whole hunt from stop one?') && reset()}
            className="text-[10px] tracking-widest text-rose/30 uppercase hover:text-rose/60"
          >
            restart
          </button>
          <span>✦</span>
        </div>
      </div>
    </section>
  )
}
