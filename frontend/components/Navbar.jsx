import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand, navLinks } from '../data/siteContent'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gray/80 bg-white/88 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-[0_16px_30px_-20px_rgba(31,58,95,0.75)]">
              <span className="text-lg font-extrabold">G</span>
            </span>
            <div>
              <div className="text-sm font-extrabold tracking-[0.22em] text-brand-navy uppercase">
                {brand.shortName}
              </div>
              <div className="text-xs font-medium text-brand-teal">
                Premium cleaning care
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, 8).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'bg-brand-mint text-brand-navy' : 'text-brand-navy/80 hover:bg-brand-mint/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/booking" className="btn-primary ml-2 text-sm">
              Book Now
            </NavLink>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-gray bg-white text-brand-navy lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="pb-5 lg:hidden">
            <div className="card overflow-hidden border-brand-gray bg-white p-3">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-sm font-medium ${
                        isActive ? 'bg-brand-mint text-brand-navy' : 'text-brand-navy/80 hover:bg-brand-mint/70'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link to="/booking" onClick={() => setIsOpen(false)} className="btn-primary mt-2">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
