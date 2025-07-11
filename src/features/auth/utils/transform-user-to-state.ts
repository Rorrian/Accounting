import { UserRole } from '@entities/user/model/types'

import { TProtectUserData } from '../services/auth.types'

export type TUserDataState = {
  id: number
  rights: UserRole[]
  isLoggedIn: boolean
  isAdmin: boolean
  isManager: boolean
  isPremium: boolean
}

export const transformUserToState = (
  user: TProtectUserData,
): TUserDataState | null => {
  return {
    ...user,
    isLoggedIn: true,
    isAdmin: user.rights.includes(UserRole.ADMIN),
    isManager: user.rights.includes(UserRole.MANAGER),
    isPremium: user.rights.includes(UserRole.PREMIUM),
  }
}
