'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Hammer, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button-catabim'

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h1 className="text-balance font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
            A showcase of our BIM and digital engineering work is on its way.
          </p>
        </div>
      </section>

      {/* Placeholder */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <div
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease-out',
            }}
          >
            <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Hammer className="size-8" aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-serif text-3xl font-bold text-foreground">
              Portfolio Under Development
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Our project portfolio and case studies are currently being prepared.
              Our projects are coming soon. In the meantime, get in touch to learn
              more about our BIM services and capabilities.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                render={<a href="/request-quote" />}
                nativeButton={false}
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                render={<a href="/#services" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="gap-2"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
