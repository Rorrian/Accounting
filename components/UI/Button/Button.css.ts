import { ComplexStyleRule, createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import {
  flexRow,
  justifyContentCenter,
  justifyContentStart,
} from '@/styles/shared.css'
import { vars } from '@/theme/theme.css'
import typographyCss from '@/theme/typography.css'
import { Justify, Kind, Size } from '@/types/components/button/enums'

const background = createVar('background')
const titleColor = createVar('titleColor')

type ButtonVariantsType = {
  disabled: Record<'true' | 'false', ComplexStyleRule | string>
  size: Record<Size, ComplexStyleRule | string>
  kind: Record<Kind, ComplexStyleRule | string>
  justify: Record<Justify, ComplexStyleRule | string>
}

type ButtonTitleVariantsType = {
  size: Record<Size, ComplexStyleRule | string>
}

const buttonVariants: ButtonVariantsType = {
  size: {
    big: {
      padding: vars.spaces.md,
      // borderRadius: vars.borderRadius.sm,
    },
    small: {
      padding: `${vars.spaces.xs} ${vars.spaces.sm}`,
      // borderRadius: vars.borderRadius.lg,
    },
  },
  justify: {
    [Justify.Center]: justifyContentCenter,
    [Justify.Start]: justifyContentStart,
  },
  kind: {
    [Kind.Primary]: {
      vars: {
        [background]: vars.themeVariables.background.button.primary,
        [titleColor]: vars.themeVariables.content.secondary,
      },
    },
    [Kind.Secondary]: {
      vars: {
        [background]: vars.themeVariables.background.button.secondary,
        [titleColor]: vars.themeVariables.content.primary,
      },
    },
    [Kind.Tertiary]: {
      vars: {
        [background]: vars.themeVariables.background.button.tertiary,
        [titleColor]: vars.themeVariables.content.primary,
      },
    },
    [Kind.Accent]: {
      vars: {
        [background]: vars.themeVariables.background.button.accent,
        [titleColor]: vars.themeVariables.content.primary,
      },
    },
    [Kind.Transparent]: {
      vars: {
        [background]: vars.themeVariables.background.button.transparent,
        [titleColor]: vars.themeVariables.content.primary,
      },
    },
  },
  disabled: {
    true: {
      cursor: 'default',
      vars: {
        [background]: vars.background.disabled,
        [titleColor]: vars.content.disabled,
      },
    },
    false: '',
  },
}

const button = recipe(
  {
    base: [
      flexRow,
      {
        alignItems: 'center',
        backgroundColor: background,
        borderRadius: vars.borderRadius.lg,

        transition: `background ${vars.transition}`,
        cursor: 'pointer',
      },
    ],
    variants: buttonVariants,
    defaultVariants: {
      disabled: false,
      size: Size.Big,
      kind: Kind.Primary,
      justify: Justify.Center,
    },
  },
  'button',
)

const icon = style(
  {
    display: 'flex',
  },
  'icon',
)

const title = recipe<ButtonTitleVariantsType>(
  {
    base: [
      typographyCss.button.big,
      {
        padding: '0px 8px',
        color: titleColor,
        transition: `color ${vars.transition}`,
      },
    ],
    variants: {
      size: {
        big: [typographyCss.button.big],
        small: [typographyCss.button.small],
      },
    },
  },
  'title',
)

export const buttonStyles = {
  icon,
  title,
  button,
}
