'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  image?: string
}

const ServicesPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services: Service[] = [
    {
      title: 'Mobile Patrol',
      description: 'Regular patrols of your property with rapid response capabilities. Our mobile security teams provide visible presence and immediate response to incidents, ensuring your property is continuously monitored and protected.',
      features: [
        'Regular scheduled patrols',
        'Rapid response to incidents',
        'Visible security presence',
        'Detailed patrol reports',
        'Flexible scheduling options',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'On-Site Security Guards',
      description: 'Professional, licensed security personnel stationed at your location. Trained to handle various situations while maintaining a professional presence that deters potential threats and ensures safety.',
      features: [
        'Licensed security professionals',
        '24/7 or scheduled coverage',
        'Access control management',
        'Incident reporting',
        'Professional appearance',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'CCTV Monitoring',
      description: 'Advanced surveillance systems with 24/7 monitoring capabilities. Real-time alerts and recorded footage for comprehensive security coverage that helps prevent incidents and provides evidence when needed.',
      features: [
        '24/7 remote monitoring',
        'Real-time alerts',
        'High-definition cameras',
        'Cloud storage options',
        'Mobile app access',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Event Security',
      description: 'Specialized security services for events of all sizes. Crowd management, access control, and emergency response for conferences, festivals, corporate events, and private functions.',
      features: [
        'Crowd management',
        'Access control',
        'Emergency response',
        'VIP protection',
        'Event planning support',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Loss Prevention',
      description: 'Comprehensive strategies to prevent theft and reduce shrinkage. Trained personnel and advanced techniques to protect your assets and inventory while maintaining a positive customer experience.',
      features: [
        'Theft prevention strategies',
        'Inventory protection',
        'Shoplifting deterrence',
        'Employee training support',
        'Loss analysis reports',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Corporate Security',
      description: 'Tailored security solutions for corporate environments. Access control, visitor management, and executive protection services for businesses of all sizes.',
      features: [
        'Access control systems',
        'Visitor management',
        'Executive protection',
        'Reception security',
        'Custom security plans',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-charcoal pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Our Security Services
            </h1>
            <p className="text-xl md:text-2xl text-silver-dark max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business, property, and peace of mind
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24" ref={ref}>
        <div className="section-container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-gold mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-silver-dark mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-silver-dark text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Request Quote Button */}
                  <Link
                    href="/contact"
                    className="inline-block btn-primary"
                  >
                    Request Quote
                  </Link>
                </div>

                {/* Image Placeholder */}
                <div className={`bg-charcoal-light/50 border border-gold/20 rounded-2xl p-12 flex items-center justify-center min-h-[400px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-gold/50 mb-4">
                      {service.icon}
                    </div>
                    <p className="text-silver-dark">Service Image</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal-light">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-silver-dark mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized security solution
          </p>
          <Link href="/contact" className="btn-primary text-lg px-12 py-5">
            Request Service Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

