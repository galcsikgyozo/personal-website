'use client'

import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'

import Anchor from '@/app/utils/link'
import StaticImage from '@/app/utils/static-image'

import WordLoop from '@/app/components/ui/word-loop'

const FirstImpression: React.FC = () => {
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end end'],
  })
  const animateTranslate = useTransform(scrollYProgress, [0, 1], ['35%', '90%'])

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="first-impression"
        className="px-container grid-base relative h-svh @sm:pb-12 @sm:pt-36 @md:py-24 @lg:py-32 md:max-h-[75vw] md:min-h-[50vw]"
      >
        <h1 className="first-text display col-span-12 flex flex-col text-primary @sm:gap-y-4 @md:gap-y-6 @lg:gap-y-9 md:col-span-17 md:self-center">
          <span className="block overflow-hidden">
            <m.span
              className="block"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
            >
              <span className="first-impression-text-row flex items-center @sm:gap-x-3 @md:gap-x-4 @lg:gap-x-5">
                <span>My name is</span>
                <span className="spacer-w-auto grow bg-current @sm:h-[18px] @md:h-[30px] @lg:h-9"></span>{' '}
              </span>
            </m.span>
          </span>
          <span className="block overflow-hidden">
            <m.span
              className="block"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.1 }}
            >
              <span className="first-impression-text-row flex items-center @sm:gap-x-3 @md:gap-x-4 @lg:gap-x-5">
                <span className="spacer-w-md bg-current @sm:h-[18px] @sm:w-12 @md:h-[30px] @md:w-24 @lg:h-9 @lg:w-32"></span>
                <span>Gyozo</span>
                <span className="spacer-w-sm bg-current @sm:h-[18px] @sm:w-6 @md:h-[30px] @md:w-12 @lg:h-9 @lg:w-24"></span>{' '}
                <span>Galcsik</span>
                <span className="spacer-w-auto grow bg-current @sm:h-[18px] @md:h-[30px] @lg:h-9"></span>{' '}
              </span>
            </m.span>
          </span>
          <span className="block overflow-hidden">
            <m.span
              className="block"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.2 }}
            >
              <span className="first-impression-text-row flex items-center @sm:gap-x-3 @md:gap-x-4 @lg:gap-x-5">
                <span>and</span>
                <span className="spacer-w-sm bg-current @sm:h-[18px] @sm:w-6 @md:h-[30px] @md:w-12 @lg:h-9 @lg:w-24"></span>{' '}
                <span>I am a</span>
                <span className="spacer-w-auto grow bg-current @sm:h-[18px] @md:h-[30px] @lg:h-9"></span>{' '}
              </span>
            </m.span>
          </span>
          <span className="block overflow-hidden">
            <m.span
              className="block"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.3 }}
            >
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
            </m.span>
          </span>
        </h1>
        <m.div
          className="first-impression-helper label w-container absolute left-1/2 flex -translate-x-1/2 transform flex-col items-center justify-center text-body @sm:bottom-16 @sm:gap-y-2 @md:bottom-24 @md:gap-y-3 @lg:bottom-16 @lg:gap-y-3"
          role="presentation"
          aria-hidden="true"
          initial={{ opacity: 0, filter: 'blur(24px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.5 }}
        >
          <Anchor
            href="#intro"
            className="first-impression-helper-text inline-block whitespace-nowrap"
          >
            Scroll down for more information
          </Anchor>
          <Anchor href="#intro">
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
          </Anchor>
        </m.div>
        <m.div
          className="absolute right-0 top-1/2 -z-[1] h-1/2 w-screen transform object-cover @md:h-[464px] @md:w-96 max-md:[--tw-translate-y:calc(-50%+var(--tw-translate-y-offset))] max-md:@sm:[--tw-translate-y-offset:96px] md:-translate-y-1/2"
          initial={{ opacity: 0, filter: 'blur(24px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.4 }}
          style={{ top: animateTranslate }}
        >
          <StaticImage
            src="gyozo-galcsik-portrait.jpg"
            alt="Portrait of Gyozo Galcsik"
            width={0}
            height={0}
            fill={false}
            sizes="50vw"
            priority={true}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </m.div>
      </section>
    </LazyMotion>
  )
}

export default FirstImpression
