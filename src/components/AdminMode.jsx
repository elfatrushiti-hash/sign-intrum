import React from "react"

/**
 * AdminMode Wrapper
 * 
 * Umschließt das Dashboard und erlaubt, Admin-spezifische Features
 * zu aktivieren oder einfach die App als normaler User anzuzeigen.
 * 
 * Du kannst hier später Funktionen wie "Edit Mode" oder "Debug Panel" hinzufügen.
 */
export default function AdminMode({ children }) {
  // Optional: Admin-Logik einfügen, z.B. Auth prüfen
  const isAdmin = true // aktuell immer true, kann angepasst werden

  if (!isAdmin) {
    // Falls kein Admin, evtl. Hinweis oder eingeschränkte Ansicht
    return (
      <div className="p-6 text-center text-gray-500">
        Sie haben keine Admin-Rechte
      </div>
    )
  }

  // Standard: render die Kinder
  return <>{children}</>
}