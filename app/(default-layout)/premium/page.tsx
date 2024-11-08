import type { Metadata } from 'next'

import { PremiumContent } from './PremiumContent'

export const metadata: Metadata = {
  title: 'Premium',
}

export default function PremiumPage() {
  return <PremiumContent />
}
