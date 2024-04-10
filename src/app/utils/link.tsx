'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'

import type { LinkProps } from 'next/link'

interface AnchorProps extends LinkProps {
  children: React.ReactNode
  [key: string]: any // Allow any other props
}

export default function Anchor({ children, ...props }: AnchorProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null)

  const handleClick = (event: Event) => {
    if (anchorRef.current?.getAttribute('href')?.startsWith('#')) {
      event.preventDefault()
      if (anchorRef.current?.getAttribute('href') !== '#') {
        document
          .querySelector(anchorRef.current?.getAttribute('href')!)
          ?.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          })
      }
    }
  }

  useEffect(() => {
    const refCurrent = anchorRef.current // Capture the current value

    const handleCleanup = () => {
      refCurrent?.removeEventListener('click', handleClick)
    }

    refCurrent?.addEventListener('click', handleClick)

    return handleCleanup // Use the captured value in the cleanup function
  }, []) // Empty dependency array because this effect only runs once

  return (
    <Link ref={anchorRef} {...props}>
      {children}
    </Link>
  )
}
