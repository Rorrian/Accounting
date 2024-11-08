import type { Metadata } from 'next'

import { ProfileInfo } from '@/components/ProfileInfo/ProfileInfo'
import { protectPage } from '@/helpers/server/protect-page'
import { textAlignCenter } from '@/styles/shared.css'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard...',
}

export default async function DashboardPage() {
  await protectPage()

  return (
    <div>
      <h1 className={textAlignCenter}>Dashboard</h1>
      <p>(only for loggedIn user)</p>
      <br />
      <p>Для проверки прав, есть страница: /admin</p>
      <br />
      <br />

      <h2 className={textAlignCenter}>User&apos;s data</h2>
      <ProfileInfo />
    </div>
  )
}
