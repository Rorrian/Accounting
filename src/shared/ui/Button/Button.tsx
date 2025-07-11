'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'
import { forwardRef } from 'react'

import { buttonStyles } from './Button.css'
import { ButtonProps } from './types'
import { Justify, Kind, Size } from './types/enums'

export const Button = forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      icon,
      iconClassName,
      justify = Justify.Center,
      kind = Kind.Primary,
      title = '',
      titleClassName,
      type = 'button',
      size = Size.Big,
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement> | undefined,
  ) => (
    <m.button
      ref={ref}
      disabled={disabled}
      className={clsx(
        buttonStyles.button({
          size,
          kind,
          disabled: disabled,
          justify,
        }),
        className,
      )}
      {...props}
      type={type}
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: !disabled ? 1.05 : undefined,
      }}
    >
      {icon && (
        <div className={clsx(buttonStyles.icon, iconClassName)}>{icon}</div>
      )}
      {title && (
        <span className={clsx(buttonStyles.title({ size }), titleClassName)}>
          {title}
        </span>
      )}
      {children}
    </m.button>
  ),
)

Button.displayName = 'Button'

export const MButton = m.create(Button)
