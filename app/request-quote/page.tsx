'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Mail, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button-catabim'

export default function RequestQuotePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h1 className="text-balance font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90">
            Tell us about your training needs and receive a customized proposal tailored to your requirements.
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
                transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <h2 className="font-serif text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-3 text-muted-foreground">
                We&apos;ll respond to your request within 24 business hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <Mail className="size-6 shrink-0 text-primary mt-1" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:info@catabim.com" className="text-primary hover:underline">
                      info@catabim.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="size-6 shrink-0 text-primary mt-1" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <a href="tel:+919876543210" className="text-primary hover:underline">
                      +91 9876543210
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="size-6 shrink-0 text-primary mt-1" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-foreground">Business Hours</div>
                    <div className="text-muted-foreground">
                      Monday - Friday, 9:00 AM - 6:00 PM IST
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-secondary p-6">
                <h3 className="font-semibold text-foreground">Quick Tip</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Include details about your team size, current skill level, and preferred training timeline for a more accurate quote.
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <div
              className="lg:col-span-2"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              <form className="space-y-6 rounded-xl border border-border bg-card p-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select project type...</option>
                    <option value="individual">Individual Training</option>
                    <option value="corporate">Corporate Training</option>
                    <option value="custom">Custom Program</option>
                    <option value="consulting">BIM Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select service...</option>
                    <option value="revit">Revit Modeling</option>
                    <option value="civil3d">Civil 3D</option>
                    <option value="navisworks">Navisworks</option>
                    <option value="coordination">BIM Coordination</option>
                    <option value="advanced">Advanced BIM</option>
                  </select>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground">
                      Training Timeline
                    </label>
                    <select
                      id="timeline"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select timeline...</option>
                      <option value="1month">Within 1 month</option>
                      <option value="3months">1-3 months</option>
                      <option value="6months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select budget...</option>
                      <option value="upto50k">Up to ₹50,000</option>
                      <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                      <option value="1lakh-5lakh">₹1,00,000 - ₹5,00,000</option>
                      <option value="above5lakh">Above ₹5,00,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your training needs, team size, current skill level, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Submit Quote Request
                </Button>

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
