// NOTE: Provider cliente que conecta TanStack Query con el arbol React.
"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

import { createQueryClient } from "@/shared/lib/query-client"

type QueryProviderProps = {
  children: React.ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(() => createQueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
