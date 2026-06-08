import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api } from '../services/api'
import { contact } from '../data/laundrySite'
import toast from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/contact', formData)
      toast.success('Message sent successfully.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="surface-mint py-20 lg:py-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
            <div className="card p-6 sm:p-8">
              <h1 className="text-3xl font-extrabold text-brand-navy">Send a message</h1>
              <p className="mt-3 text-sm leading-7 text-brand-navy/70">Use this form for questions, commercial requests, or follow-up on your cleaning visit.</p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-field"
                  required
                />
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field"
                  rows="5"
                  required
                />
                <button type="submit" disabled={loading} className="btn-primary w-full">
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </form>
            </div>

            <aside className="space-y-5">
              <div className="card p-6">
                <h2 className="text-xl font-bold text-brand-navy">Contact details</h2>
                <div className="mt-4 space-y-4 text-sm text-brand-navy/72">
                  <p><span className="font-semibold text-brand-navy">Phone:</span> {contact.phone}</p>
                  <p><span className="font-semibold text-brand-navy">Email:</span> {contact.email}</p>
                  <p><span className="font-semibold text-brand-navy">Address:</span> {contact.address}</p>
                </div>
              </div>
              <div className="card p-6">
                <h2 className="text-xl font-bold text-brand-navy">What to expect</h2>
                <p className="mt-3 text-sm leading-7 text-brand-navy/70">
                  We aim to respond quickly and help you move toward the right cleaning plan or service request.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
