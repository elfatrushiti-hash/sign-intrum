import React, { useState, useEffect } from "react"
import LandingPage from "./components/LandingPage"
import Hero from "./components/Hero"
import Calculator from "./components/Calculator"
import SalesInfoCard from "./components/SalesInfoCard"
import KPISection from "./components/KPISection"
import ImpactScore from "./components/ImpactScore"
import CO2Counter from "./components/CO2Counter"
import Comparison from "./components/Comparison"
import ChartsSection from "./components/ChartsSection"
import CO2Chart from "./components/CO2Chart"
import AdvancedImpactChart from "./components/AdvancedImpactChart"
import ROISimulator from "./components/ROISimulator"
import Benchmark from "./components/Benchmark"
import ShareLink from "./components/ShareLink"
import PDFExport from "./components/PDFExport"
import AdminMode from "./components/AdminMode"
import Footer from "./components/Footer"
import ReportHeader from "./components/ReportHeader"

export default function App() {
  const [impactData, setImpactData] = useState({
    docs: 10,
    signs: 2,
    totalHand: 0,
    totalDigital: 0,
    timeSaved: 0,
    moneySaved: 0,
    co2Saved: 0
  })

  const [started, setStarted] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("docs")) {
      setStarted(true)
      setImpactData({
        docs: Number(params.get("docs")),
        signs: Number(params.get("signs")),
        totalHand: Number(params.get("totalHand")),
        totalDigital: Number(params.get("totalDigital")),
        timeSaved: Number(params.get("timeSaved")),
        moneySaved: Number(params.get("moneySaved")),
        co2Saved: Number(params.get("co2Saved")),
      })
    }
  }, [])

  if (!started) return <LandingPage start={() => setStarted(true)} />

  return (
    <AdminMode>
      <div className="bg-[#F1E8FA] min-h-screen">
        <Hero />

        <section className="max-w-7xl mx-auto px-4 py-6" id="dashboard">
          <ReportHeader />

          {/* === Dashboard Unit === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

            {/* Linke Spalte: Calculator + SalesInfoCard */}
            <div className="flex flex-col gap-6 h-full">
              <Calculator impactData={impactData} setImpactData={setImpactData} className="flex-1"/>
              <SalesInfoCard className="flex-1"/>
            </div>

            {/* Mittlere Spalte: Charts */}
            <div className="flex flex-col gap-6 h-full">
              <ChartsSection data={impactData} className="flex-1"/>
              <CO2Chart data={impactData} className="flex-1"/>
              <AdvancedImpactChart data={impactData} className="flex-1"/>
            </div>

            {/* Rechte Spalte: KPI Cards */}
            <div className="flex flex-col gap-6 h-full">
              <KPISection data={impactData} className="flex-1"/>
              <ImpactScore data={impactData} className="flex-1"/>
              <CO2Counter data={impactData} className="flex-1"/>
              <Comparison data={impactData} className="flex-1"/>
            </div>

          </div>

          {/* === Tools / Export Section === */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <ROISimulator data={impactData} />
            <Benchmark data={impactData} />
            <div className="flex flex-col gap-6">
              <PDFExport />
              <ShareLink impactData={impactData} />
            </div>
          </div>

        </section>

        <Footer />
      </div>
    </AdminMode>
  )
}
