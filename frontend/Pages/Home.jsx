import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BubbleField from '../components/BubbleField'
import { ServiceIcon } from '../components/ServiceIcons'
import {
  brand,
  contact,
  faqs,
  processSteps,
  serviceHighlights,
  stats,
  testimonials,
  trustIndicators,
  whyChooseUs,
} from '../data/siteContent'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Navbar />

      <main>
        <section className="relative overflow-hidden border-b border-brand-gray/70 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,182,176,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(31,58,95,0.12),transparent_26%)]" />
          <div className="absolute inset-x-0 top-0 h-72 overflow-hidden">
            <BubbleField className="opacity-80" />
          </div>
          <div className="section-shell relative py-20 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow mb-6">Premium home and commercial cleaning</div>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-6xl lg:text-7xl">
                Spaces cleaned with precision, delivered with calm confidence.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-navy/72">
                {brand.tagline} From recurring home care to deep cleans and commercial maintenance, we make every order feel easy, polished, and reliable.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/booking" className="btn-primary">
                  Book Service
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustIndicators.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-brand-gray bg-white/90 px-4 py-4 shadow-[0_14px_30px_-24px_rgba(31,58,95,0.35)]">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-mint text-brand-navy">
                    <span className="text-lg">✓</span>
                  </span>
                  <span className="font-semibold text-brand-navy">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-brand-gray bg-white p-5 text-center">
                  <div className="text-3xl font-extrabold text-brand-navy">{stat.value}</div>
                  <div className="mt-1 text-sm text-brand-navy/65">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="surface-mint py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <div className="eyebrow">Services</div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Everything your home, office, and facility need
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-navy/70">
                Premium service blocks built for convenience, consistency, and repeat customers.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceHighlights.map((service) => (
                <article key={service.title} className="card card-hover p-6">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mint text-brand-navy">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/68">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <div className="eyebrow">Why choose us</div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Premium cleaning that feels simple from start to finish
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-navy/70">
                We built the experience around trust, timing, and quality. That means clear scheduling, reliable updates, and spaces returned in excellent condition.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="card card-hover p-7">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mint text-brand-navy">
                    <ServiceIcon name="shield" />
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/65">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
              <Link to="/booking" className="btn-primary">
                Schedule Service
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr]">
              <div>
                <div className="eyebrow">How it works</div>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                  Simple ordering, premium execution
                </h2>
                <p className="mt-4 text-base leading-7 text-brand-navy/70">
                  The experience is designed to be fast and low-friction. Book in a minute, let us handle the work, and return to a spotless space.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {processSteps.map((step) => (
                  <div key={step.step} className="card card-hover p-6">
                    <div className="text-sm font-bold uppercase tracking-[0.24em] text-brand-teal">{step.step}</div>
                    <h3 className="mt-3 text-xl font-bold text-brand-navy">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-navy/68">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="surface-mint py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <div className="eyebrow">Testimonials</div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Trusted by customers who expect a polished result
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.slice(0, 6).map((item) => (
                <article key={item.name} className="card card-hover p-6">
                  <div className="flex gap-1 text-brand-teal">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-brand-navy/72">"{item.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy font-bold text-white">
                      {item.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">{item.name}</div>
                      <div className="text-xs text-brand-navy/55">{item.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20 lg:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr]">
              <div>
                <div className="eyebrow">FAQ</div>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                  Common questions, answered clearly
                </h2>
                <p className="mt-4 text-base leading-7 text-brand-navy/70">
                  Here are the questions customers ask most often before placing an order.
                </p>
                <Link to="/contact" className="btn-secondary mt-8">
                  Ask a question
                </Link>
              </div>

              <div className="space-y-4">
                {faqs.slice(0, 5).map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div key={faq.question} className="card overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-bold text-brand-navy">{faq.question}</span>
                        <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-brand-gray text-brand-teal transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-sm leading-7 text-brand-navy/70">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="surface-navy py-16 text-white lg:py-20">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div>
                <div className="eyebrow border-white/15 bg-white/8 text-white">Contact</div>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to schedule your first cleaning visit?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
                  Send your request, ask a question, or contact us directly for recurring residential and commercial service support.
                </p>
              </div>

              <div className="card border-white/10 bg-white p-6">
                <div className="space-y-4 text-sm text-brand-navy">
                  <div className="rounded-2xl bg-brand-mint p-4">
                    <div className="font-bold">Phone</div>
                    <div className="mt-1">{contact.phone}</div>
                  </div>
                  <div className="rounded-2xl bg-brand-mint p-4">
                    <div className="font-bold">Email</div>
                    <div className="mt-1">{contact.email}</div>
                  </div>
                  <div className="rounded-2xl bg-brand-mint p-4">
                    <div className="font-bold">Address</div>
                    <div className="mt-1">{contact.address}</div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link to="/booking" className="btn-primary flex-1">
                    Book Now
                  </Link>
                  <Link to="/contact" className="btn-secondary flex-1">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
