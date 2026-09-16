'use client'

import { useEffect, useRef } from 'react'

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
        }
      ) => string
      remove: (id: string) => void
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
  const onVerifyRef = useRef(onVerify)
  const onExpireRef = useRef(onExpire)

  useEffect(() => {
    onVerifyRef.current = onVerify
    onExpireRef.current = onExpire
  }, [onVerify, onExpire])

  useEffect(() => {
    if (!SITE_KEY) {
      console.error('NEXT_PUBLIC_TURNSTILE_SITE_KEY is missing')
      return
    }

    const scriptId = 'cf-turnstile-script'

    const renderWidget = () => {
      if (
        !window.turnstile ||
        !containerRef.current ||
        widgetId.current !== null
      ) {
        return
      }

      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => {
          console.log('Turnstile verified')
          onVerifyRef.current(token)
        },
        'expired-callback': () => {
          onExpireRef.current?.()
        },
        'error-callback': () => {
          onExpireRef.current?.()
        },
      })
    }

    if (window.turnstile) {
      renderWidget()
    } else {
      let script = document.getElementById(
        scriptId
      ) as HTMLScriptElement | null

      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.src =
          'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        script.async = true
        script.defer = true
        script.onload = renderWidget
        document.head.appendChild(script)
      } else {
        const interval = window.setInterval(() => {
          if (window.turnstile) {
            window.clearInterval(interval)
            renderWidget()
          }
        }, 200)

        return () => window.clearInterval(interval)
      }
    }

    return () => {
      if (widgetId.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current)
        } catch {
          // Widget already removed
        }

        widgetId.current = null
      }
    }
  }, [])

  return <div ref={containerRef} className="min-h-[65px]" />
}