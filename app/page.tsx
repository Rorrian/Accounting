import Link from "next/link"

import { ProfileInfo } from "@/components/ProfileInfo/ProfileInfo"
import { PUBLIC_PAGES } from "@/config/pages/public.config"

export default function Home() {
	return (
		<main>
			<div>
				<h1>TEST</h1>

				<ProfileInfo />

				<ul>
					<li>
						<Link href={PUBLIC_PAGES.HOME}>Home</Link>
					</li>
					<li>
						<Link href={PUBLIC_PAGES.AUTH}>Auth</Link>
					</li>
					<li>
						<Link href={PUBLIC_PAGES.DASHBOARD}>Dashboard</Link>
					</li>
				</ul>
			</div>
		</main>
	)
}
