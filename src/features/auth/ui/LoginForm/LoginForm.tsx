'use client'

import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Form, FormTextField, Title } from '@/src/shared/ui'
import { formStyles } from '@/src/shared/ui/Form/Form.css'
import { Kind, Size } from '@shared/ui/Button/types/enums'
import { getErrorMessage } from '@shared/utils/common'

import { useAuthForm } from '../../../hooks/useAuthForm'
import { LoginFormData } from '../../../types'
import { AuthTypes, VALIDATION_MESSAGES } from '../../../utils/constants'

import { SocialMediaButtons } from '../SocialMediaButtons/SocialMediaButtons'

interface LoginFormProps {
  className?: string
  onResetPassword(): void
  onSignUp(): void
}

export const LoginForm = ({
  className,
  onResetPassword,
  onSignUp,
}: LoginFormProps) => {
  const formMethods = useForm()
  const { errors, handleSubmit, isLoading, recaptchaRef, onSubmit, register } =
    useAuthForm<LoginFormData>(AuthTypes.Login)

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(prev => !prev)

  return (
    <FormProvider {...formMethods}>
      <Form
        className={className}
        id="loginForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Title headingType="h2">Sign in</Title>

        <FormTextField
          errorMessage={getErrorMessage(errors?.email)}
          type="email"
          placeholder="Email Address"
          register={register}
          validation={{
            name: 'email',
            rules: {
              required: VALIDATION_MESSAGES.email.required,
            },
          }}
        />

        <FormTextField
          errorMessage={getErrorMessage(errors?.password)}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          register={register}
          showPasswordToggle
          validation={{
            name: 'password',
            rules: {
              required: VALIDATION_MESSAGES.password.required,
            },
          }}
          toggleVisibility={togglePasswordVisibility}
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          className={formStyles.recaptcha}
          hl="en"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          size="normal"
        />

        <Button
          kind={Kind.Transparent}
          size={Size.Small}
          title="Forgot password?"
          onClick={() => onResetPassword()}
        />

        <div className={formStyles.middle}>
          <Button
            disabled={isLoading}
            kind={Kind.Primary}
            title={isLoading ? 'Loading...' : 'Sign in'}
            type="submit"
          />

          <SocialMediaButtons />
        </div>

        <div className={formStyles.bottom}>
          <p className={formStyles.caption}>New to the BudgetBuddy?</p>
          <Button
            kind={Kind.Accent}
            size={Size.Small}
            title="Sign Up"
            onClick={() => onSignUp()}
          />
        </div>
      </Form>
    </FormProvider>
  )
}
