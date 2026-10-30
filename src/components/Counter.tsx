import { useEffect, useState } from 'react'
import { config } from '../config'

function diff(from: Date) {
  const ms = Math.max(0, Date.now() - from.getTime())
  const s = Math.floor(ms / 1000)
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

export default function Counter() {
  const [t, setT] = useState(() => diff(new Date(config.startDate)))

  useEffect(() => {
    const start = new Date(config.startDate)
    const id = setInterval(() => setT(diff(start)), 1000)
    return () => clearInterval(id)
  }, [])

  const units: [number, string][] = [
    [t.days, 'days'],
    [t.hours, 'hours'],
    [t.minutes, 'minutes'],
    [t.seconds, 'seconds'],
  ]

  return (
    <div className="flex items-end gap-6 sm:gap-10">
      {units.map(([n, label]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-serif text-4xl font-light text-wine tabular-nums sm:text-5xl">
            {String(n).padStart(2, '0')}
          </span>
          <span className="eyebrow mt-1 !text-[0.6rem]">{label}</span>
        </div>
      ))}
    </div>
  )
}
