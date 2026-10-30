import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import PasswordGate from './components/PasswordGate'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Chapter from './components/Chapter'
import CareSection from './components/CareSection'
import WordChart from './components/WordChart'
import Gallery from './components/Gallery'
import LoveLetter from './components/LoveLetter'
import HuntDay from './hunt/HuntDay'
import { chapters } from './data/moments'

export default function App() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('unlocked') === '1')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })

  return (
    <>
      <AnimatePresence>{!unlocked && <PasswordGate onUnlock={() => setUnlocked(true)} />}</AnimatePresence>

      {unlocked && (
        <main>
          <motion.div
            className="fixed inset-x-0 top-0 z-40 h-px origin-left bg-wine/60"
            style={{ scaleX: progress }}
          />
          <Hero />
          <Stats />
          {chapters.map((c, i) => (
            <Chapter key={c.month} chapter={c} index={i} />
          ))}
          <CareSection />
          <WordChart />
          <Gallery />
          <LoveLetter />
          <HuntDay />
        </main>
      )}
    </>
  )
}
