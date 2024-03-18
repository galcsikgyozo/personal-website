import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

import '@/app/scss/globals.scss'

export const metadata: Metadata = {
  metadataBase: new URL('https://galcsikgyozo.hu'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s - Gyozo Galcsik',
    default: 'Gyozo Galcsik',
  },
  description:
    'Professional Digital Native based in Brussels & Budapest. Web Developer, UI/UX Designer, Project Manager, Content Creator.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#17191d" />
        <meta name="msapplication-TileColor" content="#17191d" />
        <meta name="theme-color" content="#17191d" />
      </head>
      <body className={`${inter.className} base bg-background text-body`}>
        {children}
      </body>
    </html>
  )
}
