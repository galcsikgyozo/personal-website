import { useState, useEffect } from 'react'
import styleConfig from '$styleConfig'

export const useWindowSize = () => {
  const [screenSize, setScreenSize] = useState<string>('')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= styleConfig.breakpoints.md) {
        setScreenSize('large')
      } else {
        setScreenSize('small')
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}
