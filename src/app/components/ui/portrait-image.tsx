'use client'

import Image from 'next/image'
// import portraitImage from '~/images/gyozo-galcsik-portrait.jpg'

interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src.replace(/\.(png|jpe?g)$/i, '')}-${width}.webp`
}

const PortraitImage: React.FC = () => {
  return (
    <Image
      loader={imageLoader}
      src={`${process.env.CLOUDFLARE_R2_BUCKET_URL}/images/gyozo-galcsik-portrait.jpg`}
      alt="Portrait of Gyozo Galcsik"
      width={0}
      height={0}
      fill={false}
      sizes="100vw"
      loading="eager"
      fetchPriority="high"
      priority={false}
      decoding="async"
      className="absolute right-0 top-1/2 -z-[1] h-1/2 w-screen transform object-cover @md:h-[464px] @md:w-96 max-md:[--tw-translate-y:calc(-50%+var(--tw-translate-y-offset))] max-md:@sm:[--tw-translate-y-offset:96px] md:-translate-y-1/2"
    />
  )
}

export default PortraitImage
