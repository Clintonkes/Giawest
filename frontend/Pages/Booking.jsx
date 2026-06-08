import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api } from '../services/api'
import { serviceDetails } from '../data/siteContent'
import toast from 'react-hot-toast'

export default function Booking() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_type: '',
    preferred_date: '',
    preferred_time: '',
    address: '',
    special_instructions: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/bookings', formData)
      toast.success('Your order request has been sent.')
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        service_type: '',
        preferred_date: '',
        preferred_time: '',
        address: '',
        special_instructions: '',
      })
    } catch (error) {
      toast.error('Failed to submit request. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="surface-mint py-20 lg:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="eyebrow">Booking</div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
                Request cleaning service
              </h1>
              <p className="mt-5 text-lg leading-8 text-brand-navy/70">
                Tell us what you need and we’ll confirm the next steps.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
              <div className="card p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="input-field"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                      required
                    />
                    <select
                      value={formData.service_type}
                      onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                      className="input-field"
                      required
                    >
                      <option value="">Select service</option>
                      {serviceDetails.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      type="date"
                      value={formData.preferred_date}
                      onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                      className="input-field"
                      required
                    />
                    <select
                      value={formData.preferred_time}
                      onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                      className="input-field"
                      required
                    >
                      <option value="">Preferred time</option>
                      <option>Morning (8AM - 12PM)</option>
                      <option>Afternoon (12PM - 5PM)</option>
                      <option>Evening (5PM - 8PM)</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Service address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="input-field"
                    required
                  />
                  <textarea
                    placeholder="Special instructions"
                    value={formData.special_instructions}
                    onChange={(e) => setFormData({ ...formData, special_instructions: e.target.value })}
                    className="input-field"
                    rows="4"
                  />
                  <button type="submit" disabled={loading} className="btn-primary w-full">
                    {loading ? 'Submitting...' : 'Submit request'}
                  </button>
                </form>
              </div>

              <aside className="space-y-5">
                <div className="card p-6">
                  <h2 className="text-xl font-bold text-brand-navy">What we handle</h2>
                  <div className="mt-4 space-y-3 text-sm text-brand-navy/72">
                    <p>Residential cleaning, office cleaning, deep cleaning, move-in / move-out, sanitization, and commercial care.</p>
                    <p>We confirm scheduling and scope after request review.</p>
                  </div>
                </div>
                <div className="card p-6">
                  <h2 className="text-xl font-bold text-brand-navy">Need help now?</h2>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/70">Use the contact page for questions, or call our support line for urgent support.</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
