import React from 'react'
import { Link } from 'react-router-dom'
import BubbleField from './BubbleField'
import { BadgeIcon } from './ServiceIcons'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-gray/70 bg-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,182,176,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(31,58,95,0.12),transparent_26%)]" />
      <div className="section-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Premium home and commercial cleaning</div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Cleaning that feels polished from arrival to final check.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-navy/72">
              Detailed work, careful methods, and a reliable service rhythm for busy homes and businesses.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/booking" className="btn-primary">
                Book Service
              </Link>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Fast Delivery', 'Eco-Friendly', 'Professional Care', 'Reliable Service'].map((label) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-brand-gray bg-white px-4 py-2 text-sm font-semibold text-brand-navy">
                  <span className="text-brand-teal">✓</span>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-gray bg-brand-mint shadow-[0_34px_80px_-44px_rgba(31,58,95,0.55)]">
              <BubbleField />
              <svg viewBox="0 0 800 620" role="img" aria-label="Polished interior illustration" className="relative z-[0] h-[480px] w-full">
                <rect width="800" height="620" fill="#DDF5EE" />
                <circle cx="610" cy="150" r="86" fill="#FFFFFF" fillOpacity="0.42" />
                <rect x="78" y="88" width="244" height="290" rx="26" fill="#FFFFFF" fillOpacity="0.62" />
                <rect x="112" y="128" width="176" height="18" rx="9" fill="#1F3A5F" fillOpacity="0.12" />
                <rect x="112" y="160" width="132" height="18" rx="9" fill="#4FB6B0" fillOpacity="0.30" />
                <rect x="468" y="392" width="250" height="108" rx="28" fill="#1F3A5F" fillOpacity="0.92" />
                <rect x="498" y="422" width="88" height="18" rx="9" fill="#FFFFFF" fillOpacity="0.86" />
                <rect x="498" y="452" width="136" height="14" rx="7" fill="#DDF5EE" fillOpacity="0.92" />
              </svg>
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-navy/42 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 z-[2] rounded-2xl bg-white/95 p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <BadgeIcon name="clock" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">Same-day handling</div>
                    <div className="text-xs text-brand-navy/60">Fast, careful turnaround</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 right-5 z-[2] rounded-2xl bg-white/95 p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <BadgeIcon name="shield" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">Premium finish</div>
                    <div className="text-xs text-brand-navy/60">Press, fold, and pack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
