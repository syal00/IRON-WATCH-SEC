'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Industries = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const industries = [
    { name: 'Shopping Plazas', icon: '🏪' },
    { name: 'Warehouses', icon: '🏭' },
    { name: 'Office Buildings', icon: '🏢' },
    { name: 'HOAs', icon: '🏘️' },
    { name: 'Construction Sites', icon: '🚧' },
    { name: 'Retail Stores', icon: '🛍️' },
  ]

  return (
    <section id="industries" className="bg-charcoal-light py-16 md:py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">Industries We Serve</h2>
          <p className="section-subtitle">
            Trusted security solutions across various industries
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal border border-silver/10 rounded-lg p-6 text-center hover:border-gold transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries


