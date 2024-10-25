import { UserRole } from "@/services/auth/auth.types"

export interface User {
	id: number
	name?: string
	email: string
	avatarPath?: string
	verificationToken?: string
	rights: UserRole[]
}

export interface RestorePasswordFormData {
	email: string
}
export interface LoginFormData extends Pick<User, 'email'> {
	password: string
}
export interface RegisterFormData extends LoginFormData, Pick<User, 'name'> {
	confirmPassword: string
}

export interface FormData {
	name?: string
	email: string
	password?: string
	confirmPassword?: string
}

export interface FieldValidationRule {
	name: string;
  rules: {
		required: string;
  }
}
