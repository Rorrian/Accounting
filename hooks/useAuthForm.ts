import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import authService from '@/services/auth/auth.service'

// TODO: перенести в enum(AuthTypes)
export function useAuthForm(type: 'password-reset' | 'login' | 'register') {
	const { register, handleSubmit, reset, formState, watch } = useForm<any>()
	const { errors } = formState 

	const router = useRouter()

	const { mutate: mutatePasswordReset, isPending: isPasswordResetPending } = useMutation({
		mutationKey: ['password-reset'],
		mutationFn: (data: any) => authService.main('password-reset', data),
		onSuccess() {
			reset()
			toast.success('Password reset email sent!')
			// TODO: что-то еще?
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				console.log("ERROR !!!!!!!!!!!!!!!!!!");
				console.log(error);
				toast.error(error.response?.data?.message)
			}
		}
	})

	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: any) => authService.main('login', data),
		onSuccess() {
			reset()
			router.push('/')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: any) => authService.main('register', data),
		onSuccess() {
			reset()
			router.push('/')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const onSubmit: SubmitHandler<any> = data => {
		// if(type === AuthTypes.login) {
			if(type === 'login') {
			mutateLogin(data)
		} else if(type === 'register') {
			mutateRegister(data)
		 } else {
			mutatePasswordReset(data)
		 }
	}

	const isLoading = isLoginPending || isRegisterPending || isPasswordResetPending

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isLoading,
		watch
	}
}
