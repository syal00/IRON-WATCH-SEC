import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Iron Watch Security Inc. - Professional Security Solutions',
    template: '%s | Iron Watch Security Inc.',
  },
  description: 'Professional security solutions you can trust. Certified personnel, 24/7 protection, and modern technologies. Serving Ottawa and surrounding areas. Licensed & insured.',
  keywords: ['security services', 'mobile patrol', 'security guards', 'CCTV monitoring', 'event security', 'Ottawa security', 'corporate security', 'loss prevention'],
  authors: [{ name: 'Iron Watch Security Inc.' }],
  creator: 'Iron Watch Security Inc.',
  publisher: 'Iron Watch Security Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ironwatchsecurity.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ironwatchsecurity.ca',
    siteName: 'Iron Watch Security Inc.',
    title: 'Iron Watch Security Inc. - Professional Security Solutions',
    description: 'Professional security solutions you can trust. Certified personnel, 24/7 protection, and modern technologies.',
    images: [
      {
        url: '/logo-ironwatch.png',
        width: 1200,
        height: 630,
        alt: 'Iron Watch Security Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Watch Security Inc. - Professional Security Solutions',
    description: 'Professional security solutions you can trust. Certified personnel, 24/7 protection, and modern technologies.',
    images: ['/logo-ironwatch.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo-ironwatch.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-ironwatch.png" />
      </head>
      <body>
        <Script 
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="lazyOnload"
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0b1120',
              color: '#e5e7eb',
              border: '1px solid #a855f7',
              borderRadius: '0.5rem',
            },
            success: {
              iconTheme: {
                primary: '#a855f7',
                secondary: '#e5e7eb',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#e5e7eb',
              },
            },
          }}
        />
      </body>
    </html>
  )
}


