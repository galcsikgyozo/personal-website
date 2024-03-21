'use client'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `/images/optimized/${src
    .replace(/^\//, '')
    .replace(/\.(jpe?g|png)$/, '')}-${width}.webp`
}

const R2Image: React.FC<ImageProps> = (props) => {
  const { alt, ...restProps } = props
  return <Image alt={alt || ''} {...restProps} loader={imageLoader} />
}

export default R2Image
