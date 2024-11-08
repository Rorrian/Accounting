import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Header } from '@/components/Layout/Header/Header'
import { Sidebar } from '@/components/Layout/Sidebar/Sidebar'
import Providers from '@/providers/Providers'
import { flexRow } from '@/styles/shared.css'

import '../../styles/index.scss'

import { defaultLayoutStyles } from './Layout.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BudgetBuddy',
  description: 'App for home accounting',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className={inter.className}>
      <Providers>
        <main className={flexRow}>
          <Sidebar />
          <div className={defaultLayoutStyles.wrapper}>
            <Header />
            <div className={defaultLayoutStyles.inner}>{children}</div>
          </div>
        </main>
      </Providers>
    </div>
  )
}
