import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { Header } from '@/components/Layout/Header/Header'
import { Sidebar } from '@/components/Layout/Sidebar/Sidebar'

import '../../styles/index.scss'

import { defaultLayoutStyles } from './Layout.css'

export const metadata: Metadata = {
  title: 'BudgetBuddy',
  description: 'App for home accounting',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main className={defaultLayoutStyles.main}>
      <Sidebar />
      <div className={defaultLayoutStyles.wrapper}>
        <Header />
        <div className={defaultLayoutStyles.inner}>{children}</div>
      </div>
    </main>
  )
}
