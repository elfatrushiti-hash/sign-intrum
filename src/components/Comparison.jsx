import React from "react"

export default function Comparison({ data }) {

  const digital = data.moneySaved
  const manual = data.docs * 5

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md h-full">

      <h3 className="mb-4 font-semibold text-[#29074A]">
        Digital vs Manuell
      </h3>

      <div className="space-y-3">

        <div>
          <p className="text-sm text-gray-500">Digital</p>
          <div className="bg-[#8750E5] text-white p-2 rounded-lg text-center">
            CHF {digital}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">Manuell</p>
          <div className="bg-gray-300 p-2 rounded-lg text-center">
            CHF {manual}
          </div>
        </div>

      </div>

    </div>
  )
}