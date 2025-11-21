'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Reach out through our contact form or give us a call. We\'ll discuss your security needs and answer any questions.',
    },
    {
      number: '02',
      title: 'Site Assessment',
      description: 'Our security experts will visit your location to assess risks, vulnerabilities, and develop a customized security plan.',
    },
    {
      number: '03',
      title: 'Custom Security Plan',
      description: 'We\'ll create a tailored security strategy that addresses your specific requirements and fits your budget.',
    },
    {
      number: '04',
      title: 'Deployment & Reporting',
      description: 'Our licensed guards are deployed, and you receive regular detailed reports on security activities and incidents.',
    },
  ]

  return (
    <section id="process" className="bg-charcoal py-16 md:py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">How It Works</h2>
          <p className="section-subtitle">
            A simple, streamlined process to get you the security you need
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line - hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-gold-dark to-gold mt-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gold rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 shadow-lg">
                      <span className="text-charcoal font-bold">{index + 1}</span>
                    </div>

                    <div className="bg-charcoal-light border border-silver/10 rounded-xl p-6 md:p-8 hover:border-gold transition-all duration-300 h-full">
                      <div className="text-gold text-3xl font-bold mb-2 md:hidden">{step.number}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-silver-dark leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process


