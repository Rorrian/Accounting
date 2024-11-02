import clsx from 'clsx'

import { checkboxStyles } from './Checkbox.css'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  disabled?: boolean
  errorMessage?: string | null
  isChecked?: boolean
  label?: React.ReactNode
  type?: 'checkbox' | 'radio'
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({
  className,
  disabled = false,
  errorMessage,
  isChecked = false,
  label,
  type = 'checkbox',
  value,
  onChange,
  ...props
}: CheckboxProps) => (
  <label className={checkboxStyles.checkboxWrapper}>
    <input
      type={type}
      disabled={disabled}
      className={clsx(
        type === 'checkbox' && checkboxStyles.checkbox,
        type === 'radio' && checkboxStyles.radio,
        className,
      )}
      checked={isChecked}
      value={value}
      onChange={onChange}
      {...props}
    />

    {label && <span className={checkboxStyles.label}>{label}</span>}

    {errorMessage && <b className={checkboxStyles.errorText}>{errorMessage}</b>}
  </label>
)

export default Checkbox
