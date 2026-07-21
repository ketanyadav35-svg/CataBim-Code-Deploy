'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Home, ChevronRight } from 'lucide-react'

export type Crumb = {
  label: string
  href?: string
}

/**
 * Shared navigation aid shown at the top of every inner page.
 * Renders a Back button, a Home link, and a breadcrumb trail:
 *   Home > Training > Revit Tool Training
 */
export function PageNav({ crumbs }: { crumbs: Crumb[] }) {
  const router = useRouter()

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border bg-secondary/60"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 md:px-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <Home className="size-4" aria-hidden="true" />
          Home
        </Link>

        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1
            return (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                <ChevronRight
                  className="size-3.5 text-muted-foreground/60"
                  aria-hidden="true"
                />
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? 'font-semibold text-foreground' : 'text-muted-foreground'}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
