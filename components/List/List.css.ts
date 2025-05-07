import { globalStyle, style } from '@vanilla-extract/css'

import { alignItemsCentered, flexColumn, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const list = style(
  [
    flexColumn,
    {
      gap: vars.spaces.sm,

      padding: vars.spaces.sm,

      border: '1px solid grey',
    },
  ],
  'list',
)

const form = style(
  {
    width: '100%',
    height: '50px',
    padding: '0px !important',
  },
  'form',
)

const textField = style(
  {
    width: '100%',
    height: '100% !important',
    padding: 0,
  },
  'textField',
)

const item = style(
  [
    flexRow,
    alignItemsCentered,
    {
      gap: vars.spaces.sm,

      padding: vars.spaces.xs,

      border: '1px solid blue',
    },
  ],
  'item',
)
globalStyle(`${item} span`, {
  padding: vars.spaces.sm,
  width: '100%',

  border: '1px solid orange',
})

const buttons = style(
  [
    flexRow,
    alignItemsCentered,
    {
      gap: vars.spaces.xs,

      marginLeft: 'auto',
    },
  ],
  'buttons',
)

export const listStyles = {
  list,
  item,
  form,
  textField,
  buttons,
}
