import { Metadata } from "next"
import { Inter } from "next/font/google"
import { redirect } from "next/navigation"
import { PropsWithChildren } from "react"

import Providers from "@/providers/Providers"
import { getServerAuth } from "@/helpers/server/get-server-auth"
import { ADMIN_PAGES } from "@/config/pages/admin.config"
import { PUBLIC_PAGES } from "@/config/pages/public.config"

import { authStyles } from "./auth/AuthPage.css"

import "../../styles/index.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "BudgetBuddy",
	description: "App for home accounting",
}

export default async function AuthLayout({
	children,
}: PropsWithChildren<unknown>) {
	const user = await getServerAuth()	

	if (user?.isLoggedIn)
		return redirect(user.isAdmin ? ADMIN_PAGES.HOME : PUBLIC_PAGES.HOME)

	return (
		<html lang="en">
			<head>
				<link rel="preload" href="/images/auth/authBg0.webp" as="image" />
				<link rel="preload" href="/images/auth/authBg1.webp" as="image" />
				<link rel="preload" href="/images/auth/authBg2.webp" as="image" />
				<link rel="preload" href="/images/auth/authBg3.webp" as="image" />
			</head>

			<body className={inter.className}>
				<Providers>
					<div className={authStyles.wrapper}>
						<h1 className="hidden">AUTHENTICATION</h1>

						{/* TODO: Смена картинок при изменении формы*/}
						<div className={authStyles.imageBox} />

						{children}
					</div>
				</Providers>
			</body>
		</html>
	)
}
