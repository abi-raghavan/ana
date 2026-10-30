import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PasswordGate from '../components/PasswordGate'
import HuntDay from './HuntDay'

export default function HuntApp() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('unlocked') === '1')

  if (!unlocked) {
    return (
      <AnimatePresence>
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      </AnimatePresence>
    )
  }

  return (
    <main className="min-h-svh">
      <HuntDay />
    </main>
  )
}
