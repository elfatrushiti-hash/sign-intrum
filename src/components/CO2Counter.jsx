import React, { useEffect, useState } from "react";

export default function CO2Counter({ data, t }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setDisplay(data.co2Saved * (step / 20));
      if (step >= 20) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-bgPurple20 fade-section">
      <h4 className="text-xl font-bold text-intrumPurple mb-2">
        {t.co2Counter.title}
      </h4>

      <p className="text-3xl font-extrabold text-gray-900">
        {display.toFixed(2)} kg
      </p>

      <p className="text-gray-600 mt-2 text-sm">
        {t.co2Counter.subtitle}
      </p>
    </div>
  );
}
