'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
}

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // TODO: Update testimonials with real client feedback
  const testimonials: Testimonial[] = [
    {
      name: 'John Smith',
      role: 'Property Manager',
      company: 'Plaza in Cornwall',
      content: 'Iron Watch Security has been providing excellent service for our shopping plaza. Their guards are professional, punctual, and always alert. We feel much safer knowing they\'re protecting our property.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Construction Manager',
      company: 'Sandhu Construction and Landscapes',
      content: 'Since hiring Iron Watch Security, we\'ve had zero incidents at our construction site. Their mobile patrol services give us peace of mind, and the detailed reports keep us informed about everything happening on site.',
    },
    {
      name: 'Michael Chen',
      role: 'HOA President',
      company: 'Riverside Condos',
      content: 'The residential security services from Iron Watch Security are outstanding. Residents feel safer, and property values have improved. Their team is responsive and professional at all times.',
    },
  ]

  return (
    <section id="testimonials" className="bg-charcoal-light py-16 md:py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by businesses and property managers across Ottawa
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-charcoal border border-silver/10 rounded-xl p-8 hover:border-gold transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Quote icon */}
                <div className="text-gold text-4xl mb-4">&ldquo;</div>
                
                <p className="text-silver mb-6 leading-relaxed italic">
                  {testimonial.content}
                </p>

                <div className="border-t border-silver/10 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-silver-dark text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials


