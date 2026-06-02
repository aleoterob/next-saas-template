// NOTE: Provider cliente que conecta TanStack Query con el arbol React.
"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

import { createQueryClient } from "@/shared/lib/query-client"

type TanstackQueryProviderProps = {
  children: React.ReactNode
}

export function TanstackQueryProvider({
  children,
}: TanstackQueryProviderProps) {
  const [queryClient] = useState(() => createQueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
