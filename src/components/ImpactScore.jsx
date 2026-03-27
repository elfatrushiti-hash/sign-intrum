import React, { useState, useEffect } from "react";

export default function ImpactScore({ data, t }) {
  const [animatedScore, setAnimatedScore] = useState(0);

  // Konstanten aus deiner Originaldatei
  const COST_HAND = 76.02;
  const COST_DIGITAL = 11.24;
  const TIME_HAND = 0.5;
  const TIME_DIGITAL = 0.05;
  const CO2_PER_PAGE = 0.25;

  const calculateScore = () => {
    const {
      docs = 1,
      signs = 1,
      pages = 1,
      totalHand,
      totalDigital,
      timeSaved,
      co2Saved
    } = data;

    // Kostenersparnis (0–100)
    const maxCostSavings = (COST_HAND - COST_DIGITAL) * docs * signs;
    const costScore =
      maxCostSavings > 0
        ? ((totalHand - totalDigital) / maxCostSavings) * 100
        : 0;

    // Zeitersparnis
    const maxTimeSaved = (TIME_HAND - TIME_DIGITAL) * docs * signs * pages;
    const timeScore =
      maxTimeSaved > 0 ? (timeSaved / maxTimeSaved) * 100 : 0;

    // CO₂-Ersparnis
    const maxCO2Saved = CO2_PER_PAGE * docs * signs * pages;
    const co2Score =
      maxCO2Saved > 0 ? (co2Saved / maxCO2Saved) * 100 : 0;

    // Durchschnitt
    const rawScore = (costScore + timeScore + co2Score) / 3;

    return Math.min(Math.max(rawScore, 0), 100);
  };

  const score = calculateScore();

  // Animation
  useEffect(() => {
    let current = 0;
    const end = Math.round(score);

    if (end === 0) {
      setAnimatedScore(0);
      return;
    }

    const stepTime = Math.max(Math.floor(1000 / end), 20);

    const timer = setInterval(() => {
      current += 1;
      setAnimatedScore(current);
      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [score]);

  // Farb-Logik
  const getColor = () => {
    if (score >= 70) return "bg-[#03A4AD]";
    if (score >= 40) return "bg-[#2395FF]";
    return "bg-[#8750E5]";
  };

  return (
    <div className={`p-6 rounded-lg shadow text-white ${getColor()}`}>
      <h4 className="text-xl font-bold mb-2">{t.impactScore.title}</h4>

      <p className="text-4xl font-extrabold">
        {animatedScore} / 100
      </p>

      <p className="mt-2 text-white/90 text-sm">
        {t.impactScore.subtitle}
      </p>
    </div>
  );
}