import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { testimonials } from '../data/siteContent'

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <main>
        <section className="surface-mint py-20 lg:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow">Testimonials</div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
                Customers trust the finish, the timing, and the simplicity
              </h1>
              <p className="mt-5 text-lg leading-8 text-brand-navy/70">
                A polished cleaning service should feel dependable from the first visit onward.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="card card-hover p-6">
                  <div className="flex gap-1 text-brand-teal">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-brand-navy/72">"{item.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-white font-bold">
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

            <div className="mt-14 text-center">
              <Link to="/booking" className="btn-primary">
                Join our customers
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
