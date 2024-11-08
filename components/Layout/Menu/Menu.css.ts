import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { flexCentered, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const subMenu = style(
  {
    padding: '0 20px',
    overflow: 'hidden',
  },
  'subMenu',
)

const menuItem = recipe(
  {
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: vars.spaces.sm,

      padding: '14px 20px',
      transition: `background-color ${vars.transition}, color ${vars.transition}`,
    },
    variants: {
      isActive: {
        true: {
          color: vars.content.accent,
        },
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
  'menuItem',
)

const icon = style([flexRow, flexCentered], 'icon')

const dropdownBtn = style(
  {
    backgroundColor: 'inherit',
    cursor: 'pointer',
    transition: `color ${vars.transition}`,

    ':hover': {
      color: vars.content.accent,
    },
  },
  'dropdownBtn',
)

const dropdownIcon = style([flexRow, flexCentered], 'dropdownIcon')

export const menuStyles = {
  menuItem,
  icon,
  dropdownBtn,
  dropdownIcon,
  subMenu,
}
