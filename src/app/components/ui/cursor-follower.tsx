'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, Point } from 'framer-motion'

const CursorFollower: React.FC = () => {
  const cursorFollowerRef = useRef<HTMLDivElement>(null)

  const [cursorPosition, setCursorPosition] = useState<Point>({ x: 0, y: 0 })

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (cursorFollowerRef.current) {
        setCursorPosition({ x: event.clientX, y: event.clientY })
      }
    }

    document.body.addEventListener('pointermove', handlePointerMove)

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <>
      <motion.div
        ref={cursorFollowerRef}
        // className="fixed size-48 rounded-full bg-white transition-transform duration-300"
        className={`pointer-events-none fixed -z-20 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 scale-y-150 transform rounded-full bg-body @@:size-[538px]`}
        initial={{
          left: 0,
          top: 0,
        }}
        animate={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
        transition={{
          ease: 'easeOut',
          duration: 1,
        }}
      />
      <div className="pointer-events-none fixed left-0 top-0 -z-10 h-screen w-screen bg-background/75 backdrop-blur-[200px]" />
    </>
  )
}

export default CursorFollower
