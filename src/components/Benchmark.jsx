import React from "react";

export default function Benchmark({ data, t }) {
  const benchmarkCost = 8.5; // Markt Durchschnitt

  const docs = data.docs > 0 ? data.docs : 1;
  const signs = data.signs > 0 ? data.signs : 1;

  const userCost = data.totalHand / (docs * signs);
  const isMoreExpensive = userCost > benchmarkCost;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-bgPurple20 animate-fadeIn">
      <h4 className="text-xl font-bold text-intrumPurple mb-4 tracking-tight">
        {t.benchmark.title}
      </h4>

      <p className="text-gray-700 mb-2">
        {t.benchmark.avgCost}: <strong>{benchmarkCost} CHF</strong>
      </p>

      <p className="text-gray-700 mb-4">
        {t.benchmark.yourCost}: <strong>{userCost.toFixed(2)} CHF</strong>
      </p>

      <p className="font-medium text-gray-800 mt-2">
        {isMoreExpensive
          ? t.benchmark.moreExpensive
          : t.benchmark.moreEfficient}
      </p>
    </div>
  );
}
