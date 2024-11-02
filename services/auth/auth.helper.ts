import Cookies from 'js-cookie'

import { EnumTokens } from '@/helpers/constants'

export const getAccessToken = (
  tokenType: EnumTokens = EnumTokens.ACCESS_TOKEN,
) => {
  const token = Cookies.get(tokenType)

  return token || null
}

export const saveTokenStorage = (
  token: string,
  tokenType: EnumTokens = EnumTokens.ACCESS_TOKEN,
  expires: number = 1,
) => {
  Cookies.set(tokenType, token, {
    domain: 'localhost',
    sameSite: 'strict',
    expires,
  })
}

export const removeFromStorage = (
  tokenType: EnumTokens = EnumTokens.ACCESS_TOKEN,
) => {
  Cookies.remove(tokenType)
}
