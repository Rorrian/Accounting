import type { Metadata } from 'next'

import { Users } from './Users'

export const metadata: Metadata = {
  title: 'Admin SSR',
}

export const AdminPage = async () => {
  return <Users />
}
