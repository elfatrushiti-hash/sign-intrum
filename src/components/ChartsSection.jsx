import React from "react"

export default function ChartsSection({ data }) {

  const total = data.moneySaved + data.timeSaved + data.co2Saved || 1

  const percent = (val) => Math.round((val / total) * 100)

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md h-full flex flex-col justify-center items-center">

      <h3 className="mb-4 font-semibold text-[#29074A]">
        Impact Verteilung
      </h3>

      <div className="w-40 h-40 rounded-full bg-gradient-to-r from-[#8750E5] to-[#2395FF] flex items-center justify-center text-white font-bold">
        {percent(data.moneySaved)}%
      </div>

      <div className="mt-4 text-sm text-gray-500 text-center">
        Basierend auf Ihren Eingaben
      </div>

    </div>
  )
}