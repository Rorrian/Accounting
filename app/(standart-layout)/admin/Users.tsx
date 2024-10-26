'use client'

import { useQuery } from '@tanstack/react-query'

import UserService from '@/services/user.service'

export function Users() {
	const { data, isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: () => UserService.fetchList()
	})

	return (
		<div>
			<h1>Users</h1>
			
			{isLoading ? (
				<div>Loading...</div>
			) : data?.data?.length ? (
				data.data.map(user => <div key={user.id}>{user.email}</div>)
			) : (
				<p>Not found!</p>
			)}
		</div>
	)
}
