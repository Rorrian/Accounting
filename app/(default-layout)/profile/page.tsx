import { cookies } from 'next/headers'

import { ProfileInfo } from '@/components/ProfileInfo/ProfileInfo'
import { API_URL, EnumTokens } from '@/helpers/constants'
import { User } from '@/types/commonTypes'

// Серверный подход
const fetchProfile = async () => {
  'use server'

  const cookie = await cookies()
  const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value

  return fetch(`${API_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then(res => res.json()) as Promise<User>
}

// TODO: Проверить обновление токенов/увеличить срок жизни токенов

export default async function ProfilePage() {
  const profile = await fetchProfile()

  return (
    <div>
      {profile ? (
        <>
          <h1>Profile</h1>

          <ProfileInfo />
        </>
      ) : (
        <p>Not found!</p>
      )}
    </div>
  )
}
