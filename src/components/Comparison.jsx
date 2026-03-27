import React from "react";

export default function Comparison({ data, t }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-bgPurple20 animate-fadeIn">
      <h4 className="text-xl font-bold text-intrumPurple mb-4 tracking-tight">
        {t.comparison.title}
      </h4>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-gray-800">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 px-3 font-semibold">{t.comparison.category}</th>
              <th className="py-2 px-3 font-semibold">{t.comparison.paper}</th>
              <th className="py-2 px-3 font-semibold">{t.comparison.digital}</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">{t.comparison.cost}</td>
              <td className="py-2 px-3">{data.totalHand.toFixed(2)}</td>
              <td className="py-2 px-3">{data.totalDigital.toFixed(2)}</td>
            </tr>

            <tr className="border-b border-gray-200">
              <td className="py-2 px-3">{t.comparison.time}</td>
              <td className="py-2 px-3">0</td>
              <td className="py-2 px-3">{data.timeSaved.toFixed(2)}</td>
            </tr>

            <tr>
              <td className="py-2 px-3">{t.comparison.co2}</td>
              <td className="py-2 px-3">0</td>
              <td className="py-2 px-3">{data.co2Saved.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
