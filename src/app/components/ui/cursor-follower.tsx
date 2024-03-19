'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, Point } from 'framer-motion'

import animateSpinVerySlow from './animateSpinVerySlow.module.scss'

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
        className={`${animateSpinVerySlow.style} pointer-events-none fixed -z-20 size-96 origin-center rounded-[100%] bg-body [translate:-50%_-50%] @@:h-[804px] @@:w-[538px]`}
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
