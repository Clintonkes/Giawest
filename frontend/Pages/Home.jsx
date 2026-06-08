import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BubbleField from '../components/BubbleField'
import { BadgeIcon, ServiceIcon } from '../components/ServiceIcons'
import {
  brand,
  contact,
  faqs,
  processSteps,
  pricingPlans,
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
          <div className="section-shell relative py-16 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
              <div className="max-w-2xl">
                <div className="eyebrow mb-6">Premium home and commercial cleaning</div>
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                  Spaces cleaned with precision, delivered with calm confidence.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-brand-navy/72">
                  {brand.tagline} From recurring home care to deep cleans and commercial maintenance, we make every order feel easy, polished, and reliable.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link to="/booking" className="btn-primary">
                    Book Service
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    Explore Services
                  </Link>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {trustIndicators.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-brand-gray bg-white/90 px-4 py-3 shadow-[0_14px_30px_-24px_rgba(31,58,95,0.35)]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-mint text-brand-navy">
                        <span className="text-lg">✓</span>
                      </span>
                      <span className="font-semibold text-brand-navy">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-brand-gray bg-white p-4">
                      <div className="text-2xl font-extrabold text-brand-navy">{stat.value}</div>
                      <div className="mt-1 text-sm text-brand-navy/65">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-[2rem] border border-brand-gray bg-brand-mint shadow-[0_34px_80px_-44px_rgba(31,58,95,0.55)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),rgba(221,245,238,0.92)_42%,rgba(79,182,176,0.22)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(31,58,95,0.06)_100%)]" />
                  <BubbleField className="z-[1] opacity-60" />
                  <svg
                    viewBox="0 0 800 620"
                    role="img"
                    aria-label="Illustration of a polished, refreshed interior"
                    className="relative z-[0] h-[520px] w-full"
                  >
                    <defs>
                      <linearGradient id="roomWall" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#DDF5EE" />
                      </linearGradient>
                      <linearGradient id="floor" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4FB6B0" stopOpacity="0.16" />
                        <stop offset="100%" stopColor="#1F3A5F" stopOpacity="0.06" />
                      </linearGradient>
                    </defs>
                    <rect width="800" height="620" fill="url(#roomWall)" />
                    <circle cx="610" cy="150" r="86" fill="#FFFFFF" fillOpacity="0.42" />
                    <circle cx="165" cy="180" r="120" fill="#FFFFFF" fillOpacity="0.24" />
                    <rect x="78" y="88" width="244" height="290" rx="26" fill="#FFFFFF" fillOpacity="0.62" />
                    <rect x="112" y="128" width="176" height="18" rx="9" fill="#1F3A5F" fillOpacity="0.12" />
                    <rect x="112" y="160" width="132" height="18" rx="9" fill="#4FB6B0" fillOpacity="0.30" />
                    <rect x="112" y="192" width="160" height="18" rx="9" fill="#1F3A5F" fillOpacity="0.10" />
                    <rect x="112" y="240" width="164" height="18" rx="9" fill="#1F3A5F" fillOpacity="0.08" />
                    <rect x="112" y="272" width="124" height="18" rx="9" fill="#4FB6B0" fillOpacity="0.22" />
                    <rect x="112" y="320" width="184" height="18" rx="9" fill="#1F3A5F" fillOpacity="0.09" />
                    <circle cx="560" cy="310" r="120" fill="#FFFFFF" fillOpacity="0.46" />
                    <circle cx="594" cy="292" r="72" fill="#4FB6B0" fillOpacity="0.10" />
                    <rect x="468" y="392" width="250" height="108" rx="28" fill="#1F3A5F" fillOpacity="0.92" />
                    <rect x="498" y="422" width="88" height="18" rx="9" fill="#FFFFFF" fillOpacity="0.86" />
                    <rect x="498" y="452" width="136" height="14" rx="7" fill="#DDF5EE" fillOpacity="0.92" />
                    <rect x="628" y="430" width="58" height="58" rx="18" fill="#4FB6B0" fillOpacity="0.34" />
                    <path d="M628 430h58v58h-58z" fill="none" stroke="#FFFFFF" strokeOpacity="0.36" />
                    <circle cx="214" cy="486" r="78" fill="#4FB6B0" fillOpacity="0.12" />
                    <rect x="118" y="438" width="204" height="38" rx="19" fill="#FFFFFF" fillOpacity="0.72" />
                    <rect x="118" y="488" width="164" height="38" rx="19" fill="#FFFFFF" fillOpacity="0.52" />
                    <rect x="154" y="562" width="488" height="10" rx="5" fill="url(#floor)" />
                  </svg>
                  <div className="absolute left-5 top-5 z-[3] rounded-2xl bg-white/95 p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <BadgeIcon name="clock" />
                      <div>
                        <div className="text-sm font-bold text-brand-navy">Same-day handling</div>
                        <div className="text-xs text-brand-navy/60">Fast, careful turnaround</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-5 right-5 z-[3] rounded-2xl bg-white/95 p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <BadgeIcon name="shield" />
                      <div>
                        <div className="text-sm font-bold text-brand-navy">Premium finish</div>
                        <div className="text-xs text-brand-navy/60">Detailed, polished results</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-brand-gray bg-brand-mint shadow-[0_32px_72px_-48px_rgba(31,58,95,0.55)]">
                  <svg viewBox="0 0 700 520" className="h-[440px] w-full" role="img" aria-label="Styled service environment illustration">
                    <rect width="700" height="520" fill="#F8FFFD" />
                    <rect x="54" y="56" width="260" height="304" rx="30" fill="#DDF5EE" />
                    <rect x="82" y="92" width="184" height="20" rx="10" fill="#1F3A5F" fillOpacity="0.1" />
                    <rect x="82" y="128" width="130" height="20" rx="10" fill="#4FB6B0" fillOpacity="0.25" />
                    <rect x="82" y="164" width="164" height="20" rx="10" fill="#1F3A5F" fillOpacity="0.08" />
                    <rect x="82" y="220" width="150" height="20" rx="10" fill="#1F3A5F" fillOpacity="0.08" />
                    <circle cx="470" cy="186" r="128" fill="#1F3A5F" fillOpacity="0.05" />
                    <circle cx="470" cy="186" r="78" fill="#4FB6B0" fillOpacity="0.12" />
                    <rect x="396" y="278" width="210" height="112" rx="28" fill="#1F3A5F" fillOpacity="0.92" />
                    <rect x="426" y="310" width="90" height="18" rx="9" fill="#FFFFFF" fillOpacity="0.86" />
                    <rect x="426" y="340" width="136" height="14" rx="7" fill="#DDF5EE" fillOpacity="0.92" />
                    <circle cx="188" cy="450" r="62" fill="#4FB6B0" fillOpacity="0.12" />
                    <rect x="126" y="406" width="204" height="36" rx="18" fill="#FFFFFF" fillOpacity="0.82" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 left-6 rounded-[1.75rem] border border-brand-gray bg-white p-5 shadow-xl">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint text-brand-navy">
                      <ServiceIcon name="leaf" />
                    </span>
                    <div>
                      <div className="font-bold text-brand-navy">Eco-conscious methods</div>
                      <p className="mt-1 max-w-xs text-sm leading-6 text-brand-navy/65">
                        Gentle cleaning choices designed to keep spaces fresh and surfaces protected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="eyebrow">Why choose us</div>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                  Premium cleaning that feels simple from start to finish
                </h2>
                <p className="mt-4 text-base leading-7 text-brand-navy/70">
                  We built the experience around trust, timing, and quality. That means clear scheduling, reliable updates, and spaces returned in excellent condition.
                </p>

                <div className="mt-8 space-y-4">
                  {whyChooseUs.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-brand-gray bg-white p-5">
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-mint text-brand-navy">
                          <ServiceIcon name="shield" />
                        </span>
                        <div>
                          <h3 className="font-bold text-brand-navy">{item.title}</h3>
                          <p className="mt-1 text-sm leading-7 text-brand-navy/65">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link to="/about" className="btn-secondary">
                    Learn More
                  </Link>
                  <Link to="/booking" className="btn-primary">
                    Schedule Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="surface-mint py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <div className="eyebrow">Service plans</div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Plans designed for everyday cleaning and premium finishing
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-navy/70">
                Choose a plan that fits your routine, or request a custom commercial quote.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`card card-hover p-7 ${plan.featured ? 'border-brand-teal bg-brand-navy text-white' : 'bg-white'}`}
                >
                  {plan.featured && (
                    <div className="mb-5 inline-flex rounded-full bg-brand-mint px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-navy">
                      Most popular
                    </div>
                  )}
                  <h3 className={`text-2xl font-extrabold ${plan.featured ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-3 text-sm leading-7 ${plan.featured ? 'text-white/78' : 'text-brand-navy/68'}`}>
                    {plan.description}
                  </p>
                  <div className={`mt-6 text-3xl font-extrabold ${plan.featured ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.price}
                  </div>
                  <div className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <span className={`flex h-7 w-7 items-center justify-center rounded-full ${plan.featured ? 'bg-white/14 text-white' : 'bg-brand-mint text-brand-navy'}`}>
                          ✓
                        </span>
                        <span className={`text-sm ${plan.featured ? 'text-white/84' : 'text-brand-navy/72'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/booking" className={`mt-8 ${plan.featured ? 'btn-secondary' : 'btn-primary'} w-full`}>
                    {plan.cta}
                  </Link>
                </article>
              ))}
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
