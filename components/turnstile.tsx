'use client'

import { useCallback, useEffect, useRef } from 'react'

// Cloudflare Turnstile site key. Falls back to Cloudflare's public "always passes"
// test key so the widget works in preview before real keys are configured.
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string
      remove: (id: string) => void
      reset: (id?: string) => void
    }
  }
}

type TurnstileProps = {
  onVerify: (token: string) => void
  onExpire?: () => void
}

export function Turnstile({ onVerify, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)

  const render = useCallback(() => {
    if (!window.turnstile || !containerRef.current || widgetId.current !== null) {
      return
    }
    widgetId.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: (token: string) => onVerify(token),
      'expired-callback': () => onExpire?.(),
      'error-callback': () => onExpire?.(),
    })
  }, [onVerify, onExpire])

  useEffect(() => {
    const scriptId = 'cf-turnstile-script'
    let interval: ReturnType<typeof setInterval> | undefined

    if (window.turnstile) {
      render()
    } else if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src =
        'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.defer = true
      script.onload = render
      document.head.appendChild(script)
    } else {
      interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval)
          render()
        }
      }, 200)
    }

    return () => {
      if (interval) clearInterval(interval)
      if (widgetId.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current)
        } catch {
          // widget already removed
        }
        widgetId.current = null
      }
    }
  }, [render])

  return <div ref={containerRef} className="min-h-[65px]" />
}
