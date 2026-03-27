import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function AdvancedImpactChart({ data, t }) {
  const chartData = {
    labels: [
      t.advancedChart.today,
      t.advancedChart.month3,
      t.advancedChart.month6,
      t.advancedChart.year1,
    ],
    datasets: [
      {
        label: t.advancedChart.paperProcess,
        data: [
          data.totalHand,
          data.totalHand * 3,
          data.totalHand * 6,
          data.totalHand * 12,
        ],
        borderColor: "#ef4444",
        tension: 0.3,
        fill: false,
      },
      {
        label: t.advancedChart.digital,
        data: [
          data.totalDigital,
          data.totalDigital * 3,
          data.totalDigital * 6,
          data.totalDigital * 12,
        ],
        borderColor: "#10b981",
        tension: 0.3,
        fill: false,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-bgPurple20 animate-fadeIn">
      <h4 className="text-xl font-bold text-intrumPurple mb-4 tracking-tight">
        {t.advancedChart.title}
      </h4>

      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
