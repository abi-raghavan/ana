import { careMessages } from '../data/moments'
import Bubble from './Bubble'
import Reveal from './Reveal'

export default function CareSection() {
  return (
    <section className="slide bg-blush/40">
      <Reveal className="text-center">
        <span className="eyebrow">the way you care</span>
        <h2 className="mt-4 font-serif text-4xl font-light text-wine sm:text-5xl">
          You just ask
        </h2>
        <p className="mx-auto mt-4 max-w-md font-serif text-lg text-ink/60 italic">
          Tired ano. Kedano. Payye vannal mathi.
        </p>
      </Reveal>

      <div className="mt-14 flex w-full max-w-md flex-col gap-4">
        {careMessages.map((q, i) => (
          <Reveal key={i} delay={i * 0.15} y={12}>
            <Bubble q={q} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
