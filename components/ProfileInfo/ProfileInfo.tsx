'use client'

import { useRouter } from "next/navigation"

import { removeFromStorage } from "@/services/auth/auth.helper"
import { useProfile } from "@/hooks/useProfile"
import { PUBLIC_PAGES } from "@/config/pages/public.config"

export const ProfileInfo = () => {
	const { push } = useRouter()

	const { user, isLoading } = useProfile()

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
						onClick={() => {
							push(PUBLIC_PAGES.AUTH)
							removeFromStorage()
						}}
					>
						Выйти
					</button>
				</>
			)}
			
		</div>
	)
}
