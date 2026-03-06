// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-intrumPurple text-white text-center py-6 mt-8">
      <p className="font-semibold">© 2026 SIGN Impact</p>

      {/* Link zu Intrum SIGN */}
      <p className="mt-2">
        <a
          href="https://www.intrum.ch/de/business-solutions/dienstleistungen/digital-onboarding/signing/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-intrumAccent transition-colors"
        >
          Offizielle SIGN Seite
        </a>
      </p>
    </footer>
  )
}