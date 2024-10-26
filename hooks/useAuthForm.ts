import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useTransition } from 'react'

import authService from '@/services/auth/auth.service'
import { FormData, LoginFormData, RegisterFormData, RestorePasswordFormData } from '@/types/commonTypes'
import { AuthTypes } from '@/helpers/constants'
import { PUBLIC_PAGES } from '@/config/pages/public.config'

export function useAuthForm(type: AuthTypes) {
	const { register, handleSubmit, reset, formState, watch } = useForm<FormData>()
	const { errors } = formState 

	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const recaptchaRef = useRef<ReCAPTCHA>(null)

	const { mutate: mutatePasswordReset, isPending: isPasswordResetPending } = useMutation({
		mutationKey: [AuthTypes.RestorePassword],
		mutationFn: (data: RestorePasswordFormData) =>
			authService.main(AuthTypes.RestorePassword, data, recaptchaRef?.current?.getValue()),
		onSuccess() {
			startTransition(() => {
				reset()
				toast.success('Password reset email sent!')
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) { 
				if(!!error.response?.data?.errors?.length) {
					const errorMessages = error.response.data.errors.map((errorItem: { message: string }) => errorItem.message).join('\n');
					toast.error(`Errors:\n ${errorMessages}`);
				} else {
					toast.error(`Error:\n ${error.response?.data?.message || 'Unknown error'}`);
				}
			}
		}
	})

	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: [AuthTypes.Login],
		mutationFn: (data: LoginFormData) =>
			authService.main(AuthTypes.Login, data, recaptchaRef?.current?.getValue()),
		onSuccess() {
			startTransition(() => {
				reset()
				router.push(PUBLIC_PAGES.HOME)
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) { 
				if(!!error.response?.data?.errors?.length) {
					const errorMessages = error.response.data.errors.map((errorItem: { message: string }) => errorItem.message).join('\n');
					toast.error(`Errors:\n ${errorMessages}`);
				} else {
					toast.error(`Error:\n ${error.response?.data?.message || 'Unknown error'}`);
				}
			}
		}
	})

	const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
		mutationKey: [AuthTypes.Register],
		mutationFn: (data: RegisterFormData) =>
			authService.main(AuthTypes.Register, data, recaptchaRef?.current?.getValue()),
		onSuccess() {
			startTransition(() => {
				reset()
				router.push(PUBLIC_PAGES.HOME)
			})
		},
		onError(error) {
			if (axios.isAxiosError(error)) { 
				if(!!error.response?.data?.errors?.length) {
					const errorMessages = error.response.data.errors.map((errorItem: { message: string }) => errorItem.message).join('\n');
					toast.error(`Errors:\n ${errorMessages}`);
				} else {
					toast.error(`Error:\n ${error.response?.data?.message || 'Unknown error'}`);
				}
			}
		}
	})

	const onSubmit: SubmitHandler<FormData> = data => {
		const token = recaptchaRef?.current?.getValue()

		if (!token) {
			toast.error('Pass the captcha!')
			return
		}

		if(type === AuthTypes.Login) {
			mutateLogin(data as LoginFormData)
		} else if(type === AuthTypes.Register) {
			mutateRegister(data as RegisterFormData)
		 } else {
			mutatePasswordReset(data as RestorePasswordFormData)
		 }
	}

	const isLoading = isPending || isLoginPending || isRegisterPending || isPasswordResetPending

	return {
		register,
		handleSubmit,
		onSubmit,
		recaptchaRef,
		errors,
		isLoading,
		watch
	}
}
