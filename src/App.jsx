import React, { useState } from "react"
import LandingPage from "./components/LandingPage"
import ExperienceDashboard from "./components/ExperienceDashboard"

export default function App() {
  const [started, setStarted] = useState(false)

  const [impactData, setImpactData] = useState({
    docs: 10,
    signs: 2,
    moneySaved: 50,
    timeSaved: 20,
    co2Saved: 1
  })

  if (!started) {
    return <LandingPage start={() => setStarted(true)} />
  }

  return (
    <ExperienceDashboard
      impactData={impactData}
      setImpactData={setImpactData}
    />
  )
}