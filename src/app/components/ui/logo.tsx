import Anchor from '@/app/utils/link'
import Image from 'next/image'

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
        `border-gradient inline-grid w-full place-items-center @sm:min-h-[105px] @sm:rounded-lg @md:min-h-[120px] @md:rounded-xl @lg:min-h-[140px] @lg:rounded-xl`,
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
