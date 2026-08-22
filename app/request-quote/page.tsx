'use client'

import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Mail, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button-catabim'

export default function RequestQuotePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsSubmitting(true)
    setSubmitMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      email: formData.get('email'),
      phone: formData.get('phone'),
      name: formData.get('name'),
      company: formData.get('company'),
      description: formData.get('description'),
    }

    try {
      const response = await fetch('/api/request-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit request')
      }

      setSubmitMessage(
        result.message || 'Thank you for your request. We will get back to you soon.'
      )

      form.reset()
    } catch (error) {
      console.error('[Request Quote]', error)

      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Failed to submit your request. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h1 className="text-balance font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Request a Quote
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90">
            Tell us about your training needs and receive a customized proposal
            tailored to your requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Contact Info Sidebar */}
            <div
              ref={ref}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView
                  ? 'translateX(0)'
                  : 'translateX(-30px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Get in Touch
              </h2>

              <p className="mt-3 text-muted-foreground">
                We&apos;ll respond to your request within 24 business hours.
              </p>

              <div className="mt-8 space-y-6">

                {/* Email */}
                <div className="flex gap-4">
                  <Mail
                    className="size-6 shrink-0 text-primary mt-1"
                    aria-hidden="true"
                  />

                  <div>
                    <div className="font-semibold text-foreground">
                      Email
                    </div>

                    <a
                      href="mailto:info@catabim.com"
                      className="text-primary hover:underline"
                    >
                      info@catabim.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone
                    className="size-6 shrink-0 text-primary mt-1"
                    aria-hidden="true"
                  />

                  <div>
                    <div className="font-semibold text-foreground">
                      Phone
                    </div>

                    <a
                      href="tel:+917304274792"
                      className="text-primary hover:underline"
                    >
                      +91 7304274792
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <Clock
                    className="size-6 shrink-0 text-primary mt-1"
                    aria-hidden="true"
                  />

                  <div>
                    <div className="font-semibold text-foreground">
                      Business Hours
                    </div>

                    <div className="text-muted-foreground">
                      Monday - Friday, 9:00 AM - 6:00 PM IST
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick Tip */}
              <div className="mt-8 rounded-lg bg-secondary p-6">
                <h3 className="font-semibold text-foreground">
                  Quick Tip
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Include details about your team size, current skill level,
                  and preferred training timeline for a more accurate quote.
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <div
              className="lg:col-span-2"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView
                  ? 'translateX(0)'
                  : 'translateX(30px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-xl border border-border bg-card p-8"
              >

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email Address *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground"
                  >
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Name + Company */}
                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground"
                    >
                      Company
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your company name"
                    />
                  </div>

                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-foreground"
                  >
                    Project Description
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your training needs, team size, current skill level, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting
                    ? 'Sending...'
                    : 'Submit Quote Request'}
                </Button>

                {/* Result Message */}
                {submitMessage && (
                  <p className="text-center text-sm text-muted-foreground">
                    {submitMessage}
                  </p>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  * Required fields. We&apos;ll respond within 24 business hours.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}