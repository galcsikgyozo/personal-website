import React from 'react'

import Anchor from '@/app/utils/link'
import Image from 'next/image'

import borderGradient from './borderGradient.module.scss'

import { cn } from '@/app/utils/cn'

interface LogoProps {
  href?: string
  src: string
  alt: string
  className?: string
}

const Logo: React.FC<LogoProps> = ({ href, src, alt, className }) => {
  return (
    <Anchor
      href={href || '#'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className={cn(
        `${borderGradient.wrapper} inline-grid w-full place-items-center @sm:min-h-[105px] @sm:rounded-lg @md:min-h-[120px] @md:rounded-xl @lg:min-h-[140px] @lg:rounded-xl @sm:max-md:even:-mb-[52px] @sm:max-md:even:mt-[52px] md:nth-[5n-1]:-mb-12 @@:md:nth-[5n-1]:mt-12 @@:md:nth-[5n-3]:-mb-12 @@:md:nth-[5n-3]:mt-12 @@:md:nth-[5n-4]:-mb-24 @@:md:nth-[5n-4]:mt-24 @@:md:nth-[5n]:-mb-24 @@:md:nth-[5n]:mt-24`,
        className
      )}
    >
      <Image
        className="object-contain object-center @sm:h-[60px] @sm:w-[110px] @md:h-[60px] @md:w-[120px] @lg:h-[70px] @lg:w-[140px]"
        src={src}
        alt={alt}
        width={0}
        height={0}
        fill={false}
        unoptimized
      />
    </Anchor>
  )
}

export default Logo
