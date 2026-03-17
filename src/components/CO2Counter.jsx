import Card from "./Card"
import AnimatedNumber from "./AnimatedNumber"

export default function CO2Counter({ data, animate }) {
  return (
    <Card>
      <p className="text-sm text-gray-500">CO₂ Saved</p>
      <h2 className="text-3xl font-bold text-[#8750E5]">
        {animate ? <AnimatedNumber value={data.co2Saved}/> : 0} kg
      </h2>
    </Card>
  )
}