'use client'

interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

export default function cloudflareR2BucketImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `${process.env.NEXT_PUBLIC_R2_BUCKET_URL || ''}/${src
    .replace(/^\//, '')
    .replace(/\.(jpe?g|png)$/, '')}-${width}.webp`
}
