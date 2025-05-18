import { style } from '@vanilla-extract/css'

import { flexColumn } from '@shared/styles/shared.css'
import { vars } from '@shared/theme/theme.css'

const wrapper = style(
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',

    height: '100vh',
    backgroundColor: vars.themeVariables.background.primary,
    color: vars.themeVariables.content.primary,

    transition: `background-color ${vars.transition}, color ${vars.transition}`,
  },
  'wrapper',
)

const imageBox = style(
  {
    position: 'relative',
    width: '100%',
    height: '100%',

    selectors: {
      '&&::before': {
        content: '',
        position: 'absolute',
        inset: 0,

        background: vars.themeVariables.pageBackground.auth,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        transition: `background ${vars.transition}`,
      },
      '&&::after': {
        content: '',
        position: 'absolute',
        top: 0,

        background:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.718),	transparent)',
        width: '100%',
        height: '500px',
      },
    },
  },
  'imageBox',
)

const inner = style(
  [
    flexColumn,
    {
      margin: vars.spaces.xl,
      height: '100%',

      overflow: 'hidden',
    },
  ],
  'inner',
)

const logo = style(
  {
    alignSelf: 'center',
  },
  'logo',
)

const forms = style(
  {
    height: '100%',
  },
  'forms',
)

export const authStyles = {
  wrapper,
  imageBox,
  inner,
  logo,
  forms,
}
