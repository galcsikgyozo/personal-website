import Link from 'next/link'
import Image from 'next/image'

import borderGradient from './borderGradient.module.scss'

import { cn } from '@/app/utils/cn'

interface ContactCardProps {
  href: string
  src: string
  alt: string
  label: string
  title: string
  className?: string
}

const ContactCard: React.FC<ContactCardProps> = ({
  href,
  src,
  alt,
  label,
  title,
  className,
}) => {
  return (
    <Link
      href={href || '#'}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={cn(
        `${borderGradient.wrapper} contact-card flex flex-col @@:gap-y-6 @@:rounded-xl @@:px-6 @@:py-9`,
        className
      )}
    >
      <div className="contact-card-icon inline-grid place-items-center bg-backgroundAlt @@:size-12 @@:rounded-md">
        <Image
          className="object-contain @@:size-6"
          src={src}
          alt={alt}
          width={24}
          height={24}
          fill={false}
          unoptimized
          loading="lazy"
        />
      </div>
      <div className="contact-card-text flex flex-col @@:gap-y-2.5">
        <h4 className="label">{label}</h4>
        <div className="h4 text-primary">{title}</div>
      </div>
    </Link>
  )
}

export default ContactCard
