import type { PropsWithChildren } from 'react'

import { UserRole } from '@entities/user'
import { protectPage } from '@features/auth'

export default async function AdminLayout({ children }: PropsWithChildren) {
  await protectPage(UserRole.ADMIN)

  return children
}
