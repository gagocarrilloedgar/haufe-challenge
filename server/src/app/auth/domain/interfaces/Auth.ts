export interface Auth {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
}

export interface AuthUser {
  _id: string
  email: string
  password: string
}
