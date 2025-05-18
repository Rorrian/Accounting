'use client'

import clsx from 'clsx'
import { m, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { useSidebarStore } from '../../store'
import { defaultTransition } from '../../utils/constants'

import { IMenuItem } from './data'
import { MMenu } from './Menu'
import { menuStyles } from './Menu.css'

export const MenuItem = ({
  className,
  icon,
  link,
  name,
  subMenuItems,
}: IMenuItem) => {
  const pathname = usePathname()
  const [isCollapsed, toggleSidebar] = useSidebarStore(state => [
    state.isCollapsed,
    state.toggleSidebar,
  ])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const hasSubItems = !!subMenuItems?.length
  const isActive = pathname === link

  useEffect(() => {
    if (isCollapsed) {
      setIsDropdownOpen(false)
    }
  }, [isCollapsed])

  const handleDropdownToggle = useCallback(() => {
    if (isCollapsed) {
      toggleSidebar()
    }
    setIsDropdownOpen(prev => !prev)
  }, [isCollapsed, toggleSidebar])

  const handleLinkClick = () => {
    if (!isCollapsed) {
      toggleSidebar()
    }
  }

  return (
    <>
      {!hasSubItems ? (
        <Link
          className={clsx(menuStyles.menuItem({ isActive }), className)}
          href={link}
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          <span className={menuStyles.icon}>{icon}</span>
          <m.span
            animate={{ opacity: !isCollapsed ? 1 : 0 }}
            transition={defaultTransition}
          >
            {name}
          </m.span>
        </Link>
      ) : (
        <>
          <button
            className={clsx(
              menuStyles.menuItem({ isActive }),
              menuStyles.dropdownBtn,
              className,
            )}
            onClick={handleDropdownToggle}
          >
            {icon}
            <m.span
              animate={{ opacity: !isCollapsed ? 1 : 0 }}
              transition={defaultTransition}
            >
              {name}
            </m.span>
            {!isCollapsed && (
              <m.div
                className={menuStyles.dropdownIcon}
                initial={false}
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={defaultTransition}
              >
                <ChevronDown size={18} />
              </m.div>
            )}
          </button>

          <AnimatePresence initial={false}>
            {!isCollapsed && isDropdownOpen && (
              <MMenu items={subMenuItems} isSubMenu />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}
