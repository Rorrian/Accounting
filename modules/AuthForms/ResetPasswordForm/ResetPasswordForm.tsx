'use client'

import ReCAPTCHA from 'react-google-recaptcha'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/UI/Button/Button'
import { formStyles } from '@/components/UI/Form/Form.css'
import { FormTextField } from '@/components/UI/InputBoxes/FormTextField/FormTextField'
import { Title } from '@/components/UI/Title/Title'
import { getErrorMessage } from '@/helpers/common'
import { AuthTypes } from '@/helpers/constants'
import { useAuthForm } from '@/hooks/useAuthForm'
import { FormData, ResetPasswordFormData } from '@/types/commonTypes'
import { Kind, Size } from '@/types/components/button/enums'

import { Form } from '../../../components/UI/Form/Form'
import { validationRules } from '../RegisterForm/validationRules'

// FIXME: При отсутствии в базе пользователя с введенной почтой можно предлагать зарегистрироваться ?

interface ResetPasswordFormProps {
  className?: string
  onSignIn(): void
}

export const ResetPasswordForm = ({
  className,
  onSignIn,
}: ResetPasswordFormProps) => {
  const formMethods = useForm()
  const { errors, handleSubmit, isLoading, recaptchaRef, onSubmit, register } =
    useAuthForm<ResetPasswordFormData>(AuthTypes.ResetPassword)

  const handleFormSubmit: SubmitHandler<FormData> = data => {
    onSubmit(data as ResetPasswordFormData)
  }

  const { maxLength, ...emailValidationRules } = validationRules.email

  return (
    <FormProvider {...formMethods}>
      <Form
        className={className}
        id="resetPasswordForm"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Title headingType="h2">Restore password</Title>

        <FormTextField
          errorMessage={getErrorMessage(errors?.email)}
          type="email"
          placeholder="Email Address"
          register={register}
          validation={{
            name: 'email',
            rules: emailValidationRules,
          }}
        />

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
          title={isLoading ? 'Loading...' : 'Send email to reset password'}
          type="submit"
        />

        <div className={formStyles.bottom}>
          <p className={formStyles.caption}>Remember your password?</p>
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
