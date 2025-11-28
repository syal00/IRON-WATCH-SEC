import { Metadata } from 'next'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us - Iron Watch Security Inc.',
  description: 'Get in touch with Iron Watch Security Inc. Request a quote, call us at (226) 927-3959, or email info@ironwatchsecurity.com. 24/7 response available.',
}

export default function Contact() {
  return <ContactPage />
}


