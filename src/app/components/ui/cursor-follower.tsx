'use client'

import React, { useRef, useLayoutEffect, useState } from 'react'

const CursorFollower: React.FC = () => {
  var isDesktop = false
  // var isSafari = false

  if (typeof navigator !== 'undefined') {
    isDesktop =
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator?.userAgent
      ) && /Mac|Win|Linux/i.test(navigator?.platform || '')

    // isSafari = /^((?!chrome|android).)*safari/i.test(navigator?.userAgent)
  }

  const cursorFollowerRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: PointerEvent) => {
    if (cursorFollowerRef.current) {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }
  }

  useLayoutEffect(() => {
    if (!isDesktop) return
    // if (isSafari) return

    document.addEventListener('pointermove', handleMouseMove)

    return () => {
      document.removeEventListener('pointermove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        id="cursor-follower"
        ref={cursorFollowerRef}
        className={`pointer-events-none fixed -z-20 origin-center -rotate-45 scale-y-150 rounded-full bg-body transition-all duration-[3s] ease-out-cubic will-change-transform [translate:-50%_-50%] @@:size-[512px]`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      <div className="pointer-events-none fixed left-0 top-0 -z-10 h-screen w-screen bg-background/75 backdrop-blur-[200px]" />
    </>
  )
}

export default CursorFollower
