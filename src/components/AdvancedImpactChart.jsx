import React from "react"
import Card from "./Card"

export default function AdvancedImpactChart({ data, animate }) {
  return (
    <Card>
      <p className="text-sm text-gray-500">Advanced Impact Chart</p>
      <div className="mt-2 w-full h-48 bg-[#4F1D8D]/30 rounded-lg flex items-center justify-center text-[#8750E5]">
        {animate ? `Score: ${(data.moneySaved + data.timeSaved + data.co2Saved)/3}` : "0"}
      </div>
    </Card>
  )
}