import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartsSection({ data, t }) {
  const chartData = {
    labels: [t.charts.handwritten, t.charts.digital],
    datasets: [
      {
        label: t.charts.label,
        data: [data.totalHand, data.totalDigital],
        backgroundColor: ["#170456", "#1316C7"],
        borderWidth: 0,
      }
    ]
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-bgPurple20 card-hover fade-section">
      <h4 className="text-xl font-bold text-intrumPurple mb-4 tracking-tight">
        {t.charts.title}
      </h4>
      <Doughnut data={chartData} />
    </div>
  );
}
