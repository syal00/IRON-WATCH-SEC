'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Service {
  title: string
  description: string
  icon: string
}

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services: Service[] = [
    {
      title: 'Retail & Plaza Security',
      description: 'Comprehensive security solutions for shopping centers, retail stores, and commercial plazas. Protect your business and customers.',
      icon: '🛒',
    },
    {
      title: 'Construction Site Security',
      description: '24/7 monitoring and protection for construction sites. Prevent theft, vandalism, and unauthorized access to valuable equipment.',
      icon: '🏗️',
    },
    {
      title: 'Residential & Condo Security',
      description: 'Peace of mind for residents and property managers. Professional security services for condominiums, apartment buildings, and residential complexes.',
      icon: '🏠',
    },
    {
      title: 'Mobile Patrols & Alarm Response',
      description: 'Rapid response mobile patrol services and alarm verification. Regular patrols ensure your property is continuously monitored.',
      icon: '🚗',
    },
    {
      title: 'Event Security',
      description: 'Professional event security for conferences, festivals, corporate events, and private functions. Keep your guests safe and secure.',
      icon: '🎪',
    },
  ]

  return (
    <section id="services" className="bg-charcoal py-16 md:py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive security solutions tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal-light border border-silver/10 rounded-xl p-8 hover:border-gold transition-all duration-300 group"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-silver-dark leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services


