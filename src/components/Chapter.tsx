import type { Chapter as ChapterType } from '../data/moments'
import Bubble from './Bubble'
import PhotoPlaceholder from './PhotoPlaceholder'
import Reveal from './Reveal'

export default function Chapter({ chapter, index }: { chapter: ChapterType; index: number }) {
  const flip = index % 2 === 1

  return (
    <section className="slide">
      <div
        className={`grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-20 ${
          flip ? 'md:[&>*:first-child]:order-2' : ''
        }`}
      >
        <Reveal y={40}>
          <PhotoPlaceholder src={chapter.photo} className="aspect-[4/5] w-full shadow-[0_30px_60px_-30px_rgba(107,31,42,0.35)]" />
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">
              chapter {String(index + 1).padStart(2, '0')} · {chapter.month}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light text-wine italic sm:text-5xl">{chapter.title}</h2>
            <p className="mt-3 font-serif text-lg text-ink/60">{chapter.caption}</p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-5">
            {chapter.quotes.map((q, i) => (
              <Reveal key={i} delay={0.25 + i * 0.25}>
                <Bubble q={q} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
