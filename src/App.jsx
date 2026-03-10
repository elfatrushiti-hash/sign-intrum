import React, { useState, useEffect } from "react"
import LandingPage from "./components/LandingPage"
import Hero from "./components/Hero"
import Calculator from "./components/Calculator"
import SalesInfoCard from "./components/SalesInfoCard"
import KPISection from "./components/KPISection"
import ImpactScore from "./components/ImpactScore"
import CO2Counter from "./components/CO2Counter"
import ChartsSection from "./components/ChartsSection"
import CO2Chart from "./components/CO2Chart"
import AdvancedImpactChart from "./components/AdvancedImpactChart"
import Comparison from "./components/Comparison"
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

  // LandingPage starten oder Share-Link auslesen
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

          {/* Report Header */}
          <ReportHeader />

          {/* Main Grid: Calculator + Charts + KPI */}
          <div className="dashboard-section grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Linke Spalte: Calculator + SalesInfoCard */}
            <div className="flex flex-col gap-6">
              <Calculator impactData={impactData} setImpactData={setImpactData} />
              <SalesInfoCard />
            </div>

            {/* Mittlere Spalte: Charts */}
            <div className="flex flex-col gap-6">
              <ChartsSection data={impactData} />
              <CO2Chart data={impactData} />
              <AdvancedImpactChart data={impactData} />
            </div>

            {/* Rechte Spalte: KPI + Comparison */}
            <div className="flex flex-col gap-6">
              <KPISection data={impactData} />
              <ImpactScore data={impactData} />
              <CO2Counter data={impactData} />
              <Comparison data={impactData} />
            </div>

          </div>

          {/* Page Break für PDF */}
          <div className="page-break"></div>

          {/* Tools & Export */}
          <div className="dashboard-section grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
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
