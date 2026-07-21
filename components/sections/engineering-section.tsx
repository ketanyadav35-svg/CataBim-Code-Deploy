'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Check } from 'lucide-react'

const offerings = [
  'BIM Outsourcing',
  'Dedicated BIM Resources',
  'Offshore BIM Teams',
  'CAD to BIM Conversion',
  'Project-Based BIM Support',
  'BIM Consulting',
]

export function EngineeringSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="engineering" className="bg-background py-16 md:py-24">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-12"
      >
        <div
          className="relative order-last lg:order-first"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0) scale(1)' : 'translateX(-30px) scale(0.95)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl ring-1 ring-border">
            <Image
              src="/images/bim-mep.png"
              alt="MEP BIM coordination model showing color-coded ductwork, conduits, and pipes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Engineering &amp; Staffing
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Dedicated BIM resources that scale with you
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Extend your team with skilled, ready-to-deploy BIM professionals.
            Whether you need a single modeler or a full offshore studio, we
            provide reliable capacity that fits your workflow and budget.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {offerings.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
