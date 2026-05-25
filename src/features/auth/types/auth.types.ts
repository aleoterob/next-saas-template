export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  accessToken?: string
}

export type SessionResponse = {
  id: string
  email: string
  name?: string
}
