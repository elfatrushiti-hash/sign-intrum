import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/* 
  Helper: Hole ChartJS Bild in top Qualität
  Chart.js liefert perfekte PNGs via toBase64Image()
*/
function chartImage(id) {
  if (!window.__charts || !window.__charts[id]) return null;
  return window.__charts[id].toBase64Image("image/png", 1.0);
}

export async function exportPDF(data, t) {
  const pdf = new jsPDF("p", "mm", "a4");

  /* ---------------------------------------
     PAGE 1 – TITELSEITE (Vektorqualität)
  ---------------------------------------- */
  pdf.setFillColor(23, 4, 86);
  pdf.rect(0, 0, 210, 297, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(32);
  pdf.text("SIGN Impact Report", 20, 45);

  pdf.setFontSize(16);
  pdf.text("Einsparungsanalyse – digital vs traditionell", 20, 65);

  pdf.setFontSize(12);
  pdf.text("Datum: " + new Date().toLocaleDateString(), 20, 85);

  pdf.addPage();



  /* ---------------------------------------
     PAGE 2 – KPI SECTION + DONUT (scharf)
  ---------------------------------------- */

  pdf.setTextColor(23, 4, 86);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  pdf.text("KPI Analyse", 20, 20);

  // KPI Values (scharf, Vektor)
  pdf.setFontSize(12);
  pdf.setTextColor(50, 50, 50);

  const kpis = [
    [t.kpi.handwritten, data.totalHand.toFixed(2) + " CHF"],
    [t.kpi.digital, data.totalDigital.toFixed(2) + " CHF"],
    [t.kpi.timeSaved, data.timeSaved.toFixed(2) + " h"],
    [t.kpi.moneySaved, data.moneySaved.toFixed(2) + " CHF"],
    [t.kpi.co2Saved, data.co2Saved.toFixed(2) + " kg"]
  ];

  autoTable(pdf, {
    startY: 30,
    head: [["Kategorie", "Wert"]],
    body: kpis,
    styles: { fontSize: 11 },
    headStyles: { fillColor: [23, 4, 86], textColor: 255 },
  });

  // Donut Chart (HQ-ChartJS Export)
  const donut = chartImage("donut-chart");
  if (donut) {
    pdf.addImage(donut, "PNG", 25, 90, 160, 160);
  }

  pdf.addPage();



  /* ---------------------------------------
     PAGE 3 – Benchmark, Comparison & Charts
  ---------------------------------------- */

  pdf.setFontSize(18);
  pdf.setTextColor(23, 4, 86);
  pdf.text("Vergleich & Trends", 20, 20);

  /* Benchmark Table (vektorbasiert) */
  autoTable(pdf, {
    startY: 30,
    head: [["Kategorie", "Wert"]],
    body: [
      [t.benchmark.avgCost, "8.50 CHF"],
      [t.benchmark.yourCost, (data.totalHand / (data.docs * data.signs)).toFixed(2) + " CHF"]
    ],
    styles: { fontSize: 11 },
    headStyles: { fillColor: [23, 4, 86], textColor: 255 },
  });

  /* Comparison Table */
  autoTable(pdf, {
    startY: pdf.lastAutoTable.finalY + 10,
    head: [[t.comparison.category, t.comparison.paper, t.comparison.digital]],
    body: [
      [t.comparison.cost, data.totalHand.toFixed(2), data.totalDigital.toFixed(2)],
      [t.comparison.time, "0", data.timeSaved.toFixed(2)],
      [t.comparison.co2, "0", data.co2Saved.toFixed(2)],
    ],
  });

  /* Charts: perfektes ChartJS PNG */
  let y = pdf.lastAutoTable.finalY + 20;

  const line = chartImage("line-chart");
  if (line) {
    pdf.addImage(line, "PNG", 15, y, 180, 70);
    y += 80;
  }

  const co2 = chartImage("co2-chart");
  if (co2) {
    pdf.addImage(co2, "PNG", 15, y, 180, 70);
  }

  pdf.save("SIGN_Impact_Report.pdf");
}
