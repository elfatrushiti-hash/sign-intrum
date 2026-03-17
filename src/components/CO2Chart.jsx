import React from "react"
import Card from "./Card"

export default function CO2Chart({ data, animate }) {
  return (
    <Card>
      <p className="text-sm text-gray-500">CO₂ Chart</p>
      <div className="mt-2 w-full h-48 bg-[#C9B0EF]/30 rounded-lg flex items-center justify-center text-[#8750E5]">
        {animate ? `${data.co2Saved} kg` : "0 kg"}
      </div>
    </Card>
  )
}