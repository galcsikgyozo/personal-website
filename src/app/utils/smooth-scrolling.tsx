'use client'

import { useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const LenisInstance = useLenis()

  useEffect(() => {
    // This is to enable interrupting the scroll animation when clicking on an anchor
    const handleClickOnAnchor = (event: any) => {
      let target = event.target.closest('a')
      if (target) {
        if (target.tagName === 'A') {
          if (
            target?.getAttribute('href')?.startsWith('#') ||
            target?.getAttribute('href') == '#'
          ) {
            event.preventDefault()
            LenisInstance?.stop()
            LenisInstance?.start()

            /** Might use this later to scroll with lenis instead of the scrollIntoView() method */
            // if (target?.getAttribute('href') !== '#') {
            //   LenisInstance?.scrollTo(target?.getAttribute('href'), {
            //     duration: 1.5,
            //   })
            // }
          }
        }
      }
    }

    document.addEventListener('click', handleClickOnAnchor)
    return () => {
      document.removeEventListener('click', handleClickOnAnchor)
    }
  }, [LenisInstance])

  var isDesktop = false
  if (typeof navigator !== 'undefined') {
    isDesktop =
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator?.userAgent
      ) && /Mac|Win|Linux/i.test(navigator?.platform || '')
  }

  return (isDesktop && <ReactLenis root>{children}</ReactLenis>) || children
}

export default SmoothScrollProvider
