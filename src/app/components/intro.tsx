'use client'

import { useWindowSize } from '@/app/utils/useWindowSize'

import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import Balancer from 'react-wrap-balancer'

import Image from 'next/image'
import Anchor from '@/app/utils/link'

const Intro: React.FC = () => {
  /**
   * Screen size state
   */
  const screenSize = useWindowSize()

  /**
   * Defining reference and scrollYProgress
   */
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  /**
   * Different opacity animations for small and large screens
   */
  const animateOpacitySm = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const animateOpacityLg = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

  /**
   * Render the component
   */
  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        id="intro"
        className="intro px-container grid-base relative @md:mt-[64px] @lg:mt-[128px] @sm:max-md:pb-[512px]"
      >
        <div className="introText relative z-[1] col-span-12 flex flex-col @sm:gap-6 @md:gap-9 @lg:gap-9 md:col-span-17 lg:col-span-19">
          <m.h2
            className="intro-title h2 text-primary"
            style={{
              opacity:
                screenSize === 'large' ? animateOpacityLg : animateOpacitySm,
            }}
          >
            Professional Digital&nbsp;Native based in
            Brussels&nbsp;&&nbsp;Budapest
          </m.h2>
          <m.div
            className="intro-content base @md:pr-10 @sm:[&_*:not(:last-child)]:mb-4 @md:[&_*:not(:last-child)]:mb-6 @lg:[&_*:not(:last-child)]:mb-6 [&_strong]:font-normal [&_strong]:text-primary"
            style={{
              opacity:
                screenSize === 'large' ? animateOpacityLg : animateOpacitySm,
            }}
          >
            <Balancer ratio={1} preferNative={false}>
              <p>
                I've always been passionate about{' '}
                <strong>digital&nbsp;media</strong>, <strong>technology</strong>
                , and <strong>advertising</strong>, diving myself into{' '}
                <strong>web development</strong>, <strong>UI/UX design</strong>,
                digital content creation and online marketing from a young age.
              </p>
              <p>
                I've designed, built and managed various websites, worked on{' '}
                <strong>award&#8209;winning social media campaigns</strong>, and
                overseen the <strong>CI/CD pipeline</strong> for large{' '}
                <strong>B2B SaaS products</strong>, working closely alongside a
                wide-range of teams.
              </p>
            </Balancer>
          </m.div>
          <m.div
            className="intro-buttons-holder flex flex-col items-center justify-start @sm:gap-4 @md:gap-6 @lg:gap-8 md:flex-row"
            style={{
              opacity:
                screenSize === 'large' ? animateOpacityLg : animateOpacitySm,
            }}
          >
            <Anchor
              href="/files/gyozo-galcsik-cv-2024.pdf"
              target="_blank"
              className="button button-primary max-md:w-full"
            >
              Download my CV
            </Anchor>
            <Anchor
              href="#contact"
              className="button button-secondary max-md:w-full"
            >
              Get in touch
            </Anchor>
          </m.div>
        </div>
        <Image
          src="/images/map-europe.svg"
          alt="Map of Europe"
          width={0}
          height={0}
          fill={false}
          unoptimized
          className="absolute z-0 aspect-[1000/846] max-w-none @sm:bottom-[-82px] @sm:right-[-338px] @sm:w-[1000px] @md:bottom-10 @md:right-[-236px] @md:w-[758px] @lg:bottom-[-14px] @lg:right-[-367px] @lg:w-[1000px]"
          loading="lazy"
        />
        <div
          id="mapPointBrussels"
          className={`absolute rounded-full bg-primary before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:origin-center before:animate-scale-and-fade-out before:rounded-full before:bg-primary before:content-[""] @@:size-2 @sm:bottom-[264px] @sm:right-[288px] @md:bottom-[300px] @md:right-[236px] @lg:bottom-[330px] @lg:right-[256px]`}
        />
        <div
          id="mapPointBudapest"
          className={`absolute rounded-full bg-primary before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:origin-center before:animate-scale-and-fade-out before:rounded-full before:bg-primary before:content-[""] @@:size-2 @sm:bottom-[204px] @sm:right-[82px] @md:bottom-[256px] @md:right-20 @lg:bottom-[272px] @lg:right-[50px]`}
        />
      </section>
    </LazyMotion>
  )
}

export default Intro
