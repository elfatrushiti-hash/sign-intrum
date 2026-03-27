import React, { useState, useEffect } from "react";
import {
  FaFileAlt,
  FaPenFancy,
  FaClock,
  FaMoneyBillWave,
  FaLeaf
} from "react-icons/fa";

export default function KPISection({ data, t }) {
  const [display, setDisplay] = useState({ ...data });
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step > 20) clearInterval(interval);

      setDisplay({
        totalHand: data.totalHand * (step / 20),
        totalDigital: data.totalDigital * (step / 20),
        timeSaved: data.timeSaved * (step / 20),
        moneySaved: data.moneySaved * (step / 20),
        co2Saved: data.co2Saved * (step / 20)
      });
    }, 50);

    return () => clearInterval(interval);
  }, [data]);

  const cards = [
    {
      key: "totalHand",
      label: t.kpi.handwritten,
      value: display.totalHand.toFixed(2) + " CHF",
      icon: <FaFileAlt size={28} className="text-intrumPurple" />,
      description: t.kpi.handwrittenDesc
    },
    {
      key: "totalDigital",
      label: t.kpi.digital,
      value: display.totalDigital.toFixed(2) + " CHF",
      icon: <FaPenFancy size={28} className="text-intrumPurple" />,
      description: t.kpi.digitalDesc
    },
    {
      key: "timeSaved",
      label: t.kpi.timeSaved,
      value: display.timeSaved.toFixed(2) + " h",
      icon: <FaClock size={28} className="text-intrumPurple" />,
      description: t.kpi.timeSavedDesc
    },
    {
      key: "moneySaved",
      label: t.kpi.moneySaved,
      value: display.moneySaved.toFixed(2) + " CHF",
      icon: <FaMoneyBillWave size={28} className="text-intrumPurple" />,
      description: t.kpi.moneySavedDesc
    },
    {
      key: "co2Saved",
      label: t.kpi.co2Saved,
      value: display.co2Saved.toFixed(2) + " kg",
      icon: <FaLeaf size={28} className="text-intrumPurple" />,
      description: t.kpi.co2SavedDesc
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
      {cards.map((c, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl shadow hover:shadow-lg border border-bgPurple20 cursor-pointer transition transform hover:scale-[1.02] flex flex-col justify-between"
          onClick={() => setOpenCard(openCard === c.key ? null : c.key)}
        >
          <div className="flex items-center gap-2">
            {c.icon}
            <p className="font-bold text-lg">{c.label}</p>
          </div>

          <p className="text-xl mt-2 font-semibold">{c.value}</p>

          {openCard === c.key && (
            <p className="mt-3 text-sm text-gray-600">{c.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
