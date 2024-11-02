export enum UserRole {
  USER = 'USER',
  PREMIUM = 'PREMIUM',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

export interface TokenInside {
  id: number
  rights: UserRole[]
  iat: number
  exp: number
}

export type TProtectUserData = Omit<TokenInside, 'iat' | 'exp'>
