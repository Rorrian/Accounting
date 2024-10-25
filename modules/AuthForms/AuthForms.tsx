"use client"

import { AnimatePresence, motion, Point } from "framer-motion"
import { useState } from "react"

import { AuthTypes, MIN_SWIPE_FORCE } from "@/helpers/constants"

import { authFormStyles } from "./AuthForms.css"
import { RestorePasswordForm } from "./RestorePasswordForm/RestorePasswordForm"
import { LoginForm } from "./LoginForm/LoginForm"
import { RegisterForm } from "./RegisterForm/RegisterForm"

// TODO: добавить рекапчу на каждую форму

interface AuthFormsProps {
	className?: string
}

const DIRECTION_PREV = -1
const DIRECTION_NEXT = 1

export const AuthForms = ({ className }: AuthFormsProps) => {
	const [currentFormIndex, setCurrentFormIndex] = useState(2)
	const [direction, setDirection] = useState(0)

	const forms = [
		{
			type: AuthTypes.restorePassword,
			component: (
				<RestorePasswordForm
					className={authFormStyles.form}
					onSignIn={() => switchForm(DIRECTION_NEXT)}
				/>
			),
		},
		{
			type: AuthTypes.login,
			component: (
				<LoginForm
					className={authFormStyles.form}
					onRestorePassword={() => switchForm(DIRECTION_PREV)}
					onSignUp={() => switchForm(DIRECTION_NEXT)}
				/>
			),
		},
		{
			type: AuthTypes.register,
			component: (
				<RegisterForm
					className={authFormStyles.form}
					onSignIn={() => switchForm(DIRECTION_PREV)}
				/>
			),
		},
	]
	const currentForm = forms[currentFormIndex]

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}),
	}

	const calcSwipeForce = (offset: number, velocity: number) =>
		Math.abs(offset) * velocity
	const switchForm = (newDirection: number) => {
		setDirection(newDirection)
		setCurrentFormIndex(
			prevIndex => (prevIndex + newDirection + forms.length) % forms.length
		)
	}
	const handleSwipeEnd = (offset: Point, velocity: Point) => {
		const swipe = calcSwipeForce(offset.x, velocity.x)
		if (swipe < -MIN_SWIPE_FORCE) {
			switchForm(DIRECTION_NEXT)
		} else if (swipe > MIN_SWIPE_FORCE) {
			switchForm(DIRECTION_PREV)
		}
	}

	return (
		<div className={className}>
			<div className={authFormStyles.formBox}>
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						key={currentForm.type}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.5 }}
						// Переключение форм перетаскиванием
						// drag="x"
						// dragConstraints={{ left: 0, right: 0 }}
						// dragElastic={1}
						// onDragEnd={(e, { offset, velocity }) =>
						// 	handleSwipeEnd(offset, velocity)
						// }
						className={authFormStyles.formWrapper}
					>
						{currentForm.component}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}
