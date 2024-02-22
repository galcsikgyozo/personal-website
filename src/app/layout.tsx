import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ 
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

import '@/scss/globals.scss';

export const metadata: Metadata = {
  title: "Gyozo Galcsik",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-body`}>
        {children}
      </body>
    </html>
  );
}
