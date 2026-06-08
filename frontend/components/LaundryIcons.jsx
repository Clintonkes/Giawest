import React from 'react'

const baseProps = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function wrap(children) {
  return <svg {...baseProps} aria-hidden="true" className="h-6 w-6">{children}</svg>
}

export function LaundryIcon({ name, className = '' }) {
  const props = { ...baseProps, className: `h-6 w-6 ${className}`.trim() }

  switch (name) {
    case 'home-clean':
    case 'wash-fold':
      return (
        <svg {...props}>
          <path d="M4 7.5h16v11H4z" />
          <path d="M7 7.5V5.8A1.8 1.8 0 0 1 8.8 4h6.4A1.8 1.8 0 0 1 17 5.8v1.7" />
          <path d="M8 12h8" />
          <path d="M8 15h5" />
          <circle cx="12" cy="10" r="1" />
        </svg>
      )
    case 'office-clean':
    case 'dry-clean':
      return (
        <svg {...props}>
          <path d="M9 4.8 6.5 9.3l2.7 1.6L12 7.6l2.8 3.3 2.7-1.6L15 4.8" />
          <path d="M8 11.2 5 20h14l-3-8.8" />
          <path d="M10 14h4" />
        </svg>
      )
    case 'deep-clean':
    case 'iron':
      return (
        <svg {...props}>
          <path d="M5 15h14l-1.5-6h-8.3a4.2 4.2 0 0 0-3.7 2.2L5 15Z" />
          <path d="M12 9V6.5A2.5 2.5 0 0 1 14.5 4H18" />
          <path d="M14 15h2" />
        </svg>
      )
    case 'move-clean':
    case 'delivery':
      return (
        <svg {...props}>
          <path d="M3.5 8.5h10v7h-10z" />
          <path d="M13.5 10h3l2 2v3.5h-5" />
          <circle cx="8" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
        </svg>
      )
    case 'commercial':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2.5" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      )
    case 'sanitize':
    case 'stain':
      return (
        <svg {...props}>
          <path d="M12 3 5 10a7 7 0 0 0 14 0l-7-7Z" />
          <path d="M12 9v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 4 19 7v5c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V7l7-3Z" />
          <path d="m9.5 12 1.7 1.7L15 10" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      )
    case 'leaf':
      return (
        <svg {...props}>
          <path d="M19 5c-7.5.5-11 4.5-11 11 0 1.7.4 3.3 1 4.5 7.2-.5 11-4.3 11-11 0-1.6-.3-3.1-1-4.5Z" />
          <path d="M8 16c2-2.4 5.2-4.7 9-6" />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}

export function BadgeIcon({ name }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-gray bg-brand-white text-brand-teal">
      <LaundryIcon name={name} className="h-5 w-5" />
    </span>
  )
}
