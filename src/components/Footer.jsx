import React from "react";

export default function Footer({ t }) {
  return (
    <footer className="mt-12 py-6 text-center bg-gray-50 rounded-lg shadow-inner">
      <p className="text-gray-700 font-medium">
        {t.footer.text}{" "}
        <a
          href="https://www.intrum.ch/de/business-solutions/dienstleistungen/digital-onboarding/signing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-intrumPurple font-semibold hover:underline"
        >
          {t.footer.link}
        </a>
      </p>
    </footer>
  );
}