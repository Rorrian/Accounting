import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import {
  flexCentered,
  flexColumn,
  flexRow,
  fullHeight,
} from '@shared/styles/shared.css'
import { vars } from '@shared/theme/theme.css'
import { SIDEBAR_WIDTH } from '@shared/utils/constants'
import { responsiveStyle } from '@shared/utils/responsive'

const sidebar = style(
  [
    {
      // Вариант со "статичным меню"
      // position: 'relative',
      // backgroundColor: 'rgba(255, 255, 255, 0.05)',

      // Вариант с "летающим меню"
      position: 'fixed',
      height: '100vh',
      width: `${SIDEBAR_WIDTH}px`,
      maxWidth: 'max-content',
      borderRadius: `0px ${vars.borderRadius.xs} ${vars.borderRadius.xs} 0px`,
      backgroundColor: vars.themeVariables.background.secondary,
      padding: `${vars.spaces.sm} 0`,
      boxShadow:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    responsiveStyle({
      tablet: {
        maxWidth: 'unset',
      },
    }),
  ],
  'sidebar',
)

const inner = style(
  [
    flexColumn,
    fullHeight,
    {
      position: 'relative',
    },
  ],
  'inner',
)

const logo = style(
  {
    margin: '0 auto',
  },
  'logo',
)

const toggleButton = style(
  [
    flexRow,
    flexCentered,
    {
      position: 'absolute',
      top: '5.5%',
      left: '23%',

      width: '24px',
      height: '24px',

      backgroundColor: vars.themeVariables.background.primary,
      color: vars.themeVariables.content.primary,

      transition: `background-color ${vars.transition}, color ${vars.transition}`,

      cursor: 'pointer',
    },
  ],
  'toggleButton',
)

// FIXME: переписать стили
const collapsed = style({}, 'collapsed')
globalStyle(`${collapsed} li>a`, {
  padding: '14px 12px',
})
globalStyle(`${collapsed} li>button`, {
  padding: '14px 12px',
})

const canHover = style({}, 'canHover')
globalStyle(`${canHover} a:hover`, {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: vars.content.accent,
})

const themeBtn = recipe(
  {
    base: {
      position: 'relative',

      margin: vars.spaces.lg,
      marginTop: 'auto',
      background: 'unset',
    },
    variants: {
      isCollapsed: {
        true: {},
        false: { marginRight: 'auto' },
      },
    },
    defaultVariants: {
      isCollapsed: false,
    },
  },
  'themeBtn',
)

export const sidebarStyles = {
  sidebar,
  inner,
  toggleButton,
  logo,
  collapsed,
  canHover,
  themeBtn,
}
