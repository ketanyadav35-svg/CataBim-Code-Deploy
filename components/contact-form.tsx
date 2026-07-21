'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, AlertCircle, CheckCircle, Loader } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  projectType: z.enum(['architectural', 'structural', 'mep', 'infrastructure', 'coordination', 'training', 'other']),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-primary-foreground">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="John Doe"
            className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-primary-foreground placeholder-primary-foreground/50 transition-colors focus:border-accent focus:bg-primary-foreground/15 focus:outline-none"
          />
          {errors.name && (
            <span className="text-xs text-accent">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-primary-foreground">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@company.com"
            className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-primary-foreground placeholder-primary-foreground/50 transition-colors focus:border-accent focus:bg-primary-foreground/15 focus:outline-none"
          />
          {errors.email && (
            <span className="text-xs text-accent">{errors.email.message}</span>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-primary-foreground">
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            placeholder="Your Company"
            className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-primary-foreground placeholder-primary-foreground/50 transition-colors focus:border-accent focus:bg-primary-foreground/15 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-primary-foreground">
            Phone
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-primary-foreground placeholder-primary-foreground/50 transition-colors focus:border-accent focus:bg-primary-foreground/15 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectType" className="text-sm font-medium text-primary-foreground">
          Project Type *
        </label>
        <select
          {...register('projectType')}
          className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-primary-foreground transition-colors focus:border-accent focus:bg-primary-foreground/15 focus:outline-none"
        >
          <option value="">Select a project type...</option>
          <option value="architectural">Architectural BIM</option>
          <option value="structural">Structural BIM</option>
          <option value="mep">MEP BIM</option>
          <option value="infrastructure">Infrastructure BIM</option>
          <option value="coordination">Coordination & QA/QC</option>
          <option value="training">Training</option>
          <option value="other">Other</option>
        </select>
        {errors.projectType && (
          <span className="text-xs text-accent">{errors.projectType.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-primary-foreground">
          Message *
        </label>
        <textarea
          {...register('message')}
          placeholder="Tell us about your project or resourcing needs..."
          rows={5}
          className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-primary-foreground placeholder-primary-foreground/50 transition-colors focus:border-accent focus:bg-primary-foreground/15 focus:outline-none resize-none"
        />
        {errors.message && (
          <span className="text-xs text-accent">{errors.message.message}</span>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
          <AlertCircle className="size-5 flex-shrink-0" aria-hidden="true" />
          {error}
        </div>
      )}

      {submitted && (
        <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
          <CheckCircle className="size-5 flex-shrink-0" aria-hidden="true" />
          Thanks for reaching out! We&apos;ll get back to you soon.
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="group relative w-full overflow-hidden rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
      >
        <div className="flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <Loader className="size-5 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Mail className="size-5" aria-hidden="true" />
              Send Inquiry
            </>
          )}
        </div>
      </button>
    </form>
  )
}
