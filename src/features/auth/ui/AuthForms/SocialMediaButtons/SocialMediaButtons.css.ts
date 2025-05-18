import { style } from '@vanilla-extract/css'

import { vars } from '@shared/theme/theme.css'

const wrapper = style(
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: vars.spaces.md,
  },
  'wrapper',
)

const button = style(
  {
    border: `1px solid ${vars.content.lightGrey}`,
    backgroundColor: vars.themeVariables.background.primary,
  },
  'button',
)

const icon = style(
  {
    width: '20px',
    height: '20px',
    color: vars.themeVariables.content.primary,

    transition: `color ${vars.transition}`,
  },
  'icon',
)

export const socialMediaButtonsStyles = {
  wrapper,
  button,
  icon,
}
