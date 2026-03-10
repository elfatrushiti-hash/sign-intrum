import { useEffect, useState } from "react"

export default function AnimatedNumber({ value }) {

  const [count, setCount] = useState(0)

  useEffect(() => {

    let start = 0
    const duration = 800
    const stepTime = 16

    const increment = value / (duration / stepTime)

    const timer = setInterval(() => {

      start += increment

      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }

    }, stepTime)

    return () => clearInterval(timer)

  }, [value])

  return <span>{count}</span>

}
