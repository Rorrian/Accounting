import { cookies } from 'next/headers'

import { User } from '@entities/user/model/types'
import { EnumTokens } from '@features/auth'
import { ProfileInfo } from '@pages/profile/ProfileInfo'
import { API_URL } from '@shared/utils/constants'

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

export const ProfilePage = async () => {
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
