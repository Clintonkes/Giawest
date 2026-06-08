import React from 'react'

const bubbles = [
  { size: 92, top: '8%', left: '10%', delay: '0s', duration: '7.2s', opacity: 0.38 },
  { size: 54, top: '16%', left: '28%', delay: '0.7s', duration: '6.3s', opacity: 0.32 },
  { size: 26, top: '72%', left: '14%', delay: '1.4s', duration: '5.7s', opacity: 0.5 },
  { size: 68, top: '68%', left: '44%', delay: '0.2s', duration: '7.8s', opacity: 0.24 },
  { size: 38, top: '26%', left: '78%', delay: '1.1s', duration: '6.8s', opacity: 0.4 },
  { size: 110, top: '60%', left: '70%', delay: '0.6s', duration: '8.2s', opacity: 0.2 },
  { size: 18, top: '40%', left: '88%', delay: '1.8s', duration: '5.2s', opacity: 0.48 },
]

export default function BubbleField({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()} aria-hidden="true">
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: bubble.top,
            left: bubble.left,
            opacity: bubble.opacity,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
        />
      ))}
    </div>
  )
}
