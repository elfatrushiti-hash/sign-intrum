import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function LandingPage({ start, t, language, setLanguage }) {
  return (
    <div className="min-h-screen w-full bg-bgPurple20 flex flex-col justify-center items-center relative overflow-hidden">

      {/* ✅ Light gradient overlay for modern Intrum look */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bgPurple40 opacity-60 pointer-events-none" />

      {/* ✅ Floating Intrum Glow Effect */}
      <div className="absolute w-[600px] h-[600px] bg-intrumPurple opacity-20 blur-[140px] -top-40 -left-40 animate-pulse pointer-events-none"></div>

      {/* ✅ Language Switcher – repositioned, clean */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>

      {/* ✅ CONTENT */}
      <div className="z-10 text-center px-6 animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-intrumPurple drop-shadow-sm mb-4 leading-snug">
          {t.landing.title}
        </h1>

        <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.landing.subtitle}
        </p>

        {/* ✅ CTA Button */}
        <button
          onClick={start}
          className="bg-intrumPurple text-white px-10 py-4 text-lg rounded-xl shadow-xl hover:scale-105 hover:bg-[#0f0340] active:scale-95 transition-all duration-200"
        >
          {t.landing.button}
        </button>
      </div>
    </div>
  );
}
