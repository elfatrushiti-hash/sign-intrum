import React, { useEffect, useState } from "react"

export default function PieChart({ value }) {
  const [digitalPercent, setDigitalPercent] = useState(70)
  const [paperPercent, setPaperPercent] = useState(30)

  useEffect(() => {
    const total = value || 1
    const digital = total * 0.7
    const paper = total * 0.3
    setDigitalPercent((digital / total) * 100)
    setPaperPercent((paper / total) * 100)
  }, [value])

  return (
    <div className="piechart-container">
      <div
        className="piechart-circle"
        style={{
          background: `conic-gradient(
            #8750E5 0% ${digitalPercent}%,
            #E5E5E5 ${digitalPercent}% 100%
          )`
        }}
      />
      <div className="piechart-labels">
        <p>🟣 Digital: {digitalPercent.toFixed(0)}%</p>
        <p>⚪ Papier: {paperPercent.toFixed(0)}%</p>
      </div>
    </div>
  )
}