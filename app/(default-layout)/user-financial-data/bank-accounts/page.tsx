import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bank accounts',
  description: 'Bank accounts...',
}

export default async function BankAccountsPage() {
  return <div>Bank accounts</div>
}
