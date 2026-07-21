import { Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button-catabim'
import { site } from '@/lib/site'
import { ContactForm } from '@/components/contact-form'

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s scope your next BIM project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            Fill out the form below and we&apos;ll get back to you with a tailored proposal. Or reach our team directly by phone or email.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-8 sm:p-10">
          <ContactForm />
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 border-t border-primary-foreground/15 pt-10 sm:grid-cols-3">
          <a
            href={site.phoneHref}
            className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Phone className="size-6 text-accent" aria-hidden="true" />
            <span className="text-sm text-primary-foreground/70">Phone</span>
            <span className="font-medium">{site.phone}</span>
          </a>
          <a
            href={site.emailHref}
            className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Mail className="size-6 text-accent" aria-hidden="true" />
            <span className="text-sm text-primary-foreground/70">Email</span>
            <span className="font-medium">{site.email}</span>
          </a>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="size-6 text-accent" aria-hidden="true" />
            <span className="text-sm text-primary-foreground/70">Serving</span>
            <span className="font-medium">{site.serviceArea}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
