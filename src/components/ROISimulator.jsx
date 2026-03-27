import React from "react";

export default function ROISimulator({ data }) {
  // Berechnungen basierend auf deinen Originalwerten
  const yearlyDocs = data.docs * 12;
  const yearlySavings = data.moneySaved * 12;
  const yearlyCO2 = data.co2Saved * 12;
  const yearlyTime = data.timeSaved * 12;

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-2xl font-bold text-intrumPurple mb-4">
        Jährlicher SIGN Impact
      </h4>

      <div className="space-y-3 text-gray-700">
        <p>
          <strong>Dokumente pro Jahr:</strong> {yearlyDocs}
        </p>

        <p>
          <strong>Geldersparnis:</strong> {yearlySavings.toFixed(2)} CHF
        </p>

        <p>
          <strong>Zeitersparnis:</strong> {yearlyTime.toFixed(2)} Stunden
        </p>

        <p>
          <strong>CO₂ Einsparung:</strong> {yearlyCO2.toFixed(2)} kg
        </p>
      </div>
    </div>
  );
}
``