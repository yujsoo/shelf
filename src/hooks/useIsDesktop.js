import { useState, useEffect } from 'react'

const BREAKPOINT = '(min-width: 768px)'

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia(BREAKPOINT).matches
  )
  useEffect(() => {
    const mq = window.matchMedia(BREAKPOINT)
    const handler = e => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isDesktop
}
