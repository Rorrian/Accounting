import { ProfileInfo } from "@/components/ProfileInfo/ProfileInfo";
import { getServerAuth } from "@/helpers/server/get-server-auth";
import { notFound } from "next/navigation";

export default async function DashboardPage() {
	const user = await getServerAuth()

	if (!user?.isLoggedIn) return notFound()

	return (
		<div>
			<h1>Dashboard</h1>
			<p>(only for loggedIn user)</p>
			<br />
			<p>Для проверки прав, есть страница: /admin</p>
			<br />

			<ProfileInfo />
		</div>
  )
}
