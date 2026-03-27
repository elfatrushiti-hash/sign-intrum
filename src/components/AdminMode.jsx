import React, { useState } from "react";

export default function AdminMode({ children, t }) {
  const [presentation, setPresentation] = useState(false);

  return (
    <div className={presentation ? "scale-105 transition-transform" : ""}>
      {/* Mode Switch Button */}
      <button
        onClick={() => setPresentation(!presentation)}
        className="fixed bottom-4 right-4 bg-intrumPurple text-white px-4 py-2 rounded-lg shadow-lg z-50"
      >
        {presentation ? t.admin.normalMode : t.admin.presentationMode}
      </button>

      {/* App Content */}
      <div className={presentation ? "p-4 md:p-10" : ""}>
        {children}
      </div>
    </div>
  );
}