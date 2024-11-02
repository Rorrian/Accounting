import clsx from 'clsx'
import { UseFormRegister } from 'react-hook-form'

import { registerFormStyles } from '@/modules/AuthForms/RegisterForm/RegisterForm.css'
import { FieldValidationRule } from '@/types/commonTypes'

import { TextField } from '../TextField/TextField'

interface FormTextFieldProps {
  errorMessage?: string | null
  placeholder: string
  register: UseFormRegister<any>
  showPasswordToggle?: boolean
  type: string
  validation: FieldValidationRule
  toggleVisibility?: () => void
}

export const FormTextField = ({
  errorMessage,
  placeholder,
  register,
  showPasswordToggle,
  type,
  validation,
  toggleVisibility,
}: FormTextFieldProps) => (
  <div className={registerFormStyles.passwordWrapper}>
    <TextField
      errorMessage={errorMessage}
      isValid={!errorMessage}
      placeholder={placeholder}
      type={type}
      {...register(validation.name, validation.rules)}
    />

    {showPasswordToggle && (
      <button
        className={clsx(
          registerFormStyles.passwordBtn,
          type === 'text' && registerFormStyles.showPassword,
        )}
        type="button"
        onClick={toggleVisibility}
      />
    )}
  </div>
)
