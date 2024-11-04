import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '@/components/Layout/Header'
import Providers from '@/providers/Providers'

import '../../styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BudgetBuddy',
  description: 'App for home accounting',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={inter.className}>
      <Providers>
        <Header />
        {children}
      </Providers>
    </div>
  )
}
