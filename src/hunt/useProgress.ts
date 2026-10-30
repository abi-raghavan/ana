import { useEffect, useState } from 'react'

const KEY = 'hunt-progress-v2'

type Progress = {
  unlocked: number // index of the next stage to attempt (stages before this are solved)
  wheelResult: string | null
}

const initial: Progress = { unlocked: 0, wheelResult: null }

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return initial
    return { ...initial, ...JSON.parse(raw) }
  } catch {
    return initial
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(load)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(progress))
  }, [progress])

  const advance = () => setProgress((p) => ({ ...p, unlocked: p.unlocked + 1 }))
  const setWheelResult = (result: string) => setProgress((p) => ({ ...p, wheelResult: result }))
  const reset = () => {
    localStorage.removeItem(KEY)
    setProgress(initial)
  }

  return { progress, advance, setWheelResult, reset }
}
