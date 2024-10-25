import { axiosClassic } from '@/api/axios'
import { IUser } from '@/types/commonTypes'

import { saveTokenStorage } from './auth.helper'

interface IAuthResponse {
	accessToken: string
	user: IUser
}

class AuthService {
	async main(
		// TODO: перенести в enum(AuthTypes)
		type: 'password-reset' | 'login' | 'register',
		data: any,
		token?: string | null
	) {
		const response = await axiosClassic.post<IAuthResponse>(
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
