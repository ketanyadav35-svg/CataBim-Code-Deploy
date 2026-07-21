'use client'

import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { services } from '@/lib/services-data'

const careerSupport = [
  'Resume Building',
  'Portfolio Guidance',
  'LinkedIn Profile Building',
  'Naukri Profile Optimization',
  'Indeed Profile Optimization',
  'Career Guidance',
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div
          ref={ref}
          className="mx-auto max-w-2xl text-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            BIM Services
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Full-lifecycle BIM modeling and coordination
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From concept design through as-built delivery, we produce accurate,
            coordinated, data-rich models across every discipline. Select a service
            to explore how we deliver it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${index * 0.08}s`,
              }}
            >
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>
              <ul className="mt-3 flex flex-1 flex-col gap-2">
                {service.cardItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Career Support / Placement Assistance */}
        <div className="mt-12 rounded-2xl border border-border bg-secondary p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                Career Support &amp; Placement Assistance
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Beyond training and services, we help learners present themselves
                professionally to the AEC industry with dedicated career support.
                We provide guidance and resources — we do not guarantee placements.
              </p>
              <Link
                href="/placement"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Explore career support
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {careerSupport.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm font-medium text-card-foreground"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
