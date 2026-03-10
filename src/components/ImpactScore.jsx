import AnimatedNumber from "./AnimatedNumber"

export default function ImpactScore({ data }) {

  const score = Math.round(
    (data.moneySaved + data.timeSaved + data.co2Saved) / 3
  )

  return (

    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

      <p className="text-sm text-gray-500">
        SIGN Impact Score
      </p>

      <h2 className="text-3xl font-bold text-[#8750E5]">

        <AnimatedNumber value={score} />

      </h2>

    </div>

  )
}
