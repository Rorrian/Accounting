import { style } from '@vanilla-extract/css'

import { alignItemsCentered, flexColumn, flexRow } from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'

const wrapper = style(
  [
    flexColumn,
    {
      gap: vars.spaces.lg,
    },
  ],
  'wrapper',
)

const panel = style(
  [
    flexRow,
    alignItemsCentered,
    {
      justifyContent: 'space-between',
      gap: vars.spaces.sm,
    },
  ],
  'panel',
)

export const dataTableStyles = {
  wrapper,
  panel,
}
