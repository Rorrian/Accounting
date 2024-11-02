import type { Metadata } from 'next'

import { PremiumContent } from './PremiumContent'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return <PremiumContent />
}
