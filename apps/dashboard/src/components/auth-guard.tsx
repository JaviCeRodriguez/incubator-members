"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect } from "react"

interface AuthGuardProps {
  children: React.ReactNode
}

/**
 * This component needs a Refactor, it's not working as expected.
 */
export function AuthGuard({ children }: AuthGuardProps) {
  const { isLoaded, isSignedIn } = useUser()

  function handleRedirect() {
    window.location.href = '/';
  }

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      handleRedirect()
    }
  }, [isLoaded, isSignedIn])

  // Don't render children if not signed in (will redirect)
  if (!isSignedIn) {
    handleRedirect()
  }

  // Show loading state while checking authentication
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return <>{children}</>
}
