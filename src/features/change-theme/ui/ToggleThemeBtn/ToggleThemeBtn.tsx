'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import { forwardRef } from 'react'

import MoonIcon from '@/public/images/icons/moon.svg'
import SunIcon from '@/public/images/icons/sun.svg'
import { Button } from '@/src/shared/ui'
import { useThemeStore } from '@shared/store'
import { Kind, Size } from '@shared/ui/Button/types/enums'

import { toggleThemeBtnStyles } from './ToggleThemeBtn.css'

interface ToggleThemeBtnProps {
  className?: string
  iconClassName?: string
}

export const ToggleThemeBtn = forwardRef(
  (
    { className, iconClassName }: ToggleThemeBtnProps,
    ref: React.Ref<HTMLButtonElement> | undefined,
  ) => {
    const [isDarkMode, toggleTheme] = useThemeStore(state => [
      state.isDarkMode,
      state.toggleTheme,
    ])

    return (
      <Button
        ref={ref}
        aria-label="Toggle theme"
        className={clsx(toggleThemeBtnStyles.themeBtn, className)}
        icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
        iconClassName={clsx(toggleThemeBtnStyles.icon, iconClassName)}
        kind={Kind.Transparent}
        size={Size.Small}
        onClick={toggleTheme}
      />
    )
  },
)

ToggleThemeBtn.displayName = 'ToggleThemeBtn'

export const MToggleThemeBtn = m.create(ToggleThemeBtn)
