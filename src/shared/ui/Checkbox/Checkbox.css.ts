import { style } from '@vanilla-extract/css'

import { vars } from '../../theme/theme.css'

const checkboxWrapper = style(
  {
    position: 'relative',
  },
  'checkboxWrapper',
)

const checkbox = style({}, 'checkbox')

const radio = style({}, 'radio')

const label = style({}, 'label')

// FIXME: дублирует стили из TextField.css.ts
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

export const checkboxStyles = {
  checkboxWrapper,
  checkbox,
  radio,
  label,
  errorText,
}
