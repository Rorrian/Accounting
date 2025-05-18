import type { Metadata } from 'next'

import { textAlignCenter } from '@shared/styles/shared.css'
import { ProfileInfo } from '@pages/profile/ProfileInfo'
import { protectPage } from '@shared/utils/protect-page'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard...',
}

export const DashboardPage = async () => {
  await protectPage()

  return (
    <div>
      <h1 className={textAlignCenter}>Dashboard</h1>
      <p className={textAlignCenter}>(only for loggedIn user)</p>
      <br />
      <br />

      <h2 className={textAlignCenter}>User&apos;s data</h2>
      <ProfileInfo />
    </div>
  )
}
