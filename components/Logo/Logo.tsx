'use client'

import clsx from 'clsx'
import React from 'react'

import LogoSvg from '@/public/images/auth/icons/logo.svg'
import CompactLogoSvg from '@/public/images/auth/icons/logoMini.svg'

import { logoStyles } from './Logo.css'

export type Size = 'big' | 'small'
// | 'micro'

interface LogoProps {
  className?: string
  isCompact?: boolean
  size?: Size
}

export const Logo = ({
  className,
  isCompact = false,
  size = 'big',
}: LogoProps) => {
  return (
    <div
      className={clsx(logoStyles.logoContainer({ size }), className)}
      onClick={() => window.open('https://budgetbuddy.ru/')}
    >
      {isCompact ? (
        <CompactLogoSvg className={logoStyles.icon} />
      ) : (
        <LogoSvg className={logoStyles.icon} />
      )}
    </div>
  )
}
