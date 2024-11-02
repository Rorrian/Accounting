import { style } from '@vanilla-extract/css'

import { vars } from '@/theme/theme.css'

const wrapper = style(
  {
    position: 'relative',

    width: '100%',
    height: 'auto',
  },
  'wrapper',
)

const label = style(
  {
    color: vars.content.darkGrey,
  },
  'label',
)

const input = style(
  {
    width: '100%',
    outline: 'none',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    background: 'rgba(0, 0, 0, 0.15)',
    padding: '6px 15px',
    borderRadius: '4px',

    fontSize: '0.85em',
    color: vars.themeVariables.content.primary,

    transition: `color ${vars.transition}`,
  },
  'input',
)

const invalidInput = style(
  {
    border: `1px solid ${vars.content.error}`,
  },
  'invalidInput',
)

const errorText = style(
  {
    position: 'absolute',
    bottom: '-16px',
    left: 0,

    fontSize: '0.65em',

    color: vars.content.error,
  },
  'errorText',
)

export const inputStyles = {
  wrapper,
  label,
  input,
  invalidInput,
  errorText,
}
