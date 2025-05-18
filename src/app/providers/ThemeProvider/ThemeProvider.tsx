'use client'

import { PropsWithChildren } from 'react'

import { useThemeStore } from '@shared/store'
import { darkTheme, lightTheme } from '@shared/theme/theme.css'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const isDarkMode = useThemeStore(state => state.isDarkMode)

  return <div className={isDarkMode ? darkTheme : lightTheme}>{children}</div>
}
