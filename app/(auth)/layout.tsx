import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { ADMIN_PAGES, getServerAuth, PUBLIC_PAGES } from '@features/auth'
import { authStyles } from '@pages/auth/AuthPage.css'

export const metadata: Metadata = {
  title: 'BudgetBuddy',
  description: 'App for home accounting',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    preloadImages: [
      '/images/auth/authBg0.webp',
      '/images/auth/authBg1.webp',
      '/images/auth/authBg2.webp',
      '/images/auth/authBg3.webp',
    ],
  },
}

export default async function AuthLayout({ children }: PropsWithChildren) {
  const user = await getServerAuth()

  if (user?.isLoggedIn)
    return redirect(user.isAdmin ? ADMIN_PAGES.HOME : PUBLIC_PAGES.DASHBOARD)

  return (
    <div className={authStyles.wrapper}>
      <h1 className="hidden">AUTHENTICATION</h1>

      {/* TODO: Смена картинок при изменении формы*/}
      <div className={authStyles.imageBox} />
      {children}
    </div>
  )
}
