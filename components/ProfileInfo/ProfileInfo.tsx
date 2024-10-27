'use client'

import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { useMutation } from "@tanstack/react-query"
import Image from "next/image"

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
			{user?.avatarPath && (
				<Image
					src={user.avatarPath}
					alt="Avatar"
					width={70}
					height={70}
				/>
			)}
			<h2>Hello, {user?.name || 'Anonymous'}</h2>
			<br />

			{user && (
				<>
					<p>
						Your email: {user.email}
						<i>
							({user?.verificationToken ? 'Needs confirmation' : 'Confirmed'})
						</i>
					</p>
					<br />
					
					<p>Rights: {user.rights?.join(', ')}</p>
					<br />

					<button
						onClick={() => mutateLogout()}
						disabled={isLogoutLoading}
					>
						{isLogoutLoading ? 'Logging out...' : 'Log out'}
					</button>
				</>
			)}
			
		</div>
	)
}
