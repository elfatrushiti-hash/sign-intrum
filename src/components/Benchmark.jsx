import React from "react"
import Card from "./Card"

export default function Benchmark({ data }) {
  return (
    <Card>
      <p className="text-sm text-gray-500">Benchmark</p>
      <div className="mt-2">Your Score: {data.moneySaved + data.timeSaved}</div>
    </Card>
  )
}