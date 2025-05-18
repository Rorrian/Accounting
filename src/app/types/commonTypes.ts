import { RegisterOptions } from 'react-hook-form'

export interface FieldValidationRule {
  name: string
  rules?: RegisterOptions<any, string>
}
