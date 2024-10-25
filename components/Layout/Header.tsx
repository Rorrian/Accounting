import clsx from "clsx"
import React from "react"

type AuthType = "register" | "login" | "restorePassword"

interface HeaderProps {
	className?: string
	type?: AuthType
}

export const Header = ({ className, type }: HeaderProps) => {
	return <div className={clsx("header", className)}>Header</div>
}
