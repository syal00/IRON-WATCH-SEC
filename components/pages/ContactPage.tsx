'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

const ContactPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    siteAddress: '',
    serviceType: '',
    message: '',
    website: '', // Honeypot
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceTypes = [
    'Mobile Patrol',
    'On-Site Security Guards',
    'CCTV Monitoring',
    'Event Security',
    'Loss Prevention',
    'Corporate Security',
    'Other',
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot spam protection
    if (formData.website) {
      console.log('Spam detected')
      toast.error('Invalid submission. Please try again.')
      return
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.siteAddress || !formData.serviceType) {
      toast.error('Please fill in all required fields.')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    try {
      if (typeof window !== 'undefined' && (window as any).emailjs) {
        const emailjs = (window as any).emailjs
        
        const EMAILJS_CONFIG = {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
          serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
          templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
          recipientEmail: 'info@ironwatchsecurity.com'
        }

        if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY' || 
            EMAILJS_CONFIG.serviceID === 'YOUR_SERVICE_ID' || 
            EMAILJS_CONFIG.templateID === 'YOUR_TEMPLATE_ID') {
          throw new Error('EmailJS is not configured. Please set up EmailJS credentials.')
        }

        if (emailjs.init) {
          emailjs.init(EMAILJS_CONFIG.publicKey)
        }

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company || 'Not provided',
          site_address: formData.siteAddress,
          service_type: formData.serviceType,
          message: formData.message || 'No additional message provided',
          to_email: EMAILJS_CONFIG.recipientEmail,
          reply_to: formData.email
        }

        await emailjs.send(
          EMAILJS_CONFIG.serviceID,
          EMAILJS_CONFIG.templateID,
          templateParams
        )

        toast.success('Thank you! Your message has been sent successfully. We will contact you within 24 hours.')
        
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          siteAddress: '',
          serviceType: '',
          message: '',
          website: '',
        })
      } else {
        throw new Error('Email service is not available. Please contact us directly at info@ironwatchsecurity.com')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-silver-dark max-w-3xl mx-auto">
              Get in touch with us to discuss your security needs. We&apos;re here to help 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24" ref={ref}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:+12269273959" className="text-gold hover:text-gold-light transition-colors text-lg">
                      +1 (226) 927-3959
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:info@ironwatchsecurity.com" className="text-gold hover:text-gold-light transition-colors text-lg">
                      info@ironwatchsecurity.com
                    </a>
                  </div>
                </div>

                {/* 24/7 Badge */}
                <div className="flex items-center gap-3 bg-charcoal-light/50 border border-gold/20 rounded-xl p-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <h3 className="text-white font-semibold">24/7 Response</h3>
                    <p className="text-silver-dark text-sm">Available around the clock for emergencies</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-charcoal-light/50 border border-gold/20 rounded-2xl p-8 md:p-10 space-y-6 backdrop-blur-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-silver placeholder-text-secondary focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-silver placeholder-text-secondary focus:outline-none focus:border-gold transition-colors"
                  placeholder="Company name (optional)"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-silver placeholder-text-secondary focus:outline-none focus:border-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-silver placeholder-text-secondary focus:outline-none focus:border-gold transition-colors"
                    placeholder="(226) 927-3959"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="siteAddress" className="block text-white font-semibold mb-2">
                  Site Address <span className="text-gold">*</span>
                </label>
                <textarea
                  id="siteAddress"
                  name="siteAddress"
                  required
                  rows={3}
                  value={formData.siteAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-silver placeholder-text-secondary focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Address of the location requiring security services"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-white font-semibold mb-2">
                  Type of Service <span className="text-gold">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-silver focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="" className="bg-charcoal">Select a service type</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type} className="bg-charcoal">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gold/20 rounded-lg text-silver placeholder-text-secondary focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg py-5"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="py-16 md:py-24 bg-charcoal-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Location</h2>
            <div className="rounded-2xl overflow-hidden border border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0!2d-75.6972!3d45.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI1JzE3LjQiTiA3NcKwNDEnNDkuOSJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <p className="text-silver-dark text-center mt-4">
              Serving Ottawa and surrounding areas
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

