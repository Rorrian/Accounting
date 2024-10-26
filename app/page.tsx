import Link from "next/link"

import { PUBLIC_PAGES } from "@/config/pages/public.config"
import { ADMIN_PAGES } from "@/config/pages/admin.config"

export default function HomePage() {
	return (
		<main>
			<div>
				<h1>Home</h1>

				<ul style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px'
				}}>
					<li>
						<Link href={PUBLIC_PAGES.HOME}>Home(current)</Link>
					</li>
					<li>
						<Link href={PUBLIC_PAGES.AUTH}>Auth</Link>
					</li>
					<li>
						<Link href={ADMIN_PAGES.HOME}><b>Admin</b></Link>
					</li>
					<li>
						<Link href={PUBLIC_PAGES.DASHBOARD}>Dashboard</Link>
					</li>
				</ul>
			</div>
		</main>
	)
}
