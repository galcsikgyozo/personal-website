'use client'

import { useState, useLayoutEffect } from 'react'

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
      <style jsx>{`
        @keyframes cursorFollowerSpin {
          0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
          }
        }
        #cursor-follower {
          animation: cursorFollowerSpin 10s linear infinite;
        }
      `}</style>
      <div
        id="cursor-follower"
        className={`pointer-events-none fixed -z-20 h-[1024px] w-[320px] rounded-[100%] bg-body blur-[192px] transition-[translate] duration-[3s] ease-out-cubic`}
        style={{
          translate: `${cursorPosition.x}px ${cursorPosition.y}px`,
        }}
      />
      <div className="pointer-events-none fixed left-0 top-0 -z-10 h-screen w-screen bg-background/75" />
    </>
  )
}

export default CursorFollower
