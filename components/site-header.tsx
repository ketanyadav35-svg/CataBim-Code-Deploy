'use client'

import { useState } from 'react'
import { Phone, Menu, X, Boxes } from 'lucide-react'
import { Button } from '@/components/ui/button-catabim'
import { site } from '@/lib/site'

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Training', href: '/#training' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Boxes className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
              {site.name}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button render={<a href={site.phoneHref} />} nativeButton={false} size="lg" className="gap-2 text-xs pl-[18px]">
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/90 hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <Button render={<a href={site.phoneHref} />} nativeButton={false} size="lg" className="mt-2 gap-2">
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
