import React, { useState, useEffect } from "react";
import {
  FaClock,
  FaMoneyBillWave,
  FaLeaf
} from "react-icons/fa";

export default function KPISection({ data, t }) {
  const [display, setDisplay] = useState({ ...data });

  useEffect(() => {
    let step = 0;
    const fadeInterval = setInterval(() => {
      step += 1;
      if (step > 20) clearInterval(fadeInterval);

      setDisplay({
        timeSaved: data.timeSaved * (step / 20),
        moneySaved: data.moneySaved * (step / 20),
        co2Saved: data.co2Saved * (step / 20),
      });
    }, 50);

    return () => clearInterval(fadeInterval);
  }, [data]);

  const tiles = [
    {
      label: t.kpi.timeSaved,
      value: display.timeSaved.toFixed(2) + " h",
      icon: <FaClock size={26} className="text-intrumPurple" />,
    },
    {
      label: t.kpi.moneySaved,
      value: display.moneySaved.toFixed(2) + " CHF",
      icon: <FaMoneyBillWave size={26} className="text-intrumPurple" />,
    },
    {
      label: t.kpi.co2Saved,
      value: display.co2Saved.toFixed(2) + " kg",
      icon: <FaLeaf size={26} className="text-intrumPurple" />,
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 fade-section">
      {tiles.map((t, i) => (
        <div
          key={i}
          className="p-5 bg-white rounded-xl shadow-md border border-bgPurple20 card-hover"
        >
          <div className="flex items-center gap-2">
            {t.icon}
            <p className="font-bold">{t.label}</p>
          </div>

          <p className="text-2xl font-extrabold mt-2 text-gray-900">
            {t.value}
          </p>
        </div>
      ))}
    </div>
  );
}
