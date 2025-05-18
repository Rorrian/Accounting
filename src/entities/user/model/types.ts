export enum UserRole {
  USER = 'USER',
  PREMIUM = 'PREMIUM',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

export interface User {
  id: number
  username: string
  email: string
  // Удалить ?
  rights: UserRole[]
  verificationToken?: string
  avatarPath?: string
}

export interface RegisterCredentials {
  email: string
  password: string
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
}
