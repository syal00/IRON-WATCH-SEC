'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const AboutPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
              About Iron Watch Security Inc.
            </h1>
            <p className="text-xl md:text-2xl text-silver-dark max-w-3xl mx-auto">
              Professional security solutions you can trust
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-charcoal-light" ref={ref}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-silver-dark leading-relaxed mb-12">
              To provide exceptional security services that protect our clients&apos; assets, ensure the safety of their people, and deliver peace of mind through professional, reliable, and innovative security solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-silver-dark leading-relaxed">
              To be the most trusted security provider in Ottawa and surrounding areas, recognized for our commitment to excellence, innovation, and unwavering dedication to client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Licensing Details */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
              Licensing & Certification
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Fully licensed security company',
                'Comprehensive insurance coverage',
                'Certified security professionals',
                'Ongoing training and development',
                'Background checked personnel',
                'Industry compliance standards',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 bg-charcoal/50 border border-gold/20 rounded-xl p-6 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-silver-dark text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
              Coverage Areas
            </h2>
            <div className="bg-charcoal-light/50 border border-gold/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <p className="text-xl text-silver-dark mb-8 text-center">
                We proudly serve the following areas with 24/7 availability:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Ottawa',
                  'Cornwall',
                  'Eastern Ontario',
                  'Surrounding regions',
                ].map((area, index) => (
                  <div key={area} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-white text-lg font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Strengths */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
              Company Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: 'Experienced Team', desc: 'Years of combined security experience' },
                { title: 'Modern Technology', desc: 'State-of-the-art security equipment' },
                { title: 'Proven Track Record', desc: 'Trusted by businesses across Ottawa' },
                { title: 'Client-Focused', desc: 'Customized solutions for every client' },
              ].map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-charcoal/50 border border-gold/20 rounded-xl p-6 backdrop-blur-sm text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{strength.title}</h3>
                  <p className="text-silver-dark">{strength.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-silver-dark mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your security needs
          </p>
          <Link href="/contact" className="btn-primary text-lg px-12 py-5">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

