import React from "react"

export default function Calculator({ impactData, setImpactData }) {

  const update = (field, value) => {
    const updated = { ...impactData, [field]: Number(value) }

    // SIMPLE LOGIK
    updated.timeSaved = updated.docs * 5
    updated.moneySaved = updated.docs * 2
    updated.co2Saved = updated.docs * 0.1

    setImpactData(updated)
  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md h-full">
      <h2 className="text-lg font-semibold mb-4 text-[#29074A]">
        Was kann ich mit SIGN sparen?
      </h2>

      <div className="space-y-3">

        <div>
          <label className="text-sm text-gray-600">
            Anzahl Dokumente / Monat
          </label>
          <input
            type="number"
            value={impactData.docs}
            onChange={(e) => update("docs", e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">
            Signaturen pro Dokument
          </label>
          <input
            type="number"
            value={impactData.signs}
            onChange={(e) => update("signs", e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

      </div>
    </div>
  )
}