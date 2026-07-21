import Link from 'next/link'
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react'
import { getBlogPost, getRelatedPosts, blogPosts } from '@/lib/blog-data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Not Found',
      description: 'Blog post not found',
    }
  }

  return {
    title: `${post.title} | CataBIM Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">Post Not Found</h1>
            <p className="mt-2 text-muted-foreground">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog" className="mt-4 inline-block text-accent hover:underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    )
  }

  const relatedPosts = getRelatedPosts(slug)
  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  const previousPost = postIndex > 0 ? blogPosts[postIndex - 1] : null
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null

  return (
    <>
      <SiteHeader />
      <main className="flex flex-col">
        <article className="bg-background">
          <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all mb-6"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Blog
            </Link>

            <div className="space-y-6">
              <div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {post.category}
                </span>
                <h1 className="mt-4 text-balance font-serif text-4xl font-bold text-foreground sm:text-5xl">
                  {post.title}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="size-4" aria-hidden="true" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" aria-hidden="true" />
                  {post.date}
                </div>
                <div>{post.readTime}</div>
              </div>

              <div className="prose prose-sm max-w-none dark:prose-invert sm:prose-base">
                {post.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) {
                    return (
                      <h1 key={i} className="mt-8 mb-4 text-3xl font-bold text-foreground first:mt-0">
                        {line.replace('# ', '')}
                      </h1>
                    )
                  }
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={i} className="mt-6 mb-3 text-2xl font-bold text-foreground">
                        {line.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (line.startsWith('### ')) {
                    return (
                      <h3 key={i} className="mt-4 mb-2 text-xl font-bold text-foreground">
                        {line.replace('### ', '')}
                      </h3>
                    )
                  }
                  if (line.startsWith('- ')) {
                    return (
                      <li key={i} className="ml-6 mb-2 text-foreground/90 leading-relaxed">
                        {line.replace('- ', '')}
                      </li>
                    )
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return (
                      <p key={i} className="mb-4 font-bold text-foreground">
                        {line.replace(/\*\*/g, '')}
                      </p>
                    )
                  }
                  if (line.trim()) {
                    return (
                      <p key={i} className="mb-4 text-foreground/90 leading-relaxed">
                        {line}
                      </p>
                    )
                  }
                  return <div key={i} className="mb-4" />
                })}
              </div>

              <div className="border-t border-border pt-8 mt-12">
                <div className="grid gap-4 sm:grid-cols-2">
                  {previousPost && (
                    <Link
                      href={`/blog/${previousPost.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-2">
                        <ArrowLeft className="size-4 text-muted-foreground" aria-hidden="true" />
                        <div>
                          <p className="text-xs text-muted-foreground">Previous</p>
                          <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                            {previousPost.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md sm:col-start-2"
                    >
                      <div>
                        <p className="text-xs text-muted-foreground">Next</p>
                        <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                          {nextPost.title}
                        </p>
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground ml-2" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <span className="rounded-full bg-accent/10 px-3 py-1 w-fit text-xs font-medium text-accent">
                      {relatedPost.category}
                    </span>
                    <h3 className="line-clamp-2 font-serif text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="size-3.5" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
