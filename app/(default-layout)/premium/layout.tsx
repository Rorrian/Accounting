import type { PropsWithChildren } from 'react'

import { protectPage } from '@/helpers/server/protect-page'
import { UserRole } from '@/services/auth/auth.types'

export default async function PremiumPageLayout({
  children,
}: PropsWithChildren) {
  await protectPage(UserRole.PREMIUM)

  return children
}
