import { User } from '@entities/user/model/types'
import { axiosClassic } from '@shared/api/axios'

import { removeFromStorage, saveTokenStorage } from './auth.helper'
import { FormData } from '../types'
import { AuthTypes } from '../utils/constants'

interface AuthResponse {
  accessToken: string
  isValid?: boolean
  user: User
}

class AuthService {
  async main(type: AuthTypes, data: FormData, token?: string | null) {
    const response = await axiosClassic.post<AuthResponse>(
      `/auth/${type}`,
      data,
      {
        headers: {
          recaptcha: token,
        },
      },
    )

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

    return response
  }

  async getNewTokens() {
    const response = await axiosClassic.post<AuthResponse>('/auth/access-token')

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

    return response
  }

  async getNewTokensByRefresh(refreshToken: string) {
    const response = await axiosClassic.post<AuthResponse>(
      '/auth/access-token',
      {},
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      },
    )

    return response.data
  }

  async checkResetToken(token?: string) {
    const response = await axiosClassic.post<AuthResponse>(
      '/auth/change-password/checkResetToken',
      { token },
    )

    if (!response?.data) {
      throw new Error('Invalid token')
    }

    return response.data
  }

  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout')

    if (response.data) removeFromStorage()

    return response
  }
}

export default new AuthService()
