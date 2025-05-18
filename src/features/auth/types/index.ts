import { User } from '@entities/user/model/types'

export interface ResetPasswordFormData {
  email: string
  recaptcha?: string | null
}
export interface ChangePasswordFormData {
  confirmPassword?: string
  password: string
  resetToken?: string
}
export interface LoginFormData extends Pick<User, 'email'> {
  password: string
}
export interface RegisterFormData extends LoginFormData, Pick<User, 'name'> {
  confirmPassword: string
}

export type FormData =
  | ChangePasswordFormData
  | LoginFormData
  | RegisterFormData
  | ResetPasswordFormData
