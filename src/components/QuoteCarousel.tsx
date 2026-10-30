import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { littleWords } from '../data/moments'
import Reveal from './Reveal'

export default function QuoteCarousel() {
  return (
    <section className="slide">
      <Reveal className="text-center">
        <span className="eyebrow">little words</span>
        <h2 className="mt-4 font-serif text-4xl font-light text-wine sm:text-5xl">The things you say</h2>
      </Reveal>

      <Reveal delay={0.3} className="mt-12 w-full max-w-2xl">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="!pb-14"
        >
          {littleWords.map((q, i) => (
            <SwiperSlide key={i}>
              <figure className="flex min-h-64 flex-col items-center justify-center bg-ivory px-6 text-center">
                <span className="font-serif text-6xl leading-none text-rose/40">“</span>
                <blockquote className="font-serif text-3xl font-light text-wine italic sm:text-4xl">
                  {q.text}
                </blockquote>
                <figcaption className="eyebrow mt-6">
                  {q.sender} · {q.date}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  )
}
