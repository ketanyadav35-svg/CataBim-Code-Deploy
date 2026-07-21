'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to LOD Levels in BIM',
    excerpt: 'Understanding Level of Development (LOD) is crucial for delivering accurate BIM models. Learn the differences between LOD 100–500.',
    category: 'BIM Modeling',
    date: 'Jul 13, 2024',
    author: 'Sarah Johnson',
    readTime: '8 min read',
    slug: 'lod-levels-guide',
  },
  {
    id: 2,
    title: 'Clash Detection Best Practices',
    excerpt: 'Discover how to effectively detect and resolve clashes in your BIM models before they become costly field issues.',
    category: 'Coordination',
    date: 'Jul 10, 2024',
    author: 'Michael Chen',
    readTime: '6 min read',
    slug: 'clash-detection-best-practices',
  },
  {
    id: 3,
    title: 'Revit Family Creation for MEP Systems',
    excerpt: 'Learn advanced techniques for creating parametric Revit families that work seamlessly with MEP coordination workflows.',
    category: 'Training',
    date: 'Jul 7, 2024',
    author: 'Emma Rodriguez',
    readTime: '10 min read',
    slug: 'revit-family-creation-mep',
  },
  {
    id: 4,
    title: 'From Scan to BIM: A Step-by-Step Workflow',
    excerpt: 'Explore the complete process of converting point cloud data into production-ready BIM models using modern software.',
    category: 'Advanced BIM',
    date: 'Jul 1, 2024',
    author: 'David Smith',
    readTime: '12 min read',
    slug: 'scan-to-bim-workflow',
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="blog" className="bg-secondary py-16 md:py-24">
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
            BIM Resources
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Latest insights and best practices
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Stay updated with tips, tutorials, and industry insights to help you master BIM workflows and deliver better projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 px-6 py-8 sm:py-6">
                <BookOpen className="size-8 text-accent" aria-hidden="true" />
              </div>

              <div className="flex flex-1 flex-col gap-4 px-6 py-5">
                <div>
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="line-clamp-2 font-serif text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-3.5" aria-hidden="true" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="size-3.5" aria-hidden="true" />
                      {post.author}
                    </div>
                    <div className="text-muted-foreground text-xs">{post.readTime}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="size-4" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 font-medium text-accent transition-all duration-300 hover:bg-accent/20 hover:border-accent/50"
          >
            View All Articles
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
