import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Check,
  ArrowRight,
  Cpu,
  Layers,
  Package,
  Factory,
  Phone,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageNav } from '@/components/page-nav'
import { Button } from '@/components/ui/button-catabim'
import { services, getService } from '@/lib/services-data'
import { site } from '@/lib/site'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: 'Service not found' }
  return {
    title: `${service.title} | ${site.name}`,
    description: service.summary,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const Icon = service.icon

  return (
    <>
      <SiteHeader />
      <PageNav
        crumbs={[
          { label: 'Services', href: '/#services' },
          { label: service.title },
        ]}
      />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
            <span className="inline-flex size-14 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
              <Icon className="size-7" aria-hidden="true" />
            </span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
              BIM Services
            </p>
            <h1 className="mt-3 max-w-3xl text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {service.hero}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                render={<Link href="/request-quote" />}
                nativeButton={false}
                size="lg"
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Request a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                render={<a href={site.phoneHref} />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden="true" />
                Talk to Our Team
              </Button>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Overview
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              What we deliver
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {service.overview}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Benefits
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Why teams choose this service
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-card-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Workflow
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              How we work
            </h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-5">
              {service.workflow.map((step, index) => (
                <li key={step.title} className="relative">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Software + Deliverables + Industries */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 md:px-6 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <Cpu className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-card-foreground">
                Software Used
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.software.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <Package className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-card-foreground">
                Deliverables
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Layers className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <Factory className="size-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-card-foreground">
                Industries Served
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              FAQs
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 flex flex-col gap-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-card p-5 [&_summary]:cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-semibold text-card-foreground marker:content-['']">
                    {faq.question}
                    <span className="ml-4 text-accent transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Request Quote CTA */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to start your {service.title.toLowerCase()} project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
              Tell us about your project and our team will get back to you with a tailored proposal.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                render={<Link href="/request-quote" />}
                nativeButton={false}
                size="lg"
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Request a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                render={<a href={site.phoneHref} />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call {site.phone}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
