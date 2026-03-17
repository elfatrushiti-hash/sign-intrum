import Card from "./Card"
import AnimatedNumber from "./AnimatedNumber"

export default function ImpactScore({ data, animate }) {
  const score = Math.round((data.moneySaved + data.timeSaved + data.co2Saved)/3)
  return (
    <Card>
      {animate ? (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 36 36" className="w-24 h-24">
            <path
              d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
              fill="none"
              stroke="#eee"
              strokeWidth="3"
            />
            <path
              d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
              fill="none"
              stroke="#8750E5"
              strokeWidth="3"
              strokeDasharray={`${score},100`}
            />
          </svg>
          <p className="text-3xl font-bold text-[#8750E5]">
            <AnimatedNumber value={score}/>
          </p>
        </div>
      ) : <p className="text-3xl font-bold text-[#8750E5]">0</p>}
      <p className="text-sm text-gray-500 mt-2 text-center">Impact Score</p>
    </Card>
  )
}