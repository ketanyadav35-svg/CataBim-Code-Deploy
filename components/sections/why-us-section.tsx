'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Globe2, Layers, ShieldCheck, Zap } from 'lucide-react'
import { site } from '@/lib/site'

const reasons = [
  {
    icon: Globe2,
    title: 'Global AEC Delivery',
    description:
      'Offshore teams that plug into your workflow across time zones for round-the-clock progress.',
  },
  {
    icon: Layers,
    title: 'LOD 100–500 Expertise',
    description:
      'Data-rich, standards-compliant models at every level of development your project requires.',
  },
  {
    icon: ShieldCheck,
    title: 'Clash-Free Coordination',
    description:
      'Rigorous QA/QC and clash detection so issues are resolved in the model, not on site.',
  },
  {
    icon: Zap,
    title: 'Fast, Scalable Teams',
    description:
      'Spin up dedicated BIM resources quickly and scale capacity to match your pipeline.',
  },
]

const tools = ['Revit', 'Navisworks', 'AutoCAD', 'Civil 3D']

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="why-us" className="bg-secondary py-16 md:py-24">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2"
      >
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Choose {site.name}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A digital-engineering partner you can build on
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {site.summary}
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Software we master
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-card-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="grid gap-4 sm:grid-cols-2"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${0.3 + index * 0.1}s`,
              }}
            >
              <reason.icon className="size-8 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
