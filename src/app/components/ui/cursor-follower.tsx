'use client'

import React, { useLayoutEffect, useState } from 'react'

const CursorFollower: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY })
  }

  useLayoutEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        id="cursor-follower"
        className={`pointer-events-none fixed -z-20 rounded-full bg-body transition-transform duration-[3s] ease-out-cubic [translate:-50%_-50%] size-[512px] blur-[192px]`}
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) rotate(-45deg) scaleY(1.5)`,
        }}
      />
      <div className="pointer-events-none fixed left-0 top-0 -z-10 h-screen w-screen bg-background/75" />
    </>
  )
}

export default CursorFollower
