import { Metadata } from 'next'
import ServicesPage from '@/components/pages/ServicesPage'

export const metadata: Metadata = {
  title: 'Security Services - Iron Watch Security Inc.',
  description: 'Comprehensive security services including mobile patrol, on-site guards, CCTV monitoring, event security, loss prevention, and corporate security solutions.',
}

export default function Services() {
  return <ServicesPage />
}


