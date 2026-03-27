import React, { useState } from "react";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import KPISection from "./components/KPISection";
import Benchmark from "./components/Benchmark";
import Comparison from "./components/Comparison";
import ChartsSection from "./components/ChartsSection";
import AdvancedImpactChart from "./components/AdvancedImpactChart";
import CO2Chart from "./components/CO2Chart";
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

  return (
    <AdminMode t={t}>
      <div className="container mx-auto p-6">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />

        <Hero t={t} />

        <div className="my-6">
          <Calculator
            impactData={impactData}
            setImpactData={setImpactData}
            t={t}
          />
        </div>

        <KPISection data={impactData} t={t} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <Benchmark data={impactData} t={t} />
          <Comparison data={impactData} t={t} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <ChartsSection data={impactData} t={t} />
          <CO2Chart data={impactData} t={t} />
        </div>

        <AdvancedImpactChart data={impactData} t={t} />

        <Footer t={t} />
      </div>
    </AdminMode>
  );
}
