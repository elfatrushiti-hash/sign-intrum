import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function exportPDF() {
  const pdf = new jsPDF("p", "mm", "a4");

  /* ---------------------------------------
     PAGE 1 – TITLE PAGE
  --------------------------------------- */
  pdf.setFillColor(23, 4, 86); // Intrum Purple
  pdf.rect(0, 0, 210, 297, "F");

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(32);
  pdf.setTextColor(255, 255, 255);
  pdf.text("SIGN Impact Report", 20, 45);

  pdf.setFontSize(16);
  pdf.text("Einsparungsanalyse – digital vs traditionell", 20, 65);

  const date = new Date().toLocaleDateString();
  pdf.setFontSize(12);
  pdf.text("Datum: " + date, 20, 85);

  pdf.addPage();


  /* ---------------------------------------
     PAGE 2 – KPI ANALYSE + DONUT CHART
  --------------------------------------- */
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(20);
  pdf.setTextColor(23, 4, 86);
  pdf.text("KPI Analyse & Kostenübersicht", 20, 20);

  // KPI Section screenshot
  const kpiSection = document.querySelector("#kpi-section");
  if (kpiSection) {
    const canvas = await html2canvas(kpiSection, { scale: 2 });
    const img = canvas.toDataURL("image/png");
    pdf.addImage(img, "PNG", 10, 30, 190, 70);
  }

  // Donut Chart
  const donut = document.querySelector("#donut-chart");
  if (donut) {
    const donutImg = donut.toDataURL("image/png");
    pdf.addImage(donutImg, "PNG", 30, 110, 150, 150);
  }

  pdf.addPage();


  /* ---------------------------------------
     PAGE 3 – VERGLEICH + TRENDS
  --------------------------------------- */
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(20);
  pdf.setTextColor(23, 4, 86);
  pdf.text("Vergleich & Trends", 20, 20);

  // Benchmark + Comparison Section screenshot
  const compareSection = document.querySelector("#compare-section");
  if (compareSection) {
    const compareCanvas = await html2canvas(compareSection, { scale: 2 });
    const compareImg = compareCanvas.toDataURL("image/png");
    pdf.addImage(compareImg, "PNG", 10, 30, 190, 80);
  }

  // Line chart
  const lineChart = document.querySelector("#line-chart");
  if (lineChart) {
    const img = lineChart.toDataURL("image/png");
    pdf.addImage(img, "PNG", 15, 120, 180, 70);
  }

  // CO₂ chart
  const co2Chart = document.querySelector("#co2-chart");
  if (co2Chart) {
    const img = co2Chart.toDataURL("image/png");
    pdf.addImage(img, "PNG", 15, 200, 180, 70);
  }

  pdf.save("SIGN_Impact_Report.pdf");
}
