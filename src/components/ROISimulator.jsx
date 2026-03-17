import React from "react"
import Card from "./Card"

export default function ROISimulator({ data }) {
  return (
    <Card>
      <p className="text-sm text-gray-500">ROI Simulator</p>
      <div className="mt-2">ROI: {data.moneySaved ? (data.moneySaved*1.2).toFixed(2) : 0}</div>
    </Card>
  )
}