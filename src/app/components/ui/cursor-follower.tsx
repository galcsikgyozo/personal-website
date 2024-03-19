'use client'

import React, { useRef, useEffect } from 'react'

const CursorFollower: React.FC = () => {
  const cursorFollowerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: any) => {
    cursorFollowerRef.current?.animate(
      {
        transform: `translate(${event.clientX}px, ${event.clientY}px)`,
      },
      {
        duration: 5000,
        fill: 'forwards',
      }
    )
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        id="cursor-follower"
        ref={cursorFollowerRef}
        className={`pointer-events-none fixed -z-20 origin-center -rotate-45 scale-y-150 rounded-full bg-body [translate:-50%_-50%] @@:size-[538px]`}
      />
      <div className="pointer-events-none fixed left-0 top-0 -z-10 h-screen w-screen bg-background/75 backdrop-blur-[200px]" />
    </>
  )
}

export default CursorFollower
