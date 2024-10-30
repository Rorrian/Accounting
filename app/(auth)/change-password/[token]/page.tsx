"use client"

import { useParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query';

import authService from '@/services/auth/auth.service';
import { EnumTokens } from '@/helpers/constants';
import { saveTokenStorage } from '@/services/auth/auth.helper';

// Клиентский подход
export default function ChangePasswordByTokenPage() {	
	const router = useRouter()
	const { token }= useParams()
	const tokenString = Array.isArray(token) ? token[0] : token

	const { data, isLoading, error } = useQuery({
    queryKey: ['checkToken', tokenString],
		queryFn: () => authService.checkResetToken(tokenString),
		retry: false,
		enabled: !!tokenString,
	})

	if (data?.isValid) {
		if (tokenString) saveTokenStorage(tokenString, EnumTokens.RESET_TOKEN, 1 / 24)
    router.replace('/change-password');

    return null
  }

  return(
		<>
			{isLoading && (
				<div>Loading...</div>
			)}
			{error && (
				<div>Invalid token. Please check your link.</div>
			)}
		</>
	)
}
