import { UserRole } from '@entities/user/model/types'

export interface TokenInside {
  id: number
  rights: UserRole[]
  iat: number
  exp: number
}

export type TProtectUserData = Omit<TokenInside, 'iat' | 'exp'>
