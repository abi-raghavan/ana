import { config } from '../config'
import PhotoPlaceholder from './PhotoPlaceholder'
import Reveal from './Reveal'

const heights = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-square']

export default function Gallery() {
  return (
    <section className="slide">
      <Reveal className="text-center">
        <span className="eyebrow">us</span>
        <h2 className="mt-4 font-serif text-4xl font-light text-wine sm:text-5xl">Moments we kept</h2>
      </Reveal>

      <div className="mt-14 w-full max-w-5xl columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {config.gallery.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 0.15} className="break-inside-avoid">
            <PhotoPlaceholder
              src={src}
              className={`${heights[i % heights.length]} w-full transition duration-700 hover:scale-[1.02]`}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
