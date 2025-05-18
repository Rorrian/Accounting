import { UseFormRegister } from 'react-hook-form'

import { FieldValidationRule } from '@app/types/commonTypes'

import { TextField } from '../TextField/TextField'

interface FormTextFieldProps {
  className?: string
  defaultValue?: string
  errorMessage?: string | null
  placeholder: string
  register: UseFormRegister<any>
  showPasswordToggle?: boolean
  toggleButtonClassName?: string
  type?: string
  validation?: FieldValidationRule
  toggleVisibility?: () => void
}

export const FormTextField = ({
  className,
  defaultValue,
  errorMessage,
  placeholder,
  register,
  showPasswordToggle,
  toggleButtonClassName,
  type = 'text',
  validation,
  toggleVisibility,
}: FormTextFieldProps) => (
  <>
    <TextField
      className={className}
      defaultValue={defaultValue}
      errorMessage={errorMessage}
      isValid={!errorMessage}
      placeholder={placeholder}
      type={type}
      {...register(validation?.username, validation?.rules)}
    />

    {showPasswordToggle && (
      <button
        className={toggleButtonClassName}
        type="button"
        onClick={toggleVisibility}
      />
    )}
  </>
)
