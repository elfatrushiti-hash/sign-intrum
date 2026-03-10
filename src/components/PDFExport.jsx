import React from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function PDFExport() {

  const exportPDF = async () => {

    const dashboard = document.getElementById("dashboard")

    if (!dashboard) {
      alert("Dashboard nicht gefunden")
      return
    }

    const canvas = await html2canvas(dashboard, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#F1E8FA"
    })

    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    const imgWidth = pageWidth - 20
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // Hintergrund
    pdf.setFillColor(241,232,250)
    pdf.rect(0,0,pageWidth,pageHeight,"F")

    // Logo
    const logo = new Image()
    logo.src = "/intrum-logo.png"

    logo.onload = () => {

      pdf.addImage(logo, "PNG", pageWidth - 50, 10, 35, 12)

      // Titel
      pdf.setFont("helvetica","bold")
      pdf.setTextColor(41,7,74)
      pdf.setFontSize(18)

      pdf.text("SIGN Impact Report", 10, 20)

      pdf.setFontSize(10)
      pdf.setFont("helvetica","normal")

      const date = new Date().toLocaleDateString()

      pdf.text(`Erstellt am: ${date}`, 10, 26)

      // Dashboard Screenshot
      pdf.addImage(
        imgData,
        "PNG",
        10,
        35,
        imgWidth,
        imgHeight
      )

      pdf.save("SIGN_Impact_Report.pdf")

    }

  }

  return (

    <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-center">

      <h3 className="text-lg font-bold mb-4 text-[#8750E5]">
        PDF Report
      </h3>

      <button
        onClick={exportPDF}
        className="bg-[#8750E5] hover:bg-[#4F1D8D] text-white px-6 py-3 rounded-lg transition"
      >
        Impact Report herunterladen
      </button>

    </div>

  )

}
