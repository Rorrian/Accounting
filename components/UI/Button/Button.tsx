"use client"

import clsx from "clsx"
import { motion } from "framer-motion"
import { forwardRef, LegacyRef } from "react"

import { ButtonProps } from "@/types/components/button"
import { Justify, Kind, Size } from "@/types/components/button/enums"

import { buttonStyles } from "./Button.css"

export const Button = forwardRef(
	(
		{
			children,
			className,
			disabled = false,
			icon,
			iconClassName,
			justify = Justify.Center,
			kind = Kind.Primary,
			title = "",
			titleClassName,
			type = "button",
			size = Size.Big,
			...props
		}: ButtonProps,
		ref: LegacyRef<HTMLButtonElement> | undefined
	) => (
		<motion.button
			ref={ref}
			disabled={disabled}
			className={clsx(
				buttonStyles.button({
					size,
					kind,
					disabled: disabled,
					justify,
				}),
				className
			)}
			{...props}
			type={type}
			whileTap={{
				scale: 0.95,
			}}
			whileHover={{
				scale: !disabled ? 1.05 : undefined,
			}}
		>
			{icon && (
				<div className={clsx(buttonStyles.icon, iconClassName)}>{icon}</div>
			)}
			{title && (
				<span className={clsx(buttonStyles.title({ size }), titleClassName)}>
					{title}
				</span>
			)}
			{children}
		</motion.button>
	)
)

export const MButton = motion.create(Button)
