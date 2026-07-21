import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { projects, getProject } from '@/lib/projects-data'
import { Button } from '@/components/ui/button-catabim'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export const generateStaticParams = () => {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export const generateMetadata = ({ params }: ProjectPageProps) => {
  const project = getProject(params.slug)
  if (!project) return {}

  return {
    title: `${project.name} - CATABIM Projects`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects.filter(
    (p) => p.id !== project.id && (p.industry === project.industry || p.service === project.service)
  ).slice(0, 3)

  return (
    <main className="flex flex-col">
      {/* Hero with Image */}
      <div className="relative h-96 w-full bg-secondary">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 md:px-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white hover:text-accent mb-4">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Projects
          </Link>
          <h1 className="font-serif text-4xl font-bold text-white">{project.name}</h1>
        </div>
      </div>

      {/* Project Details */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Meta Info */}
              <div className="mb-12 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Industry', value: project.industry },
                  { label: 'Service', value: project.service },
                  { label: 'Tools Used', value: project.softwaresUsed.join(', ') },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-secondary p-4">
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-2 font-semibold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="mb-12 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">The Challenge</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Our Solution</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">Deliverables</h2>
                <ul className="mt-6 space-y-3">
                  {project.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                Interested in Similar Projects?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                We specialize in {project.service} and have experience across the {project.industry} industry.
              </p>
              <Button
                render={<a href="/request-quote" />}
                nativeButton={false}
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-4"
              >
                Request a Quote
              </Button>
              <Button
                render={<a href="/contact" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="w-full"
              >
                Contact Us
              </Button>

              <div className="mt-8 rounded-lg bg-secondary p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Software Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.softwaresUsed.map((software) => (
                    <span key={software} className="inline-block rounded bg-background px-3 py-1 text-sm font-medium">
                      {software}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12">
              Related Projects
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="group overflow-hidden rounded-xl border border-border bg-background transition-all hover:shadow-lg hover:border-primary"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {relatedProject.industry}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {relatedProject.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
