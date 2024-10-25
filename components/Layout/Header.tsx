import clsx from "clsx"
import React from "react"

interface HeaderProps {
	className?: string
}

export const Header = ({ className }: HeaderProps) => {
	return <div className={clsx("header", className)}>Header</div>
}
