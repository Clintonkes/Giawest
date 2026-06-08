import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LaundryIcon } from '../components/LaundryIcons'
import { brand, processSteps, stats, whyChooseUs } from '../data/laundrySite'

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="surface-mint py-20 lg:py-24">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
              <div>
                <div className="eyebrow">About us</div>
                <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
                  {brand.shortName} delivers premium care for every space.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy/70">
                  We built the service around quality, convenience, and a calm customer experience. From routine upkeep to deep cleaning, every visit receives careful attention.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/booking" className="btn-primary">
                    Schedule Pickup
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    View Services
                  </Link>
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

              <div className="card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional cleaning workspace"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="section-shell">
            <div className="grid gap-6 md:grid-cols-3">
              {whyChooseUs.map((item) => (
                <article key={item.title} className="card card-hover p-6">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint text-brand-navy">
                    <LaundryIcon name="shield" />
                  </div>
                  <h2 className="text-xl font-bold text-brand-navy">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/68">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-mint py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <div className="eyebrow">Process</div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Designed to feel easy every step of the way
              </h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {processSteps.map((step) => (
                <div key={step.step} className="card card-hover p-6">
                  <div className="text-sm font-bold uppercase tracking-[0.24em] text-brand-teal">{step.step}</div>
                  <h3 className="mt-3 text-xl font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/68">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
