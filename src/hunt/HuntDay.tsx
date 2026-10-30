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

  return (
    <section className="bg-blush/30 px-5 py-24">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="eyebrow">31 october</span>
          <h2 className="mt-3 font-serif text-4xl font-light text-wine sm:text-5xl">Our Day</h2>
          <p className="mt-3 font-serif text-ink/60 italic">
            Day {daysTogether} — {config.me} &amp; {config.her}
          </p>
          <p className="mt-4 text-xs text-rose/70">One answer unlocks the next stop.</p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4">
          {stages.map((stage, i) => (
            <StageCard
              key={stage.id}
              stage={stage}
              index={i}
              status={i < progress.unlocked ? 'done' : i === progress.unlocked ? 'active' : 'locked'}
              onSolved={advance}
            />
          ))}

          {allStagesDone && !progress.wheelResult && <SpinWheel onDone={setWheelResult} />}
          {progress.wheelResult && <Finale wheelResult={progress.wheelResult} />}
        </div>

        <button
          onClick={() => confirm('Restart the whole hunt from stop one?') && reset()}
          className="mx-auto mt-16 block text-[10px] tracking-widest text-rose/30 uppercase hover:text-rose/60"
        >
          restart
        </button>
      </div>
    </section>
  )
}
