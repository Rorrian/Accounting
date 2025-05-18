import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import '@shared/styles/index.scss'
import { Header } from '@widgets/Header/Header'
import { Sidebar } from '@widgets/Sidebar/Sidebar'

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
