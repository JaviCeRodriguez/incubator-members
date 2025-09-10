"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isLoaded, user } = useUser()
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false)

  function handleRedirect() {
    console.log('AuthGuard - Ejecutando redirección a /')
    window.location.href = '/';
  }

  useEffect(() => {
    console.log('AuthGuard - isLoaded:', isLoaded, 'user:', user, 'hasCheckedAuth:', hasCheckedAuth)
    
    // Si ya sabemos que debemos redirigir, no hacer nada más
    if (shouldRedirect) return

    // Si ya hemos verificado la autenticación y no hay usuario, redirigir
    if (hasCheckedAuth && !user) {
      console.log('AuthGuard - Usuario no autenticado después de verificación, redirigiendo...')
      setShouldRedirect(true)
      handleRedirect()
      return
    }

    // Si está cargado y no hay usuario, marcar como verificado y redirigir
    if (isLoaded && !user) {
      console.log('AuthGuard - Usuario no autenticado, redirigiendo...')
      setHasCheckedAuth(true)
      setShouldRedirect(true)
      handleRedirect()
      return
    }

    // Si está cargado y hay usuario, marcar como verificado
    if (isLoaded && user) {
      console.log('AuthGuard - Usuario autenticado')
      setHasCheckedAuth(true)
    }
  }, [isLoaded, user, shouldRedirect, hasCheckedAuth])

  // Si ya marcamos para redirección, no renderizar nada
  if (shouldRedirect) {
    return null
  }

  // Si hemos verificado y no hay usuario, no renderizar nada
  if (hasCheckedAuth && !user) {
    return null
  }

  // Show loading state while checking authentication (solo si no hemos verificado aún)
  if (!isLoaded && !hasCheckedAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  // Si está cargado pero no hay usuario, no renderizar nada
  if (isLoaded && !user) {
    return null
  }

  // Usuario autenticado, renderizar children
  return <>{children}</>
}
