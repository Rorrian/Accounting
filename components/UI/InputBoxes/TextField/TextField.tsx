import clsx from "clsx"
import React, { forwardRef, LegacyRef, useId } from "react"

import { InputCounter } from "../InputBoxes.types"
import { FooterInput } from "./InputFooter"
import { inputStyles } from "./TextField.css"

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	caption?: string
	counter?: InputCounter
	className?: string
	errorMessage?: string | null
	isValid?: boolean
	label?: string | React.ReactNode
	placeholder?: string
	type?: string
	value?: string
}
// TODO: Валидация данных в соответствии с типом

export const TextField = forwardRef(
	(
		{
			caption,
			counter,
			className,
			errorMessage,
			isValid,
			label,
			placeholder,
			type,
			value,
			...props
		}: TextFieldProps,
		ref: LegacyRef<HTMLInputElement> | undefined
	) => {
		const id = useId()

		return (
			<div className={inputStyles.wrapper}>
				{label && (
					<label className={inputStyles.label} htmlFor={id}>
						{label}
					</label>
				)}
				<input
					ref={ref}
					className={clsx(
						inputStyles.input,
						!isValid && value && inputStyles.invalidInput,
						className)}
					id={id}
					placeholder={placeholder}
					type={type}
					value={value}
					{...props}
				/>

				<FooterInput
					caption={caption}
					counter={counter}
					errorMessage={errorMessage}
					isValid={isValid}
				/>
			</div>
		)
	}
)
