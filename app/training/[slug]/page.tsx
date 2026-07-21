import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  Clock,
  GraduationCap,
  Users,
  Target,
  Wrench,
  Briefcase,
  Award,
  CheckCircle2,
  Radio,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageNav } from '@/components/page-nav'
import { RegistrationForm } from '@/components/registration-form'
import { courses, getCourse } from '@/lib/courses-data'

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) return { title: 'Course Not Found' }
  return {
    title: `${course.title} Training | CATABIM`,
    description: course.summary,
  }
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  const Icon = course.icon

  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
            <PageNav
              crumbs={[
                { label: 'Training', href: '/#training' },
                { label: course.title },
              ]}
            />
            <div className="mt-6 flex flex-col gap-5">
              <span className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h1 className="max-w-3xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {course.title}
              </h1>
              <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {course.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-foreground ring-1 ring-border">
                  <Clock className="size-4 text-primary" aria-hidden="true" />
                  {course.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-foreground ring-1 ring-border">
                  <Clock className="size-4 text-primary" aria-hidden="true" />
                  {course.totalHours}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-foreground ring-1 ring-border">
                  <GraduationCap className="size-4 text-primary" aria-hidden="true" />
                  {course.level}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-foreground ring-1 ring-border">
                  <Radio className="size-4 text-primary" aria-hidden="true" />
                  Live Online Training
                </span>
                <a
                  href="#register"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90"
                >
                  Register for this course
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1fr_400px]">
          {/* Main content */}
          <div className="flex flex-col gap-10">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{course.overview}</p>
            </section>

            <section className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <Users className="size-5 text-primary" aria-hidden="true" />
                <h2 className="font-serif text-xl font-semibold text-foreground">Who Should Join</h2>
              </div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{course.whoShouldJoin}</p>
            </section>

            <section>
              <div className="flex items-center gap-2">
                <Target className="size-5 text-primary" aria-hidden="true" />
                <h2 className="font-serif text-xl font-semibold text-foreground">Learning Outcomes</h2>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 rounded-lg bg-secondary p-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-foreground">{o}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2">
                <Wrench className="size-5 text-primary" aria-hidden="true" />
                <h2 className="font-serif text-xl font-semibold text-foreground">Software Covered</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.software.map((s) => (
                  <span key={s} className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-serif text-xl font-semibold text-foreground">Real Projects</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{course.realProjects}</p>
            </section>

            <section>
              <div className="flex items-center gap-2">
                <Briefcase className="size-5 text-primary" aria-hidden="true" />
                <h2 className="font-serif text-xl font-semibold text-foreground">Career Opportunities</h2>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {course.careers.map((c) => (
                  <li key={c} className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <Award className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">Certification</h2>
                <ul className="mt-3 flex flex-col gap-2">
                  {course.certification.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Note: Our training prepares you for these certifications. We do not
                  guarantee certification — passing any exam depends on your own
                  preparation and performance.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
                {course.faqs.map((faq) => (
                  <details key={faq.question} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
                      {faq.question}
                      <span className="text-primary transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Registration sidebar */}
          <aside id="register" className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Register for {course.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Fill in your details and our team will reach out to confirm your batch.
              </p>
              <div className="mt-5">
                <RegistrationForm defaultCourse={course.title} />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
