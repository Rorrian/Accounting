import { style } from '@vanilla-extract/css'

import { SIDEBAR_WIDTH } from '@/helpers/constants'
import { flexColumn, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const main = style(
  [
    flexRow,
    {
      backgroundColor: vars.themeVariables.background.primary,
      color: vars.themeVariables.content.primary,
      transition: `background-color ${vars.transition}, color ${vars.transition}`,
    },
  ],
  'main',
)

const wrapper = style(
  [
    flexColumn,
    {
      marginLeft: SIDEBAR_WIDTH,
      width: '100%',
      height: '100vh',
    },
  ],
  'wrapper',
)

const inner = style(
  {
    padding: '24px',
    width: '100%',
  },
  'inner',
)

export const defaultLayoutStyles = {
  main,
  wrapper,
  inner,
}
