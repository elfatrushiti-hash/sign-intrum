import React from "react";

export default function LanguageSwitcher({ language, setLanguage }) {
  const baseClass =
    "px-3 py-1 rounded-lg font-medium transition text-sm shadow-sm";
  const active =
    "bg-intrumPurple text-white shadow-md";
  const inactive =
    "bg-gray-200 text-gray-700 hover:bg-gray-300";

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage("de")}
        className={`${baseClass} ${language === "de" ? active : inactive}`}
      >
        DE
      </button>

      <button
        onClick={() => setLanguage("fr")}
        className={`${baseClass} ${language === "fr" ? active : inactive}`}
      >
        FR
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`${baseClass} ${language === "en" ? active : inactive}`}
      >
        EN
      </button>
    </div>
  );
}
