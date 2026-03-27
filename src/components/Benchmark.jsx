import React from "react";

export default function Benchmark({ data, t }) {
  const benchmarkCost = 8.5;

  const docs = data.docs > 0 ? data.docs : 1;
  const signs = data.signs > 0 ? data.signs : 1;

  const userCost = data.totalHand / (docs * signs);
  const moreExpensive = userCost > benchmarkCost;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-bgPurple20 card-hover fade-section">
      <h4 className="text-xl font-bold text-intrumPurple mb-4 tracking-tight">
        {t.benchmark.title}
      </h4>

      <div className="space-y-3 text-gray-800">
        <p>
          {t.benchmark.avgCost}:{" "}
          <strong>{benchmarkCost.toFixed(2)} CHF</strong>
        </p>

        <p>
          {t.benchmark.yourCost}:{" "}
          <strong>{userCost.toFixed(2)} CHF</strong>
        </p>

        <p className="pt-2 font-medium">
          {moreExpensive
            ? t.benchmark.moreExpensive
            : t.benchmark.moreEfficient}
        </p>
      </div>
    </div>
  );
}
