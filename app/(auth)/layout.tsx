import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { ADMIN_PAGES } from '@/config/pages/admin.config'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { getServerAuth } from '@/helpers/server/get-server-auth'
import Providers from '@/providers/Providers'

import { authStyles } from './auth/AuthPage.css'

import '../../styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

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

export default async function AuthLayout({
  children,
}: PropsWithChildren<unknown>) {
  const user = await getServerAuth()

  if (user?.isLoggedIn)
    return redirect(user.isAdmin ? ADMIN_PAGES.HOME : PUBLIC_PAGES.HOME)

  return (
    <div className={inter.className}>
      <Providers>
        <div className={authStyles.wrapper}>
          <h1 className="hidden">AUTHENTICATION</h1>

          {/* TODO: Смена картинок при изменении формы*/}
          <div className={authStyles.imageBox} />
          {children}
        </div>
      </Providers>
    </div>
  )
}
