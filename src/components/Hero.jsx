// src/components/Hero.jsx
import React from 'react'

export default function Hero() {
  return (
    <section className="text-center py-16 bg-intrumPurple text-white">
      <h1 className="text-5xl font-bold mb-4">SIGN Impact</h1>
      <p className="text-xl mb-6">Berechne Zeit, Kosten, Papier und CO₂ Einsparungen</p>

      {/* Button zu Intrum SIGN */}
      <a
        href="https://www.intrum.ch/de/business-solutions/dienstleistungen/digital-onboarding/signing/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-intrumAqua hover:bg-intrumAccent text-white px-6 py-3 rounded font-semibold transition transform hover:scale-105"
      >
        Mehr zu SIGN auf Intrum.ch
      </a>
    </section>
  )
}