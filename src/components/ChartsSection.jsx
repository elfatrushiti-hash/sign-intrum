import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS Modules registrieren
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartsSection({ data, t }) {
  const chartData = {
    labels: [t.charts.handwritten, t.charts.digital],
    datasets: [
      {
        label: t.charts.label,
        data: [data.totalHand, data.totalDigital],
        backgroundColor: ["#170456", "#1316C7"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-2xl font-bold text-intrumPurple mb-4">
        {t.charts.title}
      </h4>

      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
}