import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faqs } from '../data/laundrySite'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <Navbar />
      <main className="surface-mint py-20 lg:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">FAQ</div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
              Common questions about scheduling, cleaning, and service delivery
            </h1>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-4">
            {faqs.map((faq, index) => {
              const open = openIndex === index
              return (
                <div key={faq.question} className="card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-bold text-brand-navy">{faq.question}</span>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-brand-gray text-brand-teal transition-transform ${open ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-6 text-sm leading-7 text-brand-navy/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-14 text-center">
            <p className="text-brand-navy/70">Still have questions?</p>
            <Link to="/contact" className="btn-secondary mt-5">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
