'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Building2, Users, Zap, TrendingUp, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button-catabim'

export default function CorporateTrainingPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <div className="mx-auto max-w-xl">
            <h1 className="text-balance font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Enterprise BIM Training
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Upskill your entire team with customized BIM training programs designed for enterprise needs.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div
              ref={ref}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Tailored for Your Organization
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you&apos;re an architectural firm, engineering company, or construction enterprise, we design corporate training programs that align with your specific workflows, software stack, and business objectives.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Customized curriculum matching your project types',
                  'Live online, instructor-led delivery',
                  'Interactive live sessions for your team',
                  'Team progress tracking and reporting',
                  'Certificate of completion',
                  'Ongoing support and updates',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl bg-secondary p-8"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              <h3 className="font-serif text-xl font-bold text-foreground">
                Corporate Training Benefits
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  { icon: Zap, title: 'Faster Productivity', desc: 'Get teams productive with your BIM workflows quickly' },
                  { icon: TrendingUp, title: 'ROI Improvement', desc: 'Reduce project timelines and errors through better BIM practices' },
                  { icon: Users, title: 'Team Cohesion', desc: 'Unified skills across your organization' },
                  { icon: Building2, title: 'Quality Standards', desc: 'Ensure consistent quality across all projects' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <item.icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Training Delivery Options</h2>
            <p className="mt-4 text-muted-foreground">Choose the format that works best for your organization</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Online Corporate Training',
                description: 'Live, instructor-led online sessions for geographically distributed teams',
                features: ['Live instructor-led sessions', 'Interactive live classes', 'Global timezone support', 'Recorded session support'],
              },
              {
                title: 'Customized Corporate Programs',
                description: 'Programs tailored to your workflows, software stack, and business objectives',
                features: ['Curriculum built around your projects', 'Flexible scheduling', 'Team progress tracking', 'Ongoing support'],
              },
            ].map((option) => (
              <div key={option.title} className="rounded-xl border border-border bg-background p-8">
                <h3 className="font-serif text-lg font-bold text-foreground">{option.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{option.description}</p>
                <ul className="mt-6 space-y-2">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground">
            Our Training Process
          </h2>

          <div className="mt-12 space-y-8">
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'We understand your team\'s current skills, software stack, and specific project requirements to design a tailored program.',
              },
              {
                step: '02',
                title: 'Curriculum Design',
                description: 'Custom curriculum developed based on your company\'s workflows, standards, and industry best practices.',
              },
              {
                step: '03',
                title: 'Training Delivery',
                description: 'Expert-led training sessions using your real projects as case studies for practical, hands-on learning.',
              },
              {
                step: '04',
                title: 'Certificate of Completion',
                description: 'Participants receive a CATABIM certificate of completion and Autodesk certification exam preparation. Autodesk certification is not guaranteed.',
              },
              {
                step: '05',
                title: 'Support & Updates',
                description: 'Ongoing support, refresher sessions, and updates as new software versions and industry practices emerge.',
              },
            ].map((item, index) => (
              <div key={item.title} className="grid gap-6 md:grid-cols-[100px_1fr]">
                <div className="flex size-16 items-center justify-center rounded-lg bg-primary text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-4xl text-center px-4 md:px-6">
          <h2 className="font-serif text-3xl font-bold">
            Ready to Train Your Team?
          </h2>
          <p className="mt-4 text-pretty text-primary-foreground/90">
            Contact us to discuss your organization&apos;s training needs and receive a customized proposal.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              render={<a href="/request-quote" />}
              nativeButton={false}
              size="lg"
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Request Corporate Training
            </Button>
            <Button
              render={<a href="/contact" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
