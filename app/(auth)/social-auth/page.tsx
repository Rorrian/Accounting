'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { saveTokenStorage } from '@/services/auth/auth.helper'

export default function SocialAuthPage() {
	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')
		if (accessToken) saveTokenStorage(accessToken)

		router.replace('/')
	}, [])

	return <div>Loading...</div>
}
