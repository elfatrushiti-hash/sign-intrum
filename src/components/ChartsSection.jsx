// src/components/ChartsSection.jsx
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Chart.js registrieren
ChartJS.register(ArcElement, Tooltip, Legend)

export default function ChartsSection({ data }) {
  // Daten für Doughnut
  const chartData = {
    labels: ['Handgeschrieben', 'Digital'],
    datasets: [
      {
        label: 'Kosten CHF',
        data: [data.totalHand, data.totalDigital],
        backgroundColor: ['#520051', '#00A88F'], // Intrum Farben
        hoverBackgroundColor: ['#857BFF', '#00C8A0'],
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed.toFixed(2)} CHF`
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      duration: 1000
    }
  }

  return (
    <section className="max-w-2xl mx-auto my-8 bg-white p-6 rounded-lg shadow">
      <h3 className="text-center font-bold text-xl mb-4">Kostenvergleich</h3>
      <Doughnut data={chartData} options={options} />
    </section>
  )
}