import React, { useState } from 'react'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import KPISection from './components/KPISection'
import ChartsSection from './components/ChartsSection'
import Footer from './components/Footer'

export default function App() {
  const [impactData, setImpactData] = useState({
    docs: 10,
    signs: 2,
    totalHand: 0,
    totalDigital: 0,
    timeSaved: 0,
    moneySaved: 0,
    co2Saved: 0
  })

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Hero />

      {/* Dashboard Grid */}
      <section className="max-w-7xl mx-auto my-8 px-4 flex flex-col lg:flex-row gap-6">
        
        {/* LEFT: Calculator */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow flex flex-col">
          <Calculator impactData={impactData} setImpactData={setImpactData} />
        </div>

        {/* CENTER: Doughnut Chart */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow flex items-center justify-center">
          <ChartsSection data={impactData} />
        </div>

        {/* RIGHT: KPI Cards */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow flex flex-col gap-4 overflow-auto">
          <KPISection data={impactData} />
        </div>
      </section>

      <Footer />
    </div>
  )
}