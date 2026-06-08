import { Link } from 'react-router-dom'
import { brand, contact, navLinks, serviceHighlights } from '../data/laundrySite'

export default function Footer() {
  return (
    <footer className="border-t border-brand-gray bg-brand-navy text-white">
      <div className="section-shell py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr,0.85fr,0.85fr,1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-navy">
                <span className="text-lg font-extrabold">G</span>
              </span>
              <div>
                <div className="text-sm font-extrabold tracking-[0.22em] uppercase text-white">
                  {brand.shortName}
                </div>
                <div className="text-xs text-brand-mint/90">Residential and commercial cleaning specialists</div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/78">
              {brand.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Fast turnaround', 'Premium finishing', 'Pickup & delivery'].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold text-white/82">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-mint">
              Explore
            </h3>
            <div className="grid gap-3 text-sm">
              {navLinks.slice(0, 8).map((link) => (
                <Link key={link.to} to={link.to} className="text-white/80 transition-colors hover:text-brand-mint">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-mint">
              Services
            </h3>
            <div className="grid gap-3 text-sm text-white/80">
              {serviceHighlights.slice(0, 4).map((service) => (
                <span key={service.title}>{service.title}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-mint">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
              <p>{contact.address}</p>
            </div>
            <Link to="/booking" className="btn-secondary mt-6 inline-flex">
              Schedule Pickup
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {brand.shortName}. All rights reserved.</p>
              <p>Premium cleaning care with a calm, polished experience.</p>
        </div>
      </div>
    </footer>
  )
}
