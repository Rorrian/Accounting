import type { Metadata } from 'next'

import { DataTable } from '@/components/DataTable/DataTable'
import { useSidebarStore } from '@/store'

export const metadata: Metadata = {
  title: 'Banks',
  description: 'Banks...',
}

export default async function BanksPage() {
  return (
    <div>
      BanksPage
      <DataTable type="banks" />
    </div>
  )
}
