import type { PropsWithChildren } from 'react'

import { UserRole } from '@/services/auth/auth.types'
import { protectPage } from '@/helpers/server/protect-page'

export default async function AdminLayout({ children }: PropsWithChildren) {
	await protectPage(UserRole.ADMIN)

	return children
}
