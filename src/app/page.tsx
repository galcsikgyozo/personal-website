import { Suspense } from 'react'

import FirstImpression from '@/app/components/first-impression'
import Intro from '@/app/components/intro'
import Logos from '@/app/components/logos'
import Contact from '@/app/components/contact'

export default function Home() {
  return (
    <main id="homepage">
      <FirstImpression />
      <Intro />
      <Suspense>
        <Logos />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  )
}
