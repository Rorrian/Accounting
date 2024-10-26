'use server'

import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'

import authService from '@/services/auth/auth.service'
import { TokenInside } from '@/services/auth/auth.types'

import {
	transformUserToState,
	TUserDataState
} from '../transform-user-to-state'
import { EnumTokens } from '../constants'

export async function getServerAuth(): Promise<TUserDataState | null> {
	const JWT_SECRET = process.env.JWT_SECRET
	let accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = cookies().get(EnumTokens.REFRESH_TOKEN)?.value

	if (!refreshToken) return null

	if (!accessToken) {
		try {
			const data = await authService.getNewTokensByRefresh(refreshToken)
			accessToken = data.accessToken
		} catch (error) {
			return null
		}
	}

	try {
		const { payload }: { payload: TokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(`${JWT_SECRET}`)
		)

		if (!payload) return null

		return transformUserToState(payload)
	} catch (error) {
		return null
	}
}
