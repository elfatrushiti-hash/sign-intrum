import React from "react";

export default function Comparison({ data, t }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h4 className="text-2xl font-bold text-intrumPurple mb-4">
        {t.comparison.title}
      </h4>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-2 font-semibold">{t.comparison.category}</th>
              <th className="py-2 px-2 font-semibold">{t.comparison.paper}</th>
              <th className="py-2 px-2 font-semibold">{t.comparison.digital}</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-2 px-2">{t.comparison.cost}</td>
              <td className="py-2 px-2">{data.totalHand.toFixed(2)}</td>
              <td className="py-2 px-2">{data.totalDigital.toFixed(2)}</td>
            </tr>

            <tr className="border-b">
              <td className="py-2 px-2">{t.comparison.time}</td>
              <td className="py-2 px-2">0</td>
              <td className="py-2 px-2">{data.timeSaved.toFixed(2)}</td>
            </tr>

            <tr>
              <td className="py-2 px-2">{t.comparison.co2}</td>
              <td className="py-2 px-2">0</td>
              <td className="py-2 px-2">{data.co2Saved.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}