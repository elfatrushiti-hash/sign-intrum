import Card from "./Card"
import ImpactGauge from "./ImpactGauge"

export default function ImpactScore({ data }) {

  const score = Math.round(
    (data.moneySaved + data.timeSaved + data.co2Saved) / 3
  )

  return (

    <Card>

      <ImpactGauge score={score} />

    </Card>

  )
}
