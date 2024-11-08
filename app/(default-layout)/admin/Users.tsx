'use client'

import { useQuery } from '@tanstack/react-query'

import UserService from '@/services/user.service'

export function Users() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: () => UserService.fetchList(),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading users. Please try again later.</div>
  }
  const users = data?.data

  return (
    <div>
      <h1>Users</h1>

      {users?.length ? (
        users.map(user => <div key={user.id}>{user.email}</div>)
      ) : (
        <p>No users found!</p>
      )}
    </div>
  )
}
