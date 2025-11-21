'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const strengths = [
    '24/7 Coverage',
    'Licensed Guards',
    'Fast Response',
    'Visible Presence',
    'Detailed Reports',
  ]

  return (
    <section id="about" className="bg-charcoal-light py-16 md:py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">About Iron Watch Security</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-silver mb-8 text-center leading-relaxed">
              Iron Watch Security is a premier private security company dedicated to providing 
              professional, reliable, and trusted security services. We specialize in protecting 
              your business, property, and peace of mind with our experienced team of licensed 
              security professionals.
            </p>
            
            <p className="text-lg text-silver-dark mb-12 text-center leading-relaxed">
              Our commitment to excellence and attention to detail sets us apart in the security 
              industry. We understand that every client has unique needs, and we work closely 
              with you to develop customized security solutions that fit your specific requirements.
            </p>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal border border-gold/20 rounded-lg p-6 text-center hover:border-gold transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-gold text-3xl mb-3">✓</div>
                  <h3 className="text-white font-semibold">{strength}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


