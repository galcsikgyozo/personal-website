'use client'

import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

import ContactCard from '@/app/components/ui/contact-card'

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const animateTranslate1 = useTransform(scrollYProgress, [0, 1], ['50%', '0%'])
  const animateTranslate2 = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '0%']
  )
  const animateTranslate3 = useTransform(
    scrollYProgress,
    [0, 1],
    ['150%', '0%']
  )
  const animateOpacitySm = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const animateOpacityLg = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])

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

  return (
    <LazyMotion features={domAnimation}>
      <section id="contact" className="px-container grid-base pt-0" ref={ref}>
        <m.h3
          style={
            screenSize === 'small'
              ? { opacity: animateOpacitySm }
              : {
                  opacity: animateOpacityLg,
                }
          }
          className="h3 col-span-12 text-primary @sm:mb-8 @md:mb-12 @lg:mb-16 md:col-span-12 md:col-start-7 md:text-center"
        >
          Got a project for me?
          <br />
          Wanna hire me?
          <br />
          Or just stalk?
        </m.h3>
        <div className="contact-card-wrapper gap-x-base col-span-12 grid grid-cols-1 @sm:gap-y-4 md:col-span-24 md:grid-cols-3">
          <m.div
            style={
              screenSize === 'small'
                ? { y: animateTranslate1, opacity: animateOpacitySm }
                : { y: animateTranslate1, opacity: animateOpacityLg }
            }
          >
            <ContactCard
              href="mailto:hello@gyozo.me"
              src="/images/icon-envelope.svg"
              alt="Email icon"
              label="Say hello in an email"
              title="hello@gyozo.me"
            />
          </m.div>
          <m.div
            style={
              screenSize === 'small'
                ? { y: animateTranslate2, opacity: animateOpacitySm }
                : { y: animateTranslate2, opacity: animateOpacityLg }
            }
          >
            <ContactCard
              href="https://www.linkedin.com/in/galcsikgyozo"
              src="/images/icon-linkedin-in.svg"
              alt="LinkedIn icon"
              label="Let's connect on LinkedIn"
              title="/in/galcsikgyozo"
            />
          </m.div>
          <m.div
            style={
              screenSize === 'small'
                ? { y: animateTranslate3, opacity: animateOpacitySm }
                : { y: animateTranslate3, opacity: animateOpacityLg }
            }
          >
            <ContactCard
              href="https://instagram.com/gyozogalcsik"
              src="/images/icon-instagram.svg"
              alt="Instagram icon"
              label="Follow me on Instagram"
              title="@gyozogalcsik"
            />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  )
}

export default Contact
