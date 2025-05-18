import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

import { formStyles } from './Form.css'

interface FormProps extends PropsWithChildren {
  className?: string
  id?: string
  onError?(): void
  onSubmit(): void
}

export const Form = ({
  id,
  className,
  children,
  onError,
  onSubmit,
}: FormProps) => {
  const { handleSubmit } = useFormContext()

  return (
    <form
      id={id}
      className={clsx(formStyles.form, className)}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {children}
    </form>
  )
}
