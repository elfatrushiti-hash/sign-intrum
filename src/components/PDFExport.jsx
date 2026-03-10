import React from "react"

export default function PDFExport() {

  const exportPDF = () => {
    const originalTitle = document.title
    document.title = "SIGN Impact Report"

    // Scroll to top
    window.scrollTo(0, 0)

    window.print()

    document.title = originalTitle
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-center dashboard-section">
      <h3 className="text-lg font-bold mb-4 text-[#8750E5]">
        SIGN Impact Executive Report
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        Kompakte Übersicht aller KPI, Impact Scores und Charts auf 2 Seiten.
      </p>

      <button
        onClick={exportPDF}
        className="bg-[#8750E5] hover:bg-[#4F1D8D] text-white px-6 py-3 rounded-lg transition font-semibold"
      >
        PDF Report erstellen
      </button>
    </div>
  )
}
