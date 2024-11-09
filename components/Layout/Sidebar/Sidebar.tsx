'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react'
import { useRef, useState } from 'react'

import { Logo } from '@/components/Logo/Logo'
import { ToggleThemeBtn } from '@/components/ToggleThemeBtn/ToggleThemeBtn'
import { defaultTransition, SIDEBAR_WIDTH } from '@/helpers/constants'
import useIsMobile from '@/hooks/useIsMobile'
import { useOutsideClickAndEscape } from '@/hooks/useOutsideClickAndEscape'
import { useSidebarStore } from '@/store'
import { fullHeight } from '@/styles/shared.css'

import { MENU } from './data'
import { sidebarStyles } from './Sidebar.css'
import { MMenu } from '../Menu/Menu'

// FIXME: При перезагрузке страницы toggle кнопка сайдбара имеет резкую анимацию

export const Sidebar = () => {
  const [isCollapsed, toggleSidebar] = useSidebarStore(state => [
    state.isCollapsed,
    state.toggleSidebar,
  ])
  const [isCanHover, setIsCanHover] = useState(true)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { isMobile } = useIsMobile(999)
  const sidebarRef = useRef(null)
  const sidebarInnerRef = useRef(null)

  const adaptiveSidebarWidth = isMobile ? '100%' : '25%'
  const adaptiveToggleButtonLeft = isMobile ? '97%' : '88%'
  // FIXME: магические числа ?
  const buttonStyle = () => {
    return {
      top: isCollapsed ? '5.5%' : '1%',
      left: isCollapsed ? '26%' : adaptiveToggleButtonLeft,
      width: isCollapsed ? 24 : 20,
      height: isCollapsed ? 24 : 20,
    }
  }

  const toggleSidebarHandler = () => {
    if (isCollapsed) {
      setIsCanHover(false)

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }

      hoverTimeoutRef.current = setTimeout(() => {
        setIsCanHover(true)
        hoverTimeoutRef.current = null
      }, 450)
    }

    toggleSidebar()
  }

  useOutsideClickAndEscape(isCollapsed, toggleSidebarHandler, [
    sidebarRef,
    sidebarInnerRef,
  ])

  return (
    <m.aside
      ref={sidebarRef}
      className={clsx(
        sidebarStyles.sidebar,
        isCollapsed && sidebarStyles.collapsed,
        isCanHover && sidebarStyles.canHover,
      )}
      animate={{ width: isCollapsed ? SIDEBAR_WIDTH : adaptiveSidebarWidth }}
      transition={defaultTransition}
    >
      <div className={sidebarStyles.inner} ref={sidebarInnerRef}>
        <Logo className={sidebarStyles.logo} isCompact={isCollapsed} />

        <m.button
          className={sidebarStyles.toggleButton}
          animate={buttonStyle()}
          initial={{
            opacity: 0.5,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={defaultTransition}
          onClick={toggleSidebarHandler}
        >
          {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
        </m.button>

        <MMenu
          className={fullHeight}
          items={MENU}
          animate={{ marginTop: isCollapsed ? 38 : 0 }}
          transition={defaultTransition}
        />

        <ToggleThemeBtn className={sidebarStyles.themeBtn({ isCollapsed })} />
      </div>
    </m.aside>
  )
}
