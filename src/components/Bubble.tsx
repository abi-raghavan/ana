import type { Quote } from '../data/moments'

export default function Bubble({ q, large = false }: { q: Quote; large?: boolean }) {
  const mine = q.sender === 'Abi'
  return (
    <div className={`flex flex-col ${mine ? 'items-end' : 'items-start'}`}>
      <div
        className={`max-w-[85%] whitespace-pre-line px-5 py-3 font-serif ${large ? 'text-2xl' : 'text-lg'} leading-snug ${
          mine
            ? 'rounded-2xl rounded-br-sm bg-wine text-ivory'
            : 'rounded-2xl rounded-bl-sm border border-rose/30 bg-white/60 text-ink'
        }`}
      >
        {q.text}
      </div>
      <span className="mt-1.5 px-1 text-[0.65rem] tracking-wider text-rose">
        {q.sender} · {q.date}
        {q.time ? ` · ${q.time}` : ''}
      </span>
    </div>
  )
}
