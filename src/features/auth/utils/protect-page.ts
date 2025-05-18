'use server'

import { notFound, redirect } from 'next/navigation'

import { UserRole } from '@entities/user/model/types'

import { getServerAuth } from './get-server-auth'
import { TUserDataState } from './transform-user-to-state'
import { PUBLIC_PAGES } from '../config/public.config'

type RoleCheckFunction = (user: TUserDataState) => boolean

const roleChecks: Partial<Record<UserRole, RoleCheckFunction>> = {
  [UserRole.ADMIN]: (user: TUserDataState) => user.isAdmin,
  [UserRole.PREMIUM]: (user: TUserDataState) => user.isPremium,
  [UserRole.MANAGER]: (user: TUserDataState) => user.isManager,
}

type TRoles = UserRole[] | UserRole

export const protectPage = async (roles: TRoles = UserRole.USER) => {
  const rolesArray = Array.isArray(roles) ? roles : [roles]

  const user = await getServerAuth()
  if (!user) {
    return rolesArray.includes(UserRole.ADMIN)
      ? notFound()
      : redirect(PUBLIC_PAGES.AUTH)
  }

  for (const role of rolesArray) {
    const checkRole = roleChecks[role]
    if (checkRole && !checkRole(user)) {
      if (role === UserRole.PREMIUM) {
        return redirect(PUBLIC_PAGES.PLANS)
      } else {
        return notFound()
      }
    }
  }
}
