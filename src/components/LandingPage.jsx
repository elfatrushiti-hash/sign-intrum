import React from "react"

export default function LandingPage({ start }) {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>SIGN Impact Dashboard</h1>
        <p>Berechne deine Einsparungen und Impact-Daten in Echtzeit</p>
        <button onClick={start}>Start</button>
      </div>
    </div>
  )
}