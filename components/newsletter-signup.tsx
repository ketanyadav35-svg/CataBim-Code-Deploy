'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email')
      return
    }

    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      setStatus('success')
      setMessage('Thanks for subscribing! Check your email for confirmation.')
      setEmail('')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={isLoading}
          className="flex-1 rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-foreground placeholder-muted-foreground transition-colors focus:border-accent focus:bg-background focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || status === 'success'}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-2.5 font-medium text-accent-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0 whitespace-nowrap"
        >
          {isLoading ? (
            <>
              <Loader className="size-4 animate-spin" aria-hidden="true" />
              Subscribing...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="size-4" aria-hidden="true" />
              Subscribed
            </>
          ) : (
            <>
              <Mail className="size-4" aria-hidden="true" />
              Subscribe
            </>
          )}
        </button>
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-sm text-green-400">
          <CheckCircle className="size-4 flex-shrink-0" aria-hidden="true" />
          {message}
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-accent">
          <AlertCircle className="size-4 flex-shrink-0" aria-hidden="true" />
          {message}
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        We&apos;ll send BIM tips, tutorials, and industry updates directly to your inbox. No spam, just value.
      </p>
    </form>
  )
}
