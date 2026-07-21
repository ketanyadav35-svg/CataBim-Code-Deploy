import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Blog & Resources | CataBIM',
  description: 'Latest BIM tips, tutorials, and industry insights from CataBIM experts.',
}

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
            <h1 className="text-balance font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              BIM Insights & Resources
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
              Explore tutorials, best practices, and industry insights to master BIM workflows and deliver better projects.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/50 md:flex-row md:gap-6 md:p-8"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="mt-3 line-clamp-2 font-serif text-2xl font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4" aria-hidden="true" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="size-4" aria-hidden="true" />
                        {post.author}
                      </div>
                      <div>{post.readTime}</div>
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
