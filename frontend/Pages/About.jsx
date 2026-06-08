import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ServiceIcon } from '../components/ServiceIcons'
import { brand, processSteps, stats, whyChooseUs } from '../data/siteContent'

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
                    Schedule Service
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
                <svg viewBox="0 0 760 420" role="img" aria-label="Stylized clean workspace illustration" className="h-[420px] w-full">
                  <rect width="760" height="420" fill="#F8FFFD" />
                  <rect x="56" y="48" width="236" height="244" rx="28" fill="#DDF5EE" />
                  <rect x="86" y="86" width="166" height="18" rx="9" fill="#1F3A5F" fillOpacity="0.12" />
                  <rect x="86" y="118" width="118" height="18" rx="9" fill="#4FB6B0" fillOpacity="0.24" />
                  <rect x="86" y="150" width="148" height="18" rx="9" fill="#1F3A5F" fillOpacity="0.08" />
                  <circle cx="460" cy="138" r="92" fill="#1F3A5F" fillOpacity="0.05" />
                  <circle cx="460" cy="138" r="58" fill="#4FB6B0" fillOpacity="0.12" />
                  <rect x="404" y="230" width="240" height="98" rx="26" fill="#1F3A5F" fillOpacity="0.92" />
                  <rect x="434" y="260" width="84" height="16" rx="8" fill="#FFFFFF" fillOpacity="0.84" />
                  <rect x="434" y="288" width="132" height="12" rx="6" fill="#DDF5EE" fillOpacity="0.9" />
                  <rect x="136" y="322" width="410" height="10" rx="5" fill="#4FB6B0" fillOpacity="0.2" />
                </svg>
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
                    <ServiceIcon name="shield" />
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
