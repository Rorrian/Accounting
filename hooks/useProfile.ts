import { transformUserToState } from '@/helpers/transform-user-to-state'
import userService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export function useProfile() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.fetchProfile(),
		refetchInterval: 1800000 // 30 minutes in milliseconds
	})

	const profile = data?.data

	const userState = profile ? transformUserToState(profile) : null

	return {
		isLoading,

		user: {
			...profile,
			...userState
		}
	}
}
