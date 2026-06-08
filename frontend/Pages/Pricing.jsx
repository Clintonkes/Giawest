import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { pricingPlans } from '../data/laundrySite'

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main>
        <section className="surface-mint py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow">Plans</div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
                Service plans for residential, office, and commercial cleaning
              </h1>
              <p className="mt-5 text-lg leading-8 text-brand-navy/70">
                Choose a plan for everyday cleaning or request a custom quote for recurring business orders.
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
                      Popular
                    </div>
                  )}
                  <h2 className={`text-2xl font-extrabold ${plan.featured ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.name}
                  </h2>
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
      </main>
      <Footer />
    </>
  )
}
