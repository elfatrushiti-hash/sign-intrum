import jsPDF from "jspdf";

// Hole Chart Instanzen aus Fensterglobals
function getChart(id) {
  return window.__charts?.[id] || null;
}

export async function exportPDF() {
  const pdf = new jsPDF("p", "mm", "a4");

  /* -------------------------------
     PAGE 1 – Titel
  ------------------------------- */
  pdf.setFillColor(23, 4, 86);
  pdf.rect(0, 0, 210, 297, "F");

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(32);
  pdf.setTextColor(255, 255, 255);
  pdf.text("SIGN Impact Report", 20, 45);

  pdf.setFontSize(16);
  pdf.text("Einsparungsanalyse – digital vs traditionell", 20, 65);

  pdf.setFontSize(12);
  pdf.text("Datum: " + new Date().toLocaleDateString(), 20, 85);

  pdf.addPage();

  /* -------------------------------
     PAGE 2 – KPI + Donut
  ------------------------------- */
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(20);
  pdf.setTextColor(23, 4, 86);
  pdf.text("KPI Analyse & Kostenübersicht", 20, 20);

  // ✅ KPI Cards als Screenshot (nur 2x Scale)
  const kpiEl = document.querySelector("#kpi-section");
  if (kpiEl) {
    const canvas = await window.html2canvas(kpiEl, { scale: 3 });
    const png = canvas.toDataURL("image/png");
    pdf.addImage(png, "PNG", 10, 30, 190, 70);
  }

  // ✅ Donut Chart direkt aus Chart.js (SUPER scharf)
  const donut = getChart("donut-chart");
  if (donut) {
    const img = donut.toBase64Image();
    pdf.addImage(img, "PNG", 30, 110, 150, 150);
  }

  pdf.addPage();

  /* -------------------------------
     PAGE 3 – Vergleich + Trends
  ------------------------------- */
  pdf.setFontSize(20);
  pdf.setTextColor(23, 4, 86);
  pdf.text("Vergleich & Trends", 20, 20);

  // ✅ Comparison (höhere Qualität)
  const compareEl = document.querySelector("#compare-section");
  if (compareEl) {
    const canvas = await window.html2canvas(compareEl, { scale: 3 });
    const png = canvas.toDataURL("image/png");
    pdf.addImage(png, "PNG", 10, 30, 190, 80);
  }

  // ✅ Line Chart (Chart.js PNG)
  const line = getChart("line-chart");
  if (line) {
    const img = line.toBase64Image();
    pdf.addImage(img, "PNG", 15, 120, 180, 70);
  }

  // ✅ CO2 Chart (Chart.js PNG)
  const co2 = getChart("co2-chart");
  if (co2) {
    const img = co2.toBase64Image();
    pdf.addImage(img, "PNG", 15, 200, 180, 70);
  }

  pdf.save("SIGN_Impact_Report.pdf");
}
