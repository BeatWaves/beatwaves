import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BandWaves',
  description: 'Application made for aspiring artists.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header>
          {children}
        </Header>
      </body>
    </html>
  )
}
