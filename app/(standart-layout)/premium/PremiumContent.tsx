'use client'

import { useQuery } from '@tanstack/react-query'

import UserService from '@/services/user.service'

export function PremiumContent() {
	const { data, isLoading } = useQuery({
		queryKey: ['premium-content'],
		queryFn: () => UserService.fetchPremium()
	})

	return (
		<div>
			<h1>Only for premium users</h1>
			
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<p>{data?.data.text || 'Not found!'}</p>
			)}
		</div>
	)
}
