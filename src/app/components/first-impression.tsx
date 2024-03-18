import React from 'react'
import Image from 'next/image'

import WordLoop from '@/app/components/ui/word-loop'

import portraitImage from '~/static/images/gyozo-galcsik-portrait.webp'

const FirstImpression: React.FC = () => {
  return (
    <section className="first-impression px-container grid-base relative h-svh @sm:pb-12 @sm:pt-36 @md:py-24 @lg:py-32 md:max-h-[75vw] md:min-h-[50vw]">
      <h1 className="first-text display col-span-12 flex flex-col text-primary @sm:gap-y-4 @md:gap-y-6 @lg:gap-y-9 md:col-span-17 md:self-center">
        <span className="first-impression-text-row flex items-center @sm:gap-x-3 @md:gap-x-4 @lg:gap-x-5">
          <span>My name is</span>
          <span className="spacer-w-auto grow bg-current @sm:h-[18px] @md:h-[30px] @lg:h-9"></span>{' '}
        </span>
        <span className="first-impression-text-row flex items-center @sm:gap-x-3 @md:gap-x-4 @lg:gap-x-5">
          <span className="spacer-w-md bg-current @sm:h-[18px] @sm:w-12 @md:h-[30px] @md:w-24 @lg:h-9 @lg:w-32"></span>
          <span>Gyozo</span>
          <span className="spacer-w-sm bg-current @sm:h-[18px] @sm:w-6 @md:h-[30px] @md:w-12 @lg:h-9 @lg:w-24"></span>{' '}
          <span>Galcsik</span>
          <span className="spacer-w-auto grow bg-current @sm:h-[18px] @md:h-[30px] @lg:h-9"></span>{' '}
        </span>
        <span className="first-impression-text-row flex items-center @sm:gap-x-3 @md:gap-x-4 @lg:gap-x-5">
          <span>and</span>
          <span className="spacer-w-sm bg-current @sm:h-[18px] @sm:w-6 @md:h-[30px] @md:w-12 @lg:h-9 @lg:w-24"></span>{' '}
          <span>I am a</span>
          <span className="spacer-w-auto grow bg-current @sm:h-[18px] @md:h-[30px] @lg:h-9"></span>{' '}
        </span>
        <span className="first-impression-text-row flex items-center @sm:gap-x-3 @md:gap-x-4 @lg:gap-x-5">
          <span className="spacer-w-auto grow bg-current @sm:h-[18px] @md:h-[30px] @lg:h-9"></span>
          <WordLoop
            words={[
              'web developer',
              'UI/UX designer',
              'project manager',
              'content creator',
              'digital native',
            ]}
            delay={1000}
          />
        </span>
      </h1>
      <div
        className="first-impression-helper label w-container absolute left-1/2 flex -translate-x-1/2 transform flex-col items-center justify-center text-body @sm:bottom-16 @sm:gap-y-2 @md:bottom-24 @md:gap-y-3 @lg:bottom-16 @lg:gap-y-3"
        role="presentation"
        aria-hidden="true"
      >
        <span className="first-impression-helper-text pointer-events-none whitespace-nowrap">
          Scroll down for more information
        </span>
        <svg
          className="first-impression-helper-icon overflow-visible object-contain @sm:size-2 @md:size-3 @lg:size-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 8"
        >
          <path
            fill="currentColor"
            d="M8 4L4 8 0 4l.72-.7L3.5 6.09v-6.1h.98v6.1l2.81-2.8L8 4z"
          />
        </svg>
      </div>
      <Image
        src={portraitImage}
        alt="Portrait of Gyozo Galcsik"
        width={0}
        height={0}
        fill={false}
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        priority={true}
        decoding="async"
        className="absolute right-0 top-1/2 -z-[1] h-1/2 w-screen transform object-cover @md:h-[464px] @md:w-96 max-md:[--tw-translate-y:calc(-50%+var(--tw-translate-y-offset))] max-md:@sm:[--tw-translate-y-offset:96px] md:-translate-y-1/2"
      />
    </section>
  )
}

export default FirstImpression
