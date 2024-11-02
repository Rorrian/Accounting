import { ProfileInfo } from '@/components/ProfileInfo/ProfileInfo'
import { protectPage } from '@/helpers/server/protect-page'

export default async function DashboardPage() {
  await protectPage()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>(only for loggedIn user)</p>
      <br />
      <p>Для проверки прав, есть страница: /admin</p>
      <br />

      <ProfileInfo />
    </div>
  )
}
