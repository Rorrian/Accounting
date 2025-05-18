import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { flexCentered, flexRow } from '@shared/styles/shared.css'
import { vars } from '@shared/theme/theme.css'

const subMenu = style(
  {
    padding: `0px ${vars.spaces.lg}`,
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

      color: vars.themeVariables.content.primary,

      padding: `14px ${vars.spaces.lg}`,
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
