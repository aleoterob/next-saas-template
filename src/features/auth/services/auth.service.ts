// NOTE: Servicio HTTP puro para autenticacion; no depende de React ni TanStack Query.
import { apiClient } from "@/shared/lib/api-client"
import type {
  LoginRequest,
  LoginResponse,
  SessionResponse,
} from "@/features/auth/types/auth.types"

export const authService = {
  async login(payload: LoginRequest) {
    const response = await apiClient.post<LoginResponse>("/auth/login", payload)

    return response.data
  },

  async logout() {
    await apiClient.post("/auth/logout")
  },

  async getSession() {
    const response = await apiClient.get<SessionResponse>("/auth/me")

    return response.data
  },
}
