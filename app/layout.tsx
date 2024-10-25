import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Providers from "@/providers/Providers"

import "../styles/index.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "BudgetBuddy",
	description: "App for home accounting",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}