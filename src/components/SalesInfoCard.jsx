import React from "react"

export default function SalesInfoCard() {
  return (
    <div className="bg-[#8750E5] text-white p-5 rounded-2xl shadow-md h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Haben Sie Fragen?
        </h3>
        <p className="text-sm opacity-90">
          Sprechen Sie uns direkt an unserem Stand an oder kontaktieren Sie uns online.
        </p>
      </div>

      <a
        href="https://www.intrum.ch/de/business-solutions/dienstleistungen/sign/kontaktformular-sign/"
        target="_blank"
        className="mt-4 inline-block bg-white text-[#8750E5] px-4 py-2 rounded-lg text-sm font-medium text-center"
      >
        Kontakt aufnehmen
      </a>
    </div>
  )
}