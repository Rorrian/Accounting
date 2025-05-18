import clsx from 'clsx'
import * as m from 'framer-motion/m'
import { forwardRef } from 'react'

import { defaultTransition } from '../../utils/constants'

import { IMenuItem } from './data'
import { menuStyles } from './Menu.css'
import { MenuItem } from './MenuItem'

interface MenuProps {
  className?: string
  items: IMenuItem[]
  isSubMenu?: boolean
}

export const Menu = forwardRef(
  (
    { className, items, isSubMenu }: MenuProps,
    ref: React.Ref<HTMLDivElement> | undefined,
  ) => {
    return (
      <m.nav
        ref={ref}
        className={clsx(isSubMenu && menuStyles.subMenu, className)}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={defaultTransition}
      >
        <ul>
          {items.map(item => (
            <m.li key={item.link}>
              <MenuItem {...item} />
            </m.li>
          ))}
        </ul>
      </m.nav>
    )
  },
)

Menu.displayName = 'Menu'

export const MMenu = m.create(Menu)
