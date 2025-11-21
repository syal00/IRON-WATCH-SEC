import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Iron Watch Security - Professional Security Guard & Mobile Patrol Services',
  description: 'Professional security guard and mobile patrol services serving Ottawa and surrounding areas. 24/7 coverage with licensed guards.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#c0c0c0',
              border: '1px solid #d4af37',
            },
          }}
        />
      </body>
    </html>
  )
}


