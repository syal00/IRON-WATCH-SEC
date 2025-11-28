import { Metadata } from 'next'
import AboutPage from '@/components/pages/AboutPage'

export const metadata: Metadata = {
  title: 'About Us - Iron Watch Security Inc.',
  description: 'Learn about Iron Watch Security Inc. - Our mission, vision, licensing, coverage areas, and commitment to providing professional security services.',
}

export default function About() {
  return <AboutPage />
}


