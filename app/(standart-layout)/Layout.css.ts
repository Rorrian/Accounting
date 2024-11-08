import { style } from '@vanilla-extract/css'

import { flexColumn } from '@/styles/shared.css'

const wrapper = style(
  [
    flexColumn,
    {
      marginLeft: '60px',
      width: '100%',
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
  wrapper,
  inner,
}
