import type { PropsWithChildren } from 'react'

import { UserRole } from '@entities/user'
import { protectPage } from '@features/auth'

export default async function PremiumPageLayout({
  children,
}: PropsWithChildren) {
  await protectPage(UserRole.PREMIUM)

  return children
}
