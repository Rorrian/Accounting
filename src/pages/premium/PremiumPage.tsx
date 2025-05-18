import type { Metadata } from 'next'

import { PremiumContent } from './PremiumContent'

export const metadata: Metadata = {
  title: 'Premium',
}

export const PremiumPage = () => {
  return <PremiumContent />
}
