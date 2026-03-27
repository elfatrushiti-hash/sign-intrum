import React from "react";

export default function Benchmark({ data, t }) {
  const benchmarkCost = 8.5; // Markt Durchschnitt

  // Schutz vor Division durch 0
  const docs = data.docs > 0 ? data.docs : 1;
  const signs = data.signs > 0 ? data.signs : 1;

  // Kosten pro Dokument
  const userCost = data.totalHand / (docs * signs);

  const isMoreExpensive = userCost > benchmarkCost;

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-2xl font-bold text-intrumPurple mb-4">
        {t.benchmark.title}
      </h4>

      <p className="mb-2">
        {t.benchmark.avgCost}: <strong>{benchmarkCost} CHF</strong>
      </p>

      <p className="mb-2">
        {t.benchmark.yourCost}: <strong>{userCost.toFixed(2)} CHF</strong>
      </p>

      <p className="mt-4 font-medium text-gray-700">
        {isMoreExpensive
          ? t.benchmark.moreExpensive
          : t.benchmark.moreEfficient}
      </p>
    </div>
  );
}