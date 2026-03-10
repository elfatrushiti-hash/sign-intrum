export default function ImpactGauge({ score }) {

  const percentage = Math.min(score, 100)

  return (

    <div className="flex flex-col items-center justify-center">

      <div className="relative w-32 h-32">

        <svg viewBox="0 0 36 36" className="w-full h-full">

          <path
            d="M18 2
               a 16 16 0 0 1 0 32
               a 16 16 0 0 1 0 -32"
            fill="none"
            stroke="#eee"
            strokeWidth="3"
          />

          <path
            d="M18 2
               a 16 16 0 0 1 0 32
               a 16 16 0 0 1 0 -32"
            fill="none"
            stroke="#8750E5"
            strokeWidth="3"
            strokeDasharray={`${percentage},100`}
          />

        </svg>

        <div className="absolute inset-0 flex items-center justify-center">

          <span className="text-2xl font-bold text-[#8750E5]">
            {score}
          </span>

        </div>

      </div>

      <p className="text-sm text-gray-500 mt-2">
        Impact Score
      </p>

    </div>

  )
}
