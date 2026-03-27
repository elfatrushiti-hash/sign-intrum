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
    <div className="p-5 bg-white rounded-xl shadow-md border border-bgPurple20 fade-section">
      <h4 className="text-lg font-bold text-intrumPurple mb-1">
        {t.co2Counter.title}
      </h4>

      <p className="text-3xl font-extrabold text-gray-900">
        {display.toFixed(2)} kg
      </p>

      <p className="text-gray-600 text-sm mt-1">
        {t.co2Counter.subtitle}
      </p>
    </div>
  );
}
