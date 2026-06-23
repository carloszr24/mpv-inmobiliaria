'use client'

import { ReviewsCarousel } from '@/components/home/ReviewsCarousel'

const stats = [
  { value: '+300', label: 'propiedades vendidas' },
  { value: '< 60 días', label: 'tiempo medio de cierre' },
  { value: '4,9/5', label: '+200 reseñas positivas' },
]

export function ClientFirstSection() {
  return (
    <section id="contenido" className="bg-stone-50 py-20 md:py-24 px-6 md:px-10 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-14">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm sm:grid-cols-3 sm:gap-0 sm:p-2">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center rounded-xl px-6 py-5 text-center ${
                  idx !== 2 ? 'sm:border-r sm:border-stone-200' : ''
                }`}
              >
                <p className="font-display text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <ReviewsCarousel embedded />
      </div>
    </section>
  )
}
