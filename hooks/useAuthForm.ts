import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { FieldErrors, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { AuthTypes, EnumTokens } from '@/helpers/constants'
import { removeFromStorage } from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import {
  ChangePasswordFormData,
  FormData,
  LoginFormData,
  RegisterFormData,
  ResetPasswordFormData,
} from '@/types/commonTypes'

export function useAuthForm<T extends FormData>(type: AuthTypes) {
  const { register, handleSubmit, reset, formState, watch } =
    useForm<FormData>()
  const { errors } = formState as { errors: FieldErrors<T> }

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.data?.errors?.length) {
        const errorMessages = error.response.data.errors
          .map((errorItem: { message: string }) => errorItem.message)
          .join('\n')
        toast.error(`Errors:\n ${errorMessages}`)
      } else {
        toast.error(
          `Error:\n ${error.response?.data?.message || 'Unknown error'}`,
        )
      }
    }
  }

  const { mutate: mutateResetPassword, isPending: isResetPasswordPending } =
    useMutation({
      mutationKey: [AuthTypes.ResetPassword],
      mutationFn: (data: ResetPasswordFormData) =>
        authService.main(AuthTypes.ResetPassword, data, data.recaptcha),
      onSuccess() {
        startTransition(() => {
          reset()
          toast.success('Password reset email sent!')
        })
      },
      onError: handleError,
    })

  const { mutate: mutateChangePassword, isPending: isChangePasswordPending } =
    useMutation({
      mutationKey: [AuthTypes.ChangePassword],
      mutationFn: (data: ChangePasswordFormData) =>
        authService.main(AuthTypes.ChangePassword, data),
      onSuccess() {
        startTransition(() => {
          reset()
          removeFromStorage(EnumTokens.RESET_TOKEN)
          router.push(PUBLIC_PAGES.AUTH)
        })
      },
      onError: handleError,
    })

  const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
    mutationKey: [AuthTypes.Login],
    mutationFn: (data: LoginFormData) =>
      authService.main(
        AuthTypes.Login,
        data,
        recaptchaRef?.current?.getValue(),
      ),
    onSuccess() {
      startTransition(() => {
        reset()
        router.push(PUBLIC_PAGES.DASHBOARD)
      })
    },
    onError: handleError,
  })

  const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
    mutationKey: [AuthTypes.Register],
    mutationFn: (data: RegisterFormData) =>
      authService.main(
        AuthTypes.Register,
        data,
        recaptchaRef?.current?.getValue(),
      ),
    onSuccess() {
      startTransition(() => {
        reset()
        router.push(PUBLIC_PAGES.DASHBOARD)
      })
    },
    onError: handleError,
  })

  const onSubmit = (data: FormData) => {
    const recaptchaValue = recaptchaRef?.current?.getValue()

    if (!recaptchaValue && type !== AuthTypes.ChangePassword) {
      toast.error('Pass the captcha!')

      return
    }

    if (type === AuthTypes.Login) {
      mutateLogin(data as LoginFormData)
    } else if (type === AuthTypes.Register) {
      mutateRegister(data as RegisterFormData)
    } else if (type === AuthTypes.ChangePassword) {
      mutateChangePassword(data as ChangePasswordFormData)
    } else {
      mutateResetPassword({
        ...data,
        recaptcha: recaptchaValue,
      } as ResetPasswordFormData)
    }
  }

  const isLoading =
    isPending ||
    isLoginPending ||
    isRegisterPending ||
    isResetPasswordPending ||
    isChangePasswordPending

  return {
    errors,
    isLoading,
    recaptchaRef,
    handleSubmit,
    onSubmit,
    register,
    watch,
  }
}
