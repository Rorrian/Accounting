import { style } from '@vanilla-extract/css'

import { flexCentered } from '@shared/styles/shared.css'
import { responsiveStyle } from '@shared/utils/responsive'

const themeBtn = style(
  [
    {
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
    responsiveStyle({
      tablet: {
        padding: '4px',
      },
    }),
  ],
  'themeBtn',
)

const icon = style(
  [
    flexCentered,
    {
      width: '32px',
      height: '32px',
    },
    responsiveStyle({
      tablet: {
        width: '24px',
        height: '24px',
      },
    }),
  ],
  'icon',
)

export const toggleThemeBtnStyles = {
  themeBtn,
  icon,
}
