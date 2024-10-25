import { axiosClassic } from '@/api/axios'
import { FormData, User } from '@/types/commonTypes'
import { AuthTypes } from '@/helpers/constants'

import { saveTokenStorage } from './auth.helper'

interface AuthResponse {
	accessToken: string
	user: User
}

class AuthService {
	async main(
		type: AuthTypes,
		data: FormData,
		token?: string | null
	) {
		const response = await axiosClassic.post<AuthResponse>(
			`/auth/${type}`,
			data,
			{
				headers: {
					recaptcha: token
				}
			}
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}
}

export default new AuthService()
