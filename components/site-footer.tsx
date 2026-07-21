import { Boxes, Phone, Mail } from 'lucide-react'
import { site } from '@/lib/site'
import { NewsletterSignup } from '@/components/newsletter-signup'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="mb-10 rounded-xl border border-border bg-card/50 p-8">
          <h3 className="text-lg font-semibold text-foreground">
            Stay updated with BIM insights and tips
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Subscribe to our newsletter for the latest tutorials, best practices, and industry updates.
          </p>
          <div className="mt-4">
            <NewsletterSignup />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Boxes className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg font-semibold text-foreground">
                {site.name}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <p className="mx-auto max-w-6xl px-4 text-center text-xs text-muted-foreground md:px-6">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved. BIM solutions for the global AEC industry.
        </p>
      </div>
    </footer>
  )
}
