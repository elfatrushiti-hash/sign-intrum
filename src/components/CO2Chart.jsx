import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// ChartJS Module registrieren
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function CO2Chart({ data, t }) {
  const chartData = {
    labels: [t.co2Counter.title, t.charts.digital],
    datasets: [
      {
        label: t.co2Counter.subtitle,
        data: [data.co2Saved + 10, 10], // exakt aus deiner Originaldatei übernommen
        backgroundColor: ["#7c3aed", "#10b981"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-2xl font-bold text-intrumPurple mb-4">
        {t.co2Counter.title}
      </h4>

      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}