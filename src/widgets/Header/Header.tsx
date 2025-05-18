import clsx from 'clsx'
import React from 'react'

import { headerStyles } from './Header.css'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return <div className={clsx(headerStyles.header, className)}>Header</div>
}
