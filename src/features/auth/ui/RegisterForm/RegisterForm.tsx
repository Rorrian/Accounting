'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Form, FormTextField, Title } from '@/src/shared/ui'
import { formStyles } from '@/src/shared/ui/Form/Form.css'
import { Kind, Size } from '@shared/ui/Button/types/enums'
import { getErrorMessage } from '@shared/utils/common'

import { PUBLIC_PAGES } from '../../../config/public.config'
import { useAuthForm } from '../../../hooks/useAuthForm'
import { FormData, RegisterFormData } from '../../../types'
import { AuthTypes } from '../../../utils/constants'

import { registerFormStyles } from './RegisterForm.css'
import { validationRules } from './validationRules'

interface RegisterFormProps {
  className?: string
  onSignIn(): void
}

export const RegisterForm = ({ className, onSignIn }: RegisterFormProps) => {
  const formMethods = useForm()
  const {
    errors,
    handleSubmit,
    isLoading,
    recaptchaRef,
    onSubmit,
    register,
    watch,
  } = useAuthForm<RegisterFormData>(AuthTypes.Register)
  const password = watch('password')

  const [showPasswords, setShowPasswords] = useState(false)
  const togglePasswordsVisibility = () => setShowPasswords(prev => !prev)

  const handleFormSubmit: SubmitHandler<FormData> = data => {
    const { confirmPassword, ...submitData } = data as RegisterFormData
    onSubmit(submitData)
  }

  return (
    <FormProvider {...formMethods}>
      <Form
        className={className}
        id="registerForm"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Title headingType="h2">Sign up</Title>
        <p className={formStyles.caption}>Welcome to BudgetBuddy!</p>

        <FormTextField
          errorMessage={getErrorMessage(errors?.username)}
          type="text"
          placeholder="Username"
          register={register}
          toggleButtonClassName={clsx(
            registerFormStyles.passwordBtn,
            type === 'text' && registerFormStyles.showPassword,
          )}
          validation={{
            name: 'name',
            rules: validationRules.username,
          }}
        />

        <FormTextField
          errorMessage={getErrorMessage(errors?.email)}
          type="email"
          placeholder="Email Address"
          register={register}
          validation={{
            name: 'email',
            rules: validationRules.email,
          }}
        />

        <FormTextField
          errorMessage={getErrorMessage(errors?.password)}
          type={showPasswords ? 'text' : 'password'}
          placeholder="Create Password"
          register={register}
          showPasswordToggle
          validation={{
            name: 'password',
            rules: validationRules.password,
          }}
          toggleVisibility={togglePasswordsVisibility}
        />

        <FormTextField
          errorMessage={getErrorMessage(errors?.confirmPassword)}
          type={showPasswords ? 'text' : 'password'}
          placeholder="Confirm Password"
          register={register}
          validation={{
            name: 'confirmPassword',
            rules: validationRules.confirmPassword,
          }}
          toggleVisibility={togglePasswordsVisibility}
        />

        <p className={formStyles.caption}>
          By continuing, you agree to the{' '}
          <Link href={PUBLIC_PAGES.AGREEMENTS} className={formStyles.link}>
            BudgetBuddy Account Agreement
          </Link>
        </p>

        <ReCAPTCHA
          ref={recaptchaRef}
          className={formStyles.recaptcha}
          hl="en"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          size="normal"
        />

        <Button
          disabled={isLoading}
          kind={Kind.Secondary}
          title={isLoading ? 'Loading...' : 'Sign up'}
          type="submit"
        />

        <div className={formStyles.bottom}>
          <p className={formStyles.caption}>Already have account?</p>
          <Button
            kind={Kind.Secondary}
            size={Size.Small}
            title="Sign in"
            onClick={() => onSignIn()}
          />
        </div>
      </Form>
    </FormProvider>
  )
}
