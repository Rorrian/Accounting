'use client'

import { motion } from 'framer-motion'
import { forwardRef, LegacyRef } from 'react'

import MoonIcon from '@/public/images/icons/moon.svg'
import SunIcon from '@/public/images/icons/sun.svg'
import { useThemeStore } from '@/store'
import { Kind, Size } from '@/types/components/button/enums'

import { toggleThemeBtnStyles } from './ToggleThemeBtn.css'
import { Button } from '../UI/Button/Button'

export const ToggleThemeBtn = forwardRef(
  ({}, ref: LegacyRef<HTMLButtonElement> | undefined) => {
    const [isDarkMode, toggleTheme] = useThemeStore(state => [
      state.isDarkMode,
      state.toggleTheme,
    ])

    return (
      <Button
        ref={ref}
        aria-label="Toggle theme"
        className={toggleThemeBtnStyles.themeBtn}
        icon={isDarkMode ? <MoonIcon /> : <SunIcon />}
        iconClassName={toggleThemeBtnStyles.icon}
        kind={Kind.Transparent}
        size={Size.Small}
        onClick={toggleTheme}
      />
    )
  },
)

ToggleThemeBtn.displayName = 'ToggleThemeBtn'

export const MToggleThemeBtn = motion.create(ToggleThemeBtn)
