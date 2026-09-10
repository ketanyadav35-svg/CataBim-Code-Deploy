'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  HeartHandshake,
  Zap,
  ShieldCheck,
  GraduationCap,
  Code2,
  Handshake,
} from 'lucide-react'
import { Button } from '@/components/ui/button-catabim'

const values = [
  {
    icon: Award,
    title: 'Engineering Excellence',
    description: 'We hold every model, drawing, and deliverable to rigorous engineering standards across all disciplines.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality BIM Services',
    description: 'Accurate, coordinated, data-rich BIM services delivered with consistent quality and attention to detail.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Success',
    description: "Every decision prioritizes our clients' outcomes, timelines, and long-term project success.",
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We adopt the latest tools, workflows, and automation to keep our clients and learners ahead of the industry.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Honest communication, transparent processes, and dependable delivery in every engagement.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'We invest in upskilling our team and our learners so expertise keeps pace with the AEC industry.',
  },
  {
    icon: Code2,
    title: 'Software Development & Automation',
    description: 'Custom AEC software, Revit plugins, and BIM automation that streamline and extend BIM workflows.',
  },
  {
    icon: Handshake,
    title: 'Long-term Client Relationships',
    description: 'We build lasting partnerships, supporting clients well beyond a single project or course.',
  },
]

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h1 className="text-balance font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            About CATABIM
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
            A BIM and digital engineering company delivering professional BIM services, industry-focused training, and custom AEC software solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="mt-4 text-muted-foreground">
                CATABIM was founded to bring together two sides of the same discipline: delivering professional BIM and digital engineering services, and equipping people with practical, industry-aligned BIM skills. We bridge the gap between academic knowledge and real-world application across the AEC industry.
              </p>
              <p className="mt-4 text-muted-foreground">
                On the services side, we produce coordinated, data-rich models across architectural, structural, MEP, and infrastructure disciplines, and build custom AEC software and BIM automation tools. On the training side, we run live, project-based courses that prepare professionals for real BIM roles.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our work is guided by engineering excellence, quality, innovation, and customer success — with a focus on building long-term relationships with both our clients and our learners.
              </p>
            </div>

            <div
              ref={ref}
              className="rounded-xl bg-secondary p-8"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground">
                What We Do
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                CATABIM is a BIM and digital engineering company delivering professional
                BIM services, industry-focused BIM training, and custom AEC software
                solutions for the architecture, engineering, and construction industry.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'BIM & Digital Engineering',
                  'Industry-focused BIM Training',
                  'Professional BIM Services',
                  'Custom AEC Software Solutions',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border bg-background p-4 text-sm font-medium text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Engineering Excellence',
                  'Innovation',
                  'Quality',
                  'Customer Success',
                  'Long-term Partnerships',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              These principles guide everything we do and define our commitment to excellence.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <value.icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CATABIM */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground">
            Why Choose CATABIM?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Industry Experts',
                description: 'Learn from experienced BIM professionals with hands-on, real-world project experience across disciplines.',
              },
              {
                title: 'Practical Curriculum',
                description: 'Every course combines theoretical knowledge with hands-on projects and real-world case studies.',
              },
              {
                title: 'Global Recognition',
                description: 'Certified training aligned with Autodesk standards and recognized by leading architectural firms.',
              },
              {
                title: 'Career Support',
                description: 'Placement assistance, LinkedIn optimization, resume building, and career guidance included.',
              },
              {
                title: 'Flexible Learning',
                description: 'Live online, instructor-led training with interactive live sessions and recorded session support where applicable.',
              },
              {
                title: 'Community',
                description: 'Access an active community of BIM professionals, job boards, and networking opportunities.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="font-serif text-3xl font-bold">Our Teaching Philosophy</h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90">
            We believe that effective BIM education goes beyond software training. It&apos;s about developing critical thinking, problem-solving skills, and a deep understanding of how BIM transforms project delivery. Our instructors mentor students to become leaders in the industry, not just users of technology.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90">
            Every lesson integrates real project workflows, industry best practices, and emerging trends. We foster collaboration, innovation, and continuous learning to prepare professionals who can drive industry transformation.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center px-4 md:px-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Ready to Transform Your Career ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Advance your career with practical, project-based CATABIM training and mentorship.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              render={<a href="/#training" />}
              nativeButton={false}
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Explore Courses
            </Button>
            <Button
              render={<a href="/request-quote" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
