'use client'

import React, { useRef, useEffect } from 'react'
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
    anchorRef.current?.addEventListener('click', handleClick)

    return () => {
      anchorRef.current?.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <Link ref={anchorRef} {...props}>
      {children}
    </Link>
  )
}
