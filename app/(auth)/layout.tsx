import { Metadata } from "next"
import { Inter } from "next/font/google"

import Providers from "@/providers/Providers"

import { authStyles } from "./auth/Auth.css"
import "../../styles/index.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "BudgetBuddy",
	description: "App for home accounting",
}

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
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
