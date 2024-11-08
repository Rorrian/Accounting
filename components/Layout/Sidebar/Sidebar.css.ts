import { globalStyle, style } from '@vanilla-extract/css'

import { responsiveStyle } from '@/helpers/responsive'
import { flexCentered, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const sidebar = style(
  [
    {
      // Вариант со "статичным меню"
      // position: 'relative',
      // backgroundColor: 'rgba(255, 255, 255, 0.05)',

      // Вариант с "летающим меню"
      position: 'fixed',
      height: '100vh',
      width: '50px',
      maxWidth: 'max-content',
      borderRadius: vars.borderRadius.xs,
      backgroundColor: vars.themeVariables.background.primary,
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

const toggleButton = style(
  [
    flexRow,
    flexCentered,
    {
      position: 'absolute',
      top: '16px',
      left: '26%',
      width: '24px',
      height: '24px',

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

export const sidebarStyles = {
  sidebar,
  toggleButton,
  collapsed,
  canHover,
}
