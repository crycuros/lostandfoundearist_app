"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
      <p className="text-lg mb-8 max-w-md">
        We apologize for the inconvenience. Please try again or contact our support team if the problem persists.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button onClick={() => reset()} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-outline">
          Return to home
        </Link>
      </div>
    </div>
  )
}
