import React from 'react'

import Logo from '@/app/components/ui/logo'

const Intro: React.FC = () => {
  return (
    <section id="logos" className="px-container grid-base">
      <h3 className="h3 col-span-12 text-primary @sm:mb-12 @md:mb-12 @lg:mb-16 md:col-span-18 md:col-start-4 md:text-center">
        Some of the companies I&nbsp;worked with in&nbsp;some
        way,&nbsp;shape&nbsp;or form
      </h3>
      <div
        id="logosHolder"
        className="gap-x-base col-span-12 grid grid-cols-2 @@:gap-y-4 @md:pb-24 @sm:max-md:pb-[52px] md:col-span-24 md:grid-cols-5"
      >
        <Logo
          href="https://atelierdesign.be"
          src="/images/logo-atelierdesign.svg"
          alt="Logo of Atelier Design Bruxelles"
        />
        <Logo
          href="https://postforrent.com"
          src="/images/logo-postforrent.svg"
          alt="Logo of Post For Rent International"
        />
        <Logo
          href="https://m15project.com"
          src="/images/logo-m15.svg"
          alt="Logo of M15 (MIP Productions Kft.)"
        />
        <Logo
          href="https://progressive.hu"
          src="/images/logo-progressive.svg"
          alt="Logo of Progressive Advertising Agency (Progressive BEX Kft.)"
        />
        <Logo
          href="https://wlwyb.com"
          src="/images/logo-wlwyb.svg"
          alt="Logo of WLWYB - We Love What You Build"
        />
        <Logo
          href="https://mckinsey.com"
          src="/images/logo-mckinsey.svg"
          alt="Logo of McKinsey & Company"
        />
        <Logo
          href="https://jamesonwhiskey.com"
          src="/images/logo-jameson.svg"
          alt="Logo of Jameson Irish Whiskey"
        />
        <Logo
          href="https://wearesander.com"
          src="/images/logo-sander.svg"
          alt="Logo of SANDER Recruitment Agency"
        />
        <Logo
          href="https://mypos.com"
          src="/images/logo-mypos.svg"
          alt="Logo of MyPOS Payment Solutions"
        />
        <Logo
          href="https://budapest.hu"
          src="/images/logo-budapest.svg"
          alt="Logo of Municipality of the Capital of Budapest"
        />
        <Logo
          href="https://coca-cola.com"
          src="/images/logo-cocacola.svg"
          alt="Logo of The Coca-Cola Company"
        />
        <Logo
          href="https://ballantines.com"
          src="/images/logo-ballantines.svg"
          alt="Logo of Ballantine's Scotch Whisky"
        />
        <Logo
          href="https://fipra.com"
          src="/images/logo-fipra.svg"
          alt="Logo of FIPRA International Public Affairs Agency"
        />
        <Logo
          href="https://dlink.com"
          src="/images/logo-dlink.svg"
          alt="Logo of D-Link Corporation"
        />
        <Logo
          href="https://curaprox.com"
          src="/images/logo-curaprox.svg"
          alt="Logo of Curaprox AG"
        />
        <Logo
          href="https://mcdonalds.com"
          src="/images/logo-mcdonalds.svg"
          alt="Logo of McDonald's Corporation"
          className="md:col-start-2 @@:md:!-mb-12 @@:md:!mt-12"
        />
        <Logo
          href="https://unicef.hu"
          src="/images/logo-unicef.svg"
          alt="Logo of UNICEF Hungary"
          className="@@:md:!-mb-0 @@:md:!mt-0"
        />
        <Logo
          href="https://generali.com"
          src="/images/logo-generali.svg"
          alt="Logo of Generali Insurance Company"
          className="@@:md:!-mb-12 @@:md:!mt-12"
        />
      </div>
    </section>
  )
}

export default Intro
