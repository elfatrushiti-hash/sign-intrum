import React from "react"
import PieChart from "./PieChart"

export default function ExperienceDashboard({ impactData, setImpactData }) {
  return (
    <div className="dashboard">

      {/* Main Grid */}
      <div className="grid-container">

        {/* LEFT: Calculator + Sales */}
        <div className="grid-left">
          <div className="card">
            <h3>Calculator</h3>
            <label>Dokumente:</label>
            <input
              type="number"
              value={impactData.docs}
              onChange={(e) => {
                const docs = Number(e.target.value)
                setImpactData(prev => ({
                  ...prev,
                  docs,
                  moneySaved: docs * 5,
                  timeSaved: docs * 2,
                  co2Saved: docs * 0.1
                }))
              }}
            />
            <label>Signaturen:</label>
            <input
              type="number"
              value={impactData.signs}
              onChange={(e) => {
                const signs = Number(e.target.value)
                setImpactData(prev => ({ ...prev, signs }))
              }}
            />
          </div>

          <div className="card sales-card">
            <h3>Sales Info</h3>
            <p>
              Haben Sie Fragen? Sprechen Sie uns direkt an oder nutzen Sie unser Kontaktformular.
            </p>
          </div>
        </div>

        {/* CENTER: PieChart */}
        <div className="grid-center card">
          <h3>Kuchendiagramm</h3>
          <PieChart value={impactData.docs} />
        </div>

        {/* RIGHT: KPI Cards */}
        <div className="grid-right">
          <div className="card">
            <h3>💰 Ersparnis</h3>
            <p>CHF {impactData.moneySaved}</p>
          </div>
          <div className="card">
            <h3>⏱ Zeit</h3>
            <p>{impactData.timeSaved} Stunden</p>
          </div>
          <div className="card">
            <h3>🌱 CO₂</h3>
            <p>{impactData.co2Saved} kg</p>
          </div>
        </div>

      </div>
    </div>
  )
}