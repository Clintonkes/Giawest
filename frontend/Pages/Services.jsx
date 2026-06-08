import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LaundryIcon } from '../components/LaundryIcons'
import { serviceDetails } from '../data/laundrySite'

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <section className="surface-mint py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow">Services</div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
                Premium cleaning services built for every space and every schedule
              </h1>
              <p className="mt-5 text-lg leading-8 text-brand-navy/70">
                From recurring home care to commercial maintenance, each service is designed to be clear, dependable, and polished.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceDetails.map((service) => (
                <article key={service.title} className="card card-hover p-6">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mint text-brand-navy">
                    <LaundryIcon name={service.icon} />
                  </div>
                  <h2 className="text-xl font-bold text-brand-navy">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/68">{service.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-brand-navy/72">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-teal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link to="/booking" className="btn-primary">
                Book a Service
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
