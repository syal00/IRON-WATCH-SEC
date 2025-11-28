'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials: Testimonial[] = [
    {
      name: 'John Smith',
      role: 'Property Manager',
      company: 'Plaza in Cornwall',
      content: 'Iron Watch Security has been providing excellent service for our shopping plaza. Their guards are professional, punctual, and always alert. We feel much safer knowing they\'re protecting our property.',
      avatar: 'JS',
    },
    {
      name: 'Sarah Johnson',
      role: 'Construction Manager',
      company: 'Sandhu Construction and Landscapes',
      content: 'Since hiring Iron Watch Security, we\'ve had zero incidents at our construction site. Their mobile patrol services give us peace of mind, and the detailed reports keep us informed about everything happening on site.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'HOA President',
      company: 'Riverside Condos',
      content: 'The residential security services from Iron Watch Security are outstanding. Residents feel safer, and property values have improved. Their team is responsive and professional at all times.',
      avatar: 'MC',
    },
    {
      name: 'David Thompson',
      role: 'Business Owner',
      company: 'Thompson Enterprises',
      content: 'Outstanding service and reliability. Iron Watch Security has become an essential part of our operations. Their attention to detail and professional approach gives us complete confidence.',
      avatar: 'DT',
    },
  ]

  return (
    <section id="testimonials" className="bg-charcoal py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-xl text-silver-dark max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted by businesses and property managers across Ottawa and surrounding areas
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-charcoal-light/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 rounded-2xl transition-all duration-300 blur-xl" />
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="text-gold text-5xl mb-4 font-serif">&ldquo;</div>
                  
                  {/* Testimonial content */}
                  <p className="text-silver mb-6 leading-relaxed italic">
                    {testimonial.content}
                  </p>

                  {/* Author info with avatar */}
                  <div className="border-t border-gold/10 pt-6 flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {testimonial.avatar || testimonial.name.charAt(0)}
                    </div>
                    
                    {/* Name and role */}
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-silver-dark text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-silver-dark text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
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
