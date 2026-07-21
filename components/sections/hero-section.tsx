'use client'

import Image from 'next/image'
import { Phone, Mail, Globe } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Button } from '@/components/ui/button-catabim'
import { site } from '@/lib/site'

const highlights = ['LOD 100–500', 'Clash-Free Coordination', 'Scan to BIM', '4D / 5D BIM']

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-12"
      >
        <div className="flex flex-col gap-6" style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s ease-out',
        }}>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-widest">
            <Globe className="size-4 text-accent" aria-hidden="true" />
            Serving the global AEC industry
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            End-to-end BIM solutions for smarter, faster projects.
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {site.name} delivers complete BIM modeling, digital engineering,
            dedicated resources, and professional training for architects,
            engineers, and contractors worldwide.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href={site.phoneHref} />}
              nativeButton={false}
              size="lg"
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {site.phone}
            </Button>
            <Button
              render={<a href="#contact" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Mail className="size-5" aria-hidden="true" />
              Request a Quote
            </Button>
          </div>

          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.95)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl ring-1 ring-primary-foreground/10 transition-transform duration-300 hover:shadow-3xl hover:ring-accent/50">
            <Image
              src="/images/hero-bim.png"
              alt="A 3D BIM model of a multi-story building showing structural, architectural, and MEP layers"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-xl bg-background px-6 py-4 text-foreground shadow-xl sm:block">
            <p className="font-serif text-3xl font-semibold text-primary">LOD 500</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Modeling Detail
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
