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
  title: 'Gyozo Galcsik',
  description:
    'Professional Digital Native based in Brussels & Budapest. Web Developer, UI/UX Designer, Project Manager, Content Creator.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} base bg-background text-body`}>
        {children}
      </body>
    </html>
  )
}
