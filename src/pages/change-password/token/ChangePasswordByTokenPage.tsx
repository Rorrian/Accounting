'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'

import { EnumTokens } from '@shared/utils/constants'
import { saveTokenStorage } from '@shared/services/auth/auth.helper'
import authService from '@shared/services/auth/auth.service'

// Клиентский подход
export const ChangePasswordByTokenPage = () => {
  const router = useRouter()
  const { token } = useParams()
  const tokenString = Array.isArray(token) ? token[0] : token

  const { data, isLoading, error } = useQuery({
    queryKey: ['checkToken', tokenString],
    queryFn: () => authService.checkResetToken(tokenString),
    retry: false,
    enabled: !!tokenString,
  })

  if (data?.isValid) {
    if (tokenString)
      saveTokenStorage(tokenString, EnumTokens.RESET_TOKEN, 1 / 24)
    router.replace('/change-password')

    return null
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Invalid token. Please check your link.</div>}
    </>
  )
}
