'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
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
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceTypes = [
    'Retail & Plaza Security',
    'Construction Site Security',
    'Residential & Condo Security',
    'Mobile Patrols & Alarm Response',
    'Event Security',
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
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      toast.success('Thank you! Your message has been sent. We\'ll get back to you soon.')
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        siteAddress: '',
        serviceType: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-charcoal py-16 md:py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">Request a Quote</h2>
          <p className="section-subtitle">
            Get in touch with us to discuss your security needs
          </p>

          <div className="max-w-3xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-charcoal-light border border-silver/10 rounded-xl p-8 md:p-10 space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Name */}
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
                  className="w-full px-4 py-3 bg-charcoal border border-silver/20 rounded-lg text-white placeholder-silver-dark focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Company (Optional) */}
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
                  className="w-full px-4 py-3 bg-charcoal border border-silver/20 rounded-lg text-white placeholder-silver-dark focus:outline-none focus:border-gold transition-colors"
                  placeholder="Company name (optional)"
                />
              </div>

              {/* Email and Phone Row */}
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
                    className="w-full px-4 py-3 bg-charcoal border border-silver/20 rounded-lg text-white placeholder-silver-dark focus:outline-none focus:border-gold transition-colors"
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
                    className="w-full px-4 py-3 bg-charcoal border border-silver/20 rounded-lg text-white placeholder-silver-dark focus:outline-none focus:border-gold transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              {/* Site Address */}
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
                  className="w-full px-4 py-3 bg-charcoal border border-silver/20 rounded-lg text-white placeholder-silver-dark focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Address of the location requiring security services"
                />
              </div>

              {/* Service Type */}
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
                  className="w-full px-4 py-3 bg-charcoal border border-silver/20 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select a service type</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type} className="bg-charcoal">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message / Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-silver/20 rounded-lg text-white placeholder-silver-dark focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell us about your security needs, schedule requirements, or any specific concerns..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


