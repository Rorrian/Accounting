import { notFound } from 'next/navigation'
import type { PropsWithChildren } from 'react'

import { getServerAuth } from '@/helpers/server/get-server-auth'

export default async function AdminLayout({ children }: PropsWithChildren) {
	const user = await getServerAuth()

	if (!user?.isAdmin) return notFound()

	return children
}
