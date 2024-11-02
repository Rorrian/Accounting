'use client'

import QueryProvider from './QueryProvider/QueryProvider'
import ThemeProvider from './ThemeProvider/ThemeProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  )
}
