"use client"

import clsx from "clsx"
import React from "react"

import LogoSvg from "@/public/images/auth/icons/logo.svg"

import { logoStyles } from "./Logo.css"

export type Size = "big" | "small"

interface LogoProps {
	className?: string
	size?: Size
}

export const Logo = (
	{ className, size = "big" }: LogoProps) => {
	return (
		<div
			className={clsx(logoStyles.logoContainer({ size }), className)}
			onClick={() => window.open("https://budgetbuddy.ru/")}
		>
			<LogoSvg className={logoStyles.icon} />
		</div>
	)
}
