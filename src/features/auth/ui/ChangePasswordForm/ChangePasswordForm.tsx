'use client'

import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Form, FormTextField, Kind, Title } from '@/src/shared/ui'
import { marginAuto } from '@shared/styles/shared.css'
import { getErrorMessage } from '@shared/utils/common'

import { getAccessToken } from '../../api/auth.helper'
import { useAuthForm } from '../../hooks/useAuthForm'
import { ChangePasswordFormData, FormData } from '../../types'
import { AuthTypes, EnumTokens } from '../../utils/constants'

import { validationRules } from '../RegisterForm/validationRules'

interface ChangePasswordFormProps {
  className?: string
}

export const ChangePasswordForm = ({ className }: ChangePasswordFormProps) => {
  const resetToken = getAccessToken(EnumTokens.RESET_TOKEN)
  const [showPasswords, setShowPasswords] = useState(false)

  const formMethods = useForm()
  const { errors, handleSubmit, isLoading, onSubmit, register, watch } =
    useAuthForm<ChangePasswordFormData>(AuthTypes.ChangePassword)
  const password = watch('password')

  const togglePasswordsVisibility = () => setShowPasswords(prev => !prev)

  const handleFormSubmit: SubmitHandler<FormData> = data => {
    const { confirmPassword, ...submitData } = data as ChangePasswordFormData
    if (resetToken) onSubmit({ ...submitData, resetToken })
  }

  if (!resetToken) {
    return (
      <p className={marginAuto}>
        Reset token is missing. Please use a valid reset link.
      </p>
    )
  }

  return (
    <FormProvider {...formMethods}>
      <Form
        className={className}
        id="changePasswordForm"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Title headingType="h2">Create new password</Title>

        <p>Please make sure you choose a strong password</p>
        <br />

        <FormTextField
          errorMessage={getErrorMessage(errors?.password)}
          type={showPasswords ? 'text' : 'password'}
          placeholder="Type password"
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
          placeholder="Repeat password"
          register={register}
          validation={{
            name: 'confirmPassword',
            rules: validationRules.confirmPassword,
          }}
          toggleVisibility={togglePasswordsVisibility}
        />
        <br />

        <Button
          disabled={isLoading}
          kind={Kind.Secondary}
          title={isLoading ? 'Loading...' : 'Save'}
          type="submit"
        />
      </Form>
    </FormProvider>
  )
}
