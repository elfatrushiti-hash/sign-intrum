import React from "react";

export default function LanguageSwitcher({ language, setLanguage }) {
  const buttonClass = (lang) =>
    `px-3 py-1 rounded-lg font-medium transition ${
      language === lang
        ? "bg-primaryPurple text-white"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
    }`;

  return (
    <div className="flex gap-3 mb-6">
      <button
        onClick={() => setLanguage("de")}
        className={buttonClass("de")}
      >
        DE
      </button>

      <button
        onClick={() => setLanguage("fr")}
        className={buttonClass("fr")}
      >
        FR
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={buttonClass("en")}
      >
        EN
      </button>
    </div>
  );
}