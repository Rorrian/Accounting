// src/components/RegistrationForm/validationRules.ts

import { 
  EMAIL_REGEXP, 
  MAX_EMAIL_LENGTH, 
  MAX_PASSWORD_LENGTH, 
  MAX_USERNAME_LENGTH, 
  MIN_PASSWORD_LENGTH, 
  MIN_USERNAME_LENGTH, 
  USERNAME_REGEXP, 
  VALIDATION_MESSAGES 
} from "@/helpers/constants";

export const validationRules = {
  username: {
    required: VALIDATION_MESSAGES.username.required,
    pattern: {
      value: USERNAME_REGEXP,
      message: VALIDATION_MESSAGES.username.pattern,
    },
    minLength: {
      value: MIN_USERNAME_LENGTH,
      message: VALIDATION_MESSAGES.username.minLength,
    },
    maxLength: {
      value: MAX_USERNAME_LENGTH,
      message: VALIDATION_MESSAGES.username.maxLength,
    },
  },
  email: {
    required: VALIDATION_MESSAGES.email.required,
    pattern: {
      value: EMAIL_REGEXP,
      message: VALIDATION_MESSAGES.email.pattern,
    },
    maxLength: {
      value: MAX_EMAIL_LENGTH,
      message: VALIDATION_MESSAGES.email.maxLength,
    },
  },
  password: {
    required: VALIDATION_MESSAGES.password.required,
    minLength: {
      value: MIN_PASSWORD_LENGTH,
      message: VALIDATION_MESSAGES.password.minLength,
    },
    maxLength: {
      value: MAX_PASSWORD_LENGTH,
      message: VALIDATION_MESSAGES.password.maxLength,
    },
  },
  confirmPassword: {
    required: VALIDATION_MESSAGES.confirmPassword.required,
    validate: (value: string, { password }: { password: string }) => value === password || VALIDATION_MESSAGES.confirmPassword.mismatch,
    minLength: {
      value: MIN_PASSWORD_LENGTH,
      message: VALIDATION_MESSAGES.confirmPassword.minLength,
    },
  },
};
