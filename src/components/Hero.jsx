import React from "react";

export default function Hero({ t }) {
  return (
    <div className="text-center my-10">
      <h1 className="text-3xl font-bold text-intrumPurple">
        {t.hero.title}
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        {t.hero.subtitle}
      </p>
    </div>
  );
}