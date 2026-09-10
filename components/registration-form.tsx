'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, AlertCircle, Loader } from 'lucide-react'
import {
  studentRegistrationSchema,
  type StudentRegistration,
} from '@/lib/validations'
import { registerStudent } from '@/app/actions/students'
import { courses } from '@/lib/courses-data'
import { Turnstile } from '@/components/turnstile'

const batches = ['Weekday (Mon–Fri)', 'Weekend (Sat–Sun)', 'Evening Batch', 'Flexible / Not sure']

export function RegistrationForm({ defaultCourse }: { defaultCourse?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [registrationId, setRegistrationId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<StudentRegistration>({
    resolver: zodResolver(studentRegistrationSchema),
    defaultValues: { selectedCourse: defaultCourse ?? '' },
  })

  const handleCaptchaVerify = useCallback((token: string) => {
  setCaptchaToken(token)
  }, [])

  const handleCaptchaExpire = useCallback(() => {
  setCaptchaToken(null)
  }, [])

  const onSubmit = async (data: StudentRegistration) => {
    setError(null)
    if (!captchaToken) {
      setError('Please complete the CAPTCHA verification before submitting.')
      return
    }
    const result = await registerStudent({ ...data, turnstileToken: captchaToken })
    if (result.success) {
      setRegistrationId(result.registrationId ?? null)
      setSubmitted(true)
      reset()
      setCaptchaToken(null)
    } else {
      setError(result.error ?? 'Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
          Registration received!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thank you for registering. Our team will contact you within one business
          day to confirm your batch and next steps.
        </p>
        {registrationId && (
          <p className="mt-4 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-foreground">
            Your registration ID:{' '}
            <span className="font-mono text-primary">{registrationId}</span>
          </p>
        )}
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-primary hover:underline"
        >
          Register another student
        </button>
      </div>
    )
  }

  const fieldClass =
    'rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name *
          </label>
          <input id="name" {...register('name')} type="text" placeholder="John Doe" className={fieldClass} />
          {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email *
          </label>
          <input id="email" {...register('email')} type="email" placeholder="john@email.com" className={fieldClass} />
          {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone *
          </label>
          <input id="phone" {...register('phone')} type="tel" placeholder="+91 90000 00000" className={fieldClass} />
          {errors.phone && <span className="text-xs text-destructive">{errors.phone.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="qualification" className="text-sm font-medium text-foreground">
            Qualification *
          </label>
          <input id="qualification" {...register('qualification')} type="text" placeholder="B.Arch / B.E Civil / Diploma" className={fieldClass} />
          {errors.qualification && <span className="text-xs text-destructive">{errors.qualification.message}</span>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="currentProfession" className="text-sm font-medium text-foreground">
            Current Profession
          </label>
          <input id="currentProfession" {...register('currentProfession')} type="text" placeholder="Student / Architect / Engineer" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="preferredBatch" className="text-sm font-medium text-foreground">
            Preferred Batch
          </label>
          <select id="preferredBatch" {...register('preferredBatch')} className={fieldClass}>
            <option value="">Select a batch...</option>
            {batches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="selectedCourse" className="text-sm font-medium text-foreground">
          Course *
        </label>
        <select id="selectedCourse" {...register('selectedCourse')} className={fieldClass}>
          <option value="">Select a course...</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>
        {errors.selectedCourse && <span className="text-xs text-destructive">{errors.selectedCourse.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message (optional)
        </label>
        <textarea id="message" {...register('message')} rows={3} placeholder="Any questions or preferences?" className={`${fieldClass} resize-none`} />
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="size-5 flex-shrink-0" aria-hidden="true" />
          {error}
        </div>
      )}

      <div className="flex justify-start">
        <Turnstile
        onVerify={handleCaptchaVerify}
        onExpire={handleCaptchaExpire}
      />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <Loader className="size-5 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          'Register Now'
        )}
      </button>
    </form>
  )
}
