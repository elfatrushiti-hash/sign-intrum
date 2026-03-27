import React from "react";

export default function LandingPage({ start, t }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-intrumPurple mb-4">
        {t.landing.title}
      </h1>

      <p className="text-lg text-gray-700 max-w-xl mb-8">
        {t.landing.subtitle}
      </p>

      <button
        onClick={start}
        className="bg-intrumPurple text-white px-6 py-3 rounded-lg shadow hover:bg-[#0f0340] transition"
      >
        {t.landing.button}
      </button>
    </div>
  );
}