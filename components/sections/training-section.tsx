'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { courses } from '@/lib/courses-data'

export function TrainingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="training" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-4 md:px-6">
        <div
          className="max-w-2xl"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s ease-out',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Training &amp; Academy
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Live, project-based BIM courses that make you job-ready
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            Instructor-led programs built around real project workflows. Choose a
            course to see the full curriculum, outcomes, and certification — then
            register in minutes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <Link
                key={course.slug}
                href={`/training/${course.slug}`}
                className="group flex flex-col rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-primary-foreground/10"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 0.6s ease-out ${index * 0.06}s`,
                }}
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold">{course.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-foreground/75">
                  {course.summary}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1.5 text-primary-foreground/70">
                    <Clock className="size-4 text-accent" aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-accent">
                    Details
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/corporate-training"
            className="rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/25"
          >
            Corporate BIM Training
          </Link>
          <Link
            href="/placement"
            className="rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/25"
          >
            Career Support
          </Link>
        </div>
      </div>
    </section>
  )
}
