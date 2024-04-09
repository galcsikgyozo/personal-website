'use client'

import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'

import { useEffect, useRef, useState } from 'react'

import { cn } from '../utils/cn'

import Logo from '@/app/components/ui/logo'

const Intro: React.FC = () => {
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const translateMore = useTransform(
    scrollYProgress,
    [0.25, 0.75],
    ['100%', '-25%']
  )
  const translateBase = useTransform(
    scrollYProgress,
    [0.25, 0.75],
    ['50%', '-10%']
  )
  const translateNone = useTransform(scrollYProgress, [0.1, 0.9], [0, 0])

  const animateOpacitySm = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const animateOpacityLg = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])

  const [screenSize, setScreenSize] = useState('small')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth >= 640) {
          setScreenSize('large')
        } else {
          setScreenSize('small')
        }
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const logos = [
    {
      href: 'https://atelierdesign.be',
      src: '/images/logo-atelierdesign.svg',
      alt: 'Logo of Atelier Design Bruxelles',
    },
    {
      href: 'https://postforrent.com',
      src: '/images/logo-postforrent.svg',
      alt: 'Logo of Post For Rent International',
    },
    {
      href: 'https://m15project.com',
      src: '/images/logo-m15.svg',
      alt: 'Logo of M15 (MIP Productions Kft.)',
    },
    {
      href: 'https://progressive.hu',
      src: '/images/logo-progressive.svg',
      alt: 'Logo of Progressive Advertising Agency (Progressive BEX Kft.)',
    },
    {
      href: 'https://wlwyb.com',
      src: '/images/logo-wlwyb.svg',
      alt: 'Logo of WLWYB - We Love What You Build',
    },
    {
      href: 'https://mckinsey.com',
      src: '/images/logo-mckinsey.svg',
      alt: 'Logo of McKinsey & Company',
    },
    {
      href: 'https://jamesonwhiskey.com',
      src: '/images/logo-jameson.svg',
      alt: 'Logo of Jameson Irish Whiskey',
    },
    {
      href: 'https://wearesander.com',
      src: '/images/logo-sander.svg',
      alt: 'Logo of SANDER Recruitment Agency',
    },
    {
      href: 'https://mypos.com',
      src: '/images/logo-mypos.svg',
      alt: 'Logo of MyPOS Payment Solutions',
    },
    {
      href: 'https://budapest.hu',
      src: '/images/logo-budapest.svg',
      alt: 'Logo of Municipality of the Capital of Budapest',
    },
    {
      href: 'https://coca-cola.com',
      src: '/images/logo-cocacola.svg',
      alt: 'Logo of The Coca-Cola Company',
    },
    {
      href: 'https://ballantines.com',
      src: '/images/logo-ballantines.svg',
      alt: "Logo of Ballantine's Scotch Whisky",
    },
    {
      href: 'https://fipra.com',
      src: '/images/logo-fipra.svg',
      alt: 'Logo of FIPRA International Public Affairs Agency',
    },
    {
      href: 'https://dlink.com',
      src: '/images/logo-dlink.svg',
      alt: 'Logo of D-Link Corporation',
    },
    {
      href: 'https://curaprox.com',
      src: '/images/logo-curaprox.svg',
      alt: 'Logo of Curaprox AG',
    },
    {
      href: 'https://mcdonalds.com',
      src: '/images/logo-mcdonalds.svg',
      alt: "Logo of McDonald's Corporation",
    },
    {
      href: 'https://unicef.hu',
      src: '/images/logo-unicef.svg',
      alt: 'Logo of UNICEF Hungary',
    },
    {
      href: 'https://generali.com',
      src: '/images/logo-generali.svg',
      alt: 'Logo of Generali Insurance Company',
    },
  ]

  return (
    <LazyMotion features={domAnimation}>
      <section id="logos" className="px-container grid-base relative" ref={ref}>
        <m.h3
          className="h3 col-span-12 text-primary @sm:mb-12 @md:mb-12 @lg:mb-16 md:col-span-18 md:col-start-4 md:text-center"
          style={
            screenSize === 'small'
              ? { opacity: animateOpacitySm }
              : {
                  opacity: animateOpacityLg,
                }
          }
        >
          Some of the companies I&nbsp;worked with in&nbsp;some
          way,&nbsp;shape&nbsp;or form
        </m.h3>
        <div
          id="logosHolder"
          className="gap-x-base col-span-12 grid grid-cols-2 @@:gap-y-4 @md:pb-24 @sm:max-md:pb-[52px] md:col-span-24 md:grid-cols-5"
        >
          {logos.map((logo, index) => (
            <m.div
              key={index}
              style={
                screenSize == 'large'
                  ? {
                      y:
                        // third to last logo
                        index === logos.length - 3
                          ? translateBase
                          : // second to last logo
                            index === logos.length - 2
                            ? translateNone
                            : // last logo
                              index === logos.length - 1
                              ? translateBase
                              : // 1st, 6th, 11th, etc. logo
                                index % 5 === 0
                                ? translateMore
                                : // 2nd, 7th, 12th, etc. logo
                                  index % 5 === 1
                                  ? translateBase
                                  : // 3rd, 8th, 13th, etc. logo
                                    index % 5 === 2
                                    ? translateNone
                                    : // 4th, 9th, 14th, etc. logo
                                      index % 5 === 3
                                      ? translateBase
                                      : // 5th, 10th, 15th, etc. logo
                                        index % 5 === 4
                                        ? translateMore
                                        : 0,
                      opacity: animateOpacityLg,
                    }
                  : {
                      y: translateNone,
                      opacity: animateOpacitySm,
                    }
              }
              className={cn(
                '@sm:max-md:even:-mb-[52px] @sm:max-md:even:mt-[52px] md:nth-[5n-1]:-mb-12 @@:md:nth-[5n-1]:mt-12 @@:md:nth-[5n-3]:-mb-12 @@:md:nth-[5n-3]:mt-12 @@:md:nth-[5n-4]:-mb-24 @@:md:nth-[5n-4]:mt-24 @@:md:nth-[5n]:-mb-24 @@:md:nth-[5n]:mt-24',
                // third to last logo
                index === logos.length - 3 &&
                  'md:col-start-2 @@:md:!-mb-12 @@:md:!mt-12',
                // second to last logo
                index === logos.length - 2 && '@@:md:!-mb-0 @@:md:!mt-0',
                // last logo
                index === logos.length - 1 && '@@:md:!-mb-12 @@:md:!mt-12'
              )}
            >
              <Logo {...logo} />
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  )
}

export default Intro
