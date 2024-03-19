'use client'

import Image from 'next/image'
import type { ImageProps } from 'next/image'

interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${process.env.NEXT_PUBLIC_R2_BUCKET_URL || ''}/${src
    .replace(/^\//, '')
    .replace(/\.(jpe?g|png)$/, '')}-${width}.webp`
}

const R2Image: React.FC<ImageProps> = (props) => {
  return <Image {...props} loader={imageLoader} />
}

export default R2Image
