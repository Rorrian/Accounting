export const API_URL = "http://localhost:4200/api"

export const MIN_SWIPE_FORCE = 10000

export const enum AuthTypes {
	RestorePassword = "restore-password",
	Login = "login",
	Register = "register",
}

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const USERNAME_REGEXP = /^[a-zA-Z0-9_.-]+$/;
// export const NAME_REGEXP = /^(?=.*[а-яА-Яa-zA-Z])[а-яА-Яa-zA-Z\s]+$/u;
export const PHONE_REGEXP = /^\+7-9\d{2}-\d{3}-\d{2}-\d{2}$/;
export const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=\S+$)/;

export const MIN_USERNAME_LENGTH = 1
export const MAX_USERNAME_LENGTH = 30
export const MIN_PASSWORD_LENGTH = 1
export const MAX_PASSWORD_LENGTH = 20
export const MAX_EMAIL_LENGTH = 254

export const VALIDATION_MESSAGES = {
  username: {
    required: "Username is required",
    pattern: "Username can only contain letters, numbers, dots, underscores, and hyphens",
    minLength: `Username must be at least ${MIN_USERNAME_LENGTH} characters long`,
    maxLength: `Username must not exceed ${MAX_USERNAME_LENGTH} characters`,
  },
  email: {
    required: "Email is required",
    pattern: "Please enter a valid email address",
    maxLength: `Email must not exceed ${MAX_EMAIL_LENGTH} characters`,
  },
  password: {
    required: "Password is required",
    minLength: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`,
    maxLength: `Password must not exceed ${MAX_PASSWORD_LENGTH} characters`,
  },
  confirmPassword: {
    required: "Confirm your password",
    mismatch: "Passwords do not match",
    minLength: `Password confirmation must be at least ${MIN_PASSWORD_LENGTH} characters`,
  },
}