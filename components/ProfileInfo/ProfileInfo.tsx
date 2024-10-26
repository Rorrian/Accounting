'use client'

import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { useMutation } from "@tanstack/react-query"

import { useProfile } from "@/hooks/useProfile"
import { PUBLIC_PAGES } from "@/config/pages/public.config"
import authService from "@/services/auth/auth.service"

export const ProfileInfo = () => {
	const { push } = useRouter()

	const { user, isLoading } = useProfile()

	const [isPending, startTransition] = useTransition()
	
	const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			startTransition(() => {
				push(PUBLIC_PAGES.AUTH)
			})
		}
	})

	const isLogoutLoading = isLogoutPending || isPending

	if (isLoading) {
		return(
			<p>Loading profile data...</p>
		)
	}

	return (
		<div>
			<h2>Привет, {user.name || 'Аноним'}</h2>
			<br />

			{user && (
				<>
					<p className="text-lg">Ваш email: {user.email} </p>
					<br />
					
					<p>Права: {user.rights?.join(', ')}</p>
					<br />

					<button
						onClick={() => mutateLogout()}
						disabled={isLogoutLoading}
					>
						{isLogoutLoading ? 'Выходим...' : 'Выйти'}
					</button>
				</>
			)}
			
		</div>
	)
}
