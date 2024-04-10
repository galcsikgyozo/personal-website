'use client'

import { useState, useEffect } from 'react'

interface WordLoopProps {
  words: string[]
  delay: number
}

const WordLoop: React.FC<WordLoopProps> = ({ words, delay }) => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, delay)

    return () => clearInterval(interval)
  }, [delay, words.length])

  return (
    <>
      {/* Render the current word for the client side */}
      <span aria-live="polite">{words[index]}</span>

      {/* Fallback for screen readers and search engines */}
      <span className="sr-only">
        {words.map((word, i) => (i > 0 ? `, ${word}` : null))}
      </span>
    </>
  )
}

export default WordLoop
