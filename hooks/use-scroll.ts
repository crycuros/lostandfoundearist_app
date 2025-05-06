"use client"

import { useState, useEffect } from "react"

export function useScroll(threshold = 0) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Initial check
    if (window.scrollY > threshold) {
      setScrolled(true)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > threshold) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return scrolled
}
