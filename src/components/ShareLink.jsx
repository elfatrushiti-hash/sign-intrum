import React from "react"
import Card from "./Card"

export default function ShareLink({ impactData }) {
  const link = `${window.location.origin}?docs=${impactData.docs}&signs=${impactData.signs}`
  return (
    <Card>
      <p className="text-sm text-gray-500">Share Link</p>
      <input type="text" value={link} readOnly className="mt-2 w-full rounded-md border px-3 py-2"/>
    </Card>
  )
}