'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  var isDesktop = false
  if (typeof navigator !== 'undefined') {
    isDesktop =
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator?.userAgent
      ) && /Mac|Win|Linux/i.test(navigator?.platform || '')
  }

  return (
    (isDesktop && (
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
        {children}
      </ReactLenis>
    )) ||
    children
  )
}

export default SmoothScrollProvider
