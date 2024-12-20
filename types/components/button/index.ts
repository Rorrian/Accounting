import { HTMLMotionProps } from 'framer-motion'
import { ComponentPropsWithoutRef, JSX } from 'react'

import { Justify, Kind, Size } from './enums'

export type ButtonProps = {
  icon?: JSX.Element
  iconClassName?: string
  justify?: Justify
  kind?: Kind
  showHoverAnimation?: boolean
  size?: Size
  title?: string
  titleClassName?: string
  type?: 'button' | 'reset' | 'submit'
} & ComponentPropsWithoutRef<'button'> &
  HTMLMotionProps<'button'>
