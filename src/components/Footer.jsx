import React from "react"

export default function Footer() {
  return (
    <footer className="text-center py-4 mt-6 text-gray-500 text-sm">
      © {new Date().getFullYear()} Intrum. All rights reserved.
    </footer>
  )
}