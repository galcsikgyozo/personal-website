import { useState, useEffect } from 'react'
import styleConfig from '$styleConfig'

export const useWindowSize = () => {
  const [screenSize, setScreenSize] = useState<string>('')

  useEffect(() => {
    const updateScreenSize = () => {
      const { md, lg } = styleConfig.breakpoints
      const width = window.innerWidth

      const screenSize = width >= lg ? 'lg' : width >= md ? 'md' : 'sm'

      setScreenSize(screenSize)
    }

    updateScreenSize()

    window.addEventListener('resize', updateScreenSize)

    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])

  return screenSize
}
