import React from "react";

export default function Calculator({ impactData, setImpactData, t }) {
  const handleChange = (field, value) => {
    const docs = field === "docs" ? Number(value) : impactData.docs;
    const signs = field === "signs" ? Number(value) : impactData.signs;
    const pages = field === "pages" ? Number(value) : impactData.pages;

    // Handgeschrieben (Papierprozess)
    const paperCost = docs * signs * 2.5;
    const postage = docs * signs * 2.2;
    const workHours = docs * signs * 0.5 * pages;
    const workCost = workHours * 63;
    const totalHand = paperCost + postage + workCost;

    // Digital SIGN
    const digitalCost = docs * signs * 2.2;
    const digitalWorkCost = docs * signs * 0.05 * 63 * pages;
    const totalDigital = digitalCost + digitalWorkCost;

    // Einsparungen
    const timeSaved = workHours - docs * signs * 0.05 * pages;
    const moneySaved = totalHand - totalDigital;
    const co2Saved = docs * signs * 0.5 * pages;

    setImpactData({
      docs,
      signs,
      pages,
      totalHand,
      totalDigital,
      timeSaved,
      moneySaved,
      co2Saved
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-intrumPurple">
        {t.calculator.title}
      </h3>

      <p className="text-gray-700 mb-4">{t.calculator.subtitle}</p>

      {/* Dokumente */}
      <label className="block mb-3 font-medium text-gray-800">
        {t.calculator.docs}
        <input
          type="number"
          min="0"
          placeholder="z.B. 10"
          className="border border-primaryPurple p-2 rounded text-center w-full mt-1"
          onChange={(e) => handleChange("docs", e.target.value)}
        />
      </label>

      {/* Signaturen */}
      <label className="block mb-3 font-medium text-gray-800">
        {t.calculator.signs}
        <input
          type="number"
          min="0"
          placeholder="z.B. 2"
          className="border border-primaryPurple p-2 rounded text-center w-full mt-1"
          onChange={(e) => handleChange("signs", e.target.value)}
        />
      </label>

      {/* Seiten */}
      <label className="block mb-3 font-medium text-gray-800">
        {t.calculator.pages}
        <input
          type="number"
          min="1"
          placeholder="z.B. 5"
          className="border border-primaryPurple p-2 rounded text-center w-full mt-1"
          onChange={(e) => handleChange("pages", e.target.value)}
        />
      </label>
    </div>
  );
}