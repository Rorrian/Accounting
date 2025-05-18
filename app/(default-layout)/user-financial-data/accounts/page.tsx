import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bank accounts',
  description: 'Bank accounts...',
}

export { AccountsPage as default } from '@pages/user-financial-data/accounts/AccountsPage'
