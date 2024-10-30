import { RegisterOptions } from "react-hook-form"

import { UserRole } from "@/services/auth/auth.types"

export interface User {
	avatarPath?: string
	email: string
	id: number
	name?: string
	rights: UserRole[]
	verificationToken?: string
}

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

export interface FieldValidationRule {
	name: string
	rules?: RegisterOptions<any, string>
}
