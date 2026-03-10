import React, { useEffect, useRef, useState } from "react"

/**
 * EqualHeightWrapper
 * Passt die Höhe des linken Containers an die Höhe des Referenz-Elements an
 */
export default function EqualHeightWrapper({ referenceRef, children }) {
  const containerRef = useRef()
  const [height, setHeight] = useState("auto")

  useEffect(() => {
    if (!referenceRef.current) return

    const updateHeight = () => {
      setHeight(referenceRef.current.offsetHeight + "px")
    }

    updateHeight()

    const resizeObserver = new ResizeObserver(() => {
      updateHeight()
    })

    resizeObserver.observe(referenceRef.current)
    return () => resizeObserver.disconnect()
  }, [referenceRef])

  return (
    <div ref={containerRef} style={{ height }} className="flex flex-col gap-6">
      {children}
    </div>
  )
}
