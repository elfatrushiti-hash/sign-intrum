import React, { useState } from "react";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import KPISection from "./components/KPISection";
import Benchmark from "./components/Benchmark";
import Comparison from "./components/Comparison";
import ChartsSection from "./components/ChartsSection";
import AdvancedImpactChart from "./components/AdvancedImpactChart";
import CO2Chart from "./components/CO2Chart";
import CO2Counter from "./components/CO2Counter";
import Footer from "./components/Footer";
import AdminMode from "./components/AdminMode";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LandingPage from "./components/LandingPage";
import { translations } from "./i18n";

export default function App() {
  const [language, setLanguage] = useState("de");
  const t = translations[language];

  const [showLanding, setShowLanding] = useState(true);

  const [impactData, setImpactData] = useState({
    docs: 10,
    signs: 2,
    pages: 1,
    totalHand: 0,
    totalDigital: 0,
    timeSaved: 0,
    moneySaved: 0,
    co2Saved: 0
  });

  // ✅ Landing Page
  if (showLanding) {
    return (
      <LandingPage
        start={() => setShowLanding(false)}
        t={t}
        language={language}
        setLanguage={setLanguage}
      />
    );
  }

  // ✅ Dashboard Layout (Top / Mid / Lower Zones)
  return (
    <AdminMode t={t}>
      <div className="dashboard-wrapper">

        <div className="dashboard-bg-glow" />
        <div className="dashboard-bg-gradient" />

        <div className="container mx-auto p-6 relative z-10">

          {/* ✅ Top Bar */}
          <div className="flex justify-end mb-6">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          {/* ✅ Hero */}
          <Hero t={t} />

          {/* ✅ TOP ZONE (3‑Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <Calculator
              impactData={impactData}
              setImpactData={setImpactData}
              t={t}
            />

            <ChartsSection data={impactData} t={t} />

            <KPISection data={impactData} t={t} />
          </div>

          {/* ✅ MID ZONE (2‑Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <Benchmark data={impactData} t={t} />
            <Comparison data={impactData} t={t} />
          </div>

          {/* ✅ LOWER ZONE (2‑Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <AdvancedImpactChart data={impactData} t={t} />

            {/* CO₂ Chart + Counter kombiniert */}
            <div className="flex flex-col gap-6">
              <CO2Counter data={impactData} t={t} />
              <CO2Chart data={impactData} t={t} />
            </div>
          </div>

          <Footer t={t} />

        </div>
      </div>
    </AdminMode>
  );
}
