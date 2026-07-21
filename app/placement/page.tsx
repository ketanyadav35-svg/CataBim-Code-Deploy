'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  FileText,
  FolderOpen,
  Linkedin,
  Briefcase,
  Search,
  Compass,
} from 'lucide-react'
import { Button } from '@/components/ui/button-catabim'

const services = [
  {
    icon: FileText,
    title: 'Resume Building',
    description: 'One-on-one support crafting a clear, professional resume that highlights your BIM skills and project work.',
  },
  {
    icon: FolderOpen,
    title: 'Portfolio Guidance',
    description: 'Guidance on building a professional portfolio that showcases your BIM projects, models, and course work.',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Profile Building',
    description: 'Help creating a compelling LinkedIn profile that presents your skills clearly to the AEC community.',
  },
  {
    icon: Briefcase,
    title: 'Naukri Profile Optimization',
    description: 'Assistance setting up and optimizing your Naukri profile for Indian and regional job markets.',
  },
  {
    icon: Search,
    title: 'Indeed Profile Optimization',
    description: 'Support optimizing your Indeed profile to improve visibility to employers and recruiters.',
  },
  {
    icon: Compass,
    title: 'Career Guidance',
    description: 'Advice on career paths, industry trends, and professional growth strategies in the BIM field.',
  },
]

export default function CareerSupportPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h1 className="text-balance font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Career Support
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
            We support your career journey with guidance and resources to help you
            present yourself professionally to the AEC industry.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Career Support Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Guidance and resources to support your professional development
            </p>
          </div>

          <div
            ref={ref}
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-border bg-card p-6">
                <service.icon className="size-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl text-center px-4 md:px-6">
          <h2 className="font-serif text-3xl font-bold">
            Ready to Advance Your Career?
          </h2>
          <p className="mt-4 text-pretty text-primary-foreground/90">
            Get personalized career guidance alongside our training programs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              render={<a href="/contact" />}
              nativeButton={false}
              size="lg"
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Request Career Guidance
            </Button>
            <Button
              render={<a href="/training" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Explore Training
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
