import React, { useState, useEffect } from "react"

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 600
    const step = value / (duration / 16)

    const interval = setInterval(() => {
      start += step
      if (start >= value) {
        setDisplay(value)
        clearInterval(interval)
      } else {
        setDisplay(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [value])

  return <span>{display}</span>
}

function Card({ title, value, desc, calc }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-white p-4 rounded-2xl shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-[#8750E5]">
        <AnimatedNumber value={value} />
      </p>

      {open && (
        <div className="mt-3 text-sm text-gray-600">
          <p>{desc}</p>
          <p className="mt-2 text-xs text-gray-400">{calc}</p>
        </div>
      )}
    </div>
  )
}

export default function KPISection({ data }) {
  return (
    <div className="grid gap-4 h-full">
      <Card
        title="Zeitersparnis (Min)"
        value={data.timeSaved}
        desc="Digitale Signaturen reduzieren manuelle Prozesse erheblich."
        calc="Berechnung: Dokumente × Zeitersparnis pro Dokument"
      />
      <Card
        title="Kostenersparnis (CHF)"
        value={data.moneySaved}
        desc="Weniger Papier, Druck und Versandkosten."
        calc="Berechnung: Dokumente × Kostenersparnis"
      />
      <Card
        title="CO₂ Einsparung"
        value={data.co2Saved}
        desc="Nachhaltiger durch digitale Prozesse."
        calc="Berechnung: Dokumente × CO₂ pro Versand"
      />
    </div>
  )
}