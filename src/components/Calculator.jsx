import React from 'react'

export default function Calculator({ impactData, setImpactData }) {
  const handleChange = (field, value) => {
    const docs = field === 'docs' ? Number(value) : impactData.docs || 10
    const signs = field === 'signs' ? Number(value) : impactData.signs || 2

    const paperCost = docs * signs * 2.5
    const postage = docs * signs * 2.2
    const workHours = docs * signs * 0.5
    const workCost = workHours * 63
    const totalHand = paperCost + postage + workCost

    const digitalCost = docs * signs * 2.2
    const digitalWorkCost = docs * signs * 0.05 * 63
    const totalDigital = digitalCost + digitalWorkCost

    const timeSaved = workHours - (docs * signs * 0.05)
    const moneySaved = totalHand - totalDigital
    const co2Saved = docs * signs * 0.5

    setImpactData({
      docs,
      signs,
      totalHand,
      totalDigital,
      timeSaved,
      moneySaved,
      co2Saved
    })
  }

  return (
    <section className="flex flex-col h-full justify-start">
      <h2 className="text-lg font-bold mb-2 text-center">Was kann ich mit SIGN sparen?</h2>
      <div className="flex gap-2 justify-center">
        <input
          type="number"
          value={impactData.docs || 10}
          onChange={e => handleChange('docs', e.target.value)}
          className="border p-2 rounded text-center text-sm w-20"
          min="0"
          placeholder="Dokumente"
        />
        <input
          type="number"
          value={impactData.signs || 2}
          onChange={e => handleChange('signs', e.target.value)}
          className="border p-2 rounded text-center text-sm w-20"
          min="0"
          placeholder="Signaturen"
        />
      </div>
    </section>
  )
}